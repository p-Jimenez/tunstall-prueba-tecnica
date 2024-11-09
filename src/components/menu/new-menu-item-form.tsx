import { Category } from "@/__generated__/graphql";
import { gql } from "@/__generated__";
import { useForm } from "react-hook-form";
import { useMutation } from "@apollo/client";

const CREATE_MENU_ITEM = gql(/* GraphQL */ `
  mutation CreateMenuItem(
    $description: String!
    $price: Int!
    $categoryId: String!
  ) {
    createMenuItem(
      description: $description
      price: $price
      categoryId: $categoryId
    ) {
      id
      description
      price
    }
  }
`);

export default function NewMenuItemForm({
  category,
  onSubmit,
}: {
  category: Category;
  onSubmit?: () => void;
}) {
  const [createMenuItem] = useMutation(CREATE_MENU_ITEM);

  const { register, handleSubmit, reset } = useForm<{
    description: string;
    price: number;
  }>();

  const createMenuItemHandler = async (data: {
    description: string;
    price: number;
  }) => {
    try {
      await createMenuItem({
        variables: {
          description: data.description,
          price: data.price,
          categoryId: category.id,
        },
      });
      reset();

      if (onSubmit) {
        onSubmit();
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="w-full flex flex-col items-center justify-center gap-4">
      <h2 className="text-lg font-bold">New Item</h2>

      <form
        onSubmit={handleSubmit(createMenuItemHandler)}
        className="w-full flex flex-row"
      >
        <label htmlFor={`item-${category.id}`} className="hidden" aria-hidden>
          Description
        </label>
        <input
          id={`item-${category.id}`}
          type="text"
          className="p-2 border-2 border-black"
          placeholder="Description"
          {...register("description")}
        />
        <label htmlFor={`price-${category.id}`} className="hidden" aria-hidden>
          Price
        </label>
        <input
          id={`price-${category.id}`}
          type="number"
          className="p-2 border-2 border-black"
          placeholder="Price"
          {...register("price", { min: 0, valueAsNumber: true })}
        />
        <button type="submit" className="p-2 border-2 border-black w-full">
          Create
        </button>
      </form>
    </div>
  );
}
