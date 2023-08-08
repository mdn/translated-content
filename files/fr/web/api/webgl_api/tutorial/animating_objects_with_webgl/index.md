---
title: Animer des objets avec WebGL
slug: Web/API/WebGL_API/Tutorial/Animating_objects_with_WebGL
---

{{DefaultAPISidebar("WebGL")}} {{PreviousNext("Web/API/WebGL_API/Tutorial/Using_shaders_to_apply_color_in_WebGL", "Web/API/WebGL_API/Tutorial/Creating_3D_objects_using_WebGL") }}

Dans cet exemple, nous allons faire tourner notre carré 2D.

## Faire tourner le carré

Commençons par faire tourner le carré. La première chose dont nous avons besoin est une variable pour mémoriser la rotation courante du carré :

```js
var squareRotation = 0.0;
```

Maintenant, nous devons modifier la fonction `drawScene()` pour appliquer la rotation courante du carré quand on le dessine. Après déplacement à la position de dessin initiale du carré, nous appliquons la rotation comme suit&nbsp;:

```js
mat4.rotate(
  modelViewMatrix, // matrice de destination
  modelViewMatrix, // matrice de rotation
  squareRotation, // rotation en radians
  [0, 0, 1],
); // axe autour duquel tourner
```

Ceci fait tourner la modelViewMatrix de la valeur courante de `squareRotation`, autour de l'axe Z.

Pour réaliser effectivement l'animation, nous avons besoin d'ajouter du code qui change la valeur de `squareRotation` au fil du temps. Nous pouvons faire cela en créant une nouvelle variable pour mémoriser l'instant auquel nous avons réalisé l'animation pour la dernière fois (appelons le `then`), puis en ajoutant le code suivant à la fin de la fonction principale :

```js
var then = 0;

// Dessiner la scène répétitivement
function render(now) {
  now *= 0.001; // conversion en secondes
  const deltaTime = now - then;
  then = now;

  drawScene(gl, programInfo, buffers, deltaTime);

  requestAnimationFrame(render);
}
requestAnimationFrame(render);
```

Ce code utilise `requestAnimationFrame` pour demander au navigateur d'appeler la fonction "`render`" à chaque image. `requestAnimationFrame` nous transmet le temps en millisecondes depuis le chargement de la page. Nous le convertissons en secondes, puis nous lui soustrayons le dernier instant pour calculer `deltaTime`, qui est le nombre de secondes depuis le rendu de la dernière image. À la fin de drawscene, nous ajoutons le code pour mettre à jour `squareRotation`.

```js
squareRotation += deltaTime;
```

Ce code utilise le laps de temps qui s'est écoulé depuis la dernière fois que nous avons mis à jour la valeur `squareRotation` pour déterminer de combien faire tourner le carré.

{{EmbedGHLiveSample('webgl-examples/tutorial/sample4/index.html', 670, 510) }}

[Voir le code complet](https://github.com/mdn/webgl-examples/tree/gh-pages/tutorial/sample4) | [Ouvrir cette démo dans une nouvelle page](http://mdn.github.io/webgl-examples/tutorial/sample4/)

{{PreviousNext("Web/API/WebGL_API/Tutorial/Using_shaders_to_apply_color_in_WebGL", "Web/API/WebGL_API/Tutorial/Creating_3D_objects_using_WebGL") }}
