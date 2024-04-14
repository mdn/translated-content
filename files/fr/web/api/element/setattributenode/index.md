---
title: element.setAttributeNode
slug: Web/API/Element/setAttributeNode
---

{{ APIRef("DOM") }}

`setAttributeNode()` ajoute un nouveau nœud `Attr` à l'élément courant.

## Syntaxe

```js
var replacedAttr = element.setAttributeNode(attribute);
```

### Paramètre

- `attribute`
  - : est le nœud `Attr` à définir sur l'élément.

### Valeur de retour

- `replacedAttr`
  - : est le nœud d'attribut remplacé, renvoyé par la fonction, s'il y en avait un.

## Exemple

```js
// <div id="one" align="left">one</div>
// <div id="two">two</div>
var d1 = document.getElementById("one");
var d2 = document.getElementById("two");
var a = d1.getAttributeNode("align");
d2.setAttributeNode(a);
alert(d2.attributes[1].value);
// retourne: `left'
```

## Notes

Si l'attribut nommé existe déjà sur l'élément, cet attribut est remplacé par le nouveau et le nœud remplacé est renvoyé.

Cette méthode est peu utilisée. On lui préfère souvent [`setAttribute()`](/fr/docs/Web/API/Element/setAttribute) pour modifier la valeur d'un attribut d'élément.

## Spécifications

{{Specifications}}

- [DOM Level 2 Core&nbsp;: setAttributeNode](https://www.w3.org/TR/DOM-Level-2-Core/core.html#ID-887236154) — [traduction en français](http://www.yoyodesign.org/doc/w3c/dom2-core/core.html#ID-887236154) (non normative (Introduit dans [DOM Level 1 Core](https://www.w3.org/TR/REC-DOM-Level-1/level-one-core.html#method-setAttributeNode))

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [`Document.createAttribute()`](/fr/docs/Web/API/Document/createAttribute)
- [`Element.getAttributeNode()`](/fr/docs/Web/API/Element/getAttributeNode)
- [`Element.removeAttributeNode()`](/fr/docs/Web/API/Element/removeAttributeNode)
