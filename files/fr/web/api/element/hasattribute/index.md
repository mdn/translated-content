---
title: "Element : méthode hasAttribute()"
short-title: hasAttribute()
slug: Web/API/Element/hasAttribute
l10n:
  sourceCommit: 990ab6637bb4d44f059597262cbf3c51abae79eb
---

{{APIRef("DOM")}}

La méthode **`hasAttribute()`** de l'interface {{DOMxRef("Element")}} retourne une valeur **booléenne** indiquant si l'élément courant possède l'attribut défini ou non.

## Syntaxe

```js-nolint
hasAttribute(name)
```

### Paramètres

- `name`
  - : Une chaîne de caractères représentant le nom de l'attribut recherché.

### Valeur de retour

Un booléen.

## Exemples

```js
const toto = document.getElementById("toto");
if (toto.hasAttribute("truc")) {
  // faire quelque chose
}
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La méthode {{DOMxRef("Element.hasAttributes()")}}
- La méthode {{DOMxRef("Element.getAttribute()")}}
- La méthode {{DOMxRef("Element.setAttribute()")}}
- La méthode {{DOMxRef("Element.removeAttribute()")}}
- La méthode {{DOMxRef("Element.toggleAttribute()")}}
