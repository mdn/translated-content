---
title: WebGLRenderingContext.texImage2D()
slug: Web/API/WebGLRenderingContext/texImage2D
---

{{APIRef("WebGL")}}

La méthode **`WebGLRenderingContext.texImage2D()`** de l'[API WebGL](/fr-FR/docs/Web/API/WebGL_API) spécifie une image de texture bidimensionnelle.

## Syntaxe

```js
// WebGL1:
void gl.texImage2D(cible, niveau, formatinterne, largeur, hauteur, bordure, format, type, ArrayBufferView? pixels);
void gl.texImage2D(cible, niveau, formatinterne, format, type, ImageData? pixels);
void gl.texImage2D(cible, niveau, formatinterne, format, type, HTMLImageElement? pixels);
void gl.texImage2D(cible, niveau, formatinterne, format, type, HTMLCanvasElement? pixels);\void gl.texImage2D(cible, niveau, formatinterne, format, type, HTMLVideoElement? pixels);

// WebGL2:
void gl.texImage2D(cible, niveau, formatinterne, largeur, hauteur, bordure, format, type, GLintptr decalage);
void gl.texImage2D(cible, niveau, formatinterne, largeur, hauteur, bordure, format, type, HTMLCanvasElement source);
void gl.texImage2D(cible, niveau, formatinterne, largeur, hauteur, bordure, format, type, HTMLImageElement source);
void gl.texImage2D(cible, niveau, formatinterne, largeur, hauteur, bordure, format, type, HTMLVideoElement source);
void gl.texImage2D(cible, niveau, formatinterne, largeur, hauteur, bordure, format, type, ImageBitmap source);
void gl.texImage2D(cible, niveau, formatinterne, largeur, hauteur, bordure, format, type, ImageData source);
void gl.texImage2D(cible, niveau, formatinterne, largeur, hauteur, bordure, format, type, ArrayBufferView donneesSrc, decalageSrc);
```

### Paramètres

- `cible`

  - : Un {{domxref ("GLenum")}} indiquant le point de liaison (cible) de la texture active. Valeurs possibles :

    - `gl.TEXTURE_2D` : une texture bidimensionnelle ;
    - `gl.TEXTURE_CUBE_MAP_POSITIVE_X` : face X positive pour une texture mappée sur un cube ;
    - `gl.TEXTURE_CUBE_MAP_NEGATIVE_X`&nbsp;: face X négative pour une texture mappée sur un cube ;
    - `gl.TEXTURE_CUBE_MAP_POSITIVE_Y` : face Y positive pour une texture mappée sur un cube ;
    - `gl.TEXTURE_CUBE_MAP_NEGATIVE_Y` : face Y négative pour une texture mappée sur un cube ;
    - `gl.TEXTURE_CUBE_MAP_POSITIVE_Z` : face Z positive pour une texture mappée sur un cube ;
    - `gl.TEXTURE_CUBE_MAP_NEGATIVE_Z` : face Z négative pour une texture mappée sur un cube.

- `niveau`
  - : Un {{domxref ("GLint")}} indiquant le niveau de détail. Le niveau 0 est le niveau de l'image de base et le niveau n est le n-ième niveau de réduction du mipmap.
- `formatinterne`

  - : Un {{domxref ("GLint")}} indiquant les composantes de couleur dans la texture. Valeurs possibles :

    - `gl.ALPHA` : ignore les composantes rouge, vert et bleu, et lit la composante alpha ;
    - `gl.RGB`&nbsp;: ignore la composante alpha et lit les composantes rouge, vert et bleu ;
    - `gl.RGBA`&nbsp;: les composantes rouge, vert, bleu et alpha sont lues à partir du tampon des couleurs ;
    - `gl.LUMINANCE`&nbsp;: chaque composante de couleur est une composante de luminance, alpha vaut 1,0 ;
    - `gl.LUMINANCE_ALPHA`&nbsp;: chaque composante est une composante de luminance/alpha ;
    - lors de l'utilisation de l'extension {{domxref("WEBGL_depth_texture")}} :

      - `gl.DEPTH_COMPONENT`
      - `gl.DEPTH_STENCIL`

    - lors de l'utilisation de l'extension {{domxref("EXT_sRGB")}} :

      - `ext.SRGB_EXT`
      - `ext.SRGB_ALPHA_EXT`

    - Lors de l'utilisation d'un {{domxref("WebGL2RenderingContext", "WebGL 2 context", "", 1)}}, les valeurs suivantes sont en outre disponibles :

      - `gl.R8`
      - `gl.R16F`
      - `gl.R32F`
      - `gl.R8UI`
      - `gl.RG8`
      - `gl.RG16F`
      - `gl.RG32F`
      - `gl.RG8UI`
      - `gl.RG16UI`
      - `gl.RG32UI`
      - `gl.RGB8`
      - `gl.SRGB8`
      - `gl.RGB565`
      - `gl.R11F_G11F_B10F`
      - `gl.RGB9_E5`
      - `gl.RGB16F`
      - `gl.RGB32F`
      - `gl.RGB8UI`
      - `gl.RGBA8`
      - `gl.SRGB8_APLHA8`
      - `gl.RGB5_A1`
      - `gl.RGB10_A2`
      - `gl.RGBA4`
      - `gl.RGBA16F`
      - `gl.RGBA32F`
      - `gl.RGBA8UI`

- `largeur`
  - : Un {{domxref ("GLsizei")}} indiquant la largeur de la texture.
- `hauteur`
  - : Un {{domxref ("GLsizei")}} indiquant la hauteur de la texture.
- `bordure`
  - : Un {{domxref("GLint")}} indiquant la largeur de la bordure. Doit être 0.
- `format`
  - : Un {{domxref("GLenum")}} indiquant le format des données de texel. En WebGL 1, cela doit être identique à `formatinterne` (voir ci-dessus). En WebGL 2, les combinaisons sont répertoriées dans [ce tableau](https://www.khronos.org/registry/webgl/specs/latest/2.0/#TEXTURE_TYPES_FORMATS_FROM_DOM_ELEMENTS_TABLE).
- `type`

  - : Un {{domxref("GLenum")}} indiquant le type de données des données de texel. Valeurs possibles :

    - `gl.UNSIGNED_BYTE`&nbsp;: 8 bits par canal pour `gl.RGBA` ;
    - `gl.UNSIGNED_SHORT_5_6_5`&nbsp;: 5 bits de rouge, 6 bits de vert, 5 bits de bleu ;
    - `gl.UNSIGNED_SHORT_4_4_4_4`&nbsp;: 4 bits de rouge, 4 bits de vert, 4 bits de bleu, 4 bits d'alpha ;
    - `gl.UNSIGNED_SHORT_5_5_5_1`&nbsp;: 5 bits de rouge, 5 bits de vert, 5 bits de bleu, 1 bit d'alpha ;
    - lors de l'utilisation de l'extension {{domxref ("WEBGL_depth_texture")}} :

      - `gl.UNSIGNED_SHORT`
      - `gl.UNSIGNED_INT`
      - `ext.UNSIGNED_INT_24_8_WEBGL` (constante fournie par l'extension)

    - lors de l'utilisation de l'extension {{domxref("OES_texture_float")}} :

      - `gl.FLOAT`

    - lors de l'utilisation de l'extension {{domxref("OES_texture_half_float")}} :

      - `ext.HALF_FLOAT_OES` (constante fournie par l'extension)

    - lors de l'utilisation d'un {{domxref("WebGL2RenderingContext", "WebGL 2 context", "", 1)}}, les valeurs suivantes sont en outre disponibles :

      - `gl.BYTE`
      - `gl.UNSIGNED_SHORT`
      - `gl.SHORT`
      - `gl.UNSIGNED_INT`
      - `gl.INT`
      - `gl.HALF_FLOAT`
      - `gl.FLOAT`
      - `gl.UNSIGNED_INT_2_10_10_10_REV`
      - `gl.UNSIGNED_INT_10F_11F_11F_REV`
      - `gl.UNSIGNED_INT_5_9_9_9_REV`
      - `gl.UNSIGNED_INT_24_8`
      - `gl.FLOAT_32_UNSIGNED_INT_24_8_REV` (les pixels doivent être {{jsxref("null")}})

- `pixels`

  - : L'un des objets suivants peut être utilisé comme source de pixels pour la texture :

    - {{domxref("ArrayBufferView")}},

      - un {{jsxref("Uint8Array")}} doit être utilisé si `type` est `gl.UNSIGNED_BYTE` ;
      - un {{jsxref("Uint16Array")}} doit être utilisé si `type` est `gl.UNSIGNED_SHORT_5_6_5`, `gl.UNSIGNED_SHORT_4_4_4_4`, `gl.UNSIGNED_SHORT_5_5_5_1`, `gl.UNSIGNED_SHORT` ou `ext.HALF_FLOAT_OES` ;
      - un {{jsxref("Uint32Array")}} doit être utilisé si `type` est `gl.UNSIGNED_INT` ou `ext.UNSIGNED_INT_24_8_WEBGL` ;
      - un {{jsxref("Float32Array")}} doit être utilisé si `type` est `gl.FLOAT` ;

    - {{domxref("ImageData")}},
    - {{domxref("HTMLImageElement")}},
    - {{domxref("HTMLCanvasElement")}},
    - {{domxref("HTMLVideoElement")}},
    - {{domxref("ImageBitmap")}}.

- **`decalage`**
  - : (WebGL 2 seulement) Un décalage en octets {{domxref("GLintptr")}} dans le magasin de données du {{domxref("WebGLBuffer")}}. Utilisé pour télécharger des données vers la {{domxref ("WebGLTexture")}} liée, depuis le `WebGLBuffer` lié à la cible `PIXEL_UNPACK_BUFFER`.

### Valeur retournée

Aucune.

## Exemples

```js
gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, image);
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{domxref("WebGLRenderingContext.createTexture()")}}
- {{domxref("WebGLRenderingContext.bindTexture()")}}
- {{domxref("WebGLRenderingContext.texSubImage2D()")}}
- {{domxref("WebGLRenderingContext.compressedTexImage2D()")}}
- {{domxref("WebGLRenderingContext.copyTexImage2D()")}}
- {{domxref("WebGLRenderingContext.getTexParameter()")}}
- {{domxref("WEBGL_depth_texture")}}
- {{domxref("OES_texture_float")}}
- {{domxref("OES_texture_half_float")}}
- {{domxref("EXT_sRGB")}}
