---
title: Node.compareDocumentPosition()
slug: Web/API/Node/compareDocumentPosition
---

{{APIRef("DOM")}}

La méthode **`Node.compareDocumentPosition()`** donne la position de l'argument `otherNode` par rapport au noeud `node` sur lequel la méthode est appellée.

## Syntaxe

```js
node.compareDocumentPosition(otherNode);
```

## Retour

La valeur retournée est un masque de bits qui peut combiner plusieurs des valeurs suivantes :

| Nom                                         | Valeur |
| ------------------------------------------- | ------ |
| `DOCUMENT_POSITION_DISCONNECTED`            | 1      |
| `DOCUMENT_POSITION_PRECEDING`               | 2      |
| `DOCUMENT_POSITION_FOLLOWING`               | 4      |
| `DOCUMENT_POSITION_CONTAINS`                | 8      |
| `DOCUMENT_POSITION_CONTAINED_BY`            | 16     |
| `DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC` | 32     |

> [!NOTE]
> Les [opérateurs binaires](/fr/docs/Web/JavaScript/Reference/Operators) doivent être utilisés pour s'assurer d'avoir un résultat cohérent.

## Exemple

```js
var head = document.getElementsByTagName("head").item(0);

if (head.compareDocumentPosition(document.body) & Node.DOCUMENT_POSITION_FOLLOWING !== 0) {
  console.log("well-formed document");
} else {
  console.log("<head> is not before <body>");
}
```

> [!NOTE]
> La première instruction utilise l' `item(0)` de la méthode [NodeList](/fr/docs/Web/API/NodeList/item) , qui est l'équivalent de `getElementsByTagName('head')[0].`

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [`Node.contains`](/fr/docs/Web/API/Node/contains)
