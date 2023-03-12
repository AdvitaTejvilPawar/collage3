var SpeechRecognition = window.webkitSpeechRecognition;
var recognition =  new SpeechRecognition()

function start(){
    document.getElementById("textbox").innerHTML = ""
    recognition.start()
}
recognition.onresult= function(event){
    console.log(event)
    var dialogue = event.results[0][0].transcript
    document.getElementById("textbox").value = dialogue
    if(dialogue=="take my selfie" ){
       speak() 
    }
}

function speak(){
    var synth= window.speechSynthesis;
    dialogue1="Taking your selfie in 5 seconds"
    var speechFormat=new SpeechSynthesisUtterance(dialogue1)
    synth.speak(speechFormat)
     Webcam.attach(camera);

     setTimeout(
function(){
    take_snapshot()
   save()
}
,5000
     )


}
camera=document.getElementById("camera")

Webcam.set({
    width:300,
    height:350,
    image_format:'png',
    png_quality:90

})

function take_snapshot(){
    Webcam.snap(
        function(data_uri){
            document.getElementById("result").innerHTML ='<img id="snap" src="'+data_uri+'">'
        }
    )
}

function save(){
    link=document.getElementById("link")
    img=document.getElementById("snap").src ;
    link.href=img
    link.click()

}

