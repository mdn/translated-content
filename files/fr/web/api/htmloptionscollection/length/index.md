---
title: "HTMLOptionsCollection : propriété length"
short-title: length
slug: Web/API/HTMLOptionsCollection/length
l10n:
  sourceCommit: a5e089d79bf681e27fc6bdb9e4026b2489ffa4d9
---

{{APIRef("HTML DOM")}}

La propriété **`length`** de l'interface {{DOMxRef("HTMLOptionsCollection")}} retourne le nombre d'éléments HTML {{HTMLElement("option")}} dans la collection. Cette propriété permet d'obtenir ou de définir la taille de la collection.

Lorsque la propriété `length` est définie à une valeur inférieure à la valeur actuelle, la collection d'options est tronquée&nbsp;; sinon, de nouveaux éléments `<option>` vides sont ajoutés à la fin du `<select>`.

## Valeur

Un entier représentant le nombre d'éléments dans cette `HTMLOptionsCollection`.

## Exemple

```js
const optCollection = document.getElementById("fruits").options;
const origLength = optCollection.length;
optCollection.length += 50; // ajoute 50 options vides à la collection
optCollection.length = origLength; // tronque la liste à la taille d'origine
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La méthode {{DOMxRef("HTMLOptionsCollection.add()")}}
- La méthode {{DOMxRef("HTMLOptionsCollection.remove()")}}
- La propriété {{DOMxRef("HTMLOptionsCollection.selectedIndex")}}
- L'interface {{DOMxRef("HTMLSelectElement")}}
- L'interface {{DOMxRef("HTMLOptGroupElement")}}
- La propriété {{DOMxRef("HTMLCollection.length")}}
