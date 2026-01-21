---
title: "HTMLInputElement : propriété colorSpace"
short-title: colorSpace
slug: Web/API/HTMLInputElement/colorSpace
l10n:
  sourceCommit: 6d4ac4a04fd5c01adc690b9c95de3d9261570212
---

{{APIRef("HTML DOM")}}{{SeeCompatTable}}

La propriété **`colorSpace`** de l'interface {{DOMxRef("HTMLInputElement")}} reflète l'attribut [`colorspace`](/fr/docs/Web/HTML/Reference/Elements/input/color#colorspace) de l'élément HTML {{HTMLElement("input")}}. Cet attribut indique si l'{{Glossary("color space", "espace colorimétrique")}} de la couleur CSS sérialisée est `sRGB` (la valeur par défaut) ou `display-p3`. Cela ne concerne que les contrôles de type [couleur](/fr/docs/Web/HTML/Reference/Elements/input/color).

## Valeur

Une chaîne de caractères contenant la valeur de l'attribut [`colorspace`](/fr/docs/Web/HTML/Reference/Elements/input/color#colorspace).

## Exemples

### Obtenir et définir les espaces colorimétriques

```html
<input id="color-picker" type="color" colorspace="display-p3" alpha />
```

```js
const colorInput = document.getElementById("color-picker");
console.log(colorInput.colorSpace); // "display-p3"
colorInput.colorSpace = "limited-srgb"; // conversion en srgb
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'élément HTML `{{HTMLElement("input/color", "&lt;input type=\"color\"&gt;")}}`
