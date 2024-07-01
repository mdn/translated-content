---
title: Node.compareDocumentPosition()
slug: Web/API/Node/compareDocumentPosition
---

{{APIRef("DOM")}}

La méthode **`Node.compareDocumentPosition()`** compare la position du noeud courant par rapport à un autre noeud dans tout autre document.

La valeur retournée est un masque de bits avec les valeurs suivantes :

| Nom                                         | Valeur |
| ------------------------------------------- | ------ |
| `DOCUMENT_POSITION_DISCONNECTED`            | 1      |
| `DOCUMENT_POSITION_PRECEDING`               | 2      |
| `DOCUMENT_POSITION_FOLLOWING`               | 4      |
| `DOCUMENT_POSITION_CONTAINS`                | 8      |
| `DOCUMENT_POSITION_CONTAINED_BY`            | 16     |
| `DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC` | 32     |

## Syntaxe

```js
node.compareDocumentPosition(otherNode);
```

## Exemple

```js
var head = document.getElementsByTagName("head").item(0);

if (
  head.compareDocumentPosition(document.body) & Node.DOCUMENT_POSITION_FOLLOWING
) {
  console.log("well-formed document");
} else {
  console.log("<head> is not before <body>");
}
```

> **Note :** Parce que le résultat renvoyé par `compareDocumentPosition` est un masque de bits, des [opérateurs binaires](/fr/docs/Web/JavaScript/Reference/Opérateurs/Opérateurs_binaires) doivent être utilisés pour des résultats significatifs.

> **Note :** La première instruction utilise l' `item(0)` de la méthode [NodeList](/fr/docs/Web/API/NodeList/item) , qui est l'équivalent de `getElementsByTagName('head')[0].`

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [`Node.contains`](/fr/docs/Web/API/Node/contains)
