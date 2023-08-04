---
title: CanvasRenderingContext2D.ellipse()
slug: Web/API/CanvasRenderingContext2D/ellipse
---

{{APIRef}}

**`CanvasRenderingContext2D.ellipse()`** - метод Canvas 2D API, который добавляет эллиптическую дугу к текущему подпространству.

## Синтаксис

```
void ctx.ellipse(x, y, radiusX, radiusY, rotation, startAngle, endAngle [, anticlockwise]);
```

`ellipse()` - метод, который создаёт эллиптическую дугу с центром в точках `(x, y)` с радиусом `radiusX` и `radiusY`. Путь начинается от точки `startAngle` и заканчивается в точке `endAngle`, идёт по направлению, казанному в параметре (по часовой стрелке или против неё) `anticlockwise` .

### Параметры

- `x`
  - : Координата центра эллипса по оси x (горизонтальная).
- `y`
  - : Координата центра эллипса по оси y (вертикальная).
- `radiusX`
  - : Радиус оси x эллипса. Должен быть неотрицательным.
- `radiusY`
  - : Радиус оси y эллипса. Должен быть неотрицательным.
- `rotation`
  - : Вращение эллипса, выраженное в радианах.
- `startAngle`
  - : Угол, под которым начинается эллипс, измеряется по часовой стрелке от положительной оси x и выражается в радианах.
- `endAngle`
  - : Угол, под которым эллипс заканчивается, измеряется по часовой стрелке от положительной оси x и выражается в радианах.
- `anticlockwise` {{optional_inline}}
  - : Опция {{jsxref("Boolean")}}, которая при `true`, рисует эллипс против часовой стрелки (counter-clockwise). Значение по умолчанию равно `false` - рисование по часовой стрелке (clockwise).

## Примеры

### Рисование полного эллипса

Этот пример рисует эллипс под углом π / 4 Радианы (45°). Чтобы сделать полный эллипс, дуга начинается под углом 0 радианов (0°) и заканчивается под углом 2π радианов (360°).

#### HTML

```html
<canvas id="canvas" width="200" height="200"></canvas>
```

#### JavaScript

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// Рисование эллипса
ctx.beginPath();
ctx.ellipse(100, 100, 50, 75, Math.PI / 4, 0, 2 * Math.PI);
ctx.stroke();

// Рисование линии отражения эллипса
ctx.beginPath();
ctx.setLineDash([5, 5]);
ctx.moveTo(0, 200);
ctx.lineTo(200, 0);
ctx.stroke();
```

#### Результат

{{ EmbedLiveSample('Рисование_полного_эллипса', 700, 250) }}

### Различные эллиптические дуги

В этом примере создаются три эллиптических контура с различными свойствами.

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

ctx.fillStyle = "red";
ctx.beginPath();
ctx.ellipse(60, 75, 50, 30, Math.PI * 0.25, 0, Math.PI * 1.5);
ctx.fill();

ctx.fillStyle = "blue";
ctx.beginPath();
ctx.ellipse(150, 75, 50, 30, Math.PI * 0.25, 0, Math.PI);
ctx.fill();

ctx.fillStyle = "green";
ctx.beginPath();
ctx.ellipse(240, 75, 50, 30, Math.PI * 0.25, 0, Math.PI, true);
ctx.fill();
```

#### Результат

{{ EmbedLiveSample('Различные_эллиптические_дуги', 700, 180) }}

## Спецификации

{{Specifications}}

## Совместимость браузера

{{Compat}}

## Изучите также

- Интерфейс, определяющий этот метод:{{domxref("CanvasRenderingContext2D")}}
- Используйте {{domxref("CanvasRenderingContext2D.arc()")}}, чтобы нарисовать дугу окружности
