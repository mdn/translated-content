---
title: SpeechRecognition
slug: Web/API/SpeechRecognition
---

{{APIRef("Web Speech API")}}{{SeeCompatTable}}

Интерфейс **Распознавание голоса** [Web Speech API](/ru/docs/Web/API/Web_Speech_API) является интерфейсом контроллера для сервиса распознавания; который так же перехватывает событие {{domxref("SpeechRecognitionEvent")}}, отправленное сервисом распознавания.

## Конструктор

- {{domxref("SpeechRecognition.SpeechRecognition()")}}
  - : Создаёт новый объект `SpeechRecognition` .

## Свойства

_`SpeechRecognition` наследует свойства от своего родительского интерфейса, {{domxref("EventTarget")}}._

- {{domxref("SpeechRecognition.grammars")}}
  - : Возвращает и устанавливает коллекцию объектов {{domxref("SpeechGrammar")}} грамматики которые будут понятны текущему `SpeechRecognition`.
- {{domxref("SpeechRecognition.lang")}}
  - : Задаёт и возвращает язык текущего `SpeechRecognition`. Если данное свойство не указано по умолчанию, то используется из HTML кода значение атрибута [`lang`](/ru/docs/Web/HTML/Element/html#lang) , или настройки языка агента текущего пользователя.
- {{domxref("SpeechRecognition.continuous")}}
  - : Проверяет возвращается ли непрерывные результаты или вернулся только один. По умолчанию для одиночного значение (`false`.)
- {{domxref("SpeechRecognition.interimResults")}}
  - : Контроллирует, следует ли возвращать промежуточные результаты (`true`) или нет (`false`.) Промежуточные результаты это результаты которые ещё не завершены ( например {{domxref("SpeechRecognitionResult.isFinal")}} свойство ложно.)
- {{domxref("SpeechRecognition.maxAlternatives")}}
  - : Устанавливает максимальное количество предоставленных результатов {{domxref("SpeechRecognitionAlternative")}}. По умолчанию значение 1.
- {{domxref("SpeechRecognition.serviceURI")}}
  - : Определяет местоположение службы распознавания речи, используемой текущим SpeechRecognition, для обработки фактического распознавания. По умолчанию используется речевая служба агента пользователя.

### Обработчики событий

- {{domxref("SpeechRecognition.onaudiostart")}}
  - : Вызывается когда пользовательский агент начал захват аудио.
- {{domxref("SpeechRecognition.onaudioend")}}
  - : Вызывается когда пользовательский агент закончил захват аудио.
- {{domxref("SpeechRecognition.onend")}}
  - : Вызывается когда служба распознавания речи отключилась.
- {{domxref("SpeechRecognition.onerror")}}
  - : Вызывается когда произошла ошибка распознавания речи.
- {{domxref("SpeechRecognition.onnomatch")}}
  - : Вызывается, когда служба распознавания речи возвращает окончательный результат без существенного распознавания. Это может включать определённую степень признания {{domxref("SpeechRecognitionAlternative.confidence","confidence")}} которая не соответствует пороговому значению или превышает его.
- {{domxref("SpeechRecognition.onresult")}}
  - : Вызывается когда возвращает результат — слово или фраза были распознаны положительно, и это было передано обратно в приложение.
- {{domxref("SpeechRecognition.onsoundstart")}}
  - : Вызывается при обнаружении любого звука - не важно, распознана речь или нет.
- {{domxref("SpeechRecognition.onsoundend")}}
  - : Вызывается когда любой звук — распознаваемая речь или нет — перестала распознаваться.
- {{domxref("SpeechRecognition.onspeechstart")}}
  - : Вызывается, когда обнаружен звук, распознаваемый службой распознавания речи как речевой сигнал.
- {{domxref("SpeechRecognition.onspeechend")}}
  - : Вызывается, когда прекращается обнаружение речи, распознанной службой распознавания речи.
- {{domxref("SpeechRecognition.onstart")}}
  - : Вызывается, когда служба распознавания речи начинает обрабатывать входящий звук с намерением распознать грамматики, связанные с текущим распознаванием речи.

## Методы

_Распознавание речи также наследует методы от своего родительского интерфейса, {{domxref("EventTarget")}}._

- {{domxref("SpeechRecognition.abort()")}}
  - : Останавливает обработку входящего аудио службой распознавания речи и не пытается вернуть {{domxref("SpeechRecognitionResult")}}.
- {{domxref("SpeechRecognition.start()")}}
  - : Запускает службу распознавания речи, прослушивая входящее аудио с целью распознавания грамматик, связанных с текущим распознаванием речи.
- {{domxref("SpeechRecognition.stop()")}}
  - : Останавливает обработку входящего аудио службой распознавания речи и пытается вернуть {{domxref("SpeechRecognitionResult")}} Используя уже записанный звук.

## Примеры

В нашем простом примере [Speech color changer](https://github.com/mdn/dom-examples/tree/main/web-speech-api/speech-color-changer) , мы создаём новый объект экземпляра `SpeechRecognition` используя этот конструктор {{domxref("SpeechRecognition.SpeechRecognition", "SpeechRecognition()")}} , создание нового {{domxref("SpeechGrammarList")}}, И установить его в качестве грамматики, которая будет распознаваться экземпляром распознавание речи с использованием свойства {{domxref("SpeechRecognition.grammars")}}.

После определения некоторых других значений мы затем устанавливаем их так, чтобы служба распознавания началась когда произошло событие по клику ( {{domxref("SpeechRecognition.start()")}}.) Когда результат был успешно распознан, the {{domxref("SpeechRecognition.onresult")}} обработчик извлекаем цвет, который был произнесён из события, а затем меняем цвет фона на данный цвет {{htmlelement("html")}}.

```js
var grammar =
  "#JSGF V1.0; grammar colors; public <color> = aqua | azure | beige | bisque | black | blue | brown | chocolate | coral | crimson | cyan | fuchsia | ghostwhite | gold | goldenrod | gray | green | indigo | ivory | khaki | lavender | lime | linen | magenta | maroon | moccasin | navy | olive | orange | orchid | peru | pink | plum | purple | red | salmon | sienna | silver | snow | tan | teal | thistle | tomato | turquoise | violet | white | yellow ;";
var recognition = new SpeechRecognition();
var speechRecognitionList = new SpeechGrammarList();
speechRecognitionList.addFromString(grammar, 1);
recognition.grammars = speechRecognitionList;
//recognition.continuous = false;
recognition.lang = "en-US";
recognition.interimResults = false;
recognition.maxAlternatives = 1;

var diagnostic = document.querySelector(".output");
var bg = document.querySelector("html");

document.body.onclick = function () {
  recognition.start();
  console.log("Ready to receive a color command.");
};

recognition.onresult = function (event) {
  var color = event.results[0][0].transcript;
  diagnostic.textContent = "Result received: " + color;
  bg.style.backgroundColor = color;
};
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- [Web Speech API](/ru/docs/Web/API/Web_Speech_API)
