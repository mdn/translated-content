---
title: CanvasRenderingContext2D.save()
slug: Web/API/CanvasRenderingContext2D/save
---

{{APIRef}}

**`CanvasRenderingContext2D.save()`** - метод Canvas 2D API. Сохраняет все состояния и добавляет текущее состояние в стек.

### Состояние чертежа

Состояние чертежа, которое сохраняется в стеке, состоит из:

- Текущая матрица преобразования.
- Текущая область отсечения.
- The current dash list.
- Текущие значения следующих атрибутов: {{domxref("CanvasRenderingContext2D.strokeStyle", "strokeStyle")}}, {{domxref("CanvasRenderingContext2D.fillStyle", "fillStyle")}}, {{domxref("CanvasRenderingContext2D.globalAlpha", "globalAlpha")}}, {{domxref("CanvasRenderingContext2D.lineWidth", "lineWidth")}}, {{domxref("CanvasRenderingContext2D.lineCap", "lineCap")}}, {{domxref("CanvasRenderingContext2D.lineJoin", "lineJoin")}}, {{domxref("CanvasRenderingContext2D.miterLimit", "miterLimit")}}, {{domxref("CanvasRenderingContext2D.lineDashOffset", "lineDashOffset")}}, {{domxref("CanvasRenderingContext2D.shadowOffsetX", "shadowOffsetX")}}, {{domxref("CanvasRenderingContext2D.shadowOffsetY", "shadowOffsetY")}}, {{domxref("CanvasRenderingContext2D.shadowBlur", "shadowBlur")}}, {{domxref("CanvasRenderingContext2D.shadowColor", "shadowColor")}}, {{domxref("CanvasRenderingContext2D.globalCompositeOperation", "globalCompositeOperation")}}, {{domxref("CanvasRenderingContext2D.font", "font")}}, {{domxref("CanvasRenderingContext2D.textAlign", "textAlign")}}, {{domxref("CanvasRenderingContext2D.textBaseline", "textBaseline")}}, {{domxref("CanvasRenderingContext2D.direction", "direction")}}, {{domxref("CanvasRenderingContext2D.imageSmoothingEnabled", "imageSmoothingEnabled")}}.

## Синтаксис

```
void ctx.save();
```

## Пример

### Сохранение состояния чертежа

Этот пример использует метод `save()` для сохранения состояния по умолчанию, и метод `restore()` для восстановления состояния позже, чтобы позже можно было нарисовать прямоугольник с состоянием по умолчанию.

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

```
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

// Сохранение состояния по умолчанию
ctx.save();

ctx.fillStyle = 'green';
ctx.fillRect(10, 10, 100, 100);

// Восстановление состояния по умолчанию
ctx.restore();

ctx.fillRect(150, 40, 100, 100);
```

#### Результат

{{ EmbedLiveSample('Сохранение_состояния_чертежа', 700, 180) }}

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- Интерфейс, предоставляющий данный метод: {{domxref("CanvasRenderingContext2D")}}
- {{domxref("CanvasRenderingContext2D.restore()")}}
