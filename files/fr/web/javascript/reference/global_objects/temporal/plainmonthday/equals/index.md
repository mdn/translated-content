---
title: "Temporal.PlainMonthDay : méthode equals()"
short-title: equals()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainMonthDay/equals
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

La méthode **`equals()`** des instances de {{JSxRef("Temporal.PlainMonthDay")}} retourne `true` si ce mois et ce jour sont équivalents en valeur à un autre mois et ce jour (sous une forme convertible par {{JSxRef("Temporal/PlainMonthDay/from", "Temporal.PlainMonthDay.from()")}}), et `false` sinon. Ils sont comparés à la fois par leurs valeurs de date ISO sous-jacentes et leurs calendriers.

> [!NOTE]
> Les objets `PlainMonthDay` gardent une trace d'une année ISO de référence, qui est également utilisée dans la comparaison. Cette année est automatiquement définie lors de l'utilisation de la méthode {{JSxRef("Temporal/PlainMonthDay/from", "Temporal.PlainMonthDay.from()")}}, mais peut être définie manuellement en utilisant le constructeur {{JSxRef("Temporal/PlainMonthDay/PlainMonthDay", "Temporal.PlainMonthDay()")}}, ce qui peut amener deux mois et jours équivalents à être considérés comme différents s'ils ont des années de référence différentes. Pour cette raison, vous devriez éviter d'utiliser directement le constructeur et préférer la méthode `from()`.

## Syntaxe

```js-nolint
equals(other)
```

### Paramètres

- `other`
  - : Une chaîne de caractères, un objet, ou une instance de {{JSxRef("Temporal.PlainMonthDay")}} représentant l'autre mois et jour à comparer. Il est converti en objet `Temporal.PlainMonthDay` en utilisant le même algorithme que {{JSxRef("Temporal/PlainMonthDay/from", "Temporal.PlainMonthDay.from()")}}.

### Valeur de retour

`true` si ce mois et ce jour sont égaux à `other` à la fois dans leur valeur de date et leur calendrier, `false` sinon.

## Exemples

### Utiliser la méthode `equals()`

```js
const md1 = Temporal.PlainMonthDay.from("2021-08-01");
const md2 = Temporal.PlainMonthDay.from({ year: 2020, month: 8, day: 1 }); // L'année n'a pas d'importance
console.log(md1.equals(md2)); // true

const md3 = Temporal.PlainMonthDay.from("2021-08-01[u-ca=japanese]");
console.log(md1.equals(md3)); // false

const md4 = Temporal.PlainMonthDay.from("2021-08-02");
console.log(md1.equals(md4)); // false
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'objet {{JSxRef("Temporal.PlainMonthDay")}}
