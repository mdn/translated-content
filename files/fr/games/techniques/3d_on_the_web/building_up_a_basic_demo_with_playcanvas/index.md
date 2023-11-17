---
title: Building up a basic demo with PlayCanvas
slug: Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_PlayCanvas
---

{{GamesSidebar}}

**PlayCanvas** est un populaire moteur 3D WebGL de jeu, originellement concu par Will Eastcott et Dave Evans. Il est disponible en [open-source sur GitHub](https://github.com/playcanvas/engine), avec un [éditeur](http://developer.playcanvas.com/en/user-manual/designer/) en ligne et une bonne [documentation](http://developer.playcanvas.com/en/). L'éditeur en ligne est gratuit pour les projets publics avec jusqu'à deux membres d'équipe, mais il y a aussi des [plans payants](https://playcanvas.com/plans) si vous vous lancez dans un projet commercial privé avec plus de développeurs.

![Site PlayCanvas](playcanvas-cover.png)

## Jeux et Démos

PlayCanvas a publié quelques démos populaires présentant ses fonctionnalités.

- [Tanx](http://playcanv.as/p/aP0oxhUr) est un jeu de char multijoueur dans lequel vous pouvez conduire votre char, en tirant sur d'autres joueurs au fur et à mesure.
- [Swooop](http://playcanv.as/p/JtL2iqIH) est un jeu de vol où vous pilotez votre avion autour d'une île magique tout en collectant des bijoux et du carburant.
- Des visualisations comme the [Star Lord](http://playcanv.as/b/FQbBsJTd) et [BMW i8](http://playcanv.as/p/RqJJ9oU9) mettent également en valeur les possibilités du moteur.

![](playcanvas-demos.png)

> **Note :** Consultez la liste des [démos](https://playcanvas.com/explore) pour trouver plus d'exemples.

## Moteur vs Éditeur

Le moteur peut lui même être utilisé comme une bibliotheque standard en incluant directement ses fichiers JavaScript dans votre code HTML, vous permettant de commencer à coder instantanémment. De plus l'ensemble d'outils de PlayCanvas s'accompagne d'un éditeur en ligne vous permettant d'ajouter des éléments à la scène par glisser déposer — un formidable mode de création de jeux et autres applications nécessitant des scènes si vous êtes meilleur designer que codeur. Ces approches sont différentes mais se valent dans l'atteinte des objectifs.

## Moteur PlayCanvas

Conçu pour les navigateurs modernes, PlayCanvas est un moteur de jeu 3D complet intégrant le chargement de ressources, un système d'entité et de composants, une manipulation avancée des graphismes, un moteur de collision et de physique (conçu avec [ammo.js](https://github.com/kripken/ammo.js/)), la gestion du son et des simplifications pour la gestion des entrées de nombreux dispositifs (y compris les manettes de jeu). C'est une liste assez impressionnante de sonctionnalités — observez-en quelques-unes en action en consultant la rubrique [Conception d'une démo de base avec PlayCanvas](/fr/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_PlayCanvas/engine) pour plus de détails.

## Éditeur PlayCanvas

Au lieu de tout coder à parir de zéro, vous pouvez également utiliser l'éditeur en ligne. Cela peut être un environnement de travail plus agréable si vous n'êtes pas très orienté codage. Voici la [construction d'une démo de base avec l'éditeur de PlayCanvas](/fr/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_PlayCanvas/editor) pour plus de détails.

## Résumé

Votre approche sera déterminante. Les designers préféreront utiliser l'éditeur en ligne alors que les programmeurs voudront avoir le contrôle total de l'environnement de codage et utiliseront probablement les fichiers source du moteur. Ce qui est intéressant est que vous êtes libre dans le choix des outils vous convenant le mieux.
