---
title: CanvasRenderingContext2D.textBaseline
slug: Web/API/CanvasRenderingContext2D/textBaseline
---

{{APIRef}}

**`CanvasRenderingContext2D.textBaseline`** - свойство Canvas 2D API, указывающее на текущую базовую линию при рисовании текста.

## Синтаксис

```
ctx.textBaseline = "top" || "hanging" || "middle" || "alphabetic" || "ideographic" || "bottom";
```

### Опции

Возможные значения:

- `"top"`
  - : The text baseline is the top of the em square.
- `"hanging"`
  - : The text baseline is the hanging baseline. (Used by Tibetan and other Indic scripts.)
- `"middle"`
  - : The text baseline is the middle of the em square.
- `"alphabetic"`
  - : The text baseline is the normal alphabetic baseline. Значение по умолчанию.
- `"ideographic"`
  - : The text baseline is the ideographic baseline; this is the bottom of the body of the characters, if the main body of characters protrudes beneath the alphabetic baseline. (Used by Chinese, Japanese, and Korean scripts.)
- `"bottom"`
  - : The text baseline is the bottom of the bounding box. This differs from the ideographic baseline in that the ideographic baseline doesn't consider descenders.

## Примеры

### Сравнение значений свойства

Этот пример демонстрирует различные значения свойства `textBaseline` и отображение линий при их применениях.

#### HTML

```html
<canvas id="canvas" width="550" height="500"></canvas>
```

#### JavaScript

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const baselines = [
  "top",
  "hanging",
  "middle",
  "alphabetic",
  "ideographic",
  "bottom",
];
ctx.font = "36px serif";
ctx.strokeStyle = "red";

baselines.forEach(function (baseline, index) {
  ctx.textBaseline = baseline;
  let y = 75 + index * 75;
  ctx.beginPath();
  ctx.moveTo(0, y + 0.5);
  ctx.lineTo(550, y + 0.5);
  ctx.stroke();
  ctx.fillText("Abcdefghijklmnop (" + baseline + ")", 0, y);
});
```

#### Результат

{{ EmbedLiveSample('Сравнение_значений_свойства', 700, 550) }}

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- Интерфейс определяющий это свойство: {{domxref("CanvasRenderingContext2D")}}
