---
title: Визуализация с Web Audio API
slug: Web/API/Web_Audio_API/Visualizations_with_Web_Audio_API
---

Одна из самых интересных фич Web Audio API — возможность извлекать частоту, форму волны и другие данные из звукового источника, которые могут быть использованы для создания визуализаций. Эта статья объясняет, как это можно сделать, и приводит несколько базовых примеров использования.

> **Примечание:** вы можете найти рабочие примеры всех фрагментов кода в нашей демонстрации [автоизменения голоса](https://mdn.github.io/voice-change-o-matic/).

## Основные концепции

Чтобы извлечь данные из вашего источника звука, вам понадобится {{ domxref("AnalyserNode") }}, созданный при помощи метода {{ domxref("AudioContext.createAnalyser()") }}, например:

```js
var audioCtx = new (window.AudioContext || window.webkitAudioContext)();
var analyser = audioCtx.createAnalyser();
```

Затем этот узел подключается к вашему источнику звука где-то между получением звука и его обработкой, например:

```js
source = audioCtx.createMediaStreamSource(stream);
source.connect(analyser);
analyser.connect(distortion);
distortion.connect(audioCtx.destination);
```

> **Примечание:** вам не нужно подключать вывод анализатора к другому узлу для его работы, пока его ввод подключён к источнику, либо напрямую, либо через другой узел.

Затем анализатор захватит аудиоданные, используя быстрое преобразование Фурье (БПФ) в определённой частотной области, в зависимости от того, что вы укажете как значение свойства {{ domxref("AnalyserNode.fftSize") }} (если свойство не задано, то значение по умолчанию равно 2048).

> **Примечание:** вы так же можете указать значения минимума и максимума для диапазона масштабирования данных БПФ, используя {{ domxref("AnalyserNode.minDecibels") }} и {{ domxref("AnalyserNode.maxDecibels") }}, и разные константы усреднения данных с помощью {{ domxref("AnalyserNode.smoothingTimeConstant") }}. Прочтите эти страницы, чтобы получить больше информации о том как их использовать.

Чтобы получить данные, вам нужно использовать методы {{ domxref("AnalyserNode.getFloatFrequencyData()") }} и {{ domxref("AnalyserNode.getByteFrequencyData()") }}, чтобы получить данные о частоте, и {{ domxref("AnalyserNode.getByteTimeDomainData()") }} и {{ domxref("AnalyserNode.getFloatTimeDomainData()") }} чтобы получить данные о форме волны.

Эти методы копируют данные в указанный массив, поэтому вам необходимо создать новый массив для хранения данных, прежде чем вызывать эти функции . Результат первой из них - числа типа float32, второй и третьей - uint8, поэтому стандартный массив JavaScript не подойдёт для их хранения — следует использовать массивы {{ domxref("Float32Array") }} или {{ domxref("Uint8Array") }}, в зависимости от нужных вам данных.

Например, если параметр AnalyserNode.fftSize установлен на 2048, мы возвращаем значение {{ domxref("AnalyserNode.frequencyBinCount") }}, равное половине fft, затем вызываем Uint8Array() с frequencyBinCount в качестве длины — столько измерений мы произведём для данного размера fft.

```js
analyser.fftSize = 2048;
var bufferLength = analyser.frequencyBinCount;
var dataArray = new Uint8Array(bufferLength);
```

Чтобы собрать данные и копировать их в массив, мы вызываем подходящий метод сбора данных, с массивом в качестве аргумента. Например:

```js
analyser.getByteTimeDomainData(dataArray);
```

Теперь в массиве хранятся данные, описывающие звук в данный момент времени, и мы можем визуализировать их любым удобным образом, например с помощью холста HTML5: {{ htmlelement("canvas") }}.

Давайте рассмотрим конкретные примеры:

## Создание формы волны/осциллографа

Чтобы визуализировать осциллограф (спасибо [Soledad Penadés](http://soledadpenades.com/) за код в [Voice-change-O-matic](https://github.com/mdn/voice-change-o-matic/blob/gh-pages/scripts/app.js#L123-L167)), мы сначала следуем шаблону, описанному в предыдущей секции, для создания буфера:

```js
analyser.fftSize = 2048;
var bufferLength = analyser.frequencyBinCount;
var dataArray = new Uint8Array(bufferLength);
```

Затем, мы очищаем холст:

```js
canvasCtx.clearRect(0, 0, WIDTH, HEIGHT);
```

И определяем функцию `draw()`:

```js
function draw() {
```

Здесь мы используем `requestAnimationFrame()` чтобы многократно вызывать эту функцию:

```js
drawVisual = requestAnimationFrame(draw);
```

Затем мы копируем данные в наш массив:

```js
analyser.getByteTimeDomainData(dataArray);
```

Устанавливаем заливку холста

```js
canvasCtx.fillStyle = "rgb(200, 200, 200)";
canvasCtx.fillRect(0, 0, WIDTH, HEIGHT);
```

Затем устанавливаем ширину линий и цвет волны, которую мы хотим нарисовать, и начинаем рисовать путь

```js
canvasCtx.lineWidth = 2;
canvasCtx.strokeStyle = "rgb(0, 0, 0)";

canvasCtx.beginPath();
```

Мы определяем ширину каждого отрезка в линии, деля длину холста на длину массива (равную FrequencyBinCount), затем определяем переменную x, задающую позицию, в которую необходимо перенести каждый отрезок.

```js
var sliceWidth = (WIDTH * 1.0) / bufferLength;
var x = 0;
```

В цикле, мы задаём позицию небольшого отрезка волны для каждой точки в буфере на высоте, основанной на значении массива в этой точке, а затем перемещаем линию туда, где должен быть нарисован следующий отрезок:

```js
for (var i = 0; i < bufferLength; i++) {
  var v = dataArray[i] / 128.0;
  var y = (v * HEIGHT) / 2;

  if (i === 0) {
    canvasCtx.moveTo(x, y);
  } else {
    canvasCtx.lineTo(x, y);
  }

  x += sliceWidth;
}
```

Наконец, мы заканчиваем линию в середине правой стороны холста и рисуем, используя установленные цвет и ширину линий:

```js
      canvasCtx.lineTo(canvas.width, canvas.height/2);
      canvasCtx.stroke();
    };
```

В конце концов, мы вызываем функцию `draw()` , запускающую весь процесс:

```js
draw();
```

Мы получаем изображение волны, обновляющееся несколько раз в секунду:

![a black oscilloscope line, showing the waveform of an audio signal](wave.png)

## Создание частотной гистограммы

Ещё одна визуализация, которую можно создать, - это частотные диаграммы (такие, как строит Winamp). В проекте Voice-change-O-matic есть реализация такой диаграммы. Давайте посмотрим на неё.

Сначала мы снова создаём анализатор и массив для данных, затем очищаем холст при помощи `clearRect()`. Единственное отличие от того, что мы делали раньше - ы том, что мы можем установить намного меньший размер fft. Таким образом, каждый столбец в диаграмме будет выглядеть как столбец, а не как тонкая полоска.

```js
analyser.fftSize = 256;
var bufferLength = analyser.frequencyBinCount;
console.log(bufferLength);
var dataArray = new Uint8Array(bufferLength);

canvasCtx.clearRect(0, 0, WIDTH, HEIGHT);
```

Затем мы запускаем функцию `draw()` и задаём цикл при помощи `requestAnimationFrame()` таким образом, чтобы в каждом кадре анимации данные обновлялись.

```js
    function draw() {
      drawVisual = requestAnimationFrame(draw);

      analyser.getByteFrequencyData(dataArray);

      canvasCtx.fillStyle = 'rgb(0, 0, 0)';
      canvasCtx.fillRect(0, 0, WIDTH, HEIGHT);
```

Затем мы устанавливаем значение `barWidth` , равное ширине холста, делённой на количество столбцов (длину буфера). Однако, мы домножаем ширину на 2.5, поскольку на большинстве частот звука не будет, поскольку большинство звуков, которые мы слышим в повседневной жизни, находятся в определённых, достаточно низких, диапазонах частот. Нам нет смысла показывать множество пустых частот, поэтому мы просто сдвигаем столбцы, соответствующие наиболее распространённым частотам.

Мы также устанавливаем значение переменных `barHeight` и `x` , задающей то, где на холсте должен быть размещён каждый столбец.

```js
var barWidth = (WIDTH / bufferLength) * 2.5;
var barHeight;
var x = 0;
```

Как и раньше, мы в цикле проходим по каждому значению в `dataArray`. Для каждого значения мы устанавливаем высоту `barHeight` на уровне значения в массиве, устанавливаем заливку в зависимости от `barHeight` (Чем выше столбец, тем он ярче), и рисуем столбец в `x` пикселях от левой стороны холста. Ширина столбца равна `barWidth` , а высота - `barHeight/2` (чтобы столбцы помещались на холсте, мы уменьшили высоту в два раза)

Одна переменная, требующая объяснения, - это вертикальный сдвиг, с которым мы рисуем каждый столбец: `HEIGHT-barHeight/2`. Это делается для того, чтобы столбцы начинались в нижней части холста, а не в верхней, как было бы, если бы вертикальное положение было установлена в 0 0. Поэтому мы каждый раз устанавливаем вертикальное положение в разность высоты холста и `barHeight/2`, чтобы столбцы начинались где-то между верхом и низом холста и заканчивались снизу.

```js
      for(var i = 0; i < bufferLength; i++) {
        barHeight = dataArray[i]/2;

        canvasCtx.fillStyle = 'rgb(' + (barHeight+100) + ',50,50)';
        canvasCtx.fillRect(x,HEIGHT-barHeight/2,barWidth,barHeight);

        x += barWidth + 1;
      }
    };
```

Снова, мы вызываем функцию draw() в конце кода, чтобы запустить процесс.

```js
draw();
```

Этот код даёт нам следующий результат:

![a series of red bars in a bar graph, showing intensity of different frequencies in an audio signal](bar-graph.png)

> **Примечание:** Примеры, используемые в данной статье, используют {{ domxref("AnalyserNode.getByteFrequencyData()") }} и {{ domxref("AnalyserNode.getByteTimeDomainData()") }}. Примеры работы с {{ domxref("AnalyserNode.getFloatFrequencyData()") }} и {{ domxref("AnalyserNode.getFloatTimeDomainData()") }} можно найти в демо [Voice-change-O-matic-float-data](http://mdn.github.io/voice-change-o-matic-float-data/) (Вы также можете посмотреть [исходный код](https://github.com/mdn/voice-change-o-matic-float-data)) — это то же самое, что и [Voice-change-O-matic](http://mdn.github.io/voice-change-o-matic/), но здесь используются данные типа float, а не unsigned vyte.
