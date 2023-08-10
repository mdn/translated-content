---
title: SpeechSynthesisUtterance
slug: Web/API/SpeechSynthesisUtterance
---

{{APIRef("Web Speech API")}}{{SeeCompatTable}}

The **`SpeechSynthesisUtterance`** interface of the [Web Speech API](/pt-BR/docs/Web/API/Web_Speech_API) represents a speech request. It contains the content the speech service should read and information about how to read it (e.g. language, pitch and volume.)

## Constructor

- {{domxref("SpeechSynthesisUtterance.SpeechSynthesisUtterance()")}}
  - : Returns a new `SpeechSynthesisUtterance` object instance.

## Properties

_`SpeechSynthesisUtterance` also inherits properties from its parent interface, {{domxref("EventTarget")}}._

- {{domxref("SpeechSynthesisUtterance.lang")}}
  - : Gets and sets the language of the utterance.
- {{domxref("SpeechSynthesisUtterance.pitch")}}
  - : Gets and sets the pitch at which the utterance will be spoken at.
- {{domxref("SpeechSynthesisUtterance.rate")}}
  - : Gets and sets the speed at which the utterance will be spoken at.
- {{domxref("SpeechSynthesisUtterance.text")}}
  - : Gets and sets the text that will be synthesised when the utterance is spoken.
- {{domxref("SpeechSynthesisUtterance.voice")}}
  - : Gets and sets the voice that will be used to speak the utterance.
- {{domxref("SpeechSynthesisUtterance.volume")}}
  - : Gets and sets the volume that the utterance will be spoken at.

### Event handlers

- {{domxref("SpeechSynthesisUtterance.onboundary")}}
  - : Fired when the spoken utterance reaches a word or sentence boundary.
- {{domxref("SpeechSynthesisUtterance.onend")}}
  - : Fired when the utterance has finished being spoken.
- {{domxref("SpeechSynthesisUtterance.onerror")}}
  - : Fired when an error occurs that prevents the utterance from being succesfully spoken.
- {{domxref("SpeechSynthesisUtterance.onmark")}}
  - : Fired when the spoken utterance reaches a named SSML "mark" tag.
- {{domxref("SpeechSynthesisUtterance.onpause")}}
  - : Fired when the utterance is paused part way through.
- {{domxref("SpeechSynthesisUtterance.onresume")}}
  - : Fired when a paused utterance is resumed.
- {{domxref("SpeechSynthesisUtterance.onstart")}}
  - : Fired when the utterance has begun to be spoken.

## Examples

In our basic [Speech synthesiser demo](https://github.com/mdn/dom-examples/tree/main/web-speech-api/speak-easy-synthesis), we first grab a reference to the SpeechSynthesis controller using `window.speechSynthesis`. After defining some necessary variables, we retrieve a list of the voices available using {{domxref("SpeechSynthesis.getVoices()")}} and populate a select menu with them so the user can choose what voice they want.

Inside the `inputForm.onsubmit` handler, we stop the form submitting with [preventDefault()](/pt-BR/docs/Web/API/Event/preventDefault), use the {{domxref("SpeechSynthesisUtterance.SpeechSynthesisUtterance()", "constructor")}} to create a new utterance instance containing the text from the text {{htmlelement("input")}}, set the utterance's {{domxref("SpeechSynthesisUtterance.voice","voice")}} to the voice selected in the {{htmlelement("select")}} element, and start the utterance speaking via the {{domxref("SpeechSynthesis.speak()")}} method.

```js
var synth = window.speechSynthesis;

var inputForm = document.querySelector("form");
var inputTxt = document.querySelector("input");
var voiceSelect = document.querySelector("select");

var voices = synth.getVoices();

for (i = 0; i < voices.length; i++) {
  var option = document.createElement("option");
  option.textContent = voices[i].name + " (" + voices[i].lang + ")";
  option.setAttribute("data-lang", voices[i].lang);
  option.setAttribute("data-name", voices[i].name);
  voiceSelect.appendChild(option);
}

inputForm.onsubmit = function (event) {
  event.preventDefault();

  var utterThis = new SpeechSynthesisUtterance(inputTxt.value);
  var selectedOption = voiceSelect.selectedOptions[0].getAttribute("data-name");
  for (i = 0; i < voices.length; i++) {
    if (voices[i].name === selectedOption) {
      utterThis.voice = voices[i];
    }
  }
  synth.speak(utterThis);
  inputTxt.blur();
};
```

## Especificações

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}

## See also

- [Web Speech API](/pt-BR/docs/Web/API/Web_Speech_API)
