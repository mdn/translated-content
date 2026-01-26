---
title: "HTMLTimeElement : propriété dateTime"
short-title: dateTime
slug: Web/API/HTMLTimeElement/dateTime
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("HTML DOM")}}

La propriété **`dateTime`** de l'interface {{DOMxRef("HTMLTimeElement")}} est une chaîne de caractères qui reflète l'attribut HTML [`datetime`](/fr/docs/Web/HTML/Reference/Elements/time#datetime), contenant une forme interprétable par un ordinateur de la valeur de date et d'heure de l'élément.

## Valeur

Une chaîne de caractères. Pour les formats valides, voir les [valeurs valides de `datetime`](/fr/docs/Web/HTML/Reference/Elements/time#valid_datetime_values).

## Exemple

```js
// Supposons qu'il y ai un élément <time id="t"> dans le HTML

const t = document.getElementById("t");
t.dateTime = "6w 5h 34m 5s";
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'interface {{DOMxRef("HTMLTimeElement")}}
- La propriété {{DOMxRef("HTMLModElement.dateTime")}}
- [Chaînes de date](/fr/docs/Web/HTML/Guides/Date_and_time_formats#représentation_des_dates)
- [Chaînes de date et heure locales](/fr/docs/Web/HTML/Guides/Date_and_time_formats#représentation_des_dates_et_heures_locales)
