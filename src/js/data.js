window.getMovies = (api, search) => {
 
  let key = `http://www.omdbapi.com/?apikey=${api}&s=${search}&plot=full&type=series`;
 
  fetch(key)
  .then(response =>response.json())
  .then(data =>{
      
      console.log(data);
      data.Search.forEach (function(element) {
        console.log(element);
      });
      
    
  })
  .catch(error => {
      console.log('error');
  })
    
  

}

window.getMovies("9ec2e051","Batman" );