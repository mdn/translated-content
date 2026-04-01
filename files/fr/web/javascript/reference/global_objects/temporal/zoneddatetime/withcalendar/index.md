---
title: "Temporal.ZonedDateTime : méthode withCalendar()"
short-title: withCalendar()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime/withCalendar
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

La méthode **`withCalendar()`** des instances de {{JSxRef("Temporal.ZonedDateTime")}} retourne un nouvel objet `Temporal.ZonedDateTime` représentant cette date et cette heure interprétées dans le nouveau système de calendrier. Comme tous les objets `Temporal` sont conçus pour être immuables, cette méthode fonctionne essentiellement comme le mutateur de la propriété {{JSxRef("Temporal/ZonedDateTime/calendarId", "calendarId")}} de la date et de l'heure.

Pour remplacer les propriétés de composant de la date et de l'heure, utilisez la méthode {{JSxRef("Temporal/ZonedDateTime/with", "with()")}}. Pour remplacer son fuseau horaire, utilisez la méthode {{JSxRef("Temporal/ZonedDateTime/withTimeZone", "withTimeZone()")}}.

## Syntaxe

```js-nolint
withCalendar(calendar)
```

### Paramètres

- `calendar`
  - : Une chaîne de caractères correspondant à la propriété {{JSxRef("Temporal/ZonedDateTime/calendarId", "calendarId")}}. Voir [`Intl.supportedValuesOf()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Intl/supportedValuesOf#types_de_calendriers_pris_en_charge) pour une liste des types de calendriers couramment pris en charge.

### Valeur de retour

Un nouvel objet `Temporal.ZonedDateTime`, représentant la date et l'heure définies par le `ZonedDateTime` d'origine, interprétées dans le nouveau système de calendrier.

### Exceptions

- {{JSxRef("TypeError")}}
  - : Levée si `calendar` n'est pas une chaîne de caractères.
- {{JSxRef("RangeError")}}
  - : Levée si `calendar` n'est pas un identifiant de calendrier valide.

## Exemples

### Utiliser la méthode `withCalendar()`

```js
const zdt = Temporal.ZonedDateTime.from(
  "2021-07-01T12:34:56[America/New_York]",
);
const newZDT = zdt.withCalendar("islamic-umalqura");
console.log(newZDT.toLocaleString("en-US", { calendar: "islamic-umalqura" }));
// 11/21/1442 AH, 12:34:56 PM EDT
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'objet {{JSxRef("Temporal.ZonedDateTime")}}
- La méthode {{JSxRef("Temporal/ZonedDateTime/with", "Temporal.ZonedDateTime.prototype.with()")}}
- La méthode {{JSxRef("Temporal/ZonedDateTime/withTimeZone", "Temporal.ZonedDateTime.prototype.withTimeZone()")}}
- La méthode {{JSxRef("Temporal/ZonedDateTime/withPlainTime", "Temporal.ZonedDateTime.prototype.withPlainTime()")}}
- La méthode statique {{JSxRef("Temporal/ZonedDateTime/from", "Temporal.ZonedDateTime.from()")}}
- La propriété {{JSxRef("Temporal/ZonedDateTime/calendarId", "Temporal.ZonedDateTime.prototype.calendarId")}}
