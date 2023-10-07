---
title: CanvasRenderingContext2D.fillText()
slug: Web/API/CanvasRenderingContext2D/fillText
---

{{APIRef}}

Метод **`CanvasRenderingContext2D.fillText()`**, предоставляемый Canvas 2D API, рисует (заливает) заданный текст в заданной позиции (_x, y_). Если указан необязательный четвёртый параметр, текст будет масштабироваться в соответствии с указанной максимальной шириной.

Смотрите также метод {{domxref("CanvasRenderingContext2D.strokeText()")}} для выполнения обводки текста.

## Синтаксис

```
void ctx.fillText(text, x, y [, maxWidth]);
```

### Параметры

- `text`
  - : Текст, использующий для визуализации следующие свойства: {{domxref("CanvasRenderingContext2D.font","font")}}, {{domxref("CanvasRenderingContext2D.textAlign","textAlign")}}, {{domxref("CanvasRenderingContext2D.textBaseline","textBaseline")}} и {{domxref("CanvasRenderingContext2D.direction","direction")}}.

<!---->

- `x`
  - : Координата левой нижней точки текста по оси x.
- `y`
  - : Координата левой нижней точки текста по оси y.
- `maxWidth` {{optional_inline}}
  - : Максимальная ширина текста. Если ширина надписи больше параметра, текст масштабируется по горизонтали, или, если это невозможно (надпись становится нечитаемой), уменьшается размер шрифта.

## Примеры

### Использование метода fillText

Ниже представлен простой фрагмент кода, использующий fillText.

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

```js
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

ctx.font = "48px serif";
ctx.fillText("Hello world", 50, 100);
```

Вы можете редактировать код, представленный ниже, и сделанные вами изменения отобразятся на холсте в режиме реального времени:

```html hidden
<canvas id="canvas" width="400" height="200" class="playable-canvas"></canvas>
<div class="playable-buttons">
  <input id="edit" type="button" value="Edit" />
  <input id="reset" type="button" value="Reset" />
</div>
<textarea id="code" class="playable-code">
ctx.font = "48px serif";
ctx.fillText("Hello world", 50, 100);</textarea
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

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- Интерфейс, предоставляющий данный метод: {{domxref("CanvasRenderingContext2D")}}
- {{domxref("CanvasRenderingContext2D.strokeText()")}}
