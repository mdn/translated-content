---
title: "Node : méthode hasChildNodes()"
short-title: hasChildNodes()
slug: Web/API/Node/hasChildNodes
l10n:
  sourceCommit: 312081aabba3885b35a81107b3c2fc53428896c5
---

{{APIRef("DOM")}}

La méthode **`hasChildNodes()`** de l'interface {{DOMxRef("Node")}} retourne une valeur booléenne indiquant si le nœud ({{DOMxRef("Node")}}) donné possède des [nœuds enfants](/fr/docs/Web/API/Node/childNodes) ou non.

## Syntaxe

```js-nolint
hasChildNodes()
```

### Paramètres

Aucun.

### Valeur de retour

Une valeur booléenne qui est `true` si le nœud a des nœuds enfants, et `false` dans le cas contraire.

## Exemples

```js
let toto = document.getElementById("toto");

if (toto.hasChildNodes()) {
  // Faire quelque chose avec 'toto.childNodes'
}
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{DOMxRef("Node.childNodes")}}
