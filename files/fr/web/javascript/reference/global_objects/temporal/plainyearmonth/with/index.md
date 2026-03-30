---
title: "Temporal.PlainYearMonth : méthode with()"
short-title: with()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainYearMonth/with
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

La méthode **`with()`** des instances de {{JSxRef("Temporal.PlainYearMonth")}} retourne un nouvel objet `Temporal.PlainYearMonth` représentant ce mois et son année avec certains champs remplacés par de nouvelles valeurs. Comme tous les objets `Temporal` sont conçus pour être immuables, cette méthode fonctionne essentiellement comme le mutateur des champs de mois et d'année.

Il n'existe pas de moyen évident de créer un nouvel objet `Temporal.PlainYearMonth` représentant le même mois et la même année dans un calendrier différent. Pour remplacer sa propriété `calendarId`, vous devez d'abord le convertir en un objet {{JSxRef("Temporal.PlainDate")}} en utilisant {{JSxRef("Temporal/PlainYearMonth/toPlainDate", "toPlainDate()")}}, changer le calendrier, puis le reconvertir.

## Syntaxe

```js-nolint
with(info)
with(info, options)
```

### Paramètres

- `info`
  - : Un objet contenant au moins une des propriétés reconnues par {{JSxRef("Temporal/PlainYearMonth/from", "Temporal.PlainYearMonth.from()")}} (à l'exception de `calendar`)&nbsp;: `era` et `eraYear`, `month`, `monthCode`, `year`. Les propriétés non définies utilisent les valeurs du mois et de l'année d'origine. Vous n'avez besoin de fournir qu'un seul de `month` ou `monthCode`, et un seul de `era` et `eraYear` ou `year`, et l'autre sera mis à jour en conséquence.
- `options` {{Optional_Inline}}
  - : Un objet contenant la propriété suivante&nbsp;:
    - `overflow` {{Optional_Inline}}
      - : Une chaîne de caractères définissant le comportement lorsque un composant de date est hors de portée. Les valeurs possibles sont&nbsp;:
        - `"constrain"` (par défaut)
          - : Le composant de date est [contraint](/fr/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainDate#ficer_les_dates_invalides) à la plage valide.
        - `"reject"`
          - : Un objet {{JSxRef("RangeError")}} est levé si le composant de date est hors de portée.

### Valeur de retour

Un nouvel objet `Temporal.PlainYearMonth`, où les champs définis dans `info` qui ne sont pas `undefined` sont remplacés par les valeurs correspondantes, et le reste des champs est copié à partir de la date d'origine.

### Exceptions

- {{JSxRef("TypeError")}}
  - : Levée dans l'un des cas suivants&nbsp;:
    - `info` n'est pas un objet.
    - `options` n'est pas un objet ou est `undefined`.
- {{JSxRef("RangeError")}}
  - : Levée dans l'un des cas suivants&nbsp;:
    - Les propriétés fournies qui définissent le même composant sont incohérentes.
    - Les propriétés non numériques fournies ne sont pas valides&nbsp;; par exemple, si `monthCode` n'est jamais un code de mois valide dans ce calendrier.
    - Les propriétés numériques fournies sont hors de portée, et `options.overflow` est défini sur `"reject"`.
    - Le résultat n'est pas dans la [plage représentable](/fr/docs/Web/JavaScript/Reference/Global_Objects/Temporal#dates_représentables), qui est ±(10<sup>8</sup> + 1) jours, soit environ ±273 972,6 ans, à partir de l'époque Unix.

## Exemples

### Utiliser la méthode `with()`

```js
const ym = Temporal.PlainYearMonth.from("2021-07");
const newYM = ym.with({ year: 2024 });
console.log(newYM.toString()); // "2024-07"
```

Pour plus d'exemples, consultez la documentation des propriétés individuelles qui peuvent être définies en utilisant `with()`.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'objet {{JSxRef("Temporal.PlainYearMonth")}}
- La méthode statique {{JSxRef("Temporal/PlainYearMonth/from", "Temporal.PlainYearMonth.from()")}}
