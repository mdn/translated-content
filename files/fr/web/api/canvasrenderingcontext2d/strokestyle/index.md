---
title: CanvasRenderingContext2D.strokeStyle
slug: Web/API/CanvasRenderingContext2D/strokeStyle
translation_of: Web/API/CanvasRenderingContext2D/strokeStyle
---
{{APIRef}}

La propriété **`CanvasRenderingContext2D.strokeStyle`** de l'API Canvas 2D spécifie la couleur ou le style à utiliser pour dessiner les lignes autour des formes. La valeur par défaut est `#000` (black).

Voir également le chapitre [Ajout de styles et de couleurs](/fr/docs/Tutoriel_canvas/Ajout_de_styles_et_de_couleurs) dans le [Tutoriel canvas](/fr/docs/Tutoriel_canvas).

## Syntaxe

    ctx.strokeStyle = color;
    ctx.strokeStyle = gradient;
    ctx.strokeStyle = pattern;

### Options

- `color`
  - : Une {{domxref("DOMString")}} analysée comme valeur CSS {{cssxref("&lt;color&gt;")}}.
- `gradient`
  - : Un objet {{domxref("CanvasGradient")}} (un gradient linéaire ou radial).
- `pattern`
  - : Un objet {{domxref("CanvasPattern")}} (une image répétée).

## Exemples

### Utiliser la propriété `strokeStyle` pour définir une couleur différente

Ceci est un simple snippet de code utilisant la propriété `strokeStyle` pour définir une couleur différente.

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

```js
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

ctx.strokeStyle = 'blue';
ctx.strokeRect(10, 10, 100, 100);
```

Éditez le code ci-dessous pour voir vos changements mettre à jour le canvas en direct:

#### Code jouable

```html hidden
<canvas id="canvas" width="400" height="200" class="playable-canvas"></canvas>
<div class="playable-buttons">
  <input id="edit" type="button" value="Edit" />
  <input id="reset" type="button" value="Reset" />
</div>
<textarea id="code" class="playable-code">
ctx.strokeStyle = 'blue';
ctx.strokeRect(10, 10, 100, 100);</textarea>
```

```js hidden
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var textarea = document.getElementById('code');
var reset = document.getElementById('reset');
var edit = document.getElementById('edit');
var code = textarea.value;

function drawCanvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  eval(textarea.value);
}

reset.addEventListener('click', function() {
  textarea.value = code;
  drawCanvas();
});

edit.addEventListener('click', function() {
  textarea.focus();
})

textarea.addEventListener('input', drawCanvas);
window.addEventListener('load', drawCanvas);
```

{{ EmbedLiveSample('Code_jouable', 700, 360) }}

### Un exemple `strokeStyle`

Cet exemple utilise la propriété `strokeStyle` pour changer les couleurs des contours des formes. Nous utilisons la méthode {{domxref("CanvasRenderingContext2D.arc", "arc()")}} pour dessiner des cercles au lieu de carrés.

```js
var ctx = document.getElementById('canvas').getContext('2d');

for (var i = 0; i < 6; i++) {
  for (var j = 0; j < 6; j++) {
    ctx.strokeStyle = 'rgb(0,' + Math.floor(255 - 42.5 * i) + ',' +
                      Math.floor(255 - 42.5 * j) + ')';
    ctx.beginPath();
    ctx.arc(12.5 + j * 25, 12.5 + i * 25, 10, 0, Math.PI * 2, true);
    ctx.stroke();
  }
}
```

```html hidden
<canvas id="canvas" width="150" height="150"></canvas>
```

Le résultat devrait ressembler à ça:

{{EmbedLiveSample("Un_exemple_strokeStyle", "180", "180", "canvas_strokestyle.png")}}

## Spécifications

| Specification                                                                                                                                        | Status                           | Comment |
| ---------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------- | ------- |
| {{SpecName('HTML WHATWG', "scripting.html#dom-context-2d-strokestyle", "CanvasRenderingContext2D.strokeStyle")}} | {{Spec2('HTML WHATWG')}} |         |

## Browser compatibility

{{Compat("api.CanvasRenderingContext2D.strokeStyle")}}

## Notes spécifiques à WebKit/Blink

- Dans les navigateurs basés sur WebKit et Blink, une méthode non standard et dépréciée, `ctx.setStrokeColor()`, est implémentée en plus de cette propriété.

  ```js
  setStrokeColor(color, optional alpha);
  setStrokeColor(grayLevel, optional alpha);
  setStrokeColor(r, g, b, a);
  setStrokeColor(c, m, y, k, a);
  ```

## Voir aussi

- L'interface qui définit cette propriété, {{domxref("CanvasRenderingContext2D")}}
- {{domxref("CanvasGradient")}}
- {{domxref("CanvasPattern")}}
