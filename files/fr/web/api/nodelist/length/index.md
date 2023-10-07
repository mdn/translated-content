---
title: NodeList.length
slug: Web/API/NodeList/length
---

{{APIRef("DOM")}}

## Résumé

`length` renvoie le nombre d'éléments dans une `NodeList`.

## Syntaxe

```js
numItems = nodeList.length;
```

- `numItems` est un entier (_integer_), valeur représentant le nombre d'éléments dans une `NodeList`.

## Exemple

```js
// tous les paragraphes dans le document
var items = document.getElementsByTagName("p");
// pour chaque élément de la liste,
// ajouter l'élément entier en tant que chaîne de HTML
var gross = "";
for (var i = 0; i < items.length; i++) {
  gross += items[i].innerHTML;
}
// gross est maintenant tout le HTML pour les paragraphes
```

## Notes

Malgré l'emplacement de cette page dans la référence, `length` n'est pas une propriété d'[Element](en/DOM/element), mais plutôt d'une `NodeList`. Les objets NodeList sont retournés à partir des méthodes DOM comme [document.getElementsByTagName](en/DOM/document.getElementsByTagName).

`length` est une propriété très commune dans la programmation de DOM. Il est très courant de tester la longueur d'une liste (pour voir si elle existe) et de l'utiliser comme itérateur dans une boucle for, comme dans l'exemple ci-dessus.

## Spécification

[length](http://www.w3.org/TR/2000/REC-DOM-Level-2-Core-20001113/core.html#ID-203510337)

## Compatibilité des navigateurs

{{Compat}}
