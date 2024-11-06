---
title: CanvasRenderingContext2D.canvas
slug: Web/API/CanvasRenderingContext2D/canvas
---

{{APIRef}}

La propriété **`CanvasRenderingContext2D.canvas`** est une référence à l'objet {{domxref("HTMLCanvasElement")}} qui est associé au contexte. Il peut être {{jsxref("null")}} s'il n'est pas associé à un élément {{HTMLElement("canvas")}}.

## Syntaxe

```js
ctx.canvas;
```

## Exemples

Soit cet élément {{HTMLElement("canvas")}}:

```html
<canvas id="canvas"></canvas>
```

Vous pouvez obtenir la référence à l'élément `canvas` grâce à `CanvasRenderingContext2D` en utilisant la propriété `canvas`&nbsp;:

```js
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
ctx.canvas; // HTMLCanvasElement
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{domxref("CanvasRenderingContext2D")}}
