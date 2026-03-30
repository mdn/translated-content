---
title: "Temporal.PlainYearMonth : méthode toString()"
short-title: toString()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainYearMonth/toString
l10n:
  sourceCommit: 9b86874b5762b52ce0055f58d561004d1a204ad5
---

La méthode **`toString()`** des instances de {{JSxRef("Temporal.PlainYearMonth")}} retourne une chaîne de caractères représentant cette année-mois au format [RFC 9557](/fr/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainYearMonth#format_rfc_9557).

## Syntaxe

```js-nolint
toString()
toString(options)
```

### Paramètres

- `options` {{Optional_Inline}}
  - : Un objet contenant la propriété suivante&nbsp;:
    - `calendarName` {{Optional_Inline}}
      - : Indique si l'annotation du calendrier (`[u-ca=calendar_id]`) doit être affichée dans la valeur de retour. Les valeurs possibles sont&nbsp;:
        - `"auto"` (par défaut)
          - : Inclut l'annotation du calendrier si le calendrier n'est pas `"iso8601"`. Le jour de référence est inclus si le calendrier n'est pas `"iso8601"`.
        - `"always"`
          - : Inclut toujours l'annotation du calendrier. Le jour de référence est toujours inclus également.
        - `"never"`
          - : N'inclut jamais l'annotation du calendrier. Cela rend la chaîne de caractères retournée non récupérable en tant que même instance de {{JSxRef("Temporal.PlainYearMonth")}}, bien que la valeur du mois et de son année reste la même. Le jour de référence est inclus si le calendrier n'est pas `"iso8601"`.
        - `"critical"`
          - : Inclut toujours l'annotation du calendrier et ajoute un indicateur critique&nbsp;: `[!u-ca=calendar_id]`. Utile lors de l'envoi de la chaîne de caractères à certains systèmes, mais pas utile pour Temporal lui-même. Le jour de référence est toujours inclus également.

### Valeur de retour

Une chaîne de caractères au format [RFC 9557](/fr/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainYearMonth#format_rfc_9557) représentant ce mois et cette année. L'annotation du calendrier est incluse comme défini. Le jour de référence est inclus si une annotation du calendrier est incluse ou si le calendrier n'est pas `"iso8601"`.

### Exceptions

- {{JSxRef("RangeError")}}
  - : Levée si l'une des options est invalide.
- {{JSxRef("TypeError")}}
  - : Levée si `options` n'est pas un objet ou `undefined`.

## Exemples

### Utiliser la méthode `toString()`

```js
const ym = Temporal.PlainYearMonth.from({ year: 2021, month: 8 });
console.log(ym.toString()); // '2021-08'

const ym2 = Temporal.PlainYearMonth.from({
  year: 5781,
  monthCode: "M08",
  calendar: "hebrew",
});
console.log(ym2.toString()); // '2021-04-13[u-ca=hebrew]'
```

### Utiliser des options

```js
const isoYM = Temporal.PlainYearMonth.from({ year: 2021, month: 8 });
const ym = Temporal.PlainYearMonth.from({
  year: 5781,
  monthCode: "M08",
  calendar: "hebrew",
});
console.log(isoYM.toString({ calendarName: "auto" })); // '2021-08'
console.log(ym.toString({ calendarName: "auto" })); // '2021-04-13[u-ca=hebrew]'
console.log(isoYM.toString({ calendarName: "always" })); // '2021-08-01[u-ca=iso8601]'
console.log(ym.toString({ calendarName: "always" })); // '2021-04-13[u-ca=hebrew]'
console.log(isoYM.toString({ calendarName: "never" })); // '2021-08'
console.log(ym.toString({ calendarName: "never" })); // '2021-04-13'
console.log(isoYM.toString({ calendarName: "critical" })); // '2021-08-01[!u-ca=iso8601]'
console.log(ym.toString({ calendarName: "critical" })); // '2021-04-13[!u-ca=hebrew]'
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'objet {{JSxRef("Temporal.PlainYearMonth")}}
- La méthode statique {{JSxRef("Temporal/PlainYearMonth/from", "Temporal.PlainYearMonth.from()")}}
- La méthode {{JSxRef("Temporal/PlainYearMonth/toJSON", "Temporal.PlainYearMonth.prototype.toJSON()")}}
- La méthode {{JSxRef("Temporal/PlainYearMonth/toLocaleString", "Temporal.PlainYearMonth.prototype.toLocaleString()")}}
