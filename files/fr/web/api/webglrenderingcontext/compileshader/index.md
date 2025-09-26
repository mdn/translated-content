---
title: WebGLRenderingContext.compileShader()
slug: Web/API/WebGLRenderingContext/compileShader
---

{{APIRef("WebGL")}}

La méthode **WebGLRenderingContext.compileShader()** de l'[API WebGL](/fr/docs/Web/API/WebGL_API) compile un shader GLSL en données binaires, de sorte qu'il puisse être utilisé par un {{domxref("WebGLProgram")}}.

## Syntaxe

```js
void gl.compileShader(shader);
```

### Paramètres

- `shader`
  - : Un {{domxref("WebGLShader")}} de fragments ou de sommets.

## Exemples

```js
var shader = gl.createShader(gl.VERTEX_SHADER);
gl.shaderSource(shader, sourceShader);
gl.compileShader(shader);
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{domxref("WebGLProgram")}}
- {{domxref("WebGLShader")}}
- {{domxref("WebGLRenderingContext.attachShader()")}}
- {{domxref("WebGLRenderingContext.createProgram()")}}
- {{domxref("WebGLRenderingContext.createShader()")}}
- {{domxref("WebGLRenderingContext.deleteProgram()")}}
- {{domxref("WebGLRenderingContext.deleteShader()")}}
- {{domxref("WebGLRenderingContext.detachShader()")}}
- {{domxref("WebGLRenderingContext.getAttachedShaders()")}}
- {{domxref("WebGLRenderingContext.getProgramParameter()")}}
- {{domxref("WebGLRenderingContext.getProgramInfoLog()")}}
- {{domxref("WebGLRenderingContext.getShaderParameter()")}}
- {{domxref("WebGLRenderingContext.getShaderPrecisionFormat()")}}
- {{domxref("WebGLRenderingContext.getShaderInfoLog()")}}
- {{domxref("WebGLRenderingContext.getShaderSource()")}}
- {{domxref("WebGLRenderingContext.isProgram()")}}
- {{domxref("WebGLRenderingContext.isShader()")}}
- {{domxref("WebGLRenderingContext.linkProgram()")}}
- {{domxref("WebGLRenderingContext.shaderSource()")}}
- {{domxref("WebGLRenderingContext.useProgram()")}}
- {{domxref("WebGLRenderingContext.validateProgram()")}}
