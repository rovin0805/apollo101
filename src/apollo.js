import ApolloClient from "apollo-boost";

const client = new ApolloClient({
  uri: " https://movieql2.vercel.app/",
  resolvers: {
    Movie: {
      isLiked: () => false,
    },
    Mutation: {
      likeMovie: (_, { id }, { cache }) => {
        cache.writeData({
          id: `Movie:${id}`,
          data: {
            isLiked: true,
          },
        });
      },
    },
  },
});

export default client;
