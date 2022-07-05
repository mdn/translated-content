---
title: WebGLRenderingContext.getTexParameter()
slug: Web/API/WebGLRenderingContext/getTexParameter
tags:
  - API
  - Méthode
  - Reference
  - Textures
  - WebGL
  - WebGLRenderingContext
translation_of: Web/API/WebGLRenderingContext/getTexParameter
---
{{APIRef("WebGL")}}

La méthode **`WebGLRenderingContext.getTexParameter()`** de l'[API WebGL](/fr-FR/docs/Web/API/WebGL_API) retourne des informations concernant la texture indiquée.

## Syntaxe

    quelconque gl.getTexParameter(cible, nomp);

### Paramètres

- cible

  - : Un {{domxref("GLenum")}} indiquant le point de liaison (cible). Valeurs possibles :

    - `gl.TEXTURE_2D`&nbsp;: une texture bi-dimensionnelle.
    - `gl.TEXTURE_CUBE_MAP`&nbsp;: une texture appliquée à un cube.
    - Lorsqu' un {{domxref("WebGL2RenderingContext", "WebGL 2 context", "", 1)}} est utilisé, les valeurs suivantes sont en outre disponibles :

      - `gl.TEXTURE_3D`&nbsp;: une texture tri-dimensionnelle.
      - `gl.TEXTURE_2D_ARRAY`&nbsp;: une texture bi-dimensionnelle en tableau.

- nomp

  - : Un {{domxref("Glenum")}} indiquant l'information à obtenir. Valeurs possibles :

    <table class="standard-table">
      <thead>
        <tr>
          <th scope="col">nomp</th>
          <th scope="col">Type retourné</th>
          <th scope="col">Description</th>
          <th scope="col">Valeurs retournées possibles</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th colspan="4">Disponible dans un contexte WebGL 1</th>
        </tr>
        <tr>
          <td><code>gl.TEXTURE_MAG_FILTER</code></td>
          <td>{{domxref("GLenum")}}</td>
          <td>Filtre de grossissement de texture</td>
          <td>
            <code>gl.LINEAR</code> (valeur par défaut), <code>gl.NEAREST</code>.
          </td>
        </tr>
        <tr>
          <td><code>gl.TEXTURE_MIN_FILTER</code></td>
          <td>{{domxref("GLenum")}}</td>
          <td>Filtre de réduction de texture</td>
          <td>
            <code>gl.LINEAR</code>, <code>gl.NEAREST</code>,
            <code>gl.NEAREST_MIPMAP_NEAREST</code>,
            <code>gl.LINEAR_MIPMAP_NEAREST</code>,
            <code>gl.NEAREST</code>_MIPMAP_LINEAR (valeur par défaut),
            <code>gl.LINEAR_MIPMAP_LINEAR</code>.
          </td>
        </tr>
        <tr>
          <td><code>gl.TEXTURE_WRAP_S</code></td>
          <td>{{domxref("GLenum")}}</td>
          <td>Fonction d'emballage pour la coordonnée de texture <code>s</code></td>
          <td>
            <code>gl.REPEAT</code> (valeur par défaut),
            <code>gl.CLAMP_TO_EDGE</code>, <code>gl.MIRRORED_REPEAT</code>.
          </td>
        </tr>
        <tr>
          <td><code>gl.TEXTURE_WRAP_T</code></td>
          <td>{{domxref("GLenum")}}</td>
          <td>Fonction d'emballage pour la coordonnée de texture <code>t</code></td>
          <td>
            <code>gl.REPEAT</code> (valeur par défaut),
            <code>gl.CLAMP_TO_EDGE</code>, <code>gl.MIRRORED_REPEAT</code>.
          </td>
        </tr>
        <tr>
          <th colspan="4">
            Disponible en outre lorsque l'extension
            {{domxref("EXT_texture_filter_anisotropic")}} est
            utilisée
          </th>
        </tr>
        <tr>
          <td><code>ext.TEXTURE_MAX_ANISOTROPY_EXT</code></td>
          <td>{{domxref("GLfloat")}}</td>
          <td>Anisotropie maximum pour une texture</td>
          <td>Toutes valeurs float.</td>
        </tr>
        <tr>
          <th colspan="4">
            Disponible en outre lorsqu'un contexte WebGL 2 est utilisé
          </th>
        </tr>
        <tr>
          <td><code>gl.TEXTURE_BASE_LEVEL</code></td>
          <td>{{domxref("GLint")}}</td>
          <td>Niveau de mipmap de texture</td>
          <td>Toutes valeurs int.</td>
        </tr>
        <tr>
          <td><code>gl.TEXTURE_COMPARE_FUNC</code></td>
          <td>{{domxref("GLenum")}}</td>
          <td>Fonction de comparaison</td>
          <td>
            <code>gl.LEQUAL</code> (valeurs par défaut), <code>gl.GEQUAL</code>,
            <code>gl.LESS</code>, <code>gl.GREATER</code>, <code>gl.EQUAL</code>,
            <code>gl.NOTEQUAL</code>, <code>gl.ALWAYS</code>, <code>gl.NEVER</code>.
          </td>
        </tr>
        <tr>
          <td><code>gl.TEXTURE_COMPARE_MODE</code></td>
          <td>{{domxref("GLenum")}}</td>
          <td>Mode de comparaison de texture</td>
          <td>
            <code>gl.NONE</code> (valeur par défaut),
            <code>gl.COMPARE_REF_TO_TEXTURE</code>.
          </td>
        </tr>
        <tr>
          <td><code>gl.TEXTURE_IMMUTABLE_FORMAT</code></td>
          <td>{{domxref("GLboolean")}}</td>
          <td>Immuabilité du format et de la taille de la texture</td>
          <td>true ou false.</td>
        </tr>
        <tr>
          <td><code>gl.TEXTURE_IMMUTABLE_LEVELS</code></td>
          <td>{{domxref("GLuint")}}</td>
          <td>?</td>
          <td>Toutes valeurs uint.</td>
        </tr>
        <tr>
          <td><code>gl.TEXTURE_MAX_LEVEL</code></td>
          <td>{{domxref("GLint")}}</td>
          <td>Niveau maximum de mipmap de texture en tableau</td>
          <td>Toutes valeurs int.</td>
        </tr>
        <tr>
          <td><code>gl.TEXTURE_MAX_LOD</code></td>
          <td>{{domxref("GLfloat")}}</td>
          <td>Valeur de niveau-de-détail maximum de texture</td>
          <td>Toutes valeurs float.</td>
        </tr>
        <tr>
          <td><code>gl.TEXTURE_MIN_LOD</code></td>
          <td>{{domxref("GLfloat")}}</td>
          <td>Valeur de niveau-de-détail minimum de texture</td>
          <td>Toutes valeurs float.</td>
        </tr>
        <tr>
          <td><code>gl.TEXTURE_WRAP_R</code></td>
          <td>{{domxref("GLenum")}}</td>
          <td>
            Fonction d'emballage pour la coordonnée de texture  <code>r</code>
          </td>
          <td>
            <code>gl.REPEAT</code> (valeur par défaut),
            <code>gl.CLAMP_TO_EDGE</code>, <code>gl.MIRRORED_REPEAT</code>.
          </td>
        </tr>
      </tbody>
    </table>

### Valeur retournée

Retourne l'information de texture demandée (telle qu'indiquée par `nomp`). Si une erreur se produit, {{jsxref("null")}} est retourné.

## Exemples

```js
gl.getTexParameter(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER);
```

## Spécifications

| Spécification                                                                                            | Statut                               | Commentaire                                  |
| -------------------------------------------------------------------------------------------------------- | ------------------------------------ | -------------------------------------------- |
| {{SpecName('WebGL', "#5.14.8", "getTexParameter")}}                                     | {{Spec2('WebGL')}}             | Définition initiale pour WebGL.              |
| {{SpecName('OpenGL ES 2.0', "glGetTexParameter.xml", "glGetTexParameter")}}     | {{Spec2('OpenGL ES 2.0')}} | Page man de l'API OpenGL ES 2.0 (similaire). |
| {{SpecName('WebGL2', "#3.7.6", "getTexParameter")}}                                     | {{Spec2('WebGL2')}}             | Définition mise à jour pour WebGL.           |
| {{SpecName('OpenGL ES 3.0', "glGetTexParameter.xhtml", "glGetTexParameter")}} | {{Spec2('OpenGL ES 3.0')}} | Page man de l'API OpenGL ES 3.0 (similaire). |

## Compatibilité des navigateurs

{{Compat("api.WebGLRenderingContext.getTexParameter")}}

## Voir aussi

- {{domxref("WebGLRenderingContext.texParameter", "WebGLRenderingContext.texParameterf()")}}
- {{domxref("WebGLRenderingContext.texParameter", "WebGLRenderingContext.texParameteri()")}}
- {{domxref("EXT_texture_filter_anisotropic")}}
