// The asterisk (*) is used to indicate obstacles.`
const loadFEN = fen => {
    let board = [];
    for (const char of fen) {
        if (!isNaN(parseInt(char))) {
            for (i = 0; i < parseInt(char); i++) {
                board.push('');
            }
        } else if (char !== '/') {
            board.push(char);
        }
    };
    return board;
}