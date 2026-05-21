---
title: "Temporal.PlainDateTime : méthode subtract()"
short-title: subtract()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainDateTime/subtract
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

La méthode **`subtract()`** des instances de {{JSxRef("Temporal.PlainDateTime")}} retourne un nouvel objet `Temporal.PlainDateTime` représentant cette date et heure reculée d'une durée donnée (sous une forme convertible par {{JSxRef("Temporal/Duration/from", "Temporal.Duration.from()")}}).

Si vous souhaitez soustraire deux dates et obtenir une durée, utilisez plutôt {{JSxRef("Temporal/PlainDateTime/since", "since()")}} ou {{JSxRef("Temporal/PlainDateTime/until", "until()")}}.

## Syntaxe

```js-nolint
subtract(duration)
subtract(duration, options)
```

### Paramètres

- `duration`
  - : Une chaîne de caractères, un objet ou une instance de {{JSxRef("Temporal.Duration")}} représentant une durée à soustraire de cette date et heure. Elle est convertie en un objet `Temporal.Duration` en utilisant le même algorithme que {{JSxRef("Temporal/Duration/from", "Temporal.Duration.from()")}}.
- `options` {{Optional_Inline}}
  - : Un objet contenant la propriété suivante&nbsp;:
    - `overflow` {{Optional_Inline}}
      - : Une chaîne de caractères définissant le comportement lorsque un composant de date est hors de portée. Les valeurs possibles sont&nbsp;:
        - `"constrain"` (par défaut)
          - : Le composant de date est [contraint](/fr/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainDate#fixer_les_dates_invalides) à la plage valide.
        - `"reject"`
          - : Un objet {{JSxRef("RangeError")}} est levé si le composant de date est hors de portée.

### Valeur de retour

Un nouvel objet `Temporal.PlainDateTime` représentant la date et l'heure définies par le `PlainDateTime` d'origine, moins la durée.

### Exceptions

- {{JSxRef("RangeError")}}
  - : Levée si le résultat n'est pas dans la [plage représentable](/fr/docs/Web/JavaScript/Reference/Global_Objects/Temporal#dates_représentables), qui est ±(10<sup>8</sup> + 1) jours, soit environ ±273 972,6 ans, à partir de l'époque Unix.

## Description

Soustraire une durée est équivalent à [ajouter](/fr/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainDateTime/add) sa [négation](/fr/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Duration/negated), donc toutes les mêmes considérations s'appliquent.

## Exemples

### Soustraire une durée

```js
const start = Temporal.PlainDateTime.from("2022-01-01T12:34:56");
const end = start.subtract({
  years: 1,
  months: 2,
  weeks: 3,
  days: 4,
  hours: 5,
  minutes: 6,
  seconds: 7,
  milliseconds: 8,
});
console.log(end.toString()); // 2020-10-07T07:28:48.992
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'objet {{JSxRef("Temporal.PlainDateTime")}}
- L'objet {{JSxRef("Temporal.Duration")}}
- La méthode {{JSxRef("Temporal/PlainDateTime/add", "Temporal.PlainDateTime.prototype.add()")}}
- La méthode {{JSxRef("Temporal/PlainDateTime/since", "Temporal.PlainDateTime.prototype.since()")}}
- La méthode {{JSxRef("Temporal/PlainDateTime/until", "Temporal.PlainDateTime.prototype.until()")}}
