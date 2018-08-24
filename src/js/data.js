
window.onload = () =>{
let api = "9ec2e051"
let search="Batman"
let key = `http://www.omdbapi.com/?apikey=${api}&s=${search}&plot=full&type=series`;

fetch(key)
.then(response =>response.json())
.then(data =>{
 data;
 //console.log(data)
 document.getElementById("movie").innerHTML = data.Search[0].Title;
//window.getMovies
 
})
.catch(error => {console.log('error');})
}

window.getMovies = (data) => {
      
      console.log(data);
      data.Search.forEach (function(element) {
      
        let array = [];
        array.push(element);
        console.log(array);
        return array
      });
      
    
    
    
  
    
  

}

