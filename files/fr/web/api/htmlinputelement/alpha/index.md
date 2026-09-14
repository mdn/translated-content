---
title: "HTMLInputElement : propriété alpha"
short-title: alpha
slug: Web/API/HTMLInputElement/alpha
l10n:
  sourceCommit: 6d4ac4a04fd5c01adc690b9c95de3d9261570212
---

{{APIRef("HTML DOM")}}{{SeeCompatTable}}

La propriété **`alpha`** de l'interface {{DOMxRef("HTMLInputElement")}} reflète l'attribut [`alpha`](/fr/docs/Web/HTML/Reference/Elements/input/color#alpha) de l'élément HTML {{HTMLElement("input")}}. Cet attribut indique si la composante alpha de la couleur CSS peut être modifiée par l'utilisateur·ice et n'a pas à être complètement opaque. Cela concerne uniquement les contrôles de type [couleur](/fr/docs/Web/HTML/Reference/Elements/input/color).

## Valeur

Un booléen.

## Exemples

```html
<input id="color-picker" type="color" alpha />
```

```js
const colorInput = document.getElementById("color-picker");

if (colorInput.alpha) {
  // Les valeurs de couleur contiennent une composante alpha
} else {
  // Les valeurs de couleur sont totalement opaques
}
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'élément HTML `{{HTMLElement("input/color", "&lt;input type=\"color\"&gt;")}}`
