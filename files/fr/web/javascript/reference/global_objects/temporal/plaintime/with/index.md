---
title: "Temporal.PlainTime : méthode with()"
short-title: with()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainTime/with
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

La méthode **`with()`** des instances de {{JSxRef("Temporal.PlainTime")}} retourne un nouvel objet `Temporal.PlainTime` représentant cette heure avec certains champs remplacés par de nouvelles valeurs. Comme tous les objets `Temporal` sont conçus pour être immuables, cette méthode fonctionne essentiellement comme un mutateur pour les champs de l'heure.

## Syntaxe

```js-nolint
with(info)
with(info, options)
```

### Paramètres

- `info`
  - : Un objet contenant au moins une des propriétés reconnues par {{JSxRef("Temporal/PlainTime/from", "Temporal.PlainTime.from()")}}&nbsp;: `hour`, `microsecond`, `millisecond`, `minute`, `nanosecond`, `second`. Les propriétés non définies utilisent les valeurs de l'heure originale.
- `options` {{Optional_Inline}}
  - : Un objet contenant la propriété suivante&nbsp;:
    - `overflow` {{Optional_Inline}}
      - : Une chaîne de caractères définissant le comportement lorsque un composant de l'heure est hors de portée. Les valeurs possibles sont&nbsp;:
        - `"constrain"` (par défaut)
          - : Le composant de l'heure est limité à la plage valide.
        - `"reject"`
          - : Un objet {{JSxRef("RangeError")}} est levé si le composant de l'heure est hors de portée.

### Valeur de retour

Un nouvel objet `Temporal.PlainTime`, où les champs définis dans `info` qui ne sont pas `undefined` sont remplacés par les valeurs correspondantes, et le reste des champs est copié à partir de l'heure originale.

### Exceptions

- {{JSxRef("TypeError")}}
  - : Levée dans l'un des cas suivants&nbsp;:
    - `info` n'est pas un objet avec au moins une propriété reconnue ou une chaîne de caractères.
    - `options` n'est pas un objet ou `undefined`.
- {{JSxRef("RangeError")}}
  - : Levée si les propriétés numériques fournies sont hors de portée et que `options.overflow` est défini sur `"reject"`.

## Exemples

### Utiliser la méthode `with()`

```js
const time = Temporal.PlainTime.from("12:34:56.123456789");
const newTime = time.with({ hour: 23 });
console.log(newTime.toString()); // '23:34:56.123456789'
```

Pour plus d'exemples, consultez la documentation des propriétés individuelles qui peuvent être définies à l'aide de `with()`.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'objet {{JSxRef("Temporal.PlainTime")}}
- La méthode statique {{JSxRef("Temporal/PlainTime/from", "Temporal.PlainTime.from()")}}
- La méthode {{JSxRef("Temporal/PlainTime/add", "Temporal.PlainTime.prototype.add()")}}
- La méthode {{JSxRef("Temporal/PlainTime/subtract", "Temporal.PlainTime.prototype.subtract()")}}
