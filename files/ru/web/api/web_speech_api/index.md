---
title: Web Speech API
slug: Web/API/Web_Speech_API
---

{{DefaultAPISidebar("Web Speech API")}}{{seecompattable}}

Web Speech API позволяет взаимодействовать с голосовыми интерфейсами в ваших веб приложениях. Web Speech API состоит из двух частей: SpeechSynthesis (Текст-в-Речь), и SpeechRecognition (Асинхронное распознавание речи)

## Концепции и использование Web Speech

Web Speech API позволяет веб приложениям управлять голосовыми данными. Существует два компонента к этому API:

- Распознавание голоса. Доступ обеспечивается через {{domxref("SpeechRecognition")}} интерфейс, который в свою очередь обеспечивает возможность распознавать текст из входящего аудио потока (обычно через устройство распознавания речи в устройстве по умолчанию) и отвечать соответственно. Воспользовавшись конструктором интерфейса вы можете создать новый {{domxref("SpeechRecognition")}} объект, у которого есть ряд событий для обнаружения начала речи через микрофон устройства. {{domxref("SpeechGrammar")}} интерфейс предоставляет контейнер для определённого набора грамматики, которое ваше приложение должно использовать. Грамматика определяется с помощью [JSpeech Grammar Format](http://www.w3.org/TR/jsgf/) (**JSGF**.)
- Доступ к синтезу речи осуществляется с помощью {{domxref("SpeechSynthesis")}} интерфейса, компонент text-to-speech позволяет приложениям прочесть свой текстовый контент (обычно через дефолтный синтезатор речи устройства). В {{domxref("SpeechSynthesisVoice")}} объектах есть различные типы голоса, и различным частям текста можно назначать {{domxref("SpeechSynthesisUtterance")}} объекты. Можно начать воспроизведение передав их методу {{domxref("SpeechSynthesis.speak()")}}.

Для большей информации по использованию этих фич, смотрите [Using the Web Speech API](/ru/docs/Web/API/Web_Speech_API/Using_the_Web_Speech_API).

## Интерфейсы Web Speech API

### Распознавание речи

- {{domxref("SpeechRecognition")}}
  - : The controller interface for the recognition service; this also handles the {{domxref("SpeechRecognitionEvent")}} sent from the recognition service.
- {{domxref("SpeechRecognitionAlternative")}}
  - : Представляет одно слово которое было распознано службой распознавания голоса.
- {{domxref("SpeechRecognitionError")}}
  - : Представляет сообщения об ошибках из службы распознавания.
- {{domxref("SpeechRecognitionEvent")}}
  - : The event object for the {{event("result")}} and {{event("nomatch")}} events, and contains all the data associated with an interim or final speech recognition result.
- {{domxref("SpeechGrammar")}}
  - : Слова или шаблоны слов которые мы хотим чтобы служба распознавания распознала.
- {{domxref("SpeechGrammarList")}}
  - : Представляет список объектов {{domxref("SpeechGrammar")}}.
- {{domxref("SpeechRecognitionResult")}}
  - : Представляет одно распознанное совпадение, которое может содержать несколько объектов {{domxref("SpeechRecognitionAlternative")}}.
- {{domxref("SpeechRecognitionResultList")}}
  - : Represents a list of {{domxref("SpeechRecognitionResult")}} objects, or a single one if results are being captured in {{domxref("SpeechRecognition.continuous","continuous")}} mode.

### Синтезирование речи

- {{domxref("SpeechSynthesis")}}
  - : The controller interface for the speech service; this can be used to retrieve information about the synthesis voices available on the device, start and pause speech, and other commands besides.
- {{domxref("SpeechSynthesisErrorEvent")}}
  - : Contains information about any errors that occur while processing {{domxref("SpeechSynthesisUtterance")}} objects in the speech service.
- {{domxref("SpeechSynthesisEvent")}}
  - : Contains information about the current state of {{domxref("SpeechSynthesisUtterance")}} objects that have been processed in the speech service.
- {{domxref("SpeechSynthesisUtterance")}}
  - : Represents a speech request. It contains the content the speech service should read and information about how to read it (e.g. language, pitch and volume.)

<!---->

- {{domxref("SpeechSynthesisVoice")}}
  - : Represents a voice that the system supports. Every `SpeechSynthesisVoice` has its own relative speech service including information about language, name and URI.
- {{domxref("Window.speechSynthesis")}}
  - : Specced out as part of a `[NoInterfaceObject]` interface called `SpeechSynthesisGetter`, and Implemented by the `Window` object, the `speechSynthesis` property provides access to the {{domxref("SpeechSynthesis")}} controller, and therefore the entry point to speech synthesis functionality.

## Примеры

[Web Speech API репозиторий](https://github.com/mdn/dom-examples/tree/main/web-speech-api) на GitHub содержит примеры, показывающие распознавание и синтез речи.

## Спецификации

| Specification  |
| -------------- |
| Web Speech API |

## Browser compatibility

### `SpeechRecognition`

{{Compat("api.SpeechRecognition", 0)}}

### `SpeechSynthesis`

{{Compat("api.SpeechSynthesis", 0)}}

## Firefox OS permissions

To use speech recognition in an app, you need to specify the following permissions in your [manifest](/ru/docs/Web/Apps/Build/Manifest):

```json
"permissions": {
  "audio-capture" : {
    "description" : "Audio capture"
  },
  "speech-recognition" : {
    "description" : "Speech recognition"
  }
}
```

You also need a privileged app, so you need to include this as well:

```json
  "type": "privileged"
```

Speech synthesis needs no permissions to be set.

## Смотрите также

- [Using the Web Speech API](/ru/docs/Web/API/Web_Speech_API/Using_the_Web_Speech_API)
- [SitePoint article](http://www.sitepoint.com/talking-web-pages-and-the-speech-synthesis-api/)
- [HTML5Rocks article](http://updates.html5rocks.com/2014/01/Web-apps-that-talk---Introduction-to-the-Speech-Synthesis-API)
- [Demo](http://aurelio.audero.it/demo/speech-synthesis-api-demo.html) \[aurelio.audero.it]
