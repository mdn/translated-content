---
title: "Node : propriété nodeType"
short-title: nodeType
slug: Web/API/Node/nodeType
l10n:
  sourceCommit: 7a60da1b1ce2d80f2ab0648c5733c30d1a8ac35b
---

{{APIRef("DOM")}}

La propriété en lecture seule **`nodeType`** de l'interface {{DOMxRef("Node")}} est un entier qui identifie le type du nœud. Elle permet de distinguer les différents types de nœuds, tels que {{DOMxRef("Element", "éléments")}}, {{DOMxRef("Text", "texte")}} et {{DOMxRef("Comment", "commentaires")}}.

## Valeur

Un entier qui définit le type du nœud. Les valeurs possibles sont&nbsp;:

- `Node.ELEMENT_NODE` (`1`)
  - : Un nœud {{DOMxRef("Element")}} comme {{HTMLElement("p")}} ou {{HTMLElement("div")}}.
- `Node.ATTRIBUTE_NODE` (`2`)
  - : Un {{DOMxRef("Attr", "Attribut")}} d'un nœud {{DOMxRef("Element")}}.
- `Node.TEXT_NODE` (`3`)
  - : Le nœud {{DOMxRef("Text")}} actuel à l'intérieur d'un nœud {{DOMxRef("Element")}} ou d'un {{DOMxRef("Attr")}}.
- `Node.CDATA_SECTION_NODE` (`4`)
  - : Un nœud {{DOMxRef("CDATASection")}}, comme `<!CDATA[[ … ]]>`.
- `Node.PROCESSING_INSTRUCTION_NODE` (`7`)
  - : Un nœud {{DOMxRef("ProcessingInstruction")}} d'un document XML, comme `<?xml-stylesheet … ?>`.
- `Node.COMMENT_NODE` (`8`)
  - : Un nœud {{DOMxRef("Comment")}}, comme `<!-- … -->`.
- `Node.DOCUMENT_NODE` (`9`)
  - : Un nœud {{DOMxRef("Document")}}.
- `Node.DOCUMENT_TYPE_NODE` (`10`)
  - : Un nœud {{DOMxRef("DocumentType")}}, comme `<!doctype html>`.
- `Node.DOCUMENT_FRAGMENT_NODE` (`11`)
  - : Un nœud {{DOMxRef("DocumentFragment")}}.

Les constantes suivantes ont été dépréciées et ne sont plus utilisées&nbsp;: `Node.ENTITY_REFERENCE_NODE` (`5`), `Node.ENTITY_NODE` (`6`) et `Node.NOTATION_NODE` (`12`).

## Exemples

### Différents types de nœuds

```js
document.nodeType === Node.DOCUMENT_NODE; // true
document.doctype.nodeType === Node.DOCUMENT_TYPE_NODE; // true

document.createDocumentFragment().nodeType === Node.DOCUMENT_FRAGMENT_NODE; // true

const p = document.createElement("p");
p.textContent = "Il était une fois…";

p.nodeType === Node.ELEMENT_NODE; // true
p.firstChild.nodeType === Node.TEXT_NODE; // true
```

### Commentaires

Cet exemple vérifie si le premier nœud à l'intérieur de l'élément du document est un commentaire, et affiche un message si ce n'est pas le cas.

```js
const noeud = document.documentElement.firstChild;
if (noeud.nodeType !== Node.COMMENT_NODE) {
  console.warn("Vous devez commenter votre code !");
}
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
