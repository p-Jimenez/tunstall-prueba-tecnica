import { MenuItem } from "@/__generated__/graphql";
import { gql } from "@/__generated__";
import { useForm } from "react-hook-form";
import { useMutation } from "@apollo/client";

const UPDATE_MENU_ITEM = gql(/* GraphQL */ `
  mutation UpdateMenuItem(
    $description: String!
    $price: Int!
    $categoryId: String!
    $updateMenuItemId: String!
  ) {
    updateMenuItem(
      description: $description
      price: $price
      categoryId: $categoryId
      id: $updateMenuItemId
    ) {
      id
      description
      price
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

export default function MenuListItem({
  item,
  categoryId,
  onSubmit,
}: {
  item: MenuItem;
  categoryId: string;
  onSubmit?: () => void;
}) {
  const [updateMenuItem] = useMutation(UPDATE_MENU_ITEM);

  const [deleteMenuItem] = useMutation(DELETE_MENU_ITEM);

  const { register, handleSubmit } = useForm<{
    description: string;
    price: number;
  }>({
    defaultValues: {
      description: item.description,
      price: item.price,
    },
  });

  const updateMenuItemHandler = async (data: {
    description: string;
    price: number;
  }) => {
    await updateMenuItem({
      variables: {
        description: data.description,
        price: data.price,
        categoryId: categoryId,
        updateMenuItemId: item.id,
      },
    });
  };

  const onDelete = async () => {
    await deleteMenuItem({ variables: { deleteMenuItemId: item.id } });

    if (onSubmit) {
      onSubmit();
    }
  };

  return (
    <form
      className="flex flex-row items-center justify-between w-full"
      onSubmit={handleSubmit(updateMenuItemHandler)}
    >
      <input
        id={`item-${item.id}`}
        type="text"
        className="p-2 border-2 border-black"
        placeholder="Description"
        {...register("description")}
      />
      <input
        id={`price-${item.id}`}
        type="number"
        className="p-2 border-2 border-black"
        placeholder="Price"
        {...register("price", { min: 0, valueAsNumber: true })}
      />
      <button type="submit" className="p-2 border-2 border-black">
        Save
      </button>
      <button type="button" className="p-2 border-2 border-black" onClick={onDelete}>
        Delete
      </button>
    </form>
  );
}
