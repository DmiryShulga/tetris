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
//  поворот и проверка столкновения фигуры
    rotatePiece(){
        this.activePiece.rotationsIndex = this.activePiece.rotationsIndex < 3 ? this.activePiece.rotationsIndex + 1 : 0
        if(this.hasCollision()){
           
            this.activePiece.rotationsIndex = this.activePiece.rotationsIndex > 0 ? this.activePiece.rotationsIndex - 1 : 3
            console.log(` Активный блок ${this.activePiece.rotations}`)
        }
        return this.activePiece.blocks 
    }

    // Проверка на столкновения фигуры 
    hasCollision() {
        const { y: pieceY, x: pieceX, blocks } = this.activePiece
        console.log(blocks)
        for (let y = 0; y < blocks.length; y++) {
            for (let x = 0; x < blocks[y].length; x++) {
                // console.log("Количесто итераций в массиве" +number)
                // console.log(`Выход за пределы поля низ = ${this.playfied[pieceY + y] === undefined} : Проверка блока ${Boolean(blocks[y][x])}`)
                // console.log(`Выход за пределы поля бока ${ this.playfied[pieceY + y][pieceX + x] === undefined} :  Проверка блока ${Boolean(blocks[y][x])} `)
                // console.log(`Столкновения с другой фигурой ${ Boolean(this.playfied[pieceY + y][pieceX + x]) } : Проверка блока ${Boolean(blocks[y][x])} `)
                if (
                    blocks[y][x] && ((this.playfied[pieceY + y] === undefined || this.playfied[pieceY + y][pieceX + x] === undefined) )) {
                    return true
                }
            }
        }
        return false
    };
    // Отрисовка фигуры
    lockPiece() {
        const { y: pieceY, x: pieceX, blocks } = this.activePiece
        console.log(pieceY)
        console.log(blocks)
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