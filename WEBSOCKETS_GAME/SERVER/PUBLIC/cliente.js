
const socket = io();

let size = 20;
let r = 12;
let g = 80;
let b = 0;
let ident = 0;

let elements = [];
let cursors = [];

function setup (){
    createCanvas(500,500);
    r= int(Math.random()*255)
    g= int(Math.random()*255)
    b= int(Math.random()*255)
    ident = int (random()*1000)
    console.log ("identificador:", ident)
}

function draw(){
    background(220);

    elements.forEach((element)=>{
        fill(element.r, element.g, element.b);
        ellipse(element.x, element.y, element.size, element.size);
    });

    cursors.forEach((element)=>{
        fill(0,0,0);
        ellipse(element.x, element.y, element.size, element.size);
    });
    
}

function mousePressed (){

    const elemento = {
        x: mouseX,
        y: mouseY,
        r:r,
        g:g,
        b:b,
        size
    };
    socket.emit('send-element', elemento)
}

function mouseDragged (){

    const elemento = {
        x: mouseX,
        y: mouseY,
        r:r,
        g:g,
        b:b,
        size,
        id: ident
    };
    socket.emit('send-cursor', elemento)
}

socket.on('element-received',(element)=>{
console.log ('receiving', element)
elements.push(element)
});

socket.on ('cursor-received', (element) => {
    console.log ('receiving-cursor', element);
    let cursorIndex = cursors.findIndex((item)=>element.id ==item.id)
    if(cursorIndex!=-1){
        cursors[cursorIndex] = element;
    } else {
        cursors.push(element)
    }
})