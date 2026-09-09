---
title: "Element : méthode hasAttributes()"
short-title: hasAttributes()
slug: Web/API/Element/hasAttributes
l10n:
  sourceCommit: 990ab6637bb4d44f059597262cbf3c51abae79eb
---

{{APIRef("DOM")}}

La méthode **`hasAttributes()`** de l'interface {{DOMxRef("Element")}} retourne une valeur booléenne indiquant si l'élément courant possède des attributs ou non.

## Syntaxe

```js-nolint
hasAttributes()
```

### Paramètres

Aucun.

### Valeur de retour

Un booléen.

## Exemples

```js
let toto = document.getElementById("toto");
if (toto.hasAttributes()) {
  // Faire quelque chose avec 'toto.attributes'
}
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{DOMxRef("Element.attributes")}}
- La méthode {{DOMxRef("Element.hasAttribute()")}}
- La méthode {{DOMxRef("Element.getAttribute()")}}
- La méthode {{DOMxRef("Element.setAttribute()")}}
- La méthode {{DOMxRef("Element.removeAttribute()")}}
- La méthode {{DOMxRef("Element.toggleAttribute()")}}
