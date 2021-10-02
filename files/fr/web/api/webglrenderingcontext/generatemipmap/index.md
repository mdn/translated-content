---
title: WebGLRenderingContext.generateMipmap()
slug: Web/API/WebGLRenderingContext/generateMipmap
tags:
  - API
  - Méthode
  - Reference
  - Textures
  - WebGL
  - WebGLRenderingContext
translation_of: Web/API/WebGLRenderingContext/generateMipmap
---
{{APIRef("WebGL")}}

La méthode **`WebGLRenderingContext.generateMipmap()`** de l'[API WebGL](/fr-FR/docs/Web/API/WebGL_API) génère un ensemble de mipmaps pour un objet {{domxref("WebGLTexture")}}.

Les mipmaps sont utilisées pour créer de la distance avec des objets. Une mipmap de haute résolution est utilisée pour les objets qui sont proches, et une mipmap de résolution inférieure est utilisée pour les objets qui sont plus éloignés. Elles commencent avec la résolution de l'image de texture, puis la résolution est divisée par deux jusqu'à ce qu'une image de texture de dimension 1x1 soit créée.

## Syntaxe

    void gl.generateMipmap(cible);

### Paramètres

- cible

  - : Un {{domxref("GLenum")}} indiquant le point de liaison (cible) de la texture active dont les mipmaps seront générées. Valeurs possibles :

    - `gl.TEXTURE_2D` : une  texture bi-dimensionnelle.
    - `gl.TEXTURE_CUBE_MAP` : une texture appliquée sur un cube.
    - Lorsqu'un {{domxref("WebGL2RenderingContext", "WebGL 2 context", "", 1)}} est utilisé, les valeurs suivantes sont en outre disponibles :

      - `gl.TEXTURE_3D` : une texture tri-dimensionnelle.
      - `gl.TEXTURE_2D_ARRAY` : une texture bi-dimensionnelle en tableau.

### Valeur retournée

Aucune.

## Exemples

```js
gl.generateMipmap(gl.TEXTURE_2D);
```

## Spécifications

| Spécification                                                                                        | Statut                               | Commentaire                                                                                     |
| ---------------------------------------------------------------------------------------------------- | ------------------------------------ | ----------------------------------------------------------------------------------------------- |
| {{SpecName('WebGL', "#5.14.8", "generateMipmap")}}                                 | {{Spec2('WebGL')}}             | Définition initiale pour WebGL.                                                                 |
| {{SpecName('OpenGL ES 2.0', "glGenerateMipmap.xml", "glGenerateMipmap")}}     | {{Spec2('OpenGL ES 2.0')}} | Page man de l'API (similaire) d'OpenGL ES 2.0.                                                  |
| {{SpecName('OpenGL ES 3.0', "glGenerateMipmap.xhtml", "glGenerateMipmap")}} | {{Spec2('OpenGL ES 3.0')}} | Page man de l'API (similaire) d'OpenGL ES 3.0 Ajoute : `gl.TEXTURE_3D` et `gl.TEXTURE_2D_ARRAY` |

## Compatibilité des navigateurs

{{Compat("api.WebGLRenderingContext.generateMipmap")}}

## Voir aussi

- {{domxref("WebGLRenderingContext.createTexture()")}}
- {{domxref("WebGLRenderingContext.bindTexture()")}}
- {{domxref("WebGLRenderingContext.getTexParameter()")}}
- {{domxref("WebGLRenderingContext.texParameter", "WebGLRenderingContext.texParameterf()")}}
- {{domxref("WebGLRenderingContext.texParameter", "WebGLRenderingContext.texParameteri()")}}
