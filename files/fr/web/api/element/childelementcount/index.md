---
title: ParentNode.childElementCount
slug: Web/API/Element/childElementCount
---

{{APIRef("DOM") }}

La propriété **`ParentNode.childElementCount`** en lecture seule renvoie un `unsigned long` (_long non signé_) représentant le nombre d'élèments fils de l'élément donné.

> **Note :** Cette propriété a été définie dans la pure interface {{domxref("ElementTraversal")}}.
> Comme cette interface contenait deux différents jeux de propriétés, l'un visant les {{domxref("Node")}} (_noeuds_) qui ont des enfants, l'autre les enfants, ils ont été déplacés dans deux interfaces pures, {{domxref("ParentNode")}} et {{domxref("ChildNode")}}. Dans ce cas, `childElementCount` a été rattaché à {{domxref("ParentNode")}}. C'est un changement assez technique qui ne devrait pas affecter la compatibilité.

## Syntaxe

```js
var count = node.childElementCount;
```

- count
  - : détient la valeur de retour, un type `unsigned long` (_long non signé_) (simplement un nombre entier)
- node
  - : est un objet représentant un `Document`, un `DocumentFragment` ou un `Element`.

## Exemple

```js
var foo = document.getElementById("foo");
if (foo.childElementCount > 0) {
  // faire quelque chose
}
```

## Polyfill pour IE8 & IE9 & Safari

Cette propriété n'est pas supportée par les versions antérieures à IE9 ni par IE9 ni par Safari. Ainsi, les objets Document, DocumentFragment dans ces navigateurs ne l'ont pas.

```js
(function (constructor) {
  if (
    constructor &&
    constructor.prototype &&
    constructor.prototype.childElementCount == null
  ) {
    Object.defineProperty(constructor.prototype, "childElementCount", {
      get: function () {
        var i = 0,
          count = 0,
          node,
          nodes = this.childNodes;
        while ((node = nodes[i++])) {
          if (node.nodeType === 1) count++;
        }
        return count;
      },
    });
  }
})(window.Node || window.Element);
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Les interfaces pures {{domxref("ParentNode")}} et {{domxref("ChildNode")}}.
- Types d'objets implémentant cette interface pure : {{domxref("Document")}}, {{domxref("Element")}} et {{domxref("DocumentFragment")}}.
