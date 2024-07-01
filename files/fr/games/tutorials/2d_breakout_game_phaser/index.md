---
title: 2D breakout game using Phaser
slug: Games/Tutorials/2D_breakout_game_Phaser
---

{{GamesSidebar}}

{{Next("Games/Workflows/2D_Breakout_game_Phaser/Initialize_the_framework")}}

Dans ce tutoriel étape par étape, nous créons un simple jeu mobile **MDN Breakout** écrit en JavaScript, en utilisant le framework [Phaser](http://phaser.io/).

Chaque étape a des échantillons modifiables, disponibles pour jouer avec, de sorte que vous pouvez voir à quoi devraient ressembler les étapes intermédiaires. Vous apprendrez les bases de l'utilisation du framework Phaser pour implémenter les mécanismes fondamentaux du jeu comme le rendu et le mouvement des images, la détection des collisions, les mécanismes de contrôle, les fonctions d'aide spécifiques aux cadres, les animations et les interpolations, les états gagnants et perdants.

Pour tirer le meilleur parti de cette série d'articles, vous devez déjà avoir des connaissances de base ou intermédiaires en [JavaScript](/fr/Learn/Getting_started_with_the_web/JavaScript_basics). Après avoir parcouru ce tutoriel, vous devriez être capable de construire vos propres jeux Web simples avec Phaser.

![](mdn-breakout-phaser.png)

## Détails de la leçon

Toutes les leçons - et les différentes versions du jeu [MDN Breakout game](https://end3r.github.io/Gamedev-Phaser-Content-Kit/demos/lesson16.html) que nous construisons ensemble - sont [disponibles sur GitHub](https://end3r.github.io/Gamedev-Phaser-Content-Kit/demos/) :

1. [Initialiser le cadre](/fr/docs/Games/Workflows/2D_Breakout_game_Phaser/Initialize_the_framework)
2. [Mise à l'échelle](/fr/docs/Games/Workflows/2D_Breakout_game_Phaser/Scaling)
3. [Charger les actifs et les imprimer à l'écran](/fr/docs/Games/Workflows/2D_Breakout_game_Phaser/Load_the_assets_and_print_them_on_screen)
4. [Déplacer le ballon](/fr/docs/Games/Workflows/2D_Breakout_game_Phaser/Move_the_ball)
5. [Physique](/fr/docs/Games/Workflows/2D_Breakout_game_Phaser/Physics)
6. [Rebondir sur les murs](/fr/docs/Games/Workflows/2D_Breakout_game_Phaser/Bounce_off_the_walls)
7. [Pagaie et commandes du joueur](/fr/docs/Games/Workflows/2D_Breakout_game_Phaser/Player_paddle_and_controls)
8. [Fin de la partie](/fr/docs/Games/Workflows/2D_Breakout_game_Phaser/Game_over)
9. [Construisez le champ de briques](/fr/docs/Games/Workflows/2D_Breakout_game_Phaser/Build_the_brick_field)
10. [Détection de collision](/fr/docs/Games/Workflows/2D_Breakout_game_Phaser/Collision_detection)
11. [Le score](/fr/docs/Games/Workflows/2D_Breakout_game_Phaser/The_score)
12. [Gagnez la partie](/fr/docs/Games/Workflows/2D_Breakout_game_Phaser/Win_the_game)
13. [Extra vies](/fr/docs/Games/Workflows/2D_Breakout_game_Phaser/Extra_lives)
14. [Animations et préadolescents](/fr/docs/Games/Workflows/2D_Breakout_game_Phaser/Animations_and_tweens)
15. [Boutons](/fr/docs/Games/Workflows/2D_Breakout_game_Phaser/Buttons)
16. [Mode de jeu aléatoire](/fr/docs/Games/Workflows/2D_Breakout_game_Phaser/Randomizing_gameplay)

Comme note sur les parcours d'apprentissage — en commençant par le JavaScript pur est le meilleur moyen d'acquérir une solide connaissance du développement de jeux en ligne. Si vous n'êtes pas déjà familier avec le développement de jeux en JavaScript pur, nous vous suggérons de travailler d'abord avec l'homologue de cette série, [2D breakout game using pure JavaScript](/fr/docs/Games/Workflows/2D_Breakout_game_pure_JavaScript).

Après cela, vous pouvez choisir n'importe quel framework que vous voulez et l'utiliser pour vos projets ; nous avons choisi Phaser car c'est un bon framework solide, avec un bon support et une communauté disponible, et un bon ensemble de plugins. Les cadres accélèrent le temps de développement et aident à prendre soin des parties ennuyeuses, vous permettant ainsi de vous concentrer sur les choses amusantes. Cependant, les frameworks ne sont pas toujours parfaits, donc si quelque chose d'inattendu se produit ou si vous voulez écrire des fonctionnalités que le framework ne fournit pas, vous aurez besoin de connaissances en JavaScript pur.

> **Note :** Cette série d'articles peut être utilisée comme matériel pour des ateliers pratiques de développement de jeux. Vous pouvez également utiliser la fonction [Gamedev Phaser Content Kit](https://github.com/end3r/Gamedev-Phaser-Content-Kit) basé sur ce tutoriel si vous voulez donner une conférence sur le développement d'un jeu avec Phaser.

## Prochaines étapes

Ok, commençons ! Aller à la première partie de la série — [Initialize the framework](/fr/docs/Games/Workflows/2D_Breakout_game_Phaser/Initialize_the_framework).

{{Next("Games/Workflows/2D_Breakout_game_Phaser/Initialize_the_framework")}}
