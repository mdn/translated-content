---
title: Créer les briques
slug: Games/Tutorials/2D_Breakout_game_pure_JavaScript/Build_the_brick_field
tags:
  - Canvas
  - Casse-Brique
  - Débutant
  - JavaScript
  - Jeu
  - Tutoriel
  - graphique
translation_of: Games/Tutorials/2D_Breakout_game_pure_JavaScript/Build_the_brick_field
original_slug: Games/Workflows/2D_Breakout_game_pure_JavaScript/Build_the_brick_field
---
{{GamesSidebar}}{{IncludeSubnav("/fr/docs/Games")}}

{{PreviousNext("Games/Workflows/2D_Breakout_game_pure_JavaScript/Game_over", "Games/Workflows/2D_Breakout_game_pure_JavaScript/detection_colisions")}}

Il s'agit de la **6ème étape** sur 10 du [Gamedev Canvas tutorial](/fr/docs/Games/Workflows/Breakout_game_from_scratch). Vous pouvez trouver le code source après avoir complété cette leçon à : [Gamedev-Canvas-workshop/lesson6.html](https://github.com/end3r/Gamedev-Canvas-workshop/blob/gh-pages/lesson06.html).

Après avoir modifié la mécanique du Gameplay, nous sommes maintenant en mesure de perdre. Et ça c'est top car on a enfin l'impression de jouer à un vrai jeu. Cependant, ça devient vite ennuyeux si la balle ne fait que rebondir sur la raquette. Ce dont a vraiment besoin un jeu de casse-brique c'est des briques à détruire avec la balle. Et c'est ce que nous allons faire maintenant.

## Mettre en place les variables "Brique"

Le principal objectif de cette leçon est d'avoir quelques lignes de code pour afficher les briques, en utilisant une boucle imbriquée qui va parcourir un tableau à deux dimensions. Cependant nous avons besoin de définir quelques variables pour stocker des informations décrivant les briques, telles que leur largeur, leur hauteur, les colonnes et les lignes, etc. Ajoutez les lignes suivantes dans votre code, sous les variables préalablement déclarées.

```js
var brickRowCount = 3;
var brickColumnCount = 5;
var brickWidth = 75;
var brickHeight = 20;
var brickPadding = 10;
var brickOffsetTop = 30;
var brickOffsetLeft = 30;
```

Ici nous avons défini dans l'ordre le nombre de lignes et de colonnes de briques, mais également une hauteur, une largeur et un espacement (_padding_) entre les briques pour qu'elles ne se touchent pas entre elles et qu'elles ne commencent pas a être tracées sur le bord du canevas.

Nous allons placer nos briques dans un tableau à deux dimensions. Il contiendra les colonnes de briques (c), qui à leur tour contiendront les lignes de briques (r) qui chacune contiendront un objet défini par une position `x` et `y` pour afficher chaque brique sur l'écran.
Ajoutez le code suivant juste en-dessous des variables :

```js
var bricks = [];
for(var c=0; c<brickColumnCount; c++) {
    bricks[c] = [];
    for(var r=0; r<brickRowCount; r++) {
        bricks[c][r] = { x: 0, y: 0 };
    }
}
```

Le code ci-dessus va parcourir les lignes et les colonnes et créer de nouvelles briques. REMARQUE : les objets briques seront également utilisés plus tard afin de détecter les collisions.

## Logique de dessin des briques

Maintenant créons une fonction pour parcourir toutes les briques dans le tableau et les dessiner sur l'écran. Notre code pourrait ressembler à ça :

```js
function drawBricks() {
    for(var c=0; c<brickColumnCount; c++) {
        for(var r=0; r<brickRowCount; r++) {
            bricks[c][r].x = 0;
            bricks[c][r].y = 0;
            ctx.beginPath();
            ctx.rect(0, 0, brickWidth, brickHeight);
            ctx.fillStyle = "#0095DD";
            ctx.fill();
            ctx.closePath();
        }
    }
}
```

Une nouvelle fois, nous parcourons les colonnes et les lignes pour attribuer une position `x` et `y` à chaque brique, et nous dessinons les briques — de taille : `brickWidth` x `brickHeight`  — sur le canevas, pour chaque itération de la boucle. Le problème est que nous les affichons toutes au même endroit, aux coordonnées `(0,0)`. Ce dont nous avons besoin d'inclure ce sont quelques calculs qui vont définir la position `x` et `y` de chaque brique à chaque passage dans la boucle :

```js
var brickX = (c*(brickWidth+brickPadding))+brickOffsetLeft;
var brickY = (r*(brickHeight+brickPadding))+brickOffsetTop;
```

Chaque position `brickX` est déterminée par `brickWidth` + `brickPadding`, multiplié par le nombre de colonnes, `c`, plus `brickOffsetLeft`; la logique pour `brickY` est identique excepté qu'on utilise pour les ligne les valeurs `r`,`brickHeight` et `brickOffsetTop`. Maintenant chaque brique peut être dessinée à la bonne place - en lignes et colonnes, avec un espacement entre les briques, avec un espace par rapport à la gauche et au haut du contour du canvas.

La version finale de la fonction `drawBricks()`, après avoir assigné les valeurs `brickX` et `brickY` comme coordonnées, plutot que `(0,0)` à chaque fois, va ressembler à ceci  — ajouter la fonction ci-dessous après `drawPaddle()` :

```js
function drawBricks() {
    for(var c=0; c<brickColumnCount; c++) {
        for(var r=0; r<brickRowCount; r++) {
            var brickX = (c*(brickWidth+brickPadding))+brickOffsetLeft;
            var brickY = (r*(brickHeight+brickPadding))+brickOffsetTop;
            bricks[c][r].x = brickX;
            bricks[c][r].y = brickY;
            ctx.beginPath();
            ctx.rect(brickX, brickY, brickWidth, brickHeight);
            ctx.fillStyle = "#0095DD";
            ctx.fill();
            ctx.closePath();
        }
    }
}
```

## Afficher les briques

La dernière chose à faire dans cette leçon est d'ajouter un appel à `drawBricks()` quelque part dans la fonction `draw()`, préférablement au début, entre le nettoyage du canevas et le dessin de la balle. Ajoutez la ligne suivante juste en dessous de `drawBall()` :

```js
drawBricks();
```

## Comparez votre code

À ce stade, le jeu a gagné un peu en intérêt :

{{JSFiddleEmbed("https://jsfiddle.net/yumetodo/t1zqmzLp/","","395")}}

Exercice : essayez de changer le nombre de briques dans une colonne ou dans une ligne ou bien leur position.

## Prochaines étapes

Nous avons donc maintenant des briques !  
Mais la balle n'a toujours aucune interaction avec elles. Nous allons donc changer ça dans le chapitre sept : [Détection des collisions](/fr/docs/)

{{PreviousNext("Games/Workflows/2D_Breakout_game_pure_JavaScript/Game_over", "Games/Workflows/2D_Breakout_game_pure_JavaScript/detection_colisions")}}
