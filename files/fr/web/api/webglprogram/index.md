---
title: WebGLProgram
slug: Web/API/WebGLProgram
---

{{APIRef("WebGL")}}

Le **WebGLProgram** fait partie de l'[API WebGL](/fr-FR/docs/Web/API/WebGL_API) et il est une combinaison de deux {{domxref ("WebGLShader")}} compilés constitués d'un shader de sommet et d'un shader de fragment (tous deux écrits en GLSL). Ces dernier sont ensuite liés dans un programme utilisable.

```js
var programme = gl.createProgram();

// Lier les shaders préexistants
gl.attachShader(programme, shaderDeSommet);
gl.attachShader(programme, shaderDeFragment);

gl.linkProgram(programme);

if (!gl.getProgramParameter(programme, gl.LINK_STATUS)) {
  var info = gl.getProgramInfoLog(programme);
  throw "Impossible de compiler le program WebGL.\n\n" + info;
}
```

Voir {{domxref("WebGLShader")}} pour des informations sur la création de `shaderDeSommet` et de `shaderDeFragment` dans le programme ci-dessus.

## Exemples

### Utilisation du programme

Les étapes pour travailler effectivement avec le programme impliquent d'indiquer à la GPU d'utiliser le programme, de lier les données et les options de configuration appropriées, et enfin, de dessiner quelque chose à l'écran.

```js
// Utiliser le programme
gl.useProgram(programme);

// Lier les données d'attribut existantes
gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
gl.enableVertexAttribArray(attributeLocation);
gl.vertexAttribPointer(attributeLocation, 3, gl.FLOAT, false, 0, 0);

// Dessiner un unique triangle
gl.drawArrays(gl.TRIANGLES, 0, 3);
```

### Suppression du programme

S'il y a une erreur lors de l'édition de liens du programme, ou si vous voulez supprimer un programme existant, alors c'est tout simple, il suffit d'exécuter {{domxref ("WebGLRenderingContext.deleteProgram()")}}. Cela libère la mémoire du programme lié.

```js
gl.deleteProgram(programme);
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

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
