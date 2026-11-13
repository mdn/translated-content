---
title: "HTMLInputElement : propriété step"
short-title: step
slug: Web/API/HTMLInputElement/step
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("HTML DOM")}}

La propriété **`step`** de l'interface {{DOMxRef("HTMLInputElement")}} indique l'incrément par lequel les éléments HTML {{HTMLElement("input")}} de type numérique ou date et heure peuvent varier. Elle reflète l'attribut [`step`](/fr/docs/Web/HTML/Reference/Elements/input#step) de l'élément. Les valeurs valides comprennent la chaîne de caractères `"any"` ou une chaîne de caractères contenant un nombre à virgule flottante positif. Si l'attribut n'est pas explicitement défini, la propriété `step` est une chaîne de caractères vide.

## Valeur

Une chaîne de caractères représentant la valeur de `step` de l'élément ou une chaîne de caractères vide si aucun pas n'est défini explicitement.

## Exemples

```js
const inputElement = document.querySelector('[type="number"]');
console.log(inputElement.step); // la valeur actuelle de l'attribut step
inputElement.step = 0.1; // définit la valeur de step à "0.1"
inputElement.step = "any"; // définit le step à "any"
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Les éléments HTML {{HTMLElement("input")}} de type `{{HTMLElement("input/range", "range")}}`, `{{HTMLElement("input/number", "number")}}`, `{{HTMLElement("input/date", "date")}}`, `{{HTMLElement("input/month", "month")}}`, `{{HTMLElement("input/week", "week")}}` et `{{HTMLElement("input/time", "time")}}`
- La propriété {{DOMxRef("HTMLInputElement.value")}}
- La propriété {{DOMxRef("HTMLInputElement.type")}}
