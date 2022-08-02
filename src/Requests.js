const key = "37131fdfd0b2826915328ca5c3b259b5";

const requests = {
    requestPopular: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`,
    requestTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=1`,
    requestTrending: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=2`,
    requestUpcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=en-US&page=1`,
    requestHorror: `https://api.themoviedb.org/3/search/movie?api_key=${key}&language=en-US&query=horror&page=1&include_adult=true`,
    requestAction: `https://api.themoviedb.org/3/search/movie?api_key=${key}&language=en-US&query=action&page=1&include_adult=true`,
    requestWar: `https://api.themoviedb.org/3/search/movie?api_key=${key}&language=en-US&query=war&page=1&include_adult=true`,
    requestRomantic: `https://api.themoviedb.org/3/search/movie?api_key=${key}&language=en-US&query=romantic&page=1&include_adult=true`
  };

  export default requests