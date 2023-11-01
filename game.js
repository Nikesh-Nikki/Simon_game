let colors=["green","red","yellow","blue"];
let score=0;
let check=0;
let seq=[];
function nextLevel(){
    let next=Math.floor(Math.random()*4);
    seq[score++]=colors[next];
    $("#"+colors[next]).fadeOut().fadeIn();
    $("h1").text("Level - "+score);
    check=0;
}   

document.addEventListener("keydown",function(){
    $(".btn").click(function(){
        let id=this.id;
        $("#"+id).addClass("pressed");
        setTimeout(function(){$("#"+id).removeClass("pressed");},100);
        eval(this.id);
    });
    gameStart();
},{once:true});

function gameStart(){
    score=0;
    check=0;
    nextLevel();
}

function eval(id){
    let aud=new Audio("./sounds/"+id+".mp3");
    aud.play();
    if(seq[check]==id) check++;
    else gameOver();
    if(check==score) nextLevel();
}

function gameOver(){
    $("h1").text("Game over");
    let aud=new Audio("./sounds/"+"wrong"+".mp3");
    aud.play();
    $("body").toggleClass("game-over");
    setTimeout(function(){$("body").toggleClass("game-over");},500);
    document.addEventListener("keydown",gameStart);
}