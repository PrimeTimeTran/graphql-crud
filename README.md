# CRUD with GraphQL


## Getting Started

```sh
node app.js

# Checkout the following URL in browser:
http://localhost:4000/graphql
```

## CREATE

```graphql
mutation CreateUser {
  createUser(firstName: "Loi", lastName: "Pan") {
    id
    firstName
    lastName
  }
}
```

## READ

```graphql
query UsersQuery {
  users {
    id
    firstName
    lastName
  }
}
```

```graphql
query UsersById {
  user(id: "3") {
    id
    firstName
    lastName
  }
}
```

## UPDATE

```graphql
mutation UpdateUser {
  updateUser(id: 1, firstName: "Loi Updated") {
    id
    firstName
    lastName
  }
}
```

## DELETE

```graphql
mutation DeleteUser {
  deleteUser(id: "1")
}
```
