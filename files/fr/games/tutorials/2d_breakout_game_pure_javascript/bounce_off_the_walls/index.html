---
title: Faire rebondir la balle sur les murs
slug: Games/Tutorials/2D_Breakout_game_pure_JavaScript/Bounce_off_the_walls
tags:
  - Animation
  - Canvas
  - Débutant
  - Exemple
  - JavaScript
  - Jeux
  - Tuto
  - Tutoriel
  - detection
  - graphique
translation_of: Games/Tutorials/2D_Breakout_game_pure_JavaScript/Bounce_off_the_walls
original_slug: >-
  Games/Workflows/2D_Breakout_game_pure_JavaScript/Faire_rebondir_la_balle_sur_les_murs
---
<div>{{GamesSidebar}}</div>

<div>{{IncludeSubnav("/fr/docs/Games")}}</div>

<p>{{PreviousNext("Games/Workflows/2D_Breakout_game_pure_JavaScript/Move_the_ball", "Games/Workflows/2D_Breakout_game_pure_JavaScript/Paddle_et_contr%C3%B4le_clavier")}}</p>

<p>C'est la <strong>3<sup>e</sup> étape sur</strong> 10 de ce <a href="/fr/docs/Games/Workflows/2D_Breakout_game_pure_JavaScript">tutoriel Gamedev Canvas</a>. Vous pouvez retrouver le code source de cette leçon sur <a class="external external-icon" href="https://github.com/end3r/Gamedev-Canvas-workshop/blob/gh-pages/lesson01.html" rel="noopener">Gamedev-Canvas-workshop/lesson3.html</a>.</p>

<p>C'est agréable de voir notre balle bouger, mais elle disparaît rapidement de l'écran, ce qui limite le plaisir que nous pouvons avoir avec elle ! Pour y pallier, nous allons mettre en place une détection de collision très simple (qui sera expliquée plus tard en détail) pour faire rebondir la balle sur les quatre bords de la toile.</p>

<h2 id="Détection_des_collisions">Détection des collisions</h2>

<p>Pour détecter la collision, nous vérifierons si la balle touche (entre en collision avec) le mur et, si c'est le cas, nous modifierons la direction de son mouvement en conséquence.<br>
 <br>
 Pour faciliter les calculs, nous allons définir une variable appelée <code>ballRadius</code> qui contiendra le rayon du cercle dessiné et sera utilisée pour les calculs. Ajoutez cette variable à votre code, quelque part en dessous des déclarations de variables existantes :<br>
  </p>

<pre class="brush: js">var ballRadius = 10;</pre>

<p>Mettez maintenant à jour la ligne qui dessine la balle à l'intérieur de la fonction <code>drawBall()</code> :</p>

<pre class="brush: js">ctx.arc(x, y, ballRadius, 0, Math.PI*2);</pre>

<h3 id="Rebondir_en_haut_et_en_bas">Rebondir en haut et en bas</h3>

<p>Il y a 4 murs en tout mais nous allons d'abord nous pencher sur le mur du haut. Nous devons, à chaque rafraichissement du canvas, regarder si la balle touche le bord du haut. Si c'est le cas, alors nous devons inverser la direction de la balle pour créer un effet de limite de zone de jeu. Il ne faut surtout pas oublier que le point d'origine est en haut à gauche ! Nous pouvons donc écrire :</p>

<pre class="brush: js">if(y + dy &lt; 0) {
    dy = -dy;
}</pre>

<p>Si la valeur y de la position de la balle est inférieure à zéro, changez la direction du mouvement sur l'axe y en le rendant égal à son inverse. Si la balle se déplaçait vers le haut à une vitesse de 2 pixels par image, elle se déplacera maintenant "vers le haut" à une vitesse de -2 pixels, ce qui équivaut en fait à se déplacer vers le bas à une vitesse de 2 pixels par image.<br>
 <br>
 Le code ci-dessus traite du rebondissement de la balle sur le bord supérieur, alors traitons maintenant le bord inférieur :</p>

<pre class="brush: js">if(y + dy &gt; canvas.height) {
    dy = -dy;
}</pre>

<p>Si la position en y de la balle est supérieure à  la hauteur du canvas (soit 480 pixels dans cette leçon) on inverse encore la vitesse de la balle.</p>

<p>On peut rassembler les deux conditions en une grâce au "ou" qui s'écrit || en JavaScript :</p>

<pre class="brush: js">if(y + dy &gt; canvas.height || y + dy &lt; 0) {
    dy = -dy;
}</pre>

<p>Si une des deux conditions est vérifiée, alors la vitesse est inversée. Essayez de créer votre propre code pour la gauche et la droite avant de passer à la prochaine sous-partie. Vous verrez que le principe est le même.</p>

<h3 id="Rebondir_à_gauche_et_à_droite">Rebondir à gauche et à droite</h3>

<p>Nous avons couvert les bords supérieur et inférieur, alors pensons à ceux de gauche et de droite. C'est très similaire en fait, il suffit de répéter les instructions pour <code>x</code> au lieu de <code>y</code> :</p>

<pre class="brush: js">if(x + dx &gt; canvas.width || x + dx &lt; 0) {
    dx = -dx;
}

if(y + dy &gt; canvas.height || y + dy &lt; 0) {
    dy = -dy;
}</pre>

<p>À ce stade, vous devez insérer le bloc de code ci-dessus dans la fonction draw(), juste avant l'accolade de fermeture.</p>

<h3 id="La_balle_disparaît_toujours!">La balle disparaît toujours!</h3>

<p>Testez votre code à ce stade, et vous serez impressionné — nous avons maintenant une balle qui rebondit sur les quatre bords de la toile ! Mais nous avons un autre problème — lorsque la balle frappe un mur, elle s'y enfonce légèrement avant de changer de direction :</p>

<p><img alt="" src="ball-in-wall.png"></p>

<p>C'est parce que nous calculons le point de collision entre le mur et le centre de la balle, alors que nous devrions le faire pour sa circonférence. La balle devrait rebondir juste après avoir touché le mur, et non pas lorsqu'elle est déjà à mi-chemin dans le mur, alors ajustons un peu nos déclarations pour inclure cela. Mettez à jour le dernier code que vous avez ajouté :</p>

<pre class="brush: js">if(x + dx &gt; canvas.width-ballRadius || x + dx &lt; ballRadius) {
    dx = -dx;
}
if(y + dy &gt; canvas.height-ballRadius || y + dy &lt; ballRadius) {
    dy = -dy;
}</pre>

<p>Lorsque la distance entre le centre de la balle et le bord du mur est exactement la même que le rayon de la balle, cela change la direction du mouvement. Soustraire le rayon de la largeur d'un bord et l'ajouter à l'autre nous donne l'impression d'une détection de collision correcte — la balle rebondit sur les murs comme elle devrait le faire.</p>

<h2 id="Comparez_votre_code">Comparez votre code</h2>

<p>Vérifions encore une fois le code fini pour cette partie par rapport à ce que vous avez, et jouons une partie :</p>

<p>{{JSFiddleEmbed("https://jsfiddle.net/end3r/redj37dc/","","395")}}</p>

<p><strong>Exercice</strong>: essayez de changer la couleur de la balle à chaque fois que celle-ci tape un mur.</p>

<h2 id="Dans_le_prochain_chapitre">Dans le prochain chapitre</h2>

<p>Nous sommes maintenant arrivés au stade où notre balle se déplace et reste sur le plateau de jeu. Dans le quatrième chapitre, nous examinerons la mise en place d'une raquette contrôlable - voir<a href="/fr/docs/Games/Workflows/Breakout_game_from_scratch/Paddle_and_keyboard_controls"> Raquette et contrôle au clavier</a>. {PreviousNext("Games/Workflows/2D_Breakout_game_pure_JavaScript/Move_the_ball", "Games/Workflows/2D_Breakout_game_pure_JavaScript/Paddle_et_contr%C3%B4le_clavier")}}</p>
