---
title: SpeechSynthesisUtterance.lang
slug: Web/API/SpeechSynthesisUtterance/lang
---

{{APIRef("Web Speech API")}} {{SeeCompatTable}}
{{domxref("SpeechSynthesisUtterance")}}インターフェースの**lang**プロパティは、発話の言語を取得、設定します。

If unset, the app's (i.e. the {{htmlelement("html")}} {{htmlattrxref("lang", "html")}} value) lang will be used, or the user-agent default if that is unset too.

## Syntax

```
var myLang = speechSynthesisUtteranceInstance.lang;
speechSynthesisUtteranceInstance.lang = 'en-US';
```

### Value

A {{domxref("DOMString")}} representing a BCP 47 language tag.

## Examples

```js
var synth = window.speechSynthesis;

var inputForm = document.querySelector('form');
var inputTxt = document.querySelector('input');
var voiceSelect = document.querySelector('select');

var voices = synth.getVoices();

  ...

inputForm.onsubmit = function(event) {
  event.preventDefault();

  var utterThis = new SpeechSynthesisUtterance(inputTxt.value);
  var selectedOption = voiceSelect.selectedOptions[0].getAttribute('data-name');
  for(i = 0; i < voices.length ; i++) {
    if(voices[i].name === selectedOption) {
      utterThis.voice = voices[i];
    }
  }
  utterThis.lang = 'en-US';
  synth.speak(utterThis);
  inputTxt.blur();
}
```

## Specifications

| Specification                                                                    | Status                               | Comment |
| -------------------------------------------------------------------------------- | ------------------------------------ | ------- |
| {{SpecName('Web Speech API', '#dfn-utterancelang', 'lang')}} | {{Spec2('Web Speech API')}} |         |

## Browser compatibility

{{Compat("api.SpeechSynthesisUtterance.lang")}}

## See also

- [Web Speech API](/ja/docs/Web/API/Web_Speech_API)
