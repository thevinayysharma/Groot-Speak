var btn = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var divOutput = document.querySelector("#output");


var serverURL = "https://api.funtranslations.com/translate/groot.json";

function getTranslationURL(inputTxt) {
    return serverURL + "q" + "text=" + inputTxt;
 } 

function erroHandler(error) {
    console.log("error occured", error);
    alert("Oops! Server is busy, please try after some time.");
}

function clickHandler() {
    var inputTxt = txtInput.value;

    fetch(getTranslationURL(inputTxt))
     .then(response => response.json())
     .then(json => {
         var translatedText = json.contents.translated;
         divOutput.innerText = translatedText;
    })
    .catch(erroHandler); 
};


btn.addEventListener("click", clickHandler);
  