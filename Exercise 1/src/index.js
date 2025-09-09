var saludo = "Hola, TypeScript!";
console.log(saludo);
// Obtener referencias a los elementos HTML
var inputNota1 = document.getElementById('nota_1');
var inputNota2 = document.getElementById('nota_2');
var inputNota3 = document.getElementById('nota_3');
var btnCalcular = document.getElementById('calcular');
var resultado = document.getElementById('resultado');
// Función para calcular el promedio
function calcularPromedio() {
    // Convertir los valores a números (parsear)
    var nota1 = parseFloat(inputNota1.value);
    var nota2 = parseFloat(inputNota2.value);
    var nota3 = parseFloat(inputNota3.value);
    // Validar que sean números válidos
    if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3)) {
        resultado.textContent = "Por favor ingresa números válidos en todas las notas.";
        return;
    }
    // Calcular el promedio
    var promedio = (nota1 + nota2 + nota3) / 3;
    // Mostrar el resultado con 2 decimales
    resultado.textContent = "El promedio es: ".concat(promedio.toFixed(2));
}
// Agregar evento click al botón
btnCalcular.addEventListener('click', calcularPromedio);
