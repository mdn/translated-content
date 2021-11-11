---
title: Déplacer la balle
slug: Games/Tutorials/2D_Breakout_game_pure_JavaScript/Move_the_ball
tags:
  - 2D
  - Boucle
  - Canevas
  - Débutant
  - JavaScript
  - Mouvement
  - Tutoriel
translation_of: Games/Tutorials/2D_Breakout_game_pure_JavaScript/Move_the_ball
original_slug: Games/Workflows/2D_Breakout_game_pure_JavaScript/Move_the_ball
---
<div>{{GamesSidebar}}</div>

<div>{{IncludeSubnav("/fr/docs/Games")}}</div>

<p>{{PreviousNext("Games/Workflows/2D_Breakout_game_pure_JavaScript/creer_element_canvas_et_afficher", "Games/Workflows/2D_Breakout_game_pure_JavaScript/Faire_rebondir_la_balle_sur_les_murs")}}</p>

<p>Voici la deuxième étape de ce <a href="/fr/docs/Games/Workflows/2D_Breakout_game_pure_JavaScript">tutoriel</a>. Vous pouvez retrouver le code source de cette leçon sur <a href="https://github.com/end3r/Gamedev-Canvas-workshop/blob/gh-pages/lesson02.html">Gamedev-Canvas-workshop/lesson2.html</a>.</p>

<p>Nous avons vu dans l'article précédent comment dessiner une balle, maintenant déplaçons là. Techniquement, nous afficherons la balle sur l'écran, puis nous l'effacerons et ensuite nous la repeindrons dans une position légèrement différente et ceci à chaque image afin de donner l'impression d'un mouvement (tout comme le fonctionnement du mouvement dans les films).</p>

<h2 id="Définir_une_boucle_de_dessin">Définir une boucle de dessin</h2>

<p>Afin que le dessin soit mis à jour sur le canevas à chaque image, nous allons définir une fonction <code>draw()</code> qui sera exécutée en continu et qui utilisera des variables pour les positions des sprites, etc. Pour qu'une fonction s'exécute de façon répétée avec JavaScript, on pourra utiliser les méthodes {{domxref("WindowTimers.setInterval()", "setInterval()")}} ou {{domxref("window.requestAnimationFrame()", "requestAnimationFrame()")}}.</p>

<p>Supprimez tout le JavaScript que vous avez actuellement dans votre HTML à l'exception des deux premières lignes puis ajoutez ce qui suit en dessous de ces lignes. La fonction <code>draw()</code> sera exécutée toutes les 10 millisecondes (environ) grâce à <code>setInterval</code> :</p>

<pre class="brush: js">function draw() {
  // le code pour dessiner
}
setInterval(draw, 10);</pre>

<p>Grâce à la nature infinie de <code>setInterval</code>, la fonction <code>draw()</code> sera appelée toutes les 10 millisecondes, sans arrêt jusqu'à ce que nous y mettions un terme. Maintenant, dessinons la balle — ajoutons le code ci-dessous à notre fonction <code>draw()</code> :</p>

<pre class="brush: js">ctx.beginPath();
ctx.arc(50, 50, 10, 0, Math.PI*2);
ctx.fillStyle = "#0095DD";
ctx.fill();
ctx.closePath();
</pre>

<p>Essayez votre code mis à jour maintenant, la balle devrait être repeinte sur chaque image.</p>

<h2 id="Déplacer_la_balle">Déplacer la balle</h2>

<p>Pour le moment, vous ne voyez pas la balle "repeinte" car elle ne bouge pas. Améliorons tout ça. Pour commencer, au lieu d'une position bloquée à (50,50), nous allons définir un point de départ en bas et au milieu du canevas grâce aux variables <code>x</code> et <code>y</code> que nous utiliserons pour définir la position où le cercle est dessiné.</p>

<p>Ajoutez d'abord les deux lignes suivantes au-dessus de votre fonction <code>draw()</code> pour définir <code>x</code> et <code>y</code> :</p>

<pre class="brush: js">var x = canvas.width/2;
var y = canvas.height-30;
</pre>

<p>Ensuite, mettez à jour la fonction <code>draw()</code> afin d'utiliser les variables x et y dans la méthode {{domxref("CanvasRenderingContext2D.arc()","arc()")}} , comme indiqué dans la ligne mise en évidence ci-dessous :</p>

<pre class="brush: js; highlight:[3]">function draw() {
  ctx.beginPath();
<strong>  ctx.arc(x, y, 10, 0, Math.PI*2);</strong>
  ctx.fillStyle = "#0095DD";
  ctx.fill();
  ctx.closePath();
}
</pre>

<p>Nous voici à la partie importante : nous voulons ajouter une valeur à <code>x</code> et <code>y</code> après que chaque image ait été dessinée afin de faire croire que la balle bouge. On définit ces valeurs comme <code>dx</code> et <code>dy</code> avec comme valeurs respectives 2 et -2. Ajoutez le code après la déclaration des variables <code>x</code> et <code>y</code> :</p>

<pre class="brush: js">var dx = 2;
var dy = -2;
</pre>

<p>La dernière chose à faire est de mettre à jour <code>x</code> et <code>y</code> avec nos variables <code>dx</code> et  <code>dy</code> sur chaque image, de sorte que la balle sera peinte dans la nouvelle position à chaque nouvelle image. Ajoutez les deux nouvelles lignes, indiquées ci-dessous, à votre fonction <code>draw()</code> :</p>

<pre class="brush: js">function draw() {
  ctx.beginPath();
  ctx.arc(x, y, 10, 0, Math.PI*2);
  ctx.fillStyle = "#0095DD";
  ctx.fill();
  ctx.closePath();
  x += dx;
  y += dy;
}</pre>

<p>Enregistrez à nouveau votre code et essayez-le dans votre navigateur. Vous devriez avoir le résultat suivant : ça fonctionne mais on a une trainée laissée par la balle derrière elle :</p>

<p><img alt="" src="ball-trail.png"></p>

<h2 id="Effacer_le_canevas_avant_chaque_image_frame">Effacer le canevas avant chaque image (<em>frame</em>)</h2>

<p>La balle laisse une trace parce que qu'une nouveau cercle est dessiné sur chaque frame sans qu'on enlève le précédent. Pas d'inquiétude, il existe un moyen d'effacer le contenu du canevas : {{domxref("CanvasRenderingContext2D.clearRect()","clearRect()")}}. Cette méthode prend en compte quatre paramètres: les coordonnées x et y du coin supérieur gauche d'un rectangle et les coordonnées x et y du coin inférieur droit d'un rectangle. Toute la zone couverte par ce rectangle sera effacée.</p>

<p>Ajoutez la nouvelle ligne en surbrillance ci-dessous à la fonction <code>draw()</code> :</p>

<pre class="brush: js; highlight:[2]">function draw() {
<strong>  ctx.clearRect(0, 0, canvas.width, canvas.height);</strong>
  ctx.beginPath();
  ctx.arc(x, y, 10, 0, Math.PI*2);
  ctx.fillStyle = "#0095DD";
  ctx.fill();
  ctx.closePath();
  x += dx;
  y += dy;
}
</pre>

<p>Enregistrez votre code et essayez à nouveau. Cette fois, vous verrez la balle se déplacer sans laisser de trace. Toutes les 10 millisecondes, le canvas est effacé, la balle est dessinée sur une position donnée et les valeurs <code>x</code> et <code>y</code> sont mises à jour pour l'image suivante (en anglais, on parle de "<em>frame"</em>).</p>

<h2 id="Nettoyer_notre_code">Nettoyer notre code</h2>

<p>Dans les prochains articles, nous allons ajouter de plus en plus de d'instructions à la fonction <code>draw()</code>. Mieux vaut donc la garder aussi simple et propre que possible. Commençons par déplacer le code s'occupant de dessiner de la balle vers une fonction séparée.</p>

<p>Remplacez la fonction <code>draw()</code> existante par les deux fonctions suivantes :</p>

<pre class="brush: js">function drawBall() {
  ctx.beginPath();
  ctx.arc(x, y, 10, 0, Math.PI*2);
  ctx.fillStyle = "#0095DD";
  ctx.fill();
  ctx.closePath();
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawBall();
  x += dx;
  y += dy;
}</pre>

<h2 id="Comparez_votre_code">Comparez votre code</h2>

<p>Vous pouvez vérifier le code de cet article avec la démo qui suit et jouer avec pour mieux comprendre comment il fonctionne :</p>

<p>{{JSFiddleEmbed("https://jsfiddle.net/end3r/3x5foxb1/","","395")}}</p>

<p>Exercice : Essayez de changer la vitesse de la balle en mouvement ou la direction dans laquelle elle se déplace.</p>

<h2 id="Prochaines_étapes">Prochaines étapes</h2>

<p>Nous avons dessiné nottre balle et elle se déplace mais elle ne cesse de disparaître du bord de notre canevas. Dans le troisième chapitre, nous verrons comment <a href="/fr/docs/Games/Workflows/2D_Breakout_game_pure_JavaScript/Faire_rebondir_la_balle_sur_les_murs">faire rebondir la balle</a> contre les bords.</p>

<p>{{PreviousNext("Games/Workflows/2D_Breakout_game_pure_JavaScript/creer_element_canvas_et_afficher", "Games/Workflows/2D_Breakout_game_pure_JavaScript/Faire_rebondir_la_balle_sur_les_murs")}}</p>
