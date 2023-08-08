---
title: WebGLRenderingContext.activeTexture()
slug: Web/API/WebGLRenderingContext/activeTexture
---

{{APIRef("WebGL")}}

La méthode **`WebGLRenderingContext.activeTexture()`** de l'[API WebGL](/fr-FR/docs/Web/API/WebGL_API) indique quelle unité de texture doit être rendue active.

## Syntaxe

```js
void gl.activeTexture(texture);
```

### Paramètres

- `texture`
  - : L'unité de texture à rendre active. La valueur est une `gl.TEXTUREI` où _I_ est dans la plage de 0 à `gl.MAX_COMBINED_TEXTURE_IMAGE_UNITS - 1`.

### Valeur retournée

Aucune.

### Exceptions

Si _texture_ n'est pas l'une des `gl.TEXTUREI`, où _I_ est dans la plage de 0 à `gl.MAX_COMBINED_TEXTURE_IMAGE_UNITS - 1`, une erreur `gl.INVALID_ENUM` est déclenchée.

## Exemples

L'appel suivant choisit `gl.TEXTURE1` comme texture en cours. Les appels suivants qui modifient l'état de la texture affecteront cette texture.

```js
gl.activeTexture(gl.TEXTURE1);
```

Le nombre d'unités de texture dépend de l'implémentation, vous pouvez obtenir ce nombre à l'aide de la constante `MAX_COMBINED_TEXTURE_IMAGE_UNITS`. Il est, de par la spécification, d'au moins 8.

```js
gl.getParameter(gl.MAX_COMBINED_TEXTURE_IMAGE_UNITS);
```

Pour obtenir la texture en cours, faire une requête sur la constante `ACTIVE_TEXTURE`.

```js
gl.activeTexture(gl.TEXTURE0);
gl.getParameter(gl.ACTIVE_TEXTURE);
// retourne "33984" (0x84C0, valeur enum pour gl.TEXTURE0)
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{domxref("WebGLRenderingContext.getParameter()")}}
