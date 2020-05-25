// Set constraints for the video stream
var constraints = { video: { facingMode: "user" }, audio: false };
// Define constants
const cameraView = document.querySelector("#camera--view"),
    cameraOutput = document.querySelector("#camera--output"),
    cameraSensor = document.querySelector("#camera--sensor")
    // cameraTrigger = document.querySelector("#camera--trigger")
// Access the device camera and stream to cameraView
function cameraStart() {
    navigator.mediaDevices
        .getUserMedia(constraints)
        .then(function(stream) {
        track = stream.getTracks()[0];
        cameraView.srcObject = stream;
    })
    .catch(function(error) {
        console.error("Oops. Something is broken.", error);
    });
}
// Take a picture when cameraTrigger is tapped
cameraView.onclick = function() {
      console.log('ok clicked');
    cameraSensor.width = cameraView.videoWidth;
    cameraSensor.height = cameraView.videoHeight;
    cameraSensor.getContext("2d").drawImage(cameraView, 0, 0);
    cameraOutput.src = cameraSensor.toDataURL("image/webp");
    cameraOutput.classList.add("taken");
};

document.getElementById("cameraTrigger").addEventListener('click', function(){
  document.getElementById("cameraTrigger").style.visibility="hidden";
})
// Start the video stream when the window loads
window.addEventListener("load", cameraStart, false);

jQuery(function($){
    $('.textsplit').html(function (i, html) {
    	let letters = html.split("");

      letters.forEach(function(letter,i){
        letters[i] = '<span class="split">'+letter+'</div>';
      });

      $(".textsplit").html(letters);
    })
})
