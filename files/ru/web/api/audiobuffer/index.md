---
title: AudioBuffer
slug: Web/API/AudioBuffer
---

{{APIRef("Web Audio API")}}

## Сводка

`AudioBuffer` - это интерфейс короткого звукового ресурса (audio asset), находящегося в памяти и созданного из аудиофайла методом {{ domxref("AudioContext.decodeAudioData()") }}, или из исходных данных с помощью метода {{ domxref("AudioContext.createBuffer()") }}. Помещённые в AudioBuffer звуковые данные могут быть воспроизведены в {{ domxref("AudioBufferSourceNode") }}.

Объекты этого типа предназначены для хранения небольших звуковых фрагментов, обычно менее 45 секунд. Для более длинных звуков, объекты реализующие {{domxref("MediaElementAudioSourceNode")}} являются более подходящими. Этот буфер содержит данные в формате неперемещаемого IEE754 32-битного линейного ИКМ с номинальным диапазоном от -1 до +1, то есть 32-битный буфер с плавающей точкой каждого звукового фрагмента (samples) от -1.0 до 1.0. Если {{domxref("AudioBuffer")}} имеет несколько каналов, то они хранятся в отдельном буфере.

## Конструктор

- {{domxref("AudioBuffer.AudioBuffer", "AudioBuffer()")}}
  - : Создаёт и возвращает новый объект `AudioBuffer`.

## Свойства

- {{domxref("AudioBuffer.sampleRate")}} {{readonlyInline}}
  - : Возвращает число с плавающей точкой - частоту дискретизации (sample rate), хранящих в буфере данных ИКМ в звуковых фрагментах (samples) в секунду.
- {{domxref("AudioBuffer.length")}} {{readonlyInline}}
  - : Возвращает целое число - длину в кадрах, хранящихся в буфере данных ИКМ.
- {{domxref("AudioBuffer.duration")}} {{readonlyInline}}
  - : Возвращает целое число или число с плавающей точкой - продолжительность в секундах данных ИКМ, хранящихся в буфере.
- {{domxref("AudioBuffer.numberOfChannels")}} {{readonlyInline}}
  - : Возвращает целое число - количество аудиоканалов в буфере, описываемых данными ИКМ.

## Методы

- {{domxref("AudioBuffer.getChannelData()")}}
  - : Возвращает {{jsxref("Float32Array")}}, содержащий связанные с каналом данные ИКМ. Определяется параметром канала (с 0 - первого канала).
- {{domxref("AudioBuffer.copyFromChannel()")}}
  - : Копирует звуковые фрагменты (samples) из указанного канала AudioBuffer в массив.
- {{domxref("AudioBuffer.copyToChannel()")}}
  - : Копирует звуковые фрагменты (samples) из массива в указанный канал AudioBuffer.

## Пример

В этом примере показывается как создать объект AudioBuffer и заполнить его случайными белыми шумами. Вы можете найти полный пример в репозитории [webaudio-examples](https://github.com/mdn/webaudio-examples). Так же доступна [live версия](https://mdn.github.io/webaudio-examples/audio-buffer/).

```js
// Стерео
var channels = 2;

// Создаёт пустой двухсекундный стерео-буфер
// с частотой звука AudioContext (sample rate)
var frameCount = audioCtx.sampleRate * 2.0;
var myArrayBuffer = audioCtx.createBuffer(
  channels,
  frameCount,
  audioCtx.sampleRate,
);

button.onclick = function () {
  // Заполняет буфер белыми шумами;
  // просто случайные значения от -1.0 до 1.0
  for (var channel = 0; channel < channels; channel++) {
    // Получаем массив данных канала
    var nowBuffering = myArrayBuffer.getChannelData(channel);
    for (var i = 0; i < frameCount; i++) {
      // Math.random() находится в [0; 1.0]
      // аудио должно быть в интервале [-1.0; 1.0]
      nowBuffering[i] = Math.random() * 2 - 1;
    }
  }

  // Получает AudioBufferSourceNode.
  // AudioNode для проигрывания из AudioBuffer
  var source = audioCtx.createBufferSource();

  // устанавливает буфер в AudioBufferSourceNode
  source.buffer = myArrayBuffer;

  // присоединяет AudioBufferSourceNode к
  // destination, чтобы мы могли слышать звук
  source.connect(audioCtx.destination);

  // Начать воспроизведение с источника
  source.start();
};
```

## Спецификация

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- [Использование Web Audio API](/ru/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
