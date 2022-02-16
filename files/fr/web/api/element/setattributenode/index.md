---
title: element.setAttributeNode
slug: Web/API/Element/setAttributeNode
tags:
  - API
  - DOM
  - Element
  - Méthode
  - Reference
translation_of: Web/API/Element/setAttributeNode
---
{{ APIRef("DOM") }}

` setAttributeNode``() ` ajoute un nouveau nœud `Attr` à l'élément courant.

## Syntaxe

```js
var replacedAttr = element.setAttributeNode(attribute);
```

- `attribute` est le nœud `Attr` à définir sur l'élément.
- `replacedAttr` est le nœud d'attribut remplacé, renvoyé par la fonction, s'il y en avait un.

## Exemple

    // <div id="one" align="left">one</div>
    // <div id="two">two</div>
    var d1 = document.getElementById("one");
    var d2 = document.getElementById("two");
    var a = d1.getAttributeNode("align");
    d2.setAttributeNode(a);
    alert(d2.attributes[1].value)
    // retourne: `left'

## Notes

Si l'attribut nommé existe déjà sur l'élément, cet attribut est remplacé par le nouveau et le nœud remplacé est renvoyé.

Cette méthode est peu utilisée. On lui préfère souvent  {{domxref("Element.setAttribute()")}} pour modifier la valeur d'un attribut d'élément.

{{DOMAttributeMethods()}}

## Spécification

- [DOM Level 2 Core : setAttributeNode](http://www.w3.org/TR/DOM-Level-2-Core/core.html#ID-887236154) — [traduction en français](http://www.yoyodesign.org/doc/w3c/dom2-core/core.html#ID-887236154) (non normative (Introduit dans [DOM Level 1 Core](http://www.w3.org/TR/REC-DOM-Level-1/level-one-core.html#method-setAttributeNode))
