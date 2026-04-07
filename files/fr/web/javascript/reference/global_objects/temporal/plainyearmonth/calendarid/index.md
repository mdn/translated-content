---
title: "Temporal.PlainYearMonth : propriété calendarId"
short-title: calendarId
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainYearMonth/calendarId
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

La propriété d'accesseur **`calendarId`** des instances de {{JSxRef("Temporal.PlainYearMonth")}} retourne une chaîne de caractères représentant le [calendrier](/fr/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendriers) utilisé pour interpréter la date ISO 8601 interne.

Voir [`Intl.supportedValuesOf()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Intl/supportedValuesOf#types_de_calendriers_pris_en_charge) pour une liste des types de calendriers couramment pris en charge.

Le mutateur d'accesseur de `calendarId` est `undefined`. Vous ne pouvez pas modifier cette propriété directement. Il n'existe pas de moyen évident de créer un nouvel objet `Temporal.PlainYearMonth` avec un calendrier différent représentant la même année-mois, vous devez donc le convertir d'abord en un objet {{JSxRef("Temporal.PlainDate")}} en utilisant {{JSxRef("Temporal/PlainYearMonth/toPlainDate", "toPlainDate()")}}, changer le calendrier, puis le reconvertir.

## Exemples

### Utiliser la propriété `calendarId`

```js
const ym = Temporal.PlainYearMonth.from("2021-07");
console.log(ym.calendarId); // "iso8601" ; par défaut

const ym2 = Temporal.PlainYearMonth.from("2021-07-01[u-ca=chinese]");
console.log(ym2.calendarId); // "chinese"
```

### Changer la valeur de `calendarId`

```js
const ym = Temporal.PlainYearMonth.from("2021-07");
const newYM = ym
  .toPlainDate({ day: 1 })
  .withCalendar("chinese")
  .toPlainYearMonth();
console.log(newYM.year, newYM.monthCode); // 2021 "M05"

const newYM2 = ym
  .toPlainDate({ day: 31 })
  .withCalendar("chinese")
  .toPlainYearMonth();
console.log(newYM2.year, newYM2.monthCode); // 2021 "M06"
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'objet {{JSxRef("Temporal.PlainYearMonth")}}
