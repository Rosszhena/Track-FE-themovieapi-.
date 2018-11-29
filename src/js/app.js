window.getMovies = (api, search) => {
    return fetch(`https://www.omdbapi.com/?apikey=${api}&s=${search}&plot=full&type=movie`)
        .then(response => {
            return response.json()
        })
        .then(data => {
            return data
        })
}