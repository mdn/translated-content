---
title: "HTMLInputElement : propriété max"
short-title: max
slug: Web/API/HTMLInputElement/max
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("HTML DOM")}}

La propriété **`max`** de l'interface {{DOMxRef("HTMLInputElement")}} reflète l'attribut [`max`](/fr/docs/Web/HTML/Reference/Elements/input#max) de l'élément HTML {{HTMLElement("input")}}, qui définit généralement la valeur maximale valide pour un champ de saisie numérique ou de date-heure. Si l'attribut n'est pas explicitement défini, la propriété `max` est une chaîne vide.

## Valeur

Une chaîne de caractères représentant la valeur `max` de l'élément ou une chaîne vide si aucun `max` n'est explicitement défini.

## Exemple

```js
const inputElement = document.querySelector("#time");
console.log(inputElement.max); // la valeur actuelle de l'attribut max
inputElement.max = "18:00:00"; // définit la valeur max à 18h00
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Les éléments HTML {{HTMLElement("input")}} de type `{{HTMLElement("input/range", "range")}}`, `{{HTMLElement("input/number", "number")}}`, `{{HTMLElement("input/date", "date")}}`, `{{HTMLElement("input/month", "month")}}`, `{{HTMLElement("input/week", "week")}}` et `{{HTMLElement("input/time", "time")}}`
- La propriété {{DOMxRef("HTMLInputElement.min")}}
- La propriété {{DOMxRef("HTMLInputElement.value")}}
- La propriété {{DOMxRef("HTMLInputElement.type")}}
