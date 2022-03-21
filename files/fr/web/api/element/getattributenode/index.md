---
title: element.getAttributeNode
slug: Web/API/Element/getAttributeNode
tags:
  - API
  - Attributs
  - DOM
  - Element
  - Méthodes
  - Noeud
translation_of: Web/API/Element/getAttributeNode
---
{{ APIRef("DOM") }}

## Résumé

Renvoie le nœud d'attribut spécifié pour l'élément courant, en tant que noeud `Attr`.

## Syntaxe

```js
var attrNode = element.getAttributeNode(attrName);
```

- `attrNode` est un nœud `Attr` pour l'attribut demandé.
- `attrName` est une chaîne de caractères qui contient le nom de l'attribut.

## Exemple

    // html: <div id="top" />
    var t = document.getElementById("top");
    var idAttr = t.getAttributeNode("id");
    alert(idAttr.value == "top")

## Notes

Lorsqu'elle est appelée sur un élément HTML dans un DOM marqué comme un document HTML, `getAttributeNode` passe en minuscules son argument avant de continuer.

Les nœuds `Attr` héritent de `Node`, mais ne sont pas considérés comme faisant partie de l'arbre du document. Les attributs habituels des nœuds comme [parentNode](fr/DOM/element.parentNode), [previousSibling](fr/DOM/element.previousSibling), et [nextSibling](fr/DOM/element.nextSibling) sont `null` pour un nœud `Attr`. Vous pouvez cependant accéder à l'élément auquel cet attribut appartient grâce à la propriété `ownerElement`.

[getAttribute](fr/DOM/element.getAttribute) est habituellement utilisé à la place de `getAttributeNode` pour obtenir la valeur d'un attribut d'un élément.

{{ DOMAttributeMethods() }}

## Spécification

- [DOM Level 2 Core&nbsp;: getAttributeNode](http://www.w3.org/TR/DOM-Level-2-Core/core.html#ID-217A91B8) — [traduction en français](http://www.yoyodesign.org/doc/w3c/dom2-core/core.html#ID-217A91B8) (non normative)
- [HTML 5: APIs in HTML documents](http://www.whatwg.org/specs/web-apps/current-work/multipage/dom.html#apis-in-html-documents)
