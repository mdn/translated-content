---
title: "Temporal.PlainMonthDay : méthode toPlainDate()"
short-title: toPlainDate()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainMonthDay/toPlainDate
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

La méthode **`toPlainDate()`** des instances de {{JSxRef("Temporal.PlainMonthDay")}} retourne un nouvel objet {{JSxRef("Temporal.PlainDate")}} représentant ce mois et ce jour avec une année fournie dans le même système de calendrier.

## Syntaxe

```js-nolint
toPlainDate(yearInfo)
```

### Paramètres

- `yearInfo`
  - : Un objet représentant le composant année de l'objet `PlainDate` résultant, contenant les propriétés suivantes (dans l'ordre où elles sont récupérées et validées)&nbsp;:
    - `era` et `eraYear`
      - : Une chaîne de caractères et un entier correspondant aux propriétés {{JSxRef("Temporal/PlainDate/era", "era")}} et {{JSxRef("Temporal/PlainDate/eraYear", "eraYear")}}. Sont utilisés uniquement si le système de calendrier possède des ères. `era` et `eraYear` doivent être fournis simultanément. S'ils ne sont pas fournis, alors `year` doit être fourni. Si `era`, `eraYear` et `year` sont tous fournis, ils doivent être cohérents.
    - `year`
      - : Correspond à la propriété {{JSxRef("Temporal/PlainDate/year", "year")}}.

### Valeur de retour

Un nouvel objet `Temporal.PlainDate` représentant la date définie par ce mois et ce jour et l'année dans `yearInfo`, interprété dans le système de calendrier de ce mois et ce jour.

### Exceptions

- {{JSxRef("RangeError")}}
  - : Levée si l'une des options est invalide.
- {{JSxRef("TypeError")}}
  - : Levée si `yearInfo` n'est pas un objet.

## Exemples

### Utiliser la méthode `toPlainDate()`

```js
const md = Temporal.PlainMonthDay.from("07-01");
const date = md.toPlainDate({ year: 2021 });
console.log(date.toString()); // 2021-07-01

const md2 = Temporal.PlainMonthDay.from("2021-07-01[u-ca=japanese]");
const date2 = md2.toPlainDate({ era: "reiwa", eraYear: 1 });
console.log(date2.toString()); // 2019-07-01[u-ca=japanese]
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'objet {{JSxRef("Temporal.PlainMonthDay")}}
- L'objet {{JSxRef("Temporal.PlainDate")}}
- La méthode {{JSxRef("Temporal/PlainDate/toPlainMonthDay", "Temporal.PlainDate.prototype.toPlainMonthDay()")}}
