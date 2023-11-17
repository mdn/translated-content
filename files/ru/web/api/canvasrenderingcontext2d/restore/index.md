---
title: CanvasRenderingContext2D.restore()
slug: Web/API/CanvasRenderingContext2D/restore
---

{{APIRef}}

Метод **`CanvasRenderingContext2D.restore()`** восстанавливает предварительно сохранённое состояние канваса из стека. Если состояние ранее не сохранялось, то метод ничего не делает.

Fore more information about the [drawing state](/ru/docs/Web/API/CanvasRenderingContext2D.save#Drawing_state), see {{domxref("CanvasRenderingContext2D.save()")}}.

## Синтаксис

```
void ctx.restore();
```

## Пример

### Restoring a saved state

This example uses the `save()` method to save the default state and `restore()` to restore it later, so that you are able to draw a rect with the default state later.

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// Save the default state
ctx.save();

ctx.fillStyle = "green";
ctx.fillRect(10, 10, 100, 100);

// Restore the default state
ctx.restore();

ctx.fillRect(150, 40, 100, 100);
```

#### Результат

{{ EmbedLiveSample('Restoring_a_saved_state', 700, 180) }}

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- The interface defining this method: {{domxref("CanvasRenderingContext2D")}}
- {{domxref("CanvasRenderingContext2D.save()")}}
