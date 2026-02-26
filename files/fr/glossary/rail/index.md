---
title: RAIL
slug: Glossary/RAIL
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

**RAIL**, acronyme de **Response, Animation, Idle, et Load**, est un modèle de performance créé par l'équipe Google Chrome en 2015, axé sur l'expérience utilisateur et les performances dans le navigateur. Le mantra de performance de RAIL est «&nbsp;Concentrez-vous sur l'utilisateur·ice&nbsp;; l'objectif final n'est pas de rendre votre site performant sur un appareil spécifique, c'est de rendre les utilisateur·ice·s heureux.&nbsp;» Il y a 4 étapes d'interaction&nbsp;: chargement de la page, inactivité, réponse à l'entrée, et défilement et animation. Dans l'ordre des acronymes, les principaux principes sont&nbsp;:

- **Response**
  - : Répondez immédiatement aux utilisateur·ice·s, en reconnaissant toute entrée utilisateur·ice en **100ms** ou moins.
- **Animation**
  - : Lors de l'animation, effectuez le rendu de chaque image en moins de **16ms**, dans un souci de cohérence et en évitant les secousses.
- **Idle**
  - : Lorsque vous utilisez le thread JavaScript principal, travaillez par blocs pendant moins de **50ms** pour libérer le thread pour les interactions de l'utilisateur·ice.
- **Load**
  - : Diffusez du contenu interactif en moins de **5 secondes**.

## Voir aussi

- [Timings de performance Web recommandés&nbsp;: combien de temps est trop long](/fr/docs/Web/Performance/Guides/How_long_is_too_long)
