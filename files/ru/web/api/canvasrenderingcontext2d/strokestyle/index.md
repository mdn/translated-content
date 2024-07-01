---
title: CanvasRenderingContext2D.strokeStyle
slug: Web/API/CanvasRenderingContext2D/strokeStyle
---

{{APIRef}}

Свойство **`CanvasRenderingContext2D.strokeStyle`**, предоставляемое Canvas 2D API задаёт цвет или стиль, используемый при выполнении обводки фигур. По умолчанию установлено значение `#000` (чёрный цвет).

Смотрите также главу [Applying styles and color](/ru/docs/Web/API/Canvas_API/Tutorial/Applying_styles_and_colors) в [Canvas Tutorial](/ru/docs/Web/API/Canvas_API/Tutorial).

## Синтаксис

```
ctx.strokeStyle = color;
ctx.strokeStyle = gradient;
ctx.strokeStyle = pattern;
```

### Значения

- `color`
  - : {{domxref("DOMString")}} строка содержащая цвет в формате, поддерживающимся стандартом CSS ({{cssxref("&lt;color&gt;")}}).
- `gradient`
  - : Объект класса {{domxref("CanvasGradient")}} (линейный или круговой градиент ).
- `pattern`
  - : Объект класса {{domxref("CanvasPattern")}} (повторяющееся изображение).

## Примеры

### Использование `strokeStyle` с цветом

Ниже представлен простой фрагмент кода, использующий `strokeStyle` с цветом.

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

```js
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

ctx.strokeStyle = "blue";
ctx.strokeRect(10, 10, 100, 100);
```

Вы можете редактировать код, представленный ниже, и сделанные вами изменения отобразятся на холсте в режиме реального времени:

```html hidden
<canvas id="canvas" width="400" height="200" class="playable-canvas"></canvas>
<div class="playable-buttons">
  <input id="edit" type="button" value="Edit" />
  <input id="reset" type="button" value="Reset" />
</div>
<textarea id="code" class="playable-code">
ctx.strokeStyle = "blue";
ctx.strokeRect(10, 10, 100, 100);</textarea
>
```

```js hidden
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var textarea = document.getElementById("code");
var reset = document.getElementById("reset");
var edit = document.getElementById("edit");
var code = textarea.value;

function drawCanvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  eval(textarea.value);
}

reset.addEventListener("click", function () {
  textarea.value = code;
  drawCanvas();
});

edit.addEventListener("click", function () {
  textarea.focus();
});

textarea.addEventListener("input", drawCanvas);
window.addEventListener("load", drawCanvas);
```

{{ EmbedLiveSample('Playable_code', 700, 360) }}

### Использование `strokeStyle` в циклах `for`

В этом примере свойство `strokeStyle` используется для рисования границ фигур. Мы используем метод {{domxref("CanvasRenderingContext2D.arc", "arc()")}} для рисования кругов.

```js
var ctx = document.getElementById("canvas").getContext("2d");
for (var i = 0; i < 6; i++) {
  for (var j = 0; j < 6; j++) {
    ctx.strokeStyle =
      "rgb(0," +
      Math.floor(255 - 42.5 * i) +
      "," +
      Math.floor(255 - 42.5 * j) +
      ")";
    ctx.beginPath();
    ctx.arc(12.5 + j * 25, 12.5 + i * 25, 10, 0, Math.PI * 2, true);
    ctx.stroke();
  }
}
```

```html hidden
<canvas id="canvas" width="150" height="150"></canvas>
```

Результат выглядит так:

{{EmbedLiveSample("A_strokeStyle_example", "180", "180", "canvas_strokestyle.png")}}

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- Интерфейс предоставляющий данное свойство: {{domxref("CanvasRenderingContext2D")}}
- {{domxref("CanvasGradient")}}
- {{domxref("CanvasPattern")}}
