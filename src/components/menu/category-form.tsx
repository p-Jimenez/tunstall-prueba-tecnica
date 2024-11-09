import { gql } from "@/__generated__";
import { useForm } from "react-hook-form";
import { useId } from "react";
import { useMutation } from "@apollo/client";

const CREATE_CATEGORY = gql(/* GraphQL */ `
  mutation CreateCategory($name: String!) {
    createCategory(name: $name) {
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

export default function CategoryForm({ onSubmit }: { onSubmit?: () => void }) {
  const [createCategory] = useMutation(CREATE_CATEGORY);

  const { register, handleSubmit, reset } = useForm<{ name: string }>();

  const createCategoryHandler = async (data: { name: string }) => {
    try {
      await createCategory({ variables: { name: data.name } });
      reset();

      if (onSubmit) {
        onSubmit();
      }
    } catch (error) {
      console.error(error);
    }
  };

  const id = useId();

  return (
    <form
      onSubmit={handleSubmit(createCategoryHandler)}
      className="flex flex-col items-center justify-center gap-4 p-4 w-full"
    >
      <label htmlFor={`category-${id}`} className="text-lg font-bold">
        New Category
      </label>
      <div>
        <input
          id={`category-${id}`}
          type="text"
          className="p-2 border-2 border-black"
          placeholder="Name"
          {...register("name")}
        />
        <button type="submit" className="p-2 border-2 border-black">
          Create
        </button>
      </div>
    </form>
  );
}
