---
title: Tableau (Array)
slug: Glossary/Array
l10n:
  sourceCommit: 7a551aaa034fbada3eb99e6fc924a0313b78307f
---

{{GlossarySidebar}}

Un **tableau** (ou liste selon les contextes, <i lang="en">array</i> en anglais) est une collection de données ({{glossary("primitive", "primitives")}} ou {{glossary("object", "objets")}} selon le langage) ordonnées. Les tableaux permettent de stocker plusieurs valeurs dans une structure affectée à une seule variable, à la différence des variables qui ne stockent qu'une valeur si on leur affecte une valeur primitive.

Chaque élément d'un tableau est associé à un numéro, l'indice numérique, qui permet d'y accéder. En JavaScript, les tableaux sont numérotés à partir de l'indice zéro et peuvent être manipulés avec différentes [méthodes](/fr/docs/Glossary/Method).

Voici quelques exemples utilisant les tableaux en JavaScript.

```js
// Des tableaux JavaScript peuvent contenir différents types de données.
const monTableau = [1, 2, 3, 4];
const tableauNomsChats = ["Jacqueline", "Sophia", "Felix"];

// Les indices commencent à 0 en JavaScript
console.log(monTableau[0]); // affiche : 1
console.log(tableauNomsChats[2]); // affiche : "Felix"
```

## Voir aussi

- JavaScript {{jsxref("Array")}}
