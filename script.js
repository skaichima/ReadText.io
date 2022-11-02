const input_btn = document.querySelector("#input-btn");
const options = document.querySelector("#voice")
let voices = speechSynthesis.getVoices();
for (i = 0; i < voices.length; i++) {
    options.innerHTML += `<option value="${voices[i].name}">${voices[i].name}</option>`
    // console.log(voices[i].name)
}
input_btn.addEventListener('click', () =>{
    const text = document.querySelector("#input-text").value;
    if(text){
        let utterance = new SpeechSynthesisUtterance(text);
        let value = options.value;
        voices.forEach(voice => {
            if(value === voice.name) utterance.voice = voice
        });
        speechSynthesis.speak(utterance);
    }
})