const { ApolloServer, gql } = require("apollo-server");

const typeDefs = gql`
    type Query{
        hello:String
        isTest: Boolean
    }
    `
const resolvers = {
    Query: {
        hello: () => {
            return "GraphQL API"
        },
        isTest: () => false
    }
}

const server = new ApolloServer({
    typeDefs,
    resolvers
});

server.listen().then(({ url }) => {
    console.log("server is ready at " + url)
})
