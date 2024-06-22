
let menu = 0;

// Menu nav span | hecho desde javascript

document.getElementById("menu-span").onclick = function () {
	if (menu === 0) {
		document.getElementById("menu-ul").style.display = "block";
		event.stopPropagation();
		menu = 1;
	} else {
		document.getElementById("menu-ul").style.display = "none";
		menu = 0;
	}
};

// Menu nav body | cierra el menu nav cuando se hace click fuera de este

document.body.addEventListener("click", function () {
	if (menu === 1) {
		document.getElementById("menu-ul").style.display = "none";
		menu = 0;
	}
});

// Soluciona el conflicto entre media queries y javascript con el menu nav cuando se cambia el tamaño de pantanlla en modo Desarrollador

window.addEventListener("resize", function() {
	let mediaqueryList = window.matchMedia("(min-width: 651px)");
	if(mediaqueryList.matches) {
		document.getElementById("menu-ul").style.display = "flex";
		menu = 0;
	}
});

window.addEventListener("resize", function() {
	let mediaqueryList = window.matchMedia("(max-width: 650px)");
	if(mediaqueryList.matches) {
		document.getElementById("menu-ul").style.display = "none";
		menu = 0;
	}
});

// Efecto visual sobre my-photo | sube o baja la foto y aumenta o disminuye el grosor del borde ademas de cambiar de color

document.getElementById("my-photo").onmouseover = function () {
	document.getElementById("my-photo").style.border = "9px solid rgb(236, 236, 236)";
	document.getElementById("my-photo").style.margin = "0px";
};

document.getElementById("my-photo").onmouseout = function () {
	document.getElementById("my-photo").style.border = "6px solid rgb(69, 85, 68)";
	document.getElementById("my-photo").style.margin = "6px";
};

// Los valores en la seccion habilidades muestran un numero o una palabra segun el ancho de la pantalla

if ( window.innerWidth < 651 ) {
	small();
}

window.addEventListener("resize", function() {
	let mediaqueryList = window.matchMedia("(max-width: 650px)");
	if(mediaqueryList.matches) {
		small();
	} else {
		big();
	}
});

function small() {
	document.getElementById("habilidad-google-1").innerHTML = "5/5";
	document.getElementById("habilidad-google-2").innerHTML = "5/5";
	document.getElementById("habilidad-mercado").innerHTML = "5/5";
	document.getElementById("habilidad-hubspot").innerHTML = "4/5";
	document.getElementById("habilidad-html-css").innerHTML = "4/5";
	document.getElementById("idioma-es").innerHTML = "5/5";
	document.getElementById("idioma-en").innerHTML = "4/5";
	document.getElementById("idioma-de").innerHTML = "3/5";
};

function big() {
	document.getElementById("habilidad-google-1").innerHTML = "Experto";
	document.getElementById("habilidad-google-2").innerHTML = "Experto";
	document.getElementById("habilidad-mercado").innerHTML = "Experto";
	document.getElementById("habilidad-hubspot").innerHTML = "Avanzado";
	document.getElementById("habilidad-html-css").innerHTML = "Avanzado";
	document.getElementById("idioma-es").innerHTML = "Nativo";
	document.getElementById("idioma-en").innerHTML = "Avanzado";
	document.getElementById("idioma-de").innerHTML = "Competente";
};

// Alineacion vertical entre los items de las secciones experiencia, habilidades, sobre mi, contacto y redes sociables

function ajustar() {
	if ( window.innerWidth > 480 ) {
		let margin = window.getComputedStyle(document.getElementById('exp-content-2'), null).getPropertyValue('margin-left').match(/\d+/)[0];
		let ancho1 = parseInt(document.getElementById("exp-content-2").offsetWidth);
		let ancho2 = parseInt(ancho());
		let maximo = ancho1 + ancho2 + parseInt(margin) + parseInt(margin);
		let diff = ancho1 - ancho2;
		let dife = diff/2;
		document.getElementById("habilidad-google-1").style.paddingRight = diff + "px";
		document.getElementById("habilidad-google-2").style.paddingRight = diff + "px";
		document.getElementById("habilidad-mercado").style.paddingRight = diff + "px";
		document.getElementById("habilidad-hubspot").style.paddingRight = diff + "px";
		document.getElementById("habilidad-html-css").style.paddingRight = diff + "px";
		document.getElementById("idioma-es").style.paddingRight = diff + "px";
		document.getElementById("idioma-en").style.paddingRight = diff + "px";
		document.getElementById("idioma-de").style.paddingRight = diff + "px";
		document.getElementById("exp-content-1").style.marginLeft = dife + "px";
		document.getElementById("hab-content-1").style.marginLeft = dife + "px";
		document.getElementById("exp-content-2").style.marginRight = "-" + dife + "px";
		document.getElementById("hab-content-2").style.marginRight = "-" + dife + "px";
		document.getElementById("sobre-mi-texto").style.maxWidth = maximo + "px";
		document.getElementById("footer-redes").style.maxWidth = maximo + "px";
		document.getElementById("form").style.maxWidth = maximo + "px";
		} else {
		document.getElementById("habilidad-google-1").style.paddingRight = 0;
		document.getElementById("habilidad-google-2").style.paddingRight = 0;
		document.getElementById("habilidad-mercado").style.paddingRight = 0;
		document.getElementById("habilidad-hubspot").style.paddingRight = 0;
		document.getElementById("habilidad-html-css").style.paddingRight = 0;
		document.getElementById("idioma-es").style.paddingRight = 0;
		document.getElementById("idioma-en").style.paddingRight = 0;
		document.getElementById("idioma-de").style.paddingRight = 0;
		document.getElementById("exp-content-1").style.marginLeft = "";
		document.getElementById("hab-content-1").style.marginLeft = "";
		document.getElementById("exp-content-2").style.marginRight = "";
		document.getElementById("hab-content-2").style.marginRight = "";
		document.getElementById("sobre-mi-texto").style.maxWidth = "";
		document.getElementById("footer-redes").style.maxWidth = "";
		document.getElementById("form").style.maxWidth = "";
	}
};

function ancho() {
	let aWidth = 0;
	let aMaximo = 0;
	document.querySelectorAll('.ancho').forEach(function(child) {
	aWidth = parseInt(child.offsetWidth, 10);
	if ( aWidth > aMaximo ) {
		aMaximo = aWidth;
	}
});
	return aMaximo;
};

window.addEventListener("resize", function() {
	ajustar();
});

setTimeout(ajustar, 240);
