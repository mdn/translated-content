---
title: "Temporal.PlainDate : méthode toString()"
short-title: toString()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainDate/toString
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

La méthode **`toString()`** des instances de {{JSxRef("Temporal.PlainDate")}} retourne une chaîne de caractères représentant cette date au format [RFC 9557](/fr/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainDate#format_rfc_9557).

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
          - : Inclut l'annotation du calendrier si le calendrier n'est pas `"iso8601"`.
        - `"always"`
          - : Inclut toujours l'annotation du calendrier.
        - `"never"`
          - : N'inclut jamais l'annotation du calendrier. Cela rend la chaîne de caractères retournée non récupérable à la même instance de {{JSxRef("Temporal.PlainDate")}}, bien que la valeur de la date reste la même.
        - `"critical"`
          - : Inclut toujours l'annotation du calendrier et ajoute un indicateur critique&nbsp;: `[!u-ca=calendar_id]`. Utile lors de l'envoi de la chaîne de caractères à certains systèmes, mais pas utile pour Temporal lui-même.

### Valeur de retour

Une chaîne de caractères au format [RFC 9557](/fr/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainDate#format_rfc_9557) représentant cette date. L'annotation du calendrier est incluse comme défini.

### Exceptions

- {{JSxRef("RangeError")}}
  - : Levée si l'une des options est invalide.
- {{JSxRef("TypeError")}}
  - : Levée si `options` n'est pas un objet ou `undefined`.

## Exemples

### Utiliser la méthode `toString()`

```js
const date = Temporal.PlainDate.from("2021-08-01");
console.log(date.toString()); // '2021-08-01'
```

### Utiliser les options

```js
const isoDate = Temporal.PlainDate.from({ year: 2021, month: 8, day: 1 });
const date = Temporal.PlainDate.from({
  year: 2021,
  month: 8,
  day: 1,
  calendar: "islamic-umalqura",
});
console.log(isoDate.toString({ calendarName: "auto" })); // '2021-08-01'
console.log(date.toString({ calendarName: "auto" })); // '2582-12-17[u-ca=islamic-umalqura]'
console.log(isoDate.toString({ calendarName: "always" })); // '2021-08-01[u-ca=iso8601]'
console.log(date.toString({ calendarName: "always" })); // '2582-12-17[u-ca=islamic-umalqura]'
console.log(date.toString({ calendarName: "never" })); // '2582-12-17'
console.log(isoDate.toString({ calendarName: "critical" })); // '2021-08-01[!u-ca=iso8601]'
console.log(date.toString({ calendarName: "critical" })); // '2582-12-17[!u-ca=islamic-umalqura]'
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'objet {{JSxRef("Temporal.PlainDate")}}
- La méthode statique {{JSxRef("Temporal/PlainDate/from", "Temporal.PlainDate.from()")}}
- La méthode {{JSxRef("Temporal/PlainDate/toJSON", "Temporal.PlainDate.prototype.toJSON()")}}
- La méthode {{JSxRef("Temporal/PlainDate/toLocaleString", "Temporal.PlainDate.prototype.toLocaleString()")}}
