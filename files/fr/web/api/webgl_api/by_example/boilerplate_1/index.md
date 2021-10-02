---
title: Modèle 1
slug: Web/API/WebGL_API/By_example/Boilerplate_1
tags:
  - Apprendre
  - Débutant
  - Exemple
  - Tutoriel
  - WebGL
translation_of: Web/API/WebGL_API/By_example/Boilerplate_1
original_slug: Web/API/WebGL_API/By_example/Modèle_1
---
<div>{{IncludeSubnav("/fr/Apprendre")}}</div>

<p>{{PreviousNext("Apprendre/WebGL/Par_exemple/Tailles_de_canvas_et_WebGL","Apprendre/WebGL/Par_exemple/Créer_une_animation_avec_découpe_et_applique")}}</p>

<p>Dans cet article, on décrit les fragments de code qui seront réutilisés pour les exemples suivants (où ils seront masqués pour une meilleur lisibilité). Parmi ce code, on définit une fonction JavaScript utilitaire qui permet de simplifier l'initialisation de WebGL.</p>

<p>{{EmbedLiveSample("Socle_pour_l'initialisation_du_contexte_WebGL",660,400)}}</p>

<h2 id="Socle_pour_l'initialisation_du_contexte_WebGL">Socle pour l'initialisation du contexte WebGL</h2>

<p>Nous avons vu plusieurs fois les mêmes morceaux de {{Glossary("HTML")}}, {{Glossary("CSS")}} et {{Glossary("JavaScript")}}. Nous allons donc les cacher par la suite afin de mieux nous concentrer sur les parties du code qui sont pertinentes pour l'apprentissage de {{Glossary("WebGL")}}.</p>

<p>Plus précisément, le code HTML contiendra</p>

<ul>
 <li>Un élément {{HTMLElement("p")}} qui décrira l'exemple et qui permettra d'afficher des messages d'erreur</li>
 <li>Un élément {{HTMLElement("canvas")}}</li>
 <li>Un bouton (élément {{HTMLElement("button")}})</li>
</ul>

<p>Les règles CSS s'appliqueront aux éléments <code>body</code>, <code>canvas</code> et <code>button</code>. Les éléments supplémentaires pour le code CSS et HTML seront détaillés dans les pages des exemples concernés.</p>

<p>Dans les exemples suivants, on utilisera la fonction utilitaire JavaScript <code>getRenderingContext</code> pour initialiser {{domxref("WebGLRenderingContext","le contexte de rendu WebGL", "", 1)}}. Grâce aux exemples précédents, vous devriez pouvoir comprendre le rôle de cette fonction. Pour résumer, celle-ci</p>

<ul>
 <li>Obtient le contexte de rendu de la part de l'élément <code>canvas</code></li>
 <li>Initialise le buffer de dessin</li>
 <li>Nettoie le buffer avec <code>clear</code></li>
 <li>Applique le contexte initialisé</li>
</ul>

<p>S'il y a une erreur, la fonction affiche un message d'erreur et renvoie <code>null</code>.</p>

<p>Enfin, tout le code JavaScript est exécuté par une fonction immédiatement appelée (une technique plutôt commune avec JavaScript). La déclaration de la fonction et son invocation seront cachées.</p>

<pre class="brush: html">&lt;p&gt;[ Un texte qui décrit l'exemple. ]&lt;/p&gt;
&lt;button&gt;[ Un bouton optionnel pour les interactions. ]&lt;/button&gt;
&lt;canvas&gt;Il semblerait que votre navigateur ne supporte
    pas le canevas HTML5.&lt;/canvas&gt;
</pre>

<pre class="brush: css">body {
  text-align : center;
}
canvas {
  display : block;
  width : 280px;
  height : 210px;
  margin : auto;
  padding : 0;
  border : none;
  background-color : black;
}
button {
  display : block;
  font-size : inherit;
  margin : auto;
  padding : 0.6em;
}
</pre>

<pre class="brush: js">function getRenderingContext() {
  var canvas = document.querySelector("canvas");
  canvas.width = canvas.clientWidth;
  canvas.height = canvas.clientHeight;
  var gl = canvas.getContext("webgl")
    || canvas.getContext("experimental-webgl");
  if (!gl) {
    var paragraph = document.querySelector("p");
    paragraph.innerHTML = "Échec de l'obtention du "
      + "contexte WebGL."
      + "Votre navigateur ou appareil ne supporte "
      + "peut-être pas WebGL.";
    return null;
  }
  gl.viewport(0, 0,
    gl.drawingBufferWidth, gl.drawingBufferHeight);
  gl.clearColor(0.0, 0.0, 0.0, 1.0);
  gl.clear(gl.COLOR_BUFFER_BIT);
  return gl;
}
</pre>

<p>Le code source de cet exemple est également disponible sur <a href="https://github.com/idofilin/webgl-by-example/tree/master/boilerplate-1">GitHub</a>.</p>

<p>{{PreviousNext("Apprendre/WebGL/Par_exemple/Tailles_de_canvas_et_WebGL","Apprendre/WebGL/Par_exemple/Créer_une_animation_avec_découpe_et_applique")}}</p>
