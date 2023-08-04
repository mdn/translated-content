---
title: CanvasRenderingContext2D.globalAlpha
slug: Web/API/CanvasRenderingContext2D/globalAlpha
---

{{APIRef}}

Свойство **`CanvasRenderingContext2D.globalAlpha`** Canvas 2D API определяет альфа-(прозрачность) значение, которое будет применено к фигурам и картинкам до того как они будут отрисованы на холсте.

> **Примечание:** Смотрите также [Applying styles and color](/ru/docs/Web/API/Canvas_API/Tutorial/Applying_styles_and_colors) в [Canvas Tutorial](/ru/docs/Web/API/Canvas_API/Tutorial).

## Синтаксис

```
ctx.globalAlpha = value;
```

### Параметры

- `value`
  - : Число между `0.0` (полная прозрачность) и `1.0` (полная непрозрачность), включительно. Дефолтное значение `1.0`. Значение, не входящее в указанный диапазон, включая {{jsxref("Infinity")}} и {{jsxref("NaN")}}, не будут применены, и `globalAlpha` сохранит предыдущее значение или значение по умолчанию.

## Примеры

### Отрисовка полупрозрачных фигур

В этом примере используется свойство `globalAlpha` для отрисовки двух полупрозрачных прямоугольников.

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

ctx.globalAlpha = 0.5;

ctx.fillStyle = "blue";
ctx.fillRect(10, 10, 100, 100);

ctx.fillStyle = "red";
ctx.fillRect(50, 50, 100, 100);
```

#### Результат

{{ EmbedLiveSample('Отрисовка_полупрозрачных_фигур', 700, 180) }}

### Наложение прозрачных фигур

Этот пример демонстрирует эффект наложения нескольких прозрачных фигур друг на друга. Мы начнём с отрисовки непрозрачного фона, состоящего из четырёх разноцветных квадратов. Далее мы устанавливаем свойство `globalAlpha` равное `0.2` (20% прозрачности); Уровень прозрачности будет применён ко всем прозрачным фигурам. Затем мы используем цикл `for` для отрисовки нескольких кругов с увеличивающимися радиусами.

Для каждого нового круга прозрачность кругов, находящихся под ним, уменьшается. Если вы увеличите количество шагов, тем самым увеличив количество кругов, фон в конечном итоге полностью исчезнет в центре изображения.

```html hidden
<canvas id="canvas" width="150" height="150"></canvas>
```

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// Рисуем фон
ctx.fillStyle = "#FD0";
ctx.fillRect(0, 0, 75, 75);
ctx.fillStyle = "#6C0";
ctx.fillRect(75, 0, 75, 75);
ctx.fillStyle = "#09F";
ctx.fillRect(0, 75, 75, 75);
ctx.fillStyle = "#F30";
ctx.fillRect(75, 75, 75, 75);
ctx.fillStyle = "#FFF";

// Устанавливаем уровень прозрачности
ctx.globalAlpha = 0.2;

// Рисуем круги
for (let i = 0; i < 7; i++) {
  ctx.beginPath();
  ctx.arc(75, 75, 10 + 10 * i, 0, Math.PI * 2, true);
  ctx.fill();
}
```

{{EmbedLiveSample("Наложение_прозрачных_фигур", "180", "180", "canvas_globalalpha.png")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## Читайте также

- The interface defining this property: {{domxref("CanvasRenderingContext2D")}}
- {{domxref("CanvasRenderingContext2D.globalCompositeOperation")}}
