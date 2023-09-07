---
title: SpeechSynthesisUtterance
slug: Web/API/SpeechSynthesisUtterance
---

{{APIRef("Web Speech API")}}{{SeeCompatTable}}

The **`SpeechSynthesisUtterance`** interface of the [Web Speech API](/ru/docs/Web/API/Web_Speech_API) represents a speech request. It contains the content the speech service should read and information about how to read it (e.g. language, pitch and volume.)

## Конструктор

- {{domxref("SpeechSynthesisUtterance.SpeechSynthesisUtterance()")}}
  - : Возвращает новый экземпляр объекта `SpeechSynthesisUtterance`

## Свойства

_`SpeechSynthesisUtterance` ещё наследует свойства из его своего родительского интерфейса {{domxref("EventTarget")}}._

- {{domxref("SpeechSynthesisUtterance.lang")}}
  - : Получает и устанавливает язык высказывания.
- {{domxref("SpeechSynthesisUtterance.pitch")}}
  - : Получает и устанавливает высоту, на которой произносится высказывание
- {{domxref("SpeechSynthesisUtterance.rate")}}
  - : Получает и устанавливает скорость, с которой будет произноситься высказывание.
- {{domxref("SpeechSynthesisUtterance.text")}}
  - : Получает и устанавливает текст, который будет синтезироваться при произнесении высказывания.
- {{domxref("SpeechSynthesisUtterance.voice")}}
  - : Получает и устанавливает голос, который будет использоваться для произнесения речи.
- {{domxref("SpeechSynthesisUtterance.volume")}}
  - : Получает и устанавливает громкость, на котором будет произноситься высказывание.

### Обработчики событий

- {{domxref("SpeechSynthesisUtterance.onboundary")}}
  - : Срабатывает, когда произнесённое высказывание достигает границы слова или предложения.
- {{domxref("SpeechSynthesisUtterance.onend")}}
  - : Срабатывает, когда произнесение произнесено.
- {{domxref("SpeechSynthesisUtterance.onerror")}}
  - : Срабатывает, когда возникает ошибка, которая препятствует успешному произнесению высказывания.
- {{domxref("SpeechSynthesisUtterance.onmark")}}
  - : Срабатывает, когда произнесённое высказывание достигает названного тега метки «SSML».
- {{domxref("SpeechSynthesisUtterance.onpause")}}
  - : Срабатывает, когда высказывание приостановлено.
- {{domxref("SpeechSynthesisUtterance.onresume")}}
  - : Срабатывает, когда приостановленное высказывание возобновляется.
- {{domxref("SpeechSynthesisUtterance.onstart")}}
  - : Срабатывает, когда произнесение произнесено.

## Examples

В нашей базовой [Демо-версия синтезатора речи](https://github.com/mdn/dom-examples/tree/main/web-speech-api/speak-easy-synthesis), мы сначала получаем ссылку на контроллер SpeechSynthesis, используя `window.speechSynthesis`. После определения некоторых необходимых переменных мы получаем список доступных голосов, используя {{domxref("SpeechSynthesis.getVoices()")}}, и заполнить меню выбора с ними, чтобы пользователь мог выбрать, какой голос он хочет.

Внутри обработчика `inputForm.onsubmit` мы останавливаем отправку формы с помощью [preventDefault()](/ru/docs/Web/API/Event/preventDefault), используйте {{domxref("SpeechSynthesisUtterance.SpeechSynthesisUtterance()", "constructor")}} для создания нового экземпляра высказывания, содержащего текст из текста {{htmlelement("input")}}, установите {{domxref("SpeechSynthesisUtterance.voice","voice")}}на голос, выбранный в элементе {{htmlelement("select")}} и начните высказывание через {{domxref("SpeechSynthesis.speak()")}} метод.

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

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Web Speech API](/ru/docs/Web/API/Web_Speech_API)
