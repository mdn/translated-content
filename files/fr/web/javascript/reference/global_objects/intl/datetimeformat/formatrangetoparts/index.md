---
title: "Intl.DateTimeFormat : méthode formatRangeToParts()"
short-title: formatRangeToParts()
slug: Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/formatRangeToParts
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

La méthode **`formatRangeToParts()`** des instances de {{JSxRef("Intl.DateTimeFormat")}} retourne un tableau d'objets représentant chaque partie de la chaîne de caractères formatée qui serait retournée par {{JSxRef("Intl/DatetimeFormat/formatRange", "formatRange()")}}. Elle est utile pour construire des chaînes de caractères personnalisées à partir des jetons spécifiques à la locale.

{{InteractiveExample("Démonstration JavaScript&nbsp;: Intl.DateTimeFormat.prototype.formatRangeToParts()", "taller")}}

```js interactive-example
const startDate = new Date(Date.UTC(2007, 0, 10, 10, 0, 0)); // > 'Wed, 10 Jan 2007 10:00:00 GMT'
const endDate = new Date(Date.UTC(2007, 0, 10, 11, 0, 0)); // > 'Wed, 10 Jan 2007 11:00:00 GMT'

const dateTimeFormat = new Intl.DateTimeFormat("en", {
  hour: "numeric",
  minute: "numeric",
});

const parts = dateTimeFormat.formatRangeToParts(startDate, endDate);
for (const part of parts) {
  console.log(part);
}
// Résultat attendu (en fuseau horaire GMT) :
// Object { type: "hour", value: "2", source: "startRange" }
// Object { type: "literal", value: ":", source: "startRange" }
// Object { type: "minute", value: "00", source: "startRange" }
// Object { type: "literal", value: " — ", source: "shared" }
// Object { type: "hour", value: "3", source: "endRange" }
// Object { type: "literal", value: ":", source: "endRange" }
// Object { type: "minute", value: "00", source: "endRange" }
// Object { type: "literal", value: " ", source: "shared" }
// Object { type: "dayPeriod", value: "AM", source: "shared" }
```

## Syntaxe

```js-nolint
formatRangeToParts(startDate, endDate)
```

### Paramètres

- `startDate`
  - : Début de l'intervalle de dates. Peut être un objet {{JSxRef("Date")}} ou {{JSxRef("Temporal.PlainDateTime")}}. Il peut également s'agir d'un objet {{JSxRef("Temporal.PlainTime")}}, {{JSxRef("Temporal.PlainDate")}}, {{JSxRef("Temporal.PlainYearMonth")}} ou {{JSxRef("Temporal.PlainMonthDay")}} si l'objet `DateTimeFormat` a été configuré pour afficher au moins une partie pertinente de la date.
    > [!NOTE]
    > Un objet {{JSxRef("Temporal.ZonedDateTime")}} provoquera toujours une exception `TypeError`&nbsp;; utilisez {{JSxRef("Temporal/ZonedDateTime/toLocaleString", "Temporal.ZonedDateTime.prototype.toLocaleString()")}} ou convertissez-le en objet {{JSxRef("Temporal.PlainDateTime")}} à la place.
- `endDate`
  - : Fin de l'intervalle de dates. Doit être du même type que `startDate`.

### Valeur de retour

Un {{JSxRef("Array")}} d'objets contenant l'intervalle de dates formaté en parties. Chaque objet possède trois propriétés, `type`, `value` et `source`, chacune contenant une chaîne de caractères. La concaténation des chaînes de caractères `value`, dans l'ordre fourni, donnera la même chaîne de caractères que {{JSxRef("Intl/DateTimeFormat/formatRange", "formatRange()")}}. La propriété `type` peut avoir les mêmes valeurs que {{JSxRef("Intl/DateTimeFormat/formatToParts", "formatToParts()")}}. La propriété `source` peut prendre l'une des valeurs suivantes&nbsp;:

- `startRange`
  - : Le jeton fait partie de la date de début.
- `endRange`
  - : Le jeton fait partie de la date de fin.
- `shared`
  - : Le jeton est partagé entre la date de début et la date de fin&nbsp;; par exemple, si les dates de début et de fin partagent la même période de la journée, ce jeton peut être réutilisé. Tous les littéraux qui font partie du motif d'intervalle lui-même, comme le séparateur `" — "`, sont également marqués comme `shared`.

Si les dates de début et de fin sont équivalentes à la précision de la sortie, alors la sortie contient la même liste de jetons que l'appel à {{JSxRef("Intl/DateTimeFormat/formatToParts", "formatToParts()")}} sur la date de début, avec tous les jetons marqués comme `source: "shared"`.

### Utiliser la méthode `formatRangeToParts()`

La méthode `formatRange()` retourne des chaînes de caractères localisées et opaques qui ne peuvent pas être manipulées directement&nbsp;:

```js
const date1 = new Date(Date.UTC(1906, 0, 10, 10, 0, 0)); // Wed, 10 Jan 1906 10:00:00 GMT
const date2 = new Date(Date.UTC(1906, 0, 10, 11, 0, 0)); // Wed, 10 Jan 1906 11:00:00 GMT

const fmt = new Intl.DateTimeFormat("en", {
  hour: "numeric",
  minute: "numeric",
});

console.log(fmt.formatRange(date1, date2)); // '10:00 — 11:00 AM'
```

Cependant, dans de nombreuses interfaces utilisateur, vous pouvez vouloir personnaliser le formatage de cette chaîne de caractères ou l'entrelacer avec d'autres textes. La méthode `formatRangeToParts()` produit la même information en parties&nbsp;:

```js
console.log(fmt.formatRangeToParts(date1, date2));

// retourne la valeur:
[
  { type: "hour", value: "10", source: "startRange" },
  { type: "literal", value: ":", source: "startRange" },
  { type: "minute", value: "00", source: "startRange" },
  { type: "literal", value: " — ", source: "shared" },
  { type: "hour", value: "11", source: "endRange" },
  { type: "literal", value: ":", source: "endRange" },
  { type: "minute", value: "00", source: "endRange" },
  { type: "literal", value: " ", source: "shared" },
  { type: "dayPeriod", value: "AM", source: "shared" },
];
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'objet {{JSxRef("Intl.DateTimeFormat")}}
- La méthode {{JSxRef("Intl/DateTimeFormat/formatRange", "Intl.DateTimeFormat.prototype.formatRange()")}}
