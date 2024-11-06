---
title: Оптимизация canvas
slug: Web/API/Canvas_API/Tutorial/Optimizing_canvas
---

{{DefaultAPISidebar("Canvas API")}} {{PreviousNext("Web/API/Canvas_API/Tutorial/Hit_regions_and_accessibility", "Web/API/Canvas_API/Tutorial/Finale")}}

Элемент {{HTMLElement ("canvas")}} является одним из наиболее широко используемых инструментов для рендеринга 2D-графики в Интернете. Однако когда веб-сайты и приложения используют Canvas API на пределе его возможностей, производительность начинает снижаться. В этой статье приводятся предложения по оптимизации использования элемента canvas для обеспечения хорошей работы графики.

## Советы по производительности

Ниже приведён сборник советов по улучшению производительности canvas.

### Предварительно отрисуйте похожие примитивы или повторяющиеся объекты на offscreen canvas

Если вы повторяете одни и те же операции рисования в каждом кадре анимации, рассмотрите возможность их выгрузки на offscreen canvas. Затем вы можете визуализировать закадровое изображение на свой основной canvas так часто, как это необходимо, без необходимости повторять шаги, необходимые для его генерации.

```js
myCanvas.offscreenCanvas = document.createElement("canvas");
myCanvas.offscreenCanvas.width = myCanvas.width;
myCanvas.offscreenCanvas.height = myCanvas.height;

myCanvas.getContext("2d").drawImage(myCanvas.offScreenCanvas, 0, 0);
```

### Избегайте координат с плавающей точкой и используйте вместо них целые числа

Субпиксельный рендеринг происходит при рендеринге объектов на canvas без целых значений.

```js
ctx.drawImage(myImage, 0.3, 0.5);
```

Это заставляет браузер выполнять дополнительные вычисления для создания эффекта сглаживания. Чтобы избежать этого, обязательно округлите все координаты, используемые в вызовах {{domxref("CanvasRenderingContext2D.drawImage", "drawImage()")}}, например, с помощью {{jsxref("Math.floor()")}}.

### Не масштабируйте изображения в `drawImage`

При загрузке кешируйте изображения разных размеров на offscreen canvas, а не постоянно масштабируйте их в {{domxref("CanvasRenderingContext2D.drawImage", "drawImage()")}}.

### Используйте несколько слоёв canvas для сложных сцен

Вы можете обнаружить, что некоторые объекты в вашем приложении нужно часто перемещать или менять, в то время как другие остаются относительно статичными. Возможной оптимизацией в этой ситуации является наложение ваших элементов с использованием нескольких элементов `<canvas>`.

Например, допустим, у вас есть игра с пользовательским интерфейсом наверху, геймплеем в середине и статическим фоном внизу. В этом случае вы можете разбить свою игру на три слоя `<canvas>`. Пользовательский интерфейс будет меняться только при изменении пользователем, слой с игровым процессом будет меняться с каждым новым кадром, а фон останется в основном неизменным.

```html
<div id="stage">
  <canvas id="ui-layer" width="480" height="320"></canvas>
  <canvas id="game-layer" width="480" height="320"></canvas>
  <canvas id="background-layer" width="480" height="320"></canvas>
</div>

<style>
  #stage {
    width: 480px;
    height: 320px;
    position: relative;
    border: 2px solid black;
  }

  canvas {
    position: absolute;
  }
  #ui-layer {
    z-index: 3;
  }
  #game-layer {
    z-index: 2;
  }
  #background-layer {
    z-index: 1;
  }
</style>
```

### Используйте простой CSS для больших фоновых изображений

Если у вас есть статическое фоновое изображение, вы можете нарисовать его на простом элементе {{HTMLElement("div")}}, используя свойство CSS {{cssxref("background")}}, и расположить его под canvas. Это сведёт на нет необходимость рендеринга фона на canvas на каждом тике.

### Масштабирование холста с использованием CSS-преобразований

[CSS-преобразования](/ru/docs/Web/Guide/CSS/Using_CSS_transforms) быстрее, поскольку они используют графический процессор. В идеале, не стоит не масштабировать canvas, или можно использовать меньший canvas и увеличивать его при необходимости, но не уменьшать.

```js
var scaleX = window.innerWidth / canvas.width;
var scaleY = window.innerHeight / canvas.height;

var scaleToFit = Math.min(scaleX, scaleY);
var scaleToCover = Math.max(scaleX, scaleY);

stage.style.transformOrigin = "0 0"; //scale from top left
stage.style.transform = "scale(" + scaleToFit + ")";
```

### Отключите прозрачность

Если ваше приложение использует canvas и не нуждается в прозрачном фоне, установите для параметра `alpha` значение `false` при создании контекста рисования с помощью {{domxref("HTMLCanvasElement.getContext()")}}. Эта информация может использоваться браузером для оптимизации рендеринга.

```js
var ctx = canvas.getContext("2d", { alpha: false });
```

### Другие советы

- Объединяйте запросы к canvas. Например, рисуйте одну ломанную линию вместо нескольких отдельных линий.
- Избегайте ненужных изменений состояния canvas.
- Отображайте только изменения экрана, а не заново перерисовывайте.
- По возможности избегайте свойства {{domxref("CanvasRenderingContext2D.shadowBlur", "shadowBlur")}}.
- Избегайте [рендеринга текста](/ru/docs/Web/API/Canvas_API/Tutorial/Drawing_text), когда это возможно.
- Попробуйте разные способы очистки canvas (({{domxref("CanvasRenderingContext2D.clearRect", "clearRect()")}}, или {{domxref("CanvasRenderingContext2D.fillRect", "fillRect()")}}, или изменение размера canvas).
- С анимациями используйте {{domxref("window.requestAnimationFrame()")}} вместо {{domxref("window.setInterval()")}}.
- Будьте осторожны с тяжёлыми физическими библиотеками.

## Смотрите также

- [Improving HTML5 Canvas Performance – HTML5 Rocks](http://www.html5rocks.com/en/tutorials/canvas/performance/#toc-ref)
- [Optimizing your JavaScript game for Firefox OS – Mozilla Hacks](https://hacks.mozilla.org/2013/05/optimizing-your-javascript-game-for-firefox-os/)

{{PreviousNext("Web/API/Canvas_API/Tutorial/Hit_regions_and_accessibility", "Web/API/Canvas_API/Tutorial/Finale")}}
