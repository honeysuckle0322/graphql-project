

const { getMovies, getMovie, getSuggestions } = require('./db');

const resolvers = {
    Query: {
        movies: (_, { rating, limit }) => getMovies(limit, rating),
        movie: (_, { id }) => getMovie(id),
        suggestions: (_, { id }) => getSuggestions(id),
    },
};

module.exports = resolvers;

