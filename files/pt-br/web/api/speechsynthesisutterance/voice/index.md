---
title: SpeechSynthesisUtterance.voice
slug: Web/API/SpeechSynthesisUtterance/voice
tags:
  - API
  - Experimental
  - Fala
  - SpeechSynthesisUtterance
  - Voz
  - Web Speech API
translation_of: Web/API/SpeechSynthesisUtterance/voice
---
{{APIRef("Web Speech API")}}{{SeeCompatTable}}

A propriedade **`voice`** da interface {{domxref("SpeechSynthesisUtterance")}} retorna e configura a voz que será usada para a fala.

Essa propriedade deve ser configurada para um dos objetos {{domxref("SpeechSynthesisVoice")}} retornado por {{domxref("SpeechSynthesis.getVoices()")}}. Se não for configurada no momento da fala, a voz usada será a determinada como default na propriedade {{domxref("SpeechSynthesisUtterance.lang","lang")}}.

## Sintaxe

```
var myVoice = speechSynthesisUtteranceInstance.voice;
speechSynthesisUtteranceInstance.voice = speechSynthesisVoiceInstance;
```

### Valor

Um objeto {{domxref("SpeechSynthesisVoice")}}.

## Exemplo

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
  synth.speak(utterThis);
  inputTxt.blur();
}
```

## Especificações

| Especificação                                                                        | Status                               | Comentário |
| ------------------------------------------------------------------------------------ | ------------------------------------ | ---------- |
| {{SpecName('Web Speech API', '#dfn-utterancevoice', 'voice')}} | {{Spec2('Web Speech API')}} |            |

## Compatiblidade dos navegadores

{{Compat("api.SpeechSynthesisUtterance.voice")}}

## Veja também

- [Web Speech API](/pt-BR/docs/Web/API/Web_Speech_API)
