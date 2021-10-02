---
title: WebGLRenderingContext.canvas
slug: Web/API/WebGLRenderingContext/canvas
tags:
  - Propriété
  - WebGL
  - WebGLRenderingContext
  - lecture seule
translation_of: Web/API/WebGLRenderingContext/canvas
original_slug: Web/API/WebGLRenderingContext/canevas
---
{{APIRef("WebGL")}}

La propriété `WebGLRenderingContext.canvas` est une référence en lecture seule à l'objet {{domxref("HTMLCanvasElement")}} ou {{domxref("OffscreenCanvas")}} associé au contexte. Il peut s'agir de {{jsxref("null")}} s'il n'est pas associé à un élément {{HTMLElement("canvas")}} ou à un objet {{domxref("OffscreenCanvas")}}.

## Syntaxe

    gl.canvas;

### Valeur retournée

Soit un objet {{domxref("HTMLCanvasElement")}} ou {{domxref("OffscreenCanvas")}}, soit {{jsxref("null")}}.

## Exemples

### Élément canevas

Étant donné cet élément {{HTMLElement("canvas")}} :

```html
<canvas id="canevas"></canvas>
```

Vous pouvez en récupérer une référence à partir du `WebGLRenderingContext` en utilisant la propriété `canvas` :

```js
var canevas = document.getElementById('canevas');
var gl = canevas.getContext('webgl');
gl.canvas; // HTMLCanvasElement
```

### Canevas hors écran

Exemple d'utilisation de l'objet expérimental {{domxref("OffscreenCanvas")}}.

```js
var horsEcran = new OffscreenCanvas(256, 256);
var gl = horsEcran.getContext('webgl');
gl.canvas; // OffscreenCanvas
```

## Spécifications

| Spécification                                                                                                            | Statut                   | Commentaire          |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------ | -------------------- |
| {{SpecName('WebGL', "#DOM-WebGLRenderingContext-canvas", "WebGLRenderingContext.canvas")}} | {{Spec2('WebGL')}} | Définition initiale. |

## Compatibilité des navigateurs

{{Compat("api.WebGLRenderingContext.canvas")}}

## Voir aussi

- {{domxref("CanvasRenderingContext2D.canvas")}}
- {{domxref("OffscreenCanvas")}}
