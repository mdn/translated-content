---
title: Contrôle à la souris
slug: Games/Tutorials/2D_Breakout_game_pure_JavaScript/Mouse_controls
tags:
  - Canevas
  - Contrôles
  - Débutant
  - JavaScript
  - Jeux
  - Souris
  - Tutoriel
translation_of: Games/Tutorials/2D_Breakout_game_pure_JavaScript/Mouse_controls
original_slug: Games/Workflows/2D_Breakout_game_pure_JavaScript/Mouse_controls
---
{{GamesSidebar}}{{IncludeSubnav("/fr/docs/Games")}}

{{PreviousNext("Games/Workflows/2D_Breakout_game_pure_JavaScript/Track_the_score_and_win", "Games/Workflows/2D_Breakout_game_pure_JavaScript/finitions")}}

C'est la **9<sup>e</sup> étape sur** 10 de ce [tutoriel Gamedev Canvas](/fr/docs/Games/Workflows/Breakout_game_from_scratch). Vous pouvez trouver le code source tel qu'il devrait être après avoir terminé cette leçon à l'adresse [Gamedev-Canvas-workshop/lesson9.html](https://github.com/end3r/Gamedev-Canvas-workshop/blob/gh-pages/lesson09.html).

Le jeu lui-même est en fait terminé, alors travaillons à le peaufiner. Nous avons déjà ajouté des commandes au clavier, mais nous pourrions facilement ajouter des commandes à la souris.

## Détecter les mouvements de la souris

Il est encore plus facile de détecter les mouvements de la souris que les pressions sur les touches : il suffit d'écouter l'évènement {{event("mousemove")}}. Ajouter la ligne suivante au même endroit que les autres écouteurs d'événement, juste en dessous de `l'évènement keyup` :

```js
document.addEventListener("mousemove", mouseMoveHandler, false);
```

## Lier le mouvement de la raquette au mouvement de la souris

Nous pouvons mettre à jour la position de la raquette en fonction des coordonnées du pointeur — c'est exactement ce que fera la fonction de manipulation suivante. Ajoutez la fonction ci-dessous à votre code, sous la dernière ligne que vous avez ajoutée :

```js
function mouseMoveHandler(e) {
    var relativeX = e.clientX - canvas.offsetLeft;
    if(relativeX > 0 && relativeX < canvas.width) {
        paddleX = relativeX - paddleWidth/2;
    }
}
```

Dans cette fonction, nous calculons d'abord une valeur `relativeX`, qui est égale à la position horizontale de la souris dans la fenêtre de visualisation (`e.clientX`) moins la distance entre le bord gauche de la toile et le bord gauche de la fenêtre de visualisation (`canvas.offsetLeft`) — en fait, cette valeur est égale à la distance entre le bord gauche du canevas et le pointeur de la souris. Si la position relative du pointeur X est supérieure à zéro et inférieure à la largeur du canevas, le pointeur se trouve dans les limites du canevas, et la position `paddleX` (ancrée sur le bord gauche de la palette) est fixée à la valeur `relativeX` moins la moitié de la largeur de la palette, de sorte que le mouvement sera en fait relatif au milieu de la raquette.

La raquette suivra désormais la position du curseur de la souris, mais comme nous limitons le mouvement à la taille du canevas, elle ne disparaîtra pas complètement d'un côté ou de l'autre.

## Comparez votre code

Voici le code final du chapitre, à vous de vérifier et de le tester pour voir si il y a des différences.

{{JSFiddleEmbed("https://jsfiddle.net/raymondjplante/vt7y5hcp/","","395")}}

Exercice : ajustez les limites du mouvement de la raquette, de sorte que la raquette entière soit visible sur les deux bords du canevas au lieu de seulement la moitié.

## Prochaine étape

Maintenant que nous avons un jeu complet, nous allons terminer notre série de leçons avec quelques petites retouches supplémentaires — [Finitions](/fr/docs/Games/Workflows/Breakout_game_from_scratch/Finishing_up).

{{PreviousNext("Games/Workflows/2D_Breakout_game_pure_JavaScript/Track_the_score_and_win", "Games/Workflows/2D_Breakout_game_pure_JavaScript/finitions")}}
