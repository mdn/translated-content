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
{{GamesSidebar}}{{IncludeSubnav("/fr/docs/Games")}}

{{PreviousNext("Games/Workflows/2D_Breakout_game_pure_JavaScript/Build_the_brick_field", "Games/Workflows/2D_Breakout_game_pure_JavaScript/Track_the_score_and_win")}}

Il s'agit de la **7ème étape** sur 10 du [Gamedev Canvas tutorial](/fr/docs/Games/Workflows/Breakout_game_from_scratch). Vous pouvez trouver le code source tel qu'il devrait être après avoir complété cette leçon à : [Gamedev-Canvas-workshop/lesson7.html](https://github.com/end3r/Gamedev-Canvas-workshop/blob/gh-pages/lesson07.html).

Les briques apparaissent à l'écran, mais le jeu n'est toujours pas intéressant car la balle les traverse. Nous devons ajouter une détection des collisions afin qu’elle puisse rebondir sur les briques et les casser.

C'est notre décision, bien sûr, de mettre ça en œuvre, mais il peut être difficile de calculer si la balle touche le rectangle ou non, car il n'y a pas de fonction d'aide dans Canvas pour cela. Dans l'intérêt de ce tutoriel, nous le ferons de la manière la plus simple possible. Nous vérifierons si le centre de la balle entre en collision avec l'une des briques données. Cela ne donnera pas toujours un résultat parfait, et il existe des moyens beaucoup plus sophistiqués de détecter des collisions, mais cela fonctionnera assez bien pour vous apprendre les concepts de base.

## Une fonction de détection de collision

Pour commencer, nous voulons créer une fonction de détection de collision qui va parcourir toutes les briques et comparer la position de chaque brique avec les coordonnées de la balle lorsque chaque image est dessinée. Pour une meilleure lisibilité du code, nous allons définir la variable `b` pour stocker l’objet brique dans la boucle de la détection de collision:

```js
function collisionDetection() {
    for(var c=0; c<brickColumnCount; c++) {
        for(var r=0; r<brickRowCount; r++) {
            var b = bricks[c][r];
            // calculs
        }
    }
}
```

Si le centre de la balle se trouve à l'intérieur des coordonnées d'une de nos briques, nous changerons la direction de la balle. Pour que le centre de la balle soit à l'intérieur de la brique, les quatre affirmations suivantes doivent être vraies :

- La position x de la balle est supérieure à la position x de la brique.
- La position x de la balle est inférieure à la position x de la brique plus sa largeur.
- La position y de la balle est supérieure à la position y de la brique.
- La position y de la balle est inférieure à la position y de la brique plus sa hauteur.

Écrivons cela sous forme de code:

```js
function collisionDetection() {
    for(var c=0; c<brickColumnCount; c++) {
        for(var r=0; r<brickRowCount; r++) {
            var b = bricks[c][r];
            if(x > b.x && x < b.x+brickWidth && y > b.y && y < b.y+brickHeight) {
                dy = -dy;
            }
        }
    }
}
```

Ajoutez le bloc ci-dessus à votre code, sous la fonction `keyUpHandler()` .

## Faire disparaître les briques après qu'elles aient été touchées

Le code ci-dessus fonctionnera comme vous le souhaitez et la balle changera de direction. Le problème est que les briques restent là où elles sont. Nous devons trouver un moyen de nous débarrasser de celles que nous avons déjà touchées avec la balle. Nous pouvons le faire en ajoutant un paramètre supplémentaire pour indiquer si nous voulons ou non afficher chaque brique à l’écran. Dans la partie du code où nous initialisons les briques, ajoutons une propriété `status` à chaque brique. Mettez à jour la partie suivante du code comme indiqué par la ligne en évidence:

```js
var bricks = [];
for(var c=0; c<brickColumnCount; c++) {
    bricks[c] = [];
    for(var r=0; r<brickRowCount; r++) {
        bricks[c][r] = { x: 0, y: 0, status: 1 };
    }
}
```

Nous vérifierons ensuite la valeur de la propriété `status` de chaque brique dans la fonction ` drawBricks``() ` avant de la dessiner. Si `status` vaut `1`, dessinez-la, mais s'il vaut `0`, la balle a été touchée et nous ne voulons pas la voir sur l'écran. Mettez à jour votre fonction ` drawBricks``() ` comme suit:

```js
function drawBricks() {
    for(var c=0; c<brickColumnCount; c++) {
        for(var r=0; r<brickRowCount; r++) {
            if(bricks[c][r].status == 1) {
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
}
```

## Suivi et mise à jour de l'état dans la fonction de détection de collision

Nous devons maintenant impliquer la propriété de `status` de brique dans la fonction `collisionDetection()`: si la brique est active (son statut est `1`), nous vérifierons si une collision a lieu ; Si une collision se produit, nous allons définir l'état de la brique donnée sur `0` afin qu'elle ne soit pas affichée à l'écran. Mettez à jour votre fonction `collisionDetection()` comme indiqué ci-dessous:

```js
function collisionDetection() {
    for(var c=0; c<brickColumnCount; c++) {
        for(var r=0; r<brickRowCount; r++) {
            var b = bricks[c][r];
            if(b.status == 1) {
                if(x > b.x && x < b.x+brickWidth && y > b.y && y < b.y+brickHeight) {
                    dy = -dy;
                    b.status = 0;
                }
            }
        }
    }
}
```

## Activer notre détection de collision

La dernière chose à faire est d’ajouter un appel à la fonction `collisionDetection ()` à notre fonction `draw()` principale. Ajoutez la ligne suivante à la fonction `draw ()`, juste en dessous de l'appel `drawPaddle()`:

```js
collisionDetection();
```

## Comparez votre code

La détection de collision de la balle est maintenant vérifiée sur chaque image, avec chaque brique. Maintenant, nous pouvons détruire des briques ! : -

{{JSFiddleEmbed("https://jsfiddle.net/yumetodo/mkwtxgc3/242/","","395")}}

Exercice: changez la couleur de la balle lorsqu'elle frappe une brique.

## Prochaine étape

Nous ne sommes plus très loin de la fin ;  poursuivons ! Dans le huitième chapitre, nous verrons comment [Track the score and win](/fr/docs/Games/Workflows/Breakout_game_from_scratch/Track_the_score_and_win).

{{PreviousNext("Games/Workflows/2D_Breakout_game_pure_JavaScript/Build_the_brick_field", "Games/Workflows/2D_Breakout_game_pure_JavaScript/Track_the_score_and_win")}}
