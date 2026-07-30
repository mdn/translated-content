---
title: "Element : méthode getAttributeNode()"
short-title: getAttributeNode()
slug: Web/API/Element/getAttributeNode
l10n:
  sourceCommit: 20c51db7895b1b6f41d4fa90e71830f4b6678eea
---

{{APIRef("DOM")}}

La méthode **`getAttributeNode()`** de l'interface {{DOMxRef("Element")}} retourne l'attribut défini de l'élément demandé sous la forme d'un nœud {{DOMxRef("Attr")}}.

Cette méthode est utile si vous avez besoin des [propriétés d'instance](/fr/docs/Web/API/Attr#propriétés) de l'attribut.
Si vous avez seulement besoin de la valeur de l'attribut, vous pouvez utiliser la méthode {{DOMxRef("Element.getAttribute()", "getAttribute()")}} à la place.

## Syntaxe

```js-nolint
getAttributeNode(attrName)
```

### Paramètres

- `attrName`
  - : Une chaîne de caractères qui contient le nom de l'attribut recherché.

### Valeur de retour

Un nœud `Attr` pour l'attribut demandé.

## Exemples

```js
// html: <div id="top" />
let t = document.getElementById("top");
let idAttr = t.getAttributeNode("id");
alert(idAttr.value === "top");
```

## Notes

Lorsque cette méthode est appelée sur un élément HTML dans un DOM marqué comme un document HTML, elle transforme son argument en minuscules avant de continuer.

Les nœuds `Attr` héritent de `Node`, mais ne sont pas considérés comme faisant partie de l'arbre du document. Les attributs habituels des nœuds comme {{DOMxRef("Node.parentNode", "parentNode")}}, {{DOMxRef("Node.previousSibling", "previousSibling")}} et {{DOMxRef("Node.nextSibling", "nextSibling")}} sont `null` pour un nœud `Attr`. Vous pouvez cependant accéder à l'élément auquel cet attribut appartient grâce à la propriété `ownerElement`.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La méthode {{DOMxRef("Document.createAttribute()")}}
- La méthode {{DOMxRef("Element.setAttributeNode()")}}
- La méthode {{DOMxRef("Element.removeAttributeNode()")}}
