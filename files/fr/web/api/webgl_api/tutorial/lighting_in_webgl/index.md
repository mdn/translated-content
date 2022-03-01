---
title: Éclairage en WebGL
slug: Web/API/WebGL_API/Tutorial/Lighting_in_WebGL
translation_of: Web/API/WebGL_API/Tutorial/Lighting_in_WebGL
original_slug: Web/API/WebGL_API/Tutorial/Eclairage_en_WebGL
---
{{WebGLSidebar("Tutorial")}} {{PreviousNext("Web/API/WebGL_API/Tutorial/Utiliser_les_textures_avec_WebGL", "Web/API/WebGL_API/Tutorial/Animating_textures_in_WebGL")}}

La première chose à comprendre à propos de WebGL est que contrairement au standard OpenGL, WebGL n'a pas de support pour l'éclairage. Vous avez à le faire par vous même. Heureusement ce n'est pas si dur à faire, et cet article va vous expliquer quelques bases.

## Simuler l'éclairage et les ombres en 3D

Rentrer dans les détails de la théorie derrière la simulation de l'éclairage 3D est assez loin du sujet de cet article mais il vaut mieux en connaitre un minimum le sujet. Au lieu de rentrer dans le vif du sujet ici, jetez un coup d'oeil sur [l'ombrage de Phong](https://fr.wikipedia.org/wiki/Ombrage_de_Phong) sur Wikipédia, qui fourni une bonne vue d'ensemble comme modèle d'éclairage.

Il y a trois types basiques d'éclairage :

1.  **Ambient light (Lumière Ambiante)** est la lumière qui imprègne, qui se répand sur la scène. Elle n'a pas de direction et s'applique sur toutes les faces de la scène de la même façon.
2.  **Directional light (Lumière Directionnelle)** est une lumière émise depuis une direction spécifique. Par exemple le soleil, est une lumière directionnelle.
3.  **Point light** **(Point de lumière)** est une lumière émise depuis un point, éméttant une lumière dans toutes les directions, contrairement à la Lumière Directionnelle. C'est comme ceci que les lumières fonctionnent principalement dans notre monde, comme par exemple une ampoule.

Pour notre tutorial, nous allons simplifier le model d'éclairage, en considérant seulement une unique lumière directionnelle et une lumière ambiante. Nous allons réutiliser notre [précédent exemple avec le cube en rotation](/en-US/docs/Web/API/WebGL_API/Tutorial/Using_textures_in_WebGL).

Une fois que nous avons appréhendé le concept de source et de réfléction de la lumière, il y a deux choses que nous avons besoin d'implémenter pour nos lumières directionnelles.

1.  Nous avons besoin d'associer la **surface normale** avec chaque sommet. C'est un vecteur qui est perpendiculaire à la face associé à ce sommet.
2.  Nous avons besoin de connaître la direction dans laquelle la lumière arrive. Ceci est défini par la direction du vecteur.

Puis nous mettons à jour le vertex shader pour ajuster la couleur de chaque sommet. en prenant en compte la lumière ambiante ainsi que l'effet de la lumière directionnelle donné par l'angle qui rencontre la face du cube. Nous allons voir comment faire avec les shaders.

## Créer les normales pour les sommets

La première chose dont nous avons besoin, est de générer le tableau des **normales** pour tous les sommets que constituent notre cube. Comme un cube est un simple objet, c'est plutôt simple à faire, évidemment pour des objets plus complexe, calculer les normales sera plus compliqué.

```js
cubeVerticesNormalBuffer = gl.createBuffer();
gl.bindBuffer(gl.ARRAY_BUFFER, cubeVerticesNormalBuffer);

var vertexNormals = [
  // Front
   0.0,  0.0,  1.0,
   0.0,  0.0,  1.0,
   0.0,  0.0,  1.0,
   0.0,  0.0,  1.0,

  // Back
   0.0,  0.0, -1.0,
   0.0,  0.0, -1.0,
   0.0,  0.0, -1.0,
   0.0,  0.0, -1.0,

  // Top
   0.0,  1.0,  0.0,
   0.0,  1.0,  0.0,
   0.0,  1.0,  0.0,
   0.0,  1.0,  0.0,

  // Bottom
   0.0, -1.0,  0.0,
   0.0, -1.0,  0.0,
   0.0, -1.0,  0.0,
   0.0, -1.0,  0.0,

  // Right
   1.0,  0.0,  0.0,
   1.0,  0.0,  0.0,
   1.0,  0.0,  0.0,
   1.0,  0.0,  0.0,

  // Left
  -1.0,  0.0,  0.0,
  -1.0,  0.0,  0.0,
  -1.0,  0.0,  0.0,
  -1.0,  0.0,  0.0
];

gl.bufferData(gl.ARRAY_BUFFER, new WebGLFloatArray(vertexNormals), gl.STATIC_DRAW);
```

Ceci doit vous être plutôt familier maintenant. Nous créons un nouveau buffer, on le lie avec le tableau sur lequel nous allons travailler, puis nous allons envoyer l'ensemble de notre tableau au buffer en appelant la méthode `bufferData()`.

Ensuite nous allons ajouter le code à la fonction `drawScene()` pour attacher le tableau de normales à l'attribut du shader, comme ça le code du shader y aura accès&nbsp;:

```js
gl.bindBuffer(gl.ARRAY_BUFFER, cubeVerticesNormalBuffer);
gl.vertexAttribPointer(vertexNormalAttribute, 3, gl.FLOAT, false, 0, 0);
```

Enfin, nous avons besoin de mettre à jour le code qui construit les matrices uniformes pour générer et livrer au shader une matrice normale, qui sera utilisée pour transformer les normales en fonction de l'orientation actuelle du cube par rapport à la source de lumière.

```js
var normalMatrix = mvMatrix.inverse();
normalMatrix = normalMatrix.transpose();
var nUniform = gl.getUniformLocation(shaderProgram, 'uNormalMatrix');
gl.uniformMatrix4fv(nUniform, false, new WebGLFloatArray(normalMatrix.flatten()));
```

## Mettre à jour les shaders

Maintenant que les shaders ont toutes les données dont ils ont besoin, nous mettons à jour leur code.

### Le vertex shader

La première chose à faire est de mettre à jour le vertex shader en générant une valeur pour l'ombre de chaque sommet, en se basant sur l'éclairage ambiant ainsi que la direction de la lumière. Jettons un oeil sur le code suivant:

```html
<script id="shader-vs" type="x-shader/x-vertex">
  attribute highp vec3 aVertexNormal;
  attribute highp vec3 aVertexPosition;
  attribute highp vec2 aTextureCoord;

  uniform highp mat4 uNormalMatrix;
  uniform highp mat4 uMVMatrix;
  uniform highp mat4 uPMatrix;

  varying highp vec2 vTextureCoord;
  varying highp vec3 vLighting;

  void main(void) {
    gl_Position = uPMatrix * uMVMatrix * vec4(aVertexPosition, 1.0);
    vTextureCoord = aTextureCoord;

    // Apply lighting effect

    highp vec3 ambientLight = vec3(0.6, 0.6, 0.6);
    highp vec3 directionalLightColor = vec3(0.5, 0.5, 0.75);
    highp vec3 directionalVector = vec3(0.85, 0.8, 0.75);

    highp vec4 transformedNormal = uNormalMatrix * vec4(aVertexNormal, 1.0);

    highp float directional = max(dot(transformedNormal.xyz, directionalVector), 0.0);
    vLighting = ambientLight + (directionalLightColor * directional);
  }
</script>
```

Une fois que la position du sommet est calculée, et que nous obtenons les coordonnées des texels (tas de pixel pour une texture) correspondant au sommet, nous pouvons travailler sur le calcul de l'ombre de chaque sommet.

La première chose que nous allons faire est de transformer la base normale sur la position actuelle et l'orientation du cube, en calculant les normales des sommets par la matrice normale. Nous pouvons alors calculer la quantité d'éclairage qui doit être appliquée au sommet en calculant le produit de la normale transformée et du vecteur directionnel (la direction d'où la lumière vient). Si le résultat est inférieur à zéro, alors on le met à 0. Car une lumière négative n'a pas de sens dans notre cas.

Une fois la quantité de lumière directionnelle calculée, nous pouvons générer la valeur d'éclairage en prenant l'éclairage ambiant et en y ajoutant le produit de la couleur de la lumière directionnelle, et aussi la quantité de la lumière directionnelle à fournir. Comme résultat, nous avons maintenant une valeur RGB qui sera utilisé par le fragment shader pour ajuster la couleur de chaque pixel.

### Le fragment shader

Le fragment shader a maintenant besoin d'être mis à jour en prenant en compte la quantité de lumière calculée précédemment par le vertex shader:

```html
<script id="shader-fs" type="x-shader/x-fragment">
  varying highp vec2 vTextureCoord;
  varying highp vec3 vLighting;

  uniform sampler2D uSampler;

  void main(void) {
    mediump vec4 texelColor = texture2D(uSampler, vec2(vTextureCoord.s, vTextureCoord.t));

    gl_FragColor = vec4(texelColor.rgb * vLighting, texelColor.a);
  }
</script>
```

Ici nous récupérons la couleur de chaque texel (tas de pixel pour une texture) , comme nous avons fait pour l'exemple précédent, mais avant d'ajuster la couleur du fragment, nous multiplions la couleur des pixels par la quantité de lumière, pour appliquer l'effet d'éclairage.

Et c'est tout !



{{EmbedGHLiveSample('webgl-examples/tutorial/sample7/index.html', 670, 510) }}

[Voir le code complet](https://github.com/mdn/webgl-examples/tree/gh-pages/tutorial/sample7) | [Ouvrir cette démo dans une nouvelle page](http://mdn.github.io/webgl-examples/tutorial/sample7/)

## Exercices

Évidemment, ceci est un simple exemple, une implémentation basique de calcul de lumière par sommet. Pour aller plus loin, nous voulons implémenter un calcul de lumière par pixel, mais ceci vous mènera dans la bonne direction.

Vous pouvez aussi implémenter avec la direction de source de lumière, la couleur de la source, la distance, etc..

{{PreviousNext("Web/API/WebGL_API/Tutorial/Using_textures_in_WebGL", "Web/API/WebGL_API/Tutorial/Animating_textures_in_WebGL")}}
