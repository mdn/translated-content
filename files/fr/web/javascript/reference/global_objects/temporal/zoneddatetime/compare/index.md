---
title: "Temporal.ZonedDateTime : méthode statique compare()"
short-title: compare()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime/compare
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

La méthode statique **`Temporal.ZonedDateTime.compare()`** retourne un nombre (-1, 0 ou 1) indiquant si la première date et heure vient avant, est la même que, ou vient après la deuxième date et heure. Elle est équivalente à la comparaison des {{JSxRef("Temporal/ZonedDateTime/epochNanoseconds", "epochNanoseconds")}} des deux dates et heures.

## Syntaxe

```js-nolint
Temporal.ZonedDateTime.compare(dateTime1, dateTime2)
```

### Paramètres

- `dateTime1`
  - : Une chaîne de caractères, un objet ou une instance de {{JSxRef("Temporal.ZonedDateTime")}} représentant la première date et l'heure à comparer. Elle est convertie en objet `Temporal.ZonedDateTime` en utilisant le même algorithme que {{JSxRef("Temporal/ZonedDateTime/from", "Temporal.ZonedDateTime.from()")}}.
- `dateTime2`
  - : Une chaîne de caractères, un objet ou une instance de {{JSxRef("Temporal.ZonedDateTime")}} représentant la deuxième date et l'heure à comparer. Elle est convertie en objet `Temporal.ZonedDateTime` en utilisant le même algorithme que `dateTime1`.

### Valeur de retour

Retourne `-1` si `dateTime1` vient avant `dateTime2`, `0` s'ils sont identiques, et `1` si `dateTime1` vient après `dateTime2`. Ils sont comparés par leurs valeurs d'instant sous-jacentes, en ignorant leurs calendriers ou fuseaux horaires.

## Exemples

### Utiliser `Temporal.ZonedDateTime.compare()`

```js
const dt1 = Temporal.ZonedDateTime.from("2021-08-01T01:00:00[Europe/London]");
const dt2 = Temporal.ZonedDateTime.from("2021-08-02T00:00:00[Europe/London]");
console.log(Temporal.ZonedDateTime.compare(dt1, dt2)); // -1

const dt3 = Temporal.ZonedDateTime.from("2021-08-01T00:00:00[Europe/London]");
console.log(Temporal.ZonedDateTime.compare(dt1, dt3)); // 1
```

### Trier un tableau de dates et heures

Le but de cette fonction `compare()` est d'agir comme un comparateur à passer à {{JSxRef("Array.prototype.sort()")}} et aux fonctions associées.

```js
const dateTimes = [
  Temporal.ZonedDateTime.from("2021-08-01T00:00:00[America/New_York]"),
  Temporal.ZonedDateTime.from("2021-08-01T00:00:00[Asia/Hong_Kong]"),
  Temporal.ZonedDateTime.from("2021-08-01T00:00:00[Europe/London]"),
];

dateTimes.sort(Temporal.ZonedDateTime.compare);
console.log(dateTimes.map((d) => d.toString()));
// [ "2021-08-01T00:00:00+08:00[Asia/Hong_Kong]", "2021-08-01T00:00:00+01:00[Europe/London]", "2021-08-01T00:00:00-04:00[America/New_York]" ]
```

On notera qu'ils sont comparés par leurs valeurs d'instant. Dans le cas très rare où vous souhaitez les comparer par leurs heures murales, convertissez-les d'abord en `PlainDateTime`.

```js
const dateTimes = [
  Temporal.ZonedDateTime.from("2021-08-01T00:00:00[America/New_York]"),
  Temporal.ZonedDateTime.from("2021-08-01T00:00:00[Asia/Hong_Kong]"),
  Temporal.ZonedDateTime.from("2021-08-01T00:00:00[Europe/London]"),
];

dateTimes.sort((a, b) =>
  Temporal.PlainDateTime.compare(a.toPlainDateTime(), b.toPlainDateTime()),
);
console.log(dateTimes.map((d) => d.toString()));
// [ "2021-08-01T00:00:00-04:00[America/New_York]", "2021-08-01T00:00:00+08:00[Asia/Hong_Kong]", "2021-08-01T00:00:00+01:00[Europe/London]" ]
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'objet {{JSxRef("Temporal.ZonedDateTime")}}
- La méthode {{JSxRef("Temporal/ZonedDateTime/equals", "Temporal.ZonedDateTime.prototype.equals()")}}
