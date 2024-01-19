
function marcarCasilla(row, col) {
    // Marcar la celda clicada
    marcarBoton(row, col);

    if (row >= 0 && row < 8 && col >= 0 && col <= 7) {
        if (row >= 0 && row < 8 && col >= 0 && col <= 6) {
            // Marcar las celdas adyacentes (arriba, abajo, izquierda, derecha)
            marcarBoton(row - 1, col); // arriba
            marcarBoton(row + 1, col); // abajo
            marcarBoton(row, col - 1); // izquierda
            marcarBoton(row, col + 1); // derecha

        } else {
            marcarBoton(row - 1, col); // arriba
            marcarBoton(row + 1, col); // abajo
            marcarBoton(row, col - 1); // izquierda 

        }
    }

    if (row >= 0 && row < 8 && col >= 0 && col <= 15) {
        // Marcar celdas opuestas 
        const opoRow = 7 - row;
        const opoCol = 7 - col + 8;

        marcarBoton(opoRow, opoCol);
        marcarBoton(opoRow - 1, opoCol); // arriba
        marcarBoton(opoRow + 1, opoCol); // abajo
        marcarBoton(opoRow, opoCol - 1); // izquierda
        marcarBoton(opoRow, opoCol + 1); // derecha

    }
}

function marcarBoton(row, col) {
    // Verificar si las coordenadas están dentro de los límites del tablero
    if (row >= 0 && row < 8 && col >= 0 && col <= 15) {
        // Marcar el botón con la letra X (o realizar la acción que necesites)
        document.getElementById(row + '_' + col).innerText = 'X';
    }
}



