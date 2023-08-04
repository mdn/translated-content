---
title: WebGLRenderingContext.useProgram()
slug: Web/API/WebGLRenderingContext/useProgram
---

{{APIRef("WebGL")}}

La méthode **`WebGLRenderingContext.useProgram()`** de l'[API WebGL](/fr-FR/docs/Web/API/WebGL_API) définit le {{domxref("WebGLProgram")}} spécifié comme faisant partie de l'état de rendu en cours.

## Syntaxe

```js
void gl.useProgram(programme);
```

### Paramètres

- programme
  - : Un {{domxref("WebGLProgram")}} à utiliser.

### Valeur retournée

Aucune.

## Exemples

```js
var programme = gl.createProgram();

// Attacher les shaders pré-existants
gl.attachShader(programme, vertexShader);
gl.attachShader(programme, fragmentShader);

gl.linkProgram(programme);
gl.useProgram(programme);
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{domxref("WebGLRenderingContext.createProgram()")}}
- {{domxref("WebGLRenderingContext.deleteProgram()")}}
- {{domxref("WebGLRenderingContext.isProgram()")}}
- {{domxref("WebGLRenderingContext.linkProgram()")}}
- {{domxref("WebGLRenderingContext.validateProgram()")}}
- {{domxref("WebGLRenderingContext.getProgramParameter()")}}
- {{domxref("WebGLRenderingContext.getProgramInfoLog()")}}
