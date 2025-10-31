import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";

const link = new HttpLink({
    uri: import.meta.env.VITE_GRAPHQL_URL
});

export const client = new ApolloClient({
    link,
    cache: new InMemoryCache()
})
