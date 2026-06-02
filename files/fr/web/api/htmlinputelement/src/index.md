---
title: "HTMLInputElement : propriété src"
short-title: src
slug: Web/API/HTMLInputElement/src
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("HTML DOM")}}

La propriété **`src`** de l'interface {{DOMxRef("HTMLInputElement")}} définit la source d'une image à afficher comme bouton de soumission graphique. Elle reflète l'attribut [`src`](/fr/docs/Web/HTML/Reference/Elements/input#src) de l'élément HTML {{HTMLElement("input")}}.

La propriété `src` est valide uniquement pour le type [`image`](/fr/docs/Web/HTML/Reference/Elements/input/image).

## Valeur

Une chaîne de caractères.

## Exemples

```js
const inputElement = document.getElementById("imageButton");
console.log(input.src);
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'interface {{DOMxRef("HTMLButtonElement")}}
- L'élément HTML {{HTMLElement("button")}}
- L'élément HTML {{HTMLElement("input")}}
- L'élément HTML {{HTMLElement("img")}}
