---
title: WebGLRenderingContext.createShader()
slug: Web/API/WebGLRenderingContext/createShader
---

{{APIRef("WebGL")}}

La méthode **WebGLRenderingContext.createShader() de l'**[API WebGL](/fr/docs/Web/API/WebGL_API) crée un {{domxref("WebGLShader")}}, qui peut alors être configuré davantage en utilisant {{domxref("WebGLRenderingContext.shaderSource()")}} et {{domxref("WebGLRenderingContext.compileShader()")}}.

## Syntaxe

```js
WebGLShader gl.createShader(type);
```

### Paramètres

- `type`
  - : Soit `gl.VERTEX_SHADER`, soit `gl.FRAGMENT_SHADER`

## Exemples

Voir {{domxref("WebGLShader")}} pour l'utilisation et des exemples.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{domxref("WebGLProgram")}}
- {{domxref("WebGLShader")}}
- {{domxref("WebGLRenderingContext.attachShader()")}}
- {{domxref("WebGLRenderingContext.bindAttribLocation()")}}
- {{domxref("WebGLRenderingContext.compileShader()")}}
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
