---
title: element.getAttributeNode
slug: Web/API/Element/getAttributeNode
---

{{ APIRef("DOM") }}

Renvoie le nœud d'attribut spécifié pour l'élément courant, en tant que noeud `Attr`.

## Syntaxe

```js
var attrNode = element.getAttributeNode(attrName);
```

### Paramètre

- `attrName`
    - : est une chaîne de caractères qui contient le nom de l'attribut.

### Valeur de retour

- `attrNode`
    - : est un nœud `Attr` pour l'attribut demandé.

## Exemple

```js
// html: <div id="top" />
var t = document.getElementById("top");
var idAttr = t.getAttributeNode("id");
alert(idAttr.value == "top");
```

## Notes

Lorsqu'elle est appelée sur un élément HTML dans un DOM marqué comme un document HTML, `getAttributeNode` passe en minuscules son argument avant de continuer.

Les nœuds `Attr` héritent de `Node`, mais ne sont pas considérés comme faisant partie de l'arbre du document. Les attributs habituels des nœuds comme [parentNode](/fr/docs/Web/API/Node/parentNode), [previousSibling](/fr/docs/Web/API/Node/previousSibling), et [nextSibling](/fr/docs/Web/API/Node/nextSibling) sont `null` pour un nœud `Attr`. Vous pouvez cependant accéder à l'élément auquel cet attribut appartient grâce à la propriété `ownerElement`.

[getAttribute](/fr/docs/Web/API/Element/getAttribute) est habituellement utilisé à la place de `getAttributeNode` pour obtenir la valeur d'un attribut d'un élément.

## Spécifications

{{Specifications}}

- [DOM Level 2 Core&nbsp;: getAttributeNode](https://www.w3.org/TR/DOM-Level-2-Core/core.html#ID-217A91B8) — [traduction en français](http://www.yoyodesign.org/doc/w3c/dom2-core/core.html#ID-217A91B8) (non normative)
- [HTML 5: APIs in HTML documents](https://www.whatwg.org/specs/web-apps/current-work/multipage/dom.html#apis-in-html-documents)

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [`Document.createAttribute()`](/fr/docs/Web/API/Document/createAttribute)
- [`Element.setAttributeNode()`](/fr/docs/Web/API/Element/setAttributeNode)
- [`Element.removeAttributeNode()`](/fr/docs/Web/API/Element/removeAttributeNode)
