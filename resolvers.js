const { randomUUID } = require('crypto')

const users = [
  { id: randomUUID(), firstName: 'Loi', lastName: 'Tran' },
  { id: randomUUID(), firstName: 'Tammy', lastName: 'Tran' },
  { id: randomUUID(), firstName: 'Merlin', lastName: 'Ambrosius' },
  { id: randomUUID(), firstName: 'Albus', lastName: 'Dumbledore' },
  { id: randomUUID(), firstName: 'Harry', lastName: 'Potter' },
  { id: randomUUID(), firstName: 'Ron', lastName: 'Weasley' },
  { id: randomUUID(), firstName: 'Hermione', lastName: 'Granger' },
]

const resolvers = {
  Query: {
    users: () => users,
    user: (_, { id }) => users.find((u) => u.id === id),
  },
  Mutation: {
    createUser: (_, { firstName, lastName }) => {
      const user = { id: randomUUID(), firstName, lastName }
      users.push(user)
      return user
    },
    updateUser: (_, { id, firstName, lastName }) => {
      const user = users.find((u) => u.id == id)
      if (!user) throw new Error('User not found')

      if (firstName !== undefined) user.firstName = firstName
      if (lastName !== undefined) user.lastName = lastName

      return user
    },
    deleteUser: (_, { id }) => {
      const index = users.findIndex((u) => u.id === id)
      if (index === -1) return false
      users.splice(index, 1)
      return true
    },
  },
}

module.exports = resolvers
