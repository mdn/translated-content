---
title: "Temporal.PlainDate : méthode withCalendar()"
short-title: withCalendar()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainDate/withCalendar
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

La méthode **`withCalendar()`** des instances de {{JSxRef("Temporal.PlainDate")}} retourne un nouvel objet `Temporal.PlainDate` représentant cette date interprétée dans le nouveau système de calendrier. Comme tous les objets `Temporal` sont conçus pour être immuables, cette méthode fonctionne essentiellement comme le mutateur de la propriété {{JSxRef("Temporal/PlainDate/calendarId", "calendarId")}} de la date.

Pour remplacer les propriétés du composant de date, utilisez la méthode {{JSxRef("Temporal/PlainDate/with", "with()")}} à la place.

## Syntaxe

```js-nolint
withCalendar(calendar)
```

### Paramètres

- `calendar`
  - : Une chaîne de caractères correspondant à la propriété {{JSxRef("Temporal/PlainDate/calendarId", "calendarId")}}. Consultez [`Intl.supportedValuesOf()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Intl/supportedValuesOf#types_de_calendriers_pris_en_charge) pour une liste des types de calendriers couramment pris en charge.

### Valeur de retour

Un nouvel objet `Temporal.PlainDate`, représentant la date définie par l'objet `PlainDate` d'origine, interprétée dans le nouveau système de calendrier.

### Exceptions

- {{JSxRef("TypeError")}}
  - : Levée si `calendar` n'est pas une chaîne de caractères.
- {{JSxRef("RangeError")}}
  - : Levée si `calendar` n'est pas un identifiant de calendrier valide.

## Exemples

### Utiliser la méthode `withCalendar()`

```js
const date = Temporal.PlainDate.from("2021-07-01");
const newDate = date.withCalendar("islamic-umalqura");
console.log(newDate.toLocaleString("en-US", { calendar: "islamic-umalqura" }));
// 11/21/1442 AH
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'objet {{JSxRef("Temporal.PlainDate")}}
- La méthode {{JSxRef("Temporal/PlainDate/with", "Temporal.PlainDate.prototype.with()")}}
- La méthode statique {{JSxRef("Temporal/PlainDate/from", "Temporal.PlainDate.from()")}}
- La propriété {{JSxRef("Temporal/PlainDate/calendarId", "Temporal.PlainDate.prototype.calendarId")}}
