---
title: "NodeList : méthode item()"
short-title: item()
slug: Web/API/NodeList/item
l10n:
  sourceCommit: 20c51db7895b1b6f41d4fa90e71830f4b6678eea
---

{{APIRef("DOM")}}

La méthode **`item()`** de l'interface {{DOMxRef("NodeList")}} retourne un nœud depuis une [`NodeList`](/fr/docs/Web/API/NodeList) par l'index. Cette méthode ne lance pas d'exceptions tant que vous fournissez des arguments. Une valeur `null` est retournée si l'index est hors des limites et une {{JSxRef("TypeError")}} est levée si aucun argument n'est fourni.

En JavaScript, au lieu d'appeler `nodeList.item(index)`, vous pouvez également accéder directement à un `index`, comme `nodeList[index]`.

## Syntaxe

```js-nolint
item(index)
```

### Paramètres

- `index`
  - : L'index du nœud à récupérer. L'index commence à zéro.

### Valeur de retour

Le nœud d'un `index` dans la `nodeList` retourné par la méthode `item`.

### Exceptions

- {{JSxRef("TypeError")}}
  - : Levée si aucun argument n'est fourni.

## Exemples

```js
const tableaux = document.getElementsByTagName("table");
const premierTableau = tableaux.item(1); // ou tableaux[1] - retourne le second tableau dans le DOM
```

## Spécification

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
