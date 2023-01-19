---
title: SpeechSynthesisUtterance
slug: Web/API/SpeechSynthesisUtterance
---

{{APIRef("Web Speech API")}}{{SeeCompatTable}}

The **`SpeechSynthesisUtterance`** interface of the [Web Speech API](/zh-CN/docs/Web/API/Web_Speech_API) represents a speech request. It contains the content the speech service should read and information about how to read it (e.g. language, pitch and volume.)

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

## Events

Listen to these events using [`addEventListener()`](/zh-CN/docs/Web/API/EventTarget/addEventListener) or by assigning an event listener to the `oneventname` property of this interface.

- [`boundary`](/zh-CN/docs/Web/API/SpeechSynthesisUtterance/boundary_event)
  - : Fired when the spoken utterance reaches a word or sentence boundary.
    Also available via the [`onboundary`](/zh-CN/docs/Web/API/SpeechSynthesisUtterance/onboundary) property.
- [`end`](/zh-CN/docs/Web/API/SpeechSynthesisUtterance/end_event)
  - : Fired when the utterance has finished being spoken.
    Also available via the [`onend`](/zh-CN/docs/Web/API/SpeechSynthesisUtterance/onend) property.
- [`error`](/zh-CN/docs/Web/API/SpeechSynthesisUtterance/error_event)
  - : Fired when an error occurs that prevents the utterance from being succesfully spoken.
    Also available via the [`onerror`](/zh-CN/docs/Web/API/SpeechSynthesisUtterance/onerror) property
- [`mark`](/zh-CN/docs/Web/API/SpeechSynthesisUtterance/mark_event)
  - : Fired when the spoken utterance reaches a named SSML "mark" tag.
    Also available via the [`onmark`](/zh-CN/docs/Web/API/SpeechSynthesisUtterance/onmark) property.
- [`pause`](/zh-CN/docs/Web/API/SpeechSynthesisUtterance/pause_event)
  - : Fired when the utterance is paused part way through.
    Also available via the [`onpause`](/zh-CN/docs/Web/API/SpeechSynthesisUtterance/onpause) property.
- [`resume`](/zh-CN/docs/Web/API/SpeechSynthesisUtterance/resume_event)
  - : Fired when a paused utterance is resumed.
    Also available via the [`onresume`](/zh-CN/docs/Web/API/SpeechSynthesisUtterance/onresume) property.
- [`start`](/zh-CN/docs/Web/API/SpeechSynthesisUtterance/start_event)
  - : Fired when the utterance has begun to be spoken.
    Also available via the [`onstart`](/zh-CN/docs/Web/API/SpeechSynthesisUtterance/onstart) property.

## Examples

In our basic [Speech synthesiser demo](https://mdn.github.io/dom-examples/web-speech-api/speak-easy-synthesis/) ([source](https://github.com/mdn/dom-examples/tree/main/web-speech-api/speak-easy-synthesis)), we first grab a reference to the SpeechSynthesis controller using `window.speechSynthesis`. After defining some necessary variables, we retrieve a list of the voices available using {{domxref("SpeechSynthesis.getVoices()")}} and populate a select menu with them so the user can choose what voice they want.

Inside the `inputForm.onsubmit` handler, we stop the form submitting with {{domxref("Event.preventDefault","preventDefault()")}}, use the {{domxref("SpeechSynthesisUtterance.SpeechSynthesisUtterance()", "constructor")}} to create a new utterance instance containing the text from the text {{htmlelement("input")}}, set the utterance's {{domxref("SpeechSynthesisUtterance.voice","voice")}} to the voice selected in the {{htmlelement("select")}} element, and start the utterance speaking via the {{domxref("SpeechSynthesis.speak()")}} method.

```js
var synth = window.speechSynthesis;
var voices = synth.getVoices();

var inputForm = document.querySelector('form');
var inputTxt = document.querySelector('input');
var voiceSelect = document.querySelector('select');

for(var i = 0; i < voices.length; i++) {
  var option = document.createElement('option');
  option.textContent = voices[i].name + ' (' + voices[i].lang + ')';
  option.value = i;
  voiceSelect.appendChild(option);
}

inputForm.onsubmit = function(event) {
  event.preventDefault();

  var utterThis = new SpeechSynthesisUtterance(inputTxt.value);
  utterThis.voice = voices[voiceSelect.value];
  synth.speak(utterThis);
  inputTxt.blur();
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Web Speech API](/zh-CN/docs/Web/API/Web_Speech_API)
