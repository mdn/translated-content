---
title: Tableau (Array)
slug: Glossary/Array
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

Un **tableau** (ou une **liste** — selon le contexte) de l'anglais <i lang="en">array</i> est une collection ordonnée de données (soit de {{Glossary("primitive", "valeurs primitives")}}, soit d'{{Glossary("object", "objets")}}, selon le langage). Les tableaux servent à stocker plusieurs valeurs sous un même nom de variable. Une variable classique, en revanche, ne peut stocker qu'une seule valeur.

Chaque élément d'un tableau est associé à un numéro, l'indice numérique, qui permet d'y accéder. En JavaScript, les tableaux sont numérotés à partir de l'indice zéro et peuvent être manipulés avec différentes {{Glossary("Method", "méthodes")}}.

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

- L'objet global JavaScript {{JSxRef("Array")}}
