document.addEventListener('DOMContentLoaded', () => {
    const boardElement = document.getElementById('board');
    const newGameButton = document.getElementById('new-game');
    const size = 4;
    let board;
    
    function createBoard() {
        board = [];
        for (let i = 0; i < size; i++) {
            board[i] = [];
            for (let j = 0; j < size; j++) {
                board[i][j] = 0;
            }
        }
        addRandomTile();
        addRandomTile();
        updateBoard();
    }

    function addRandomTile() {
        let emptyTiles = [];
        for (let i = 0; i < size; i++) {
            for (let j = 0; j < size; j++) {
                if (board[i][j] === 0) {
                    emptyTiles.push({ x: i, y: j });
                }
            }
        }
        if (emptyTiles.length > 0) {
            let randomTile = emptyTiles[Math.floor(Math.random() * emptyTiles.length)];
            board[randomTile.x][randomTile.y] = Math.random() < 0.9 ? 2 : 4;
        }
    }

    function updateBoard() {
        boardElement.innerHTML = '';
        for (let i = 0; i < size; i++) {
            for (let j = 0; j < size; j++) {
                let tile = document.createElement('div');
                tile.classList.add('tile');
                tile.setAttribute('data-value', board[i][j]);
                if (board[i][j] > 0) {
                    tile.textContent = board[i][j];
                }
                boardElement.appendChild(tile);
            }
        }
    }

    function slideRow(row) {
        row = row.filter(val => val);
        while (row.length < size) {
            row.push(0);
        }
        return row;
    }

    function combineRow(row) {
        for (let i = 0; i < row.length - 1; i++) {
            if (row[i] === row[i + 1]) {
                row[i] *= 2;
                row[i + 1] = 0;
            }
        }
        return row;
    }

    function slideAndCombine(row) {
        row = slideRow(row);
        row = combineRow(row);
        row = slideRow(row);
        return row;
    }

    function moveLeft() {
        for (let i = 0; i < size; i++) {
            board[i] = slideAndCombine(board[i]);
        }
    }

    function rotateBoard() {
        let newBoard = [];
        for (let i = 0; i < size; i++) {
            newBoard[i] = [];
            for (let j = 0; j < size; j++) {
                newBoard[i][j] = board[size - j - 1][i];
            }
        }
        board = newBoard;
    }

    function moveRight() {
        rotateBoard();
        rotateBoard();
        moveLeft();
        rotateBoard();
        rotateBoard();
    }

    function moveUp() {
        rotateBoard();
        rotateBoard();
        rotateBoard();
        moveLeft();
        rotateBoard();
    }

    function moveDown() {
        rotateBoard();
        moveLeft();
        rotateBoard();
        rotateBoard();
        rotateBoard();
    }

    function handleKeyPress(event) {
        switch (event.key) {
            case 'ArrowLeft':
                moveLeft();
                break;
            case 'ArrowRight':
                moveRight();
                break;
            case 'ArrowUp':
                moveUp();
                break;
            case 'ArrowDown':
                moveDown();
                break;
            default:
                return;
        }
        addRandomTile();
        updateBoard();
        if (isGameOver()) {
            alert('Game Over!');
        }
    }

    function isGameOver() {
        for (let i = 0; i < size; i++) {
            for (let j = 0; j < size; j++) {
                if (board[i][j] === 0) {
                    return false;
                }
                if (i > 0 && board[i][j] === board[i - 1][j]) {
                    return false;
                }
                if (i < size - 1 && board[i][j] === board[i + 1][j]) {
                    return false;
                }
                if (j > 0 && board[i][j] === board[i][j - 1]) {
                    return false;
                }
                if (j < size - 1 && board[i][j] === board[i][j + 1]) {
                    return false;
                }
            }
        }
        return true;
    }

    newGameButton.addEventListener('click', createBoard);
    document.addEventListener('keydown', handleKeyPress);

    createBoard();
});
