---
title: "Temporal.PlainMonthDay : propriété calendarId"
short-title: calendarId
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainMonthDay/calendarId
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

La propriété d'accesseur **`calendarId`** des instances de {{JSxRef("Temporal.PlainMonthDay")}} retourne une chaîne de caractères représentant le [calendrier](/fr/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendriers) utilisé pour interpréter la date ISO 8601 interne.

Voir [`Intl.supportedValuesOf()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Intl/supportedValuesOf#types_de_calendriers_pris_en_charge) pour une liste des types de calendriers couramment pris en charge.

Le mutateur d'accesseur de `calendarId` est `undefined`. Vous ne pouvez pas modifier cette propriété directement. Il n'existe pas de méthode évidente pour créer un nouvel objet `Temporal.PlainMonthDay` avec un calendrier différent qui représente le même mois et jour, il faut donc d'abord le convertir en un objet {{JSxRef("Temporal.PlainDate")}} en utilisant {{JSxRef("Temporal/PlainMonthDay/toPlainDate", "toPlainDate()")}}, changer le calendrier, puis le reconvertir.

## Exemples

### Utiliser la propriété `calendarId`

```js
const md = Temporal.PlainMonthDay.from("07-01");
console.log(md.calendarId); // "iso8601" ; par défaut

const md2 = Temporal.PlainMonthDay.from("2021-07-01[u-ca=chinese]");
console.log(md2.calendarId); // "chinese"
```

### Changer la valeur de `calendarId`

```js
const md = Temporal.PlainMonthDay.from("07-01");
const newMD = md
  .toPlainDate({ year: 2021 })
  .withCalendar("chinese")
  .toPlainMonthDay();
console.log(newMD.monthCode, newMD.day); // "M05" 22

const newMD2 = md
  .toPlainDate({ year: 2022 })
  .withCalendar("chinese")
  .toPlainMonthDay();
console.log(newMD2.monthCode, newMD2.day); // "M06" 3
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'objet {{JSxRef("Temporal.PlainMonthDay")}}
