let btnWonderWoman = document.getElementById("WonderWoman");
let btnSpiderman = document.getElementById("Spiderman"); 
let btnBatman = document.getElementById("Batman");
let btnSearch = document.getElementById("btnSearch");
let key = "9ec2e051";


btnWonderWoman.addEventListener("click", event => {
    document.getElementById("galeria").innerHTML = '';
    window.getMovies(key, "Wonder Woman").then((infoPelicula)=>{
        drawMovies(infoPelicula);
     
    });
});

btnBatman.addEventListener("click", event => {
    document.getElementById("galeria").innerHTML = '';
    window.getMovies(key, "Batman").then((infoPelicula)=>{
        drawMovies(infoPelicula);
    });
});

btnSpiderman.addEventListener("click", event => {
    document.getElementById("galeria").innerHTML = "";
    window.getMovies(key, "Spiderman").then((infoPelicula)=>{
        drawMovies(infoPelicula);
    });
});

btnSearch.addEventListener("click", event => {
    document.getElementById("galeria").innerHTML = "";
    let txtSearch = document.getElementById("txtSearch").value;
    console.log(txtSearch)
    window.getMovies(key, txtSearch).then((infoPelicula)=>{
        drawMovies(infoPelicula);
    });
});



const drawMovies = (infoPelicula) =>{
let peliculas = infoPelicula.Search;
        
        peliculas.forEach(pelicula => {
            if(pelicula.Poster === "N/A"){
                
                document.getElementById("galeria").innerHTML += `<div><h1>${pelicula.Title}</h1><img src="img/no-image-found.jpg"></div>`}
            else{
            document.getElementById("galeria").innerHTML += `<div class="card">
            <a href="#" data-toggle="modal" data-target="#id${pelicula.imdbID}">
            <img src="${pelicula.Poster}" alt="" class="card-img-top"></a></div>
            
            <div class="modal fade" id="id${pelicula.imdbID}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>

                    <div class="modal-dialog modal-lg modal-dialog-centered" role="document">
                        
                    <div class="modal-content">
                        <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">${pelicula.Title}</h5>
                        
                        </div>
                        <div class="modal-body">
                                <img src="${pelicula.Poster}" alt="" class="img-fluid rounded">
                        </div>
                        
                    </div>
                    </div>
                </div>`}
          });
    } 