---
title: Применение стилей и цветов
slug: Web/API/Canvas_API/Tutorial/Applying_styles_and_colors
---

{{DefaultAPISidebar("Canvas API")}} {{PreviousNext("Web/API/Canvas_API/Tutorial/Drawing_shapes", "Web/API/Canvas_API/Tutorial/Drawing_text")}}

В главе о [рисовании фигур](/ru/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes), мы использовали для линий и заполнения только стили по умолчанию. Здесь мы будем исследовать опции canvas, которые мы имеем в нашем распоряжении, чтобы сделать наши рисунки немного более привлекательными. Вы узнаете, как добавлять различные цвета, стили линий, градиенты, узоры и тени вашим рисункам.

## Цвета

До сих пор мы видели только методы рисования контекста. Если мы хотим применить цвета к фигуре, то есть два важных свойства, которые мы можем использовать: `fillStyle` и `strokeStyle`.

- {{domxref("CanvasRenderingContext2D.fillStyle", "fillStyle = color")}}
  - : Устанавливает стиль для фона фигур.
- {{domxref("CanvasRenderingContext2D.strokeStyle", "strokeStyle = color")}}
  - : Устанавливает стиль контура фигуры.

_`color`_ может быть цветом, (строка, представленная в CSS {{cssxref("&lt;color&gt;")}}), градиентом или паттерном. Градиенты и паттерны мы рассмотрим позже. По умолчанию цвет фона и контура — чёрный (значение CSS цвета `#000000`).

> **Примечание:** Когда вы устанавливаете значения `strokeStyle` и/или `fillStyle`, то новое значение становится стандартным для всех фигур, которые будут нарисованы с этого момента. Когда вам нужен другой цвет, вы должны перезаписать значение в `fillStyle` или в `strokeStyle` для каждой фигуры.

Чтобы строка _`color`_ считалась валидной, она должна соответствовать CSS {{cssxref("&lt;color&gt;")}}. Далее приведены примеры того, как можно по-разному задать один и тот же цвет.

```js
// these all set the fillStyle to 'orange'

ctx.fillStyle = "orange";
ctx.fillStyle = "#FFA500";
ctx.fillStyle = "rgb(255,165,0)";
ctx.fillStyle = "rgba(255,165,0,1)";
```

### Пример `fillStyle`

В этом примере мы опять воспользуемся двойным циклом, чтобы нарисовать сетку из прямоугольников, каждый из которых имеет свой цвет. Окончательное изображение должно иметь вид, как показано на скриншоте. Здесь не происходит ничего сверхъестественного. Мы используем две переменные `i` и `j` для генерации уникального RGB цвета для каждого квадрата и изменяем только красные и зелёные значения. Синий канал представляет собой фиксированное значение. Путём изменения каналов вы можете генерировать всю палитру. Увеличив количество шагов вы можете достигнуть такого вида палитры, какая используется в Photoshop.

```js
function draw() {
  var ctx = document.getElementById("canvas").getContext("2d");
  for (var i = 0; i < 6; i++) {
    for (var j = 0; j < 6; j++) {
      ctx.fillStyle =
        "rgb(" +
        Math.floor(255 - 42.5 * i) +
        "," +
        Math.floor(255 - 42.5 * j) +
        ",0)";
      ctx.fillRect(j * 25, i * 25, 25, 25);
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

Результат выглядит так:

{{EmbedLiveSample("Пример_fillStyle", 160, 160, "canvas_fillstyle.png")}}

### Пример `strokeStyle`

Этот пример похож на предыдущий, но мы используем свойство `strokeStyle` чтобы изменить цвета очертаний фигур. Так же мы используем метод `arc()` для рисования окружностей вместо квадратов.

```js
function draw() {
  var ctx = document.getElementById("canvas").getContext("2d");
  for (var i = 0; i < 6; i++) {
    for (var j = 0; j < 6; j++) {
      ctx.strokeStyle =
        "rgb(0," +
        Math.floor(255 - 42.5 * i) +
        "," +
        Math.floor(255 - 42.5 * j) +
        ")";
      ctx.beginPath();
      ctx.arc(12.5 + j * 25, 12.5 + i * 25, 10, 0, Math.PI * 2, true);
      ctx.stroke();
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

Результат выглядит так:

{{EmbedLiveSample("Пример_strokeStyle", "180", "180", "canvas_strokestyle.png")}}

## Прозрачность

В дополнении к рисованию непрозрачных фигур, мы также можем рисовать прозрачные (полупрозрачные) фигуры. Это делается через установку свойства `globalAlpha` или задачи полупрозрачного цвета фона или контура.

- {{domxref("CanvasRenderingContext2D.globalAlpha", "globalAlpha = transparencyValue")}}
  - : Для применения, указывается значения прозрачности для всех будущих фигур, что будут нарисованы на canvas. Значение полупрозрачности могут быть между 0.0 (полная прозрачность) и 1.0 (полная непрозрачность). Значение 1.0 (полная непрозрачность) установлено по умолчанию.

Свойство `globalAlpha` может быть использовано, если вы хотите рисовать формы с одинаковой прозрачностью, но в иной ситуации, обычно устанавливают прозрачность индивидуально к каждой форме, когда указывают их цвет.

Так как свойства `strokeStyle` и `fillStyle` принимают цветовые значения rgba через CSS, мы можем использовать следующее обозначение для назначения прозрачных цветов.

```js
// Assigning transparent colors to stroke and fill style

ctx.strokeStyle = "rgba(255,0,0,0.5)";
ctx.fillStyle = "rgba(255,0,0,0.5)";
```

Функция `rgba()` похожа на функцию `rgb()`, но имеет один дополнительный параметр. Последний параметр устанавливает значение прозрачности для конкретного цвета. Действующий диапазон значений находится между 0.0 (полная прозрачность) и 1.0 (полная непрозрачность).

### Пример `globalAlpha`

В данном примере мы нарисуем фон и четыре квадрата с различными цветами. Сверху изображения будет выведен набор полупрозрачных кругов. Установим свойство `globalAlpha` значением 0.2, которое будет использовано для всех последующих форм. Каждый шаг цикла рисует круг с большим радиусом. По окончанию получим радиальный градиент. Накладывая ещё больше кругов друг на друга, мы фактически сможем уменьшить прозрачность ранее нарисованных кругов. Увеличив счётчик итераций, при этом рисуя ещё круги, мы сможем добиться исчезновение центра изображения.

```js
function draw() {
  var ctx = document.getElementById("canvas").getContext("2d");
  // фон изображения
  ctx.fillStyle = "#FD0";
  ctx.fillRect(0, 0, 75, 75);
  ctx.fillStyle = "#6C0";
  ctx.fillRect(75, 0, 75, 75);
  ctx.fillStyle = "#09F";
  ctx.fillRect(0, 75, 75, 75);
  ctx.fillStyle = "#F30";
  ctx.fillRect(75, 75, 75, 75);
  ctx.fillStyle = "#FFF";

  // устанавливаем значение прозрачности
  ctx.globalAlpha = 0.2;

  // Рисуем полупрозрачные круги
  for (i = 0; i < 7; i++) {
    ctx.beginPath();
    ctx.arc(75, 75, 10 + 10 * i, 0, Math.PI * 2, true);
    ctx.fill();
  }
}
```

```html hidden
<canvas id="canvas" width="150" height="150"></canvas>
```

```js hidden
draw();
```

{{EmbedLiveSample("Пример_globalAlpha", "180", "180", "canvas_globalalpha.png")}}

### Пример использования `rgba()`

В этом втором примере мы делаем что-то похожее на предыдущее, но вместо рисования кругов друг над другом, я рисовал маленькие прямоугольники с увеличением непрозрачности. Использование `rgba()` добавляет контроля и гибкости, поскольку мы можем индивидуально настраивать стиль заливки и штриха.

```js
function draw() {
  var ctx = document.getElementById("canvas").getContext("2d");

  // Нарисовать фон
  ctx.fillStyle = "rgb(255,221,0)";
  ctx.fillRect(0, 0, 150, 37.5);
  ctx.fillStyle = "rgb(102,204,0)";
  ctx.fillRect(0, 37.5, 150, 37.5);
  ctx.fillStyle = "rgb(0,153,255)";
  ctx.fillRect(0, 75, 150, 37.5);
  ctx.fillStyle = "rgb(255,51,0)";
  ctx.fillRect(0, 112.5, 150, 37.5);

  // Нарисовать полупрозрачные прямоугольники
  for (var i = 0; i < 10; i++) {
    ctx.fillStyle = "rgba(255,255,255," + (i + 1) / 10 + ")";
    for (var j = 0; j < 4; j++) {
      ctx.fillRect(5 + i * 14, 5 + j * 37.5, 14, 27.5);
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

{{EmbedLiveSample("Пример_использования_rgba", "180", "180", "canvas_rgba.png")}}

## Стили линий

Есть несколько свойств, которые позволяют нам стилизовать линии.

- {{domxref("CanvasRenderingContext2D.lineWidth", "lineWidth = value")}}
  - : Устанавливает ширину линий, рисуемых в будущем.
- {{domxref("CanvasRenderingContext2D.lineCap", "lineCap = type")}}
  - : Устанавливает внешний вид концов линий.
- {{domxref("CanvasRenderingContext2D.lineJoin", "lineJoin = type")}}
  - : Устанавливает внешний вид «углов», где встречаются линии.
- {{domxref("CanvasRenderingContext2D.miterLimit", "miterLimit = value")}}
  - : Устанавливает ограничение на митру, когда две линии соединяются под острым углом, чтобы вы могли контролировать её толщину.
- {{domxref("CanvasRenderingContext2D.getLineDash", "getLineDash()")}}
  - : Возвращает текущий массив тире штриховки, содержащий чётное число неотрицательных чисел.
- {{domxref("CanvasRenderingContext2D.setLineDash", "setLineDash(segments)")}}
  - : Устанавливает текущий пунктир линии.
- {{domxref("CanvasRenderingContext2D.lineDashOffset", "lineDashOffset = value")}}
  - : Указывает, где следует начинать тире массива в строке.

Вы лучше поймёте, что они делают, глядя на приведённые ниже примеры.

### Пример `lineWidth`

Это свойство задаёт толщину текущей строки. Значения должны быть положительными. По умолчанию для этого значения установлено 1.0 единицы.

Ширина линии - это толщина хода, центрированного по данному пути. Другими словами, область, которая нарисована, простирается до половины ширины линии по обе стороны пути. Поскольку координаты холста не напрямую ссылаются на пиксели, особое внимание следует уделять получению чётких горизонтальных и вертикальных линий.

В приведённом ниже примере 10 прямых линий рисуются с увеличением ширины линий. Линия в крайнем левом углу - 1.0 единицы. Тем не менее, толщина левой и всех других линий нечётной ширины не выглядят чёткими из-за позиционирования пути.

```js
function draw() {
  var ctx = document.getElementById("canvas").getContext("2d");
  for (var i = 0; i < 10; i++) {
    ctx.lineWidth = 1 + i;
    ctx.beginPath();
    ctx.moveTo(5 + i * 14, 5);
    ctx.lineTo(5 + i * 14, 140);
    ctx.stroke();
  }
}
```

```html hidden
<canvas id="canvas" width="150" height="150"></canvas>
```

```js hidden
draw();
```

{{EmbedLiveSample("Пример_lineWidth", "180", "180", "canvas_linewidth.png")}}

Получение чётких строк требует понимания путей сглаживания. На рисунках ниже представлена сетка координат холста. Квадраты между сетками являются фактическими экранными пикселями. В первом изображении сетки ниже прямоугольник от (2, 1) до (5, 5) заполняется. Вся область между ними (светло-красный) падает на границы пикселей, поэтому полученный заполненный прямоугольник будет иметь чёткие края.

![](canvas-grid.png)

Если вы рассмотрите путь от (3, 1) до (3, 5) с толщиной строки `1.0`, вы получите ситуацию во втором изображении. Фактическая заполняемая область, (синяя), распространяется только наполовину в пикселях по обе стороны пути. Приблизительно это означает, что частично затенённые пиксели приводят к заполнению всей области (светло-голубой и синей) цветом, только наполовину темным, чем фактический цвет штриха. Это то, что происходит с линией шириной `1.0` в предыдущем примере кода.

Чтобы исправить это, вы должны быть более точными при создании пути. Зная, что линия шириной `1.0` занимает половину единицы по обе стороны пути, создание пути от (3.5, 1) до (3.5, 5) приведёт к ситуации в третьем изображении - ширина линии `1.0` закончится верно, точно заполняя вертикальную линию с одним пикселем.

> **Примечание:** Имейте в виду, что в нашем примере с вертикальной линией позиция Y по-прежнему ссылается на целочисленную позицию сетки - иначе мы увидели бы пиксели с половинным охватом в конечных точках (также обратите внимание, что это поведение зависит от текущего стиля `lineCap`, значение по умолчанию - `butt`; вы можете вычислить согласованные штрихи с полупиксельными координатами для линий с нечётной шириной, установив стиль `lineCap` в `square`, чтобы внешняя граница вокруг конечной точки линии автоматически расширялась, охватывая весь пиксель в точку).
>
> Также обратите внимание, что затронуты только начальные и конечные точки пути: если путь закрыт с помощью `closePath()`, - нет начальной и конечной точки; вместо этого все конечные точки в пути подключены к их прикреплённому предыдущему и следующему сегментам и при текущей настройке стиля `lineJoin` в значении по умолчанию - `miter`, с эффектом автоматического расширения внешних границ подключённых сегментов до их точки пересечения - обработанный ход будет точно покрывать полные пиксели с центром в каждой конечной точке, если эти связанные сегменты горизонтальны и/или вертикальны). См. следующие два раздела, демонстрирующие эти дополнительные стили.

Для линий с чётной шириной каждая половина заканчивается как целое количество пикселей, поэтому вам нужен путь, который находится между пикселями (то есть (3,1) - (3,5)), вместо середины пикселей.

Хотя это и необычно, когда изначально работаешь с масштабируемой 2D-графикой, обращая внимание на сетку пикселей и положение путей, но вы убедитесь, что ваши рисунки будут выглядеть правильно, независимо от масштабирования или любых других преобразований. Вертикальная линия ширины 1,0, построенная таким образом, станет чёткой 2-пиксельной линией при увеличении на 2 и появится в правильном положении.

### Пример `lineCap`

Свойство `lineCap` определяет, как выводятся конечные точки каждой строки. Для этого свойства есть три возможных значения: `butt`, `round` и `square`. По умолчанию для этого свойства установлено значение `butt`.

![](canvas_linecap.png)

- `butt`
  - : Концы линий соответствуют крайним точкам.
- `round`
  - : Концы линий округлены.
- `square`
  - : Концы линий описаны квадратом с равной шириной и половиной высоты толщины линии.

В этом примере мы проведём три строки, каждая из которых имеет другое значение для свойства `lineCap`. Я также добавил два руководства, чтобы увидеть точные различия между ними. Каждая из этих линий начинается и заканчивается именно на этих направляющих.

Строка слева использует `butt` опцию по умолчанию. Вы заметите, что она полностью очищена от направляющих. Второй вариант - `round` опция. Это добавляет полукруг к концу, который имеет радиус, равный половине ширины линии. Строка справа использует `square` опцию. Это добавляет поле с равной шириной и половиной высоты толщины линии.

```js
function draw() {
  var ctx = document.getElementById("canvas").getContext("2d");
  var lineCap = ["butt", "round", "square"];

  // Draw guides
  ctx.strokeStyle = "#09f";
  ctx.beginPath();
  ctx.moveTo(10, 10);
  ctx.lineTo(140, 10);
  ctx.moveTo(10, 140);
  ctx.lineTo(140, 140);
  ctx.stroke();

  // Draw lines
  ctx.strokeStyle = "black";
  for (var i = 0; i < lineCap.length; i++) {
    ctx.lineWidth = 15;
    ctx.lineCap = lineCap[i];
    ctx.beginPath();
    ctx.moveTo(25 + i * 50, 10);
    ctx.lineTo(25 + i * 50, 140);
    ctx.stroke();
  }
}
```

```html hidden
<canvas id="canvas" width="150" height="150"></canvas>
```

```js hidden
draw();
```

{{EmbedLiveSample("Пример_lineCap", "180", "180", "canvas_linecap.png")}}

### Пример `lineJoin`

Свойство `lineJoin` определяет, как соединяются два сегмента (линий, дуг или кривых) с ненулевой длиной в форме (вырожденные сегменты с нулевой длиной, заданные конечные точки и контрольные точки находятся точно в том же положении - пропущены).

Для этого свойства есть три возможных значения: `round`, `bevel` и `miter`. По умолчанию для этого свойства установлено значение `miter`. Обратите внимание, что настройка `lineJoin` не действует, если два связанных сегмента имеют одно и то же направление, потому что в этом случае не будет добавлена область соединения.

![](canvas_linejoin.png)

- `round`
  - : Радиус заполняемой части для скруглённых углов равен половине ширины линии. центр этого радиуса совпадает с концами подключённых сегментов.
- `bevel`
  - : Заполняет дополнительную треугольную область между общей конечной точкой подключённых сегментов и отдельными внешними прямоугольными углами каждого сегмента.
- `miter`
  - : Подключённые сегменты соединяются путём расширения их внешних краёв для соединения в одной точке с эффектом заполнения дополнительной области в форме пастилки. Эта настройка выполняется с помощью свойства `miterLimit`, которое объясняется ниже.

В приведённом ниже примере показаны три разных пути, демонстрирующие каждый из этих трёх свойств `lineJoin`; результат - выше.

```js
function draw() {
  var ctx = document.getElementById("canvas").getContext("2d");
  var lineJoin = ["round", "bevel", "miter"];
  ctx.lineWidth = 10;
  for (var i = 0; i < lineJoin.length; i++) {
    ctx.lineJoin = lineJoin[i];
    ctx.beginPath();
    ctx.moveTo(-5, 5 + i * 40);
    ctx.lineTo(35, 45 + i * 40);
    ctx.lineTo(75, 5 + i * 40);
    ctx.lineTo(115, 45 + i * 40);
    ctx.lineTo(155, 5 + i * 40);
    ctx.stroke();
  }
}
```

```html hidden
<canvas id="canvas" width="150" height="150"></canvas>
```

```js hidden
draw();
```

{{EmbedLiveSample("Пример_lineJoin", "180", "180", "canvas_linejoin.png")}}

### Демонстрация свойства `miterLimit`

Как вы видели в предыдущем примере, при объединении двух строк с опцией `miter` внешние края двух соединительных линий расширены до точки, где они встречаются. Для линий, которые находятся под большими углами друг с другом, эта точка находится недалеко от внутренней точки соединения. Однако, поскольку углы между каждой линией уменьшаются, расстояние (длина меча) между этими точками увеличивается экспоненциально.

Свойство `miterLimit` определяет, как далеко можно установить внешнюю точку соединения из внутренней точки подключения. Если две линии превышают это значение, вместо этого получается привязка конуса. Обратите внимание, что максимальная длина митра является произведением ширины линии, измеренной в текущей системе координат, значением этого свойства `miterLimit` (значение по умолчанию 10,0 в HTML {{HTMLElement("canvas")}}), поэтому `miterLimit` может устанавливаться независимо от текущей шкалы дисплея или любых аффинных преобразований путей: она влияет только на эффективно визуализированную форму рёбер линии.

Точнее, предел митры является максимально допустимым отношением длины расширения (в холсте HTML он измеряется между внешним углом соединённых краёв линии и общей конечной точкой соединительных сегментов, указанными на пути), до половины ширины линии. Его можно равнозначно определить как максимально допустимое отношение расстояния между внутренней и внешней точками перехода краёв к общей ширине линии. Затем он равен косекансу с половиной минимального внутреннего угла соединительных сегментов, ниже которого не будет создано ни одного соединения митра, а только скос соединяется:

- `miterLimit` = **max** `miterLength` / `lineWidth` = 1 / **sin** ( **min** _θ_ / 2 )
- Предел митры по умолчанию, равный 10,0, разделит все митры углов, острее примерно 11 градусов.
- Предел митры, равный √2 ≈ 1.4142136 (rounded up) сгладит миты для всех острых углов, поддерживая митры только для тупых или прямых углов.
- Предел митры, равный 1,0, действителен, но отключит все миты.
- Значения ниже 1.0 являются недопустимыми для предела митры.

Вот небольшая демонстрация, в которой вы можете динамически установить `miterLimit` и посмотреть, как это влияет на фигуры на холсте. Синие линии показывают, где начальная и конечная точки для каждой из линий в шаблоне зигзага.

Если вы укажете в этой демонстрации значение `miterLimit` ниже 4.2, ни один из видимых углов не присоединится к расширению митры, но только с небольшим скосом рядом с синими линиями; с отметкой `miterLimit` выше 10, большинство углов в этой демонстрации должны соединяться с митрой, удалённой от синих линий, высота которой уменьшается между углами слева направо, потому что они соединяются с растущими углами; с промежуточными значениями углы с левой стороны будут соединяться только с скосом рядом с синими линиями, а углы с правой стороны с удлинителем митры (также с уменьшающейся высотой).

```js
function draw() {
  var ctx = document.getElementById("canvas").getContext("2d");

  // Clear canvas
  ctx.clearRect(0, 0, 150, 150);

  // Draw guides
  ctx.strokeStyle = "#09f";
  ctx.lineWidth = 2;
  ctx.strokeRect(-5, 50, 160, 50);

  // Set line styles
  ctx.strokeStyle = "#000";
  ctx.lineWidth = 10;

  // check input
  if (document.getElementById("miterLimit").value.match(/\d+(\.\d+)?/)) {
    ctx.miterLimit = parseFloat(document.getElementById("miterLimit").value);
  } else {
    alert("Value must be a positive number");
  }

  // Draw lines
  ctx.beginPath();
  ctx.moveTo(0, 100);
  for (i = 0; i < 24; i++) {
    var dy = i % 2 == 0 ? 25 : -25;
    ctx.lineTo(Math.pow(i, 1.5) * 2, 75 + dy);
  }
  ctx.stroke();
  return false;
}
```

```html hidden
<table>
  <tr>
    <td><canvas id="canvas" width="150" height="150"></canvas></td>
    <td>
      Change the <code>miterLimit</code> by entering a new value below and
      clicking the redraw button.<br /><br />
      <form onsubmit="return draw();">
        <label>Miter limit</label>
        <input type="text" size="3" id="miterLimit" />
        <input type="submit" value="Redraw" />
      </form>
    </td>
  </tr>
</table>
```

```js hidden
document.getElementById("miterLimit").value = document
  .getElementById("canvas")
  .getContext("2d").miterLimit;
draw();
```

{{EmbedLiveSample("Демонстрация_свойства_miterLimit", "400", "180", "canvas_miterlimit.png")}}

### Использование штрихов

Метод setLineDash и свойство lineDashOffset задают шаблон штрихов для линий. Метод setLineDash принимает список чисел, который определяет расстояния для попеременного рисования линии и разрыва, а свойство lineDashOffset устанавливает смещение, с которого начинается шаблон.

В этом примере мы создаём эффект походных муравьёв. Это техника анимации, часто встречающаяся в инструментах выбора программ компьютерной графики. Это помогает пользователю отличить границу выделения от фона изображения, анимируя границу. В следующей части этого руководства вы узнаете, как сделать эту и другие основные анимации.

```html hidden
<canvas id="canvas" width="110" height="110"></canvas>
```

```js
var ctx = document.getElementById("canvas").getContext("2d");
var offset = 0;

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.setLineDash([4, 2]);
  ctx.lineDashOffset = -offset;
  ctx.strokeRect(10, 10, 100, 100);
}

function march() {
  offset++;
  if (offset > 16) {
    offset = 0;
  }
  draw();
  setTimeout(march, 20);
}

march();
```

{{EmbedLiveSample("Использование_штрихов", "120", "120", "marching-ants.png")}}

## Градиенты

Just like any normal drawing program, we can fill and stroke shapes using linear and radial gradients. We create a {{domxref("CanvasGradient")}} object by using one of the following methods. We can then assign this object to the `fillStyle` or `strokeStyle` properties.

- {{domxref("CanvasRenderingContext2D.createLinearGradient", "createLinearGradient(x1, y1, x2, y2)")}}
  - : Creates a linear gradient object with a starting point of (`x1`, `y1`) and an end point of (`x2`, `y2`).
- {{domxref("CanvasRenderingContext2D.createRadialGradient", "createRadialGradient(x1, y1, r1, x2, y2, r2)")}}
  - : Creates a radial gradient. The parameters represent two circles, one with its center at (`x1`, `y1`) and a radius of `r1`, and the other with its center at (`x2`, `y2`) with a radius of `r2`.

For example:

```js
var lineargradient = ctx.createLinearGradient(0, 0, 150, 150);
var radialgradient = ctx.createRadialGradient(75, 75, 0, 75, 75, 100);
```

Once we've created a `CanvasGradient` object we can assign colors to it by using the `addColorStop()` method.

- {{domxref("CanvasGradient.addColorStop", "gradient.addColorStop(position, color)")}}
  - : Creates a new color stop on the `gradient` object. The `position` is a number between 0.0 and 1.0 and defines the relative position of the color in the gradient, and the `color` argument must be a string representing a CSS {{cssxref("&lt;color&gt;")}}, indicating the color the gradient should reach at that offset into the transition.

You can add as many color stops to a gradient as you need. Below is a very simple linear gradient from white to black.

```js
var lineargradient = ctx.createLinearGradient(0, 0, 150, 150);
lineargradient.addColorStop(0, "white");
lineargradient.addColorStop(1, "black");
```

### Пример `createLinearGradient`

In this example, we'll create two different gradients. As you can see here, both the `strokeStyle` and `fillStyle` properties can accept a `canvasGradient` object as valid input.

```js
function draw() {
  var ctx = document.getElementById("canvas").getContext("2d");

  // Create gradients
  var lingrad = ctx.createLinearGradient(0, 0, 0, 150);
  lingrad.addColorStop(0, "#00ABEB");
  lingrad.addColorStop(0.5, "#fff");
  lingrad.addColorStop(0.5, "#26C000");
  lingrad.addColorStop(1, "#fff");

  var lingrad2 = ctx.createLinearGradient(0, 50, 0, 95);
  lingrad2.addColorStop(0.5, "#000");
  lingrad2.addColorStop(1, "rgba(0,0,0,0)");

  // assign gradients to fill and stroke styles
  ctx.fillStyle = lingrad;
  ctx.strokeStyle = lingrad2;

  // draw shapes
  ctx.fillRect(10, 10, 130, 130);
  ctx.strokeRect(50, 50, 50, 50);
}
```

```html hidden
<canvas id="canvas" width="150" height="150"></canvas>
```

```js hidden
draw();
```

The first is a background gradient. As you can see, we assigned two colors at the same position. You do this to make very sharp color transitions—in this case from white to green. Normally, it doesn't matter in what order you define the color stops, but in this special case, it does significantly. If you keep the assignments in the order you want them to appear, this won't be a problem.

In the second gradient, we didn't assign the starting color (at position 0.0) since it wasn't strictly necessary, because it will automatically assume the color of the next color stop. Therefore, assigning the black color at position 0.5 automatically makes the gradient, from the start to this stop, black.

{{EmbedLiveSample("Пример_createLinearGradient", "180", "180", "canvas_lineargradient.png")}}

### Пример `createRadialGradient`

In this example, we'll define four different radial gradients. Because we have control over the start and closing points of the gradient, we can achieve more complex effects than we would normally have in the "classic" radial gradients we see in, for instance, Photoshop (that is, a gradient with a single center point where the gradient expands outward in a circular shape).

```js
function draw() {
  var ctx = document.getElementById("canvas").getContext("2d");

  // Create gradients
  var radgrad = ctx.createRadialGradient(45, 45, 10, 52, 50, 30);
  radgrad.addColorStop(0, "#A7D30C");
  radgrad.addColorStop(0.9, "#019F62");
  radgrad.addColorStop(1, "rgba(1,159,98,0)");

  var radgrad2 = ctx.createRadialGradient(105, 105, 20, 112, 120, 50);
  radgrad2.addColorStop(0, "#FF5F98");
  radgrad2.addColorStop(0.75, "#FF0188");
  radgrad2.addColorStop(1, "rgba(255,1,136,0)");

  var radgrad3 = ctx.createRadialGradient(95, 15, 15, 102, 20, 40);
  radgrad3.addColorStop(0, "#00C9FF");
  radgrad3.addColorStop(0.8, "#00B5E2");
  radgrad3.addColorStop(1, "rgba(0,201,255,0)");

  var radgrad4 = ctx.createRadialGradient(0, 150, 50, 0, 140, 90);
  radgrad4.addColorStop(0, "#F4F201");
  radgrad4.addColorStop(0.8, "#E4C700");
  radgrad4.addColorStop(1, "rgba(228,199,0,0)");

  // draw shapes
  ctx.fillStyle = radgrad4;
  ctx.fillRect(0, 0, 150, 150);
  ctx.fillStyle = radgrad3;
  ctx.fillRect(0, 0, 150, 150);
  ctx.fillStyle = radgrad2;
  ctx.fillRect(0, 0, 150, 150);
  ctx.fillStyle = radgrad;
  ctx.fillRect(0, 0, 150, 150);
}
```

```html hidden
<canvas id="canvas" width="150" height="150"></canvas>
```

```js hidden
draw();
```

In this case, we've offset the starting point slightly from the end point to achieve a spherical 3D effect. It's best to try to avoid letting the inside and outside circles overlap because this results in strange effects which are hard to predict.

The last color stop in each of the four gradients uses a fully transparent color. If you want to have a nice transition from this to the previous color stop, both colors should be equal. This isn't very obvious from the code because it uses two different CSS color methods as a demonstration, but in the first gradient `#019F62 = rgba(1,159,98,1)`.

{{EmbedLiveSample("Пример_createRadialGradient", "180", "180", "canvas_radialgradient.png")}}

## Шаблоны

В одном из предыдущих примеров мы использовали несколько циклов, чтобы создать шаблон из повторяющихся изображений. Однако, есть более простой способ сделать подобное - метод `createPattern()`.

- {{domxref("CanvasRenderingContext2D.createPattern", "createPattern(image, type)")}}
  - : Создаёт и возвращает новый canvas объект - шаблон (pattern). `image` - {{domxref("CanvasImageSource")}} (то есть {{domxref ("HTMLImageElement")}}, другой холст, элемент {{HTMLElement ("video")}} или подобный объект. `type` - строка, указывающая, как использовать `image`.

Тип указывает, как использовать image для создания шаблона и должен быть одним из следующих значений:

- `repeat`
  - : Повторяет изображение в вертикальном и горизонтальном направлениях.
- `repeat-x`
  - : Повторяет изображение по горизонтали, но не по вертикали.
- `repeat-y`
  - : Повторяет изображение по вертикали, но не по горизонтали.
- `no-repeat`
  - : Не повторяет изображение. Используется только один раз.

Мы используем этот метод, чтобы создать {{domxref("CanvasPattern")}} объект, который очень похож на методы градиента, рассмотренные ранее. Как только мы создали шаблон, мы можем назначить ему свойства `fillStyle` или `strokeStyle`. Например:

```js
var img = new Image();
img.src = "someimage.png";
var ptrn = ctx.createPattern(img, "repeat");
```

> **Примечание:** По аналогии с методом `drawImage()`, вы должны убедиться, что изображение, которое вы используете, загружено до вызова этого метода. Иначе шаблон может быть отрисован некорректно.

### Пример `createPattern`

In this last example, we'll create a pattern to assign to the `fillStyle` property. The only thing worth noting is the use of the image's `onload` handler. This is to make sure the image is loaded before it is assigned to the pattern.

```js
function draw() {
  var ctx = document.getElementById("canvas").getContext("2d");

  // create new image object to use as pattern
  var img = new Image();
  img.src = "canvas_createpattern.png";
  img.onload = function () {
    // create pattern
    var ptrn = ctx.createPattern(img, "repeat");
    ctx.fillStyle = ptrn;
    ctx.fillRect(0, 0, 150, 150);
  };
}
```

```html hidden
<canvas id="canvas" width="150" height="150"></canvas>
```

```js hidden
draw();
```

{{EmbedLiveSample("Пример_createPattern", "180", "180", "canvas_createpattern.png")}}

## Тени

Using shadows involves just four properties:

- {{domxref("CanvasRenderingContext2D.shadowOffsetX", "shadowOffsetX = float")}}
  - : Indicates the horizontal distance the shadow should extend from the object. This value isn't affected by the transformation matrix. The default is 0.
- {{domxref("CanvasRenderingContext2D.shadowOffsetY", "shadowOffsetY = float")}}
  - : Indicates the vertical distance the shadow should extend from the object. This value isn't affected by the transformation matrix. The default is 0.
- {{domxref("CanvasRenderingContext2D.shadowBlur", "shadowBlur = float")}}
  - : Indicates the size of the blurring effect; this value doesn't correspond to a number of pixels and is not affected by the current transformation matrix. The default value is 0.
- {{domxref("CanvasRenderingContext2D.shadowColor", "shadowColor = color")}}
  - : A standard CSS color value indicating the color of the shadow effect; by default, it is fully-transparent black.

The properties `shadowOffsetX` and `shadowOffsetY` indicate how far the shadow should extend from the object in the X and Y directions; these values aren't affected by the current transformation matrix. Use negative values to cause the shadow to extend up or to the left, and positive values to cause the shadow to extend down or to the right. These are both 0 by default.

The `shadowBlur` property indicates the size of the blurring effect; this value doesn't correspond to a number of pixels and is not affected by the current transformation matrix. The default value is 0.

The `shadowColor` property is a standard CSS color value indicating the color of the shadow effect; by default, it is fully-transparent black.

> **Примечание:** Shadows are only drawn for `source-over` [compositing operations](/ru/docs/Web/API/Canvas_API/Tutorial/Compositing).

### Пример текста с тенью

This example draws a text string with a shadowing effect.

```js
function draw() {
  var ctx = document.getElementById("canvas").getContext("2d");

  ctx.shadowOffsetX = 2;
  ctx.shadowOffsetY = 2;
  ctx.shadowBlur = 2;
  ctx.shadowColor = "rgba(0, 0, 0, 0.5)";

  ctx.font = "20px Times New Roman";
  ctx.fillStyle = "Black";
  ctx.fillText("Sample String", 5, 30);
}
```

```html hidden
<canvas id="canvas" width="150" height="80"></canvas>
```

```js hidden
draw();
```

{{EmbedLiveSample("Пример_текста_с_тенью", "180", "100", "shadowed-string.png")}}

We will look at the `font` property and `fillText` method in the next chapter about [drawing text](/ru/docs/Web/API/Canvas_API/Tutorial/Drawing_text).

## Canvas fill rules

When using `fill` (or {{domxref("CanvasRenderingContext2D.clip", "clip")}} and {{domxref("CanvasRenderingContext2D.isPointInPath", "isPointinPath")}}) you can optionally provide a fill rule algorithm by which to determine if a point is inside or outside a path and thus if it gets filled or not. This is useful when a path intersetcs itself or is nested.

Two values are possible:

- `nonzero`
  - : The [non-zero winding rule](http://en.wikipedia.org/wiki/Nonzero-rule), which is the default rule.
- `evenodd`
  - : The [even-odd winding rule](http://en.wikipedia.org/wiki/Even%E2%80%93odd_rule).

In this example we are using the `evenodd` rule.

```js
function draw() {
  var ctx = document.getElementById("canvas").getContext("2d");
  ctx.beginPath();
  ctx.arc(50, 50, 30, 0, Math.PI * 2, true);
  ctx.arc(50, 50, 15, 0, Math.PI * 2, true);
  ctx.fill("evenodd");
}
```

```html hidden
<canvas id="canvas" width="100" height="100"></canvas>
```

```js hidden
draw();
```

{{EmbedLiveSample("Canvas_fill_rules", "110", "110", "fill-rule.png")}}

{{PreviousNext("Web/API/Canvas_API/Tutorial/Drawing_shapes", "Web/API/Canvas_API/Tutorial/Drawing_text")}}
