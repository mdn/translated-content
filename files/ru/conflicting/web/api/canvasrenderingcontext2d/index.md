---
title: CanvasRenderingContext2D.currentTransform
slug: conflicting/Web/API/CanvasRenderingContext2D
original_slug: Web/API/CanvasRenderingContext2D/currentTransform
---

{{APIRef()}} {{SeeCompatTable}}

Свойство **`CanvasRenderingContext2D.currentTransform`**, предоставляемое Canvas 2D API, возвращает или устанавливает объект {{domxref("SVGMatrix")}} для текущей матрицы преобразований.

## Синтаксис

```
ctx.currentTransform [= value];
```

- `value`
  - : Объект {{domxref("SVGMatrix")}}, который будет использован в роли текущей матрицы преобразований.

## Примеры

### Использование метода `currentTransform`

Ниже представлен простой фрагмент кода, использующий свойство `currentTransform` для установки матрицы преобразований.

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

```js
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

let matrix = ctx.currentTransform;
matrix.a = 1;
matrix.b = 1;
matrix.c = 0;
matrix.d = 1;
matrix.e = 0;
matrix.f = 0;
ctx.currentTransform = matrix;
ctx.fillRect(0, 0, 100, 100);
```

#### Результат

{{ EmbedLiveSample('Использование_метода_currentTransform', 700, 180) }}

## Спецификации

{{Specifications}}

## Поддержка браузерами

{{Compat}}

## Смотрите также

- Интерфейс, определяющий его, {{domxref("CanvasPattern")}}
- {{domxref("SVGMatrix")}}
- {{domxref("DOMMatrix")}}
