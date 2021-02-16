var canvas=new fabric.Canvas("MyCanvas");
var player_x=10;
var player_y=10;
var block_width=30;
var block_height=30;


var player_object="";
var block_object="";

function player_update(){
 fabric.Image.fromURL("player.png",function(Img){
 player_object=Img;
 player_object.scaleToWidth(150);
 player_object.scaleToHeight(140);
 player_object.set({top:player_y,left:player_x});

 }); 
 canvas.add(player_object);  
}

function new_image(get_img){
 fabric.image.fromURL(get_img,function(Img){
 block_object=Img;
 block_object.scaleToWidth(block_width);
 block_object.scaleToHeight(block_height);
 block_object.set({top:player_y,left:player_x});   
 });   
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e){
keypressed=e.keycode;
if(keypressed=="37"){
left();   
}
if(keypressed=="38"){
 up();  
}
if(keypressed=="39"){
 right();   
}
if(keypressed=="40"){
down();
}


if(keypressed=="87"){
new_image("wall.jpg");
console.log("w for 87");
}
if(keypressed=="71"){
 new_image("ground.png");  
 console.log("g for 71") ;
}
if(keypressed=="76"){
new_image("light_green.png");
console.log("l for 76");   
}
if(keypressed=="84"){
new_image("trunk.jpg");  
console.log('t for 84');  
}
if(keypressed=="82"){
 new_image("roof.jpg"); 
 console.log("r for 82");  
}
if(keypressed=="89"){
 new_image("yellow_wall.png"); 
 console.log("y for 89") ; 
}
if(keypressed=="67"){
new_image("cloud.jpg");
console.log(" c for 67");    
}
if(keypressed=="68"){
new_image("dark_green.png");
console.log(" d for 68");  

}
if(keypressed=="85"){
new_image("unique.png");  
console.log(" u for 85");   
}

if(e.shiftKey==true && keypressed=="80"){
 block_width=block_width+10;
 block_height=block_height+10;
 document.getElementById("Current_width").innerHTML=block_width;
 document.getElementById("Current_height").innerHTML=block_height;   
}
if(e.shiftKey==true && keypressed=="77"){
    block_width=block_width-10;
    block_height=block_height-10;
    document.getElementById("Current_width").innerHTML=block_width;
    document.getElementById("Current_height").innerHTML=block_height;   
   }



}

function up(){
if(player_y >=0){
 player_y= player_y-block_height;
 canvas.remove(player_object);
 player_update();   
}    
}

function down(){
if(player_y <=550){
 player_y=player_y+block_height;
 canvas.remove(player_object);
 player_update();
}    
}

function left(){
 if(player_x >=0){
 player_x=player_x-block_width;
 canvas.remove(player_object);
 player_update();    
 }   
}

function right(){
 if(player_x <=900){
 player_x=player_x+block_width;
 canvas.remove(player_object);
 player_update();    
 }   
}



