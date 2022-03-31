---
title: WebGLRenderingContext.uniformMatrix[234]fv()
slug: Web/API/WebGLRenderingContext/uniformMatrix
tags:
  - API
  - Matrice
  - Reference
  - Uniforms
  - Variables Uniform
  - WebGL
  - WebGLAPI
  - WebGLRenderingContext
  - matrices
  - uniformMatrix2fv
  - uniformMatrix3fv
  - uniformMatrix4fv
translation_of: Web/API/WebGLRenderingContext/uniformMatrix
---
{{APIRef("WebGL")}}

Les méthodes **`WebGLRenderingContext.uniformMatrix[234]fv()`** de l'[API WebGL](/fr-FR/docs/Web/API/WebGL_API) définissent des valeurs matricielles pour les variables uniform.

Les trois versions de cette méthode (`uniformMatrix2fv()`, `uniformMatrix3fv()` et `unifomMatrix4fv()`) prennent comme valeur d'entrée des vecteurs à 2, 3 et 4 composantes, respectivement.

## Syntaxe

    WebGLRenderingContext.uniformMatrix2fv(emplacement, transposer, valeur);
    WebGLRenderingContext.uniformMatrix3fv(emplacement, transposer, valeur);
    WebGLRenderingContext.uniformMatrix4fv(emplacement, transposer, valeur);

### Paramètres

- `emplacement`
  - : Un objet {{domxref("WebGLUniformLocation")}} contenant l'emplacement de l'attribut uniform à modifier. L'emplacement est obtenu en utilisant {{domxref("WebGLRenderingContext.getAttribLocation", "getAttribLocation()")}}.
- `transposer`
  - : Un {{domxref("GLboolean")}} indiquant si la matrice doit être transposée. Doit être `false`.
- `valeur`
  - : Un {{jsxref("Float32Array")}} ou une suite de valeurs `GLfloat`.

### Valeur retournée

`undefined`

## Exemples

```js
gl.uniformMatrix2fv(loc, false, [2.1, 2.2]);
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
      <td>
        {{SpecName('WebGL', "#5.14.10", "uniformMatrix")}}
      </td>
      <td>{{Spec2('WebGL')}}</td>
      <td><p>Définition initiale.</p></td>
    </tr>
    <tr>
      <td>
        {{SpecName('OpenGL ES 2.0', "glUniform.xml", "glUniform")}}
      </td>
      <td>{{Spec2('OpenGL ES 2.0')}}</td>
      <td><p>Page man de l’API OpenGL.</p></td>
    </tr>
  </tbody>
</table>

## Compatibilité des navigateurs

{{Compat("api.WebGLRenderingContext.uniformMatrix2fv")}}

## Voir aussi

- {{domxref("WebGLRenderingContext.uniform()")}}
- {{domxref("WebGL2RenderingContext.uniformMatrix()")}} – versions WebGL 2 de ces méthodes.
