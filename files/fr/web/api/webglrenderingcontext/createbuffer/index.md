---
title: WebGLRenderingContext.createBuffer()
slug: Web/API/WebGLRenderingContext/createBuffer
---

{{APIRef("WebGL")}}

La méthode **`WebGLRenderingContext.createBuffer()`** de l'[API WebGL](/fr/docs/Web/API/WebGL_API) crée et initialise un [`WebGLBuffer`](/fr/docs/Web/API/WebGLBuffer) stockant des données telles que des sommets ou des couleurs.

## Syntaxe

```js
WebGLBuffer gl.createBuffer();
```

### Paramètres

Aucun.

### Valeur retournée

Un {{domxref("WebGLBuffer")}} stockant des données telles que des sommets ou des couleurs.

## Exemples

### Création d'un tampon

```js
var canevas = document.getElementById("canevas");
var gl = canevas.getContext("webgl");
var tampon = gl.createBuffer();
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{domxref("WebGLRenderingContext.bindBuffer()")}}
- {{domxref("WebGLRenderingContext.deleteBuffer()")}}
- {{domxref("WebGLRenderingContext.isBuffer()")}}
- Autres tampons : {{domxref("WebGLFramebuffer")}}, {{domxref("WebGLRenderbuffer")}}
