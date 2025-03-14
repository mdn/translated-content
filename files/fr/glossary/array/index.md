---
title: Tableau (Array)
slug: Glossary/Array
l10n:
  sourceCommit: d842f8c32316dbe36cff9fc5e0e777602e32d958
---

{{GlossarySidebar}}

Un tableau (ou liste selon les contextes, <i lang="en">array</i> en anglais) est une collection de données ([primitives](/fr/docs/Glossary/Primitive) ou [objets](/fr/docs/Glossary/Object) selon le langage) ordonnées. Les tableaux permettent de stocker plusieurs valeurs dans une structure affectée à une seule variable, à la différence des variables qui ne stockent qu'une valeur si on leur affecte une valeur primitive.

Chaque élément d'un tableau est associé à un numéro, l'indice numérique, qui permet d'y accéder. En JavaScript, les tableaux sont numérotés à partir de l'indice zéro et peuvent être manipulés avec différentes [méthodes](/fr/docs/Glossary/Method).

Voici quelques exemples utilisant les tableaux en JavaScript.

```js
//Des tableaux JavaScript peuvent contenir différents types de données.
const monTableau = [1, 2, 3, 4];
const tableauNomsChats = ["Jacqueline", "Sophia", "Felix"];

// Les indices commencent à 0 en JavaScript
console.log(monTableau[0]); // affiche : 1
console.log(tableauNomsChats[2]); // affiche : "Felix"
```

## Voir aussi

- [Tableau (structure de données)](<https://fr.wikipedia.org/wiki/Tableau_(structure_de_données)>) sur Wikipédia
- [La documentation MDN sur `Array` en JavaScript](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array)
