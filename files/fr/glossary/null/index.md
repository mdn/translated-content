---
title: "Null"
slug: Glossary/Null
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

En informatique, une valeur **`null`** représente une référence qui pointe, en général de manière volontaire, vers un {{Glossary("object", "objet")}} ou une adresse invalide ou inexistant. La signification d'une référence nulle varie selon les implémentations des langages.

En {{Glossary("JavaScript")}}, `null` est marqué comme l'une des {{Glossary("Primitive", "valeurs primitives")}}, arce que son comportement est apparemment primitif. Cependant, lorsqu'on utilise l'opérateur [`typeof`](/fr/docs/Web/JavaScript/Reference/Operators/typeof) il retourne `"object"`.

```js
console.log(typeof null); // "object"
```

Ceci est considéré comme [un bug](/fr/docs/Web/JavaScript/Reference/Operators/typeof#typeof_null), mais il est impossible de le corriger car cela casserait trop de scripts.

## Voir aussi

- [Types et structures de données en JavaScript](/fr/docs/Web/JavaScript/Guide/Data_structures)
- L'objet JavaScript global&nbsp;: {{JSxRef("Operators/null", "null")}}
- [Le pointeur `Null`](https://fr.wikipedia.org/wiki/Null) sur Wikipédia
- Termes associés du glossaire&nbsp;:
  - {{Glossary("JavaScript")}}
  - Le type de donnée {{Glossary("string")}}
  - Le type de donnée {{Glossary("number")}}
  - Le type de donnée {{Glossary("bigint")}}
  - Le type de donnée {{Glossary("boolean")}}
  - Le type de donnée {{Glossary("undefined")}}
  - Les objets {{Glossary("Symbol")}}
