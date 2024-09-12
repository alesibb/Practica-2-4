function fibonacci(n) {
    if (n <= 1) {
        return n;
    } else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}

function mostrarFibonacci() {
    const numero = parseInt(document.getElementById('numeroInput').value);
    const resultado = document.getElementById('resultado');

    if (isNaN(numero) || numero <= 0) {
        resultado.textContent = "Por favor, ingrese un número válido mayor a 0.";
        resultado.style.color = "red";
        return;
    }

    let serie = [];
    for (let i = 0; i < numero; i++) {
        serie.push(fibonacci(i));
    }

    resultado.textContent = `Serie de Fibonacci (${numero} términos): ${serie.join(', ')}`;
    resultado.style.color = "green";
}
