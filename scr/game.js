export default class Game {
    score = 0;
    lines = 0;
    level = 0;
    
    playfied = {
    get () {

        let array = []

        for (let i = 0; i < 20; i++) {
            array[i] = new Array(10).fill(0)
        }

        return array
    },
    set lockPiece(value) {
        const { y: pieceY, x: pieceX, blocks } = this.activePiece
        console.log(blocks)
        this.playfied[0][0] = 54
        for (let y = 0; y < blocks.length; y++) {

            for (let x = 0; x < blocks[y].length; x++) {

                if (blocks[y][x]) {
                    console.log("Я работаю")

                    this.playfied[pieceY + y][pieceX + x] = blocks[y][x];
                }
            }
        }
    }
};


activePiece = {
    x: 0,
    y: 0,
    blocks: [
        [0, 1, 0],
        [1, 1, 1],
        [0, 0, 0]
    ]
};

movePieceLeft() {
    this.activePiece.x -= 1

    if (this.hasCollision()) {
        this.activePiece.x += 1;

    }
};

movePieceRight() {
    this.activePiece.x += 1

    if (this.hasCollision()) {
        this.activePiece.x -= 1;
    }


};

movePieceDown() {
    this.activePiece.y += 1

    if (this.hasCollision()) {
        this.activePiece.y -= 1;
    }
};

//  поворот и проверка столкновения фигуры
rotatePiece() {
    const blocks = this.activePiece.blocks
    const lengthBlocks = blocks.length
    const temp = [];

    for (let i = 0; i < lengthBlocks; i++) {
        temp[i] = new Array(lengthBlocks).fill(0)
    }

    for (let y = 0; y < lengthBlocks; y++) {

        for (let x = 0; x < lengthBlocks; x++) {
            temp[x][y] = blocks[lengthBlocks - 1 - y][x]
        }

    }

    this.activePiece.blocks = temp

    if (this.hasCollision) {
        this.activePiece.blocks = blocks
    }
}

// Проверка на столкновения фигуры 
hasCollision() {
    const { y: pieceY, x: pieceX, blocks } = this.activePiece

    for (let y = 0; y < blocks.length; y++) {

        for (let x = 0; x < blocks[y].length; x++) {

            if (
                blocks[y][x] && ((this.playfied[pieceY + y] === undefined || this.playfied[pieceY + y][pieceX + x] === undefined))) {

                return true
            }
        }
    }

    return false
};

    // Отрисовка фигуры
    // set lockPiece(value) {
    //     const { y: pieceY, x: pieceX, blocks } = this.activePiece
    //     console.log(blocks)
    //     this.playfied[0][0] = 54
    //     for (let y = 0; y < blocks.length; y++) {

    //         for (let x = 0; x < blocks[y].length; x++) {

    //             if (blocks[y][x]) {
    //                 console.log("Я работаю")

    //                 this.playfied[pieceY + y][pieceX + x] = blocks[y][x];
    //             }
    //         }
    //     }
    // }
  
}