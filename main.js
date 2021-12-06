Webcam.set({
width:300,
height:300,
image_format:'jpeg',
jpeg_quality:100
});

camera=document.getElementById("camera");
console.log(camera);

Webcam.attach('#camera');

function capture(){
Webcam.snap(function(data_uri){
document.getElementById("result").innerHTML="<img id='captured_img' 'src="+data_uri+">"
})
}

console.log("ml5.version",ml5.version);
classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/JPF5r8qiL/model.json',modelloaded);

function identify() {
captured_image=document.getElementById("captured_img");
classifier.classify(captured_image,gotresult);
}

function gotresult() {
if (error){
console.log(error)
}
else{
console.log(result)
document.getElementById("result_object_name").innerHTML=result[0].label;
document.getElementById("result_object_accuracy").innerHTML=result[0].confidence.toFixed(2);
}
}
