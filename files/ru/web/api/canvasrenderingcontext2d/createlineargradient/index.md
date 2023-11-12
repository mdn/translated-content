---
title: CanvasRenderingContext2D.createLinearGradient()
slug: Web/API/CanvasRenderingContext2D/createLinearGradient
---

{{APIRef}}

Метод **`CanvasRenderingContext2D.createLinearGradient()`**, предоставляемый Canvas 2D API, создаёт градиент вдоль линии, соединённой двумя точками с заданными координатами.

![](mdn-canvas-lineargradient.png)

Этот метод возвращает линейный {{domxref("CanvasGradient")}}. Для того, чтобы быть добавленным к фигуре, градиент должен быть задан свойством {{domxref("CanvasRenderingContext2D.fillStyle", "fillStyle")}} или {{domxref("CanvasRenderingContext2D.strokeStyle", "strokeStyle")}}.

> **Примечание:** Координаты градиента глобальны, т.е. относятся к текущему пространству координат. При добавлении градиента, его координаты определяются НЕ относительно координат фигур.

## Синтаксис

```
CanvasGradient ctx.createLinearGradient(x0, y0, x1, y1);
```

Метод `createLinearGradient()` принимает четыре аргумента для определения начала и конца точек линии градиента.

### Параметры

- `x0`
  - : Координата по оси X начальной точки.
- `y0`
  - : Координата по оси Y начальной точки.
- `x1`
  - : Координата по оси X конечной точки.
- `y1`
  - : Координата по оси Y конечной точки.

### Возвращаемое значение

- {{domxref("CanvasGradient")}}
  - : Линейный `CanvasGradient`, определённый линией.

## Примеры

### Заполнение прямоугольника с линейным градиентом

В примере создаётся и добавляется линейный градиент, используя метод `createLinearGradient()`. Градиент имеет три точки остановки цвета между созданными начальной и конечной точками линии.

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

```js
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

// Создание линейного градиента
// Точка начала линии градиента: x=20, y=0
// Точка конца линии градиента: x=220, y=0
var gradient = ctx.createLinearGradient(20, 0, 220, 0);

// Добавление трёх контрольных точек
gradient.addColorStop(0, "green");
gradient.addColorStop(0.5, "cyan");
gradient.addColorStop(1, "green");

// Установка стиля заливки и отрисовка прямоугольника градиента
ctx.fillStyle = gradient;
ctx.fillRect(20, 20, 200, 100);
```

#### Результат

{{ EmbedLiveSample('Заполнение_прямоугольника_с_линейным_градиентом', 700, 180) }}

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- Интерфейс, предоставляющий данный метод: {{domxref("CanvasRenderingContext2D")}}
- {{domxref("CanvasRenderingContext2D.createRadialGradient()")}}
