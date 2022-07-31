---
title: Intl.DateTimeFormat.prototype.formatToParts()
slug: Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/formatToParts
tags:
  - DateTimeFormat
  - Internationalisation
  - Intl
  - JavaScript
  - Méthode
  - Prototype
  - Reference
  - i18n
translation_of: Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/formatToParts
original_slug: Web/JavaScript/Reference/Objets_globaux/Intl/DateTimeFormat/formatToParts
---
{{JSRef}}

La méthode **`Intl.DateTimeFormat.prototype.formatToParts()`** permet de mettre en forme des chaînes de caractères avec des informations temporelles selon la locale utilisée.

## Syntaxe

```js
Intl.DateTimeFormat.prototype.formatToParts(date)
```

### Paramètres

- `date` {{optional_inline}}
  - : La date qu'on souhaite mettre en forme.

### Valeur de retour

Un tableau ({{jsxref("Array")}}) d'objets qui contiennent les composants de la date mis en forme.

## Description

La méthode `formatToParts()` est utile lorsqu'on souhaite mettre en forme des dates de façon personnalisée. Elle renvoie un tableau d'objets qui contiennent les fragments spécifiques à la locale, à partir desquels on peut construire des chaînes tout en conservant les parties spécifique à la locale. La structure de l'objet renvoyé par la méthode est semblable à celle-ci :

```js
[
  { type: "day", value: "17" },
  { type: "weekday", value "Monday" }
]
```

Les types possibles sont :

- `day`
  - : La chaîne utilisée pour désigner le jour, par exemple `"17"`.
- `dayPeriod`
  - : La chaîne utilisée pour désigner le moment de la journée, par exemple `"AM"` (qui désigne la matinée, avant midi) ou `"PM"` (qui désigne l'après-midi).
- `era`
  - : La chaîne utilisée pour l'ère (par exemple `"BC"` ou `"AD"`).
- `hour`
  - : La chaîne utilisée pour l'heure (par exemple `"3"` or `"03"`).
- `literal`
  - : La chaîne utilisée pour séparée le jour de l'heure (par exemple `"` `:` `,` `/` `"`).
- `minute`
  - : La chaîne utilisée pour les minutes (par exemple `"00"`).
- `month`
  - : La chaîne utilisée pour le mois (par exemple `"12"`).
- `second`
  - : La chaîne utilisée pour les secondes (par exemple `"02"`).
- `timeZoneName`
  - : La chaîne utilisée pour désigner le fuseau horaire (par exemple `"UTC"`).
- `weekday`
  - : La chaîne de caractères utilisée pour le jour de la semaine, par exemple `"M"`, `"Monday"` ou `"Montag"`.
- `year`
  - : La chaîne utilisée pour désigner l'année (par exemple `"2012"` ou `"96"`).

## Exemples

`DateTimeFormat` produit des chaînes localisées opaques qui ne peuvent pas être manipulées directement :

```js
var date = Date.UTC(2012, 11, 17, 3, 0, 42);

var formatter = new Intl.DateTimeFormat("en-us", {
  weekday: 'long',
  year: 'numeric',
  month: 'numeric',
  day: 'numeric',
  hour: 'numeric',
  minute: 'numeric',
  second: 'numeric',
  hour12: true,
  timeZone: "UTC"
});

formatter.format(date);
// "Monday, 12/17/2012, 3:00:42 AM"
```

Cependant, pour de nombreuses interfaces utilisateur, on peut vouloir personnaliser la mise en forme de cette chaîne de caractères. La méthode `formatToParts` permet une mise en forme dans le souci de la locale en manipulant les différentes composantes :

```js
formatter.formatToParts(date);

// return value:
[
  { type: 'weekday',   value: 'Monday' },
  { type: 'separator', value: ', '     },
  { type: 'month',     value: '12'     },
  { type: 'literal', value: '/'      },
  { type: 'day',       value: '17'     },
  { type: 'literal', value: '/'      },
  { type: 'year',      value: '2012'   },
  { type: 'literal', value: ', '     },
  { type: 'hour',      value: '3'      },
  { type: 'literal', value: ':'      },
  { type: 'minute',    value: '00'     },
  { type: 'literal', value: ':'      },
  { type: 'second',    value: '42'     },
  { type: 'literal', value: ' '      },
  { type: 'dayPeriod', value: 'AM'     }
]
```

L'information étant décomposée, on peut alors la mettre en forme et la recomposée de façon adaptée :

```js
var dateString = formatter.formatToParts(date).map(({type, value}) => {
  switch (type) {
    case 'dayPeriod': return `<strong>${value}</strong>`;
    default : return value;
  }
}).reduce((string, part) => string + part);

console.log(formatter.format(date));
// "Monday, 12/17/2012, 3:00:42 AM"

console.log(dateString);
// "Monday, 12/17/2012, 3:00:42 <strong>AM</strong>"
```

## Prothèse d'émulation (_polyfill_)

Une prothèse de cette fonctionnalité est disponible sur le dépôt décrivant [la proposition de fonctionnalité](https://github.com/zbraniecki/proposal-intl-formatToParts).

## Spécifications

| Spécification                                                                                                                                                            | État                             | Commentaires         |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------- | -------------------- |
| {{SpecName('ES Int Draft', '#sec-Intl.DateTimeFormat.prototype.formatToParts', 'Intl.DateTimeFormat.prototype.formatToParts')}} | {{Spec2('ES Int Draft')}} | Définition initiale. |

## Compatibilité des navigateurs

{{Compat("javascript.builtins.Intl.DateTimeFormat.formatToParts")}}

## Voir aussi

- {{jsxref("DateTimeFormat", "Intl.DateTimeFormat")}}
- {{jsxref("DateTimeFormat.format", "Intl.DateTimeFormat.prototype.format")}}
- {{jsxref("Date.prototype.toLocaleString()")}}
- {{jsxref("Date.prototype.toLocaleDateString()")}}
- {{jsxref("Date.prototype.toLocaleTimeString()")}}
