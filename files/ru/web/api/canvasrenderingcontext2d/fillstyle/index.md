---
title: CanvasRenderingContext2D.fillStyle
slug: Web/API/CanvasRenderingContext2D/fillStyle
---

{{APIRef}}

Свойство **`CanvasRenderingContext2D.fillStyle`**, предоставляемое [Canvas 2D API](/ru/docs/Web/API/Canvas_API), задаёт цвет или стиль, используемый при заливке фигур. По умолчанию установлено значение `#000` (чёрный цвет).

> **Примечание:** Смотрите также главу [Applying styles and color](/ru/docs/Web/API/Canvas_API/Tutorial/Applying_styles_and_colors) в [Canvas Tutorial](/ru/docs/Web/API/Canvas_API/Tutorial).

## Синтаксис

```
ctx.fillStyle = color;
ctx.fillStyle = gradient;
ctx.fillStyle = pattern;
```

### Значения

- `color`
  - : {{domxref("DOMString")}} строка, содержащая цвет в формате, поддерживающимся стандартом CSS ({{cssxref("&lt;color&gt;")}}).
- `gradient`
  - : Объект класса {{domxref("CanvasGradient")}} (линейный или круговой градиент ).
- `pattern`
  - : Объект класса {{domxref("CanvasPattern")}} (повторяющееся изображение).

## Примеры

### Изменение цвета заливки фигуры

Ниже представлен простой фрагмент кода, использующий `fillStyle` с цветом.

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

ctx.fillStyle = "blue";
ctx.fillRect(10, 10, 100, 100);
```

#### Результат

{{ EmbedLiveSample('Изменение_цвета_заливки_фигуры', 700, 160) }}

### Использование fillStyle в циклах for

В этом примере мы используем два цикла для рисования сетки из прямоугольников, каждый из которых будет закрашен разным цветом. Получившееся изображение должно выглядеть как на скриншоте . Здесь нет ничего сложного. Мы используем две переменные `i` и `j`, чтобы создать уникальный цвет для каждого квадрата, смешивая красный и зелёный цвета. Значение синего цвета изменяться не будет. Изменяя значения цветов, вы можете создать все цвета. Увеличив количество шагов, вы сможете создать цветовую палитру, наподобие той, которая используется в Photoshop.

```html hidden
<canvas id="canvas" width="150" height="150"></canvas>
```

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

for (let i = 0; i < 6; i++) {
  for (let j = 0; j < 6; j++) {
    ctx.fillStyle = `rgb(
        ${Math.floor(255 - 42.5 * i)},
        ${Math.floor(255 - 42.5 * j)},
        0)`;
    ctx.fillRect(j * 25, i * 25, 25, 25);
  }
}
```

#### Результат

{{EmbedLiveSample("Использование_fillStyle_в_циклах_for", 160, 160, "canvas_fillstyle.png")}}

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- [Canvas API](/ru/docs/Web/API/Canvas_API)
- Интерфейс предоставляющий данное свойство: {{domxref("CanvasRenderingContext2D")}}
- {{domxref("CanvasGradient")}}
- {{domxref("CanvasPattern")}}
