import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
    token
    user{
        email
        _id
        username
        
    }
  }  
}
`;

export const ADD_USER = gql`
mutation addUser($username: String!, $email: String!, password: String!){
  login(username: $username, email: $email, password: $password) {
    token
    user{
      _id
      email
      username
      password
    }
  }
  
}
`

export const SAVE_BOOK = gql`
mutation saveBook($authors: String!, description: String, title: String!, bookId: ID!, image: , link: ) {
  saveBook(authors: $authors, description: $description, title: $title, bookId: $bookId, image: $image, link: $Link) {
    token
    user {
      
    }
  }
}
`

export const REMOVE_BOOK = gql`
mutation removeBook($bookId: ID!) {
  removeBook(bookId: $bookId) {
  token
  user {

  }
}
`

