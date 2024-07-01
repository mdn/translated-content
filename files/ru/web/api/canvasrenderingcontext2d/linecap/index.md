---
title: CanvasRenderingContext2D.lineCap
slug: Web/API/CanvasRenderingContext2D/lineCap
---

{{APIRef}}

Свойство **`CanvasRenderingContext2D.lineCap`** предоставляемое Canvas 2D API определяет, как будут выглядеть концы нарисованных линий.

> **Примечание:** Линии могут быть нарисованы с помощью методов {{domxref("CanvasRenderingContext2D.stroke()", "stroke()")}}, {{domxref("CanvasRenderingContext2D.strokeRect()", "strokeRect()")}}, и {{domxref("CanvasRenderingContext2D.strokeText()", "strokeText()")}} methods.

## Синтаксис

```
ctx.lineCap = "butt" || "round" || "square";
```

### Параметры

- `butt`
  - : Концы линий прямые.
- `round`
  - : Концы линий скруглённые.
- `square`
  - : Концы линий прямые, но к ней с обоих концов добавляется поле с шириной равной толщине линии и высотой равной половине от толщины линии.

## Примеры

### Использование свойства lineCap

Ниже представлен простой фрагмент кода, использующий `lineCap.`

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

ctx.beginPath();
ctx.moveTo(20, 20);
ctx.lineWidth = 15;
ctx.lineCap = "round";
ctx.lineTo(100, 100);
ctx.stroke();
```

#### Результат

{{ EmbedLiveSample('Использование_свойства_lineCap', 700, 180) }}

### Разница между значениями lineCap

В примере нарисованы три линии с разными значениями `lineCap`. Для наглядности мы добавим две направляющие. Каждая линия будет начинаться и заканчиваться этими направляющими.

Левая линия будет использовать значение lineCap `"butt"`. Она не будет выходить за направляющие. Средняя линия будет нарисована со значением lineCap `"round"`. За направляющие будут выходить полукруги с диаметром равным толщине линии. Правая линия будет использовать значение `"square"`. Она будет выходить за направляющие на поля с шириной равной толщине линии и высотой равной половине толщины.

```html hidden
<canvas id="canvas" width="150" height="150"></canvas>
```

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const lineCap = ["butt", "round", "square"];

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
for (let i = 0; i < lineCap.length; i++) {
  ctx.lineWidth = 15;
  ctx.lineCap = lineCap[i];
  ctx.beginPath();
  ctx.moveTo(25 + i * 50, 10);
  ctx.lineTo(25 + i * 50, 140);
  ctx.stroke();
}
```

{{EmbedLiveSample("Разница_между_значениями_lineCap", "180", "180", "canvas_linecap.png")}}

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- Интерфейс, предоставляющий данное свойство {{domxref("CanvasRenderingContext2D")}}
- {{domxref("CanvasRenderingContext2D.lineWidth")}}
- {{domxref("CanvasRenderingContext2D.lineJoin")}}
