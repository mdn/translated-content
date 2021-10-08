---
title: Element.getAttributeNames()
slug: Web/API/Element/getAttributeNames
tags:
  - API
  - Attributs
  - DOM
  - Element
  - Méthodes
translation_of: Web/API/Element/getAttributeNames
---
{{APIRef("DOM")}}

`Element.getAttributeNames()` renvoie les noms des attributs de l'élément sous la forme d'un {{jsxref("Array")}} (_tableau_) de chaînes de caractères. Si l'élément n'a pas d'attributs, il retourne un tableau vide.

L'utilisation de `getAttributeNames()` complété par {{domxref("Element.getAttribute","getAttribute()")}}, est une alternative efficiente et performante pour l'accès à {{domxref("Element.attributes")}}.

## Syntaxe

    let attributeNames = element.getAttributeNames();

## Exemple

```js
// Itérer sur les attributs de l'élément
for(let name of element.getAttributeNames())
{
	let value = element.getAttribute(name);
	console.log(name, value);
}
```

## Polyfill

```html
if (Element.prototype.getAttributeNames == undefined) {
  Element.prototype.getAttributeNames = function () {
    var attributes = this.attributes;
    var length = attributes.length;
    var result = new Array(length);
    for (var i = 0; i < length; i++) {
      result[i] = attributes[i].name;
    }
    return result;
  };
}
```

## Spécifications

| Spécification                                                                                                            | Statut                           | Commentaire          |
| ------------------------------------------------------------------------------------------------------------------------ | -------------------------------- | -------------------- |
| {{SpecName("DOM WHATWG", "#dom-element-getattributenames", "Element.getAttributeNames")}} | {{Spec2("DOM WHATWG")}} | Définition initiale. |

## Compatibilité des navigateurs

{{Compat("api.Element.getAttributeNames")}}
