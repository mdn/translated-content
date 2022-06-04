---
title: Suivre le score et gagner
slug: Games/Tutorials/2D_Breakout_game_pure_JavaScript/Track_the_score_and_win
translation_of: Games/Tutorials/2D_Breakout_game_pure_JavaScript/Track_the_score_and_win
original_slug: Games/Workflows/2D_Breakout_game_pure_JavaScript/Track_the_score_and_win
---
{{GamesSidebar}}

{{PreviousNext("Games/Workflows/2D_Breakout_game_pure_JavaScript/detection_colisions", "Games/Workflows/2D_Breakout_game_pure_JavaScript/Mouse_controls")}}

Ceci est la **8<sup>e</sup>** étape de ce [tutoriel Gamedev Canvas](/fr/docs/Games/Workflows/Breakout_game_from_scratch). Vous pouvez trouver le code source tel qu'il devrait être après avoir terminé cette leçon à : [Gamedev-Canvas-workshop/lesson8.html](https://github.com/end3r/Gamedev-Canvas-workshop/blob/gh-pages/lesson08.html).

Détruire les briques est vraiment cool, mais pour être encore meilleur le jeu pourrait attribuer des points pour chaque brique touchée et compter le score total.

## Calculer le score

Si vous pouvez voir votre score durant le jeu, vous pourrez impressioner vos amis. Vous avez besoin d'une variable pour stocker le score. Ajoutez ce qui suit dans votre JavaScript après le reste de vos variables :

```js
var score = 0;
```

Vous avez aussi besoin d'une fonction `drawScore()`, pour créer et mettre à jour l'affichage du score. Ajoutez ce qui suit après la fonction de détection de collision `collisionDetection()`:

```js
function drawScore() {
    ctx.font = "16px Arial";
    ctx.fillStyle = "#0095DD";
    ctx.fillText("Score: "+score, 8, 20);
}
```

Dessiner du texte sur un canvas revient à dessiner une forme. La définition de la police est identique à celle en CSS — vous pouvez définir la taille et le type avec la méthode   {{domxref("CanvasRenderingContext2D.font","font()")}}. Puis utilisez {{domxref("CanvasRenderingContext2D.fillStyle()","fillStyle()")}} pour définir la couleur de la police et {{domxref("CanvasRenderingContext2D.fillText","fillText()")}} pour définir la position du texte sur le canevas. Le premier paramètre est le texte lui-même — le code ci-dessus indique le nombre actuel de points — et les deux derniers paramètres sont les coordonnées où le texte est placé sur le canevas.

Pour attribuer le score à chaque collision avec une brique, ajoutez une ligne à la fonction `collisionDetection()` afin d'incrémenter la valeur de la variable score à chaque détection d'une collision. Ajoutez à votre code la ligne mise en évidence ci-dessous :

```js
function collisionDetection() {
    for(var c=0; c<brickColumnCount; c++) {
        for(var r=0; r<brickRowCount; r++) {
            var b = bricks[c][r];
            if(b.status == 1) {
                if(x > b.x && x < b.x+brickWidth && y > b.y && y < b.y+brickHeight) {
                    dy = -dy;
                    b.status = 0;
                    score++;
                }
            }
        }
    }
}
```

Appelez la fonction `drawScore()` dans la fonction `draw()` pour garder le score à jour à chaque nouvelle frame — ajoutez la ligne suivante dans la fonction `draw()`, en dessous de l'appel à `drawPaddle()`&nbsp;:

```js
drawScore();
```

## Ajoutez un message de victoire lorsque toutes les briques ont été détruites

Le comptage des points fonctionne bien, mais vous ne les compterez pas indéfiniment. Alors qu'en est-il du score lorsque toutes les briques ont été détruites ? Après tout c'est l'objectif principal du jeu. Vous devez donc afficher un message de victoire si toutes les briques ont été détruites. Ajoutez la section mise en évidence dans votre fonction `collisionDetection()`:

```js
function collisionDetection() {
    for(var c=0; c<brickColumnCount; c++) {
        for(var r=0; r<brickRowCount; r++) {
            var b = bricks[c][r];
            if(b.status == 1) {
                if(x > b.x && x < b.x+brickWidth && y > b.y && y < b.y+brickHeight) {
                    dy = -dy;
                    b.status = 0;
                    score++;
                    if(score == brickRowCount*brickColumnCount) {
                        alert("C'est gagné, Bravo!");
                        document.location.reload();
                        clearInterval(interval); // Needed for Chrome to end game
                    }
                }
            }
        }
    }
}
```

Grâce à ça, les utilisateurs peuvent réellement gagner le jeu. La fonction `document.location.reload()` recharge la page et redémarre le jeu au clic sur le bouton d'alerte.

## Comparez votre code

Le code réalisé fonctionne et ressemble à cela, au cas où vous voudriez le comparer avec le vôtre :

{{JSFiddleEmbed("https://jsfiddle.net/raymondjplante/b3z2Lpu9/","","395")}}

**Exercice**: Ajoutez plus de points par brique touchée et indiquez le nombre de points gagnés dans la boîte d'alerte de fin de partie.

## Prochaine étape

Le jeu est plutôt réussi à ce stade. Dans la prochaine leçon, vous le rendrez plus attraynt en ajoutant le [contrôle à la souris](/fr/docs/Games/Workflows/Breakout_game_from_scratch/Mouse_controls).

{{PreviousNext("Games/Workflows/2D_Breakout_game_pure_JavaScript/detection_colisions", "Games/Workflows/2D_Breakout_game_pure_JavaScript/Mouse_controls")}}
