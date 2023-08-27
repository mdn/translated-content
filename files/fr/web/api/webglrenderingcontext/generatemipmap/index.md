---
title: WebGLRenderingContext.generateMipmap()
slug: Web/API/WebGLRenderingContext/generateMipmap
---

{{APIRef("WebGL")}}

La méthode **`WebGLRenderingContext.generateMipmap()`** de l'[API WebGL](/fr-FR/docs/Web/API/WebGL_API) génère un ensemble de mipmaps pour un objet {{domxref("WebGLTexture")}}.

Les mipmaps sont utilisées pour créer de la distance avec des objets. Une mipmap de haute résolution est utilisée pour les objets qui sont proches, et une mipmap de résolution inférieure est utilisée pour les objets qui sont plus éloignés. Elles commencent avec la résolution de l'image de texture, puis la résolution est divisée par deux jusqu'à ce qu'une image de texture de dimension 1x1 soit créée.

## Syntaxe

```js
void gl.generateMipmap(cible);
```

### Paramètres

- cible

  - : Un {{domxref("GLenum")}} indiquant le point de liaison (cible) de la texture active dont les mipmaps seront générées. Valeurs possibles :

    - `gl.TEXTURE_2D`&nbsp;: une texture bi-dimensionnelle.
    - `gl.TEXTURE_CUBE_MAP`&nbsp;: une texture appliquée sur un cube.
    - Lorsqu'un {{domxref("WebGL2RenderingContext", "WebGL 2 context", "", 1)}} est utilisé, les valeurs suivantes sont en outre disponibles :

      - `gl.TEXTURE_3D`&nbsp;: une texture tri-dimensionnelle.
      - `gl.TEXTURE_2D_ARRAY`&nbsp;: une texture bi-dimensionnelle en tableau.

### Valeur retournée

Aucune.

## Exemples

```js
gl.generateMipmap(gl.TEXTURE_2D);
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{domxref("WebGLRenderingContext.createTexture()")}}
- {{domxref("WebGLRenderingContext.bindTexture()")}}
- {{domxref("WebGLRenderingContext.getTexParameter()")}}
- {{domxref("WebGLRenderingContext.texParameter", "WebGLRenderingContext.texParameterf()")}}
- {{domxref("WebGLRenderingContext.texParameter", "WebGLRenderingContext.texParameteri()")}}
