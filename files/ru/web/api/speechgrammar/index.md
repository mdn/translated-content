---
title: SpeechGrammar
slug: Web/API/SpeechGrammar
---

{{APIRef("Web Speech API")}}{{SeeCompatTable}}

Интерфейс **`SpeechGrammar`** [Web Speech API](/ru/docs/Web/API/Web_Speech_API) представляет собой набор слов или шаблонов слов, которые мы хотим, чтобы служба распознавания распознавала.

Грамматика определяется с использованием [JSpeech Grammar Format](http://www.w3.org/TR/jsgf/) (**JSGF**.) Другие форматы также могут поддерживаться в будущем.

## Конструктор

- {{domxref("SpeechGrammar.SpeechGrammar()")}}
  - : Создаёт новый объект `SpeechGrammar` .

## Свойства

- {{domxref("SpeechGrammar.src")}}
  - : Устанавливает и возвращает строку, содержащую грамматику, внутри экземпляра объекта `SpeechGrammar` .
- {{domxref("SpeechGrammar.weight")}} {{optional_inline}}
  - : Устанавливает и возвращает вес объекта `SpeechGrammar` .

## Примеры

```js
var grammar =
  "#JSGF V1.0; grammar colors; public <color> = aqua | azure | beige | bisque | black | blue | brown | chocolate | coral | crimson | cyan | fuchsia | ghostwhite | gold | goldenrod | gray | green | indigo | ivory | khaki | lavender | lime | linen | magenta | maroon | moccasin | navy | olive | orange | orchid | peru | pink | plum | purple | red | salmon | sienna | silver | snow | tan | teal | thistle | tomato | turquoise | violet | white | yellow ;";
var recognition = new SpeechRecognition();
var speechRecognitionList = new SpeechGrammarList();
speechRecognitionList.addFromString(grammar, 1);
recognition.grammars = speechRecognitionList;

console.log(speechRecognitionList[0].src); // должно вернуть то же, что и содержимое переменной gramar
console.log(speechRecognitionList[0].weight); // должно вернуть 1 - столько же, сколько указано в 4-й строчке.
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- [Web Speech API](/ru/docs/Web/API/Web_Speech_API)
