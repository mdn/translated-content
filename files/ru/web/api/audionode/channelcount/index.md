---
title: AudioNode.channelCount
slug: Web/API/AudioNode/channelCount
---

{{ APIRef("Web Audio API") }}

`channelCount` свойство интерфейса {{ domxref("AudioNode") }} представляющее собой целое число использующееся для определения того, сколько каналов участвуют для [up-mixing and down-mixing](/ru/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API#Up-mixing_and_down-mixing) соединений для любого входа узла.

`Использование и точное значение channelCount`'s зависит от {{domxref("AudioNode.channelCountMode")}}:

- Игнорируется если значение `channelCountMode` равно `max`.
- Используется в качестве максимального значения, если значение `channelCountMode` равно `clamped-max`.
- Используется в качестве точного значения, если значение `channelCountMode` указано явно.

## Синтаксис

```js
var oscillator = audioCtx.createOscillator();
var channels = oscillator.channelCount;
```

## Пример

```js
var AudioContext = window.AudioContext || window.webkitAudioContext;

var audioCtx = new AudioContext();

var oscillator = audioCtx.createOscillator();
var gainNode = audioCtx.createGain();

oscillator.connect(gainNode);
gainNode.connect(audioCtx.destination);

oscillator.channelCount;
```

## Значение

Целое.

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- [Использование Web Audio API](/ru/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
