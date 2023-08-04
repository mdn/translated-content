---
title: CanvasRenderingContext2D.font
slug: Web/API/CanvasRenderingContext2D/font
---

{{APIRef}}

**`CanvasRenderingContext2D.font`** – свойство Canvas 2D API, определяющее текущие стили рисуемого текста. Это строка, которая использует синтаксис [CSS font](/ru/docs/Web/CSS/font).

## Синтаксис

```
ctx.font = value;
```

### Опции

- `value`
  - : Строка {{domxref("DOMString")}} с разобранным CSS {{cssxref("font")}} значением. Значение по умолчанию – "10px sans-serif".

## Примеры

### Использование пользовательского шрифта

Этот пример задаёт в свойстве `font` другие `font-size` и `font-family`.

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

ctx.font = "bold 48px serif";
ctx.strokeText("Hello world", 50, 100);
```

#### Результат

{{ EmbedLiveSample('Использование_пользовательского_шрифта', 700, 180) }}

### Загрузка шрифта с помощью CSS Font Loading API

С помощью {{domxref("FontFace")}} API, вы можете явно загрузить шрифт перед использованием его в `canvas`.

```js
let f = new FontFace("test", "url(x)");

f.load().then(function () {
  // Ready to use the font in a canvas context
});
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- Интерфейс, определяющий это свойство: {{domxref("CanvasRenderingContext2D")}}
