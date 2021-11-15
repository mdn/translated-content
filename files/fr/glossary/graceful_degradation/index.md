---
title: Dégradation gracieuse
slug: Glossary/Graceful_degradation
tags:
  - Conception
  - Glossaire
translation_of: Glossary/Graceful_degradation
original_slug: Glossaire/Graceful_degradation
---
**La dégradation gracieuse** est une philosophie de conception centrée sur la création d'un site / application web moderne qui fonctionnera dans les navigateurs les plus récents, mais qui sera remplacé par un contenu et une fonctionnalité essentiels dans les anciens navigateurs, même moins performant.

[Les P](/fr/docs/Learn/Tools_and_testing/Cross_browser_testing/Feature_detection)[olyfills](/fr/docs/Glossaire/Polyfill) peuvent être utilisés pour intégrer des fonctionnalités manquantes avec JavaScript, mais des alternatives acceptables à des fonctionnalités telles que le style et la mise en page doivent être fournies si possible, par exemple en utilisant la cascade CSS ou le comportement de repli HTML. Quelques bons exemples peuvent être trouvés dans [Traitement des problèmes HTML et CSS courants](/fr/docs/Learn/Tools_and_testing/Cross_browser_testing/HTML_and_CSS).

C'est une technique utile qui permet aux développeurs Web de se concentrer sur le développement des meilleurs sites web possibles tout en compensant les problèmes de ces sites auxquels accèdent plusieurs agents utilisateurs inconnus. L'{{Glossary("Progressive enhancement","Amélioration progressive")}} est apparentée mais différente — la dégradation gracieuse est souvent considérée comme allant dans la direction opposée à l'amélioration progressive. En réalité, les deux approches sont valides et peuvent souvent se compléter l'une l'autre.

## En apprendre plus

### Culture générale

- {{Interwiki("wikipedia", "Graceful degradation")}} sur Wikipedia
