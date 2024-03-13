---
title: CanvasRenderingContext2D.closePath()
slug: Web/API/CanvasRenderingContext2D/closePath
---

{{APIRef}}

**`CanvasRenderingContext2D.closePath()`** - метод из Canvas 2D API, добавляет в путь линию от текущей до первоначальной точки под пути и закрывает сам путь (давая возможность инициализировать новый). Если путь пустой или содержит одну точку, этот метод ничего не делает.

Сама функция ничего не рисует. Он лишь позволяет отрисовывать путь таким методам, как {{domxref("CanvasRenderingContext2D.stroke()", "stroke()")}} и {{domxref("CanvasRenderingContext2D.fill()", "fill()")}}.

## Синтаксис

```
void ctx.closePath();
```

## Примеры

### Замкнутый треугольник

В этом примере создаются две первые линии сторон треугольника с использованием метода `lineTo()`. После чего метод `closePath()` заканчивает рисование треугольника, автоматически соединяя первую и последнюю точки фигуры (в данном случае треугольника).

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

Точки треугольника находятся в координатах (20, 150), (120, 20),и (220, 150).

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

ctx.beginPath();
ctx.moveTo(20, 140); // Двигает перо к нижнему левому углу
ctx.lineTo(120, 10); // Рисует линию к верхнему углу
ctx.lineTo(220, 140); // Рисует линию к нижнему правому углу
ctx.closePath(); // Рисует линию к нижнему левому углу
ctx.stroke();
```

#### Результат

{{ EmbedLiveSample('Замкнутый_треугольник', 700, 180) }}

### Закрытие пути один раз

Этот пример рисует смайлик, состоящий из трёх не соединённых дуг (под путей).

> **Примечание:** Хотя `closePath()` вызывается после создания всех дуг, закрывается только последняя.

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

Первые две дуги создают глаза, последняя создаёт рот.

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

ctx.beginPath();
ctx.arc(240, 20, 40, 0, Math.PI);
ctx.moveTo(100, 20);
ctx.arc(60, 20, 40, 0, Math.PI);
ctx.moveTo(215, 80);
ctx.arc(150, 80, 65, 0, Math.PI);
ctx.closePath();
ctx.lineWidth = 6;
ctx.stroke();
```

#### Результат

{{ EmbedLiveSample('Закрытие_пути_один_раз', 700, 180) }}

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- Интерфейс, определяющий этот метод: {{domxref("CanvasRenderingContext2D")}}
- {{domxref("CanvasRenderingContext2D.beginPath()")}}
