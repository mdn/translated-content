---
title: First input delay
slug: Glossary/First_input_delay
l10n:
  sourceCommit: 35bb8cea8badfbc1b3fffbd0ade2699893dc8fe1
---

{{GlossarySidebar}}

La métrique **<i lang="en">first input delay</i>** (FID) (qu'on pourrait traduire en «&nbsp;délai à la première saisie&nbsp;») correspond à la durée entre la première interaction d'une personne avec le site web (que ce soit un clic sur un lien, un appui sur un bouton, ou l'utilisation d'un contrôle implémenté en JavaScript) et le moment où le navigateur est effectivement capable de réagir à cette interaction.

Le défilement et le zoom ne sont pas comptabilisés parmi ces premières interactions.

Le temps entre le moment où le contenu est affiché sur la page et le moment où l'ensemble des fonctionnalités sont réactives pour les humains varie souvent selon la taille et la complexité du JavaScript qui doit être téléchargé, analysé, puis exécuté sur le fil d'exécution principal, et selon les performances de l'appareil sous-jacent. Plus le délai sera important, plus l'expérience de navigation sera dégradée. Réduire le temps d'initialisation du site et éliminer [les tâches longues](/fr/docs/Web/API/PerformanceLongTaskTiming) peut aider à améliorer cette métrique.

## Voir aussi

- [`requestIdleCallback()`](/fr/docs/Web/API/Window/requestIdleCallback)
- [Chargement fainéant (<i lang="en">lazy loading</i>)](/fr/docs/Web/Performance/Guides/Lazy_loading)
