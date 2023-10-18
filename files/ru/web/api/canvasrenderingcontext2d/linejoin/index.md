---
title: CanvasRenderingContext2D.lineJoin
slug: Web/API/CanvasRenderingContext2D/lineJoin
---

{{APIRef}}

Свойство **`CanvasRenderingContext2D.lineJoin`** предоставляемое Canvas 2D API определяет форму вершин в которых линии сходятся. Длина линий должна быть ненулевой.

Смотрите также главу [Applying styles and color](/ru/docs/Web/API/Canvas_API/Tutorial/Applying_styles_and_colors) в [Canvas Tutorial](/ru/docs/Web/API/Canvas_API/Tutorial).

> **Примечание:** Lines can be drawn with the {{domxref("CanvasRenderingContext2D.stroke()", "stroke()")}}, {{domxref("CanvasRenderingContext2D.strokeRect()", "strokeRect()")}}, and {{domxref("CanvasRenderingContext2D.strokeText()", "strokeText()")}} methods.

## Синтаксис

```
ctx.lineJoin = "bevel" || "round" || "miter";
```

### Значения

Свойство может принимать три значения: `round`, `bevel` и `miter`. По умолчанию установлено значение `miter`. Имейте ввиду, что свойство никак не повлияет на линии направленные в одну сторону, потому что не будет создана зона пересечения.

![](canvas_linejoin.png)

- `round`
  - : Скругляет углы за счёт добавления сектора с центром в точке пересечения линий и радиусом равным толщине линии.
- `bevel`
  - : "Срезает" угол, рисуя треугольник с вершинами в точке пересечения линий и крайних точках каждой линии.
- `miter`
  - : Соединяет линии в одной точке, расширяя для этого их границы и заполняя пространство ромбами . Установка этого эффекта осуществляется свойством {{domxref("CanvasRenderingContext2D.miterLimit", "miterLimit")}}.

## Примеры

### Использование свойства lineJoin

Ниже представлен простой фрагмент кода, использующий `lineJoin` для скругления места соединения линий.

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

ctx.lineWidth = 20;
ctx.lineJoin = "round";
ctx.beginPath();
ctx.moveTo(20, 20);
ctx.lineTo(190, 100);
ctx.lineTo(280, 20);
ctx.lineTo(280, 150);
ctx.stroke();
```

#### Result

{{ EmbedLiveSample('Использование_свойства_lineJoin', 700, 180) }}

### Разница между значениями lineJoin

Пример ниже наглядно демонстрирует разницу между значениями свойства `lineJoin.`

```html hidden
<canvas id="canvas" width="150" height="150"></canvas>
```

```js
var ctx = document.getElementById("canvas").getContext("2d");
var lineJoin = ["round", "bevel", "miter"];
ctx.lineWidth = 10;

for (let i = 0; i < lineJoin.length; i++) {
  ctx.lineJoin = lineJoin[i];
  ctx.beginPath();
  ctx.moveTo(-5, 5 + i * 40);
  ctx.lineTo(35, 45 + i * 40);
  ctx.lineTo(75, 5 + i * 40);
  ctx.lineTo(115, 45 + i * 40);
  ctx.lineTo(155, 5 + i * 40);
  ctx.stroke();
}
```

{{EmbedLiveSample("Разница_между_значениями_lineJoin", "180", "180", "canvas_linejoin.png")}}

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- Интерфейс, предоставляющий данное свойство: {{domxref("CanvasRenderingContext2D")}}
- {{domxref("CanvasRenderingContext2D.lineCap")}}
- {{domxref("CanvasRenderingContext2D.lineWidth")}}
