const {gql} = require ('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID!
        username: String!
        email: String!
        bookCount: Int
        savedBooks: [BookSchema]
    }

    type BookSchema {
        bookId: ID!
        description: String
        authors: [String]
        image: String
        link: String
        title: String!
    }

    type Auth {
        token: ID!
        user: User
    }

    type Query {
        me: User
    }

    type Mutation {
        login(email: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth
        // save book parameters need edits
        saveBook(authors: [String], desription: String, title: String, bookId: ID!, image: String , link: String ): User 
        removeBook(bookId: ID!): User
    }

`;

module.exports = typeDefs;