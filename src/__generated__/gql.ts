/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 * Learn more about it here: https://the-guild.dev/graphql/codegen/plugins/presets/preset-client#reducing-bundle-size
 */
const documents = {
    "\n  mutation CreateCategory($name: String!) {\n    createCategory(name: $name) {\n      id\n      name\n      items {\n        id\n        description\n        price\n      }\n    }\n  }\n": types.CreateCategoryDocument,
    "\n  mutation UpdateCategory($name: String!, $updateCategoryId: String!) {\n    updateCategory(name: $name, id: $updateCategoryId) {\n      id\n      name\n      items {\n        id\n        description\n        price\n      }\n    }\n  }\n": types.UpdateCategoryDocument,
    "\n  mutation DeleteCategory($deleteCategoryId: String!) {\n    deleteCategory(id: $deleteCategoryId) {\n      id\n      name\n      items {\n        id\n        description\n        price\n      }\n    }\n  }\n": types.DeleteCategoryDocument,
    "\n  mutation DeleteMenuItem($deleteMenuItemId: String!) {\n    deleteMenuItem(id: $deleteMenuItemId) {\n      id\n      description\n      price\n    }\n  }\n": types.DeleteMenuItemDocument,
    "\n  mutation UpdateMenuItem(\n    $description: String!\n    $price: Int!\n    $categoryId: String!\n    $updateMenuItemId: String!\n  ) {\n    updateMenuItem(\n      description: $description\n      price: $price\n      categoryId: $categoryId\n      id: $updateMenuItemId\n    ) {\n      id\n      description\n      price\n    }\n  }\n": types.UpdateMenuItemDocument,
    "\n  query GetMenu {\n    menu {\n      categories {\n        id\n        name\n        items {\n          id\n          description\n          price\n        }\n      }\n    }\n  }\n": types.GetMenuDocument,
    "\n  mutation CreateMenuItem(\n    $description: String!\n    $price: Int!\n    $categoryId: String!\n  ) {\n    createMenuItem(\n      description: $description\n      price: $price\n      categoryId: $categoryId\n    ) {\n      id\n      description\n      price\n    }\n  }\n": types.CreateMenuItemDocument,
    "\n  query GetTables {\n    tables {\n      id\n      state\n      request {\n        id\n        description\n        price\n      }\n    }\n  }\n": types.GetTablesDocument,
    "\n  subscription TableSubscription {\n    newTableState {\n      id\n      state\n      request {\n        id\n        description\n        price\n      }\n    }\n  }\n": types.TableSubscriptionDocument,
};

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function gql(source: string): unknown;

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation CreateCategory($name: String!) {\n    createCategory(name: $name) {\n      id\n      name\n      items {\n        id\n        description\n        price\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation CreateCategory($name: String!) {\n    createCategory(name: $name) {\n      id\n      name\n      items {\n        id\n        description\n        price\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation UpdateCategory($name: String!, $updateCategoryId: String!) {\n    updateCategory(name: $name, id: $updateCategoryId) {\n      id\n      name\n      items {\n        id\n        description\n        price\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation UpdateCategory($name: String!, $updateCategoryId: String!) {\n    updateCategory(name: $name, id: $updateCategoryId) {\n      id\n      name\n      items {\n        id\n        description\n        price\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation DeleteCategory($deleteCategoryId: String!) {\n    deleteCategory(id: $deleteCategoryId) {\n      id\n      name\n      items {\n        id\n        description\n        price\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation DeleteCategory($deleteCategoryId: String!) {\n    deleteCategory(id: $deleteCategoryId) {\n      id\n      name\n      items {\n        id\n        description\n        price\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation DeleteMenuItem($deleteMenuItemId: String!) {\n    deleteMenuItem(id: $deleteMenuItemId) {\n      id\n      description\n      price\n    }\n  }\n"): (typeof documents)["\n  mutation DeleteMenuItem($deleteMenuItemId: String!) {\n    deleteMenuItem(id: $deleteMenuItemId) {\n      id\n      description\n      price\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation UpdateMenuItem(\n    $description: String!\n    $price: Int!\n    $categoryId: String!\n    $updateMenuItemId: String!\n  ) {\n    updateMenuItem(\n      description: $description\n      price: $price\n      categoryId: $categoryId\n      id: $updateMenuItemId\n    ) {\n      id\n      description\n      price\n    }\n  }\n"): (typeof documents)["\n  mutation UpdateMenuItem(\n    $description: String!\n    $price: Int!\n    $categoryId: String!\n    $updateMenuItemId: String!\n  ) {\n    updateMenuItem(\n      description: $description\n      price: $price\n      categoryId: $categoryId\n      id: $updateMenuItemId\n    ) {\n      id\n      description\n      price\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetMenu {\n    menu {\n      categories {\n        id\n        name\n        items {\n          id\n          description\n          price\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetMenu {\n    menu {\n      categories {\n        id\n        name\n        items {\n          id\n          description\n          price\n        }\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation CreateMenuItem(\n    $description: String!\n    $price: Int!\n    $categoryId: String!\n  ) {\n    createMenuItem(\n      description: $description\n      price: $price\n      categoryId: $categoryId\n    ) {\n      id\n      description\n      price\n    }\n  }\n"): (typeof documents)["\n  mutation CreateMenuItem(\n    $description: String!\n    $price: Int!\n    $categoryId: String!\n  ) {\n    createMenuItem(\n      description: $description\n      price: $price\n      categoryId: $categoryId\n    ) {\n      id\n      description\n      price\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetTables {\n    tables {\n      id\n      state\n      request {\n        id\n        description\n        price\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetTables {\n    tables {\n      id\n      state\n      request {\n        id\n        description\n        price\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  subscription TableSubscription {\n    newTableState {\n      id\n      state\n      request {\n        id\n        description\n        price\n      }\n    }\n  }\n"): (typeof documents)["\n  subscription TableSubscription {\n    newTableState {\n      id\n      state\n      request {\n        id\n        description\n        price\n      }\n    }\n  }\n"];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;