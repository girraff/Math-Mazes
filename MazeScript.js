var character = document.getElementById("character");
var game = document.getElementById("game");
var interval;
var both = 0;
var counter = 0;
var currentverticals = [];
var mazeIns = document.getElementById("mazeInsert");

//player movement handling

function moveDown(){
    var top = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    if(top<2784){
        character.style.top = top + 80 + "px";
        player_value.style.top = top + 80 + "px";
    }
}

function moveLeft(){
    var left = parseInt(window.getComputedStyle(character).getPropertyValue("left"));
    if(left>64){
        character.style.left = left - 80 + "px";
        player_value.style.left = left - 80 + "px";
    }
}

function moveRight(){
    var left = parseInt(window.getComputedStyle(character).getPropertyValue("left"));
    if(left<2816){
        character.style.left = left + 80 + "px";
        player_value.style.left = left + 80 + "px";
    }
}

function moveUp(){
    var top = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    if(top>96){
        character.style.top = top - 80 + "px";
        player_value.style.top = top - 80 + "px";
    }
}

document.addEventListener("keydown", event => {
    if(both==0){
        both++;
        if(event.key==="ArrowLeft"){
            moveLeft();
            interval = setInterval(moveLeft, 350);
        }
        if(event.key==="ArrowRight"){
            moveRight();
            interval = setInterval(moveRight, 350);
        }
        if(event.key==="ArrowUp"){
            moveUp();
            interval = setInterval(moveUp, 350);
        }
        if(event.key==="ArrowDown"){
            moveDown();
            interval = setInterval(moveDown, 350);
        }
    }
});
document.addEventListener("keyup", event => {
    clearInterval(interval);
    both=0;
});

//walls

mazeIns.onclick = function() {
  placer();
}

function placer() {
  mapVal1 = document.getElementById("mapperValues").value;
  mapVal2 = mapVal1;
  Leng = mapVal1.length / 8;
  for(i=0; i < Leng; i++) {
    readerVal1 = mapVal2.slice(i*8, i*8+4);
    readerVal2 = mapVal2.slice(i*8+4, i*8+8);
    var vertical = document.createElement("div");
    vertical.setAttribute("class", "vertical");
    vertical.setAttribute("id", "vertical"+i);
    let ivertical = document.getElementById("vertical"+i);
    vertical.style.top = readerVal1 + "px";
    vertical.style.left = readerVal2 + "px";
    //vertical.style.top = "40px";
    //vertical.style.left = "40px";
    game.appendChild(vertical);
  }
}
