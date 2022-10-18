const testGame = window.game
const  [showPalyfild ,learConsole] = document.querySelectorAll('.btnsConsol')[0].children
const [left, right, down, show, rotate] = document.querySelectorAll('.btnsDirections')[0].children

console.log(game.activePiece.blocks)

learConsole.onclick = function(){
    console.clear()
}

showPalyfild.onclick = function(){
   console.log(game.playfied)
}

left.onclick = function(){
   game.movePieceLeft()
}

right.onclick = function(){
    game.movePieceRight()
}

down.onclick = function(){
    game.movePieceDown()
}

show.onclick = function(){
    game.lockPiece
}

rotate.onclick = function(){
    game.rotatePiece()
    console.log(game.activePiece.blocks)
}
 
let a = new Array(20).fill([]) 
console.log(a)