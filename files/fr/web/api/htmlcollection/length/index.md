---
title: "HTMLCollection : propriété length"
short-title: length
slug: Web/API/HTMLCollection/length
l10n:
  sourceCommit: a3d9f61a8990ba7b53bda9748d1f26a9e9810b18
---

{{APIRef("DOM")}}

La propriété **`length`** de l'interface {{DOMxRef("HTMLCollection")}} retourne le nombre d'éléments dans cette collection.

## Valeur

Une valeur entière représentant le nombre d'éléments dans une `HTMLCollection`.

## Exemples

La propriété `length` est souvent utile en programmation du DOM. Elle sert fréquemment à tester la longueur d'une liste, pour vérifier si elle existe. Elle est aussi couramment utilisée comme itérateur dans une boucle `for`, comme dans cet exemple.

```js
// Tous les éléments avec la classe ".test" dans le document
const items = document.getElementsByClassName("test");

// Pour chaque élément test de la liste,
// on ajoute tout l'élément sous forme de chaîne HTML
let gross = "";
for (let i = 0; i < items.length; i++) {
  gross += items[i].innerHTML;
}

// gross contient maintenant tout le HTML des éléments test
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
