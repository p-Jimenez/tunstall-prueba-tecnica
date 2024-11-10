import CategoryForm from "./category-form";
import CategoryItem from "./category-item";
import { gql } from "@/__generated__";
import { useQuery } from "@apollo/client";

const GET_MENU = gql(/* GraphQL */ `
  query GetMenu {
    menu {
      categories {
        id
        name
        items {
          id
          description
          price
        }
      }
    }
  }
`);

export default function MenuSection() {
  const { data, loading, error, refetch } = useQuery(GET_MENU);

  const handleChange = () => {
    refetch();
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="flex flex-col items-center justify-center gap-10">
      <h2 className="text-2xl font-bold">Menu</h2>

      <CategoryForm onSubmit={refetch} />

      {data?.menu.categories.length === 0 && (
        <span className="text-neutral-600">No categories found</span>
      )}

      <div className="flex flex-col items-center justify-center gap-6">
        <h2 className="text-lg font-bold">Categories</h2>
        {data?.menu.categories.map((category) => (
          <CategoryItem
            key={category.id}
            category={category}
            onSubmit={handleChange}
          />
        ))}
      </div>
    </div>
  );
}
