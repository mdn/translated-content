---
title: CanvasRenderingContext2D.arcTo()
slug: Web/API/CanvasRenderingContext2D/arcTo
---

{{APIRef}}

В Canvas 2D API есть метод **`CanvasRenderingContext2D.arcTo()`**. Он добавляет дугу к контуру (path) с заданными контрольными точками и радиусом, соединяя их прямой линией с предыдущей точкой контура.

Обычно метод используется для скругления углов.

> **Примечание:** Помните, что вы можете получить неожиданный результат при использовании большого радиуса: соединительная линия дуги будет идти в любом направлении, в котором она должна соответствовать указанному радиусу.

## Синтаксис

```
void ctx.arcTo(x1, y1, x2, y2, radius);
```

### Параметры

- `x1`
  - : Координата **x** первой контрольной точки.
- `y1`
  - : Координата **y** первой контрольной точки.
- `x2`
  - : Координата **x** второй контрольной точки.
- `y2`
  - : Координата **y** второй контрольной точки.
- `radius`
  - : Радиус дуги. Не может быть отрицательным.

## Примеры

### Как работает arcTo

Один из способов понять как работает `arcTo()` - представить две прямые линии: одна идёт от начальной точки к первой контрольной точке, а вторая от этой точки до второй контрольной точки. Без `arcTo()` эти два сегмента образовали бы острый угол: `arcTo()` создаёт дугу между этими двумя точками и сглаживает его. Другими словами, дуга является касательной для обеих линий.

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// Касательная линия
ctx.beginPath();
ctx.strokeStyle = "gray";
ctx.moveTo(200, 20);
ctx.lineTo(200, 130);
ctx.lineTo(50, 20);
ctx.stroke();

// Дуга
ctx.beginPath();
ctx.strokeStyle = "black";
ctx.lineWidth = 5;
ctx.moveTo(200, 20);
ctx.arcTo(200, 130, 50, 20, 40);
ctx.stroke();

// Начальная точка
ctx.beginPath();
ctx.fillStyle = "blue";
ctx.arc(200, 20, 5, 0, 2 * Math.PI);
ctx.fill();

// Контрольные точки
ctx.beginPath();
ctx.fillStyle = "red";
ctx.arc(200, 130, 5, 0, 2 * Math.PI); // Первая контрольная точка
ctx.arc(50, 20, 5, 0, 2 * Math.PI); // Вторая контрольная точка
ctx.fill();
```

#### Результат

В этом примере контур, созданный с помощью `arcTo()` **жирный и чёрный**. Касательная линия серия, контрольные точки красные, а начальная точка синяя.

{{ EmbedLiveSample('Как_работает_arcTo', 315, 165) }}

### Создание скруглённого угла

В этом примере создаётся скруглённый угол с использованием `arcTo()`. Это ещё один метод, который часто используется.

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

Дуга начинается в точке, заданной в `moveTo()`: (230, 20). Она сформирована так, чтобы соответствовать точкам на (90, 130) и (20, 20) с радиусом 50. Метод `lineTo()` соединяет дугу с (20, 20) прямой линией. Заметьте, что вторая контрольная точка дуги и точка, заданная в `lineTo()` одинаковые, что создаёт абсолютно гладкий угол.

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const p0 = { x: 230, y: 20 };
const p1 = { x: 90, y: 130 };
const p2 = { x: 20, y: 20 };

const labelPoint = function (p) {
  const offset = 15;
  ctx.fillText("(" + p.x + "," + p.y + ")", p.x + offset, p.y + offset);
};

ctx.beginPath();
ctx.moveTo(p0.x, p0.y);
ctx.arcTo(p1.x, p1.y, p2.x, p2.y, 50);
ctx.lineTo(p2.x, p2.y);

labelPoint(p0);
labelPoint(p1);
labelPoint(p2);

ctx.stroke();
```

#### Результат

{{ EmbedLiveSample('Создание_скруглённого_угла', 315, 165) }}

### Результат с большим радиусом

Если вы используете относительно большой радиус, дуга может появиться в том месте, где вы её не ожидаете. В данном примере соединительная линия дуги идёт вверху, а не внизу. Это происходит потому что радиус слишком большой, чтобы уместить дугу между точками.

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

ctx.beginPath();
ctx.moveTo(180, 90);
ctx.arcTo(180, 130, 110, 130, 130);
ctx.lineTo(110, 130);
ctx.stroke();
```

#### Результат

{{ EmbedLiveSample('Результат_с_большим_радиусом', 315, 165) }}

### Живая демонстрация

Более сложная демонстрация метода. Вы можете поиграть с диапазоном ввода, чтобы увидеть, как изменяется дуга.

#### HTML

```html
<div>
  <label for="radius">Radius: </label>
  <input name="radius" type="range" id="radius" min="0" max="100" value="50" />
  <label for="radius" id="radius-output">50</label>
</div>
<canvas id="canvas"></canvas>
```

#### JavaScript

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const controlOut = document.getElementById("radius-output");
const control = document.getElementById("radius");
control.oninput = () => {
  controlOut.textContent = r = control.value;
};

const mouse = { x: 0, y: 0 };

let r = 100; // Radius
const p0 = { x: 0, y: 50 };

const p1 = { x: 100, y: 100 };
const p2 = { x: 150, y: 50 };
const p3 = { x: 200, y: 100 };

const labelPoint = function (p, offset, i = 0) {
  const { x, y } = offset;
  ctx.beginPath();
  ctx.arc(p.x, p.y, 2, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillText(`${i}:(${p.x}, ${p.y})`, p.x + x, p.y + y);
};

const drawPoints = function (points) {
  for (let i = 0; i < points.length; i++) {
    var p = points[i];
    labelPoint(p, { x: 0, y: -20 }, i);
  }
};

// Draw arc
const drawArc = function ([p0, p1, p2], r) {
  ctx.beginPath();
  ctx.moveTo(p0.x, p0.y);
  ctx.arcTo(p1.x, p1.y, p2.x, p2.y, r);
  ctx.lineTo(p2.x, p2.y);
  ctx.stroke();
};

let t0 = 0;
let rr = 0; // радиус, который меняется со временем
let a = 0; // angle
let PI2 = Math.PI * 2;
const loop = function (t) {
  t0 = t / 1000;
  a = t0 % PI2;
  rr = Math.abs(Math.cos(a) * r);

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  drawArc([p1, p2, p3], rr);
  drawPoints([p1, p2, p3]);
  requestAnimationFrame(loop);
};

loop(0);
```

#### Результат

{{EmbedLiveSample('Живая_демонстрация', 315, 200) }}

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- Элемент определяющий этот метод, {{domxref("CanvasRenderingContext2D")}}
