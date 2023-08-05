---
title: AudioContext.currentTime
slug: Web/API/BaseAudioContext/currentTime
---

{{ APIRef("AudioContext") }}

Поле currentTime принадлежит {{ domxref("AudioContext") }} и возвращает время с момента создания AudioContext. Может использоваться при планировании воспроизведения или визуализации. Поле currentTime является не перезаписываемым и не может быть остановлено или сброшено.

## Синтаксис

```js
var audioCtx = new AudioContext();
console.log(audioCtx.currentTime);
```

### Тип данных

A double.

## Примеры

> **Примечание:** для большего понимания реализации Web Audio, посмотрите наши Web Audio Demos на [MDN Github repo](https://github.com/mdn/), like [panner-node](https://github.com/mdn/panner-node). Попробуйте ввести `audioCtx.currentTime` в консоли вашего браузера.

```js
var AudioContext = window.AudioContext || window.webkitAudioContext;
var audioCtx = new AudioContext();
// Older webkit/blink browsers require a prefix

...

console.log(audioCtx.currentTime);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using the Web Audio API](/ru/docs/Web_Audio_API/Using_Web_Audio_API)
