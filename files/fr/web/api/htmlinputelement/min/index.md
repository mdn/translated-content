---
title: "HTMLInputElement : propriété min"
short-title: min
slug: Web/API/HTMLInputElement/min
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("HTML DOM")}}

La propriété **`min`** de l'interface {{DOMxRef("HTMLInputElement")}} reflète l'attribut [`min`](/fr/docs/Web/HTML/Reference/Elements/input#min) de l'élément HTML {{HTMLElement("input")}}, qui définit généralement la valeur minimale valide pour un champ de saisie numérique ou de date-heure. Si l'attribut n'est pas explicitement défini, la propriété `min` est une chaîne vide.

## Valeur

Une chaîne de caractères représentant la valeur `min` de l'élément ou une chaîne vide si aucun `min` n'est explicitement défini.

## Exemple

```js
const inputElement = document.querySelector("#range");
console.log(inputElement.min); // la valeur actuelle de l'attribut min
inputElement.min = 0; // définit la valeur min à "0"
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Les éléments HTML {{HTMLElement("input")}} de type `{{HTMLElement("input/range", "range")}}`, `{{HTMLElement("input/number", "number")}}`, `{{HTMLElement("input/date", "date")}}`, `{{HTMLElement("input/month", "month")}}`, `{{HTMLElement("input/week", "week")}}` et `{{HTMLElement("input/time", "time")}}`
- La propriété {{DOMxRef("HTMLInputElement.max")}}
- La propriété {{DOMxRef("HTMLInputElement.value")}}
- La propriété {{DOMxRef("HTMLInputElement.type")}}
