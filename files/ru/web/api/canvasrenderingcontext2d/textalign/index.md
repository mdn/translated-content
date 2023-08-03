---
title: CanvasRenderingContext2D.textAlign
slug: Web/API/CanvasRenderingContext2D/textAlign
---

{{APIRef}}

Свойство **`CanvasRenderingContext2D.textAlign`** Canvas 2D API определяет текущее выравнивание текста, использованное при прорисовке. Но следует помнить, что выравнивание основывается на значении x метода {{domxref("CanvasRenderingContext2D.fillText", "fillText()")}}. Так что, если значение `textAlign` равно `"center"`, то текст будет прорисован в `x - (width / 2)`.

## Синтаксис

```
ctx.textAlign = "left" || "right" || "center" || "start" || "end";
```

### Параметры

- `left`
  - : Выравнивание текста по левому краю.
- `right`
  - : Выравнивание текста по правому краю.
- `center`
  - : Текст отцентрирован.
- `start`
  - : Выравнивание текста в обычном начале строки (левостороннее выравнивание для языков, направленных слева направо, правостороннее - для направленных справа налево).
- `end`
  - : Выравнивание текста в конце строки (правостороннее выравнивание для языков, направленных слева направо, левостороннее - для направленных справа налево

По умолчанию значение `textAlign` установлено как "start".

## Примеры

### Использование значения `textAlign`

Довольно простой сниппет использования значения `textAlign` для изменения выравнивания текста.

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

```js
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

ctx.font = "48px serif";
ctx.textAlign = "left";
ctx.strokeText("Hello world", 0, 100);
```

Отредактируйте приведённый ниже код и посмотрите, как обновляется ваше обновление на холсте:

```html hidden
<canvas id="canvas" width="400" height="200" class="playable-canvas"></canvas>
<div class="playable-buttons">
  <input id="edit" type="button" value="Edit" />
  <input id="reset" type="button" value="Reset" />
</div>
<textarea id="code" class="playable-code">
ctx.font = '48px serif';
ctx.textAlign = 'left';
ctx.strokeText('Hello world', 0, 100);</textarea
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

- Интерфейс, предоставляющий данный метод {{domxref("CanvasRenderingContext2D")}}.
