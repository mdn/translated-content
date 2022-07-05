---
title: WebGLRenderingContext.bindTexture()
slug: Web/API/WebGLRenderingContext/bindTexture
tags:
  - API
  - Méthode
  - Reference
  - Textures
  - WebGL
  - WebGLRenderingContext
translation_of: Web/API/WebGLRenderingContext/bindTexture
---
{{APIRef("WebGL")}}

La méthode **`WebGLRenderingContext.bindTexture()`** de l'API WebGL lie la {{domxref("WebGLTexture")}} donnée à une cible (point de liaison).

## Syntaxe

    void gl.bindTexture(cible, texture);

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
var canevas = document.getElementById('canevas');
var gl = canevas.getContext('webgl');
var texture = gl.createTexture();

gl.bindTexture(gl.TEXTURE_2D, texture);
```

### Obtention des liaisons en cours

Pour vérifier la liaison de texture en cours, interrogez les constantes `gl.TEXTURE_BINDING_2D` ou `gl.TEXTURE_BINDING_CUBE_MAP`.

```js
gl.getParameter(gl.TEXTURE_BINDING_2D);
```

## Spécifications

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="col">Spécification</th>
      <th scope="col">Statut</th>
      <th scope="col">Commentaire</th>
    </tr>
    <tr>
      <td>{{SpecName('WebGL', "#5.14.8", "bindTexture")}}</td>
      <td>{{Spec2('WebGL')}}</td>
      <td><p>Définition initiale pour WebGL.</p></td>
    </tr>
    <tr>
      <td>
        {{SpecName('OpenGL ES 2.0', "glBindTexture.xml", "glBindTexture")}}
      </td>
      <td>{{Spec2('OpenGL ES 2.0')}}</td>
      <td><p>Page man de l’API OpenGL ES 2.0 (similaire).</p></td>
    </tr>
    <tr>
      <td>{{SpecName('WebGL2', "#3.7.1", "bindTexture")}}</td>
      <td>{{Spec2('WebGL2')}}</td>
      <td>
        Définition mise à jour pour WebGL 2.<br />Ajoute :
        <code>gl.TEXTURE_3D</code> et <code>gl.TEXTURE_2D_ARRAY</code>
      </td>
    </tr>
    <tr>
      <td>
        {{SpecName('OpenGL ES 3.0', "glBindTexture.xhtml", "glBindTexture")}}
      </td>
      <td>{{Spec2('OpenGL ES 3.0')}}</td>
      <td>Page man de l’API OpenGL ES 3.0 (similaire).</td>
    </tr>
  </tbody>
</table>

## Compatibilité des navigateurs

{{Compat("api.WebGLRenderingContext.bindTexture")}}

## Voir aussi

<!---->

- {{domxref("WebGLRenderingContext.createTexture()")}}
- {{domxref("WebGLRenderingContext.deleteTexture()")}}
- {{domxref("WebGLRenderingContext.isTexture()")}}
- {{domxref("WebGLRenderingContext.texImage2D()")}}
