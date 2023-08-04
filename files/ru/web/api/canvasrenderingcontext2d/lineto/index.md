---
title: CanvasRenderingContext2D.lineTo()
slug: Web/API/CanvasRenderingContext2D/lineTo
---

{{APIRef}}

**`lineTo()`** - метод {{domxref("CanvasRenderingContext2D")}}, часть Canvas 2D API, добавляет линию к текущему под пути с конечной точкой с координатами `(x, y)`.

Сам метод ничего не рисует, он лишь добавляет подпуть к текущему пути, предоставляя его таким методам, как {{domxref("CanvasRenderingContext2D.fill", "fill()")}} и {{domxref("CanvasRenderingContext2D.stroke", "stroke()")}}, отрисовывающим сам путь.

## Синтаксис

```
ctx.lineTo(x, y);
```

### Параметры

- `x`
  - : OX значение конца линии.
- `y`
  - : OY значение конца линии.

### Возвращаемое значение

{{jsxref("undefined")}}.

## Примеры

### Рисование прямых линий

Этот пример рисует прямую линию используя метод `lineTo()`.

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

Линия начинается в точке (30, 50), а заканчивается в точке (150, 100).

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

ctx.beginPath(); // Начинает новый путь
ctx.moveTo(30, 50); // Передвигает перо в точку (30, 50)
ctx.lineTo(150, 100); // Рисует линию до точки (150, 100)
ctx.stroke(); // Отображает путь
```

#### Результат

{{ EmbedLiveSample('Рисование_прямых_линий', 700, 180) }}

### Рисование соединённых линий

Каждый вызов `lineTo()` автоматически добавляет текущий подпуть, это означает, что все линии будут обведены и закрашены вместе. Этот пример рисует букву 'M' линиями одного пути.

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

ctx.moveTo(90, 130);
ctx.lineTo(95, 25);
ctx.lineTo(150, 80);
ctx.lineTo(205, 25);
ctx.lineTo(210, 130);
ctx.lineWidth = 15;
ctx.stroke();
```

#### Результаты

{{ EmbedLiveSample('Рисование_соединённых_линий', 700, 180) }}

## Спецификации

{{Specifications}}

## Поддержка браузерами

{{Compat}}

## Смотрите также

- Интерфейс, определяющий этот метод: {{domxref("CanvasRenderingContext2D")}}
- {{domxref("CanvasRenderingContext2D.moveTo()")}}
- {{domxref("CanvasRenderingContext2D.stroke()")}}
