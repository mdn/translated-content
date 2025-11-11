---
title: "Element : méthode removeAttributeNS()"
slug: Web/API/Element/removeAttributeNS
l10n:
  sourceCommit: 7eed0e1e4ab478d78dc7ca23c19ae77406776e4e
---

{{APIRef("DOM")}}

La méthode **`removeAttributeNS()`**, rattachée à l'interface [`Element`](/fr/docs/Web/API/Element), supprime l'attribut avec l'espace de noms et ayant le nom indiqués.

Si vous manipulez des documents HTML et n'avez pas besoin de restreindre à un espace de noms donné, vous pouvez utiliser la méthode [`removeAttribute()`](/fr/docs/Web/API/Element/removeAttribute) à la place.

## Syntaxe

```js-nolint
removeAttributeNS(namespace, attrName)
```

### Paramètres

- `namespace`
  - : Une chaîne de caractères indiquant l'espace de noms auquel appartient l'attribut.
- `attrName`
  - : Une chaîne de caractères indiquant le nom de l'attribut qu'on souhaite supprimer du nœud courant.

### Valeur de retour

Aucune ([`undefined`](/fr/docs/Web/JavaScript/Reference/Global_Objects/undefined)).

## Exemple

```js
// <div id="div1" xmlns:special="http://www.mozilla.org/ns/specialspace"
//      special:specialAlign="utterleft" width="200px" />
d = document.getElementById("div1");
d.removeAttributeNS("http://www.mozilla.org/ns/specialspace", "specialAlign");
// l'élément est devenu : <div id="div1" width="200px" />
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [`Element.removeAttribute()`](/fr/docs/Web/API/Element/removeAttribute)
- [`Element.hasAttributeNS()`](/fr/docs/Web/API/Element/hasAttributeNS)
- [`Element.getAttributeNS()`](/fr/docs/Web/API/Element/getAttributeNS)
- [`Element.setAttributeNS()`](/fr/docs/Web/API/Element/setAttributeNS)
