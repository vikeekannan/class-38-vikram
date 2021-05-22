var database;
var gameState=0;
var playerCount;
var form,player,game;
var allPlayers;
var cars, car1, car2 , car3, car4;
function setup(){
  database = firebase.database();
  console.log(database);
  createCanvas(displayWidth-20,displayHeight-30);
  game = new Game();
  game.getState();
  game.start();
}

function draw(){
  background("white");
  if(playerCount===4){
    game.update(1);
  }  
  if(gameState===1){
    game.play();
  }
}
