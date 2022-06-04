---
title: WebGLRenderingContext.createBuffer()
slug: Web/API/WebGLRenderingContext/createBuffer
tags:
  - API
  - Méthode
  - Reference
  - WebGL
  - WebGLRenderingContext
translation_of: Web/API/WebGLRenderingContext/createBuffer
---
{{APIRef("WebGL")}}

La méthode **`WebGLRenderingContext.createBuffer()`** de l'[API WebGL](/fr/docs/Web/API/WebGL_API) crée et initialise un [`WebGLBuffer`](/fr/docs/Web/API/WebGLBuffer) stockant des données telles que des sommets ou des couleurs.

## Syntaxe

    WebGLBuffer gl.createBuffer();

### Paramètres

Aucun.

### Valeur retournée

Un {{domxref("WebGLBuffer")}} stockant des données telles que des sommets ou des couleurs.

## Exemples

### Création d'un tampon

```js
var canevas = document.getElementById('canevas');
var gl = canevas.getContext('webgl');
var tampon = gl.createBuffer();
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
      <td>{{SpecName('WebGL', "#5.14.5", "createBuffer")}}</td>
      <td>{{Spec2('WebGL')}}</td>
      <td><p>Définition initiale.</p></td>
    </tr>
    <tr>
      <td>
        {{SpecName('OpenGL ES 2.0', "glGenBuffers.xml", "glGenBuffers")}}
      </td>
      <td>{{Spec2('OpenGL ES 2.0')}}</td>
      <td><p>Page man de l’API OpenGL (similaire).</p></td>
    </tr>
  </tbody>
</table>

## Compatibilité des navigateurs

{{Compat("api.WebGLRenderingContext.createBuffer")}}

## Voir aussi

- {{domxref("WebGLRenderingContext.bindBuffer()")}}
- {{domxref("WebGLRenderingContext.deleteBuffer()")}}
- {{domxref("WebGLRenderingContext.isBuffer()")}}
- Autres tampons : {{domxref("WebGLFramebuffer")}}, {{domxref("WebGLRenderbuffer")}}
