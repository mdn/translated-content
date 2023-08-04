---
title: CanvasRenderingContext2D.lineDashOffset
slug: Web/API/CanvasRenderingContext2D/lineDashOffset
---

{{APIRef}}

Свойство **`CanvasRenderingContext2D.lineDashOffset`** в Canvas 2D API устанавливает смещение штрихов, или «фаза».

> **Примечание:** Линии нарисованы вызовом метода {{domxref("CanvasRenderingContext2D.stroke()", "stroke()")}}.

## Синтаксис

```
ctx.lineDashOffset = value;
```

- `value`
  - : Число с плавающей запятой, определяющее величину смещения штрихов линии. Значением по умолчанию является 0,0.

## Примеры

### Смещение штрихов

Этот пример рисует две пунктирные линии. Первая не имеет смещения. Вторая имеет смещение 4.

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

ctx.setLineDash([4, 16]);

// Пунктирная линия без смещения
ctx.beginPath();
ctx.moveTo(0, 50);
ctx.lineTo(300, 50);
ctx.stroke();

// Пунктирная линия со смещением 4
ctx.beginPath();
ctx.strokeStyle = "red";
ctx.lineDashOffset = 4;
ctx.moveTo(0, 100);
ctx.lineTo(300, 100);
ctx.stroke();
```

#### Результат

Линия со смещением будет нарисована красным цветом.

{{ EmbedLiveSample('Смещение_штрихов') }}

### Эффект марширующих муравьёв

[Эффект марширующих муравьёв](https://en.wikipedia.org/wiki/Marching_ants) - это техника анимации, часто встречающаяся в инструментах выбора программ компьютерной графики. Это помогает пользователю отличить границу выделения от фона изображения, анимируя границу..

```html hidden
<canvas id="canvas"></canvas>
```

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
let offset = 0;

const draw = () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.setLineDash([4, 2]);
  ctx.lineDashOffset = -offset;
  ctx.strokeRect(10, 10, 100, 100);
};

const march = () => {
  offset++;
  if (offset > 16) {
    offset = 0;
  }
  draw();
  setTimeout(march, 20);
};

march();
```

{{ EmbedLiveSample('Эффект_марширующих_муравьёв') }}

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- Интерфейс, определяющий это свойство: {{domxref("CanvasRenderingContext2D")}}
- {{domxref("CanvasRenderingContext2D.getLineDash()")}}
- {{domxref("CanvasRenderingContext2D.setLineDash()")}}
- [Применение стилей и цвета](/ru/docs/Web/API/Canvas_API/Tutorial/Applying_styles_and_colors)
