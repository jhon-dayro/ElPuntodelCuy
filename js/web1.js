


function inicio() {

    window.location = "index.html"
    
}
function ubicacion() {

    window.location = "ubicacion.html"

}
function plato() {

    window.location = "platos.html"

}
function informacion() {

    window.location = "informacion.html"

}

function iniciars() {

    window.location = "ingresar.html"

}

function reserva() {

    window.location = "reservas.html"

}





const{ Pool } = require('pg');

const pool = new Pool({

    host: 'ec2-18-210-51-239.compute-1.amazonaws.com',
    database: 'd5ep63v9mbmc6g',
    user: 'yulkyeabrzdkfe',
    password: '0180089ca5de045bd678ecc0f0b5cde53615285fb3baf6b426c24bb4230015f8',
    port: 5432,
    ssl: {
        rejectUnauthorized: false
    }

})



//Definimos variables para los input
var fecha = document.getElementById('fecha');
var hora = document.getElementById('rtb-time');
var comensales = document.getElementById('rtb-party');
var nombre = document.getElementById('rtb-name');
var correo = document.getElementById('rtb-email');
var numeroT = document.getElementById('rtb-phone');
var mensaje = document.getElementById('rtb-message');
var listaReserva = document.getElementById('listareserva');


//Definimos variables para los botones
var btnReservas = document.getElementById('reservas');

//Variable global para almacenar el id de la reserva
var idReserva = "";


//Metodo para almacenar la informacion en la BD. Evento del boton guardar
function guardarReservas() {

    pool.collection("Reservas").add({
            fecha: fecha.value,
            hora: hora.value,
            comensales: comensales.value,
            nombre: nombre.value,
            correo: correo.value,
            numeroT: numeroT.value,
            mensaje: mensaje.value
        

        })
        .then(function(docRef) {
            console.log("Documento guardado: ", docRef.id);
            listarReservas();
        })
        .catch(function(error) {
            console.error("Error: ", error);
        });
        console.log(guardarReservas);

}

//Metodo para listar las Reservas almacenadas en la BD
function listarReservas() {
    listaReserva.innerHTML = "";
    db.collection("Reservas").get().then((querySnapshot) => {
        querySnapshot.forEach(async(doc) => {
            listaReserva.innerHTML += `
                <tr>
                    <td>${doc.data().fecha}</td>
                    <td>${doc.data().hora}</td>
                    <td>${doc.data().comensales}</td>
                    <td>${doc.data().nombre}</td>
                    <td>${doc.data().correo}</td>
                    <td>${doc.data().numeroT}</td>
                    <td>${doc.data().mensaje}</td>
                    <td>
                        <button onclick="leerReservaID('${doc.id}')" type="button" class="btn btn-default fas fa-edit"></button>
                    </td>
                </tr>
            `;
        });
    });
}

var firebaseConfig = {
    apiKey: "AIzaSyDCzArFD3oxhHEi0MaiUiQuQapUqS7SaI0",
    authDomain: "el-punto-del-cuy.firebaseapp.com",
    databaseURL: "https://el-punto-del-cuy.firebaseio.com",
    projectId: "el-punto-del-cuy",
    storageBucket: "el-punto-del-cuy.appspot.com",
    messagingSenderId: "84936050636",
    appId: "1:84936050636:web:94b21474665fa1d707ff69"
  };

  
// Initialize Firebase
  firebase.initializeApp(firebaseConfig);


//Variable para acceder a metodos de firestore
var db = firebase.firestore();



//lee la Reservas y la muestra en los input 
function leerReservaID(id) {;
    idReserva = id;
    btnReservas.classList.add('d-none');
    db.collection("Reservas").doc(id)
        .onSnapshot(async function(doc) {
            fecha.value = doc.data().fecha;
            hora.value = doc.data().hora;
            comensales.value = doc.data().comensales;
            nombre.value = doc.data().nombre;
            correo.value = doc.data().correo;
            numeroT.value = doc.data().numeroT;
            mensaje.value = doc.data().mensaje;

        });
}

function actualizarReserva() {
    var dato = db.collection("Reservas").doc(idReserva);

    dato.update({
        fecha: fecha.value,
        hora: hora.value,
        comensales: comensales.value,
        nombre: nombre.value,
        correo: correo.value,
        numeroT: numeroT.value,
        mensaje: mensaje.value
        
        })
        .then(function() {
            console.log('Reserva actualizada');
            btnReservas.classList.remove('d-none');
            listarReservas();
        })
        .catch(function(err) {
            console.error("Error: ", err);
        })
}

listarReservas();




