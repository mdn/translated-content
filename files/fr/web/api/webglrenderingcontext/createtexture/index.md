---
title: WebGLRenderingContext.createTexture()
slug: Web/API/WebGLRenderingContext/createTexture
---

{{APIRef("WebGL")}}

La méthode **`WebGLRenderingContext.createTexture()`** de l'API WebGL crée et initialise un objet {{domxref("WebGLTexture")}}.

## Syntaxe

```js
WebGLTexture gl.createTexture();
```

### Paramètres

Aucun.

### Valeur retournée

Un objet {{domxref("WebGLTexture")}} auquel des images peuvent être liées.

## Exemples

Voir aussi le [tutoriel WebGL](/fr-FR/docs/Web/API/WebGL_API/Tutorial) sur l'[Utilisation de textures en WebGL](/fr-FR/docs/Web/API/WebGL_API/Tutorial/Using_textures_in_WebGL).

### Création d'une texture

```js
var canevas = document.getElementById("canevas");
var gl = canevas.getContext("webgl");
var texture = gl.createTexture();
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{domxref("WebGLRenderingContext.bindTexture()")}}
- {{domxref("WebGLRenderingContext.deleteTexture()")}}
- {{domxref("WebGLRenderingContext.isTexture()")}}
- {{domxref("WebGLRenderingContext.texImage2D()")}}
