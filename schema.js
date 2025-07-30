const { gql } = require('apollo-server-express')
const typeDefs = gql`
  type User {
    id: ID!
    firstName: String!
    lastName: String!
  }

  type Query {
    users: [User!]!
    user(id: ID!): User
  }

  type Mutation {
    createUser(firstName: String!, lastName: String!): User!
    updateUser(id: ID!, firstName: String, lastName: String): User!
    deleteUser(id: ID!): Boolean
  }
`

module.exports = typeDefs
