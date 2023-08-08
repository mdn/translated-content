---
title: WebGLRenderingContext.isBuffer()
slug: Web/API/WebGLRenderingContext/isBuffer
---

{{APIRef("WebGL")}}

La méthode **`WebGLRenderingContext.isBuffer()`** de l'[API WebGL](/fr-FR/docs/Web/API/WebGL_API) renvoie `true` si le {{domxref ("WebGLBuffer")}} passé est valide et `false` dans le cas contraire.

## Syntaxe

```js
GLboolean gl.isBuffer(tampon);
```

### Paramètres

- tampon
  - : Un {{domxref("WebGLBuffer")}} à vérifier.

### Valeur retournée

Un {{domxref("GLboolean")}} indiquant si le tampon est ou non valide.

## Exemples

### Création d'un tampon

```js
var canevas = document.getElementById("canevas");
var gl = canevas.getContext("webgl");
var tampon = gl.createBuffer();

gl.isBuffer(tampon);
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{domxref("WebGLRenderingContext.bindBuffer()")}}
- {{domxref("WebGLRenderingContext.createBuffer()")}}
- {{domxref("WebGLRenderingContext.deleteBuffer()")}}
- Autres tampons : {{domxref("WebGLFramebuffer")}}, {{domxref("WebGLRenderbuffer")}}
