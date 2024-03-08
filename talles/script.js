var ancho = document.getElementById("ancho");
var alto = document.getElementById("alto");
var resultado = document.getElementById("talle");
var lectura = document.getElementById("lectura");
var calc = document.getElementById("calcular");


calc.onclick = function () {
    if (ancho.value != "" && alto.value != "") {
        talle = (Number(ancho.value) + Number(alto.value));
        resultado.innerHTML = talle
        console.log(talle);

        if (talle <= 20) { lectura.innerHTML = "Talle S"; }
        else if (talle <= 40) { lectura.innerHTML = "M"; }
        else if (talle <= 60) { lectura.innerHTML = "L"; }
        else if (talle > 30) { lectura.innerHTML = "XL"; }

    } else {
        alert("Debes ingresar ancho y alto.")
    }

};

