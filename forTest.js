const testGame = window.game

const showPalyfild = document.querySelector('.showPlayfied')
const learConsole = document.querySelector('.learConsole')
const show = document.querySelector('.show')
// КОНСОЛЬ

learConsole.onclick = function(){
    console.clear()
}
showPalyfild.onclick = function(){
   console.log(game.playfied)
}
// КОНСОЛЬ
// Передвижение
const left = document.querySelector('.left')
const right = document.querySelector('.right')
const down = document.querySelector('.down')
const rotate = document.querySelector('.rotate')

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
    game.lockPiece()
    console.log(game.playfied)
}
rotate.onclick = function(){
    game.rotatePiece()
    console.log(game.activePiece.blocks)
}
// Передвижение 

