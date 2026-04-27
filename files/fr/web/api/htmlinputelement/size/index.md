---
title: "HTMLInputElement : propriété size"
short-title: size
slug: Web/API/HTMLInputElement/size
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("HTML DOM")}}

La propriété **`size`** de l'interface {{DOMxRef("HTMLInputElement")}} définit le nombre de caractères visibles affichés. Elle reflète l'attribut [`size`](/fr/docs/Web/HTML/Reference/Elements/input#size) de l'élément HTML {{HTMLElement("input")}}.

La propriété `size` est pertinente uniquement pour les types de champs de saisie [`text`](/fr/docs/Web/HTML/Reference/Elements/input/text), [`search`](/fr/docs/Web/HTML/Reference/Elements/input/search), [`tel`](/fr/docs/Web/HTML/Reference/Elements/input/tel), [`email`](/fr/docs/Web/HTML/Reference/Elements/input/email), [`url`](/fr/docs/Web/HTML/Reference/Elements/input/url) et [`password`](/fr/docs/Web/HTML/Reference/Elements/input/password). La valeur est un entier non négatif supérieur à zéro. Si elle est omise ou invalide, la valeur par défaut est `20`.

## Valeur

Un entier.

## Exemples

```js
const inputElement = document.getElementById("password");
console.log(inputElement.size);
inputElement.size = 12;
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{DOMxRef("HTMLInputElement.minLength")}}
- La propriété {{DOMxRef("HTMLInputElement.maxLength")}}
- La propriété {{DOMxRef("HTMLSelectElement.size")}}
