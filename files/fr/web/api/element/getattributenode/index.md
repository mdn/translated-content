---
title: "Element : méthode getAttributeNode()"
slug: Web/API/Element/getAttributeNode
l10n:
  sourceCommit: 7eed0e1e4ab478d78dc7ca23c19ae77406776e4e
---

{{APIRef("DOM")}}

La méthode **`getAttributeNode()`**, associée à l'interface [`Element`](/fr/docs/Web/API/Element), renvoie l'attribut correspondant de l'élément courant sous la forme d'un nœud [`Attr`](/fr/docs/Web/API/Attr).

Cette méthode est utile pour obtenir les [propriétés d'instance](/fr/docs/Web/API/Attr#propriétés) de l'attribut. Si on souhaite seulement obtenir la valeur de l'attribut, on pourra plutôt utiliser la méthode [`getAttribute()`](/fr/docs/Web/API/Element/getAttribute).

## Syntaxe

```js-nolint
getAttributeNode(attrName)
```

### Paramètres

- `attrName`
  - : Une chaîne de caractères qui contient le nom de l'attribut recherché.

### Valeur de retour

Un nœud [`Attr`](/fr/docs/Web/API/Attr) pour l'attribut demandé.

## Exemples

```js
// html: <div id="top" />
let t = document.getElementById("top");
let idAttr = t.getAttributeNode("id");
console.log(idAttr.value === "top");
```

## Notes

Lorsque cette méthode est appelée sur un élément HTML dans un DOM marqué comme un document HTML, elle transforme son argument en minuscules avant de continuer.

Les nœuds `Attr` héritent de `Node`, mais ne sont pas considérés comme faisant partie de l'arbre du document. Les attributs habituels des nœuds comme [`parentNode`](/fr/docs/Web/API/Node/parentNode), [`previousSibling`](/fr/docs/Web/API/Node/previousSibling), et [`nextSibling`](/fr/docs/Web/API/Node/nextSibling) sont `null` pour un nœud `Attr`. Vous pouvez cependant accéder à l'élément auquel cet attribut appartient grâce à la propriété `ownerElement`.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [`Document.createAttribute()`](/fr/docs/Web/API/Document/createAttribute)
- [`Element.setAttributeNode()`](/fr/docs/Web/API/Element/setAttributeNode)
- [`Element.removeAttributeNode()`](/fr/docs/Web/API/Element/removeAttributeNode)
- [`Element.getAttributeNodeNS()`](/fr/docs/Web/API/Element/getAttributeNodeNS)
