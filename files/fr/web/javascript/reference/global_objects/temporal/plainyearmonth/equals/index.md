---
title: "Temporal.PlainYearMonth : méthode equals()"
short-title: equals()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainYearMonth/equals
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

La méthode **`equals()`** des instances de {{JSxRef("Temporal.PlainYearMonth")}} retourne `true` si la valeur de ce mois et de son année est équivalente à celle de l'autre mois et de son année (sous une forme convertible par {{JSxRef("Temporal/PlainYearMonth/from", "Temporal.PlainYearMonth.from()")}}), sinon vaut `false`. Elles sont comparées à la fois par leurs valeurs de date ISO sous-jacentes et par leurs calendriers, donc deux mois et années de calendriers différents peuvent être considérées comme égales par {{JSxRef("Temporal/PlainYearMonth/compare", "Temporal.PlainYearMonth.compare()")}} mais pas par `equals()`.

> [!NOTE]
> Les objets `PlainYearMonth` gardent une trace d'un jour ISO de référence, qui est également utilisé dans la comparaison. Ce jour est automatiquement défini lors de l'utilisation de la méthode {{JSxRef("Temporal/PlainYearMonth/from", "Temporal.PlainYearMonth.from()")}}, mais peut être défini manuellement en utilisant le constructeur {{JSxRef("Temporal/PlainYearMonth/PlainYearMonth", "Temporal.PlainYearMonth()")}}, ce qui peut amener deux mois et années équivalents à être considérés comme différents s'ils ont des jours de référence différents. Pour cette raison, vous devriez éviter d'utiliser directement le constructeur et préférer la méthode `from()`.

## Syntaxe

```js-nolint
equals(other)
```

### Paramètres

- `other`
  - : Une chaîne de caractères, un objet ou une instance de {{JSxRef("Temporal.PlainYearMonth")}} représentant l'autre mois et année à comparer. Il est converti en un objet `Temporal.PlainYearMonth` en utilisant le même algorithme que {{JSxRef("Temporal/PlainYearMonth/from", "Temporal.PlainYearMonth.from()")}}.

### Valeur de retour

`true` si ce mois et son année sont égaux à `other` à la fois dans leur valeur de date et leur calendrier, `false` sinon.

## Exemples

### Utiliser la méthode `equals()`

```js
const ym1 = Temporal.PlainYearMonth.from("2021-08");
const ym2 = Temporal.PlainYearMonth.from({ year: 2021, month: 8 });
console.log(ym1.equals(ym2)); // true

const ym3 = Temporal.PlainYearMonth.from("2021-08-01[u-ca=japanese]");
console.log(ym1.equals(ym3)); // false

const ym4 = Temporal.PlainYearMonth.from("2021-09");
console.log(ym1.equals(ym4)); // false
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'objet {{JSxRef("Temporal.PlainYearMonth")}}
- La méthode statique {{JSxRef("Temporal/PlainYearMonth/compare", "Temporal.PlainYearMonth.compare()")}}
