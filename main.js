function iniciar(){
    navigator.mediaDevices.getUserMedia( { audio:true, video:false } );
    classifier=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/mM_W_b-m7/model.json",{probabilityThreshold:0.7} , modelReady);
}
function modelReady(){
    classifier.classify(results);
}
var aubu=0;
var cut=0;
function results(error, results){
    if (error) {
        console.error(error);
    } else {
        var red=Math.floor(Math.random()*255)+1;
        var green=Math.floor(Math.random()*255)+1;
        var blue=Math.floor(Math.random()*255)+1;
    document.getElementById("legenda_de_resultado").innerHTML="som detectado de "+results[0].label;
    document.getElementById("contador_de_resultado").innerHTML="cachorro detectado "+aubu+" gato detectado "+cut;
    document.getElementById("legenda_de_resultado").style.color="rgb("+red+","+green+","+blue+")";
    var imagem=document.getElementById("imagem");
    if (results[0].label=="Latido") {
    imagem.src="aubuu.png";
    aubu=aubu+1;    
    } else if(results[0].label=="Miado") {
        imagem.src="miaau.png";
        cut=cut+1;    
    }
    else{
        imagem.src="https://www.pngkit.com/png/full/147-1471949_share-this-image-cafepress-black-pug-tile-coaster.png";
    }
    }
}