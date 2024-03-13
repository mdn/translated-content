---
title: CanvasRenderingContext2D.getLineDash()
slug: Web/API/CanvasRenderingContext2D/getLineDash
---

{{APIRef}}

Метод **`CanvasRenderingContect2D.getLineDash()`**, предоставляемый Canvas 2D API который возвращает текущий паттерн штриховки линии.

## Синтаксис

```
ctx.getLineDash();
```

### Возвращаемое значение

{{jsxref("Array")}} (массив) чисел которые обозначают расстояния рисования линий и разрывов (в единицах пространства координат). Если число заданных элементов нечётное, то заданные элементы массива копируются и суммируются. Например, установив штрихи линии как `[5, 15, 25]` в результате мы получим `[5, 15, 25, 5, 15, 25]`.

## Примеры

### Получение текущей настройки штриховки линии

Этот пример демонстрирует метод `getLineDash()`.

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

Используя {{domxref("CanvasRenderingContext2D.setLineDash()", "setLineDash()")}} задано, что штрихи состоят из отрезков в 10 единиц и разрывами между ними в 20 единиц.

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

ctx.setLineDash([10, 20]);
console.log(ctx.getLineDash()); // [10, 20]

// Нарисовать штрихованную линию
ctx.beginPath();
ctx.moveTo(0, 50);
ctx.lineTo(300, 50);
ctx.stroke();
```

#### Результат

{{ EmbedLiveSample('Получение_текущей_настройки_штриховки_линии', 700, 180) }}

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- Интерфейс, предоставляющий данный метод: {{domxref("CanvasRenderingContext2D")}}
- {{domxref("CanvasRenderingContext2D.setLineDash()")}}
- {{domxref("CanvasRenderingContext2D.lineDashOffset")}}
