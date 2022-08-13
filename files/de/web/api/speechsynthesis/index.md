---
title: SpeechSynthesis
slug: Web/API/SpeechSynthesis
translation_of: Web/API/SpeechSynthesis
---
{{APIRef("Web Speech API")}}{{SeeCompatTable}}

Die **`SpeechSynthesis`**-Schnittstelle der [Web Speech API](/de/docs/Web/API/Web_Speech_API) ist die Controller-Schnittstelle für den Sprachdienst. Sie kann genutzt werden um Informationen über die Synthesestimmen, die auf dem Gerät verfügbar sind, zu erhalten. Außerdem um die Sprache zu starten, zu pausieren und andere Befehle auszuführen.

## Eigenschaften

_`SpeechSynthesis` erbt ebenfalls Eigenschaften seiner Elternschnittstelle, {{domxref("EventTarget")}}._

- {{domxref("SpeechSynthesis.paused")}} {{readonlyinline}}
  - : Ein {{domxref("Boolean")}} der `true` zurückgibt, wenn das `SpeechSynthesis`-Objekt sich im pausierten Zustand befindet.
- {{domxref("SpeechSynthesis.pending")}} {{readonlyinline}}
  - : Ein {{domxref("Boolean")}} der `true` zurückgibt, wenn die Äußerungen-Warteschlange bisher ungesprochene Äußerungen enthält.
- {{domxref("SpeechSynthesis.speaking")}} {{readonlyinline}}
  - : Ein {{domxref("Boolean")}} der `true` zurückgibt, wenn eine Äußerung aktuell gesprochen wird — auch wenn `SpeechSynthesis` sich aktuell im pausierten Zustand befindet.

### Event-Handler

- {{domxref("SpeechSynthesis.onvoiceschanged")}}
  - : Wird ausgelöst, wenn sich die Liste von {{domxref("SpeechSynthesisVoice")}}-Objekten, die von der {{domxref("SpeechSynthesis.getVoices()")}}-Methode zurückgegeben würde, geändert hat.

## Methoden

_`SpeechSynthesis` erbt ebenfalls Methoden von seiner Elternschnittstelle, {{domxref("EventTarget")}}._

- {{domxref("SpeechSynthesis.cancel()")}}
  - : Entfernt alle Äußerungen aus der Äußerungen-Warteschlange.
- {{domxref("SpeechSynthesis.getVoices()")}}
  - : Gibt eine Liste von {{domxref("SpeechSynthesisVoice")}}-Objecten zurück die alle verfügbaren Stimmen auf dem aktuellen Gerät repräsentiert.
- {{domxref("SpeechSynthesis.pause()")}}
  - : Versetzt das `SpeechSynthesis`-Objekt in den pausierten Zustand.
- {{domxref("SpeechSynthesis.resume()")}}
  - : Versetzt das `SpeechSynthesis`-Object in den nicht-pausierten Zustand: setzt es fort, wenn es bereits pausiert war.
- {{domxref("SpeechSynthesis.speak()")}}
  - : Fügt eine {{domxref("SpeechSynthesisUtterance", "Äußerung")}} Äußerung zur Äußerungen-Warteschlange hinzu; sie wird gesprochen, wenn alle anderen davor eingereihten Äußerungen fertig gesprochen wurden.

## Beispiele

In our basic [Speech synthesiser demo](https://github.com/mdn/web-speech-api/tree/master/speak-easy-synthesis), we first grab a reference to the SpeechSynthesis controller using `window.speechSynthesis`. After defining some necessary variables, we retrieve a list of the voices available using {{domxref("SpeechSynthesis.getVoices()")}} and populate a select menu with them so the user can choose what voice they want.

Inside the `inputForm.onsubmit` handler, we stop the form submitting with [preventDefault()](/de/docs/Web/API/Event/preventDefault), create a new {{domxref("SpeechSynthesisUtterance")}} instance containing the text from the text {{htmlelement("input")}}, set the utterance's voice to the voice selected in the {{htmlelement("select")}} element, and start the utterance speaking via the {{domxref("SpeechSynthesis.speak()")}} method.

```js
var synth = window.speechSynthesis;

var inputForm = document.querySelector('form');
var inputTxt = document.querySelector('.txt');
var voiceSelect = document.querySelector('select');

var pitch = document.querySelector('#pitch');
var pitchValue = document.querySelector('.pitch-value');
var rate = document.querySelector('#rate');
var rateValue = document.querySelector('.rate-value');

var voices = [];

function populateVoiceList() {
  voices = synth.getVoices();

  for(i = 0; i < voices.length ; i++) {
    var option = document.createElement('option');
    option.textContent = voices[i].name + ' (' + voices[i].lang + ')';

    if(voices[i].default) {
      option.textContent += ' -- DEFAULT';
    }

    option.setAttribute('data-lang', voices[i].lang);
    option.setAttribute('data-name', voices[i].name);
    voiceSelect.appendChild(option);
  }
}

populateVoiceList();
if (speechSynthesis.onvoiceschanged !== undefined) {
  speechSynthesis.onvoiceschanged = populateVoiceList;
}

inputForm.onsubmit = function(event) {
  event.preventDefault();

  var utterThis = new SpeechSynthesisUtterance(inputTxt.value);
  var selectedOption = voiceSelect.selectedOptions[0].getAttribute('data-name');
  for(i = 0; i < voices.length ; i++) {
    if(voices[i].name === selectedOption) {
      utterThis.voice = voices[i];
    }
  }
  utterThis.pitch = pitch.value;
  utterThis.rate = rate.value;
  synth.speak(utterThis);

  inputTxt.blur();
}
```

## Spezifikationen

| Spezifikation                                                                            | Status                               | Kommentar |
| ---------------------------------------------------------------------------------------- | ------------------------------------ | --------- |
| {{SpecName('Web Speech API', '#tts-section', 'SpeechSynthesis')}} | {{Spec2('Web Speech API')}} |           |

## Browserkompatibilität

{{Compat("api.SpeechSynthesis")}}

## Siehe auch

- [Web Speech API](/de/docs/Web/API/Web_Speech_API)
