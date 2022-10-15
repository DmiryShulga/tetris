export default class Game {
    score = 0;
    lines = 0;
    level = 0;
    playfied = [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0,],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0,],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0,],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0,],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0,],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0,],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0,],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0,],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0,],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0,],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0,],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0,],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0,],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0,],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0,],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0,],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0,],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0,],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0,],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0,]
    ];
    activePiece = {
        x: 0,
        y: 0,
      get blocks(){
        return this.rotations[this.rotationsIndex]
      } ,
        rotationsIndex: 0,
        rotations: [
            [
                [0, 1, 0],
                [1, 1, 1],
                [0, 0, 0]
            ],
            [
                [0, 1, 0],
                [0, 1, 1],
                [0, 1, 0]
            ],
            [
                [0, 0, 0],
                [1, 1, 1],
                [0, 1, 0]
            ],
            [
                [0, 1, 0],
                [1, 1, 0],
                [0, 1, 0]
            ],
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

    rotatePiece(){
        this.activePiece.rotationsIndex = (this.activePiece.rotationsIndex + 1) % 4
        return this.activePiece.blocks 
    }

    // Проверка на столкновения фигуры 
    hasCollision() {
        const { y: pieceY, x: pieceX, blocks } = this.activePiece
        for (let y = 0; y < blocks.length; y++) {
            for (let x = 0; x < blocks[y].length; x++) {
                if (
                    blocks[y][x] && (this.playfied[pieceY + y] === undefined || this.playfied[pieceY + y][pieceX + x] === undefined || this.playfied[pieceY + y][pieceX + x])) {
                    return true
                }
            }
        }
        return false
    };
    // Отрисовка фигуры
    lockPiece() {
        const { y: pieceY, x: pieceX, blocks } = this.activePiece
        for (let y = 0; y < blocks.length; y++) {
            for (let x = 0; x < blocks[y].length; x++) {
                if (blocks[y][x]) {
                    this.playfied[pieceY + y][pieceX + x] = blocks[y][x];
                } else {
                }

            }
        }
    }
}