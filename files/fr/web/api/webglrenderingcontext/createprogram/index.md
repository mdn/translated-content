---
title: WebGLRenderingContext.createProgram()
slug: Web/API/WebGLRenderingContext/createProgram
---

{{APIRef("WebGL")}}

La méthode **`WebGLRenderingContext.createProgram()`** de l'[API WebGL](/fr-FR/docs/Web/API/WebGL_API) crée et initialise un objet {{domxref("WebGLProgram")}}.

## Syntaxe

```js
WebGLProgram gl.createProgram();
```

### Paramètres

Aucun.

### Valeur retournée

Un objet {{domxref("WebGLProgram")}} qui est une combinaison de deux {{domxref("WebGLShader")}}s compilés, constitués d'un shader de sommet et d'un shader de fragment (tous deux écrits en GLSL). Ceux-ci sont ensuite liés en un programme utilisable.

## Exemples

### Création d'un programme WebGL

```js
var programme = gl.createProgram();

// Attacher les shaders pré-existants
gl.attachShader(programme, shaderDeSommet);
gl.attachShader(programme, shaderDeFragment);

gl.linkProgram(programme);

if (!gl.getProgramParameter(programme, gl.LINK_STATUS)) {
  var info = gl.getProgramInfoLog(program);
  throw "Impossible de compiler le programme WebGL. \n\n" + info;
}
```

Voir {{domxref ("WebGLShader")}} pour plus d'informations sur la création du `shaderDeSommet` et du `shaderDeFragment` dans l'exemple ci-dessus.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{domxref("WebGLRenderingContext.deleteProgram()")}}
- {{domxref("WebGLRenderingContext.isProgram()")}}
- {{domxref("WebGLRenderingContext.linkProgram()")}}
- {{domxref("WebGLRenderingContext.useProgram()")}}
- {{domxref("WebGLRenderingContext.validateProgram()")}}
- {{domxref("WebGLRenderingContext.getProgramParameter()")}}
- {{domxref("WebGLRenderingContext.getProgramInfoLog()")}}
