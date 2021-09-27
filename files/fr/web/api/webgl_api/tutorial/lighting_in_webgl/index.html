---
title: Éclairage en WebGL
slug: Web/API/WebGL_API/Tutorial/Lighting_in_WebGL
translation_of: Web/API/WebGL_API/Tutorial/Lighting_in_WebGL
original_slug: Web/API/WebGL_API/Tutorial/Eclairage_en_WebGL
---
<p>{{WebGLSidebar("Tutorial")}} {{PreviousNext("Web/API/WebGL_API/Tutorial/Utiliser_les_textures_avec_WebGL", "Web/API/WebGL_API/Tutorial/Animating_textures_in_WebGL")}}</p>

<p>La première chose à comprendre à propos de WebGL est que contrairement au standard OpenGL, WebGL n'a pas de support pour l'éclairage. Vous avez à le faire par vous même. Heureusement ce n'est pas si dur à faire, et cet article va vous expliquer quelques bases.</p>

<h2 id="Simuler_l'éclairage_et_les_ombres_en_3D">Simuler l'éclairage et les ombres en 3D</h2>

<p>Rentrer dans les détails de la théorie derrière la simulation de l'éclairage 3D est assez loin du sujet de cet article mais il vaut mieux en connaitre un minimum le sujet. Au lieu de rentrer dans le vif du sujet ici, jetez un coup d'oeil sur <a href="https://fr.wikipedia.org/wiki/Ombrage_de_Phong">l'ombrage de Phong</a> sur Wikipédia, qui fourni une bonne vue d'ensemble comme modèle d'éclairage.</p>

<p>Il y a trois types basiques d'éclairage :</p>

<ol>
 <li><strong>Ambient light (Lumière Ambiante) </strong>est la lumière qui imprègne, qui se répand sur la scène. Elle n'a pas de direction et s'applique sur toutes les faces de la scène de la même façon.</li>
 <li><strong>Directional light (Lumière Directionnelle)</strong> est une lumière émise depuis une direction spécifique. Par exemple le soleil, est une lumière directionnelle.</li>
 <li><strong>Point light</strong> <strong>(Point de lumière) </strong>est une lumière émise depuis un point, éméttant une lumière dans toutes les directions, contrairement à la Lumière Directionnelle. C'est comme ceci que les lumières fonctionnent principalement dans notre monde, comme par exemple une ampoule.</li>
</ol>

<p>Pour notre tutorial, nous allons simplifier le model d'éclairage, en considérant seulement une unique lumière directionnelle et une lumière ambiante. Nous allons réutiliser notre <a href="/en-US/docs/Web/API/WebGL_API/Tutorial/Using_textures_in_WebGL">précédent exemple avec le cube en rotation</a>.</p>

<p>Une fois que nous avons appréhendé le concept de source et de réfléction de la lumière, il y a deux choses que nous avons besoin d'implémenter pour nos lumières directionnelles.</p>

<ol>
 <li>Nous avons besoin d'associer la <strong>surface normale</strong> avec chaque sommet. C'est un vecteur qui est perpendiculaire à la face associé à ce sommet.</li>
 <li>Nous avons besoin de connaître la direction dans laquelle la lumière arrive. Ceci est défini par la direction du vecteur.</li>
</ol>

<p>Puis nous mettons à jour le vertex shader pour ajuster la couleur de chaque sommet. en prenant en compte la lumière ambiante ainsi que l'effet de la lumière directionnelle donné par l'angle qui rencontre la face du cube. Nous allons voir comment faire avec les shaders.</p>

<h2 id="Créer_les_normales_pour_les_sommets">Créer les normales pour les sommets</h2>

<p>La première chose dont nous avons besoin, est de générer le tableau des <strong>normales</strong> pour tous les sommets que constituent notre cube. Comme un cube est un simple objet, c'est plutôt simple à faire, évidemment pour des objets plus complexe, calculer les normales sera plus compliqué.</p>

<pre class="brush: js">cubeVerticesNormalBuffer = gl.createBuffer();
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
</pre>

<p>Ceci doit vous être plutôt familier maintenant. Nous créons un nouveau buffer, on le lie avec le tableau sur lequel nous allons travailler, puis nous allons envoyer l'ensemble de notre tableau au buffer en appelant la méthode <code>bufferData()</code>.</p>

<p>Ensuite nous allons ajouter le code à la fonction <code>drawScene() </code>pour attacher le tableau de normales à l'attribut du shader, comme ça le code du shader y aura accès:</p>

<pre class="brush: js">gl.bindBuffer(gl.ARRAY_BUFFER, cubeVerticesNormalBuffer);
gl.vertexAttribPointer(vertexNormalAttribute, 3, gl.FLOAT, false, 0, 0);
</pre>

<p>Enfin, nous avons besoin de mettre à jour le code qui construit les matrices uniformes pour générer et livrer au shader une matrice normale, qui sera utilisée pour transformer les normales en fonction de l'orientation actuelle du cube par rapport à la source de lumière.</p>

<pre class="brush: js">var normalMatrix = mvMatrix.inverse();
normalMatrix = normalMatrix.transpose();
var nUniform = gl.getUniformLocation(shaderProgram, 'uNormalMatrix');
gl.uniformMatrix4fv(nUniform, false, new WebGLFloatArray(normalMatrix.flatten()));
</pre>

<h2 id="Mettre_à_jour_les_shaders">Mettre à jour les shaders</h2>

<p>Maintenant que les shaders ont toutes les données dont ils ont besoin, nous mettons à jour leur code.</p>

<h3 id="Le_vertex_shader">Le vertex shader</h3>

<p>La première chose à faire est de mettre à jour le vertex shader en générant une valeur pour l'ombre de chaque sommet, en se basant sur l'éclairage ambiant ainsi que la direction de la lumière. Jettons un oeil sur le code suivant:</p>

<pre class="brush: html">&lt;script id="shader-vs" type="x-shader/x-vertex"&gt;
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
&lt;/script&gt;
</pre>

<p>Une fois que la position du sommet est calculée, et que nous obtenons les coordonnées des texels (tas de pixel pour une texture) correspondant au sommet, nous pouvons travailler sur le calcul de l'ombre de chaque sommet.</p>

<p>La première chose que nous allons faire est de transformer la base normale sur la position actuelle et l'orientation du cube, en calculant les normales des sommets par la matrice normale. Nous pouvons alors calculer la quantité d'éclairage qui doit être appliquée au sommet en calculant le produit de la normale transformée et du vecteur directionnel (la direction d'où la lumière vient). Si le résultat est inférieur à zéro, alors on le met à 0. Car une lumière négative n'a pas de sens dans notre cas.</p>

<p>Une fois la quantité de lumière directionnelle calculée, nous pouvons générer la valeur d'éclairage en prenant l'éclairage ambiant et en y ajoutant le produit de la couleur de la lumière directionnelle, et aussi la quantité de la lumière directionnelle à fournir. Comme résultat, nous avons maintenant une valeur RGB qui sera utilisé par le fragment shader pour ajuster la couleur de chaque pixel.</p>

<h3 id="Le_fragment_shader">Le fragment shader</h3>

<p>Le fragment shader a maintenant besoin d'être mis à jour en prenant en compte la quantité de lumière calculée précédemment par le vertex shader:</p>

<pre class="brush: html">&lt;script id="shader-fs" type="x-shader/x-fragment"&gt;
  varying highp vec2 vTextureCoord;
  varying highp vec3 vLighting;

  uniform sampler2D uSampler;

  void main(void) {
    mediump vec4 texelColor = texture2D(uSampler, vec2(vTextureCoord.s, vTextureCoord.t));

    gl_FragColor = vec4(texelColor.rgb * vLighting, texelColor.a);
  }
&lt;/script&gt;
</pre>

<p>Ici nous récupérons la couleur de chaque texel (tas de pixel pour une texture) , comme nous avons fait pour l'exemple précédent, mais avant d'ajuster la couleur du fragment, nous multiplions la couleur des pixels par la quantité de lumière, pour appliquer l'effet d'éclairage.</p>

<p>Et c'est tout !</p>

<p> </p>

<p>{{EmbedGHLiveSample('webgl-examples/tutorial/sample7/index.html', 670, 510) }}</p>

<p><a href="https://github.com/mdn/webgl-examples/tree/gh-pages/tutorial/sample7">Voir le code complet</a> | <a href="http://mdn.github.io/webgl-examples/tutorial/sample7/">Ouvrir cette démo dans une nouvelle page</a></p>

<h2 id="Exercices">Exercices</h2>

<p>Évidemment, ceci est un simple exemple, une implémentation basique de calcul de lumière par sommet. Pour aller plus loin, nous voulons implémenter un calcul de lumière par pixel, mais ceci vous mènera dans la bonne direction. </p>

<p>Vous pouvez aussi implémenter avec la direction de source de lumière, la couleur de la source, la distance, etc..</p>

<p>{{PreviousNext("Web/API/WebGL_API/Tutorial/Using_textures_in_WebGL", "Web/API/WebGL_API/Tutorial/Animating_textures_in_WebGL")}}</p>
