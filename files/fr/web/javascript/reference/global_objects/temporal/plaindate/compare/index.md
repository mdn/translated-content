---
title: "Temporal.PlainDate : méthode statique compare()"
short-title: compare()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainDate/compare
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

La méthode statique **`Temporal.PlainDate.compare()`** des instances de {{JSxRef("Temporal.PlainDate")}} retourne un nombre (-1, 0 ou 1) indiquant si la première date est antérieure, identique ou postérieure à la seconde date. Équivalent à la comparaison des champs année, mois et jour des dates ISO 8601 sous-jacentes.

## Syntaxe

```js-nolint
Temporal.PlainDate.compare(date1, date2)
```

### Paramètres

- `date1`
  - : Une chaîne de caractères, un objet ou une instance de {{JSxRef("Temporal.PlainDate")}} représentant la première date à comparer. Elle est convertie en objet `Temporal.PlainDate` en utilisant le même algorithme que {{JSxRef("Temporal/PlainDate/from", "Temporal.PlainDate.from()")}}.
- `date2`
  - : La deuxième date à comparer, convertie en objet `Temporal.PlainDate` en utilisant le même algorithme que `date1`.

### Valeur de retour

Retourne `-1` si `date1` est antérieure à `date2`, `0` si elles sont identiques, et `1` si `date1` est postérieure à `date2`. Elles sont comparées par leurs valeurs de date sous-jacentes, en ignorant leurs calendriers.

## Exemples

### Utiliser la méthode `Temporal.PlainDate.compare()`

```js
const date1 = Temporal.PlainDate.from("2021-08-01");
const date2 = Temporal.PlainDate.from("2021-08-02");
console.log(Temporal.PlainDate.compare(date1, date2)); // -1

const date3 = Temporal.PlainDate.from("2021-07-31");
console.log(Temporal.PlainDate.compare(date1, date3)); // 1
```

### Comparer des dates dans différents calendriers

```js
const date1 = Temporal.PlainDate.from({ year: 2021, month: 8, day: 1 });
const date2 = Temporal.PlainDate.from({
  year: 2021,
  month: 8,
  day: 1,
  calendar: "islamic-umalqura",
});
const date3 = Temporal.PlainDate.from({
  year: 2021,
  month: 8,
  day: 1,
  calendar: "hebrew",
});
console.log(date1.toString()); // "2021-08-01"
console.log(date2.toString()); // "2582-12-17[u-ca=islamic-umalqura]"
console.log(date3.toString()); // "-001739-04-06[u-ca=hebrew]"
console.log(Temporal.PlainDate.compare(date1, date2)); // -1
console.log(Temporal.PlainDate.compare(date1, date3)); // 1
```

### Trier un tableau de dates

Le but de cette fonction `compare()` est d'agir comme un comparateur à passer à {{JSxRef("Array.prototype.sort()")}} et aux fonctions associées.

```js
const dates = [
  Temporal.PlainDate.from({ year: 2021, month: 8, day: 1 }),
  Temporal.PlainDate.from({
    year: 2021,
    month: 8,
    day: 1,
    calendar: "islamic-umalqura",
  }),
  Temporal.PlainDate.from({ year: 2021, month: 8, day: 1, calendar: "hebrew" }),
];

dates.sort(Temporal.PlainDate.compare);
console.log(dates.map((d) => d.toString()));
// [ "-001739-04-06[u-ca=hebrew]", "2021-08-01", "2582-12-17[u-ca=islamic-umalqura]" ]
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'objet {{JSxRef("Temporal.PlainDate")}}
- La méthode {{JSxRef("Temporal/PlainDate/equals", "Temporal.PlainDate.prototype.equals()")}}
