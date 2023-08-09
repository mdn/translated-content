---
title: WebGLRenderingContext.bindTexture()
slug: Web/API/WebGLRenderingContext/bindTexture
---

{{APIRef("WebGL")}}

La méthode **`WebGLRenderingContext.bindTexture()`** de l'API WebGL lie la {{domxref("WebGLTexture")}} donnée à une cible (point de liaison).

## Syntaxe

```js
void gl.bindTexture(cible, texture);
```

### Paramètres

- cible

  - : Un {{domxref ("GLenum")}} indiquant le point de liaison (cible). Valeurs possibles :

    - `gl.TEXTURE_2D`&nbsp;: une texture bidimensionnelle ;
    - `gl.TEXTURE_CUBE_MAP` : une texture mappée sur un cube ;
    - lors de l'utilisation d'un {{domxref("WebGL2RenderingContext", "WebGL 2 context", "", 1)}}, les valeurs suivantes sont en outre disponibles :

      - `gl.TEXTURE_3D` : une texture tridimensionnelle ;
      - `gl.TEXTURE_2D_ARRAY`&nbsp;: une texture en tableau bidimensionnelle.

- texture
  - : Un objet {{domxref ("WebGLTexture")}} à lier.

### Valeur retournée

Aucune.

### Exceptions

Une erreur `gl.INVALID_ENUM` est déclenchée si `cible` n'est pas `gl.TEXTURE_2D`, `gl.TEXTURE_CUBE_MAP`, `gl.TEXTURE_3D`, ou `gl.TEXTURE_2D_ARRAY`.

## Exemples

### Liaison d'une texture

```js
var canevas = document.getElementById("canevas");
var gl = canevas.getContext("webgl");
var texture = gl.createTexture();

gl.bindTexture(gl.TEXTURE_2D, texture);
```

### Obtention des liaisons en cours

Pour vérifier la liaison de texture en cours, interrogez les constantes `gl.TEXTURE_BINDING_2D` ou `gl.TEXTURE_BINDING_CUBE_MAP`.

```js
gl.getParameter(gl.TEXTURE_BINDING_2D);
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{domxref("WebGLRenderingContext.createTexture()")}}
- {{domxref("WebGLRenderingContext.deleteTexture()")}}
- {{domxref("WebGLRenderingContext.isTexture()")}}
- {{domxref("WebGLRenderingContext.texImage2D()")}}
