const saludo: string = "Hola, TypeScript!";
console.log(saludo);

// Obtener referencias a los elementos HTML
const inputNota1 = document.getElementById('nota_1') as HTMLInputElement;
const inputNota2 = document.getElementById('nota_2') as HTMLInputElement;
const inputNota3 = document.getElementById('nota_3') as HTMLInputElement;
const btnCalcular = document.getElementById('calcular') as HTMLButtonElement;
const resultado = document.getElementById('resultado') as HTMLParagraphElement;

// Función para calcular el promedio
function calcularPromedio(): void {
    // Convertir los valores a números (parsear)
    const nota1 = parseFloat(inputNota1.value);
    const nota2 = parseFloat(inputNota2.value);
    const nota3 = parseFloat(inputNota3.value);

    // Validar que sean números válidos
    if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3)) {
        resultado.textContent = "Por favor ingresa números válidos en todas las notas.";
        return;
    }

    // Calcular el promedio
    const promedio = (nota1 + nota2 + nota3) / 3;

    // Mostrar el resultado con 2 decimales
    resultado.textContent = `El promedio es: ${promedio.toFixed(2)}`;
}

// Agregar evento click al botón
btnCalcular.addEventListener('click', calcularPromedio);
