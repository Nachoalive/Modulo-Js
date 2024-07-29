
const IVA = 1.19;
let valorPvp;
let valorCosto;


do {
    valorPvp = parseFloat(prompt("Ingrese el valor de Venta"));
    if (valorPvp <= 0 || isNaN(valorPvp)) {
        alert("El dato ingresado no es válido para el valor de venta. Intente de nuevo.");
    }
} while (valorPvp <= 0 || isNaN(valorPvp));

do {
    valorCosto = parseFloat(prompt("Ingrese el valor costo"));
    if (valorCosto <= 0 || isNaN(valorCosto)) {
        alert("El dato ingresado no es válido para el costo. Intente de nuevo.");
    }
} while (valorCosto <= 0 || isNaN(valorCosto));

function dividir(n1) {
    return n1 / IVA;
}

const valorNeto = dividir(valorPvp);

const utilidad = valorNeto - valorCosto;

const margen = (utilidad / valorNeto) * 100;

alert("La utilidad es: " + Math.round(utilidad));

alert("El porecntaje de utilidad es de: " + Math.round(margen)+ "%");
