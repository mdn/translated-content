---
title: WebGLRenderingContext.getAttribLocation()
slug: Web/API/WebGLRenderingContext/getAttribLocation
---

{{APIRef("WebGL")}}

La méthode **`WebGLRenderingContext.getAttribLocation()`** de l'[API WebGL](/fr-FR/docs/Web/API/WebGL_API) retourne l'emplacement d'une variable d'attribut dans le {{domxref("WebGLProgram")}} indiqué.

## Syntaxe

```js
GLint gl.getAttribLocation(programme, nom);
```

### Paramètres

- programme
  - : Un {{domxref("WebGLProgram")}} contenant la variable d'attribut.
- nom
  - : Un {{domxref("DOMString")}} indiquant le nom de la variable d'attribut dont l'emplacement est à retourner.

### Valeur retournée

Un nombre {{domxref("GLint")}} indiquant l'emplacement du nom de la variable si trouvé. Retourne -1 sinon.

## Exemples

```js
gl.getAttribLocation(programme, "vColor");
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{domxref("WebGLRenderingContext.getUniformLocation()")}}
