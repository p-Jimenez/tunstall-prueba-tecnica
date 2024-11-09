import { useQuery, useSubscription } from "@apollo/client";

import Image from "next/image";
import { TableState } from "../../__generated__/graphql";
import { gql } from "@/__generated__";

const GET_TABLES = gql(/* GraphQL */ `
  query GetTables {
    tables {
      id
      state
      request {
        id
        description
        price
      }
    }
  }
`);

const TABLE_SUBSCRIPTION = gql(/* GraphQL */ `
  subscription TableSubscription {
    newTableState {
      id
      state
      request {
        id
        description
        price
      }
    }
  }
`);

const StateImage = ({
  state,
  tooltip,
}: {
  state: TableState;
  tooltip?: string;
}) => {

  switch (state) {
    case TableState.Empty:
      return (
        <Image
          src="/images/empty_table.png"
          alt="Empty Table"
          width={100}
          height={100}
          title={tooltip}
        />
      );
    case TableState.Waiting:
      return (
        <Image
          src="/images/waiting_table.png"
          alt="Waiting Table"
          width={100}
          height={100}
          title={tooltip}
        />
      );
    case TableState.Attended:
      return (
        <Image
          src="/images/attended_table.png"
          alt="Attended Table"
          width={100}
          height={100}
          title={tooltip}
        />
      );
    default:
      return null;
  }
};

export default function TableSection() {
  const {
    data: tablesQuery,
    loading,
    error,
  } = useQuery(GET_TABLES);
  
  useSubscription(TABLE_SUBSCRIPTION);

  const numberFormatter = new Intl.NumberFormat("es-ES", {
    style: "currency",
    currency: "EUR",
    minimumFractionDigits: 2,
  });

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="flex flex-col items-center justify-center gap-10">
      <h2 className="text-2xl font-bold">Tables</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-10 gap-8">
        {tablesQuery?.tables.map((table) => (
          <div className="flex flex-col items-center justify-center" key={table.id}>
            <h3>Table {table.id}</h3>
            <StateImage
              state={table.state}
              tooltip={
                table.request && table.request?.length > 0
                  ? `${table.request?.reduce((acc, items) => {
                      return (
                        acc +
                        `${items.description}: ${numberFormatter.format(
                          items.price
                        )} \n`
                      );
                    }, "")}\nTotal: ${numberFormatter.format(
                      table.request?.reduce((acc, items) => {
                        return acc + items.price;
                      }, 0) as number
                    )}
              `
                  : "No request"
              }
            />
          </div>
        ))}
      </div>
    </div>
  );
}
