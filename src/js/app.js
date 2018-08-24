window.getMovies = (api, search) => {
return fetch(`http://www.omdbapi.com/?apikey=${api}&s=${search}`)
.then(response =>{
    return response.json()
})
.then(data =>{
    return data
})
}




