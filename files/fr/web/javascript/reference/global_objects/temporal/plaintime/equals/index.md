---
title: "Temporal.PlainTime : méthode equals()"
short-title: equals()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainTime/equals
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

La méthode **`equals()`** des instances de {{JSxRef("Temporal.PlainTime")}} retourne `true` si cette heure est équivalente en valeur à une autre heure (sous une forme convertible par {{JSxRef("Temporal/PlainTime/from", "Temporal.PlainTime.from()")}}), et `false` sinon. Elles sont comparées par leurs valeurs temporelles. Cela équivaut à `Temporal.PlainTime.compare(this, other) === 0`.

## Syntaxe

```js-nolint
equals(other)
```

### Paramètres

- `other`
  - : Une chaîne de caractères, un objet ou une instance de {{JSxRef("Temporal.PlainTime")}} représentant l'autre heure à comparer. Elle est convertie en objet `Temporal.PlainTime` en utilisant le même algorithme que {{JSxRef("Temporal/PlainTime/from", "Temporal.PlainTime.from()")}}.

### Valeur de retour

`true` si cette heure est égale à `other` à la fois dans leur valeur temporelle et leur calendrier, `false` sinon.

## Exemples

### Utiliser la méthode `equals()`

```js
const time1 = Temporal.PlainTime.from("12:34:56");
const time2 = Temporal.PlainTime.from({ hour: 12, minute: 34, second: 56 });
console.log(time1.equals(time2)); // true

const time3 = Temporal.PlainTime.from("00:34:56");
console.log(time1.equals(time3)); // false
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'objet {{JSxRef("Temporal.PlainTime")}}
- La méthode statique {{JSxRef("Temporal/PlainTime/compare", "Temporal.PlainTime.compare()")}}
