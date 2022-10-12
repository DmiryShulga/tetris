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
        blocks : [
            [0, 1, 0],
            [1, 1, 1],
            [0, 0, 0]
        ]
    };
    movePieceLeft(){
        this.activePiece.x -=1
        if(this.isPieceOutOfBounds()){
            this.activePiece.x +=1;
           
        }    
    };

    movePieceRight(){
        this.activePiece.x +=1
        if(this.isPieceOutOfBounds()){
            this.activePiece.x -=1;
        }
           
      
       
    };
    movePieceDown(){
        this.activePiece.y +=1
    };

    isPieceOutOfBounds(){
        const {y: pieceY, x: pieceX, blocks} = this.activePiece
        console.log(pieceX)
        for(let y = 0; y < blocks.length; y++ ){
            console.log("блок = " + y )
            for(let x = 0; x < blocks[y].length; x++ ){
                console.log(pieceX + y )
                if(this.playfied[pieceY + y] === undefined || this.playfied[pieceY + y][pieceX + x] === undefined){

                    return true
                }
            }
        }
        return false
    };

    lockPiece(){
        const {y: pieceY, x: pieceX, blocks} = this.activePiece
        for(let y = 0; y < blocks.length; y++ ){
            for(let x = 0; x < blocks[y].length; x++ ){
                this.playfied[pieceY + y][pieceX + x] = blocks[y][x];
            }
        }
    }
}