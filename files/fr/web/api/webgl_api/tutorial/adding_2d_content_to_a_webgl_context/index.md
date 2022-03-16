---
title: Ajouter du contenu à WebGL
slug: Web/API/WebGL_API/Tutorial/Adding_2D_content_to_a_WebGL_context
tags:
  - 3D
  - API WebGL
  - Graphismes
  - Graphismes 2D
  - Graphismes 3D
  - Intermédiaire
  - Shaders
  - Tutoriel
  - WebGL
  - dessin
translation_of: Web/API/WebGL_API/Tutorial/Adding_2D_content_to_a_WebGL_context
original_slug: Web/API/WebGL_API/Tutorial/Ajouter_du_contenu_à_WebGL
---
{{WebGLSidebar("Tutorial")}} {{PreviousNext("Web/API/WebGL_API/Tutorial/Getting_started_with_WebGL", "Web/API/WebGL_API/Tutorial/Using_shaders_to_apply_color_in_WebGL")}}

Une fois que vous avez correctement créé un contexte WebGL, vous pouvez commencer à y dessiner. Une chose simple que nous pouvons faire est de dessiner un simple carré 2D sans texture, commençons donc par là, en construisant un code pour dessiner un carré 2D.

## Dessiner la scène

La chose la plus importante à comprendre avant que nous ne commencions est que, bien que nous dessinions seulement un carré 2D dans cet exemple, nous sommes toujours en train de dessiner dans un espace 3D. Nous dessinons juste un carré et nous le mettons exactement en face de la caméra, perpendiculairement à la direction de vision. Nous avons besoin de définir les shaders qui créeront la couleur pour notre scène simple, et qui dessineront notre objet. Cela définira comment notre carré 2D apparaîtra à l'écran.

### Les shaders

Un shader est un programme, écrit en utilisant le [OpenGL ES Shading Language](https://www.khronos.org/files/opengles_shading_language.pdf) (GLSL), qui utilise les informations des sommets constituant une forme, et qui génère les données nécessaires pour faire un rendu des pixels à l'écran : nommément, les positions des pixels et leurs couleurs.

Deux fonctions de shader sont exécutées lors du dessin d'un contenu WebGL : le **shader de sommet** et le **shader de fragment**. Vous les écrivez en GLSL et vous passez le texte du code à WebGL pour qu'il soit compilé pour exécution dans la GPU. Pris conjointement, un ensemble de shaders de sommet et de fragment sont appelés un **programme shader**.

Jetons un coup d'œil rapide aux deux types de shaders, en gardant présent à l'esprit l'exemple du dessin d'une forme 2D dans le contexte WebGL.

#### Le shader de sommet

Chaque fois qu'une forme est rendue, le shader de sommet est exécuté pour chaque sommet de la forme. Son travail consiste à effectuer les transformations souhaitées sur la position du sommet.

Les informations de position sont stockées dans une variable spéciale fournie par GLSL, appelée `gl_Position`.

Le shader de sommet peut, au besoin, aussi faire des choses comme déterminer les coordonnées dans la texture des faces du {{interwiki ("wikipedia", "texel")}} à appliquer au sommet, appliquer les normales pour déterminer le facteur d'éclairage à appliquer au sommet, et ainsi de suite. Ces informations peuvent alors être stockées dans des variations ou des attributs comme approprié, pour être partagées avec le shader de fragment.

Notre shader de sommet ci-dessous reçoit des valeurs de position de sommet à partir d'un attribut que nous définissons, appelé `aVertexPosition`. Cette position est ensuite multipliée par deux matrices 4x4 que nous fournissons, appelées `uProjectionMatrix` et `uModelMatrix` ; `gl_Position` est définie comme étant le résultat. Pour plus d'informations sur la projection et autres matrices, [vous pourriez trouver cet article utile](https://webglfundamentals.org/webgl/lessons/webgl-3d-perspective.html).

    // Programme shader de sommet

    const vsSource = `
      attribute vec4 aVertexPosition;

      uniform mat4 uModelViewMatrix;
      uniform mat4 uProjectionMatrix;

      void main() {
        gl_Position = uProjectionMatrix * uModelViewMatrix * aVertexPosition;
      }
    `;

Dans cet exemple, nous ne calculons pas d'éclairage du tout, puisque nous n'en avons pas encore appliqué à la scène. Cela viendra plus tard, dans l'exemple [Éclairage en WebGL](/fr-FR/docs/Web/API/WebGL_API/Tutorial/Lighting_in_WebGL). Notez également l'absence de tout travail sur les textures ici ; cela sera ajouté dans [Utilisation de textures en WebGL](/fr-FR/docs/Web/API/WebGL_API/Tutorial/Using_textures_in_WebGL).

#### Le shader de fragment

Le **shader de fragment** est appelé une fois pour chaque pixel de chaque forme à dessiner, une fois que les sommets de la forme ont été traités par le shader de sommet. Son travail consiste à déterminer la couleur de ce pixel en déterminant quel texel (c'est-à-dire le pixel de la texture de la forme) appliquer au pixel, à obtenir la couleur de ce texel, puis à appliquer l'éclairage approprié à la couleur. La couleur est ensuite renvoyée à la couche WebGL en la stockant dans la variable spéciale `gl_FragColor`. Cette couleur est alors dessinée à l'écran dans la position correcte pour le pixel correspondant de la forme.

Dans ce cas, nous retournons simplement du blanc à chaque fois, car nous sommes seulement en train de dessiner un carré blanc, sans éclairage.

      const fsSource = `
        void main() {
          gl_FragColor = vec4(1.0, 1.0, 1.0, 1.0);
        }
      `;

### Initialisation des shaders

Maintenant que nous avons défini les deux shaders, nous devons les transmettre à WebGL, les compiler et les lier ensemble. Le code ci-dessous crée les deux shaders en appelant `loadShader()`, lui passant le type et la source du shader. Il crée alors un programme, attache les shaders et les relie ensemble. Si la compilation ou la liaison échoue, le code affiche une alerte.

    //
    // Initialiser un programme shader, de façon à ce que WebGL sache comment dessiner nos données
    //
    function initShaderProgram(gl, vsSource, fsSource) {
      const vertexShader = loadShader(gl, gl.VERTEX_SHADER, vsSource);
      const fragmentShader = loadShader(gl, gl.FRAGMENT_SHADER, fsSource);

      // Créer le programme shader

      const shaderProgram = gl.createProgram();
      gl.attachShader(shaderProgram, vertexShader);
      gl.attachShader(shaderProgram, fragmentShader);
      gl.linkProgram(shaderProgram);

      // Si la création du programme shader a échoué, alerte

      if (!gl.getProgramParameter(shaderProgram, gl.LINK_STATUS)) {
        alert('Impossible d'initialiser le programme shader : ' + gl.getProgramInfoLog(shaderProgram));
        return null;
      }

      return shaderProgram;
    }

    //
    // Crée un shader du type fourni, charge le source et le compile.
    //
    function loadShader(gl, type, source) {
      const shader = gl.createShader(type);

      // Envoyer le source à l'objet shader

      gl.shaderSource(shader, source);

      // Compiler le programme shader

      gl.compileShader(shader);

      // Vérifier s'il a ét compilé avec succès

      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        alert('An error occurred compiling the shaders: ' + gl.getShaderInfoLog(shader));
        gl.deleteShader(shader);
        return null;
      }

      return shader;
    }

La fonction `loadShader()` prend en entrée le contexte WebGL, le type de shader et le code source, puis crée et compile le shader comme suit :

1.  un nouveau shader est créé en appelant {{domxref("WebGLRenderingContext.createShader", "gl.createShader()")}}&nbsp;;
2.  le code source du shader est envoyé au shader en appelant {{domxref("WebGLRenderingContext.shaderSource", "gl.shaderSource()")}} ;
3.  une fois que le shader a le code source, il est compilé en utilisant {{domxref("WebGLRenderingContext.compileShader", "gl.compileShader()")}} ;
4.  pour vérifier que le shader a été compilé avec succès, le paramètre `gl.COMPILE_STATUS` du shader est vérifié ; pour obtenir sa valeur, nous appelons {{domxref("WebGLRenderingContext.getShaderParameter", "gl.getShaderParameter()")}}, en indiquant le shader et le nom du paramètre que nous voulons vérifier (`gl.COMPILE_STATUS`) ; si c'est `false`, nous savons que le shader n'a pas pu être compilé, aussi nous affichons une alerte avec les informations du journalisation obtenues du compilateur en utilisant {{domxref ("WebGLRenderingContext.getShaderInfoLog", "gl.getShaderInfoLog()")}}, puis nous supprimons le shader et nous renvoyons `null` pour indiquer l'échec du chargement du shader ;
5.  si le shader a été chargé et compilé avec succès, le shader compilé est renvoyé à l'appelant.

Pour utiliser ce code, nous l'appelons de la façon suivante :

     const shaderProgram = initShaderProgram(gl, vsSource, fsSource);

Après avoir créé un programme de shaders, nous devons rechercher les emplacements que WebGL a assignés à nos entrées. Dans ce cas, nous avons un attribut et deux uniformes. Les attributs reçoivent des valeurs des tampons. Chaque itération du shader des sommets reçoit la valeur suivante du tampon affecté à cet attribut. Les uniformes sont similaires aux variables globales JavaScript. Ils conservent la même valeur pour toutes les itérations d'un shader. Du fait que les attributs et les emplacements des uniformes sont spécifiques à un programme de shader donné, nous les stockerons ensemble pour les rendre plus faciles à transmettre.

      const programInfo = {
        program: shaderProgram,
        attribLocations: {
          vertexPosition: gl.getAttribLocation(shaderProgram, 'aVertexPosition'),
        },
        uniformLocations: {
          projectionMatrix: gl.getUniformLocation(shaderProgram, 'uProjectionMatrix'),
          modelViewMatrix: gl.getUniformLocation(shaderProgram, 'uModelViewMatrix'),
        },
      };

## Création du carré 2D

Avant de pouvoir faire un rendu de notre carré 2D, nous devons créer le tampon qui contiendra les positions de ses sommets et y placer les positions des sommets. Nous ferons cela en utilisant une fonction que nous appelerons `initBuffers()` ; à mesure que nous explorerons des concepts WebGL plus avancés, cette routine sera augmentée pour créer plus d'objets 3D, et plus complexes.

    function initBuffers(gl) {

      // Créer un tampon des positions pour le carré.

      const positionBuffer = gl.createBuffer();

      // Définir le positionBuffer comme étant celui auquel appliquer les opérations
      // de tampon à partir d'ici.

      gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);

      // Créer maintenant un tableau des positions pour le carré.

      const positions = [
         1.0,  1.0,
        -1.0,  1.0,
         1.0, -1.0,
        -1.0, -1.0,
      ];

      // Passer mainenant la liste des positions à WebGL pour construire la forme.
      // Nous faisons cela en créant un Float32Array à partir du tableau JavaScript,
      // puis en l'utilisant pour remplir le tampon en cours.

      gl.bufferData(gl.ARRAY_BUFFER,
                    new Float32Array(positions),
                    gl.STATIC_DRAW);

      return {
        position: positionBuffer,
      };
    }

Cette routine est assez simpliste du fait de la nature basique de la scène dans cet exemple. Elle commence par appeler la méthode {{domxref ("WebGLRenderingContext.createBuffer()", "createBuffer()")}} de l'objet gl pour obtenir un tampon dans lequel nous stockerons les positions des sommets. Ce dernier est ensuite lié au contexte en appelant la méthode {{domxref ("WebGLRenderingContext.bindBuffer()", "bindBuffer()")}}.

Une fois que cela est fait, nous créons un tableau JavaScript contenant la position de chaque sommet du carré 2D. Ce dernier est ensuite converti en un tableau de flottants et transmis à la méthode {{domxref ("WebGLRenderingContext.bufferData()", "bufferData()")}} de l'objet `gl` pour définir les positions des sommets de l'objet.

## Rendu de la scène

Une fois que les shaders sont définis, que les emplacements sont retrouvés, et que les positions des sommets du carré 2D sont stockées dans le tampon, nous pouvons faire effectivement le rendu de la scène. Puisque nous n'animons rien dans cet exemple, notre fonction `drawScene()` est très simple. Elle utilise quelques routines utilitaires que nous décrirons sous peu.

> **Note :** Vous pourriez obtenir une erreur JavaScript indiquant _"mat4 n'est pas défini"_. Cela signifie qu'il existe une dépendance à **glmatrix**. Vous pouvez inclure [gl-matrix.js](https://mdn.github.io/webgl-examples/tutorial/gl-matrix.js) pour résoudre ce problème, comme suggéré [ici](https://github.com/mdn/webgl-examples/issues/20).

    function drawScene(gl, programInfo, buffers) {
      gl.clearColor(0.0, 0.0, 0.0, 1.0);  // effacement en noir, complètement opaque
      gl.clearDepth(1.0);                 // tout effacer
      gl.enable(gl.DEPTH_TEST);           // activer le test de profondeur
      gl.depthFunc(gl.LEQUAL);            // les choses proches cachent les choses lointaines

      // Effacer le canevas avant que nous ne commencions à dessiner dessus.

      gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

      // Créer une matrice de perspective, une matrice spéciale qui est utilisée pour
      // simuler la distorsion de la perspective dans une caméra.
      // Notre champ de vision est de 45 degrés, avec un rapport largeur/hauteur qui
      // correspond à la taille d'affichage du canvas ;
      // et nous voulons seulement voir les objets situés entre 0,1 unité et 100 unités
      // à partir de la caméra.

      const fieldOfView = 45 * Math.PI / 180;   // en radians
      const aspect = gl.canvas.clientWidth / gl.canvas.clientHeight;
      const zNear = 0.1;
      const zFar = 100.0;
      const projectionMatrix = mat4.create();

      // note: glmatrix.js a toujours comme premier argument la destination
      // où stocker le résultat.
      mat4.perspective(projectionMatrix,
                       fieldOfView,
                       aspect,
                       zNear,
                       zFar);

      // Définir la position de dessin comme étant le point "origine", qui est
      // le centre de la scène.
      const modelViewMatrix = mat4.create();

      // Commencer maintenant à déplacer la position de dessin un peu vers là où
      // nous voulons commencer à dessiner le carré.

      mat4.translate(modelViewMatrix,     // matrice de destination
                     modelViewMatrix,     // matrice de déplacement
                     [-0.0, 0.0, -6.0]);  // quantité de déplacement

      // Indiquer à WebGL comment extraire les positions à partir du tampon des
      // positions pour les mettre dans l'attribut vertexPosition.
      {
        const numComponents = 2;  // extraire 2 valeurs par itération
        const type = gl.FLOAT;    // les données dans le tampon sont des flottants 32bit
        const normalize = false;  // ne pas normaliser
        const stride = 0;         // combien d'octets à extraire entre un jeu de valeurs et le suivant
                                  // 0 = utiliser le type et numComponents ci-dessus
        const offset = 0;         // démarrer à partir de combien d'octets dans le tampon
        gl.bindBuffer(gl.ARRAY_BUFFER, buffers.position);
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

      // Indiquer à WebGL d'utiliser notre programme pour dessiner

      gl.useProgram(programInfo.program);

      // Définir les uniformes du shader

      gl.uniformMatrix4fv(
          programInfo.uniformLocations.projectionMatrix,
          false,
          projectionMatrix);
      gl.uniformMatrix4fv(
          programInfo.uniformLocations.modelViewMatrix,
          false,
          modelViewMatrix);

      {
        const offset = 0;
        const vertexCount = 4;
        gl.drawArrays(gl.TRIANGLE_STRIP, offset, vertexCount);
      }
    }

La première étape consiste à effacer le canevas avec notre arrière plan ; ensuite, nous établissons la perspective de la caméra. Nous définissons un champ de vision de 45°, avec un rapport largeur sur hauteur qui correspond aux dimensions d'affichage de notre canevas. Nous indiquons également que seuls les objets situés entre 0,1 et 100 unités à partir de la caméra doivent être rendus.

Ensuite, nous établissons la position du carré 2D en chargeant la position de l'origine et en nous déplaçant de 6 unités à partir de la caméra. Après cela, nous lions le tampon des sommets du carré à l'attribut que le shader utilise comme `aVertexPosition` et nous indiquons à WebGL comment en extraire les données. Enfin, nous dessinons l'objet en appelant la méthode {{domxref ("WebGLRenderingContext.drawArrays()", "drawArrays()")}}.

{{EmbedGHLiveSample('webgl-examples/tutorial/sample2/index.html', 670, 510) }}

[Voir le code complet](https://github.com/mdn/webgl-examples/tree/gh-pages/tutorial/sample2) | [Ouvrir cette démo dans une nouvelle page](http://mdn.github.io/webgl-examples/tutorial/sample2/)

## Opérations utilitaires matricielles

Les opérations matricielles peuvent sembler compliquées, mais [elles sont en fait assez simples si vous en prenez une à la fois](https://webglfundamentals.org/webgl/lessons/webgl-2d-matrices.html). En général, les gens utilisent une bibliothèque matricielle plutôt que d'écrire la leur. Dans notre cas, nous utilisons la bibliothèque populaire [glMatrix](http://glmatrix.net/).

Voir aussi&nbsp;:

- les [matrices](https://webglfundamentals.org/webgl/lessons/webgl-2d-matrices.html) sur WebGLFundamentals ;
- les [matrices](http://mathworld.wolfram.com/Matrix.html) sur Wolfram MathWorld ;
- l'article [matrice](<https://fr.wikipedia.org/wiki/Matrice_(math%C3%A9matiques)>) sur Wikipedia.

{{PreviousNext("Web/API/WebGL_API/Tutorial/Getting_started_with_WebGL", "Web/API/WebGL_API/Tutorial/Using_shaders_to_apply_color_in_WebGL")}}
