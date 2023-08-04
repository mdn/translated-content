---
title: WebGLRenderingContext.drawArrays()
slug: Web/API/WebGLRenderingContext/drawArrays
---

{{APIRef("WebGL")}}

La méthode **`WebGLRenderingContext.drawArrays()`** de l'[API WebGL](/fr-FR/docs/Web/API/WebGL_API) dessine des primitives à partir de données tabulaires.

## Syntaxe

```js
void gl.drawArrays(mode, premier, compte);
```

### Paramètres

- `mode`

  - : Un {{domxref ("GLenum")}} indiquant la primitive de type à dessiner. Les valeurs possibles sont :

    - `gl.POINTS`&nbsp;: dessine un seul point ;
    - `gl.LINE_STRIP`&nbsp;: dessine une ligne droite jusqu'au sommet suivant ;
    - `gl.LINE_LOOP`&nbsp;: dessine une ligne droite jusqu'au sommet suivant, et relie le dernier sommet au premier ;
    - `gl.LINES`&nbsp;: dessine une ligne entre une paire de sommets ;
    - [`gl.TRIANGLE_STRIP`](https://en.wikipedia.org/wiki/Triangle_strip)
    - [`gl.TRIANGLE_FAN`](https://en.wikipedia.org/wiki/Triangle_fan)
    - `gl.TRIANGLES`&nbsp;: dessine un triangle pour un groupe de trois sommets.

- `premier`
  - : Un {{domxref("GLint")}} indiquant de l'indice de départ dans le tableau des points des vecteurs.
- `compte`
  - : Un {{domxref("GLsizei")}} indiquant le nombre d'indices à dessiner.

### Valeur retournée

None.

### Exceptions

- Si `mode` n'est pas l'une des valeurs acceptables, une erreur `gl.INVALID_ENUM` est déclenchée.
- Si `premier` ou `compte` sont négatifs, une erreur `gl.INVALID_VALUE` est déclenchée.
- Si `gl.CURRENT_PROGRAM` est {{jsxref("null")}}, une erreur `gl.INVALID_OPERATION` est déclenchée.

## Exemples

```js
gl.drawArrays(gl.POINTS, 0, 8);
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{domxref("WebGLRenderingContext.drawElements()")}}
- {{domxref("ANGLE_instanced_arrays.drawArraysInstancedANGLE()", "ext.drawArraysInstancedANGLE()")}}
- {{domxref("ANGLE_instanced_arrays.drawElementsInstancedANGLE()", "ext.drawElementsInstancedANGLE()")}}
- {{domxref("ANGLE_instanced_arrays.vertexAttribDivisorANGLE()", "ext.vertexAttribDivisorANGLE()")}}
- {{domxref("WebGL2RenderingContext.drawArraysInstanced()")}}
- {{domxref("WebGL2RenderingContext.drawElementsInstanced()")}}
- {{domxref("WebGL2RenderingContext.vertexAttribDivisor()")}}
