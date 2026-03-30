---
title: "Temporal.PlainDate : propriété calendarId"
short-title: calendarId
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainDate/calendarId
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

La propriété d'accesseur **`calendarId`** des instances de {{JSxRef("Temporal.PlainDate")}} retourne une chaîne de caractères représentant le [calendrier](/fr/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendriers) utilisé pour interpréter la date ISO 8601 interne.

Voir [`Intl.supportedValuesOf()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Intl/supportedValuesOf#types_de_calendriers_pris_en_charge) pour une liste des types de calendriers couramment pris en charge.

Le mutateur d'accesseur de `calendarId` est `undefined`. Vous ne pouvez pas modifier cette propriété directement. Utilisez la méthode {{JSxRef("Temporal/PlainDate/withCalendar", "withCalendar()")}} pour créer un nouvel objet `Temporal.PlainDate` avec la nouvelle valeur souhaitée.

## Exemples

### Utiliser la propriété `calendarId`

```js
const date = Temporal.PlainDate.from("2021-07-01");
console.log(date.calendarId); // "iso8601" ; par défaut

const date2 = Temporal.PlainDate.from("2021-07-01[u-ca=chinese]");
console.log(date2.calendarId); // "chinese"

const date3 = date2.withCalendar("hebrew");
console.log(date3.calendarId); // "hebrew"
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'objet {{JSxRef("Temporal.PlainDate")}}
