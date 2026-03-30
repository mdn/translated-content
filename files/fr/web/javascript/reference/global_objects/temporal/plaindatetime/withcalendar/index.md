---
title: "Temporal.PlainDateTime : méthode withCalendar()"
short-title: withCalendar()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainDateTime/withCalendar
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

La méthode **`withCalendar()`** des instances de {{JSxRef("Temporal.PlainDateTime")}} retourne un nouvel objet `Temporal.PlainDateTime` représentant cette date et heure interprétée dans le nouveau système de calendrier. Comme tous les objets `Temporal` sont conçus pour être immuables, cette méthode fonctionne essentiellement comme le mutateur pour la propriété {{JSxRef("Temporal/PlainDateTime/calendarId", "calendarId")}} de la date et heure.

Pour remplacer les propriétés composants de la date et heure, utilisez la méthode {{JSxRef("Temporal/PlainDateTime/with", "with()")}} à la place.

## Syntaxe

```js-nolint
withCalendar(calendar)
```

### Paramètres

- `calendar`
  - : Une chaîne de caractères correspondant à la propriété {{JSxRef("Temporal/PlainDateTime/calendarId", "calendarId")}}. Voir [`Intl.supportedValuesOf()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Intl/supportedValuesOf#types_de_calendriers_pris_en_charge) pour une liste des types de calendriers couramment pris en charge.

### Valeur de retour

Un nouvel objet `Temporal.PlainDateTime`, représentant la date et heure définie par le `PlainDateTime` d'origine, interprétée dans le nouveau système de calendrier.

### Exceptions

- {{JSxRef("TypeError")}}
  - : Levée si `calendar` n'est pas une chaîne de caractères.
- {{JSxRef("RangeError")}}
  - : Levée si `calendar` n'est pas un identifiant de calendrier valide.

## Exemples

### Utiliser la méthode `withCalendar()`

```js
const dt = Temporal.PlainDateTime.from("2021-07-01T12:34:56");
const newDT = dt.withCalendar("islamic-umalqura");
console.log(newDT.toLocaleString("en-US", { calendar: "islamic-umalqura" }));
// 11/21/1442 AH, 12:34:56 PM
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'objet La méthode {{JSxRef("Temporal.PlainDateTime")}}
- La méthode {{JSxRef("Temporal/PlainDateTime/with", "Temporal.PlainDateTime.prototype.with()")}}
- La méthode {{JSxRef("Temporal/PlainDateTime/withPlainTime", "Temporal.PlainDateTime.prototype.withPlainTime()")}}
- La méthode statique {{JSxRef("Temporal/PlainDateTime/from", "Temporal.PlainDateTime.from()")}}
- La méthode {{JSxRef("Temporal/PlainDateTime/calendarId", "Temporal.PlainDateTime.prototype.calendarId")}}
