---
title: Surveillance synthétique
slug: Glossary/Synthetic_monitoring
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

La **surveillance synthétique** consiste à surveiller les performances d'une page dans un environnement «&nbsp;de laboratoire&nbsp;», généralement à l'aide d'outils d'automatisation dans un contexte aussi constant que possible.

Avec une base de référence cohérente, la surveillance synthétique est utile pour mesurer les effets des modifications du code sur les performances. Cependant, elle ne reflète pas nécessairement ce que vivent les utilisateur·ice·s.

La surveillance synthétique consiste à déployer des scripts pour simuler le parcours qu'un·e utilisateur·ice final·e pourrait suivre dans une application web, en rapportant les performances rencontrées par le simulateur. Des exemples d'outils populaires de surveillance synthétique incluent [WebPageTest <sup>(angl.)</sup>](https://www.webpagetest.org/) et [Lighthouse <sup>(angl.)</sup>](https://developer.chrome.com/docs/lighthouse/overview/). Le trafic mesuré ne provient pas de vos utilisateur·ice·s réels, mais est généré de façon synthétique pour collecter des données sur les performances de la page.

Contrairement à la {{Glossary("Real User Monitoring", "surveillance réelle des utilisateur·ice·s")}}, la surveillance synthétique offre une vision restreinte des performances qui ne tient pas compte des différences entre utilisateur·ice·s, ce qui la rend utile pour obtenir des données de base sur les performances d'une application et effectuer des vérifications ponctuelles en environnement de développement. Combinée à d'autres outils, comme la limitation du réseau, elle peut fournir une excellente vision des zones potentiellement problématiques.

## Voir aussi

- Termes associés du glossaire&nbsp;:
  - {{Glossary("Real User Monitoring", "Surveillance réelle des utilisateur·ice·s")}} (RUM)
  - {{Glossary("Beacon", "Balise")}}
- [Surveillance réelle des utilisateur·ice·s (RUM) contre Surveillance synthétique](/fr/docs/Web/Performance/Guides/Rum-vs-Synthetic)
