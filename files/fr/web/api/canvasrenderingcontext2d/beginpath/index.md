---
title: CanvasRenderingContext2D.beginPath()
slug: Web/API/CanvasRenderingContext2D/beginPath
translation_of: Web/API/CanvasRenderingContext2D/beginPath
---
{{APIRef}}

La méthode **`CanvasRenderingContext2D.beginPath()`** de l'API Canvas 2D permet de commencer un nouveau chemin en vidant la liste des sous-chemins. Appelez cette méthode quand vous voulez créer un nouveau chemin.

## Syntaxe

    void ctx.beginPath();

## Exemples

### Utiliser la méthode `beginPath`

Ceci est un simple snippet de code qui utilise la méthode `beginPath`.

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

```js
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

// Premier chemin
ctx.beginPath();
ctx.strokeStyle = 'blue';
ctx.moveTo(20, 20);
ctx.lineTo(200, 20);
ctx.stroke();

// Second chemin
ctx.beginPath();
ctx.strokeStyle = 'green';
ctx.moveTo(20, 20);
ctx.lineTo(120, 120);
ctx.stroke();
```

Éditez le code ci-dessous pour voir vos changements directemment apportés au canvas:

#### Code jouable

```html hidden
<canvas id="canvas" width="400" height="200" class="playable-canvas"></canvas>
<div class="playable-buttons">
  <input id="edit" type="button" value="Edit" />
  <input id="reset" type="button" value="Reset" />
</div>
<textarea id="code" class="playable-code" style="height:200px">
// First path
ctx.beginPath();
ctx.strokeStyle = 'blue';
ctx.moveTo(20,20);
ctx.lineTo(200,20);
ctx.stroke();

// Second path
ctx.beginPath();
ctx.strokeStyle = 'green';
ctx.moveTo(20,20);
ctx.lineTo(120, 120);
ctx.stroke();</textarea>
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

reset.addEventListener("click", function() {
  textarea.value = code;
  drawCanvas();
});

edit.addEventListener("click", function() {
  textarea.focus();
})

textarea.addEventListener("input", drawCanvas);
window.addEventListener("load", drawCanvas);
```

{{ EmbedLiveSample('Code_jouable', 700, 460) }}

## Spécifications

| Specification                                                                                                                                    | Status                           | Comment |
| ------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------- | ------- |
| {{SpecName('HTML WHATWG', "scripting.html#dom-context-2d-beginpath", "CanvasRenderingContext2D.beginPath")}} | {{Spec2('HTML WHATWG')}} |         |

## Compatibilité des navigateurs

{{Compat("api.CanvasRenderingContext2D.beginPath")}}

## Voir aussi

- L'interface qui définit cette méthode, {{domxref("CanvasRenderingContext2D")}}
- {{domxref("CanvasRenderingContext2D.closePath()")}}
