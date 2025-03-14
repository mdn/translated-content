---
title: element.hasChildNodes
slug: Web/API/Node/hasChildNodes
---

{{APIRef("DOM")}}

La méthode **`Node.hasChildNodes()`** renvoie un {{jsxref("Boolean")}} indiquant si le {{domxref("Node","noeud")}} actuel possède des [nœuds enfants](/fr/docs/Web/API/Node/childNodes) ou non.

## Syntaxe

```js
bool = node.hasChildNodes();
```

### Valeur de retour

Un {{jsxref("Boolean")}} qui est `true` si le nœud a des nœuds enfants, et `false` dans le cas contraire.

## Exemple

```js
let foo = document.getElementById("foo");

if (foo.hasChildNodes()) {
  // Faire quelque chose avec 'foo.childNodes'
}
```

## Prothèse d'émulation

```js
(function (prototype) {
  prototype.hasChildNodes =
    prototype.hasChildNodes ||
    function () {
      return !!this.firstChild;
    };
})(Node.prototype);
```

Il y a différentes façons de déterminer si le noeud a un noeud enfant :

- `node.hasChildNodes()`
- `node.firstChild != null` (ou simplement `node.firstChild`)
- `node.childNodes && node.childNodes.length` (ou `node.childNodes.length > 0`)

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{domxref("Node.childNodes")}}
- {{domxref("Node.hasAttributes")}}
