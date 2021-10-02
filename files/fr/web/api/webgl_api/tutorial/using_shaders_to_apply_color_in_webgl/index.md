---
title: Ajouter des couleurs avec les nuanceurs
slug: Web/API/WebGL_API/Tutorial/Using_shaders_to_apply_color_in_WebGL
tags:
  - Tutoriel
  - WebGL
translation_of: Web/API/WebGL_API/Tutorial/Using_shaders_to_apply_color_in_WebGL
original_slug: Web/API/WebGL_API/Tutorial/Ajouter_des_couleurs_avec_les_shaders
---
<p>{{WebGLSidebar("Tutorial")}} {{PreviousNext("Web/API/WebGL_API/Tutorial/Adding_2D_content_to_a_WebGL_context", "Web/API/WebGL_API/Tutorial/Animating_objects_with_WebGL")}}</p>

<p>Dans la <a href="/fr/docs/WebGL/Ajouter_du_contenu_à_WebGL">démonstration précédente</a>, nous avons créé un carré 2D, la prochaine étape évidente consiste à lui appliquer de la couleur. Nous allons faire cela en révisant les nuanceurs.</p>

<h2 id="Application_de_couleur_aux_sommets">Application de couleur aux sommets</h2>

<p>En WebGL, les objets sont construits en utilisant des sommets, chacun d'entre eux ayant une position et une couleur ; par défaut, les couleurs des autres sommets (et tous leurs autres attributs, incluant leur position) sont calculés en utilisant une interpolation linéaire, créant ainsi automatiquement des dégradés. Précédemment, notre nuanceur de sommet n'appliquait aucunes couleurs spécifiques aux sommets ; entre cela et le fait que le nuanceur de fragment assignait la valeur blanche à chaque pixel, le carré entier était rendu en blanc uni.</p>

<p>Supposons que nous voulions faire un rendu en dégradé dans lequel chaque coin du carré est de couleur différente : rouge, bleu, vert et blanc. La première chose à faire est de définir ces couleurs pour les quatre sommets. Pour ce faire, nous devons d'abord créer un tableau des couleurs des sommets, puis le stocker dans un tampon WebGL ; nous le ferons en ajoutant le code suivant à notre fonction <code>initBuffers()</code> :</p>

<pre><code>  const colors = [
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
}</code></pre>

<p>Ce code commence par créer un tableau JavaScript contenant des vecteurs à 4 valeurs, un pour chaque couleur de sommet. Un tampon WebGL est alors alloué pour stocker ces couleurs, et le tableau est converti en flottants et stocké dans le tampon.</p>

<p>Pour que ces couleurs soient effectivement utilisées, le nuanceur de sommet doit être mis à jour pour extraire la couleur appropriée du tampon des couleurs :</p>

<pre><code>  const vsSource = `
    attribute vec4 aVertexPosition;
    attribute vec4 aVertexColor;

    uniform mat4 uModelViewMatrix;
    uniform mat4 uProjectionMatrix;

    varying lowp vec4 vColor;

    void main(void) {
      gl_Position = uProjectionMatrix * uModelViewMatrix * aVertexPosition;
      vColor = aVertexColor;
    }
  `;</code></pre>

<p>La différence clé est ici que, pour chaque sommet, nous passons sa couleur au nuanceur de fragment en utilisant un <code>varying</code>.</p>

<h2 id="Coloriage_des_fragments">Coloriage des fragments</h2>

<p>Pour mémoire, voici à quoi ressemblait précédemment notre nuanceur de fragment :</p>

<pre><code>  const fsSource = `
    void main() {
      gl_FragColor = vec4(1.0, 1.0, 1.0, 1.0);
    }
  `;</code></pre>

<p>Afin de choisir la couleur interpolée pour chaque pixel, nous devons le changer pour récupérer la valeur depuis le varying <code>vColor</code> :</p>

<pre><code>  const fsSource = `
    varying lowp vec4 vColor;

    void main(void) {
      gl_FragColor = vColor;
    }
  `;</code></pre>

<p>La principale différence ici c'est que pour chaque sommet, on assigne la valeur correspondant à sa couleur dans le tableau.</p>

<h2 id="Dessiner_en_utilisant_les_couleurs">Dessiner en utilisant les couleurs</h2>

<p>Ensuite, il est nécessaire d'ajouter le code recherchant les couleurs dans l'emplacement de l'attribut, et de configurer cet attribut pour le programme nuanceur :</p>

<pre><code>  const programInfo = {
    program: shaderProgram,
    attribLocations: {
      vertexPosition: gl.getAttribLocation(shaderProgram, 'aVertexPosition'),
      vertexColor: gl.getAttribLocation(shaderProgram, 'aVertexColor'),
    },
    ...</code></pre>

<p>Ensuite, <code>drawScene()</code> peut être modifié pour utiliser réellement ces couleurs lors du dessin du carré :</p>

<pre><code>  // Indiquer à WebGL comment transférer les couleurs du tampon des couleurs
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
        offset);
    gl.enableVertexAttribArray(
        programInfo.attribLocations.vertexColor);
  }</code></pre>

<p>{{EmbedGHLiveSample('webgl-examples/tutorial/sample3/index.html', 670, 510) }}</p>

<p><a href="https://github.com/mdn/webgl-examples/tree/gh-pages/tutorial/sample3">Voir le code complet</a> | <a href="http://mdn.github.io/webgl-examples/tutorial/sample3/">Ouvrir cette démo dans une nouvelle page</a></p>

<p>{{PreviousNext("Web/API/WebGL_API/Tutorial/Adding_2D_content_to_a_WebGL_context", "Web/API/WebGL_API/Tutorial/Animating_objects_with_WebGL")}}</p>
