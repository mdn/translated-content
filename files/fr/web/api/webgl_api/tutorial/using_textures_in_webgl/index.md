---
title: Utilisation des textures en WebGL
slug: Web/API/WebGL_API/Tutorial/Using_textures_in_WebGL
tags:
  - Tutoriel
  - WebGL
translation_of: Web/API/WebGL_API/Tutorial/Using_textures_in_WebGL
original_slug: Web/API/WebGL_API/Tutorial/Utiliser_les_textures_avec_WebGL
---
{{WebGLSidebar("Tutorial")}} {{PreviousNext("Web/API/WebGL_API/Tutorial/Creating_3D_objects_using_WebGL", "Web/API/WebGL_API/Tutorial/Lighting_in_WebGL")}}

Maintenant que notre programme peut faire tourner un cube 3D, appliquons lui une texture, au lieu d'avoir des couleurs unies pour ses faces.

## Chargement des textures

La première chose à faire est d'ajouter le code pour charger les textures. Dans notre cas, nous utiliserons une texture unique, appliquée à chacune des six faces de notre cube en rotation ; mais la même technique peut être utilisée un nombre quelconque de textures.

> **Note :** il est important de noter que le chargement des textures suit les [règles inter-domaines](/fr-FR/docs/Web/HTTP/CORS) ; donc vous pouvez seulement charger des textures depuis les sites pour lesquels votre contenu a l'approbation CORS. Voir les textures inter-domaines ci-dessous pour plus de détails.

Le code qui charge la texture ressemble à ce qui suit :

    //
    // Initialiser une texture et charger une image.
    // Quand le chargement d'une image est terminé, la copier dans la texture.
    //
    function loadTexture(gl, url) {
      const texture = gl.createTexture();
      gl.bindTexture(gl.TEXTURE_2D, texture);

      // Du fait que les images doivent être téléchargées depuis l'internet,
      // il peut s'écouler un certain temps avant qu'elles ne soient prêtes.
      // Jusque là, mettre un seul pixel dans la texture, de sorte que nous puissions
      // l'utiliser immédiatement. Quand le téléchargement de la page sera terminé,
      // nous mettrons à jour la texture avec le contenu de l'image.
      const level = 0;
      const internalFormat = gl.RGBA;
      const width = 1;
      const height = 1;
      const border = 0;
      const srcFormat = gl.RGBA;
      const srcType = gl.UNSIGNED_BYTE;
      const pixel = new Uint8Array([0, 0, 255, 255]);  // bleu opaque
      gl.texImage2D(gl.TEXTURE_2D, level, internalFormat,
                    width, height, border, srcFormat, srcType,
                    pixel);

      const image = new Image();
      image.onload = function() {
        gl.bindTexture(gl.TEXTURE_2D, texture);
        gl.texImage2D(gl.TEXTURE_2D, level, internalFormat,
                      srcFormat, srcType, image);

        // WebGL1 a des spécifications différentes pour les images puissances de 2
        // par rapport aux images non puissances de 2 ; aussi vérifier si l'image est une
        // puissance de 2 sur chacune de ses dimensions.
        if (isPowerOf2(image.width) && isPowerOf2(image.height)) {
           // Oui, c'est une puissance de 2. Générer les mips.
           gl.generateMipmap(gl.TEXTURE_2D);
        } else {
           // Non, ce n'est pas une puissance de 2. Désactiver les mips et définir l'habillage
           // comme "accrocher au bord"
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

La routine `loadTexture()` commence par créer un objet texture WebGL `texture` en appelant la fonction WebGL {{domxref ("WebGLRenderingContext.createTexture()", "createTexture()")}}. Il téléverse ensuite un seul pixel bleu en utilisant {{domxref ("WebGLRenderingContext.texImage2D()", "texImage2D()")}}. Cela rend la texture immédiatement utilisable comme une couleur bleue unie, alors que cela peut prendre quelques instants pour télécharger notre image.

Pour charger la texture à partir du fichier image, elle crée ensuite un objet Image et en affecte le src à l'URL de l'image que nous souhaitons utiliser comme texture. La fonction que nous affectons à `image.onload` sera appelée une fois terminé le téléchargement de l'image. À ce stade, nous appelons à nouveau {{domxref ("WebGLRenderingContext.texImage2D()", "texImage2D()")}}, cette fois en utilisant l'image comme source pour la texture. Après cela, nous configurons le filtrage et l'habillage de la texture suivant que l'image que nous téléchargeons a ou non une puissance de 2 selon ses deux dimensions.

WebGL1 ne peut utiliser que des textures non puissances de 2 avec d'un filtrage défini à NEAREST ou LINEAR, et il ne peut pas générer de mipmap pour elles. Leur mode d'habillage doit également être défini à CLAMP_TO_EDGE. Inversement, si la texture est une puissance de 2 dans les deux dimensions, alors WebGL peut faire un filtrage de meilleure qualité, il peut utiliser mipmap, et il peut définir le mode d'habillage à REPEAT ou MIRRORED_REPEAT.

Un exemple de texture répétée est le pavage d'une image par quelques briques pour couvrir un mur de briques.

Le mipmapping et la répétition UV peuvent être désactivés avec {{domxref ("WebGLRenderingContext.texParameter()", "texParameteri()")}}. Cela permettra des textures non-puissances-de-deux (NPOT) au prix du mipmapping, de l'habillage UV, du pavage UV, et de votre contrôle sur la manière dont le périphérique gérera votre texture.

    // gl.NEAREST est aussi permis, au lieu de gl.LINEAR, du fait qu'aucun ne fait de mipmap.
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
    // Empêcher l'habillage selon la coordonnée s (répétition).
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    // Empêcher l'habillage selon la coordonnée t (répétition).
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);

A nouveau, avec ces paramètres, les appareils WebGL compatibles accepteront automatiquement toute résolution pour cette texture (jusqu'à leurs dimensions maximum). A défaut de la configuration ci-dessus, WebGL requiert que tous les échantillons de textures NPOT échouent, en retournant du noir transparent : `rgba (0,0,0,0)`.

Pour charger l'image, ajoutons un appel à notre fonction `loadTexture()` dans notre fonction `main()`. Cela peut être ajouté après l'appel `initBuffers(gl)`.

    // Charger la texture
    const texture = loadTexture(gl, 'cubetexture.png');

## Application de la texture sur les faces

À ce stade, la texture est chargée et prête à être utilisée. Mais avant de pouvoir l'utiliser, nous devons définir l'application des coordonnées de texture aux sommets des faces de notre cube. Cela remplace tout le code précédemment existant pour la configuration des couleurs pour chacune des faces du cube dans `initBuffers()`.

     const textureCoordBuffer = gl.createBuffer();
      gl.bindBuffer(gl.ARRAY_BUFFER, textureCoordBuffer);

      const textureCoordinates = [
        // Front
        0.0,  0.0,
        1.0,  0.0,
        1.0,  1.0,
        0.0,  1.0,
        // Back
        0.0,  0.0,
        1.0,  0.0,
        1.0,  1.0,
        0.0,  1.0,
        // Top
        0.0,  0.0,
        1.0,  0.0,
        1.0,  1.0,
        0.0,  1.0,
        // Bottom
        0.0,  0.0,
        1.0,  0.0,
        1.0,  1.0,
        0.0,  1.0,
        // Right
        0.0,  0.0,
        1.0,  0.0,
        1.0,  1.0,
        0.0,  1.0,
        // Left
        0.0,  0.0,
        1.0,  0.0,
        1.0,  1.0,
        0.0,  1.0,
      ];

      gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(textureCoordinates),
                    gl.STATIC_DRAW);

    ...
      return {
        position: positionBuffer,
        textureCoord: textureCoordBuffer,
        indices: indexBuffer,
      };

Tout d'abord, ce code crée un tampon WebGL dans lequel nous stockerons les coordonnées de texture pour chaque face, puis nous lions ce tampon comme étant le tableau dans lequel nous allons écrire.

Le tableau `textureCoordinates` définit les coordonnées de texture correspondant à chaque sommet de chaque face. Notez que les coordonnées de texture vont de 0,0 à 1,0 ; les dimensions des textures sont normalisées dans une plage de 0,0 à 1,0 quelque soit leur taille réelle, aux fins d'application de la texture.

Une fois que nous avons mis en place le tableau d'application de la texture, nous l'envoyons dans le tampon, de sorte que WebGL ait ces données prêtes pour son utilisation.

## Mise à jour des shaders

Le programme shader doit également être mis à jour pour utiliser des textures au lieu de couleurs unies.

### Le shader de sommet

Nous avons besoin de remplacer le shader de sommet de façon à ce qu'au lieu de récupérer des données de couleur, il récupère à la place des données de coordonnées de texture.

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

Le changement clé est ici qu'au lieu d'aller chercher la couleur du sommet, nous récupérons les coordonnées de la texture, et nous les transmettons au shader de sommet ; ceci indiquera l'emplacement dans la texture correspondant au sommet.

### Le shader de fragment

Le shader de fragment doit également être mis à jour :

    const fsSource = `
        varying highp vec2 vTextureCoord;

        uniform sampler2D uSampler;

        void main(void) {
          gl_FragColor = texture2D(uSampler, vTextureCoord);
        }
      `;

Au lieu d'attribuer une valeur de couleur à la couleur du fragment, la couleur du fragment est calculée en récupérant le **texel** (c'est-à-dire, le pixel dans la texture) sur la base de la valeur de `vTextureCoord`, qui est interpolée comme les sommets.

### Emplacements des attributs et des uniformes

Du fait que nous avons changé un attribut et ajouté un uniforme, nous devons rechercher leurs emplacements :

      const programInfo = {
        program: shaderProgram,
        attribLocations: {
          vertexPosition: gl.getAttribLocation(shaderProgram, 'aVertexPosition'),
          textureCoord: gl.getAttribLocation(shaderProgram, 'aTextureCoord'),
        },
        uniformLocations: {
          projectionMatrix: gl.getUniformLocation(shaderProgram, 'uProjectionMatrix'),
          modelViewMatrix: gl.getUniformLocation(shaderProgram, 'uModelViewMatrix'),
          uSampler: gl.getUniformLocation(shaderProgram, 'uSampler'),
        },
      };

## Dessin du cube texturé

Les modifications apportées à la fonction `drawScene()` sont simples.

Tout d'abord, le code pour spécifier le tampon de couleurs a disparu, remplacé par ce qui suit :

    // Indiquer à WebGL comment extraire les coordonnées de texture du tampon
    {
        const num = 2; // chaque coordonnée est composée de 2 valeurs
        const type = gl.FLOAT; // les données dans le tampon sont des flottants 32 bits
        const normalize = false; // ne pas normaliser
        const stride = 0; // combien d'octets à récupérer entre un jeu et le suivant
        const offset = 0; // à combien d'octets du début faut-il commencer
        gl.bindBuffer(gl.ARRAY_BUFFER, buffers.textureCoord);
        gl.vertexAttribPointer(programInfo.attributeLocations.textureCoord, num, type, normalize, stride, offset);
        gl.enableVertexAttribArray(programInfo.attributeLocations.textureCoord);
    }

Ajoutez alors le code pour spécifier la texture à appliquer sur les faces, juste avant de dessiner :

      // Indiquer à WebGL que nous voulons affecter l'unité de texture 0
      gl.activeTexture(gl.TEXTURE0);

      // Lier la texture à l'unité de texture 0
      gl.bindTexture(gl.TEXTURE_2D, texture);

      // Indiquer au shader que nous avons lié la texture à l'unité de texture 0
      gl.uniform1i(programInfo.uniformLocations.uSampler, 0);

WebGL fournit un minimum de 8 unités de texture ; la première d'entre elles est `gl.TEXTURE0`. Nous indiquons à WebGL que nous voulons affecter l'unité 0. Nous appelons alors {{domxref ("WebGLRenderingContext.bindTexture()", "bindTexture()")}}, qui lie la texture au point de liaison `TEXTURE_2D` de l'unité de texture 0. Nous indiquons alors au shader que pour l'`uSampler`, il faut utiliser l'unité de texture 0.

Finalement, ajoutez `texture` comme paramètre de la fonction `drawScene()`, où elle est à la fois définie et appelée.

    drawScene(gl, programInfo, buffers, texture, deltaTime);
    ...
    function drawScene(gl, programInfo, buffers, texture, deltaTime) {

Arrivés ce point, le cube en rotation devrait être prêt à fonctionner.

{{EmbedGHLiveSample('webgl-examples/tutorial/sample6/index.html', 670, 510) }}

[Voir le code complet](https://github.com/mdn/webgl-examples/tree/gh-pages/tutorial/sample6) | [Ouvrir cette démo dans une nouvelle page](http://mdn.github.io/webgl-examples/tutorial/sample6/)

## Textures inter-domaines

Le chargement des textures WebGL est soumis aux contrôles d'accès inter-domaines. Pour que votre contenu puisse charger une texture d'un autre domaine, une approbation CORS doit être obtenue. Voir le [Contrôle d'accès HTTP](/fr/docs/HTTP/Access_control_CORS) pour plus de détails sur CORS.

Voir cet [article sur hacks.mozilla.org](http://hacks.mozilla.org/2011/11/using-cors-to-load-webgl-textures-from-cross-domain-images/) pour une explication de l'utilisation des images approuvées CORS comme textures WebGL, avec [un exemple complet](http://people.mozilla.org/~bjacob/webgltexture-cors-js.html).

> **Note :** le support CORS pour les texture WebGL et l'attribut `crossOrigin` pour les éléments image est implémenté dans {{Gecko("8.0")}}.

Les canevas 2D dégradés (en écriture seule) ne peuvent pas être utilisés comme des textures WebGL. Un {{HTMLElement ("canvas")}} 2D devient dégradé par exemple lorsqu'il est utilisé pour dessiner une image inter-domaine.

> **Note :** le support CORS pour `drawImage` de Canvas 2D est implémenté dans {{Gecko ("9.0")}}. Cela signifie que l'utilisation d'une image inter-domaine ayant l'approbation CORS ne dégrade plus le canevas 2D, de sorte que le canevas 2D reste utilisable comme source d'une texture WebGL.

> **Note :** le support CORS pour les vidéos inter-domaines et l'attribut `crossorigin` pour les éléments {{HTMLElement ("video")}} est implémenté dans {{Gecko ("12.0")}}.

{{PreviousNext("Web/API/WebGL_API/Tutorial/Creating_3D_objects_using_WebGL", "Web/API/WebGL_API/Tutorial/Lighting_in_WebGL")}}
