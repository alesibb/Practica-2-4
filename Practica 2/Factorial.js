function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

function calcularFactorial() {
    const numero = parseInt(document.getElementById('numeroInput').value);
    const resultado = document.getElementById('resultado');

    if (isNaN(numero) || numero < 0) {
        resultado.textContent = "Por favor, ingrese un número válido mayor o igual a 0.";
        resultado.style.color = "red";
        return;
    }

    resultado.textContent = `El factorial de ${numero} es: ${factorial(numero)}`;
    resultado.style.color = "green";
}
