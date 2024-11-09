import { ApolloClient, HttpLink, InMemoryCache, split } from "@apollo/client";

import { GraphQLWsLink } from '@apollo/client/link/subscriptions';
import constants from "./constants";
import { createClient } from "graphql-ws";
import { getMainDefinition } from "@apollo/client/utilities";

const httpLink = new HttpLink({
  uri: constants.GRAPHQL_URL,
});

const wsLink = new GraphQLWsLink(createClient({
  url: constants.GRAPHQL_WS_URL,
}));

const splitLink = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === "OperationDefinition" &&
      definition.operation === "subscription"
    );
  },
  wsLink,
  httpLink,
);

const client = new ApolloClient({
  link: splitLink,
  cache: new InMemoryCache(),
});

export default client;
