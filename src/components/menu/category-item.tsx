import { Category } from "@/__generated__/graphql";
import MenuListItem from "./menu-list-item";
import NewMenuItemForm from "./new-menu-item-form";
import { gql } from "@/__generated__";
import { useForm } from "react-hook-form";
import { useMutation } from "@apollo/client";

const UPDATE_CATEGORY = gql(/* GraphQL */ `
  mutation UpdateCategory($name: String!, $updateCategoryId: String!) {
    updateCategory(name: $name, id: $updateCategoryId) {
      id
      name
      items {
        id
        description
        price
      }
    }
  }
`);

const DELETE_CATEGORY = gql(/* GraphQL */ `
  mutation DeleteCategory($deleteCategoryId: String!) {
    deleteCategory(id: $deleteCategoryId) {
      id
      name
      items {
        id
        description
        price
      }
    }
  }
`);

const DELETE_MENU_ITEM = gql(/* GraphQL */ `
  mutation DeleteMenuItem($deleteMenuItemId: String!) {
    deleteMenuItem(id: $deleteMenuItemId) {
      id
      description
      price
    }
  }
`);

export default function CategoryItem({
  category,
  onSubmit,
}: {
  category: Category;
  onSubmit?: () => void;
}) {
  const [updateCategory] = useMutation(UPDATE_CATEGORY);

  const [deleteCategory] = useMutation(DELETE_CATEGORY);

  const [deleteMenuItem] = useMutation(DELETE_MENU_ITEM);

  const { register, handleSubmit } = useForm<{
    name: string;
  }>({
    defaultValues: {
      name: category.name,
    },
  });

  const updateCategoryHandler = async (data: { name: string }) => {
    await updateCategory({
      variables: {
        name: data.name,
        updateCategoryId: category.id,
      },
    });
  };

  const onDelete = async () => {
    if (category.items.length > 0) {
      await Promise.all(
        category.items.map((item) =>
          deleteMenuItem({ variables: { deleteMenuItemId: item.id } })
        )
      );
    }

    await deleteCategory({ variables: { deleteCategoryId: category.id } });

    if (onSubmit) {
      onSubmit();
    }
  };

  return (
    <div className="flex flex-col items-center justify-center gap-10 p-4 border-2 border-black w-full">
      <form onSubmit={handleSubmit(updateCategoryHandler)}>
        <div className="flex flex-row items-center justify-between gap-10 w-full">
          <input
            id={`category-${category.id}`}
            type="text"
            className="p-2 border-b-2 border-black"
            placeholder="Name"
            {...register("name")}
          />
          <div>
            <button type="submit" className="p-2 border-2 border-black">
              Save
            </button>
            <button
              type="button"
              className="p-2 border-2 border-black"
              onClick={onDelete}
            >
              Delete
            </button>
          </div>
        </div>
      </form>
      {category.items.length > 0 && (
        <ul className="flex flex-col gap-2">
          {category.items.map((item) => (
            <li key={item.id} className="w-full">
              <MenuListItem
                item={item}
                categoryId={category.id}
                onSubmit={onSubmit}
              />
            </li>
          ))}
        </ul>
      )}
      {category.items.length === 0 && (
        <span className="text-neutral-600">No items</span>
      )}

      <NewMenuItemForm category={category} onSubmit={onSubmit} />
    </div>
  );
}
