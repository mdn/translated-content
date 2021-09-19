---
title: Appliquer des découpes simples
slug: Web/API/WebGL_API/By_example/Basic_scissoring
tags:
  - Apprendre
  - Débutant
  - Exemple
  - Graphisme
  - Tutoriel
  - WebGL
translation_of: Web/API/WebGL_API/By_example/Basic_scissoring
original_slug: Web/API/WebGL_API/By_example/Appliquer_des_découpes_simples
---
<div>{{IncludeSubnav("/fr/Apprendre")}}</div>

<p>{{PreviousNext("Apprendre/WebGL/Par_exemple/Masque_de_couleur","Apprendre/WebGL/Par_exemple/Tailles_de_canvas_et_WebGL")}}</p>

<p>Dans cet article, on illustre comment dessiner des rectangles et des carrés grâce à des opérations de découpe simple (<em>scissoring</em>).</p>

<p>{{EmbedLiveSample("Appliquer_les_changements_sur_le_buffer_lors_de_la_découpe",660,330)}}</p>

<h3 id="Appliquer_les_changements_sur_le_buffer_lors_de_la_découpe">Appliquer les changements sur le <em>buffer</em> lors de la découpe</h3>

<p>Voici une démonstration simple des opérations appliquées sur le contexte de rendu avec la méthode {{domxref("WebGLRenderingContext.scissor","scissor")}}.</p>

<p>La commande {{domxref("WebGLRenderingContext.clear","clear()")}} permet de dessiner la couleur d'applique (définie à l'aide de {{domxref("WebGLRenderingContext.clearColor","clearColor()")}}) sur tous les pixels du tampon (<em>buffer</em>) de dessin. La commande  {{domxref("WebGLRenderingContext.scissor","scissor()")}} permet quant à elle de définir un masque qui permet de ne modifier que les pixels contenus dans un rectangle donné.</p>

<p>Cet article représente une excellente occasion pour distinguer les <em>pixels</em> des <em>fragments</em>. Un pixel est un élément d'une image (en pratique c'est un point) sur l'écran ou un élément unique du tampon de dessin (l'espace mémoire qui contient les données relatives aux pixels comme les différentes composantes couleur). Un <em>fragment</em> fait référence au pixel manipulé par les processus {{Glossary("WebGL")}}.</p>

<p>Cette distinction existe car la couleur d'un fragment (et ses autres caractéristiques comme la profondeur) peut être manipulée et modifiée à plusieurs reprises avant d'être écrite à l'écran. On a déjà vu comment la couleur d'un fragment pouvait être modifiée au cours des opérations graphiques en appliquant un {{domxref("WebGLRenderingContext.colorMask()","masque de couleur", "", 1)}}. Il existe d'autres cas où les fragments sont ignorés (le pixel n'est pass mis à jour) ou d'autres où ils interagissent avec la valeur du pixel existant (afin de fusionner les couleurs pour les éléments transparents qui composent une scène).</p>

<p>Ici, on voit une autre distinction entre les fragments et les pixels. La découpe est une étape distincte du processus graphique de  {{Glossary("WebGL")}}/{{Glossary("OpenGL")}} (elle est traitée après l'applique de couleur et avant le masque de couleur). Avant que les pixels réels soient mis à jour, les fragments doivent passer le test de la découpe. S'ils réussissent ce test, ils continuent dans le processus de traitement et les pixels correspondants sont mis à jours. S'ils échouent, le processus rejette les fragments et ils ne sont plus gérés pour les traitements ultérieurs, les pixels correspondants ne seront pas mis à jour. Seuls les fragments appartenant à la zone rectangulaire donnée réussissent le test et seuls les pixels correspondants sont mis à jour. Au final, on obtient un rectangle qui est dessiné à l'écran.</p>

<p>Par défaut, l'étape de découpe est désactivée dans le processus. Ici, on l'active avec la méthode  {{domxref("WebGLRenderingContext.enable","enable()")}} (<code>enable()</code> sera utilisée pour activer de nombreuses autres fonctionnalités liées à WebGL) avec la constante <code>SCISSOR_TEST</code>. Là aussi, on voit l'ordre généralement utilisé pour les commandes {{Glossary("WebGL")}}. Tout d'abord, on modifie l'état de WebGL (ici on active le test de découpe et on crée un masque rectangulaire). Une fois que l'état a bien été modifié, on exécute les commandes de dessin (ici <code>clear()</code>) pour commencer le processus de traitement des fragments.</p>

<pre class="brush: html">&lt;p&gt;Le résultat de la découpe.&lt;/p&gt;
&lt;canvas&gt;Il semblerait que votre navigateur
    ne supporte pas l'élément canvas.&lt;/canvas&gt;
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
</pre>

<pre class="brush: js">window.addEventListener("load", function setupWebGL (evt) {
  "use strict"
  window.removeEventListener(evt.type, setupWebGL, false);
  var paragraph = document.querySelector("p");
  var canvas = document.querySelector("canvas");

  // Les deux lignes suivantes définissent la taille,
  // en pixels CSS, du buffer de dessin qui est la même
  // que celle du canevas (définie avec CSS).
  canvas.width = canvas.clientWidth;
  canvas.height = canvas.clientHeight;

  var gl = canvas.getContext("webgl")
    || canvas.getContext("experimental-webgl");
  if (!gl) {
    paragraph.innerHTML = "Échec de la récupération du "
      + "contexte WebGL. Votre navigateur pourrait ne pas "
      + "supporter WebGL.";
    return;
  }
  gl.viewport(0, 0,
    gl.drawingBufferWidth, gl.drawingBufferHeight);

  // On applique une découpe et on définit la taille de
  // la zone de découpe.
  gl.enable(gl.SCISSOR_TEST);
  gl.scissor(40, 20, 60, 170);

  // On applique un jaune uni dans le contexte de rendu.
  gl.clearColor(1.0, 1.0, 0.0, 1.0);
  gl.clear(gl.COLOR_BUFFER_BIT);
}, false);
</pre>

<p>Le code source de cet exemple est également disponible sur <a href="https://github.com/idofilin/webgl-by-example/tree/master/basic-scissoring">GitHub</a>.</p>

<p>{{PreviousNext("Apprendre/WebGL/Par_exemple/Masque_de_couleur","Apprendre/WebGL/Par_exemple/Tailles_de_canvas_et_WebGL")}}</p>
