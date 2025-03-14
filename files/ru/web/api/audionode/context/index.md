---
title: AudioNode.context
slug: Web/API/AudioNode/context
---

{{ APIRef("Web Audio API") }}

Свойство интерфейса {{ domxref("AudioNode") }} возвращающее связанный {{domxref("AudioContext")}}, это объект, представляющий граф, в котором находится данный узел.**_(только для чтения)_**

## Синтаксис

```
var aContext = anAudioNode.context;
```

### Значение

Объект {{ domxref("AudioContext") }}.

## Example

```js
var AudioContext = window.AudioContext || window.webkitAudioContext;

var audioCtx = new AudioContext();

var oscillator = audioCtx.createOscillator();
var gainNode = audioCtx.createGain();

oscillator.connect(gainNode);
gainNode.connect(audioCtx.destination);

oscillator.context;
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- [Использование Web Audio API](/ru/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
