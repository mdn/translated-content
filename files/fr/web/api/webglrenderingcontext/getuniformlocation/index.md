---
title: WebGLRenderingContext.getUniformLocation()
slug: Web/API/WebGLRenderingContext/getUniformLocation
tags:
  - API
  - Méthode
  - Reference
  - Uniform Variables
  - Uniforms
  - Variables
  - Variables en WebGL
  - WebGL
  - WebGLRenderingContext
  - getUniformLocation
translation_of: Web/API/WebGLRenderingContext/getUniformLocation
---
{{APIRef("WebGL")}}Faisant partie de l'[API WebGL](/fr-FR/docs/Web/API/WebGL_API), la méthode {{domxref("WebGLRenderingContext")}} **`getUniformLocation()`** retourne l'emplacement d'une variable **uniform** particulière appartenant au {{domxref ("WebGLProgram")}} indiqué. La variable uniform est retournée sous la forme d'un objet {{domxref("WebGLUniformLocation")}}, qui est un identificateur opaque utilisé pour indiquer où se trouve la variable uniform dans la mémoire de la GPU. Une fois que vous avez l'emplacement de l'uniform, vous pouvez accéder à l'uniform lui-même en utilisant l'une des autres méthodes d'accès uniform, en passant l'emplacement de l'uniform comme l'une des entrées :

- {{domxref ("WebGLRenderingContext.getUniform", "getUniform()")}}
  - : Retourne la valeur de l'uniform à l'emplacement indiqué.
- {{domxref ("WebGLRenderingContext.uniform", "uniform[1234] [fi] [v]()")}}
  - : Affecte à la valeur de l'uniform la valeur spécifiée, qui peut être un nombre flottant ou entier unique, ou un vecteur de 2 à 4 composantes spécifié soit comme une liste de valeurs, soit comme un {{jsxref ("Float32Array")}} ou un {{ jsxref ("Int32Array")}}.
- {{domxref ("WebGLRenderingContext.uniformMatrix", "uniformMatrix[234][fv]()")}}
  - : Affecte à la valeur de l'uniforme la matrice spécifiée, éventuellement avec transposition. La valeur est représentée comme une suite de valeurs GLfloat ou comme un Float32Array.

L'uniform lui-même est déclaré dans le programme shader en utilisant GLSL.

## Syntaxe

    WebGLUniformLocation = WebGLRenderingContext.getUniformLocation(programme, nom);

### Paramètres

- `programme`
  - : Le {{domxref ("WebGLProgram")}} dans lequel localiser la variable uniform indiquée.
- `nom`
  - : Une {{domxref ("DOMString")}} indiquant le nom de la variable uniform dont l'emplacement doit être retourné. Le nom ne peut contenir aucun espace, et vous ne pouvez pas utiliser cette fonction pour obtenir l'emplacement d'aucun uniform commençant par la chaîne réservée `"gl_"`, du fait que ceux-ci sont internes à la couche WebGL.

### Valeur retournée

Une valeur {{domxref ("WebGLUniformLocation")}} indiquant l'emplacement de la variable nommée, si elle existe. Si la variable indiquée n'existe pas, {{jsxref("null")}} est retourné à la place.

`WebGLUniformLocation` est une valeur opaque utilisée pour identifier de manière unique l'emplacement dans la mémoire de la GPU auquel se trouve la variable uniform. Avec cette valeur en main, vous pouvez appeler d'autres méthodes WebGL pour accéder à la valeur de la variable uniform.

> **Note :** Le type `WebGLUniformLocation` est compatible avec le type `GLint` pour indiquer l'indice ou l'emplacement d'un attribut uniform.

### Erreurs

Les erreurs suivantes peuvent se produire ; pour vérifier les erreurs après le retour de getUniformLocation(), appelez {{domxref ("WebGLRenderingContext.getError", "getError()")}}.

- GL_INVALID_VALUE
  - : Le paramètre `programme` n'est pas une valeur ou un objet généré par WebGL.
- GL_INVALID_OPERATION
  - : Le paramètre `programme` ne correspond pas à un programme GLSL généré par WebGL, ou le programme indiqué n'a pas été lié avec succès.

## Exemple

Dans cet exemple, extrait de la méthode `animateScene()` dans l'article [Un exemple d'animation 2D WebGL de base](/fr-FR/docs/Web/API/WebGL_API/Basic_2D_animation_example#Drawing_and_animating_the_scene), retrouve les emplacements de trois uniforms du programme d'ombrage, puis définit la valeur de chacun des trois uniforms.

```js
gl.useProgram(programmeShader);

uScalingFactor =
    gl.getUniformLocation(programmeShader, "uScalingFactor");
uGlobalColor =
    gl.getUniformLocation(programmeShader, "uGlobalColor");
uRotationVector =
    gl.getUniformLocation(programmeShader, "uRotationVector")

gl.uniform2fv(uScalingFactor, currentScale);
gl.uniform2fv(uRotationVector, currentRotation);
gl.uniform4fv(uGlobalColor, [0.1, 0.7, 0.2, 1.0]);
```

> **Note :** Cet extrait de code provient de [la fonction animateScene()](/fr-FR/docs/Web/API/WebGL_API/Basic_2D_animation_example#Drawing_and_animating_the_scene) dans "Un exemple d'animation WebGL 2D de base". Voir cet article pour l'exemple complet et pour voir l'animation résultante en action.

Après avoir défini le programme d'ombrage en cours comme `programmeShader`, ce code récupère les trois uniforms `"uScalingFactor"`, `"uGlobalColor"` et `"uRotationVector"`, en appelant `getUniformLocation()` une fois pour chaque uniform.

Ensuite, les valeurs des trois uniforms sont définies :

- L'uniform `uScalingFactor` - un sommet à 2 composantes - reçoit les facteurs d'échelle horizontale et verticale à partir de la variable `currentScale`.
- L'uniform `uRotationVector` reçoit le contenu de la variable `currentRotation`. C'est également un sommet à deux composantes.
- Enfin, l'uniform `uGlobalColor` reçoit la couleur `[0.1, 0.7, 0.2, 1.0]`, les composants de ce vecteur à quatre composants représentant respectivement les valeurs rouge, vert, bleu et alpha.

Cela fait, la prochaine fois que les fonctions d'ombrage seront appelées, leurs propres variables nommées `uScalingFactor`, `uGlobalColor` et `uRotationVector` auront toutes les valeurs fournies par le code JavaScript.

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
        {{SpecName('WebGL', "#5.14.10", "getUniformLocation")}}
      </td>
      <td>{{Spec2('WebGL')}}</td>
      <td><p>Définition initiale.</p></td>
    </tr>
    <tr>
      <td>
        {{SpecName('OpenGL ES 2.0', "glGetUniformLocation.xml", "glGetUniformLocation")}}
      </td>
      <td>{{Spec2('OpenGL ES 2.0')}}</td>
      <td>Page man de l’API OpenGL.</td>
    </tr>
  </tbody>
</table>

## Compatibilité des navigateurs

{{Compat("api.WebGLRenderingContext.getUniformLocation")}}

## Voir aussi

- {{domxref("WebGLRenderingContext.getAttribLocation()")}}
- {{domxref("WebGLUniformLocation")}}
