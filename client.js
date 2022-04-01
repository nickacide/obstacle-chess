const canvas = document.querySelector('#canvas');
const c = canvas.getContext('2d');
const blackcolor = document.querySelector('#blackcolor');
const whitecolor = document.querySelector('#whitecolor');

const WIDTH = 300;
const HEIGHT = 300;

let BLACKFILL = 'black';
let WHITEFILL = 'white';

canvas.width = WIDTH;
canvas.height = HEIGHT;
let FEN = 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR';
let board = loadFEN(FEN);

c.font = '20px sans Verdana';
const renderBoard = board => {
    let sqWidth = WIDTH / 8;
    let sqHeight = HEIGHT / 8;
    let x = 0;
    let y = 0;
    let inc = 0; //incrementer
    let pieceIndex = 0; // index of corresponding piece to square
    for (row = 0; row < 8; row++) {
        for (column = 0; column < 8; column++) {
            inc++;
            c.fillStyle = inc % 2 ? WHITEFILL : BLACKFILL;
            c.fillRect(x, y, sqWidth, sqHeight);
            c.fillStyle = inc % 2 ? BLACKFILL : WHITEFILL;
            // console.log(x + sqWidth / 2, y + sqHeight / 2);
            c.fillText(board[pieceIndex], x + sqWidth / 2 - c.measureText(board[pieceIndex]).width / 2, y + sqHeight / 1.6);
            x += sqWidth;
            pieceIndex++;
        };
        inc++;
        x = 0;
        y += sqHeight;
    }
};

renderBoard(board);

blackcolor.oninput = e => {
    BLACKFILL = e.target.value;
    renderBoard(board);
}
whitecolor.oninput = e => {
    WHITEFILL = e.target.value;
    renderBoard(board);
}