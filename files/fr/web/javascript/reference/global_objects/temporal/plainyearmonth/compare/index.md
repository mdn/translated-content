---
title: "Temporal.PlainYearMonth : méthode statique compare()"
short-title: compare()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainYearMonth/compare
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

La méthode statique **`Temporal.PlainYearMonth.compare()`** retourne un nombre (-1, 0 ou 1) qui indique si le mois et l'année de la première instance vient avant, est le même que, ou vient après le mois et l'année de la deuxième instance. Elle est équivalente à la comparaison de leurs dates ISO 8601 sous-jacentes. Deux mois et années provenant de calendriers différents peuvent être considérés comme égaux s'ils commencent à la même date ISO.

> [!NOTE]
> Les objets `PlainYearMonth` gardent une trace d'un jour de référence ISO, qui est également utilisé dans la comparaison. Ce jour est automatiquement défini lors de l'utilisation de la méthode {{JSxRef("Temporal/PlainYearMonth/from", "Temporal.PlainYearMonth.from()")}}, mais peut être défini manuellement en utilisant le constructeur {{JSxRef("Temporal/PlainYearMonth/PlainYearMonth", "Temporal.PlainYearMonth()")}}, ce qui peut amener deux mois et années équivalents à être considérés comme différents s'ils ont des jours de référence différents. Pour cette raison, vous devriez éviter d'utiliser directement le constructeur et préférer la méthode `from()`.

## Syntaxe

```js-nolint
Temporal.PlainYearMonth.compare(yearMonth1, yearMonth2)
```

### Paramètres

- `yearMonth1`
  - : Une chaîne de caractères, un objet ou une instance de {{JSxRef("Temporal.PlainYearMonth")}} représentant le premier mois de l'année à comparer. Il est converti en un objet `Temporal.PlainYearMonth` en utilisant le même algorithme que {{JSxRef("Temporal/PlainYearMonth/from", "Temporal.PlainYearMonth.from()")}}.
- `yearMonth2`
  - : Le deuxième mois de l'année à comparer, converti en un objet `Temporal.PlainYearMonth` en utilisant le même algorithme que `yearMonth1`.

### Valeur de retour

Retourne `-1` si `yearMonth1` vient avant `yearMonth2`, `0` s'ils sont identiques, et `1` si `yearMonth1` vient après `yearMonth2`. Ils sont comparés par leurs valeurs de date sous-jacentes (généralement le premier jour du mois), en ignorant leurs calendriers.

## Exemples

### Utiliser la méthode `Temporal.PlainYearMonth.compare()`

```js
const ym1 = Temporal.PlainYearMonth.from("2021-08");
const ym2 = Temporal.PlainYearMonth.from("2021-09");
console.log(Temporal.PlainYearMonth.compare(ym1, ym2)); // -1

const ym3 = Temporal.PlainYearMonth.from("2021-07");
console.log(Temporal.PlainYearMonth.compare(ym1, ym3)); // 1
```

### Comparer des mois d'années dans différents calendriers

```js
const ym1 = Temporal.PlainYearMonth.from({ year: 2021, month: 8 });
const ym2 = Temporal.PlainYearMonth.from({
  year: 2021,
  month: 8,
  calendar: "islamic-umalqura",
});
const ym3 = Temporal.PlainYearMonth.from({
  year: 2021,
  month: 8,
  calendar: "hebrew",
});
console.log(ym1.toString()); // "2021-08"
console.log(ym2.toString()); // "2582-12-17[u-ca=islamic-umalqura]"
console.log(ym3.toString()); // "-001739-04-06[u-ca=hebrew]"
console.log(Temporal.PlainYearMonth.compare(ym1, ym2)); // -1
console.log(Temporal.PlainYearMonth.compare(ym1, ym3)); // 1
```

### Trier un tableau de mois d'années

Le but de cette fonction `compare()` est d'agir comme un comparateur à passer à {{JSxRef("Array.prototype.sort()")}} et aux fonctions associées.

```js
const months = [
  Temporal.PlainYearMonth.from({ year: 2021, month: 8 }),
  Temporal.PlainYearMonth.from({
    year: 2021,
    month: 8,
    calendar: "islamic-umalqura",
  }),
  Temporal.PlainYearMonth.from({ year: 2021, month: 8, calendar: "hebrew" }),
];

months.sort(Temporal.PlainYearMonth.compare);
console.log(months.map((d) => d.toString()));
// [ "-001739-04-06[u-ca=hebrew]", "2021-08", "2582-12-17[u-ca=islamic-umalqura]" ]
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'objet {{JSxRef("Temporal.PlainYearMonth")}}
- La méthode {{JSxRef("Temporal/PlainYearMonth/equals", "Temporal.PlainYearMonth.prototype.equals()")}}
