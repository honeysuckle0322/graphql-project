

const axios = require('axios');

const GET_MOVIE_LIST_URL = 'https://yts.am/api/v2/list_movies.json';
const GET_MOVIE_DETAIL_BY_ID_URL = 'https://yts.am/api/v2/movie_details.json';
const GET_MOVIE_SUGGESTIONS_BY_ID_URL = 'https://yts.am/api/v2/movie_suggestions.json';

const getMovies = async (limit, rating) => {

    let params = {};
    if (limit > 0) { params.limit = limit };
    if (rating > 0) { params.minimum_rating = rating };

    const responseFromYTS = await axios({
        method: 'get',
        url: GET_MOVIE_LIST_URL,
        params,
    })

    const { movies } = responseFromYTS.data.data;
    return movies;
};

const getMovie = async id => {
    const responseFromYTS = await axios({
        method: 'get',
        url: GET_MOVIE_DETAIL_BY_ID_URL,
        params: { movie_id: id },
    });

    const { movie } = responseFromYTS.data.data;

    return movie;

}

const getSuggestions = async id => {
    const responseFromYTS = await axios({
        method: 'get',
        url: GET_MOVIE_SUGGESTIONS_BY_ID_URL,
        params: { movie_id: id },
    });

    const { movies } = responseFromYTS.data.data;

    return movies;
}

module.exports = {
    getMovies,
    getMovie,
    getSuggestions,
};

