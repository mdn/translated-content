---
title: "Temporal.PlainDateTime : méthode statique compare()"
short-title: compare()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainDateTime/compare
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

La méthode statique **`Temporal.PlainDateTime.compare()`** retourne un nombre (-1, 0 ou 1) indiquant si le premier objet de date et d'heure précède, est identique ou suit le second objet de date et d'heure. Cela équivaut à comparer d'abord leurs dates, puis à comparer leurs heures si les dates sont identiques.

## Syntaxe

```js-nolint
Temporal.PlainDateTime.compare(dateTime1, dateTime2)
```

### Paramètres

- `dateTime1`
  - : Une chaîne de caractères, un objet ou une instance de {{JSxRef("Temporal.PlainDateTime")}} représentant le premier objet de date et d'heure à comparer. Il est converti en objet `Temporal.PlainDateTime` en utilisant le même algorithme que {{JSxRef("Temporal/PlainDateTime/from", "Temporal.PlainDateTime.from()")}}.
- `dateTime2`
  - : Le second objet de date et d'heure à comparer, converti en objet `Temporal.PlainDateTime` en utilisant le même algorithme que `dateTime1`.

### Valeur de retour

Retourne `-1` si `dateTime1` précède `dateTime2`, `0` s'ils sont identiques, et `1` si `dateTime1` suit `dateTime2`. Ils sont comparés par leurs valeurs de date et d'heure sous-jacentes, en ignorant leurs calendriers.

## Exemples

### Utiliser la méthode `Temporal.PlainDateTime.compare()`

```js
const dt1 = Temporal.PlainDateTime.from("2021-08-01T01:00:00");
const dt2 = Temporal.PlainDateTime.from("2021-08-02T00:00:00");
console.log(Temporal.PlainDateTime.compare(dt1, dt2)); // -1

const dt3 = Temporal.PlainDateTime.from("2021-08-01T00:00:00");
console.log(Temporal.PlainDateTime.compare(dt1, dt3)); // 1
```

### Comparer des dates dans différents calendriers

```js
const dt1 = Temporal.PlainDateTime.from({ year: 2021, month: 8, day: 1 });
const dt2 = Temporal.PlainDateTime.from({
  year: 2021,
  month: 8,
  day: 1,
  calendar: "islamic-umalqura",
});
const dt3 = Temporal.PlainDateTime.from({
  year: 2021,
  month: 8,
  day: 1,
  calendar: "hebrew",
});
console.log(dt1.toString()); // "2021-08-01T00:00:00"
console.log(dt2.toString()); // "2582-12-17T00:00:00[u-ca=islamic-umalqura]"
console.log(dt3.toString()); // "-001739-04-06T00:00:00[u-ca=hebrew]"
console.log(Temporal.PlainDateTime.compare(dt1, dt2)); // -1
console.log(Temporal.PlainDateTime.compare(dt1, dt3)); // 1
```

### Trier un tableau d'objets de date et d'heure

Le but de cette fonction `compare()` est d'agir comme un comparateur à passer à {{JSxRef("Array.prototype.sort()")}} et aux fonctions associées.

```js
const dateTimes = [
  Temporal.PlainDateTime.from("2021-08-01"),
  Temporal.PlainDateTime.from("2021-08-02"),
  Temporal.PlainDateTime.from("2021-08-01T01:00:00"),
];

dateTimes.sort(Temporal.PlainDateTime.compare);
console.log(dateTimes.map((d) => d.toString()));
// [ "2021-08-01T00:00:00", "2021-08-01T01:00:00", "2021-08-02T00:00:00" ]
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'objet {{JSxRef("Temporal.PlainDateTime")}}
- La méthode {{JSxRef("Temporal/PlainDateTime/equals", "Temporal.PlainDateTime.prototype.equals()")}}
