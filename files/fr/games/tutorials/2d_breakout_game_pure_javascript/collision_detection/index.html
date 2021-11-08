---
title: Détection de collisions
slug: Games/Tutorials/2D_Breakout_game_pure_JavaScript/Collision_detection
tags:
  - Canvas
  - JavaScript
  - Jeu
  - collision
  - detection
  - totoriel
translation_of: Games/Tutorials/2D_Breakout_game_pure_JavaScript/Collision_detection
original_slug: Games/Workflows/2D_Breakout_game_pure_JavaScript/detection_colisions
---
<div>{{GamesSidebar}}</div>

<div>{{IncludeSubnav("/fr/docs/Games")}}</div>

<p>{{PreviousNext("Games/Workflows/2D_Breakout_game_pure_JavaScript/Build_the_brick_field", "Games/Workflows/2D_Breakout_game_pure_JavaScript/Track_the_score_and_win")}}</p>

<p>Il s'agit de la <strong>7ème étape</strong> sur 10 du <a href="/fr/docs/Games/Workflows/Breakout_game_from_scratch">Gamedev Canvas tutorial</a>. Vous pouvez trouver le code source tel qu'il devrait être après avoir complété cette leçon à : <a href="https://github.com/end3r/Gamedev-Canvas-workshop/blob/gh-pages/lesson07.html">Gamedev-Canvas-workshop/lesson7.html</a>.</p>

<p>Les briques apparaissent à l'écran, mais le jeu n'est toujours pas intéressant car la balle les traverse. Nous devons ajouter une détection des collisions afin qu’elle puisse rebondir sur les briques et les casser.</p>

<p>C'est notre décision, bien sûr, de mettre ça en œuvre, mais il peut être difficile de calculer si la balle touche le rectangle ou non, car il n'y a pas de fonction d'aide dans Canvas pour cela. Dans l'intérêt de ce tutoriel, nous le ferons de la manière la plus simple possible. Nous vérifierons si le centre de la balle entre en collision avec l'une des briques données. Cela ne donnera pas toujours un résultat parfait, et il existe des moyens beaucoup plus sophistiqués de détecter des collisions, mais cela fonctionnera assez bien pour vous apprendre les concepts de base.</p>

<h2 id="Une_fonction_de_détection_de_collision">Une fonction de détection de collision</h2>

<p><br>
 Pour commencer, nous voulons créer une fonction de détection de collision qui va parcourir toutes les briques et comparer la position de chaque brique avec les coordonnées de la balle lorsque chaque image est dessinée. Pour une meilleure lisibilité du code, nous allons définir la variable <code>b</code> pour stocker l’objet brique dans la boucle de la détection de collision:</p>

<pre class="brush: js">function collisionDetection() {
    for(var c=0; c&lt;brickColumnCount; c++) {
        for(var r=0; r&lt;brickRowCount; r++) {
            var b = bricks[c][r];
            // calculs
        }
    }
}</pre>

<p>Si le centre de la balle se trouve à l'intérieur des coordonnées d'une de nos briques, nous changerons la direction de la balle. Pour que le centre de la balle soit à l'intérieur de la brique, les quatre affirmations suivantes doivent être vraies :</p>

<ul>
 <li>La position x de la balle est supérieure à la position x de la brique.</li>
 <li>La position x de la balle est inférieure à la position x de la brique plus sa largeur.</li>
 <li>La position y de la balle est supérieure à la position y de la brique.</li>
 <li>La position y de la balle est inférieure à la position y de la brique plus sa hauteur.</li>
</ul>

<p>Écrivons cela sous forme de code:</p>

<pre class="brush: js">function collisionDetection() {
    for(var c=0; c&lt;brickColumnCount; c++) {
        for(var r=0; r&lt;brickRowCount; r++) {
            var b = bricks[c][r];
<strong>            if(x &gt; b.x &amp;&amp; x &lt; b.x+brickWidth &amp;&amp; y &gt; b.y &amp;&amp; y &lt; b.y+brickHeight) {
                dy = -dy;
            }</strong>
        }
    }
}</pre>

<p>Ajoutez le bloc ci-dessus à votre code, sous la fonction <code>keyUpHandler()</code> .</p>

<h2 id="Faire_disparaître_les_briques_après_quelles_aient_été_touchées">Faire disparaître les briques après qu'elles aient été touchées</h2>

<p>Le code ci-dessus fonctionnera comme vous le souhaitez et la balle changera de direction. Le problème est que les briques restent là où elles sont. Nous devons trouver un moyen de nous débarrasser de celles que nous avons déjà touchées avec la balle. Nous pouvons le faire en ajoutant un paramètre supplémentaire pour indiquer si nous voulons ou non afficher chaque brique à l’écran. Dans la partie du code où nous initialisons les briques, ajoutons une propriété <code>status</code> à chaque brique. Mettez à jour la partie suivante du code comme indiqué par la ligne en évidence:</p>

<pre class="brush: js; highlight:[5]">var bricks = [];
for(var c=0; c&lt;brickColumnCount; c++) {
    bricks[c] = [];
    for(var r=0; r&lt;brickRowCount; r++) {
        <strong>bricks[c][r] = { x: 0, y: 0, status: 1 };</strong>
    }
}</pre>

<p>Nous vérifierons ensuite la valeur de la propriété <code>status</code> de chaque brique dans la fonction <code>drawBricks</code><code>()</code> avant de la dessiner. Si <code>status</code> vaut <code>1</code>, dessinez-la, mais s'il vaut <code>0</code>, la balle a été touchée et nous ne voulons pas la voir sur l'écran. Mettez à jour votre fonction <code>drawBricks</code><code>()</code> comme suit:</p>

<pre class="brush: js; highlight:[4,5,6,7,8,9,10,11,12,13,14]">function drawBricks() {
    for(var c=0; c&lt;brickColumnCount; c++) {
        for(var r=0; r&lt;brickRowCount; r++) {
            <strong>if(bricks[c][r].status == 1) {</strong>
                var brickX = (c*(brickWidth+brickPadding))+brickOffsetLeft;
                var brickY = (r*(brickHeight+brickPadding))+brickOffsetTop;
                bricks[c][r].x = brickX;
                bricks[c][r].y = brickY;
                ctx.beginPath();
                ctx.rect(brickX, brickY, brickWidth, brickHeight);
                ctx.fillStyle = "#0095DD";
                ctx.fill();
                ctx.closePath();
            <strong>}</strong>
        }
    }
}</pre>

<h2 id="Suivi_et_mise_à_jour_de_létat_dans_la_fonction_de_détection_de_collision">Suivi et mise à jour de l'état dans la fonction de détection de collision</h2>

<p>Nous devons maintenant impliquer la propriété de <code>status</code> de brique dans la fonction <code>collisionDetection()</code>: si la brique est active (son statut est <code>1</code>), nous vérifierons si une collision a lieu ; Si une collision se produit, nous allons définir l'état de la brique donnée sur <code>0</code> afin qu'elle ne soit pas affichée à l'écran. Mettez à jour votre fonction <code>collisionDetection()</code> comme indiqué ci-dessous:</p>

<pre class="brush: js; highlight:[5,6,7,8,9,10]">function collisionDetection() {
    for(var c=0; c&lt;brickColumnCount; c++) {
        for(var r=0; r&lt;brickRowCount; r++) {
            var b = bricks[c][r];
            <strong>if(b.status == 1) {</strong>
                if(x &gt; b.x &amp;&amp; x &lt; b.x+brickWidth &amp;&amp; y &gt; b.y &amp;&amp; y &lt; b.y+brickHeight) {
                    dy = -dy;
                   <strong> b.status = 0;</strong>
                }
            <strong>}</strong>
        }
    }
}</pre>

<h2 id="Activer_notre_détection_de_collision">Activer notre détection de collision</h2>

<p>La dernière chose à faire est d’ajouter un appel à la fonction <code>collisionDetection ()</code> à notre fonction <code>draw()</code> principale. Ajoutez la ligne suivante à la fonction <code>draw ()</code>, juste en dessous de l'appel <code>drawPaddle()</code>:</p>

<pre class="brush: js">collisionDetection();
</pre>

<h2 id="Comparez_votre_code">Comparez votre code</h2>

<p>La détection de collision de la balle est maintenant vérifiée sur chaque image, avec chaque brique. Maintenant, nous pouvons détruire des briques ! : -</p>

<p>{{JSFiddleEmbed("https://jsfiddle.net/yumetodo/mkwtxgc3/242/","","395")}}</p>

<p>Exercice: changez la couleur de la balle lorsqu'elle frappe une brique.</p>

<h2 id="Prochaine_étape">Prochaine étape</h2>

<p>Nous ne sommes plus très loin de la fin ;  poursuivons ! Dans le huitième chapitre, nous verrons comment<a href="/fr/docs/Games/Workflows/Breakout_game_from_scratch/Track_the_score_and_win"> Track the score and win</a>.</p>

<p>{{PreviousNext("Games/Workflows/2D_Breakout_game_pure_JavaScript/Build_the_brick_field", "Games/Workflows/2D_Breakout_game_pure_JavaScript/Track_the_score_and_win")}}</p>
