---
title: CanvasRenderingContext2D.canvas
slug: Web/API/CanvasRenderingContext2D/canvas
tags:
  - API
  - Canvas
  - CanvasRenderingContext2D
  - Propriété
  - Reference
translation_of: Web/API/CanvasRenderingContext2D/canvas
---
{{APIRef}}

La propriété **`CanvasRenderingContext2D.canvas`** est une référence à l'objet {{domxref("HTMLCanvasElement")}} qui est associé au contexte. Il peut être {{jsxref("null")}} s'il n'est pas associé à un élément {{HTMLElement("canvas")}}.

## Syntaxe

    ctx.canvas;

## Exemples

Soit cet élément {{HTMLElement("canvas")}}:

```html
<canvas id="canvas"></canvas>
```

Vous pouvez obtenir la référence à l'élément `canvas` grâce à `CanvasRenderingContext2D` en utilisant la propriété `canvas`&nbsp;:

```js
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
ctx.canvas // HTMLCanvasElement
```

## Spécifications

| Spécification                                                                                                                            | Statut                           | Commentaire |
| ---------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------- | ----------- |
| {{SpecName('HTML WHATWG', "scripting.html#dom-context-2d-canvas", "CanvasRenderingContext2D.canvas")}} | {{Spec2('HTML WHATWG')}} |             |

## Compatibilité des navigateurs

{{Compat("api.CanvasRenderingContext2D.canvas")}}

## Voir aussi

- {{domxref("CanvasRenderingContext2D")}}
