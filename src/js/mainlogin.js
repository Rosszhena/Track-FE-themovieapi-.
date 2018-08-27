const email = document.getElementById('email');
const password = document.getElementById('password');
const btnRegistrar = document.getElementById('registrar');
const email2 = document.getElementById('email2');
const password2 = document.getElementById('password2');
const btnIngreso = document.getElementById('ingreso');
const contenido = document.getElementById('contenido');

btnRegistrar.addEventListener("click", event =>{
window.social.registrar(email.value,password.value);
//window.social.observador();

}
);

btnIngreso.addEventListener("click", event =>{
window.social.ingreso(email2.value,password2.value);
//window.social.observador();

}
);