---
title: "Temporal.PlainMonthDay : méthode toString()"
short-title: toString()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainMonthDay/toString
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

La méthode **`toString()`** des instances de {{JSxRef("Temporal.PlainMonthDay")}} retourne une chaîne de caractères représentant ce mois et ce jour au format [RFC 9557](/fr/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainMonthDay#format_rfc_9557).

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
          - : Inclut l'annotation du calendrier si le calendrier n'est pas `"iso8601"`. L'année de référence est incluse si le calendrier n'est pas `"iso8601"`.
        - `"always"`
          - : Inclut toujours l'annotation du calendrier. L'année de référence est toujours incluse également.
        - `"never"`
          - : N'inclut jamais l'annotation du calendrier. Cela rend la chaîne de caractères retournée non récupérable en tant que même instance de {{JSxRef("Temporal.PlainMonthDay")}}, bien que la valeur mois et jour reste la même. L'année de référence est incluse si le calendrier n'est pas `"iso8601"`.
        - `"critical"`
          - : Inclut toujours l'annotation du calendrier et ajoute un indicateur critique&nbsp;: `[!u-ca=calendar_id]`. Utile lors de l'envoi de la chaîne de caractères à certains systèmes, mais pas utile pour Temporal lui-même. L'année de référence est toujours incluse également.

### Valeur de retour

Une chaîne de caractères au format [RFC 9557](/fr/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainMonthDay#format_rfc_9557) représentant ce mois et ce jour. L'annotation du calendrier est incluse comme défini. L'année de référence est incluse si une annotation du calendrier est incluse ou si le calendrier n'est pas `"iso8601"`.

### Exceptions

- {{JSxRef("RangeError")}}
  - : Levée si l'une des options est invalide.
- {{JSxRef("TypeError")}}
  - : Levée si `options` n'est pas un objet ou `undefined`.

## Exemples

### Utiliser la méthode `toString()`

```js
const md = Temporal.PlainMonthDay.from({ month: 8, day: 1 });
console.log(md.toString()); // '08-01'

const md2 = Temporal.PlainMonthDay.from({
  monthCode: "M08",
  day: 1,
  calendar: "chinese",
});
console.log(md2.toString()); // '1972-09-08[u-ca=chinese]'
```

### Utiliser les options

```js
const isoMD = Temporal.PlainMonthDay.from({ month: 8, day: 1 });
const md = Temporal.PlainMonthDay.from({
  monthCode: "M08",
  day: 1,
  calendar: "chinese",
});
console.log(isoMD.toString({ calendarName: "auto" })); // '08-01'
console.log(md.toString({ calendarName: "auto" })); // '1972-09-08[u-ca=chinese]'
console.log(isoMD.toString({ calendarName: "always" })); // '1972-08-01[u-ca=iso8601]'
console.log(md.toString({ calendarName: "always" })); // '1972-09-08[u-ca=chinese]'
console.log(isoMD.toString({ calendarName: "never" })); // '08-01'
console.log(md.toString({ calendarName: "never" })); // '1972-09-08'
console.log(isoMD.toString({ calendarName: "critical" })); // '1972-08-01[!u-ca=iso8601]'
console.log(md.toString({ calendarName: "critical" })); // '1972-09-08[!u-ca=chinese]'
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'objet {{JSxRef("Temporal.PlainMonthDay")}}
- La méthode statique {{JSxRef("Temporal/PlainMonthDay/from", "Temporal.PlainMonthDay.from()")}}
- La méthode {{JSxRef("Temporal/PlainMonthDay/toJSON", "Temporal.PlainMonthDay.prototype.toJSON()")}}
- La méthode {{JSxRef("Temporal/PlainMonthDay/toLocaleString", "Temporal.PlainMonthDay.prototype.toLocaleString()")}}
