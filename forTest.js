const testGame = window.game

const showPalyfild = document.querySelector('.showPlayfied')
const learConsole = document.querySelector('.learConsole')
const show = document.querySelector('.show')
// КОНСОЛЬ

learConsole.onclick = function(){
    console.clear()
}
showPalyfild.onclick = function(){
    game.rotatePiece()
    console.log(game.activePiece.blocks)
}
// КОНСОЛЬ

console.log(Boolean(0))
// Передвижение
const left = document.querySelector('.left')
const right = document.querySelector('.right')
const down = document.querySelector('.down')

left.onclick = function(){
   game.movePieceLeft()
//    console.clear()
console.log(game.playfied)
}

right.onclick = function(){
    game.movePieceRight()
    console.log(game.playfied)
}
down.onclick = function(){
    game.movePieceDown()
    console.log(game.playfied)
}
show.onclick = function(){
    game.lockPiece()
    console.log(game.playfied)
}
// Передвижение 

