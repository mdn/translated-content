---
title: "Element : méthode removeAttributeNS()"
short-title: removeAttributeNS()
slug: Web/API/Element/removeAttributeNS
l10n:
  sourceCommit: 20c51db7895b1b6f41d4fa90e71830f4b6678eea
---

{{APIRef("DOM")}}

La méthode **`removeAttributeNS()`** de l'interface {{DOMxRef("Element")}} supprime l'attribut défini, associé à l'espace de noms défini de l'élément.

Si vous travaillez avec du HTML et que vous n'avez pas besoin de définir l'attribut demandé comme faisant partie d'un espace de noms spécifique, utilisez la méthode {{DOMxRef("Element.removeAttribute()", "removeAttribute()")}} à la place.

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

Aucune ({{JSxRef("undefined")}}).

## Exemples

```js
// Étant donné :
//   <div id="div1" xmlns:special="http://www.mozilla.org/ns/specialspace"
//     special:specialAlign="utterleft" width="200px" />
d = document.getElementById("div1");
d.removeAttributeNS("http://www.mozilla.org/ns/specialspace", "specialAlign");
// Est devenu : <div id="div1" width="200px" />
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La méthode {{DOMxRef("Element.hasAttributeNS()")}}
- La méthode {{DOMxRef("Element.getAttributeNS()")}}
- La méthode {{DOMxRef("Element.setAttributeNS()")}}
