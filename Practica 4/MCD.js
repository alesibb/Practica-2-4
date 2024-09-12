function mcd(a, b) {
    if (b === 0) {
        return a;
    } else {
        return mcd(b, a % b);
    }
}

function calcularMCD() {
    const numero1 = parseInt(document.getElementById('numero1').value);
    const numero2 = parseInt(document.getElementById('numero2').value);
    const resultado = document.getElementById('resultado');

    if (isNaN(numero1) || isNaN(numero2)) {
        resultado.textContent = "Por favor, ingrese dos números válidos.";
        resultado.style.color = "red";
        return;
    }

    const valorMCD = mcd(numero1, numero2);
    resultado.textContent = `El MCD de ${numero1} y ${numero2} es: ${valorMCD}`;
    resultado.style.color = "green";
}
