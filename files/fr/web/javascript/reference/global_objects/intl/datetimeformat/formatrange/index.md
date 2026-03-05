---
title: "Intl.DateTimeFormat : méthode formatRange()"
short-title: formatRange()
slug: Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/formatRange
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

La méthode **`formatRange()`** des instances de {{JSxRef("Intl.DateTimeFormat")}} formate un intervalle de dates de la façon la plus concise possible selon les locales et options fournies lors de l'instanciation de cet objet `Intl.DateTimeFormat`.

{{InteractiveExample("Démonstration JavaScript&nbsp;: Intl.DateTimeFormat.prototype.formatRange()", "taller")}}

```js interactive-example
const options1 = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};
const options2 = { year: "2-digit", month: "numeric", day: "numeric" };

const startDate = new Date(Date.UTC(2007, 0, 10, 10, 0, 0));
const endDate = new Date(Date.UTC(2008, 0, 10, 11, 0, 0));

const dateTimeFormat = new Intl.DateTimeFormat("en", options1);
console.log(dateTimeFormat.formatRange(startDate, endDate));
// Résultat attendu : "Wednesday, January 10, 2007 — Thursday, January 10, 2008"

const dateTimeFormat2 = new Intl.DateTimeFormat("en", options2);
console.log(dateTimeFormat2.formatRange(startDate, endDate));
// Résultat attendu : "1/10/07 — 1/10/08"
```

## Syntaxe

```js-nolint
formatRange(startDate, endDate)
```

### Paramètres

- `startDate`
  - : Début de l'intervalle de dates. Peut être un objet {{JSxRef("Date")}} ou {{JSxRef("Temporal.PlainDateTime")}}. Il peut également s'agir d'un objet {{JSxRef("Temporal.PlainTime")}}, {{JSxRef("Temporal.PlainDate")}}, {{JSxRef("Temporal.PlainYearMonth")}} ou {{JSxRef("Temporal.PlainMonthDay")}} si l'objet `DateTimeFormat` a été configuré pour afficher au moins une partie pertinente de la date.
    > [!NOTE]
    > Un objet {{JSxRef("Temporal.ZonedDateTime")}} provoquera toujours une exception `TypeError`&nbsp;; utilisez {{JSxRef("Temporal/ZonedDateTime/toLocaleString", "Temporal.ZonedDateTime.prototype.toLocaleString()")}} ou convertissez-le en objet {{JSxRef("Temporal.PlainDateTime")}} à la place.
- `endDate`
  - : Fin de l'intervalle de dates. Doit être du même type que `startDate`.

### Valeur de retour

Une chaîne de caractères représentant l'intervalle de dates donné, formatée selon la locale et les options de format de cet objet {{JSxRef("Intl.DateTimeFormat")}}. Si les dates de début et de fin sont équivalentes à la précision de la sortie, la sortie ne contiendra qu'une seule date.

## Exemples

### Utilisation simple de `formatRange()`

Cette méthode reçoit deux objets {{JSxRef("Date")}} et formate l'intervalle de dates de la façon la plus concise possible selon la `locale` et les `options` fournies lors de l'instanciation de {{JSxRef("Intl.DateTimeFormat")}}.

```js
const date1 = new Date(Date.UTC(1906, 0, 10, 10, 0, 0)); // Wed, 10 Jan 1906 10:00:00 GMT
const date2 = new Date(Date.UTC(1906, 0, 10, 11, 0, 0)); // Wed, 10 Jan 1906 11:00:00 GMT
const date3 = new Date(Date.UTC(1906, 0, 20, 10, 0, 0)); // Sat, 20 Jan 1906 10:00:00 GMT

const fmt1 = new Intl.DateTimeFormat("en", {
  year: "2-digit",
  month: "numeric",
  day: "numeric",
  hour: "numeric",
  minute: "numeric",
});
console.log(fmt1.format(date1)); // '1/10/06, 10:00 AM'
console.log(fmt1.formatRange(date1, date2)); // '1/10/06, 10:00 — 11:00 AM'
console.log(fmt1.formatRange(date1, date3)); // '1/10/06, 10:00 AM — 1/20/07, 10:00 AM'

const fmt2 = new Intl.DateTimeFormat("en", {
  year: "numeric",
  month: "short",
  day: "numeric",
});
console.log(fmt2.format(date1)); // 'Jan 10, 1906'
console.log(fmt2.formatRange(date1, date2)); // 'Jan 10, 1906'
console.log(fmt2.formatRange(date1, date3)); // 'Jan 10 — 20, 1906'
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'objet {{JSxRef("Intl.DateTimeFormat")}}
