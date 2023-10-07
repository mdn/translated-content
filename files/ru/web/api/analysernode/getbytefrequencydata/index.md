---
title: AnalyserNode.getByteFrequencyData()
slug: Web/API/AnalyserNode/getByteFrequencyData
---

{{ APIRef("Web Audio API") }}

Метод **`getByteFrequencyData()`** интерфейса {{ domxref("AnalyserNode") }} копирует текущие данные частоты в переданный в него Uint8Array {{domxref("Uint8Array")}} (unsigned byte array).

Данные частоты состоят из целых чисел по шкале от 0 до 255.

Каждый элемент в массиве представляет собой значение в децибелах для определённой частоты. Частоты распределены линейно от 0 до 1/2 частоты дискретизации. Например, для частоты дискретизации `48000` последний элемент массива будет представлять значение в децибелах для `24000` Гц.

Если в массиве меньше элементов, чем в {{domxref("AnalyserNode.frequencyBinCount")}}, лишние элементы удаляются. Если в нем больше элементов, чем необходимо, лишние элементы игнорируются.

## Синтаксис

```js
var audioCtx = new AudioContext();
var analyser = audioCtx.createAnalyser();
var dataArray = new Uint8Array(analyser.frequencyBinCount); // Uint8Array должен иметь такой же размер, что и frequencyBinCount

void analyser.getByteFrequencyData(dataArray); // заполняет Uint8Array данными, полученными из getByteFrequencyData()
```

### Параметры

- `array`
  - : {{domxref("Uint8Array")}} , в который будут скопированы данные частотной области. Для любого образца, который не содержит данных, значение равно `-Infinity`.
    Если в массиве меньше элементов, чем в {{domxref ("AnalyserNode.frequencyBinCount")}}, лишние элементы удаляются. Если в нем больше элементов, чем необходимо, лишние элементы игнорируются.

### Возвращаемое значение

None.

## Пример

Следующий пример показывает базовое использование {{domxref ("AudioContext")}} для создания AnalyserNode, затем {{domxref ("window.requestAnimationFrame ()", "requestAnimationFrame")}} и {{htmlelement ("canvas" )}} для повторения сбора частотных данных и вывода в стиле гистограммы winamp для текущего аудиовхода. Для получения дополнительных примеров / информации ознакомьтесь с нашей демонстрацией [Voice-change-O-matic](https://mdn.github.io/voice-change-o-matic/) (см. соответствующий код в строках [app.js lines 128–205](https://github.com/mdn/voice-change-o-matic/blob/gh-pages/scripts/app.js#L128-L205) ).

```js
var audioCtx = new (window.AudioContext || window.webkitAudioContext)();
var analyser = audioCtx.createAnalyser();

  ...

analyser.fftSize = 256;
var bufferLength = analyser.frequencyBinCount;
console.log(bufferLength);
var dataArray = new Uint8Array(bufferLength);

canvasCtx.clearRect(0, 0, WIDTH, HEIGHT);

function draw() {
  drawVisual = requestAnimationFrame(draw);

  analyser.getByteFrequencyData(dataArray);

  canvasCtx.fillStyle = 'rgb(0, 0, 0)';
  canvasCtx.fillRect(0, 0, WIDTH, HEIGHT);

  var barWidth = (WIDTH / bufferLength) * 2.5;
  var barHeight;
  var x = 0;

  for(var i = 0; i < bufferLength; i++) {
    barHeight = dataArray[i];

    canvasCtx.fillStyle = 'rgb(' + (barHeight+100) + ',50,50)';
    canvasCtx.fillRect(x,HEIGHT-barHeight/2,barWidth,barHeight/2);

    x += barWidth + 1;
  }
};

draw();
```

## Параметры

- array
  - : {{domxref("Uint8Array")}}, в который будут скопированы данные частотной области.

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- [Using the Web Audio API](/ru/docs/Web_Audio_API/Using_Web_Audio_API)
