---
title: AudioContext
slug: Web/API/AudioContext
---

{{APIRef()}}

Интерфейс AudioContext можно представить как граф, состоящий из связанных между собой узлов {{domxref("AudioNode")}}. С помощью этого интерфейса можно контролировать как создание узлов, из которых состоит AudioContext, так и контролировать обработку и декодирование звука. Необходимо создать AudioContext перед тем как делать что-либо ещё со звуком, так как всё что происходит при обработке звука, происходит внутри AudioContext.

AudioContext может выступать как обработчик событий, и он реализует интерфейс {{domxref("EventTarget")}}.

## Свойства

- {{domxref("AudioContext.currentTime")}} {{readonlyInline}}
  - : Содержит число с типом double, которое содержит значение времени в секундах, полученное от часов компьютера клиента. Это значение не может быть изменено никаким образом, оно только для чтения.
- {{domxref("AudioContext.destination")}} {{readonlyInline}}
  - : Содержит ссылку на {{domxref("AudioDestinationNode")}}, представляющий собой точку назначения для всего аудио в этом контексте. Может рассматриваться как, например, аудио-воспроизводящее устройство.
- {{domxref("AudioContext.listener")}} {{readonlyInline}}
  - : Содержит ссылку на объект {{domxref("AudioListener")}}, применяется для ориентирования в 3D-пространстве.
- {{domxref("AudioContext.sampleRate")}} {{readonlyInline}}
  - : Содержит число с типом float, представляющее собой частоту сэмплирования звука (sample rate), используемую всеми узлами в этом контексте. Это значение только для чтения и не может быть изменено.
- {{domxref("AudioContext.mozAudioChannelType")}} {{ non-standard_inline() }} {{readonlyInline}}
  - : Содержит ссылку на аудио-канал, который будет использоваться для воспроизведения звука в {{domxref("AudioContext")}} на устройствах с FireFox OS. Только для чтения.

## Методы

_Также реализованы методы из интерфейса_ {{domxref("EventTarget")}}.

- {{domxref("AudioContext.createBuffer()")}}
  - : Создаёт новый пустой объект {{ domxref("AudioBuffer") }}, в который затем могут помещаться данные для воспроизведения через {{ domxref("AudioBufferSourceNode") }}.
- {{domxref("AudioContext.createBufferSource()")}}
  - : Создаёт объект {{domxref("AudioBufferSourceNode")}}, который может быть использован для воспроизведения и обработки данных звукового потока, содержащегося в объекте {{ domxref("AudioBuffer") }} . Объекты типа {{ domxref("AudioBuffer") }} создаются с помощью метода {{domxref("AudioContext.createBuffer")}} или возвращаются методом {{domxref("AudioContext.decodeAudioData")}}, когда декодирование аудио-дорожки успешно завершено.
- {{domxref("AudioContext.createMediaElementSource()")}}
  - : Создаёт объект {{domxref("MediaElementAudioSourceNode")}}, ассоциированный с {{domxref("HTMLMediaElement")}}. Может использоваться для воспроизведения или манипулирования данными звукового потока из {{HTMLElement("video")}} или {{HTMLElement("audio")}} элементов.
- {{domxref("AudioContext.createMediaStreamSource()")}}
  - : Создаёт объект {{domxref("MediaStreamAudioSourceNode")}}, ассоциированный с {{domxref("MediaStream")}}, и который представляет аудио-поток, поступающий от подключённого к клиентскому компьютеру микрофона или других источников.
- {{domxref("AudioContext.createMediaStreamDestination()")}}
  - : Создаёт объект {{domxref("MediaStreamAudioDestinationNode")}}, ассоциированный с {{domxref("MediaStream")}} и представляющий собой аудио-поток, который можно сохранить в локальный файл или передать на другой компьютер.
- {{domxref("AudioContext.createScriptProcessor()")}}
  - : Создаёт объект {{domxref("ScriptProcessorNode")}}, который может быть использован для прямой обработки звука с помощью JavaScript.
- {{domxref("AudioContext.createAnalyser()")}}
  - : Создаёт объект {{domxref("AnalyserNode")}}, который может быть использован для получения времени воспроизведения и частоты воспроизводимого звука, что, в свою очередь может быть использовано для визуализации звукового потока.
- {{domxref("AudioContext.createBiquadFilter()")}}
  - : Создаёт объект {{domxref("BiquadFilterNode")}}, который представляет собой фильтр второго порядка, конфигурируемый как фильтр верхних частот, как фильтр нижних частот, фильтр полосы пропускания и так далее.
- {{domxref("AudioContext.createChannelMerger()")}}
  - : Создаёт объект {{domxref("ChannelMergerNode")}}, который используется для слияния каналов из множества аудио-потоков в один аудио-поток.
- {{domxref("AudioContext.createChannelSplitter()")}}
  - : Создаёт объект {{domxref("ChannelSplitterNode")}}, который используется для доступа к отдельным каналам аудио-потока для их дальнейшей обработки по отдельности.
- {{domxref("AudioContext.createConvolver()")}}
  - : Создаёт объект {{domxref("ConvolverNode")}}, который может быть использован для применения эффекта свёртки (convolution effect) к аудио-графу. Например, для создания эффекта реверберации.
- {{domxref("AudioContext.createDelay()")}}
  - : Создаёт объект {{domxref("DelayNode")}}, который может быть использован для задержки входящего аудио-сигнала на определённое время. Этот узел также удобен для создания петель обратной связи (feedback loops) в Web Audio графе.
- {{domxref("AudioContext.createDynamicsCompressor()")}}
  - : Создаёт объект {{domxref("DynamicsCompressorNode")}}, который может быть использован для акустической компрессии аудио-сигнала.
- {{domxref("AudioContext.decodeAudioData()")}}
  - : Асинхронно декодирует данные из аудио-файла, находящиеся в {{domxref("ArrayBuffer")}}. В этом случае ArrayBuffer заполняется при ответе на запрос {{domxref("XMLHttpRequest")}}. `и установке` атрибута `responseType` в `arraybuffer`. Этот метод работает только с полными аудио-файлами и не работает с их фрагментами.
- {{domxref("AudioContext.createGain()")}}
  - : Создаёт объект {{domxref("GainNode")}}, который может быть использован для контроля общей громкости во всём аудио-графе.
- {{domxref("AudioContext.createOscillator()")}}
  - : Создаёт объект {{domxref("OscillatorNode")}}, источник, представляющий собой периодическую волну звукового сигнала.
- {{domxref("AudioContext.createPanner()")}}
  - : Создаёт объект {{domxref("PannerNode")}}, который используется для пространственного определения аудио-потока в трёхмерном пространстве.
- {{domxref("AudioContext.createPeriodicWave()")}}
  - : Создаёт объект {{domxref("PeriodicWave")}}, используемый для определения периодической волны звукового сигнала, которая, в свою очередь, используется для определения вывода в {{ domxref("OscillatorNode") }}.
- {{domxref("AudioContext.createWaveShaper()")}}
  - : Создаёт объект {{domxref("WaveShaperNode")}}, который может быть использован для создания эффектов нелинейных звуковых искажений.
- {{domxref("AudioContext.createAudioWorker()")}}
  - : Создаёт объект {{domxref("AudioWorkerNode")}}, который может взаимодействовать с потоком web worker для непосредственных генерации, обработки или анализа аудио данных. Этот метод был добавлен в спецификацию 29 августа 2014 года и не в каждом браузере пока поддерживается.

## Устаревшие методы

- {{domxref("AudioContext.createJavaScriptNode()")}}
  - : Создаёт объект {{domxref("JavaScriptNode")}}, используемый для непосредственной обработки звука в JavaScript. Этот метод устарел и заменён на {{domxref("AudioContext.createScriptProcessor()")}}.
- {{domxref("AudioContext.createWaveTable()")}}
  - : Создаёт объект {{domxref("WaveTableNode")}}, для определения периодической волны звукового сигнала. Этот метод устарел и заменён на {{domxref("AudioContext.createPeriodicWave()")}}.

## Примеры

Простая декларация аудио-контекста:

```js
var audioCtx = new AudioContext();
```

Кросс-браузерный вариант:

```js
var AudioContext = window.AudioContext || window.webkitAudioContext;
var audioCtx = new AudioContext();

var oscillatorNode = audioCtx.createOscillator();
var gainNode = audioCtx.createGain();
var finish = audioCtx.destination;
// etc.
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- [Применение Web Audio API](/ru/docs/Web_Audio_API/Using_Web_Audio_API)
