---
title: WebGLRenderingContext.texParameter[fi]()
slug: Web/API/WebGLRenderingContext/texParameter
tags:
  - API
  - Méthode
  - Reference
  - Textures
  - WebGL
  - WebGLRenderingContext
translation_of: Web/API/WebGLRenderingContext/texParameter
---
{{APIRef("WebGL")}}

Les méthodes **`WebGLRenderingContext.texParameter[fi]()`** de l'[API WebGL](/fr-FR/docs/Web/API/WebGL_API) définissent les paramètres de texture.

## Syntaxe

    void gl.texParameterf(GLenum cible, GLenum nomp, GLfloat param);
    void gl.texParameteri(GLenum cible, GLenum nomp, GLint param);

### Paramètres

- cible

  - : Un {{domxref("GLenum")}} indiquant le point de liaison (cible). Valeurs possibles :

    - `gl.TEXTURE_2D`&nbsp;: une texture bi-dimensionelle.
    - `gl.TEXTURE_CUBE_MAP`&nbsp;: une texte appliquée sur un cube.
    - Lorsqu'un {{domxref("WebGL2RenderingContext", "WebGL 2 context", "", 1)}} est utilisé, les valeurs suivantes sont en outre disponibles :

      - `gl.TEXTURE_3D`&nbsp;: une texture tri-dimensionnelle.
      - `gl.TEXTURE_2D_ARRAY`&nbsp;: une texture bi-dimensionnelle en tableau.

Le paramètre `nomp` est un {{domxref("Glenum")}} indiquant le paramètre de texture à définir. Le paramètre `param` est un {{domxref("GLfloat")}} ou un {{domxref("GLint")}} indiquant la valeur pour le paramètre `nomp` indiqué.

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col"><code>pnom</code></th>
      <th scope="col">Description</th>
      <th scope="col"><code>param</code></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th colspan="3">Disponible en WebGL 1</th>
    </tr>
    <tr>
      <td><code>gl.TEXTURE_MAG_FILTER</code></td>
      <td>Filtre de grossissement de texture</td>
      <td>
        <code>gl.LINEAR</code> (valeur par défaut), <code>gl.NEAREST</code>.
      </td>
    </tr>
    <tr>
      <td><code>gl.TEXTURE_MIN_FILTER</code></td>
      <td>Filtre de réduction de texture</td>
      <td>
        <code>gl.LINEAR</code>, <code>gl.NEAREST</code>,
        <code>gl.NEAREST_MIPMAP_NEAREST</code>,
        <code>gl.LINEAR_MIPMAP_NEAREST</code>,
        <code>gl.NEAREST_MIPMAP_LINEAR</code> (valeur par défaut),
        <code>gl.LINEAR_MIPMAP_LINEAR</code>.
      </td>
    </tr>
    <tr>
      <td><code>gl.TEXTURE_WRAP_S</code></td>
      <td>Fonction d'emballage pour la coordonnée de texture <code>s</code></td>
      <td>
        <code>gl.REPEAT</code> (valeur par
        défaut),<code>gl.CLAMP_TO_EDGE</code>, <code>gl.MIRRORED_REPEAT</code>.
      </td>
    </tr>
    <tr>
      <td><code>gl.TEXTURE_WRAP_T</code></td>
      <td>Fonction d'emballage pour la coordonnée de texture <code>t</code></td>
      <td>
        <code>gl.REPEAT</code> (valeur par
        défaut),<code>gl.CLAMP_TO_EDGE</code>, <code>gl.MIRRORED_REPEAT</code>.
      </td>
    </tr>
    <tr>
      <th colspan="3">
        Disponible en outre quand l'extension
        {{domxref("EXT_texture_filter_anisotropic")}} est
        utilisée
      </th>
    </tr>
    <tr>
      <td><code>ext.TEXTURE_MAX_ANISOTROPY_EXT</code></td>
      <td>Anisotropie maximum pour une texture</td>
      <td>Une valeur {{domxref("GLfloat")}}.</td>
    </tr>
    <tr>
      <th colspan="3">
        Disponible en outre quand un contexte WebGL 2 est utilisé
      </th>
    </tr>
    <tr>
      <td><code>gl.TEXTURE_BASE_LEVEL</code></td>
      <td>Niveau de mipmap de texture</td>
      <td>Toutes valeurs int.</td>
    </tr>
    <tr>
      <td><code>gl.TEXTURE_COMPARE_FUNC</code></td>
      <td>Fonction de comparaison de texture</td>
      <td>
        <code>gl.LEQUAL</code> (valeur par défaut), <code>gl.GEQUAL</code>,
        <code>gl.LESS</code>, <code>gl.GREATER</code>, <code>gl.EQUAL</code>,
        <code>gl.NOTEQUAL</code>, <code>gl.ALWAYS</code>, <code>gl.NEVER</code>.
      </td>
    </tr>
    <tr>
      <td><code>gl.TEXTURE_COMPARE_MODE</code></td>
      <td>Mode de comparaison de texture</td>
      <td>
        <code>gl.NONE</code> (valeur défaut),
        <code>gl.COMPARE_REF_TO_TEXTURE</code>.
      </td>
    </tr>
    <tr>
      <td><code>gl.TEXTURE_MAX_LEVEL</code></td>
      <td>Niveau maximum de mipmap de texture en tableau</td>
      <td>Toutes valeurs int.</td>
    </tr>
    <tr>
      <td><code>gl.TEXTURE_MAX_LOD</code></td>
      <td><p>Valeur de niveau-de-détail maximum de texture</p></td>
      <td>Toutes valeurs float.</td>
    </tr>
    <tr>
      <td><code>gl.TEXTURE_MIN_LOD</code></td>
      <td>Valeur de niveau-de-détail minimum de texture</td>
      <td>Toutes valeurs float.</td>
    </tr>
    <tr>
      <td><code>gl.TEXTURE_WRAP_R</code></td>
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

Aucune.

## Exemples

```js
gl.texParameterf(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR_MIPMAP_NEAREST);
```

## Spécifications

| Spécification                                                                                    | Statut                               | Commentaire                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------ | ------------------------------------------------ |
| {{SpecName('WebGL', "#5.14.8", "texParameter[fi]")}}                             | {{Spec2('WebGL')}}             | Définition initiale pour WebGL.                  |
| {{SpecName('OpenGL ES 2.0', "glTexParameter.xml", "glTexParameter")}}     | {{Spec2('OpenGL ES 2.0')}} | Page man de l’API OpenGL ES 2.0 API (similaire). |
| {{SpecName('WebGL2', "#3.7.6", "texParameter[fi]")}}                             | {{Spec2('WebGL2')}}             | Définition mise à jour pour WebGL.               |
| {{SpecName('OpenGL ES 3.0', "glTexParameter.xhtml", "glTexParameter")}} | {{Spec2('OpenGL ES 3.0')}} | Page man de l’API OpenGL ES 3.0 API (similaire). |

## Compatibilité des navigateurs

{{Compat("api.WebGLRenderingContext.texParameterf")}}

## Voir aussi

- {{domxref("WebGLRenderingContext.getTexParameter()")}}
- {{domxref("EXT_texture_filter_anisotropic")}}
