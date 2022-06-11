---
title: WebGLRenderingContext.clear()
slug: Web/API/WebGLRenderingContext/clear
tags:
  - API
  - Méthode
  - Reference
  - WebGL
  - WebGLRenderingContext
translation_of: Web/API/WebGLRenderingContext/clear
---
{{APIRef("WebGL")}}

La méthode **`WebGLRenderingContext.clear()`** de [l'API WebGL](/fr/docs/Web/API/WebGL_API) efface les tampons avec des valeurs prédéfinies.

Ces valeurs prédéfinies peuvent être affectées par {{domxref("WebGLRenderingContext.clearColor", "clearColor()")}}, {{domxref("WebGLRenderingContext.clearDepth", "clearDepth()")}} ou {{domxref("WebGLRenderingContext.clearStencil", "clearStencil()")}}.

Les masques d'écriture, de détourage, de tramage et de tampon peuvent affecter la méthode `clear()`.

## Syntaxe

    void gl.clear(masque);

### Paramètres

- `masque`

  - : Un masque OU par bits {{domxref("GLbitfield")}} qui indique les tampons à effacer. Les valeurs possibles sont :

    - `gl.COLOR_BUFFER_BIT`
    - `gl.DEPTH_BUFFER_BIT`
    - `gl.STENCIL_BUFFER_BIT`

### Valeur retournée

Aucune.

### Exceptions

Si *masque* n'est pas l'une des valeurs possibles listées, une erreur `gl.INVALID_ENUM` est déclenchée.

## Exemples

La méthode `clear()` accepte des valeurs multiples.

```js
gl.clear(gl.DEPTH_BUFFER_BIT);
gl.clear(gl.DEPTH_BUFFER_BIT | gl.COLOR_BUFFER_BIT);
```

Pour obtenir les valeurs d'effacement courantes, interrogez les constantes `COLOR_CLEAR_VALUE`, `DEPTH_CLEAR_VALUE` et `STENCIL_CLEAR_VALUE` grâce à la méthode `getParameter()`.

```js
gl.getParameter(gl.COLOR_CLEAR_VALUE);
gl.getParameter(gl.DEPTH_CLEAR_VALUE);
gl.getParameter(gl.STENCIL_CLEAR_VALUE);
```

## Spécifications

| Spécification                                                            | Statut                               | Commentaire               |
| ------------------------------------------------------------------------ | ------------------------------------ | ------------------------- |
| {{SpecName('WebGL', "#5.14.11", "clear")}}                 | {{Spec2('WebGL')}}             | Définition initiale.      |
| {{SpecName('OpenGL ES 2.0', "glClear.xml", "glClear")}} | {{Spec2('OpenGL ES 2.0')}} | Page man de l'API OpenGL. |

## Compatibilité des navigateurs

{{Compat("api.WebGLRenderingContext.clear")}}

## Voir aussi

- {{domxref("WebGLRenderingContext.clearColor()")}}
- {{domxref("WebGLRenderingContext.clearDepth()")}}
- {{domxref("WebGLRenderingContext.clearStencil()")}}
