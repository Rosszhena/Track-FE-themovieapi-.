let btnWonderWoman = document.getElementById("WonderWoman");
let btnSpiderman = document.getElementById("Spiderman"); 
let btnBatman = document.getElementById("Batman");
let key = "9ec2e051";

btnWonderWoman.addEventListener("click", event => {
    
    window.getMovies(key, "WonderWoman").then((infoPelicula)=>{
        console.log(infoPelicula.Search)
        let peliculas = infoPelicula.Search;
        
        peliculas.forEach(pelicula => {
            if(pelicula.Poster === "N/A"){
                document.getElementById("galeria").innerHTML += "";
                document.getElementById("galeria").innerHTML += `<div><h1>${pelicula.Title}</h1><img src="img/WonderWoman.jpg"></div>`}
            else{
            document.getElementById("galeria").innerHTML += `<div><h1>${pelicula.Title}</h1><img src="
            ${pelicula.Poster}"></div>`}
          });
    })
});



btnBatman.addEventListener("click", event => {
    
    window.getMovies(key, "Batman").then((infoPelicula)=>{
        document.getElementById("galeria").innerHTML += "";
        console.log(infoPelicula.Search)
        let peliculas = infoPelicula.Search;
    
        peliculas.forEach(pelicula => {
            if(pelicula.Poster =="N/A"){
                
                document.getElementById("galeria").innerHTML += `<div><h1>${pelicula.Title}</h1><img src="img/Batman.jpg"></div>`}
            else{
            document.getElementById("galeria").innerHTML += `<div><h1>${pelicula.Title}</h1><img src="
            ${pelicula.Poster}"></div>`}
          });
    })
});

btnSpiderman.addEventListener("click", event => {
    
    window.getMovies(key, "Spiderman").then((infoPelicula)=>{
        
        console.log(infoPelicula.Search)
        let peliculas = infoPelicula.Search;
    
        peliculas.forEach(pelicula => {
            if(pelicula.Poster =="N/A"){
                document.getElementById("galeria").innerHTML += "";
                document.getElementById("galeria").innerHTML += `<div><h1>${pelicula.Title}</h1><img src="img/Spider-Man.jpg"></div>`}
            else{
            document.getElementById("galeria").innerHTML += `<div><h1>${pelicula.Title}</h1><img src="
            ${pelicula.Poster}"></div>`}
          });
    })
});