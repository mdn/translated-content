---
title: Primitive
slug: Glossary/Primitive
---

{{GlossarySidebar}}

Une **primitive** (valeur primitive ou structure de donnée primitive) est une donnée qui n'est pas un {{Glossary("object","objet")}} et n'a pas de {{glossary("method","méthode")}}. En {{Glossary("JavaScript")}}, il y a 7 types de données primitives: {{Glossary("String")}}, {{Glossary("Number")}}, {{Glossary("Boolean")}}, {{Glossary("Null")}}, {{Glossary("undefined")}}, {{Glossary("Symbol")}}, {{Glossary("Bigint")}} (nouveauté d'{{Glossary("ECMAScript")}} 2020).

La plupart du temps, une valeur primitive est représentée directement au plus bas niveau dans l'implémentation du langage.

Toutes les primitives sont **non-mutables** (ne peuvent pas être modifiées).

## Primitives JavaScript encapsulées dans des objets

Excepté dans les cas de `null` ou `undefined`, pour chaque valeur primitive il existe un objet équivalent qui la contient:

- {{jsxref("String")}} pour la primitive `string` ;
- {{jsxref("Number")}} pour la primitive `number` ;
- {{jsxref("Boolean")}} pour la primitive `boolean`;
- {{jsxref("Symbol")}} pour la primitive `symbol`;
- {{jsxref("Bigint")}} pour la primitive `bigint`;

La méthode [`valueOf()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Object/valueOf) de ces objets retourne la valeur primitive encapsulée correspondante.

## Voir aussi

### Culture générale

- [Introduction aux types de données en JavaScript](/fr/docs/Web/JavaScript/Data_structures)
- [Type](<https://fr.wikipedia.org/wiki/Type_(informatique)>) sur Wikipédia
