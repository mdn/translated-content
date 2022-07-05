---
title: Jeu de casse-briques 2D en pur JavaScript
slug: Games/Tutorials/2D_Breakout_game_pure_JavaScript
tags:
  - 2D
  - Canvas
  - Débutant
  - JavaScript
  - Jeux
  - Tutoriel
translation_of: Games/Tutorials/2D_Breakout_game_pure_JavaScript
original_slug: Games/Workflows/2D_Breakout_game_pure_JavaScript
---
{{GamesSidebar}}

{{Next("Games/Workflows/2D_Breakout_game_pure_JavaScript/creer_element_canvas_et_afficher")}}

Dans ce tutoriel, nous allons créer pas à pas un jeu de casse-briques MDN, créé entièrement avec JavaScript et sans framework, et rendu avec la balise HTML5 {{htmlelement("canvas")}}.

Chaque étape est modifiable en direct, et disponible en test pour que vous puissiez voir ce à quoi les étapes intermédiaires devraient ressembler. Vous apprendrez les bases d'utilisations de l'élément {{htmlelement("canvas")}} pour implémenter des mécaniques de base du jeu vidéo, comme charger et déplacer des images, les détections de collisions, les mécanismes de contrôle, et les conditions de victoire/défaite.

Pour comprendre la plupart des articles de ce tutoriel, vous devez déjà avoir un niveau basique ou intermédiaire en [JavaScript](/fr/Learn/Getting_started_with_the_web/JavaScript_basics). À la fin de ce tutoriel, vous serez capable de créer vos propres jeux Web.

![](mdn-breakout-gameplay.png)

## Détail de la leçon

Toutes les leçons — et les différentes versions de ce [jeu de casse-brique MDN](http://breakout.enclavegames.com/lesson10.html) que nous allons créer ensemble — sont [disponibles sur GitHub](https://github.com/end3r/Canvas-gamedev-workshop) :

1.  [Créer l'élément canvas et dessiner dessus](/fr/docs/Games/Workflows/2D_Breakout_game_pure_JavaScript/creer_element_canvas_et_afficher)
2.  [Déplacer la balle](/fr/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript/Move_the_ball)
3.  [Rebondir sur les murs](/fr/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript/Bounce_off_the_walls)
4.  [Contrôles clavier](/fr/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript/Paddle_and_keyboard_controls)
5.  [Jeu terminé](/fr/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript/Game_over)
6.  [Construire le mur de briques](/fr/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript/Build_the_brick_field)
7.  [Détection des collisions](/fr/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript/Collision_detection)
8.  [Afficher le score et gagner](/fr/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript/Track_the_score_and_win)
9.  [Contrôles souris](/fr/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript/Mouse_controls)
10. [Finir](/fr/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript/Finishing_up)

Commencer avec du Javascript pur et dur est le meilleur moyen d'acquérir des connaissances de développement de jeu web. Après ceci, vous pourrez prendre n'importe quel "framework" et l'utiliser pour vos projets. Les "frameworks" sont des outils créés avec le langage Javascript ; donc, même si vous voulez travailler avec ces derniers, c'est toujours bon d'apprendre le langage lui-même pour savoir ce qu'il se passe exactement. Les "frameworks" améliorent la vitesse de développement et aident à traiter les parties les moins intéressantes du jeu, mais si quelque chose ne fonctionne pas comme prévu, vous pouvez toujours essayer de déboguer ou juste écrire vos propre solutions en Javascript.

> **Note :** Si vous êtes intéressé par l'apprentissage du développement un jeu web 2D avec un "framework", consultez la série [Jeu de casse-tête 2D avec Phaser](/fr/docs/Games/Tutorials/2D_breakout_game_Phaser).

> **Note :** Cette série d'articles peut être utilisée comme matériel pour des ateliers pratiques de développement de jeux. Vous pouvez également utiliser le [Gamedev Canvas Content Kit](https://github.com/end3r/Gamedev-Canvas-Content-Kit) basé sur ce tutoriel si vous voulez faire une présentation sur le développement de jeux en général .

## Prochaines étapes

Ok, c'est parti&nbsp;! Rendez-vous au premier chapitre pour commencer — Créer l'élément canvas et dessiner dessus

{{Next("Games/Workflows/2D_Breakout_game_pure_JavaScript/creer_element_canvas_et_afficher")}}
