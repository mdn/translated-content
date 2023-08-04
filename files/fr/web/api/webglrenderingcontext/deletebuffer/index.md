---
title: WebGLRenderingContext.deleteBuffer()
slug: Web/API/WebGLRenderingContext/deleteBuffer
---

{{APIRef("WebGL")}}

La méthode **`WebGLRenderingContext.deleteBuffer()`** de l'[API WebGL](/fr-FR/docs/Web/API/WebGL_API) supprime le {{domxref ("WebGLBuffer")}} indiqué. Cette méthode n'a aucun effet si le tampon a déjà été supprimé.

## Syntaxe

```js
void gl.deleteBuffer(tampon);
```

### Paramètres

- tampon
  - : Un objet {{domxref("WebGLBuffer")}} à supprimer.

### Valeur retournée

Aucune.

## Exemples

### Suppression d'un tampon

```js
var canevas = document.getElementById("canevas");
var gl = canevas.getContext("webgl");
var tampon = gl.createBuffer();

// ...

gl.deleteBuffer(tampon);
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{domxref("WebGLRenderingContext.bindBuffer()")}}
- {{domxref("WebGLRenderingContext.createBuffer()")}}
- {{domxref("WebGLRenderingContext.isBuffer()")}}
- Autres tampons : {{domxref("WebGLFramebuffer")}}, {{domxref("WebGLRenderbuffer")}}
