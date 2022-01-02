const books = require("../models/books");
const dogs = require("../models/dogs");

const resolvers = {
  Query: {
    books: (parent, args, ctx, info) => books,
    dogs: (obj, args, context, info ) => dogs
  },
  Mutation: {
    addBook: (parent, args, ctx, info) => {
      const { title, author } = args.input;
      books.push({ title, author });
      return books;
    },
    addDog: (obj, args, ctx, info) => {
      dogs.push({...args.input});
      return args.input; // try this later // todo: michelle
    }
  },
};

module.exports = resolvers;

/*
mutation XYZ ($input: ){
  addBook() {
    title
  }

}

{
  "input" {
    "title": "HI"
    "author": "tree"
  }
}

*/