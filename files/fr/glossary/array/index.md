---
title: Tableau (Array)
slug: Glossary/Array
l10n:
  sourceCommit: d842f8c32316dbe36cff9fc5e0e777602e32d958
---

{{GlossarySidebar}}

En anglais, un **_array_**, parfois appelé en français « tableau » ou « liste », est une collection de données ([primitives](/fr/docs/Glossary/Primitive) ou [objets](/fr/docs/Glossary/Object) selon le langage). Ils sont utilisés pour stocker plusieurs valeurs dans une seule variable. Ceci est comparé à une variable qui ne peut stocker qu'une seule valeur.

Chaque élément d'un _array_ a un numéro qui lui est associé, appelé index numérique ou indice, qui permet d'y accéder. En JavaScript, ils commencent à l'indice zéro et peuvent être manipulés avec différentes [méthodes](/fr/docs/Glossary/Method).

À quoi ressemble-t-il en JavaScript ?

```js
//Des arrays en JavaScript peuvent contenir différents types de données.
const myArray = [1, 2, 3, 4];
const catNamesArray = ["Jacqueline", "Sophia", "Felix"];

// L'indice de l'array commence à 0.
console.log(myArray[0]); // affiche : 1
console.log(catNamesArray[2]); // affiche : "Felix"
```

## Voir aussi

- [Tableau (structure de données)](<https://fr.wikipedia.org/wiki/Tableau_(structure_de_données)>) sur Wikipédia
- _[Array](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array)_ en JavaScript sur MDN
