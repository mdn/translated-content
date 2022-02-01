---
title: Fin de partie
slug: Games/Tutorials/2D_Breakout_game_pure_JavaScript/Game_over
tags:
  - Canvas
  - Débutant
  - Fin de partie
  - JavaScript
  - Jeux
  - Tutoriel
  - game over
translation_of: Games/Tutorials/2D_Breakout_game_pure_JavaScript/Game_over
original_slug: Games/Workflows/2D_Breakout_game_pure_JavaScript/Game_over
---
{{GamesSidebar}}{{IncludeSubnav("/fr/docs/Games")}}

{{PreviousNext("Games/Workflows/2D_Breakout_game_pure_JavaScript/Paddle_et_contr%C3%B4le_clavier", "Games/Workflows/2D_Breakout_game_pure_JavaScript/Build_the_brick_field")}}

Voici la **5ème étape** sur 10 du [Gamedev Canvas tutorial](/fr/docs/Games/Workflows/Breakout_game_from_scratch). Vous pouvez trouver le code source comme il devrait être après avoir terminé cette leçon sur [Gamedev-Canvas-workshop/lesson5.html](https://github.com/end3r/Gamedev-Canvas-workshop/blob/gh-pages/lesson05.html).

C'est sympa de regarder la balle rebondir contre les murs et de pouvoir bouger la raquette, mais à part ça, le jeu ne fait rien, il n'y a pas de progression ni de but final. Il serait bien, du point de vue du gameplay, de pouvoir perdre. La façon de perdre dans le casse briques est simple. Si vous loupez la balle avec le paddle et la laissez atteindre le bas de l'écran, la partie est terminée.

## Intégrer une fin de partie

Essayons d'intégrer une fin de partie dans le jeu . Voyons une partie du code de la troisième leçon, où nous faisions rebondir la balle contre les murs :

```js
if(x + dx > canvas.width-ballRadius || x + dx < ballRadius) {
    dx = -dx;
}

if(y + dy > canvas.height-ballRadius || y + dy < ballRadius) {
    dy = -dy;
}
```

Au lieu de permettre à la balle de rebondir sur les quatre murs, nous n'en autoriserons que trois désormais — gauche, haut et droite. Toucher le mur du bas mettra fin à la partie.

Nous allons  donc modifier le second bloc `if` (qui gère le déplacement sur l'axe vertical, y) en y ajoutant un `else if` qui déclenchera un Game Over si la balle entre en collision avec le mur du bas. Pour l'instant nous allons rester simple, afficher un message d'alerte et redémarrer le jeu en rechargeant la page.

Tout d'abord remplacer l'appel initial à `setInterval()`

```js
setInterval(draw, 10);
```

par

```js
var interval = setInterval(draw, 10);
```

Puis remplacez la seconde instruction `if` par le code suivant:

```js
if(y + dy < ballRadius) {
    dy = -dy;
} else if(y + dy > canvas.height-ballRadius) {
    alert("GAME OVER");
    document.location.reload();
    clearInterval(interval); // Needed for Chrome to end game
}
```

## Faire rebondir la balle sur la raquette

La dernière chose à faire dans cette leçon est de créer une sorte de détection de collision entre la raquette et la balle, de sorte qu'elle puisse rebondir et revenir dans la zone de jeu. La chose la plus facile à faire est de vérifier si le centre de la balle se  trouve entre les bords droit et gauche du paddle. Mettez à jour le dernier bout de code que vous venez de modifier, comme-ci dessous :

```js
if(y + dy < ballRadius) {
    dy = -dy;
} else if(y + dy > canvas.height-ballRadius) {
    if(x > paddleX && x < paddleX + paddleWidth) {
        dy = -dy;
    }
    else {
        alert("GAME OVER");
        document.location.reload();
        clearInterval(interval);
    }
}
```

Si la balle entre en collision avec le mur du bas, nous devons vérifier si elle touche la raquette. Si c'est le cas, la balle rebondit et revient dans la zone de jeu. Sinon, le jeu est terminé comme avant.

## Comparez votre code

Voici le code fonctionnel avec lesquel vous pouvez comparer le vôtre :

{{JSFiddleEmbed("https://jsfiddle.net/end3r/z4zy79fo/","","395")}}

**Exercice: Faites en sorte que la balle accélère quand elle touche la raquette.**

## Prochaine étape

Nous avons déja bien avancé et notre jeu est devenu plus intéressant depuis que vous pouvez perdre ! Mais il manque encore quelque chose. Rendons-nous au sixième chapitre — [Créer le champs de briques](/fr/docs/Games/Workflows/2D_Breakout_game_pure_JavaScript/Build_the_brick_field) — et créons quelques briques que la balle pourra détruire.

{{PreviousNext("Games/Workflows/2D_Breakout_game_pure_JavaScript/Paddle_et_contr%C3%B4le_clavier", "Games/Workflows/2D_Breakout_game_pure_JavaScript/Build_the_brick_field")}}
