---
title: WebGLRenderingContext.createTexture()
slug: Web/API/WebGLRenderingContext/createTexture
tags:
  - API
  - Méthode
  - Reference
  - Textures
  - WebGL
  - WebGLRenderingContext
translation_of: Web/API/WebGLRenderingContext/createTexture
---
{{APIRef("WebGL")}}

La méthode **`WebGLRenderingContext.createTexture()`** de l'API WebGL crée et initialise un objet {{domxref("WebGLTexture")}}.

## Syntaxe

    WebGLTexture gl.createTexture();

### Paramètres

Aucun.

### Valeur retournée

Un objet {{domxref("WebGLTexture")}} auquel des images peuvent être liées.

## Exemples

Voir aussi le [tutoriel WebGL](/fr-FR/docs/Web/API/WebGL_API/Tutorial) sur l'[Utilisation de textures en WebGL](/fr-FR/docs/Web/API/WebGL_API/Tutorial/Using_textures_in_WebGL).

### Création d'une texture

```js
var canevas = document.getElementById('canevas');
var gl = canevas.getContext('webgl');
var texture = gl.createTexture();
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
      <td>{{SpecName('WebGL', "#5.14.8", "createTexture")}}</td>
      <td>{{Spec2('WebGL')}}</td>
      <td><p>Définition initiale.</p></td>
    </tr>
    <tr>
      <td>
        {{SpecName('OpenGL ES 2.0', "glGenTextures.xml", "glGenTextures")}}
      </td>
      <td>{{Spec2('OpenGL ES 2.0')}}</td>
      <td>Page man de l’API OpenGL (similaire).</td>
    </tr>
  </tbody>
</table>

## Compatibilité des navigateurs

{{Compat("api.WebGLRenderingContext.createTexture")}}

## Voir aussi

- {{domxref("WebGLRenderingContext.bindTexture()")}}
- {{domxref("WebGLRenderingContext.deleteTexture()")}}
- {{domxref("WebGLRenderingContext.isTexture()")}}
- {{domxref("WebGLRenderingContext.texImage2D()")}}
