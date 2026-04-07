---
title: "Temporal.PlainDateTime : méthode toPlainDate()"
short-title: toPlainDate()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainDateTime/toPlainDate
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

La méthode **`toPlainDate()`** des instances de {{JSxRef("Temporal.PlainDateTime")}} retourne un nouvel objet {{JSxRef("Temporal.PlainDate")}} représentant la partie date (année, mois, jour) de cette date et heure dans le même système de calendrier.

## Syntaxe

```js-nolint
toPlainDate()
```

### Paramètres

Aucun.

### Valeur de retour

Un nouvel objet `Temporal.PlainDate` représentant la partie date (année, mois, jour) de cette date et heure dans le même système de calendrier.

## Exemples

### Utiliser la méthode `toPlainDate()`

```js
const dt = Temporal.PlainDateTime.from("2021-07-01T12:34:56");
const date = dt.toPlainDate();
console.log(date.toString()); // '2021-07-01'
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'objet {{JSxRef("Temporal.PlainDateTime")}}
- L'objet {{JSxRef("Temporal.PlainDate")}}
- La méthode {{JSxRef("Temporal/PlainDateTime/toPlainTime", "Temporal.PlainDateTime.prototype.toPlainTime()")}}
- La méthode {{JSxRef("Temporal/PlainDateTime/toZonedDateTime", "Temporal.PlainDate.prototype.toZonedDateTime()")}}
- La méthode {{JSxRef("Temporal/PlainDate/toPlainDateTime", "Temporal.PlainDate.prototype.toPlainDateTime()")}}
