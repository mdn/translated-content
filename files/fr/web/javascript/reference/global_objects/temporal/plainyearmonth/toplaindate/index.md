---
title: "Temporal.PlainYearMonth : méthode toPlainDate()"
short-title: toPlainDate()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainYearMonth/toPlainDate
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

La méthode **`toPlainDate()`** des instances de {{JSxRef("Temporal.PlainYearMonth")}} retourne un nouvel objet {{JSxRef("Temporal.PlainDate")}} représentant le mois et son année ainsi qu'un jour fourni dans le même système de calendrier.

## Syntaxe

```js-nolint
toPlainDate(dayInfo)
```

### Paramètres

- `dayInfo` {{Optional_Inline}}
  - : Un objet représentant le composant jour de la `PlainDate` résultante, contenant la propriété suivante&nbsp;:
    - `day`
      - : Correspond à la propriété {{JSxRef("Temporal/PlainDate/day", "day")}}.

### Valeur de retour

Un nouvel objet `Temporal.PlainDate` représentant la date définie par ce mois et son année ainsi que le jour dans `dayInfo`, interprété dans le système de calendrier de ce mois et de son année.

### Exceptions

- {{JSxRef("RangeError")}}
  - : Levée si l'une des options est invalide.
- {{JSxRef("TypeError")}}
  - : Levée si `dayInfo` n'est pas un objet.

## Exemples

### Utiliser la méthode `toPlainDate()`

```js
const ym = Temporal.PlainYearMonth.from("2021-07");
const date = ym.toPlainDate({ day: 1 });
console.log(date.toString()); // 2021-07-01

const ym2 = Temporal.PlainYearMonth.from("2021-07-01[u-ca=chinese]");
const date2 = ym2.toPlainDate({ day: 15 });
console.log(date2.toString()); // 2021-06-24[u-ca=chinese]
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'objet {{JSxRef("Temporal.PlainYearMonth")}}
- L'objet {{JSxRef("Temporal.PlainDate")}}
- La méthode {{JSxRef("Temporal/PlainDate/toPlainYearMonth", "Temporal.PlainDate.prototype.toPlainYearMonth()")}}
