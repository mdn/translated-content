---
title: "Temporal.PlainDateTime : méthode toPlainTime()"
short-title: toPlainTime()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainDateTime/toPlainTime
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

La méthode **`toPlainTime()`** des instances de {{JSxRef("Temporal.PlainDateTime")}} retourne un nouvel objet {{JSxRef("Temporal.PlainTime")}} représentant la partie temps (heures, minutes, secondes et sous-secondes) de cette date et heure.

## Syntaxe

```js-nolint
toPlainTime()
```

### Paramètres

Aucun.

### Valeur de retour

Un nouvel objet `Temporal.PlainTime` représentant la partie temps (heures, minutes, secondes et sous-secondes) de cette date et heure.

## Exemples

### Utiliser la méthode `toPlainTime()`

```js
const dt = Temporal.PlainDateTime.from("2021-07-01T12:34:56");
const time = dt.toPlainTime();
console.log(time.toString()); // '12:34:56'
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'objet {{JSxRef("Temporal.PlainDateTime")}}
- L'objet {{JSxRef("Temporal.PlainTime")}}
- La méthode {{JSxRef("Temporal/PlainDateTime/toPlainDate", "Temporal.PlainDateTime.prototype.toPlainDate()")}}
- La méthode {{JSxRef("Temporal/PlainDateTime/toZonedDateTime", "Temporal.PlainDateTime.prototype.toZonedDateTime()")}}
