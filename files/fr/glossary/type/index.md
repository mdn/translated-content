---
title: Type
slug: Glossary/Type
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

Le **type** est une caractéristique d'une {{Glossary("value", "valeur")}} qui détermine le genre de données qu'elle peut contenir et la structure que ces données respecteront. Par exemple, un [type de données](/fr/docs/Web/JavaScript/Guide/Data_structures) {{Glossary("boolean", "booléen")}} ne peut contenir qu'une valeur `true` ou `false` à un instant donné, tandis qu'une {{Glossary("string", "chaîne de caractères")}} peut contenir une chaîne de caractères, et un {{Glossary("number", "nombre")}} peut contenir des valeurs numériques de toute nature.

Le type d'une valeur influence aussi les opérations valides sur cette valeur. Par exemple, une valeur de type nombre peut être multipliée par un autre nombre, mais pas par une chaîne — même si cette chaîne contient _seulement_ un nombre, comme la chaîne `"2"`.

Les types nous fournissent également des informations utiles sur la comparaison entre différentes valeurs. La comparaison entre types structurés n'est pas toujours une évidence, car même si la structure de données précédente est la même, il peut exister des structures héritées au sein de la [chaîne de prototypes](/fr/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain).

Si vous n'êtes pas sûr·e du type d'une valeur, vous pouvez utiliser l'opérateur [`typeof`](/fr/docs/Web/JavaScript/Reference/Operators/typeof).

## Voir aussi

- [Type de données](<https://fr.wikipedia.org/wiki/Type_(informatique)>) sur Wikipédia
- [Types de données JavaScript](/fr/docs/Web/JavaScript/Guide/Data_structures)
- Termes associés du glossaire&nbsp;:
  - {{Glossary("JavaScript")}}
  - {{Glossary("string", "Chaîne de caractères")}}
  - {{Glossary("number", "Nombre")}}
  - {{Glossary("bigint", "BigInt")}}
  - {{Glossary("boolean", "Booléen")}}
  - {{Glossary("null", "Valeur nulle")}}
  - {{Glossary("undefined", "Valeur indéfinie")}}
  - {{Glossary("symbol", "Symbole")}}
