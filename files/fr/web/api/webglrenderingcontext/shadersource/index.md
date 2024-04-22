---
title: WebGLRenderingContext.shaderSource()
slug: Web/API/WebGLRenderingContext/shaderSource
---

{{APIRef("WebGL")}}

La méthode **`WebGLRenderingContext.shaderSource()`** de l'[API WebGL](/fr/docs/Web/API/WebGL_API) définit le code source d'un {{domxref("WebGLShader")}}.

## Syntaxe

```js
void gl.shaderSource(shader, source);
```

### Parameters

- shader
  - : Un objet {{domxref("WebGLShader")}} dans lequel définir le code source.
- source
  - : Une {{domxref("DOMString")}} contenant le code source GLSL à définir.

### Valeur retournée

Aucune.

## Exemple

```js
var shader = gl.createShader(gl.VERTEX_SHADER);
gl.shaderSource(shader, originalSource);

var source = gl.getShaderSource(shader);
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{domxref("WebGLRenderingContext.createShader()")}}
- {{domxref("WebGLRenderingContext.isShader()")}}
- {{domxref("WebGLRenderingContext.deleteShader()")}}
- {{domxref("WebGLRenderingContext.getShaderSource()")}}
