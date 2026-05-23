---
title: "Temporal.PlainDate : méthode subtract()"
short-title: subtract()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainDate/subtract
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

La méthode **`subtract()`** des instances de {{JSxRef("Temporal.PlainDate")}} retourne un nouvel objet {{JSxRef("Temporal.PlainDate")}} représentant cette date reculée d'une durée donnée (sous une forme convertible par {{JSxRef("Temporal/Duration/from", "Temporal.Duration.from()")}}).

Si vous souhaitez soustraire deux dates et obtenir une durée, utilisez plutôt {{JSxRef("Temporal/PlainDate/since", "since()")}} ou {{JSxRef("Temporal/PlainDate/until", "until()")}}.

## Syntaxe

```js-nolint
subtract(duration)
subtract(duration, options)
```

### Paramètres

- `duration`
  - : Une chaîne de caractères, un objet ou une instance de {{JSxRef("Temporal.Duration")}} représentant une durée à soustraire de cette date. Elle est convertie en un objet `Temporal.Duration` en utilisant le même algorithme que {{JSxRef("Temporal/Duration/from", "Temporal.Duration.from()")}}.
- `options` {{Optional_Inline}}
  - : Un objet contenant la propriété suivante&nbsp;:
    - `overflow` {{Optional_Inline}}
      - : Une chaîne de caractères spécifiant le comportement lorsque un composant de date est hors de portée. Les valeurs possibles sont&nbsp;:
        - `"constrain"` (par défaut)
          - : Le composant de date est [limité](/fr/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainDate#fixer_les_dates_invalides) à la plage valide.
        - `"reject"`
          - : Un objet {{JSxRef("RangeError")}} est levé si le composant de date est hors de portée.

### Valeur de retour

Un nouvel objet `Temporal.PlainDate` représentant la date spécifiée par le `PlainDate` d'origine, moins la durée.

## Description

Soustraire une durée équivaut à [ajouter](/fr/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainDate/add) sa [négation](/fr/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Duration/negated), donc toutes les mêmes considérations s'appliquent.

### Exceptions

- {{JSxRef("RangeError")}}
  - : Levée si le résultat n'est pas dans la [plage représentable](/fr/docs/Web/JavaScript/Reference/Global_Objects/Temporal#dates_représentables), qui est ±(10<sup>8</sup> + 1) jours, soit environ ±273 972,6 ans, à partir de l'époque Unix.

## Exemples

### Soustraire une durée

```js
const start = Temporal.PlainDate.from("2022-01-01");
const end = start.subtract({ years: 1, months: 2, weeks: 3, days: 4 });
console.log(end.toString()); // 2020-10-07
```

Pour plus d'exemples, voir {{JSxRef("Temporal/PlainDate/add", "add()")}}.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'objet {{JSxRef("Temporal.PlainDate")}}
- L'objet {{JSxRef("Temporal.Duration")}}
- La méthode {{JSxRef("Temporal/PlainDate/add", "Temporal.PlainDate.prototype.add()")}}
- La méthode {{JSxRef("Temporal/PlainDate/since", "Temporal.PlainDate.prototype.since()")}}
- La méthode {{JSxRef("Temporal/PlainDate/until", "Temporal.PlainDate.prototype.until()")}}
