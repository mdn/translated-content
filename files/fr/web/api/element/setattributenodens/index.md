---
title: element.setAttributeNodeNS
slug: Web/API/Element/setAttributeNodeNS
---

{{ APIRef("DOM") }}

`setAttributeNodeNS` ajoute un nouveau nœud attribut avec l'espace de noms et le nom spécifiés.

## Syntaxe

```js
replacedAttr = element.setAttributeNodeNS(attributeNode);
```

### Paramètre

- `attributeNode`
  - : Un nœud `Attr`.

### Valeur de retour

- `replacedAttr`
  - : Le nœud attribut remplacé, si applicable, renvoyé par cette fonction.

## Exemple

```js
// <div id="one" special-align="utterleft">one</div>
// <div id="two">two</div>

var myns = "http://www.mozilla.org/ns/specialspace";
var d1 = document.getElementById("one");
var d2 = document.getElementById("two");
var a = d1.getAttributeNodeNS(myns, "special-align");
d2.setAttributeNodeNS(a);

alert(d2.attributes[1].value); // renvoie&nbsp;: "utterleft"
```

## Notes

Si l'attribut spécifié existe déjà sur l'élément, cet attribut est remplacé par le nouveau et l'ancien est renvoyé.

Notez que si vous essayez de définir sans cloner le noeud, Mozilla donne une erreur "Attribut déjà utilisé" NS_ERROR_DOM_INUSE_ATTRIBUTE_ERR, car le DOM nécessite que le clonage d'`Attr` soit réutilisé (contrairement aux autres Noeuds qui peuvent être déplacés).

## Spécifications

{{Specifications}}

- [DOM Level 2 Core: setAttributeNodeNS (en)](https://www.w3.org/TR/DOM-Level-2-Core/core.html#ID-ElSetAtNodeNS) — [traduction en français](http://www.yoyodesign.org/doc/w3c/dom2-core/core.html#ID-ElSetAtNodeNS) (non normative)

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [`Document.createAttribute()`](/fr/docs/Web/API/Document/createAttribute)
- [`Document.createAttributeNS()`](/fr/docs/Web/API/Document/createAttributeNS)
- [`Element.getAttributeNodeNS()`](/fr/docs/Web/API/Element/getAttributeNodeNS)
