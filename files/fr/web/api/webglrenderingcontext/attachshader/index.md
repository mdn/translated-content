---
title: WebGLRenderingContext.attachShader()
slug: Web/API/WebGLRenderingContext/attachShader
---

{{APIRef("WebGL")}}

La méthode **WebGLRenderingContext.attachShader()** de l'[API WebGL](/fr/docs/Web/API/WebGL_API) attache un {{domxref("WebGLShader")}} de fragment ou de sommet à un {{domxref("WebGLProgram")}}.

## Syntaxe

```js
void gl.attachShader(programme, shader);
```

### Paramètres

- `programme`
  - : Un {{domxref("WebGLProgram")}}.
- `shader`
  - : Un {{domxref("WebGLShader")}} de fragment ou de sommet.

## Exemples

Le code suivant attache des shaders pré-existants à un {{domxref("WebGLProgram")}}.

```js
var programme = gl.createProgram();

// Attacher des shaders pré-existants
gl.attachShader(programme, shaderDeSommet);
gl.attachShader(programme, shaderDeFragment);

gl.linkProgram(programme);

if (!gl.getProgramParameter(programme, gl.LINK_STATUS)) {
  var info = gl.getProgramInfoLog(programme);
  throw "Impossible de compiler le program WebGL. \n\n" + info;
}
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{domxref("WebGLProgram")}}
- {{domxref("WebGLShader")}}
- {{domxref("WebGLRenderingContext.attachShader()")}}
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
