---
title: Animer des objets avec WebGL
slug: Web/API/WebGL_API/Tutorial/Animating_objects_with_WebGL
tags:
  - Tutoriel
  - WebGL
translation_of: Web/API/WebGL_API/Tutorial/Animating_objects_with_WebGL
original_slug: Web/API/WebGL_API/Tutorial/Animer_des_objets_avec_WebGL
---
<p>{{WebGLSidebar("Tutorial")}} {{PreviousNext("Web/API/WebGL_API/Tutorial/Using_shaders_to_apply_color_in_WebGL", "Web/API/WebGL_API/Tutorial/Creating_3D_objects_using_WebGL") }}</p>

<p>Dans cet exemple, nous allons faire tourner notre carré 2D.</p>

<h2 id="Faire_tourner_le_carré">Faire tourner le carré</h2>

<p>Commençons par faire tourner le carré. La première chose dont nous avons besoin est une variable pour mémoriser la rotation courante du carré :</p>

<pre class="brush: js">var <code>squareRotation</code> = 0.0;
</pre>

<p>Maintenant, nous devons modifier la fonction <code>drawScene() </code>pour appliquer la rotation courante du carré quand on le dessine. Après déplacement à la position de dessin initiale du carré, nous appliquons la rotation comme suit :  </p>

<pre><code>  mat4.rotate(modelViewMatrix,  // matrice de destination
              modelViewMatrix,  // matrice de rotation
              squareRotation,   // rotation en radians
              [0, 0, 1]);       // axe autour duquel tourner</code></pre>

<p>Ceci fait tourner la modelViewMatrix de la valeur courante de <code>squareRotation</code>, autour de l'axe Z.</p>

<p>Pour réaliser effectivement l'animation, nous avons besoin d'ajouter du code qui change la valeur de <code>squareRotation</code> au fil du temps. Nous pouvons faire cela en créant une nouvelle variable pour mémoriser l'instant auquel nous avons réalisé l'animation pour la dernière fois (appelons le <code>then</code>), puis en ajoutant le code suivant à la fin de la fonction principale :</p>

<pre><code>var then = 0;

// Dessiner la scène répétitivement
function render(now) {
  now *= 0.001;  // conversion en secondes
  const deltaTime = now - then;
  then = now;

  drawScene(gl, programInfo, buffers, deltaTime);

  requestAnimationFrame(render);
}
requestAnimationFrame(render);</code></pre>

<p>Ce code utilise <code>requestAnimationFrame</code> pour demander au navigateur d'appeler la fonction "<code>render</code>" à chaque image. <code>requestAnimationFrame</code> nous transmet le temps en millisecondes depuis le chargement de la page. Nous le convertissons en secondes, puis nous lui soustrayons le dernier instant pour calculer <code>deltaTime</code>, qui est le nombre de secondes depuis le rendu de la dernière image. À la fin de drawscene, nous ajoutons le code pour mettre à jour <code>squareRotation</code>.</p>

<pre><code>  squareRotation += deltaTime;</code></pre>

<p>Ce code utilise le laps de temps qui s'est écoulé depuis la dernière fois que nous avons mis à jour la valeur <code>squareRotation</code> pour déterminer de combien faire tourner le carré.</p>

<p>{{EmbedGHLiveSample('webgl-examples/tutorial/sample4/index.html', 670, 510) }}</p>

<p><a href="https://github.com/mdn/webgl-examples/tree/gh-pages/tutorial/sample4">Voir le code complet</a> | <a href="http://mdn.github.io/webgl-examples/tutorial/sample4/">Ouvrir cette démo dans une nouvelle page</a></p>

<p>{{PreviousNext("Web/API/WebGL_API/Tutorial/Using_shaders_to_apply_color_in_WebGL", "Web/API/WebGL_API/Tutorial/Creating_3D_objects_using_WebGL") }}</p>

<p> </p>

<p> </p>
