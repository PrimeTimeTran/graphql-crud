const resolvers = require('./resolvers')
const typeDefs = require('./schema')

const express = require('express')
const { ApolloServer } = require('apollo-server-express')

async function startServer() {
  const app = express()
  const server = new ApolloServer({ typeDefs, resolvers })
  await server.start()
  server.applyMiddleware({ app })
  app.listen(4000, () =>
    console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
  )
}
startServer()
