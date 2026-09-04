---
title: "Node : méthode compareDocumentPosition()"
short-title: compareDocumentPosition()
slug: Web/API/Node/compareDocumentPosition
l10n:
  sourceCommit: 59f510e3cca77e928a0300b61a5112386a990046
---

{{APIRef("DOM")}}

La méthode **`compareDocumentPosition()`** de l'interface {{DOMxRef("Node")}} rapporte la position de son nœud d'argument par rapport au nœud sur lequel elle est appelée.

## Syntaxe

```js-nolint
compareDocumentPosition(otherNode)
```

### Paramètres

- `otherNode`
  - : Le nœud ({{DOMxRef("Node")}}) pour lequel la position doit être signalée, par rapport au nœud.

### Valeur de retour

Une valeur entière représentant la position de `otherNode` par rapport à `node` comme un [masquage](https://fr.wikipedia.org/wiki/Masquage) combinant les propriétés constantes suivantes de l'interface {{DOMxRef("Node")}}&nbsp;:

- `Node.DOCUMENT_POSITION_DISCONNECTED` (`1`)
  - : Les deux nœuds sont dans différents documents ou différents arbres dans le même document.
- `Node.DOCUMENT_POSITION_PRECEDING` (`2`)
  - : `otherNode` précède le nœud soit dans un [parcours en profondeur préfixé](https://fr.wikipedia.org/wiki/Algorithme_de_parcours_en_profondeur) d'un arbre contenant les deux nœuds (par exemple en tant qu'ancêtre, nœud voisin précédent, descendant d'un voisin précédent ou voisin précédent d'un ancêtre), soit — s'ils sont déconnectés — selon un ordre arbitraire mais cohérent.
- `Node.DOCUMENT_POSITION_FOLLOWING` (`4`)
  - : `otherNode` suit le nœud soit dans un [parcours en profondeur préfixé](https://fr.wikipedia.org/wiki/Algorithme_de_parcours_en_profondeur) d'un arbre contenant les deux nœuds (par exemple en tant que descendant, nœud voisin suivant, descendant d'un voisin suivant ou voisin suivant d'un ancêtre), soit — s'ils sont déconnectés — selon un ordre arbitraire mais cohérent.
- `Node.DOCUMENT_POSITION_CONTAINS` (`8`)
  - : `otherNode` est un ancêtre du nœud.
- `Node.DOCUMENT_POSITION_CONTAINED_BY` (`16`)
  - : `otherNode` est un descendant du nœud.
- `Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC` (`32`)
  - : Le résultat dépend d'un comportement arbitraire ou spécifique à l'implémentation et n'est pas garanti d'être portable.

Zéro ou plusieurs bits peuvent être activés, en fonction des scénarios qui s'appliquent. Par exemple, si `otherNode` est situé plus haut dans le document **_et_** contient le nœud sur lequel `compareDocumentPosition()` a été appelé, alors les bits `DOCUMENT_POSITION_CONTAINS` et `DOCUMENT_POSITION_PRECEDING` sont tous deux positionnés, produisant une valeur de `10` (`0x0A`).

## Exemple

```js
const head = document.head;
const body = document.body;

if (head.compareDocumentPosition(body) & Node.DOCUMENT_POSITION_FOLLOWING) {
  console.log("Document bien formé");
} else {
  console.error("<head> n'est pas avant <body>");
}
```

> [!NOTE]
> Parce que le résultat retourné par `compareDocumentPosition` est un masque de bits, des [opérateurs binaires AND](/fr/docs/Web/JavaScript/Reference/Operators/Bitwise_AND) doivent être utilisés pour des résultats significatifs.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La méthode {{DOMxRef("Node.contains()")}}
