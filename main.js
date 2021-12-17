//https://teachablemachine.withgoogle.com/models/jULVBR-yS/


Webcam.set({
    width: 350,
    height: 300,
    image_format: "png",
    png_quality: 91
});

camera = document.getElementById("camera");

Webcam.attach(camera)

function take_snapshot() {
    Webcam.snap(function (data_uri) {
        document.getElementById("result").innerHTML = "<img id='capture_image' src= '" + data_uri + "'>"
    })
}

console.log("ml5 version", ml5.version);

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/jULVBR-yS/model.json ', model_loaded);

function model_loaded() {
    console.log("it is load")
}

prediction_1 = ""

function speak() {
    synth = window.speechSynthesis;
    speak_Data1 = "da first prediction iz" + prediction_1
    utterThis = new SpeechSynthesisUtterance(speak_Data1 + "yes lol happy face")
    synth.speak(utterThis);
}

function emoji_select() {
    img = document.getElementById('capture_image');
    classifier.classify(img, got_result)
}



function got_result(error, result) {
    if (error == true) {
        console.log("there is a robberer in your bank account sir")
    } else {
        console.log(result, "to the moon")
        document.getElementById("result_emotion_name").innerHTML = result[0].label
        document.getElementById("result_emotion_name2").innerHTML = result[1].label
        prediction_1 = result[0].label
        prediction_2 = result[1].label
        speak()
        if (result[0].label == "noice") {
            document.getElementById("update_emogi").innerHTML = "insert noice meme"
        }
        if (result[0].label == "thumbs up") {
            document.getElementById("update_emogi").innerHTML = ":D"
        }
        if (result[0].label == "flying animal") {
            document.getElementById("update_emogi").innerHTML = "🕊️"
        }
        if (result[1].label == "noice") {
            document.getElementById("update_emogi2").innerHTML = "noicey"
        }
        if (result[1].label == "thumbs up") {
            document.getElementById("update_emogi2").innerHTML = ":D"
        }
        if (result[1].label == "flying animal") {
            document.getElementById("update_emogi2").innerHTML = "🕊️"
        }
    }
}
}