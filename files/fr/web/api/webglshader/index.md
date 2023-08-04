---
title: WebGLShader
slug: Web/API/WebGLShader
---

{{APIRef("WebGL")}}

Le **WebGLShader** fait partie de l'[API WebGL](/fr-FR/docs/Web/API/WebGL_API) et peut être un shader de sommet ou de fragment. Un {{domxref ("WebGLProgram")}} requiert les deux types de shaders.

## Description

Pour créer un **WebGLShader,** utiliser {{domxref("WebGLRenderingContext.createShader")}}, puis reliez-y le code source GLSL en utilisant {{domxref("WebGLRenderingContext.shaderSource()")}}, et enfin, appelez {{domxref ("WebGLRenderingContext.compileShader()")}} pour terminer et compiler le shader. À ce stade, le WebGLShader n'est toujours pas sous une forme utilisable et doit toujours être relié à un {{domxref ("WebGLProgram")}}.

```js
function creerShader(gl, codeSource, type) {
  // Compile un shader de type soit gl.VERTEX_SHADER, soit gl.FRAGMENT_SHADER
  var shader = gl.createShader(type);
  gl.shaderSource(shader, codeSource);
  gl.compileShader(shader);

  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    var info = gl.getShaderInfoLog(shader);
    throw "Impossible de compiler le programme WebGL.\n\n" + info;
  }
  return shader;
}
```

Voir {{domxref("WebGLProgram")}} pour des informations sur la liaison de shaders.

## Exemples

### Création d'un shader de sommet

Notez qu'il existe de nombreuses autres stratégies pour écrire des chaînes de code source de shader et y accéder. Ces exemples sont à titre d'illustration seulement.

```js
var sourceShaderDeSommet =
  "attribute vec4 position;\n" +
  "void main() {\n" +
  "  gl_Position = position;\n" +
  "}\n";

// Utilisez la function creerShader de l'exemple ci-dessus
var shaderDeSommet = creerShader(gl, sourceShaderDeSommet, gl.VERTEX_SHADER);
```

### Création d'un shader de fragment

```js
var sourceShaderDeFragment =
  "void main() {\n" + "  gl_FragColor = vec4(1.0, 1.0, 1.0, 1.0);\n" + "}\n";

// Utilisez la fonction creerShader de l'exemple ci-dessus
var shaderDeFragment = creerShader(
  gl,
  sourceShaderDeFragment,
  gl.FRAGMENT_SHADER,
);
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{domxref("WebGLProgram")}}
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
