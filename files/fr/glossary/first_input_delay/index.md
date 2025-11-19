---
title: First input delay (FID)
slug: Glossary/First_input_delay
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

La métrique **<i lang="en">first input delay</i>** (FID) (qu'on pourrait traduire en «&nbsp;délai à la première saisie&nbsp;») correspond à la durée entre la première interaction d'une personne avec le site web (que ce soit un clic sur un lien, un appui sur un bouton, ou l'utilisation d'un contrôle implémenté en JavaScript) et le moment où le navigateur est effectivement capable de réagir à cette interaction.

> [!WARNING]
> FID a été conçu par Google comme l'une des métriques [Core Web Vital <sup>(angl.)</sup>](https://web.dev/articles/vitals) mais a été remplacé par {{Glossary("Interaction to Next Paint", "Interaction to Next Paint")}} (INP) [en mai 2024 <sup>(angl.)</sup>](https://web.dev/blog/inp-cwv-launch).

Il s'agit de la durée, en millisecondes, entre la première interaction d'un·e utilisateur·ice sur une page web et la réponse du navigateur à cette interaction. Le défilement et le zoom ne sont pas comptabilisés parmi cette métrique.

Le temps entre le moment où le contenu est affiché sur la page et le moment où l'ensemble des fonctionnalités sont réactives pour les humains varie souvent selon la taille et la complexité du JavaScript qui doit être téléchargé, analysé, puis exécuté sur le fil d'exécution principal, et selon les performances de l'appareil sous-jacent. Plus le délai sera important, plus l'expérience de navigation sera dégradée. Réduire le temps d'initialisation du site et éliminer [les tâches longues](/fr/docs/Web/API/PerformanceLongTaskTiming) peut aider à améliorer cette métrique.

## Voir aussi

- [«&nbsp;Interaction to Next Paint&nbsp;» devient officiellement un Core Web Vital <sup>(angl.)</sup>](https://web.dev/blog/inp-cwv-launch) sur web.dev (2024)
