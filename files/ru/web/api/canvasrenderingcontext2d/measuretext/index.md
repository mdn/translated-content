---
title: CanvasRenderingContext2D.measureText()
slug: Web/API/CanvasRenderingContext2D/measureText
---

{{APIRef}}

Метод **`CanvasRenderingContext2D.measureText()`**, предоставляемый Canvas 2D API, возвращает объект {{domxref("TextMetrics")}}, содержащий информацию об измеренном тексте (например, ширину).

## Синтаксис

```
ctx.measureText(text);
```

### Параметры

- `text`
  - : Строка {{jsxref("String")}} для измерения.

### Возвращаемое значение

Объект {{domxref("TextMetrics")}}.

## Примеры

Используя элемент {{HTMLElement("canvas")}}:

```html
<canvas id="canvas"></canvas>
```

... вы можете получить объект {{domxref("TextMetrics")}}, используя следующий код:

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

let text = ctx.measureText("Hello world");
console.log(text.width); // 56;
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- Интерфейс, определяющий этот метод: {{domxref("CanvasRenderingContext2D")}}
- {{domxref("TextMetrics")}}
