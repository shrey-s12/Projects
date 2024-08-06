const chessBoard1 = document.getElementById('chessBoard');
let count = 0;
for (let r = 0; r < 8; r++) {
    for (let c = 0; c < 8; c++) {
        let square = document.createElement('div');
        square.innerText = count;
        count++;

        if ((r + c) % 2 == 0) {
            square.className = 'black';
        } else {
            square.className = 'white';
        }
        chessBoard1.append(square);
    }
}