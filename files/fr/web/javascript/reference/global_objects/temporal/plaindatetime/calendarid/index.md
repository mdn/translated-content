---
title: "Temporal.PlainDateTime : propriété calendarId"
short-title: calendarId
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainDateTime/calendarId
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

La propriété d'accesseur **`calendarId`** des instances de {{JSxRef("Temporal.PlainDateTime")}} retourne une chaîne de caractères représentant le [calendrier](/fr/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendriers) utilisé pour interpréter la date ISO 8601 interne.

Voir [`Intl.supportedValuesOf()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Intl/supportedValuesOf#types_de_calendriers_pris_en_charge) pour une liste des types de calendriers couramment pris en charge.

Le mutateur d'accesseur de `calendarId` est `undefined`. Vous ne pouvez pas modifier cette propriété directement. Utilisez la méthode {{JSxRef("Temporal/PlainDateTime/withCalendar", "withCalendar()")}} pour créer un nouvel objet `Temporal.PlainDateTime` avec la nouvelle valeur souhaitée.

## Exemples

### Utiliser la propriété `calendarId`

```js
const dt = Temporal.PlainDateTime.from("2021-07-01T08:00:00");
console.log(dt.calendarId); // "iso8601" ; par défaut

const dt2 = Temporal.PlainDateTime.from("2021-07-01T08:00:00[u-ca=chinese]");
console.log(dt2.calendarId); // "chinese"

const dt3 = dt2.withCalendar("hebrew");
console.log(dt3.calendarId); // "hebrew"
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'objet {{JSxRef("Temporal.PlainDateTime")}}
