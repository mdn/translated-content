---
title: Transformations
slug: Web/API/Canvas_API/Tutorial/Transformations
---

{{DefaultAPISidebar("Canvas API")}} {{PreviousNext("Web/API/Canvas_API/Tutorial/Using_images", "Web/API/Canvas_API/Tutorial/Compositing")}}

Ранее в этом уроке мы узнали о [сетке холста](/ru/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes) и **координатном пространстве**. До сих пор мы использовали только сетку по умолчанию и изменили размер всего холста для наших нужд. При преобразованиях существуют более мощные способы изменения исходных координат в различные положение, поворот сетки и даже масштабирование.

## Сохранение и восстановление состояния

Прежде чем перейти к методам преобразования, давайте рассмотрим два других метода, которые необходимы, когда вы начинаете создавать все более сложные рисунки.

- {{domxref("CanvasRenderingContext2D.save", "save()")}}
  - : Сохраняет все состояние холста.
- {{domxref("CanvasRenderingContext2D.restore", "restore()")}}
  - : Восстанавливает последнее сохранённое состояние холста.

Состояние холста сохраняется в стеке. Каждый раз, когда вызывается метод `save()`, текущее состояние отрисовки записывается в стек. Состояние отрисовки содержит:

- Трансформации, которые были применены (например, `translate`, `rotate` and `scale` – см. ниже).
- Текущее значение следующих атрибутов: {{domxref("CanvasRenderingContext2D.strokeStyle", "strokeStyle")}}, {{domxref("CanvasRenderingContext2D.fillStyle", "fillStyle")}}, {{domxref("CanvasRenderingContext2D.globalAlpha", "globalAlpha")}}, {{domxref("CanvasRenderingContext2D.lineWidth", "lineWidth")}}, {{domxref("CanvasRenderingContext2D.lineCap", "lineCap")}}, {{domxref("CanvasRenderingContext2D.lineJoin", "lineJoin")}}, {{domxref("CanvasRenderingContext2D.miterLimit", "miterLimit")}}, {{domxref("CanvasRenderingContext2D.lineDashOffset", "lineDashOffset")}}, {{domxref("CanvasRenderingContext2D.shadowOffsetX", "shadowOffsetX")}}, {{domxref("CanvasRenderingContext2D.shadowOffsetY", "shadowOffsetY")}}, {{domxref("CanvasRenderingContext2D.shadowBlur", "shadowBlur")}}, {{domxref("CanvasRenderingContext2D.shadowColor", "shadowColor")}}, {{domxref("CanvasRenderingContext2D.globalCompositeOperation", "globalCompositeOperation")}}, {{domxref("CanvasRenderingContext2D.font", "font")}}, {{domxref("CanvasRenderingContext2D.textAlign", "textAlign")}}, {{domxref("CanvasRenderingContext2D.textBaseline", "textBaseline")}}, {{domxref("CanvasRenderingContext2D.direction", "direction")}}, {{domxref("CanvasRenderingContext2D.imageSmoothingEnabled", "imageSmoothingEnabled")}}.
- Текущее значение границ вырезанного холста ([clipping path](/ru/docs/Web/API/Canvas_API/Tutorial/Compositing#Clipping_paths)), которые будут рассматриваться в следующем разделе.

Вы можете вызывать метод `save()` столько раз, сколько захотите. В то же время, при вызове метода `restore()` последнее сохранённое состояние будет считано из стека, и все сохранённые настройки будут восстановлены.

### Пример сохранения и восстановления состояния холста

Здесь показано, как функционирует сохранение в стек состояния отрисовки на примере последовательной отрисовки набора прямоугольников.

```js
function draw() {
  var ctx = document.getElementById("canvas").getContext("2d");

  ctx.fillRect(0, 0, 150, 150); // рисуем прямоугольник с настройками по умолчанию
  ctx.save(); // сохраняем состояние

  ctx.fillStyle = "#09F"; // вносим изменения в настройки
  ctx.fillRect(15, 15, 120, 120); // рисуем прямоугольник с новыми настройками
  ctx.save(); // сохраняем состояние

  ctx.fillStyle = "#FFF"; // вносим изменения в настройки
  ctx.globalAlpha = 0.5;
  ctx.fillRect(30, 30, 90, 90); // рисуем прямоугольник с новыми настройками

  ctx.restore(); // возвращаемся к предыдущим настройкам
  ctx.fillRect(45, 45, 60, 60); // рисуем прямоугольник с восстановленными настройками

  ctx.restore(); // возвращаемся к начальным настройкам
  ctx.fillRect(60, 60, 30, 30); // рисуем прямоугольник с изначальными настройками
}
```

```html hidden
<canvas id="canvas" width="150" height="150"></canvas>
```

```js hidden
draw();
```

Сначала рисуется большой прямоугольник с настройками по умолчанию. Затем мы сохраняем состояние холста, после чего изменяем цвет заливки. Затем рисуем второй синий прямоугольник меньшего размера и опять сохраняем состояние. Снова изменяем какие-то настройки и рисуем третий полупрозрачный белый прямоугольник.

До сих пор наши действия ничем не отличались от тех, что мы делали в предыдущем разделе. Однако, как только мы сделали первый вызов `restore(),` последнее сохранённое состояние отрисовки было восстановлено из стека, вернув все сохранённые настройки. Если бы мы не сохранили предыдущее состояние, используя `save()`, нам бы пришлось менять цвет заливки и настройки прозрачности вручную для возврата к предыдущему состоянию. Для каких-нибудь двух простых свойств это, может быть, сделать не так сложно. Но если таких свойств гораздо больше, это чревато очень быстрым разрастанием кода.

Когда второй вызов `restore()` сделан, изначальное состояние (то самое, которое было сделано перед первым вызовом `save`) восстанавливается и последний нарисованный прямоугольник вновь становится чёрным.

{{EmbedLiveSample("A_save_and_restore_canvas_state_example", "180", "180", "canvas_savestate.png")}}

## Трансляция (смещение)

![](canvas_grid_translate.png)Первый метод для трансформирования холста `translate()`. Он используется для перемещения холста в любую точку нашей сетки.

- {{domxref("CanvasRenderingContext2D.translate", "translate(x, y)")}}
  - : Перемещение холста на сетке. `x` и `y` - смещение по горизонтали и вертикали соответственно.

Неплохая идея - сохранять `canvas state` перед использованием любых трансформаций. Обычно удобнее использовать метод `restore`, чем выполнять обратные преобразования, чтобы вернуться к начальному состоянию. Кроме того, если вы выполняете преобразования внутри цикла не используя `save` и `restore`, вы рискуете потерять часть рисунка, потому что он был нарисован за пределами края холста.

### Пример использования `translate`

Этот пример демонстрирует некоторые преимущества при использовании смещения холста. Без использования метода `translate()` все прямоугольники будут отрисованы в одинаковой позиции (0,0). Метод `translate()` даёт возможность размещения прямоугольника в любой позиции без изменения параметров функции `fillRect()`. Это может дать некоторое упрощение для понимания и использования.

Внутри функции `draw()` мы вызываем `fillRect()` девять раз, используя два цикла `for`. Каждый раз мы сохраняем состояние холста, смещаем его, рисуем прямоугольник, а затем восстанавливаем исходное состояние. Заметьте, что `fillRect()` всегда использует одни и те же параметры, а изменение позиции фигуры осуществляется с помощью `translate()`.

```js
function draw() {
  var ctx = document.getElementById("canvas").getContext("2d");
  for (var i = 0; i < 3; i++) {
    for (var j = 0; j < 3; j++) {
      ctx.save();
      ctx.fillStyle = "rgb(" + 51 * i + ", " + (255 - 51 * i) + ", 255)";
      ctx.translate(10 + j * 50, 10 + i * 50);
      ctx.fillRect(0, 0, 25, 25);
      ctx.restore();
    }
  }
}
```

```html hidden
<canvas id="canvas" width="150" height="150"></canvas>
```

```js hidden
draw();
```

{{EmbedLiveSample("A_translate_example", "160", "160", "translate.png")}}

## Поворот

![](canvas_grid_rotate.png)Второй метод трансформации `rotate()`. Он используется для поворота нашего холста.

- {{domxref("CanvasRenderingContext2D.rotate", "rotate(angle)")}}
  - : Поворачивает наш холст по часовой стрелке вокруг начальной точки на угол `anglе` в радианах.

Центр поворота - всегда начало координат. Для изменения координат центра мы должны сместить холст, используя метод `translate()`.

### Пример использования `rotate`

В этом примере мы сначала используем `rotate()` для поворота прямоугольника относительно начала координат, а затем, используя `translate()` совместно с `rotate()` поворачиваем прямоугольник относительно его центра.

> **Примечание:** Углы измеряются в радианах, а не в градусах. Для преобразования единиц используйте следующую формулу: `radians = (Math.PI/180)*degrees`.

```js
function draw() {
  var ctx = document.getElementById("canvas").getContext("2d");

  // left rectangles, rotate from canvas origin
  ctx.save();
  // blue rect
  ctx.fillStyle = "#0095DD";
  ctx.fillRect(30, 30, 100, 100);
  ctx.rotate((Math.PI / 180) * 25);
  // grey rect
  ctx.fillStyle = "#4D4E53";
  ctx.fillRect(30, 30, 100, 100);
  ctx.restore();

  // right rectangles, rotate from rectangle center
  // draw blue rect
  ctx.fillStyle = "#0095DD";
  ctx.fillRect(150, 30, 100, 100);

  ctx.translate(200, 80); // translate to rectangle center
  // x = x + 0.5 * width
  // y = y + 0.5 * height
  ctx.rotate((Math.PI / 180) * 25); // rotate
  ctx.translate(-200, -80); // translate back

  // draw grey rect
  ctx.fillStyle = "#4D4E53";
  ctx.fillRect(150, 30, 100, 100);
}
```

Для поворота прямоугольника относительно его центра мы сначала смещаем начало координат, выполняем поворот, а затем выполняем обратное смещение к точке 0,0, и наконец рисуем прямоугольник.

```html hidden
<canvas id="canvas" width="300" height="200"></canvas>
```

```js hidden
draw();
```

{{EmbedLiveSample("A_rotate_example", "310", "210", "rotate.png")}}

## Масштабирование

Следующий метод трансформации холста - scaling. Он используется для растяжения, сжатия и отражения координатной сетки. Он может использоваться для отрисовки растянутых или сжатых по осям фигур и изображений.

- {{domxref("CanvasRenderingContext2D.scale", "scale(x, y)")}}
  - : Масштабирует координатную сетку холста по горизонтали и вертикали. Оба параметра - вещественные числа. Значения меньше 1.0 уменьшают, а больше 1.0 увеличивают масштаб сетки. Значение 1.0 не изменяет его.

Используя отрицательные значения вы можете зеркально отразить направление осей. Например, используя `translate(0,canvas.height); scale(1,-1);` вы получите хорошо известную декартову систему координат с началом в нижнем левом углу.

По умолчанию единица координатной сетки точно соответствует одному пикселю. Если же вы, например, зададите масштабный коэффициент 0.5, то единица сетки будет равна половине пикселя, и нарисованная фигура будет иметь размер в два раза меньше оригинала. Наоборот, если задать масштабный коэффициент 2.0, единица сетки будет соответствовать двум пикселям, а нарисованная фигура станет в два раза больше.

### Пример использования `scale`

В этом примере мы нарисуем прямоугольники, используя разные масштабные коэффициенты.

```js
function draw() {
  var ctx = document.getElementById("canvas").getContext("2d");

  // рисуем масштабированный прямоугольник.
  ctx.save();
  ctx.scale(10, 3);
  ctx.fillRect(1, 10, 10, 10);
  ctx.restore();

  // размещаем текст, отражённый по горизонтали
  ctx.scale(-1, 1);
  ctx.font = "48px serif";
  ctx.fillText("MDN", -135, 120);
}
```

```html hidden
<canvas id="canvas" width="150" height="150"></canvas>
```

```js hidden
draw();
```

{{EmbedLiveSample("A_scale_example", "160", "160", "scale.png")}}

## Матричное преобразование

В заключении рассмотрим метод, который вызывает изменения в соответствии с матрицей преобразования.

- {{domxref("CanvasRenderingContext2D.transform", "transform(a, b, c, d, e, f)")}}

  - : Накладывает матрицу преобразования, заданную параметрами, на текущую матрицу. Матрица преобразования задаётся следующим образом: <math><semantics><mrow><mo>[</mo><mtable columnalign="center center center" rowspacing="0.5ex"><mtr><mtd><mi>a</mi></mtd><mtd><mi>c</mi></mtd><mtd><mi>e</mi></mtd></mtr><mtr><mtd><mi>b</mi></mtd><mtd><mi>d</mi></mtd><mtd><mi>f</mi></mtd></mtr><mtr><mtd><mn>0</mn></mtd><mtd><mn>0</mn></mtd><mtd><mn>1</mn></mtd></mtr></mtable><mo>]</mo></mrow><annotation encoding="TeX">\left[ \begin{array}{ccc} a &#x26; c &#x26; e \\ b &#x26; d &#x26; f \\ 0 &#x26; 0 &#x26; 1 \end{array} \right]</annotation></semantics></math>

    If any of the arguments are [`Infinity`](/ru/docs/Web/JavaScript/Reference/Global_Objects/Infinity) the transformation matrix must be marked as infinite instead of the method throwing an exception.

Параметры функции:

- `a (m11)`
  - : Horizontal scaling.
- _`b (m12)`_
  - : Horizontal skewing.
- `c (m21)`
  - : Vertical skewing.
- `d (m22)`
  - : Vertical scaling.
- `e (dx)`
  - : Horizontal moving.
- `f (dy)`
  - : Vertical moving.
- {{domxref("CanvasRenderingContext2D.setTransform", "setTransform(a, b, c, d, e, f)")}}
  - : Сбрасывает текущую матрицу преобразования, а затем вызывает `transform()` в соответствии с аргументами.
- {{domxref("CanvasRenderingContext2D.resetTransform", "resetTransform()")}}
  - : Сбрасывает текущую матрицу преобразования к значению по умолчанию. Аналогично вызову `ctx.setTransform(1, 0, 0, 1, 0, 0);`

### Пример использования `transform` и `setTransform`

```js
function draw() {
  var ctx = document.getElementById("canvas").getContext("2d");

  var sin = Math.sin(Math.PI / 6);
  var cos = Math.cos(Math.PI / 6);
  ctx.translate(100, 100);
  var c = 0;
  for (var i = 0; i <= 12; i++) {
    c = Math.floor((255 / 12) * i);
    ctx.fillStyle = "rgb(" + c + ", " + c + ", " + c + ")";
    ctx.fillRect(0, 0, 100, 10);
    ctx.transform(cos, sin, -sin, cos, 0, 0);
  }

  ctx.setTransform(-1, 0, 0, 1, 100, 100);
  ctx.fillStyle = "rgba(255, 128, 255, 0.5)";
  ctx.fillRect(0, 50, 100, 100);
}
```

```html hidden
<canvas id="canvas" width="200" height="250"></canvas>
```

```js hidden
draw();
```

{{EmbedLiveSample("Пример_использования_transform_и_setTransform", "230", "280", "canvas_transform.png")}}

{{PreviousNext("Web/API/Canvas_API/Tutorial/Using_images", "Web/API/Canvas_API/Tutorial/Compositing")}}
