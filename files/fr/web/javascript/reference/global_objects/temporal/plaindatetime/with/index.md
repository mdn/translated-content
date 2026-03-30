---
title: "Temporal.PlainDateTime : méthode with()"
short-title: with()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainDateTime/with
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

La méthode **`with()`** des instances de {{JSxRef("Temporal.PlainDateTime")}} retourne un nouvel objet `Temporal.PlainDateTime` représentant cette date et heure avec certains champs remplacés par de nouvelles valeurs. Comme tous les objets `Temporal` sont conçus pour être immuables, cette méthode fonctionne essentiellement comme le mutateur pour les champs de la date et de l'heure.

Pour remplacer la propriété {{JSxRef("Temporal/PlainDateTime/calendarId", "calendarId")}}, utilisez plutôt la méthode {{JSxRef("Temporal/PlainDateTime/withCalendar", "withCalendar()")}}.

## Syntaxe

```js-nolint
with(info)
with(info, options)
```

### Paramètres

- `info`
  - : Un objet contenant au moins une des propriétés reconnues par {{JSxRef("Temporal/PlainDateTime/from", "Temporal.PlainDateTime.from()")}} (sauf `calendar`)&nbsp;: `day`, `era` et `eraYear`, `hour`, `microsecond`, `millisecond`, `minute`, `month`, `monthCode`, `nanosecond`, `second`, `year`. Les propriétés non définies utilisent les valeurs de la date et de l'heure d'origine. Il est nécessaire de fournir soit `month` soit `monthCode`, et soit `era` et `eraYear` soit `year`, et l'autre sera mis à jour en conséquence.
- `options` {{Optional_Inline}}
  - : Un objet contenant la propriété suivante&nbsp;:
    - `overflow` {{Optional_Inline}}
      - : Une chaîne de caractères définissant le comportement lorsqu'un composant de date est hors plage. Les valeurs possibles sont&nbsp;:
        - `"constrain"` (par défaut)
          - : Le composant de date est [contraint](/fr/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainDate#fixer_les_dates_invalides) à la plage valide.
        - `"reject"`
          - : Un objet {{JSxRef("RangeError")}} est levé si le composant de date est hors plage.

### Valeur de retour

Un nouvel objet `Temporal.PlainDateTime`, où les champs spécifiés dans `info` qui ne sont pas `undefined` sont remplacés par les valeurs correspondantes, et le reste des champs est copié depuis la date et heure d'origine.

### Exceptions

- {{JSxRef("TypeError")}}
  - : Levée dans l'un des cas suivants&nbsp;:
    - `info` n'est pas un objet.
    - `options` n'est pas un objet ou `undefined`.
- {{JSxRef("RangeError")}}
  - : Levée dans l'un des cas suivants&nbsp;:
    - Les propriétés fournies qui définissent le même composant sont incohérentes.
    - Les propriétés non numériques fournies ne sont pas valides&nbsp;; par exemple, si `monthCode` n'est jamais un code de mois valide dans ce calendrier.
    - Les propriétés numériques fournies sont hors plage, et `options.overflow` est défini sur `"reject"`.
    - Le résultat n'est pas dans la [plage représentable](/fr/docs/Web/JavaScript/Reference/Global_Objects/Temporal#dates_représentables), qui est ±(10<sup>8</sup> + 1) jours, ou environ ±273 972,6 années, depuis l'époque Unix.

## Exemples

### Utiliser la méthode `with()`

```js
const dt = Temporal.PlainDateTime.from("2021-07-01T12:34:56");
const newDT = dt.with({ hour: 13 });
console.log(newDT.toString()); // "2021-07-01T13:34:56"
const newDT2 = dt.with({ month: 2, day: 22, millisecond: 222 });
console.log(newDT2.toString()); // "2021-02-22T13:34:56.222"
const nextDecade = dt.with({ year: dt.year + 10 });
console.log(nextDecade.toString()); // "2031-07-01T13:34:56"
```

Pour plus d'exemples, voir la documentation des propriétés individuelles qui peuvent être définies en utilisant `with()`.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'objet {{JSxRef("Temporal.PlainDateTime")}}
- La méthode {{JSxRef("Temporal/PlainDateTime/withCalendar", "Temporal.PlainDateTime.prototype.withCalendar()")}}
- La méthode {{JSxRef("Temporal/PlainDateTime/withPlainTime", "Temporal.PlainDateTime.prototype.withPlainTime()")}}
- La méthode statique {{JSxRef("Temporal/PlainDateTime/from", "Temporal.PlainDateTime.from()")}}
- La méthode {{JSxRef("Temporal/PlainDateTime/add", "Temporal.PlainDateTime.prototype.add()")}}
- La méthode {{JSxRef("Temporal/PlainDateTime/subtract", "Temporal.PlainDateTime.prototype.subtract()")}}
