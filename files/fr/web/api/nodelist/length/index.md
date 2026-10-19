---
title: "NodeList : propriété length"
short-title: length
slug: Web/API/NodeList/length
l10n:
  sourceCommit: 312081aabba3885b35a81107b3c2fc53428896c5
---

{{APIRef("DOM")}}

La propriété en lecture seule **`length`** de l'interface {{DOMxRef("NodeList")}} retourne le nombre d'éléments contenus dans cet objet.

## Valeur

Un entier représentant le nombre d'éléments dans une `NodeList`.

## Exemples

La propriété `length` est souvent utile dans la programmation DOM. Elle est souvent utilisée pour tester la longueur d'une liste, pour voir si elle existe du tout. Elle est également couramment utilisée comme itérateur dans une boucle `for`, comme dans cet exemple.

```js
// Tous les paragraphes dans le document
const elements = document.getElementsByTagName("p");

// Pour chaque élément de la liste, ajouter l'élément entier en tant que chaîne des caractères HTML
let brut = "";
for (let i = 0; i < elements.length; i++) {
  brut += elements[i].innerHTML;
}

// brut contient maintenant tout le HTML pour les paragraphes
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
