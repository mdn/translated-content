---
title: WebGLRenderingContext.isBuffer()
slug: Web/API/WebGLRenderingContext/isBuffer
tags:
  - API
  - Méthode
  - WebGL
  - WebGLRenderingContext
translation_of: Web/API/WebGLRenderingContext/isBuffer
---
{{APIRef("WebGL")}}

La méthode **`WebGLRenderingContext.isBuffer()`** de l'[API WebGL](/fr-FR/docs/Web/API/WebGL_API) renvoie `true` si le {{domxref ("WebGLBuffer")}} passé est valide et `false` dans le cas contraire.

## Syntaxe

    GLboolean gl.isBuffer(tampon);

### Paramètres

- tampon
  - : Un {{domxref("WebGLBuffer")}} à vérifier.

### Valeur retournée

Un {{domxref("GLboolean")}} indiquant si le tampon est ou non valide.

## Exemples

### Création d'un tampon

```js
var canevas = document.getElementById('canevas');
var gl = canevas.getContext('webgl');
var tampon = gl.createBuffer();

gl.isBuffer(tampon);
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
      <td>{{SpecName('WebGL', "#5.14.5", "isBuffer")}}</td>
      <td>{{Spec2('WebGL')}}</td>
      <td>Définition initiale.</td>
    </tr>
    <tr>
      <td>
        {{SpecName('OpenGL ES 2.0', "glIsBuffer.xml", "glIsBuffer")}}
      </td>
      <td>{{Spec2('OpenGL ES 2.0')}}</td>
      <td><p>Page man de l’API OpenGL.</p></td>
    </tr>
  </tbody>
</table>

## Compatibilité des navigateurs

{{Compat("api.WebGLRenderingContext.isBuffer")}}

## Voir aussi

- {{domxref("WebGLRenderingContext.bindBuffer()")}}
- {{domxref("WebGLRenderingContext.createBuffer()")}}
- {{domxref("WebGLRenderingContext.deleteBuffer()")}}
- Autres tampons : {{domxref("WebGLFramebuffer")}}, {{domxref("WebGLRenderbuffer")}}
