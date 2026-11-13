---
title: Utiliser des textures en WebGL
slug: Web/API/WebGL_API/Tutorial/Using_textures_in_WebGL
l10n:
  sourceCommit: be462ccb608b9c2d9ef69b143961da8da77aa60d
---

{{DefaultAPISidebar("WebGL")}}{{PreviousNext("Web/API/WebGL_API/Tutorial/Creating_3D_objects_using_WebGL", "Web/API/WebGL_API/Tutorial/Lighting_in_WebGL")}}

Maintenant que notre programme peut faire tourner un cube 3D, appliquons-lui une texture, au lieu d'avoir des couleurs unies pour ses faces.

## Chargement des textures

La première chose à faire est d'ajouter du code pour charger les textures. Dans notre cas, nous utilisons une seule texture, appliquée aux six faces de notre cube en rotation, mais cette technique peut s'appliquer à n'importe quel nombre de textures.

> [!NOTE]
> Il est important de noter que le chargement des textures suit les [règles inter-domaines](/fr/docs/Web/HTTP/Guides/CORS)&nbsp;; c'est-à-dire que vous ne pouvez charger des textures que depuis des sites pour lesquels votre contenu a l'approbation CORS. Voir [Textures inter-domaines ci-dessous](#cross-domain_textures) pour plus de détails.

> [!NOTE]
> Ajoutez ces deux fonctions à votre script «&nbsp;webgl-demo.js&nbsp;»&nbsp;:

```js
//
// Initialiser une texture et charger une image.
// Quand le chargement d'une image est terminé, la copier dans la
// texture.
//
function loadTexture(gl, url) {
  const texture = gl.createTexture();
  gl.bindTexture(gl.TEXTURE_2D, texture);

  // Du fait que les images doivent être téléchargées depuis l'internet,
  // il peut s'écouler un certain temps avant qu'elles ne soient prêtes.
  // Jusque là, mettre un seul pixel dans la texture, de sorte que nous
  // puissions l'utiliser immédiatement. Quand le téléchargement de la
  // page est terminé, nous mettons à jour la texture avec le contenu de
  // l'image.
  const level = 0;
  const internalFormat = gl.RGBA;
  const width = 1;
  const height = 1;
  const border = 0;
  const srcFormat = gl.RGBA;
  const srcType = gl.UNSIGNED_BYTE;
  const pixel = new Uint8Array([0, 0, 255, 255]); // bleu opaque
  gl.texImage2D(
    gl.TEXTURE_2D,
    level,
    internalFormat,
    width,
    height,
    border,
    srcFormat,
    srcType,
    pixel,
  );

  const image = new Image();
  image.onload = () => {
    gl.bindTexture(gl.TEXTURE_2D, texture);
    gl.texImage2D(
      gl.TEXTURE_2D,
      level,
      internalFormat,
      srcFormat,
      srcType,
      image,
    );

    // WebGL1 a des spécifications différentes pour les images puissances
    // de 2 par rapport aux images non puissances de 2 ; aussi vérifier
    // si l'image est une puissance de 2 sur chacune de ses dimensions.
    if (isPowerOf2(image.width) && isPowerOf2(image.height)) {
      // Oui, c'est une puissance de 2. Générer les mips.
      gl.generateMipmap(gl.TEXTURE_2D);
    } else {
      // Non, ce n'est pas une puissance de 2. Désactiver les mips et
      // définir l'habillage comme « accrocher au bord »
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
    }
  };
  image.src = url;

  return texture;
}

function isPowerOf2(value) {
  return (value & (value - 1)) == 0;
}
```

La routine `loadTexture()` commence par créer un objet de texture WebGL `texture` en appelant la fonction WebGL {{DOMxRef("WebGLRenderingContext.createTexture()", "createTexture()")}}. Elle télécharge ensuite un seul pixel bleu en utilisant {{DOMxRef("WebGLRenderingContext.texImage2D()", "texImage2D()")}}. Cela rend la texture immédiatement utilisable comme une couleur bleue unie, même s'il peut falloir quelques instants pour que notre image soit téléchargée.

Pour charger la texture à partir du fichier image, elle crée ensuite un objet `Image` et assigne le `src` à l'URL de notre image que nous souhaitons utiliser comme texture. La fonction que nous assignons à `image.onload` est appelée une fois que l'image a fini de se télécharger. À ce moment-là, nous appelons à nouveau {{DOMxRef("WebGLRenderingContext.texImage2D()", "texImage2D()")}}, cette fois en utilisant l'image comme source pour la texture. Après cela, nous configurons le filtrage et l'habillage de la texture en fonction de si l'image que nous avons téléchargée était une puissance de 2 dans les deux dimensions ou non.

WebGL1 ne peut utiliser que des textures non puissances de 2 avec un filtrage défini sur `NEAREST` ou `LINEAR` et ne peut pas générer de mipmap pour elles. Leur mode d'habillage doit également être défini sur `CLAMP_TO_EDGE`. En revanche, si la texture est une puissance de 2 dans les deux dimensions, WebGL peut effectuer un filtrage de meilleure qualité, utiliser le mipmap et définir le mode d'habillage sur `REPEAT` ou `MIRRORED_REPEAT`.

Un exemple de texture répétée est le pavage d'une image par quelques briques pour couvrir un mur de briques.

Le mipmapping et la répétition UV peuvent être désactivés avec {{DOMxRef ("WebGLRenderingContext.texParameter()", "texParameteri()")}}. Cela permett des textures non-puissances-de-deux (NPOT) au prix du mipmapping, de l'habillage UV, du pavage UV, et de votre contrôle sur la manière dont le périphérique gère votre texture.

```js
// gl.NEAREST est aussi permis, au lieu de gl.LINEAR, du fait qu'aucun ne fait de mipmap.
gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
// Empêcher l'habillage selon la coordonnée s (répétition).
gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
// Empêcher l'habillage selon la coordonnée t (répétition).
gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
```

A nouveau, avec ces paramètres, les appareils WebGL compatibles acceptont automatiquement toute résolution pour cette texture (jusqu'à leurs dimensions maximums). A défaut de la configuration ci-dessus, WebGL requiert que tous les échantillons de textures NPOT échouent, en retournant du noir transparent&nbsp;: `rgba (0,0,0,0)`.

Pour charger l'image, ajoutons un appel à notre fonction `loadTexture()` dans notre fonction `main()`. Cela peut être ajouté après l'appel `initBuffers(gl)`.

Notez également&nbsp;: les navigateurs copient les pixels de l'image chargée dans l'ordre de haut en bas — en partant du coin supérieur gauche&nbsp;; or, WebGL souhaite que les pixels soient dans l'ordre de bas en haut — en partant du coin inférieur gauche. (Pour plus de détails, voir [Pourquoi ma texture WebGL est-elle à l'envers&nbsp;? <sup>(angl.)</sup>](https://jameshfisher.com/2020/10/22/why-is-my-webgl-texture-upside-down/).)

Ainsi, afin d'éviter que la texture résultante ait une orientation incorrecte lors du rendu, nous devons également appeler [`pixelStorei()`](/fr/docs/Web/API/WebGLRenderingContext/pixelStorei) avec le paramètre `gl.UNPACK_FLIP_Y_WEBGL` défini sur `true` — pour que les pixels soient inversés dans l'ordre de bas en haut que WebGL attend.

> [!NOTE]
> Ajoutez le code suivant à votre fonction `main()`, juste après l'appel à `initBuffers()`&nbsp;:

```js
// Charger la texture
const texture = loadTexture(gl, "cubetexture.png");
// Inverser les pixels de l'image dans l'ordre de bas en haut que WebGL attend.
gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);
```

> [!NOTE]
> Enfin, téléchargez le fichier [cubetexture.png](https://raw.githubusercontent.com/mdn/dom-examples/main/webgl-examples/tutorial/sample6/cubetexture.png) dans le même répertoire local que vos fichiers JavaScript.

## Application de la texture sur les faces

À ce stade, la texture est chargée et prête à être utilisée. Mais avant de pouvoir l'utiliser, nous devons définir l'application des coordonnées de texture aux sommets des faces de notre cube. Cela remplace tout le code précédemment existant pour la configuration des couleurs pour chacune des faces du cube dans `initBuffers()`.

> [!NOTE]
> Ajoutez cette fonction à votre module «&nbsp;init-buffer.js&nbsp;»&nbsp;:

```js
function initTextureBuffer(gl) {
  const textureCoordBuffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, textureCoordBuffer);

  const textureCoordinates = [
    // Avant
    0.0, 0.0, 1.0, 0.0, 1.0, 1.0, 0.0, 1.0,
    // Arrière
    0.0, 0.0, 1.0, 0.0, 1.0, 1.0, 0.0, 1.0,
    // Haut
    0.0, 0.0, 1.0, 0.0, 1.0, 1.0, 0.0, 1.0,
    // Bas
    0.0, 0.0, 1.0, 0.0, 1.0, 1.0, 0.0, 1.0,
    // Droite
    0.0, 0.0, 1.0, 0.0, 1.0, 1.0, 0.0, 1.0,
    // Gauche
    0.0, 0.0, 1.0, 0.0, 1.0, 1.0, 0.0, 1.0,
  ];

  gl.bufferData(
    gl.ARRAY_BUFFER,
    new Float32Array(textureCoordinates),
    gl.STATIC_DRAW,
  );

  return textureCoordBuffer;
}
```

Tout d'abord, ce code crée un tampon WebGL dans lequel nous allons stocker les coordonnées de texture de chaque face, puis nous associons ce tampon au tableau dans lequel nous allons écrire.

Le tableau `textureCoordinates` définit les coordonnées de texture correspondant à chaque sommet de chaque face. Notez que les coordonnées de texture vont de 0,0 à 1,0&nbsp;; les dimensions des textures sont normalisées sur une plage de 0,0 à 1,0, quelle que soit leur taille réelle, à des fins de mappage de texture.

Une fois que nous avons mis en place le tableau d'application de la texture, nous l'envoyons dans le tampon, de sorte que WebGL ait ces données prêtes pour son utilisation.

Ensuite, nous retournons le nouveau tampon.

Ensuite, nous devons mettre à jour `initBuffers()` pour créer et retourner le tampon de coordonnées de texture au lieu du tampon de couleurs.

> [!NOTE]
> Dans la fonction `initBuffers()` de votre module «&nbsp;init-buffers.js&nbsp;», remplacez l'appel à `initColorBuffer()` par la ligne suivante&nbsp;:

```js
const textureCoordBuffer = initTextureBuffer(gl);
```

> [!NOTE]
> Dans la fonction `initBuffers()` de votre module «&nbsp;init-buffers.js&nbsp;», remplacez l'instruction `return` par la suivante&nbsp;:

```js
return {
  position: positionBuffer,
  textureCoord: textureCoordBuffer,
  indices: indexBuffer,
};
```

## Mise à jour des shaders

Le programme shader doit également être mis à jour pour utiliser des textures au lieu de couleurs unies.

### Le shader de sommets

Nous avons besoin de remplacer le shader de sommets de façon à ce qu'au lieu de récupérer des données de couleur, il récupère à la place des données de coordonnées de texture.

> [!NOTE]
> Mettez à jour la déclaration de `vsSource` dans votre fonction `main()` comme suit&nbsp;:

```js
const vsSource = `
    attribute vec4 aVertexPosition;
    attribute vec2 aTextureCoord;

    uniform mat4 uModelViewMatrix;
    uniform mat4 uProjectionMatrix;

    varying highp vec2 vTextureCoord;

    void main(void) {
      gl_Position = uProjectionMatrix * uModelViewMatrix * aVertexPosition;
      vTextureCoord = aTextureCoord;
    }
  `;
```

Le changement clé est ici qu'au lieu d'aller chercher la couleur des sommets, nous récupérons les coordonnées de la texture, et nous les transmettons au shader de sommets&nbsp;; ceci indique l'emplacement dans la texture correspondant aux sommets.

### Le shader de fragment

Le shader de fragment doit également être mis à jour.

> [!NOTE]
> Mettez à jour la déclaration de `fsSource` dans votre fonction `main()` comme suit&nbsp;:

```js
const fsSource = `
    varying highp vec2 vTextureCoord;

    uniform sampler2D uSampler;

    void main(void) {
      gl_FragColor = texture2D(uSampler, vTextureCoord);
    }
  `;
```

Au lieu d'attribuer une valeur de couleur à la couleur du fragment, la couleur du fragment est calculée en récupérant le {{Glossary("texel")}} (c'est-à-dire, le pixel dans la texture) sur la base de la valeur de `vTextureCoord`, qui est interpolée comme les sommets.

### Emplacements des attributs et des uniformes

Parce que nous avons changé un attribut et ajouté un uniforme, nous devons rechercher leurs emplacements.

> [!NOTE]
> Mettez à jour la déclaration de `programInfo` dans votre fonction `main()` comme suit&nbsp;:

```js
const programInfo = {
  program: shaderProgram,
  attribLocations: {
    vertexPosition: gl.getAttribLocation(shaderProgram, "aVertexPosition"),
    textureCoord: gl.getAttribLocation(shaderProgram, "aTextureCoord"),
  },
  uniformLocations: {
    projectionMatrix: gl.getUniformLocation(shaderProgram, "uProjectionMatrix"),
    modelViewMatrix: gl.getUniformLocation(shaderProgram, "uModelViewMatrix"),
    uSampler: gl.getUniformLocation(shaderProgram, "uSampler"),
  },
};
```

## Dessin du cube texturé

Les modifications apportées à la fonction `drawScene()` sont simples.

> [!NOTE]
> Dans la fonction `drawScene()` de votre module «&nbsp;draw-scene.js&nbsp;», ajoutez la fonction suivante&nbsp;:

```js
// Indiquer à WebGL comment extraire les coordonnées de texture du tampon
function setTextureAttribute(gl, buffers, programInfo) {
  const num = 2; // chaque coordonnée est composée de 2 valeurs
  const type = gl.FLOAT; // les données dans le tampon sont des flottants 32 bits
  const normalize = false; // ne pas normaliser
  const stride = 0; // combien d'octets à récupérer entre un jeu et le suivant
  const offset = 0; // à combien d'octets du début faut-il commencer
  gl.bindBuffer(gl.ARRAY_BUFFER, buffers.textureCoord);
  gl.vertexAttribPointer(
    programInfo.attribLocations.textureCoord,
    num,
    type,
    normalize,
    stride,
    offset,
  );
  gl.enableVertexAttribArray(programInfo.attribLocations.textureCoord);
}
```

> [!NOTE]
> Dans la fonction `drawScene()` de votre module «&nbsp;draw-scene.js&nbsp;», remplacez l'appel à `setColorAttribute()` par la ligne suivante&nbsp;:

```js
setTextureAttribute(gl, buffers, programInfo);
```

Ensuite, ajoutez le code pour définir la texture à appliquer sur les faces.

> [!NOTE]
> Dans votre fonction `drawScene()`, juste après les deux appels à `gl.uniformMatrix4fv()`, ajoutez le code suivant&nbsp;:

```js
// Indiquer à WebGL que nous voulons affecter l'unité de texture 0
gl.activeTexture(gl.TEXTURE0);

// Lier la texture à l'unité de texture 0
gl.bindTexture(gl.TEXTURE_2D, texture);

// Indiquer au shader que nous avons lié la texture à l'unité de texture 0
gl.uniform1i(programInfo.uniformLocations.uSampler, 0);
```

WebGL fournit au moins 8 unités de texture&nbsp;; la première d'entre elles est `gl.TEXTURE0`. Nous indiquons à WebGL que nous souhaitons utiliser l'unité 0. Nous appelons ensuite {{DOMxRef("WebGLRenderingContext.bindTexture()" , "bindTexture()")}}, ce qui lie la texture au point de liaison `TEXTURE_2D` de l'unité de texture 0. Nous indiquons ensuite au shader d'utiliser l'unité de texture 0 pour `uSampler`.

Enfin, ajoutez `texture` comme paramètre à la fonction `drawScene()`, à la fois là où elle est définie et là où elle est appelée.

Mettez à jour la déclaration de votre fonction `drawScene()` pour ajouter le nouveau paramètre&nbsp;:

```js
function drawScene(gl, programInfo, buffers, texture, cubeRotation) {
  // …
}
```

Mettez à jour l'endroit dans votre fonction `main()` où vous appelez `drawScene()`&nbsp;:

```js
drawScene(gl, programInfo, buffers, texture, cubeRotation);
```

À ce stade, le cube en rotation devrait être prêt à fonctionner.

{{EmbedGHLiveSample("dom-examples/webgl-examples/tutorial/sample6/index.html", 670, 510)}}

[Voir le code complet <sup>(angl.)</sup>](https://github.com/mdn/dom-examples/tree/main/webgl-examples/tutorial/sample6) | [Ouvrir cette démo dans une nouvelle page <sup>(angl.)</sup>](https://mdn.github.io/dom-examples/webgl-examples/tutorial/sample6/)

## Textures inter-domaines

Le chargement des textures WebGL est soumis aux contrôles d'accès inter-domaines. Pour que votre contenu puisse charger une texture d'un autre domaine, une approbation CORS doit être obtenue. Voir le [Contrôle d'accès HTTP](/fr/docs/Web/HTTP/Guides/CORS) pour plus de détails sur CORS.

Les navigateurs modernes traitent généralement l'origine des fichiers chargés à l'aide du schéma file:/// comme des _origines opaques_. Même lorsqu'un fichier inclut d'autres fichiers du même dossier, ils ne sont pas supposés provenir de la même origine et peuvent déclencher des erreurs CORS (voir [Politique de même origine#Origines des fichiers](/fr/docs/Web/Security/Defenses/Same-origin_policy#origines_des_fichiers)). Cela signifie que vous ne pouvez pas utiliser des textures chargées à partir d'URL `file:///` dans WebGL et que vous avez besoin d'un serveur web pour tester et déployer votre code. Pour les tests locaux, consultez notre guide [Comment configurer un serveur de test local&nbsp;?](/fr/docs/Learn_web_development/Howto/Tools_and_setup/set_up_a_local_testing_server) pour obtenir de l'aide.

Voir cet [article de hacks.mozilla.org <sup>(angl.)</sup>](https://hacks.mozilla.org/2011/11/using-cors-to-load-webgl-textures-from-cross-domain-images/) pour une explication sur la façon d'utiliser des images approuvées par CORS comme textures WebGL.

Les canevas 2D _corrompus_ (en écriture seule) ne peuvent pas être utilisés comme textures WebGL. Un élément HTML {{HTMLElement("canvas")}} 2D devient corrompu, par exemple, lorsqu'une image provenant d'un autre domaine y est dessinée.

{{PreviousNext("Web/API/WebGL_API/Tutorial/Creating_3D_objects_using_WebGL", "Web/API/WebGL_API/Tutorial/Lighting_in_WebGL")}}
