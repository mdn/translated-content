---
title: HTMLCollection.item
slug: Web/API/HTMLCollection/item
---

{{APIRef("HTML DOM")}}

`HTMLCollection.item()` récupère un élément par sa position.

### Paramètres

- index
  - : La position de l'élement à retourner. Les éléments apparaissent dans une HTMLCollection dans le même ordre que celui du document source.

### Valeur de retour

L'élement à la position spécifiée, ou null si la position est inférieure à zéro ou supérieure ou égale à la valeur de la propriété `length`.

## Description

La méthode `item()` retourne un élément numéroté d'une HTMLCollection. En Javascript, il est plus simple de traiter une HTMLCollection comme un tableau et d'utiliser les indexes comme pour les tableaux.

## Exemple

```js
var c = document.images; // Ceci est une HTMLCollection.
var img0 = c.item(0); // Vous pouvez utiliser la méthode item comme ceci,
var img1 = c[1]; // Mais cette notation est plus simple et plus commune
```

## Voir aussi

- {{domxref("NodeList.item()")}}
