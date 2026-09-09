---
title: "Element : méthode getAttributeNode()"
short-title: getAttributeNode()
slug: Web/API/Element/getAttributeNode
l10n:
  sourceCommit: f22f67069495dc37e550e354913d4ca984f5a4b0
---

{{APIRef("DOM")}}

La méthode **`getAttributeNode()`** de l'interface {{DOMxRef("Element")}} retourne l'attribut défini de l'élément demandé sous la forme d'un nœud {{DOMxRef("Attr")}}. Elle retourne `null` si l'élément n'a pas d'attribut avec le nom donné.

Cette méthode est utile si vous avez besoin des [propriétés d'instance](/fr/docs/Web/API/Attr#propriétés) de l'attribut.
Si vous avez seulement besoin de la valeur de l'attribut, vous pouvez utiliser la méthode {{DOMxRef("Element.getAttribute()", "getAttribute()")}} à la place.

## Syntaxe

```js-nolint
getAttributeNode(attrName)
```

### Paramètres

- `attrName`
  - : Une chaîne de caractères définissant le nom de l'attribut. Lorsqu'elle est appelée sur un élément HTML dans un DOM identifié comme un document HTML, le nom est normalisé en minuscules.

### Valeur de retour

Un nœud `Attr` pour l'attribut demandé, ou `null` si l'élément n'a pas d'attribut avec le nom donné.

> [!NOTE]
> Les nœuds `Attr` héritent de `Node`, mais ne sont pas considérés comme faisant partie de l'arbre du document. Les attributs habituels des nœuds comme {{DOMxRef("Node.parentNode", "parentNode")}}, {{DOMxRef("Node.previousSibling", "previousSibling")}} et {{DOMxRef("Node.nextSibling", "nextSibling")}} sont `null` pour un nœud `Attr`. Vous pouvez cependant accéder à l'élément auquel cet attribut appartient grâce à la propriété {{domxref("Attr.ownerElement", "ownerElement")}}.

## Exemples

```js
// html: <div id="top" />
const t = document.getElementById("top");
const idAttr = t.getAttributeNode("id");
console.log(idAttr.value); // "top"
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La méthode {{DOMxRef("Document.createAttribute()")}}
- La méthode {{DOMxRef("Element.setAttributeNode()")}}
- La méthode {{DOMxRef("Element.removeAttributeNode()")}}
