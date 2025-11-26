---
title: Dégradation gracieuse
slug: Glossary/Graceful_degradation
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

**La dégradation gracieuse** est une philosophie de conception centrée sur la création d'un site / application web moderne qui fonctionnera dans les navigateurs les plus récents, mais qui sera remplacé par un contenu et une fonctionnalité essentiels dans les anciens navigateurs, même moins performant.

{{Glossary("Polyfill", "Les prothèses d'émulations")}} peuvent être utilisés pour intégrer des fonctionnalités manquantes avec JavaScript, mais des alternatives acceptables à des fonctionnalités telles que le style et la mise en page doivent être fournies si possible, par exemple en utilisant la cascade CSS ou le comportement de repli HTML.

C'est une technique utile qui permet aux développeurs Web de se concentrer sur le développement des meilleurs sites web possibles tout en compensant les problèmes de ces sites auxquels accèdent plusieurs agents utilisateurs inconnus. L'{{Glossary("Progressive enhancement", "amélioration progressive")}} est apparentée mais différente — la dégradation gracieuse est souvent considérée comme allant dans la direction opposée à l'amélioration progressive. En réalité, les deux approches sont valides et peuvent souvent se compléter l'une l'autre.

## Voir aussi

- [Implémenter la détection de fonctionnalités](/fr/docs/Learn_web_development/Extensions/Testing/Feature_detection)
- Termes associés du glossaire&nbsp;:
  - {{Glossary("Polyfill", "Prothèse d'émulation")}}
  - {{Glossary("Progressive enhancement", "Amélioration progressive")}}
- [Tolérance aux pannes](https://fr.wikipedia.org/wiki/Tol%C3%A9rance_aux_pannes) sur Wikipédia
