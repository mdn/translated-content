---
title: "Element : méthode setAttributeNodeNS()"
slug: Web/API/Element/setAttributeNodeNS
l10n:
  sourceCommit: 7eed0e1e4ab478d78dc7ca23c19ae77406776e4e
---

{{APIRef("DOM")}}

La méthode **`setAttributeNodeNS()`**, rattachée à l'interface [`Element`](/fr/docs/Web/API/Element), ajoute un nouveau nœud [`Attr`](/fr/docs/Web/API/Attr) d'un espace de noms à l'élément courant.

S'il n'est pas nécessaire de travailler sur le nœud [`Attr`](/fr/docs/Web/API/Attr) avant de l'ajouter (par exemple en le clonant depuis un autre élément), on pourra utiliser la méthode [`setAttributeNS()`](/fr/docs/Web/API/Element/setAttributeNS) à la place.

Si vous manipulez des documents HTML et n'avez pas besoin d'utiliser d'espace de noms, vous pouvez utiliser la méthode [`setAttribute()`](/fr/docs/Web/API/Element/setAttribute) à la place.

## Syntaxe

```js-nolint
setAttributeNodeNS(attributeNode)
```

### Paramètre

- `attributeNode`
  - : Un nœud [`Attr`](/fr/docs/Web/API/Attr) à associer à l'élément courant (en ajout ou remplacement).

### Valeur de retour

L'éventuel nœud [`Attr`](/fr/docs/Web/API/Attr) remplacé.

## Exemples

```js
// <div id="one" xmlns:myNS="http://www.mozilla.org/ns/specialspace"
//            myNS:special-align="utterleft">one</div>
// <div id="two">two</div>

const myns = "http://www.mozilla.org/ns/specialspace";
const d1 = document.getElementById("one");
const d2 = document.getElementById("two");
const a = d1.getAttributeNodeNS(myns, "special-align");
d2.setAttributeNodeNS(a.cloneNode(true));
console.log(d2.attributes[1].value); // returns: `utterleft'
```

## Notes

Si l'attribut indiqué existe déjà sur l'élément, cet attribut est remplacé par le nouveau et l'ancien est renvoyé.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [`Element.setAttribute()`](/fr/docs/Web/API/Element/setAttribute)
- [`Element.setAttributeNode()`](/fr/docs/Web/API/Element/setAttributeNode)
- [`Document.createAttribute()`](/fr/docs/Web/API/Document/createAttribute)
- [`Document.createAttributeNS()`](/fr/docs/Web/API/Document/createAttributeNS)
- [`Element.getAttributeNodeNS()`](/fr/docs/Web/API/Element/getAttributeNodeNS)
