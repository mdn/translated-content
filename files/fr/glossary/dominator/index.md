---
title: Dominant
slug: Glossary/Dominator
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

En théorie des graphes, le nœud A **domine** le nœud B si tous les chemins du nœud racine vers B passent par A.

Ce concept est important pour le {{Glossary("garbage collection","ramasse-miettes")}} (ou récupérateur de mémoire) car cela signifie que B n'est accessible que par A. Ainsi, si le ramasse-miettes trouve A inaccessible et éligible à la récupération, alors B sera également inaccessible et éligible à la récupération. Donc, les objets que A domine contribuent à la taille retenue de A&nbsp;: c'est-à-dire la quantité totale de mémoire qui pourrait être libérée si A lui-même était libéré.

## Voir aussi

- [Le ramasse-miettes ou garbage collection](/fr/docs/Web/JavaScript/Guide/Memory_management#le_ramasse-miettes_ou_garbage_collection)
- [Ensemble dominant](https://fr.wikipedia.org/wiki/Ensemble_dominant) sur Wikipédia
- [Dominants](https://firefox-source-docs.mozilla.org/devtools-user/memory/dominators/index.html)
