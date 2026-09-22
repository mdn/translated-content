---
title: "Element : propriété children"
short-title: children
slug: Web/API/Element/children
l10n:
  sourceCommit: bbf7f25f9cf95fb154e2740a9fdc9c02818981bf
---

{{APIRef("DOM")}}

La propriété en lecture seule **`children`** de l'interface {{DOMxRef("Element")}} retourne une collection dynamique ({{DOMxRef("HTMLCollection")}}) qui contient tous les {{DOMxRef("Element", "éléments",,1)}} enfants de l'élément sur lequel elle a été appelée.

`Element.children` inclut uniquement les nœuds qui sont des éléments. Pour obtenir l'ensemble des enfants, y compris les nœuds qui ne sont pas des éléments comme les textes et les commentaires, utilisez {{DOMxRef("Node.childNodes")}}.

## Valeur

Un objet {{DOMxRef("HTMLCollection")}} qui est dynamique, ordonné et qui contient les éléments du DOM qui sont les enfants de `node`. Il est possible d'accéder aux nœuds enfants de la collection en utilisant la méthode {{DOMxRef("HTMLCollection.item()", "item()")}} de la collection ou en utilisant la notation avec les crochets (à l'instar de l'accès aux éléments d'un tableau en JavaScript).

Si l'élément n'a pas d'enfants, `children` est une liste vide avec `length` qui vaut `0`.

## Exemples

```js
const monElement = document.getElementById("toto");
for (const child of monElement.children) {
  console.log(child.tagName);
}
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{DOMxRef("Node.childNodes")}}
