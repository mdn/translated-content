---
title: AJAX
slug: Glossary/AJAX
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

Le Javascript et XML asynchrone (**Ajax**, ou **AJAX**) sont une technique de développement Web dans laquelle une application Web récupère le contenu du serveur en effectuant des requêtes HTTP asynchrones et utilise le nouveau contenu pour mettre à jour les parties pertinentes de la page sans nécessiter un chargement complet de la page. Cela peut rendre la page plus réactive, car seules les parties qui doivent être mises à jour sont demandées.

Ajax peut être utilisé pour créer des {{Glossary("SPA", "Applications monopage")}}, dans lesquelles toute l'application web consiste en un seul document, qui utilise Ajax pour mettre à jour son contenu au besoin.

Initialement, Ajax était implémenté en utilisant l'interface {{DOMxRef("XMLHttpRequest")}}, mais l'API {{DOMxRef("Window/fetch", "fetch()")}} est plus adaptée aux applications web modernes&nbsp;: elle est plus puissante, plus flexible et s'intègre mieux avec les technologies fondamentales des applications web telles que les [service workers](/fr/docs/Web/API/Service_Worker_API). Les frameworks Web modernes fournissent également des abstractions pour Ajax.

Cette technique est tellement courante dans le développement web moderne que le terme spécifique «&nbsp;Ajax&nbsp;» est rarement utilisé.

## Voir aussi

- [Apprendre&nbsp;: Faire des requêtes réseau avec JavaScript](/fr/docs/Learn_web_development/Core/Scripting/Network_requests)
- [L'API Fetch](/fr/docs/Web/API/Fetch_API)
- Terme associé du glossaire&nbsp;:
  - {{Glossary("SPA", "Applications monopage")}}
- L'interface {{DOMxRef("XMLHttpRequest")}}
- [AJAX](<https://fr.wikipedia.org/wiki/Ajax_(informatique)>) sur Wikipédia
