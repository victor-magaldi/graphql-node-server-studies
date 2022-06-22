const { ApolloServer, gql } = require("apollo-server");
const { getUsers } = require("./resolvers/getBooks");

const typeDefs = gql`
  type Post {
    userId: Int
    id: Int
    title: String
    body: String
  }
  type Query {
    posts: [Post]
  }
`;

// Resolvers define the technique for fetching the types defined in the
// schema. This resolver retrieves books from the "books" array above.
const resolvers = {
  Query: {
    posts: g,
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
