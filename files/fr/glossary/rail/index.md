---
title: RAIL
slug: Glossary/RAIL
tags:
  - Glossaire
  - Performance Web
  - RAIL
  - Timings
translation_of: Glossary/RAIL
original_slug: Glossaire/RAIL
---
**RAIL**, acronyme de **Response, Animation, Idle, et Load**, est un modèle de performance créé par l'équipe Google Chrome en 2015, axé sur l'expérience utilisateur et les performances dans le navigateur. Le mantra de performance de RAIL est "Concentrez-vous sur l'utilisateur; l'objectif final n'est pas de rendre votre site performant sur un appareil spécifique, c'est de rendre les utilisateurs heureux." Il y a 4 étapes d'interaction: chargement de la page, inactivité, réponse à l'entrée, et défilement et animation. Dans l'ordre des acronymes, les principaux principes sont:

- **Response**
  - : Répondez immédiatement aux utilisateurs, en reconnaissant toute entrée utilisateur en **100ms** ou moins.
- **Animation**
  - : Lors de l'animation, effectuez le rendu de chaque image en moins de **16ms**, dans un souci de cohérence et en évitant les secousses.
- **Idle**
  - : Lorsque vous utilisez le thread JavaScript principal, travaillez par blocs pendant moins de **50ms** pour libérer le thread pour les interactions de l'utilisateur.
- **Load**
  - : Diffusez du contenu interactif en moins d' **1 seconde**.

## Voir aussi

- [Timings de performance Web recommandés: combien de temps est trop long](/fr/docs/Learn/Performance/How_long_is_too_long)
