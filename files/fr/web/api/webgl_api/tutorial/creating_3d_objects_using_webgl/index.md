---
title: Créer des objets 3D avec WebGL
slug: Web/API/WebGL_API/Tutorial/Creating_3D_objects_using_WebGL
---

{{DefaultAPISidebar("WebGL")}} {{PreviousNext("Web/API/WebGL_API/Tutorial/Animating_objects_with_WebGL", "Web/API/WebGL_API/Tutorial/Using_textures_in_WebGL")}}

Transformons notre carré en trois dimensions en lui ajoutant cinq faces supplémentaires pour créer un cube. Pour faire cela efficacement, nous allons passer du dessin de sommets par l'appel direct de la méthode {{domxref("WebGLRenderingContext.drawArrays()", "gl.drawArrays()")}}, à l'utilisation du tableau des sommets comme une table, et à référencer les sommets individuels dans cette table pour définir les positions des sommets de chaque face, en appelant directement {{domxref("WebGLRenderingContext.drawElements()", "gl.drawElements()")}}.

Notez que chaque face nécessite quatre sommets pour la définir, mais que chaque sommet est partagé entre trois faces. Nous pouvons donc passer beaucoup moins de données en faisant un tableau des 24 sommets, puis en référençant chaque sommet par son indice dans ce tableau, au lieu de passer des ensembles complets de coordonnées. Si vous vous demandez pourquoi nous avons besoin de 24 sommets, et non pas seulement de 8, c'est parce que chaque coin appartient à trois faces de couleurs différentes, et qu'un sommet donné doit avoir une couleur spécifique - c'est pourquoi nous allons créer 3 copies de chaque sommet dans les trois couleurs différentes, une pour chaque face.

## Définir la position des sommets du cube

Tout d'abord, construisons le tampon des sommets du cube en mettant à jour le code de `initBuffer()`. C'est sensiblement le même que pour le carré, mais en plus long, du fait qu'il y a 24 sommets (4 par côté) :

```js
const positions = [
  // Face avant
  -1.0, -1.0, 1.0, 1.0, -1.0, 1.0, 1.0, 1.0, 1.0, -1.0, 1.0, 1.0,

  // Face arrière
  -1.0, -1.0, -1.0, -1.0, 1.0, -1.0, 1.0, 1.0, -1.0, 1.0, -1.0, -1.0,

  // Face supérieure
  -1.0, 1.0, -1.0, -1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, -1.0,

  // Face inférieure
  -1.0, -1.0, -1.0, 1.0, -1.0, -1.0, 1.0, -1.0, 1.0, -1.0, -1.0, 1.0,

  // Face droite
  1.0, -1.0, -1.0, 1.0, 1.0, -1.0, 1.0, 1.0, 1.0, 1.0, -1.0, 1.0,

  // Face gauche
  -1.0, -1.0, -1.0, -1.0, -1.0, 1.0, -1.0, 1.0, 1.0, -1.0, 1.0, -1.0,
];
```

Du fait que nous avons ajouté une composante z à nos sommets, nous avons besoin de changer en 3 le `numComponents` de notre attribut `vertexPosition`.

```js
// Indiquer à WebGL comment extraire les positions du tampon des
// positions dans l'attribut vertexPosition
{
  const numComponents = 3;
  ...
  gl.vertexAttribPointer(
    programInfo.attribLocations.vertexPosition,
    numComponents,
    type,
    normalize,
    stride,
    offset);
  gl.enableVertexAttribArray(
    programInfo.attribLocations.vertexPosition);
}
```

## Définir les couleurs des sommets

Nous avons aussi besoin de construire un tableau des couleurs pour chacun des 24 sommets. Ce code commence par définir une couleur pour chaque face, puis il utilise une boucle pour assembler le tableau de toutes les couleurs pour chacun des sommets.

```js
const faceColors = [
  [1.0, 1.0, 1.0, 1.0], // Face avant : blanc
  [1.0, 0.0, 0.0, 1.0], // Face arrière : rouge
  [0.0, 1.0, 0.0, 1.0], // Face supérieure : vert
  [0.0, 0.0, 1.0, 1.0], // Face infiérieure : bleu
  [1.0, 1.0, 0.0, 1.0], // Face droite : jaune
  [1.0, 0.0, 1.0, 1.0], // Face gauche : violet
];

// Conversion du tableau des couleurs en une table pour tous les sommets

var colors = [];

for (j = 0; j < faceColors.length; j++) {
  const c = faceColors[j];

  // Répéter chaque couleur quatre fois pour les quatre sommets d'une face
  colors = colors.concat(c, c, c, c);
}

const colorBuffer = gl.createBuffer();
gl.bindBuffer(gl.ARRAY_BUFFER, colorBuffer);
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(colors), gl.STATIC_DRAW);
```

## Définir le tableau des éléments

Une fois que les tableaux des sommets sont générés, nous devons construire le tableau des éléments.

```js
  const indexBuffer = gl.createBuffer();
  gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indexBuffer);

  // Ce tableau définit chaque face comme deux triangles, en utilisant les
  // indices dans le tableau des sommets pour spécifier la position de chaque
  // triangle.

  const indices = [
    0,  1,  2,      0,  2,  3,    // avant
    4,  5,  6,      4,  6,  7,    // arrière
    8,  9,  10,     8,  10, 11,   // haut
    12, 13, 14,     12, 14, 15,   // bas
    16, 17, 18,     16, 18, 19,   // droite
    20, 21, 22,     20, 22, 23,   // gauche
  ];

  // Envoyer maintenant le tableau des éléments à GL

  gl.bufferData(gl.ELEMENT_ARRAY_BUFFER,
      new Uint16Array(indices), gl.STATIC_DRAW);

  return {
    position: positionBuffer,
    color: colorBuffer,
    indices: indexBuffer,
  };
}
```

Le tableau `indices` définit chaque face comme étant une paire de triangles, en spécifiant chaque sommet du triangle comme un indice dans les tableaux des sommets du cube. Ainsi le cube est décrit comme une collection de 12 triangles.

## Dessiner le cube

Ensuite, nous devons ajouter du code à notre fonction `drawScene()` pour dessiner le tampon des indices du cube, en ajoutant de nouveaux appels à {{domxref("WebGLRenderingContext.bindBuffer()", "gl.bindBuffer()")}} et {{domxref("WebGLRenderingContext.drawElements()", "gl.drawElements()")}} :

```js
// Indiquer à WebGL quels indices utiliser pour indexer les sommets
gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, tampons.indices);

...

{
  const vertexCount = 36;
  const type = gl.UNSIGNED_SHORT;
  const offset = 0;
  gl.drawElements(gl.TRIANGLES, vertexCount, type, offset);
}
```

Du fait que chaque face de notre cube est composée de deux triangles, il y a 6 sommets par côté, soit 36 sommets au total dans le cube, même si beaucoup d'entre eux sont des doublons.

Finalement, remplaçons notre variable `squareRotation` par `cubeRotation` et ajoutons une seconde rotation autour de l'axe des x :

```js
mat4.rotate(modelViewMatrix, modelViewMatrix, cubeRotation * 0.7, [0, 1, 0]);
```

À ce stade, nous avons un cube animé en rotation, ses six faces ayant des couleurs assez vives.

{{EmbedGHLiveSample('dom-examples/webgl-examples/tutorial/sample5/index.html', 670, 510) }}

[Voir le code complet](https://github.com/mdn/dom-examples/tree/main/webgl-examples/tutorial/sample5) | [Ouvrir cette démo dans une nouvelle page](https://mdn.github.io/dom-examples/webgl-examples/tutorial/sample5/)

{{PreviousNext("Web/API/WebGL_API/Tutorial/Animating_objects_with_WebGL", "Web/API/WebGL_API/Tutorial/Using_textures_in_WebGL")}}
