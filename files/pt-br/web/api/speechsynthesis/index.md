---
title: SpeechSynthesis
slug: Web/API/SpeechSynthesis
---

{{APIRef("Web Speech API")}}{{SeeCompatTable}}

A interface **`SpeechSynthesis`** da [Web Speech API](/pt-BR/docs/Web/API/Web_Speech_API) é a interface controladora para o serviço de fala; este pode ser usado para obter informações sobre as vozes sintetizadas disponíveis no dispositivo, reproduzir e pausar uma elocução, além de outros comandos.

## Propriedades

_`SpeechSynthesis` também herda propriedades da sua interface pai, {{domxref("EventTarget")}}._

- {{domxref("SpeechSynthesis.paused")}} {{readonlyinline}}
  - : Um {{domxref("Boolean")}} que retorna `true` se o objeto `SpeechSynthesis` está em estado de pausa.
- {{domxref("SpeechSynthesis.pending")}} {{readonlyinline}}
  - : Um {{domxref("Boolean")}} que retorna `true` se a fila de elocuções contém falas que ainda não foram reproduzidas.
- {{domxref("SpeechSynthesis.speaking")}} {{readonlyinline}}
  - : Um {{domxref("Boolean")}} que retorna `true` se uma elocução está sendo reproduzida atualmente — mesmo que `SpeechSynthesis` esteja em estado de pausa.

### Tratamento de eventos

- {{domxref("SpeechSynthesis.onvoiceschanged")}}
  - : Disparado quando a lista de objetos {{domxref("SpeechSynthesisVoice")}} que pode ser retornada pelo método {{domxref("SpeechSynthesis.getVoices()")}} mudou.

## Métodos

_`SpeechSynthesis` também herda métodos da sua interface pai, {{domxref("EventTarget")}}._

- {{domxref("SpeechSynthesis.cancel()")}}
  - : Remove todas as elocuções da fila para reprodução.
- {{domxref("SpeechSynthesis.getVoices()")}}
  - : Retorna uma lista de objetos {{domxref("SpeechSynthesisVoice")}} representando todas as vozes disponíveis no dispositivo atuall
- {{domxref("SpeechSynthesis.pause()")}}
  - : Deixa o objeto `SpeechSynthesis` em estado de pausa.
- {{domxref("SpeechSynthesis.resume()")}}
  - : Retira o estado de pausa do objeto `SpeechSynthesis`: retoma a reprodução se ele estiver pausado.
- {{domxref("SpeechSynthesis.speak()")}}
  - : Adiciona uma {{domxref("SpeechSynthesisUtterance", "utterance")}} à fila de reprodução; ela será reproduzida assim que todas as elocuções enfileiradas anteriormente tenham sido reproduzidas.

## Exemplos

Na nossa demonstração básica [Speech synthesiser demo](https://github.com/mdn/dom-examples/tree/main/web-speech-api/speak-easy-synthesis), nós primeiro pegamos uma referência para o controlador SpeechSynthesis usando `window.speechSynthesis`. Após definir algumas variáveis necessárias, nós obtemos uma lista de vozes disponíveis usando o método {{domxref("SpeechSynthesis.getVoices()")}} usando-as para popular um menu de seleção de forma que o usuário possa escolher a voz que desejar.

Dentro do tratamento `inputForm.onsubmit`, nós impedimos a submissão do formulário com [preventDefault()](/pt-BR/docs/Web/API/Event/preventDefault), instanciamos uma {{domxref("SpeechSynthesisUtterance")}} contendo o texto presente no {{htmlelement("input")}}, atribuímos a voz da elocução para a voz selecionada no elemento {{htmlelement("select")}}, e iniciamos a reprodução da elocução através do método {{domxref("SpeechSynthesis.speak()")}}.

```js
var synth = window.speechSynthesis;

var inputForm = document.querySelector("form");
var inputTxt = document.querySelector(".txt");
var voiceSelect = document.querySelector("select");

var pitch = document.querySelector("#pitch");
var pitchValue = document.querySelector(".pitch-value");
var rate = document.querySelector("#rate");
var rateValue = document.querySelector(".rate-value");

var voices = [];

function populateVoiceList() {
  voices = synth.getVoices();

  for (i = 0; i < voices.length; i++) {
    var option = document.createElement("option");
    option.textContent = voices[i].name + " (" + voices[i].lang + ")";

    if (voices[i].default) {
      option.textContent += " -- DEFAULT";
    }

    option.setAttribute("data-lang", voices[i].lang);
    option.setAttribute("data-name", voices[i].name);
    voiceSelect.appendChild(option);
  }
}

populateVoiceList();
if (speechSynthesis.onvoiceschanged !== undefined) {
  speechSynthesis.onvoiceschanged = populateVoiceList;
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
  utterThis.pitch = pitch.value;
  utterThis.rate = rate.value;
  synth.speak(utterThis);

  inputTxt.blur();
};
```

## Especificações

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}

## Veja também

- [Web Speech API](/pt-BR/docs/Web/API/Web_Speech_API)
