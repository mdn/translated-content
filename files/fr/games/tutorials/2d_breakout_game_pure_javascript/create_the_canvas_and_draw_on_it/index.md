---
title: Créer l'élément Canvas et l'afficher
slug: >-
  Games/Tutorials/2D_Breakout_game_pure_JavaScript/Create_the_Canvas_and_draw_on_it
tags:
  - 2D
  - Canvas
  - Débutant
  - HTML
  - JavaScript
  - Jeux
  - Tutoriel
translation_of: >-
  Games/Tutorials/2D_Breakout_game_pure_JavaScript/Create_the_Canvas_and_draw_on_it
original_slug: >-
  Games/Workflows/2D_Breakout_game_pure_JavaScript/creer_element_canvas_et_afficher
---
<div>{{GamesSidebar}}</div>

<div>{{IncludeSubnav("/fr/docs/Jeux")}}</div>

<p>{{PreviousNext("Games/Workflows/2D_Breakout_game_pure_JavaScript", "Games/Workflows/2D_Breakout_game_pure_JavaScript/Move_the_ball")}}</p>

<p>C'est la <strong>1<sup>re</sup> étape sur</strong> 10 de ce <a href="/fr/docs/Games/Workflows/2D_Breakout_game_pure_JavaScript">tutoriel Gamedev Canvas</a>. Vous pouvez retrouver le code source de cette leçon sur <a href="https://github.com/end3r/Gamedev-Canvas-workshop/blob/gh-pages/lesson01.html">Gamedev-Canvas-workshop/lesson1.html</a>.</p>

<p>Avant d'écrire les fonctionnalités de notre jeu, nous devons créer une structure où le jeu sera rendu. C'est possible en utilisant HTML et l'élément {{htmlelement("canvas")}}.</p>

<h2 id="La_page_HTML_du_jeu">La page HTML du jeu</h2>

<p>La structure de la page HTML est vraiment simple, car tout le jeu sera contenu dans l'élément {{htmlelement("canvas")}}. Avec votre éditeur de texte préféré, créez un nouveau fichier HTML, sauvegardez-le sous le nom <code>index.html</code>, et ajoutez-y le code suivant :</p>

<pre class="brush: html">&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
    &lt;meta charset="utf-8" /&gt;
    &lt;title&gt;Gamedev Canvas Workshop&lt;/title&gt;
    &lt;style&gt;
    	* { padding: 0; margin: 0; }
    	canvas { background: #eee; display: block; margin: 0 auto; }
    &lt;/style&gt;
&lt;/head&gt;
&lt;body&gt;

&lt;canvas id="myCanvas" width="480" height="320"&gt;&lt;/canvas&gt;

&lt;script&gt;
	// JavaScript code goes here
&lt;/script&gt;

&lt;/body&gt;
&lt;/html&gt;</pre>

<p>Dans l'en-tête, nous avons défini l'encodage des caractères (<code>charset</code>), le titre  {{htmlelement("title")}} et quelques règles CSS très simples. Le corps contient les éléments {{htmlelement("canvas")}} et {{htmlelement("script")}}. L'élément {{htmlelement("canvas")}} contiendra le rendu du jeu et l'élément {{htmlelement("script")}} l'emplacement du code JavaScript pour contrôler le jeu. L'élément {{htmlelement("canvas")}} a un identifiant nommé <code>myCanvas</code> qui permettra de le retrouver facilement en JavaScript, et possède des dimensions de 480 pixels de longueur et 320 pixels de hauteur. Tout le code JavaScript que nous allons écrire dans ce tutoriel sera contenu entre la balise ouvrante <code>&lt;script&gt;</code> et la balise fermante <code>&lt;/script&gt;</code>.</p>

<h2 id="Les_bases_de_Canvas">Les bases de Canvas</h2>

<p>Pour utiliser l'élément {{htmlelement("canvas")}}, pour le rendu graphique de notre jeu, nous devons d'abord en donner la référence à JavaScript. Ajoutez le code après la balise ouvrante <code>&lt;script&gt;</code>.</p>

<pre class="brush: js">var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");</pre>

<p>Ici nous avons enregistré la référence à l'élément {{htmlelement("canvas")}} dans une variable nommée <code>canvas</code>. Ensuite, nous créons la variable ctx pour stocker le contexte de rendu 2D  — l'outil réel que nous pouvons utiliser pour peindre sur Canvas.</p>

<p>Voyons un exemple de code qui imprime un carré rouge sur le canevas. Ajoutez ceci en dessous de vos lignes précédentes de JavaScript, puis chargez votre <code>index.html</code> dans un navigateur pour l'essayer.</p>

<pre class="brush: js">ctx.beginPath();
ctx.rect(20, 40, 50, 50);
ctx.fillStyle = "#FF0000";
ctx.fill();
ctx.closePath();</pre>

<p>Toutes les instructions sont entre les méthodes  {{domxref("CanvasRenderingContext2D.beginPath()","beginPath()")}} et {{domxref("CanvasRenderingContext2D.closePath()","closePath()")}} . Nous définissons un rectangle en utilisant {{domxref("CanvasRenderingContext2D.rect()","rect()")}} : les deux premières valeurs spécifient les coordonnées du coin supérieur gauche du rectangle tandis que les deux suivantes spécifient la largeur et la hauteur du rectangle.  Dans notre cas, le rectangle est peint à 20 pixels du côté gauche de l'écran et à 40 pixels du haut, et a une largeur de 50 pixels et une hauteur de 50 pixels, ce qui en fait un carré parfait. La propriété {{domxref("CanvasRenderingContext2D.fillStyle","fillStyle")}} stocke une couleur qui sera utilisée par la méthode {{domxref("CanvasRenderingContext2D.fill()","fill()")}} pour peindre le carré en rouge.</p>

<p>Nous ne sommes pas limités aux rectangles, voici un code pour imprimer un cercle vert. Essayez d'ajouter ceci au bas de votre JavaScript, puis sauvegardez et rafraîchissez :</p>

<pre class="brush: js">ctx.beginPath();
ctx.arc(240, 160, 20, 0, Math.PI*2, false);
ctx.fillStyle = "green";
ctx.fill();
ctx.closePath();</pre>

<p>Comme nous pouvons le voir, nous utilisons à nouveau les méthodes  {{domxref("CanvasRenderingContext2D.beginPath()","beginPath()")}}  et  {{domxref("CanvasRenderingContext2D.closePath()","closePath()")}}  . Entre elles, la partie la plus importante du code ci-dessus est la méthode {{domxref("CanvasRenderingContext2D.arc()","arc()")}} . Elle comporte six paramètres :</p>

<ul>
 <li>les coordonnées <code>x</code> et<code>y</code> du centre de l'arc</li>
 <li>rayon de l'arc</li>
 <li>l'angle de départ et l'angle de fin (pour finir de dessiner le cercle, en radiant)</li>
 <li>direction du dessin (<code>false</code><em>(faux)</em> pour le sens des aiguilles d'une montre, la valeur par défaut, ou <code>true</code> (vrai) pour le sens inverse). Ce dernier paramètre est facultatif.</li>
</ul>

<p>La propriété {{domxref("CanvasRenderingContext2D.fillStyle","fillStyle")}} semble différente par rapport à l'exemple précédent. C'est parce que, tout comme avec CSS, la couleur peut être spécifiée sous la forme d'une valeur hexadécimale, d'un mot-clé, de la fonction <code>rgba ()</code> <em>(RVBA)</em> ou de toute autre méthode disponible pour les couleurs.</p>

<p>Au lieu d'utiliser {{domxref("CanvasRenderingContext2D.fillStyle","fillStyle")}}  et de remplir les formes avec des couleurs, nous pouvons utiliser {{domxref("CanvasRenderingContext2D.stroke()","stroke()")}}  pour ne colorer que le contour exterieur. Essayez d'ajouter ce code à votre JavaScript aussi :</p>

<pre class="brush: js">ctx.beginPath();
ctx.rect(160, 10, 100, 40);
ctx.strokeStyle = "rgba(0, 0, 255, 0.5)";
ctx.stroke();
ctx.closePath();</pre>

<p>Le code ci-dessus affiche un rectangle vide avec des traits bleus. Grâce au canal alpha de la fonction rgba (), la couleur bleue est semi transparente.</p>

<h2 id="Comparez_votre_code">Comparez votre code</h2>

<p>Voici tout le code source de cette première leçon, fonctionnant avec JSFiddle :</p>

<p>{{JSFiddleEmbed("https://jsfiddle.net/end3r/x62h15e2/","","370")}}</p>

<p><strong>Exercice </strong>: essayez de changer la taille et la couleur des formes géométriques.</p>

<h2 id="Prochaines_étapes">Prochaines étapes</h2>

<p>Maintenant, nous avons mis en place le code HTML de base et avons appris un peu sur Canvas, passons au deuxième chapitre et étudions comment <a href="/fr/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript/Move_the_ball">Déplacer une balle sur notre jeu</a>.</p>

<p>{{PreviousNext("Games/Workflows/2D_Breakout_game_pure_JavaScript", "Games/Workflows/2D_Breakout_game_pure_JavaScript/Move_the_ball")}}</p>
