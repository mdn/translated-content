---
title: Finitions
slug: Games/Tutorials/2D_Breakout_game_pure_JavaScript/Finishing_up
tags:
  - Canevas
  - Débutant
  - JavaScript
  - Jeux
  - Tutoriel
  - requestAnimationFrame
  - vies
translation_of: Games/Tutorials/2D_Breakout_game_pure_JavaScript/Finishing_up
original_slug: Games/Workflows/2D_Breakout_game_pure_JavaScript/finitions
---
<div>{{GamesSidebar}}</div>

<div>{{IncludeSubnav("/fr/docs/Games")}}</div>

<p>{{Previous("Games/Workflows/2D_Breakout_game_pure_JavaScript/Mouse_controls")}}</p>

<p>C'est la dernière étape de ce <a href="/fr/docs/Games/Workflows/Breakout_game_from_scratch">tutoriel Gamedev Canvas</a>. Vous pouvez trouver le code source tel qu'il devrait être après avoir terminé cette leçon à l'adresse <a href="https://github.com/end3r/Gamedev-Canvas-workshop/blob/gh-pages/lesson10.html">Gamedev-Canvas-workshop/lesson10.html</a>.</p>

<p>Il y a toujours des améliorations possibles pour tous les jeux que nous créons. Par exemple, nous pouvons offrir plus d'une vie au joueur. Il peut faire une ou deux erreurs et être encore capable de terminer le jeu. Nous pourrions également améliorer le rendu visuel du jeu.</p>

<h2 id="Donner_des_vies_au_joueur">Donner des vies au joueur</h2>

<p>Mettre en œuvre des vies est assez simple. Ajoutons d'abord une variable pour stocker le nombre de vies à l'endroit où nous avons déclaré nos autres variables :</p>

<pre class="brush: js">var lives = 3;</pre>

<p>L'affichage du compteur de vie est similaire à celui du compteur de points — ajoutez la fonction suivante à votre code, sous la fonction <code>drawScore()</code> :</p>

<pre class="brush: js">function drawLives() {
    ctx.font = "16px Arial";
    ctx.fillStyle = "#0095DD";
    ctx.fillText("Lives: "+lives, canvas.width-65, 20);
}</pre>

<p>Au lieu de mettre immédiatement fin au jeu, nous allons réduire le nombre de vies jusqu'à ce qu'il n'y en ait plus. Nous pouvons également réinitialiser les positions du ballon et de la raquette lorsque le joueur commence sa prochaine vie. Ainsi, dans la fonction <code>draw()</code>, remplacez les trois lignes suivantes :</p>

<pre class="brush: js">alert("GAME OVER");
document.location.reload();
clearInterval(interval); // Needed for Chrome to end game</pre>



<p>Nous pouvons ainsi y ajouter une logique un peu plus complexe, comme indiqué ci-dessous :</p>

<pre class="brush: js">lives--;
if(!lives) {
    alert("GAME OVER");
    document.location.reload();
    clearInterval(interval); // Needed for Chrome to end game
}
else {
    x = canvas.width/2;
    y = canvas.height-30;
    dx = 2;
    dy = -2;
    paddleX = (canvas.width-paddleWidth)/2;
}</pre>

<p>Maintenant, quand la balle frappe le bord inférieur de l'écran, nous soustrayons une vie de la variable <code>lives</code>. S'il n'y a plus de vies, la partie est perdue ; s'il reste encore des vies, alors la position de la balle et la raquette sont remises à zéro, ainsi que le mouvement de la balle.</p>

<h3 id="Afficher_le_compteur_de_vies">Afficher le compteur de vies</h3>

<p>Maintenant, vous devez ajouter un appel à <code>drawLives()</code> dans la fonction <code>draw()</code> et l'ajouter sous l'appel <code>drawScore()</code>.</p>

<pre class="brush: js">drawLives();
</pre>

<h2 id="Améliorer_le_rendu_avec_requestAnimationFrame">Améliorer le rendu avec requestAnimationFrame()</h2>

<p>Maintenant, travaillons sur quelque chose qui n'est pas lié à la mécanique du jeu, mais à la façon dont il est rendu. {{domxref("window.requestAnimationFrame", "requestAnimationFrame")}} aide le navigateur à rendre le jeu mieux que la cadence fixe que nous avons actuellement mise en place en utilisant {{domxref("windowTimers.setInterval()", "setInterval()")}}. Remplacez la ligne suivante :</p>

<pre class="brush: js">var interval = setInterval(draw, 10);</pre>

<p>avec simplement :</p>

<pre class="brush: js">draw();</pre>

<p>et supprimez chaque occurence de :</p>

<pre class="brush: js">clearInterval(interval); // Needed for Chrome to end game
</pre>

<p>Ensuite, tout en bas de la fonction <code>draw()</code> (juste avant l'accolade de fermeture), ajoutez la ligne suivante, ce qui fait que la fonction <code>draw()</code> s'appelle encore et encore :</p>

<pre class="brush: js">requestAnimationFrame(draw);</pre>

<p>La fonction <code>draw()</code> est maintenant exécutée indéfiniment dans une boucle <code>requestAnimationFrame()</code>, mais au lieu de la cadence fixe de 10 millisecondes, nous redonnons le contrôle de la cadence au navigateur. Il synchronisera la cadence en conséquence et ne n'acutalisera l'affichage que lorsque cela sera nécessaire. Cela permet d'obtenir une boucle d'animation plus efficace et plus fluide que l'ancienne méthode <code>setInterval()</code>.</p>

<h2 id="Comparez_votre_code_your_code">Comparez votre code your code</h2>

<p>C'est tout — la version finale du jeu est prête et prête à être lancée !</p>

<p>{{JSFiddleEmbed("https://jsfiddle.net/raymondjplante/dfh2tpu1/","","395")}}</p>

<p><strong>Exercice</strong>: changer le nombre de vies et l'angle de rebond de la balle sur la raquette.</p>

<h2 id="Game_over_-_pour_linstant_!">Game over - pour l'instant !</h2>

<p>Vous avez terminé toutes les leçons - félicitations ! À ce stade, vous devriez maintenant connaître les bases de la manipulation des Canevas et la logique des jeux simples en 2D. C'est maintenant le bon moment pour apprendre quelques frameworks et continuer le développement du jeu. Vous pouvez découvrir le pendant de cette série, le <a href="/fr/docs/Games/Workflows/2D_breakout_game_Phaser">casse-brique 2D utilisant Phaser</a> ou le <a href="/fr/docs/Games/Workflows/HTML5_Gamedev_Phaser_Device_Orientation_FR">tutoriel Cyber Orb</a> construit avec Phaser. Vous pouvez également consulter la section <a href="/fr/docs/Jeux">Jeux sur MDN</a> pour vous inspirer et approfondir vos connaissances.</p>

<p>Vous pouvez également revenir à la <a href="/fr/docs/Games/Workflows/2D_Breakout_game_pure_JavaScript">page d'accueil</a> de cette série de tutoriels. Amusez-vous bien à coder !</p>

<p>{{Previous("Games/Workflows/2D_Breakout_game_pure_JavaScript/Mouse_controls")}}</p>
