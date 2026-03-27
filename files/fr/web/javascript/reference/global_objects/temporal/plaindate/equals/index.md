---
title: "Temporal.PlainDate : méthode equals()"
short-title: equals()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainDate/equals
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

La méthode **`equals()`** des instances de {{JSxRef("Temporal.PlainDate")}} retourne `true` si cette date est équivalente en valeur à une autre date (sous une forme convertible par {{JSxRef("Temporal/PlainDate/from", "Temporal.PlainDate.from()")}}), et `false` sinon. Elles sont comparées à la fois par leurs valeurs de date et leurs calendriers, donc deux dates de calendriers différents peuvent être considérées comme égales par {{JSxRef("Temporal/PlainDate/compare", "Temporal.PlainDate.compare()")}} mais pas par `equals()`.

## Syntaxe

```js-nolint
equals(other)
```

### Paramètres

- `other`
  - : Une chaîne de caractères, un objet ou une instance de {{JSxRef("Temporal.PlainDate")}} représentant l'autre date à comparer. Elle est convertie en objet `Temporal.PlainDate` en utilisant le même algorithme que {{JSxRef("Temporal/PlainDate/from", "Temporal.PlainDate.from()")}}.

### Valeur de retour

`true` si cette date est égale à `other` à la fois dans leur valeur de date et leur calendrier, sinon `false`.

## Exemples

### Utiliser la méthode `equals()`

```js
const date1 = Temporal.PlainDate.from("2021-08-01");
const date2 = Temporal.PlainDate.from({ year: 2021, month: 8, day: 1 });
console.log(date1.equals(date2)); // true

const date3 = Temporal.PlainDate.from("2021-08-01[u-ca=japanese]");
console.log(date1.equals(date3)); // false

const date4 = Temporal.PlainDate.from("2021-08-02");
console.log(date1.equals(date4)); // false
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'objet {{JSxRef("Temporal.PlainDate")}}
- La méthode {{JSxRef("Temporal/PlainDate/compare", "Temporal.PlainDate.compare()")}}
