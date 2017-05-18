document.getElementsByClassName("contenido");

// call al boton 
document.getElementById("sumar").addEventListener("click",

function sumar(){
// llamo los id que cree en el html 
	var caja = document.getElementById("cajaNueva");
	var nuevoContenido =  document.getElementById("contenido");
	nuevoContenido.setAttribute("id","listaNueva");

	//creo un elemento nuevo llamado botooon
	var botooon = document.createElement("button");
	botooon.setAttribute("type", "submit"); // le asigno atributos
	botooon.setAttribute("id","buton"); // le asigno id

	var boton_texto = document.createTextNode("Añadir"); 


	var tareaNueva = document. createElement("textoTarea");
	tareaNueva.setAttribute = ("placeholder", "Añade una lista");
	tareaNueva.setAttribute = ("id", "tareaNueva")

	caja.appendChild(tareaNueva);

	caja.appendChild(botooon);
	botooon.appendChild(boton_texto);



	document.getElementById("buton").addEventListener("click",
		function newTarea(){


		})



	})
;

