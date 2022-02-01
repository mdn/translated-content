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
{{GamesSidebar}}{{IncludeSubnav("/fr/docs/Games")}}

{{Previous("Games/Workflows/2D_Breakout_game_pure_JavaScript/Mouse_controls")}}

C'est la dernière étape de ce [tutoriel Gamedev Canvas](/fr/docs/Games/Workflows/Breakout_game_from_scratch). Vous pouvez trouver le code source tel qu'il devrait être après avoir terminé cette leçon à l'adresse [Gamedev-Canvas-workshop/lesson10.html](https://github.com/end3r/Gamedev-Canvas-workshop/blob/gh-pages/lesson10.html).

Il y a toujours des améliorations possibles pour tous les jeux que nous créons. Par exemple, nous pouvons offrir plus d'une vie au joueur. Il peut faire une ou deux erreurs et être encore capable de terminer le jeu. Nous pourrions également améliorer le rendu visuel du jeu.

## Donner des vies au joueur

Mettre en œuvre des vies est assez simple. Ajoutons d'abord une variable pour stocker le nombre de vies à l'endroit où nous avons déclaré nos autres variables :

```js
var lives = 3;
```

L'affichage du compteur de vie est similaire à celui du compteur de points — ajoutez la fonction suivante à votre code, sous la fonction `drawScore()` :

```js
function drawLives() {
    ctx.font = "16px Arial";
    ctx.fillStyle = "#0095DD";
    ctx.fillText("Lives: "+lives, canvas.width-65, 20);
}
```

Au lieu de mettre immédiatement fin au jeu, nous allons réduire le nombre de vies jusqu'à ce qu'il n'y en ait plus. Nous pouvons également réinitialiser les positions du ballon et de la raquette lorsque le joueur commence sa prochaine vie. Ainsi, dans la fonction `draw()`, remplacez les trois lignes suivantes :

```js
alert("GAME OVER");
document.location.reload();
clearInterval(interval); // Needed for Chrome to end game
```

Nous pouvons ainsi y ajouter une logique un peu plus complexe, comme indiqué ci-dessous :

```js
lives--;
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
}
```

Maintenant, quand la balle frappe le bord inférieur de l'écran, nous soustrayons une vie de la variable `lives`. S'il n'y a plus de vies, la partie est perdue ; s'il reste encore des vies, alors la position de la balle et la raquette sont remises à zéro, ainsi que le mouvement de la balle.

### Afficher le compteur de vies

Maintenant, vous devez ajouter un appel à `drawLives()` dans la fonction `draw()` et l'ajouter sous l'appel `drawScore()`.

```js
drawLives();
```

## Améliorer le rendu avec requestAnimationFrame()

Maintenant, travaillons sur quelque chose qui n'est pas lié à la mécanique du jeu, mais à la façon dont il est rendu. {{domxref("window.requestAnimationFrame", "requestAnimationFrame")}} aide le navigateur à rendre le jeu mieux que la cadence fixe que nous avons actuellement mise en place en utilisant {{domxref("windowTimers.setInterval()", "setInterval()")}}. Remplacez la ligne suivante :

```js
var interval = setInterval(draw, 10);
```

avec simplement :

```js
draw();
```

et supprimez chaque occurence de :

```js
clearInterval(interval); // Needed for Chrome to end game
```

Ensuite, tout en bas de la fonction `draw()` (juste avant l'accolade de fermeture), ajoutez la ligne suivante, ce qui fait que la fonction `draw()` s'appelle encore et encore :

```js
requestAnimationFrame(draw);
```

La fonction `draw()` est maintenant exécutée indéfiniment dans une boucle `requestAnimationFrame()`, mais au lieu de la cadence fixe de 10 millisecondes, nous redonnons le contrôle de la cadence au navigateur. Il synchronisera la cadence en conséquence et ne n'acutalisera l'affichage que lorsque cela sera nécessaire. Cela permet d'obtenir une boucle d'animation plus efficace et plus fluide que l'ancienne méthode `setInterval()`.

## Comparez votre code your code

C'est tout — la version finale du jeu est prête et prête à être lancée !

{{JSFiddleEmbed("https://jsfiddle.net/raymondjplante/dfh2tpu1/","","395")}}

**Exercice**: changer le nombre de vies et l'angle de rebond de la balle sur la raquette.

## Game over - pour l'instant !

Vous avez terminé toutes les leçons - félicitations ! À ce stade, vous devriez maintenant connaître les bases de la manipulation des Canevas et la logique des jeux simples en 2D. C'est maintenant le bon moment pour apprendre quelques frameworks et continuer le développement du jeu. Vous pouvez découvrir le pendant de cette série, le [casse-brique 2D utilisant Phaser](/fr/docs/Games/Workflows/2D_breakout_game_Phaser) ou le [tutoriel Cyber Orb](/fr/docs/Games/Workflows/HTML5_Gamedev_Phaser_Device_Orientation_FR) construit avec Phaser. Vous pouvez également consulter la section [Jeux sur MDN](/fr/docs/Jeux) pour vous inspirer et approfondir vos connaissances.

Vous pouvez également revenir à la [page d'accueil](/fr/docs/Games/Workflows/2D_Breakout_game_pure_JavaScript) de cette série de tutoriels. Amusez-vous bien à coder !

{{Previous("Games/Workflows/2D_Breakout_game_pure_JavaScript/Mouse_controls")}}
