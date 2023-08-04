---
title: Ajouter des couleurs avec les nuanceurs
slug: Web/API/WebGL_API/Tutorial/Using_shaders_to_apply_color_in_WebGL
---

{{DefaultAPISidebar("WebGL")}} {{PreviousNext("Web/API/WebGL_API/Tutorial/Adding_2D_content_to_a_WebGL_context", "Web/API/WebGL_API/Tutorial/Animating_objects_with_WebGL")}}

Dans la [démonstration précédente](/fr/docs/WebGL/Ajouter_du_contenu_à_WebGL), nous avons créé un carré 2D, la prochaine étape évidente consiste à lui appliquer de la couleur. Nous allons faire cela en révisant les nuanceurs.

## Application de couleur aux sommets

En WebGL, les objets sont construits en utilisant des sommets, chacun d'entre eux ayant une position et une couleur ; par défaut, les couleurs des autres sommets (et tous leurs autres attributs, incluant leur position) sont calculés en utilisant une interpolation linéaire, créant ainsi automatiquement des dégradés. Précédemment, notre nuanceur de sommet n'appliquait aucunes couleurs spécifiques aux sommets&nbsp;; entre cela et le fait que le nuanceur de fragment assignait la valeur blanche à chaque pixel, le carré entier était rendu en blanc uni.

Supposons que nous voulions faire un rendu en dégradé dans lequel chaque coin du carré est de couleur différente : rouge, bleu, vert et blanc. La première chose à faire est de définir ces couleurs pour les quatre sommets. Pour ce faire, nous devons d'abord créer un tableau des couleurs des sommets, puis le stocker dans un tampon WebGL ; nous le ferons en ajoutant le code suivant à notre fonction `initBuffers()` :

```js
function initBuffers(){
  ...
  const colors = [
    1.0,  1.0,  1.0,  1.0,    // blanc
    1.0,  0.0,  0.0,  1.0,    // rouge
    0.0,  1.0,  0.0,  1.0,    // vert
    0.0,  0.0,  1.0,  1.0,    // bleu
  ];

  const colorBuffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, colorBuffer);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(colors), gl.STATIC_DRAW);

  return {
    position: positionBuffer,
    color: colorBuffer,
  };
}
```

Ce code commence par créer un tableau JavaScript contenant des vecteurs à 4 valeurs, un pour chaque couleur de sommet. Un tampon WebGL est alors alloué pour stocker ces couleurs, et le tableau est converti en flottants et stocké dans le tampon.

Pour que ces couleurs soient effectivement utilisées, le nuanceur de sommet doit être mis à jour pour extraire la couleur appropriée du tampon des couleurs :

```js
const vsSource = `
  attribute vec4 aVertexPosition;
  attribute vec4 aVertexColor;

  uniform mat4 uModelViewMatrix;
  uniform mat4 uProjectionMatrix;

  varying lowp vec4 vColor;

  void main(void) {
    gl_Position = uProjectionMatrix * uModelViewMatrix * aVertexPosition;
    vColor = aVertexColor;
  }
`;
```

La différence clé est ici que, pour chaque sommet, nous passons sa couleur au nuanceur de fragment en utilisant un `varying`.

## Coloriage des fragments

Pour mémoire, voici à quoi ressemblait précédemment notre nuanceur de fragment :

```js
const fsSource = `
  void main() {
    gl_FragColor = vec4(1.0, 1.0, 1.0, 1.0);
  }
`;
```

Afin de choisir la couleur interpolée pour chaque pixel, nous devons le changer pour récupérer la valeur depuis le varying `vColor` :

```js
const fsSource = `
  varying lowp vec4 vColor;

  void main(void) {
    gl_FragColor = vColor;
  }
`;
```

La principale différence ici c'est que pour chaque sommet, on assigne la valeur correspondant à sa couleur dans le tableau.

## Dessiner en utilisant les couleurs

Ensuite, il est nécessaire d'ajouter le code recherchant les couleurs dans l'emplacement de l'attribut, et de configurer cet attribut pour le programme nuanceur :

```js
const programInfo = {
  program: shaderProgram,
  attribLocations: {
    vertexPosition: gl.getAttribLocation(shaderProgram, 'aVertexPosition'),
    vertexColor: gl.getAttribLocation(shaderProgram, 'aVertexColor'),
  },
  ...
```

Ensuite, `drawScene()` peut être modifié pour utiliser réellement ces couleurs lors du dessin du carré :

```js
// Indiquer à WebGL comment transférer les couleurs du tampon des couleurs
// dans l'attribut vertexColor.
{
  const numComponents = 4;
  const type = gl.FLOAT;
  const normalize = false;
  const stride = 0;
  const offset = 0;
  gl.bindBuffer(gl.ARRAY_BUFFER, buffers.color);
  gl.vertexAttribPointer(
    programInfo.attribLocations.vertexColor,
    numComponents,
    type,
    normalize,
    stride,
    offset,
  );
  gl.enableVertexAttribArray(programInfo.attribLocations.vertexColor);
}
```

{{EmbedGHLiveSample('webgl-examples/tutorial/sample3/index.html', 670, 510) }}

[Voir le code complet](https://github.com/mdn/webgl-examples/tree/gh-pages/tutorial/sample3) | [Ouvrir cette démo dans une nouvelle page](http://mdn.github.io/webgl-examples/tutorial/sample3/)

{{PreviousNext("Web/API/WebGL_API/Tutorial/Adding_2D_content_to_a_WebGL_context", "Web/API/WebGL_API/Tutorial/Animating_objects_with_WebGL")}}
