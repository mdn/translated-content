---
title: "Element : méthode setAttributeNodeNS()"
short-title: setAttributeNodeNS()
slug: Web/API/Element/setAttributeNodeNS
l10n:
  sourceCommit: 20c51db7895b1b6f41d4fa90e71830f4b6678eea
---

{{APIRef("DOM")}}

La méthode **`setAttributeNodeNS()`** de l'interface {{DOMxRef("Element")}} ajoute un nouveau nœud {{DOMxRef("Attr")}} d'un espace de noms à l'élément courant.

Si vous n'avez pas besoin de travailler sur le nœud d'attribut (par exemple en le clonant depuis un autre élément) avant de l'ajouter, vous pouvez utiliser la méthode {{DOMxRef("Element.setAttributeNS()", "setAttributeNS()")}} à la place.

Si vous manipulez des documents HTML et n'avez pas besoin d'utiliser d'espace de noms, vous pouvez utiliser la méthode {{DOMxRef("Element.setAttribute()", "setAttribute()")}} à la place.

## Syntaxe

```js-nolint
setAttributeNodeNS(attributeNode)
```

### Paramètre

- `attributeNode`
  - : Le nœud {{DOMxRef("Attr")}} à ajouter à l'élément.

### Valeur de retour

Le nœud d'attribut remplacé, le cas échéant, retourné par cette fonction.

## Exemples

```js
// <div id="un" xmlns:myNS="http://www.mozilla.org/ns/specialspace"
//            myNS:special-align="utterleft">un</div>
// <div id="deux">deux</div>

const myns = "http://www.mozilla.org/ns/specialspace";
const d1 = document.getElementById("un");
const d2 = document.getElementById("deux");
const a = d1.getAttributeNodeNS(myns, "special-align");
d2.setAttributeNodeNS(a.cloneNode(true));
alert(d2.attributes[1].value); // returns: `utterleft'
```

## Notes

Si l'attribut défini existe déjà sur l'élément, cet attribut est remplacé par le nouveau et l'ancien est retourné.

Notez que si vous essayez de définir sans cloner le nœud, vous pouvez voir l'erreur `NS_ERROR_DOM_INUSE_ATTRIBUTE_ERR` «&nbsp;L'attribut est déjà utilisé&nbsp;», car le DOM exige le clonage pour que l'objet {{DOMxRef("Attr")}} puisse être réutilisé (contrairement aux autres nœuds qui peuvent être déplacés).

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La méthode {{DOMxRef("Document.createAttribute()")}}
- La méthode {{DOMxRef("Document.createAttributeNS()")}}
- La méthode {{DOMxRef("Element.getAttributeNodeNS()")}}
