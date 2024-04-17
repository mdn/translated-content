---
title: "Element : méthode hasAttribute()"
slug: Web/API/Element/hasAttribute
l10n:
  sourceCommit: 7eed0e1e4ab478d78dc7ca23c19ae77406776e4e
---

{{APIRef("DOM")}}

La méthode **`hasAttribute()`**, associée à l'interface [`Element`](/fr/docs/Web/API/Element), renvoie une **valeur booléenne** indiquant si l'élément courant possède l'attribut spécifié ou non.

## Syntaxe

```js-nolint
hasAttribute(name)
```

### Paramètres

- `name`
  - : Une chaine de caractères représentant le nom de l'attribut recherché.

### Valeur de retour

Un booléen indiquant la présence de l'attribut.

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

- [`Element.hasAttributes()`](/fr/docs/Web/API/Element/hasAttributes)
- [`Element.hasAttributeNS()`](/fr/docs/Web/API/Element/hasAttributeNS)
- [`Element.getAttribute()`](/fr/docs/Web/API/Element/getAttribute)
- [`Element.setAttribute()`](/fr/docs/Web/API/Element/setAttribute)
- [`Element.removeAttribute()`](/fr/docs/Web/API/Element/removeAttribute)
- [`Element.toggleAttribute()`](/fr/docs/Web/API/Element/toggleAttribute)
