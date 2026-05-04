---
title: "Temporal.PlainTime : méthode statique from()"
short-title: from()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainTime/from
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

La méthode statique **`Temporal.PlainTime.from()`** crée un nouvel objet `Temporal.PlainTime` à partir d'un autre objet `Temporal.PlainTime`, d'un objet avec des propriétés temporelles ou d'une chaîne de caractères au format [RFC 9557](/fr/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainTime#format_rfc_9557).

## Syntaxe

```js-nolint
Temporal.PlainTime.from(info)
Temporal.PlainTime.from(info, options)
```

### Paramètres

- `info`
  - : L'un des éléments suivants&nbsp;:
    - Une instance de {{JSxRef("Temporal.PlainTime")}}, qui crée une copie de l'instance.
    - Une instance de {{JSxRef("Temporal.PlainDateTime")}}, qui fournit l'heure de la même manière que {{JSxRef("Temporal/PlainDateTime/toPlainDate", "Temporal.PlainDateTime.prototype.toPlainTime()")}}.
    - Une instance de {{JSxRef("Temporal.ZonedDateTime")}}, qui fournit l'heure de la même manière que {{JSxRef("Temporal/ZonedDateTime/toPlainDate", "Temporal.ZonedDateTime.prototype.toPlainTime()")}}.
    - Une chaîne de caractères au format [RFC 9557](/fr/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainTime#format_rfc_9557) contenant une heure.
    - Un objet contenant au moins l'une des propriétés suivantes (dans l'ordre où elles sont récupérées et validées)&nbsp;:
      - {{JSxRef("Temporal/PlainTime/hour", "hour")}}
      - {{JSxRef("Temporal/PlainTime/microsecond", "microsecond")}}
      - {{JSxRef("Temporal/PlainTime/millisecond", "millisecond")}}
      - {{JSxRef("Temporal/PlainTime/minute", "minute")}}
      - {{JSxRef("Temporal/PlainTime/nanosecond", "nanosecond")}}
      - {{JSxRef("Temporal/PlainTime/second", "second")}}

      Ils sont tronqués pour être des entiers. Les valeurs hors plage sont gérées par l'option `overflow`.

- `options` {{Optional_Inline}}
  - : Un objet contenant la propriété suivante&nbsp;:
    - `overflow` {{Optional_Inline}}
      - : Une chaîne de caractères définissant le comportement lorsqu'un composant temporel est hors plage (lors de l'utilisation de l'objet `info`). Les valeurs possibles sont&nbsp;:
        - `"constrain"` (par défaut)
          - : Le composant temporel est limité à la plage valide.
        - `"reject"`
          - : Une {{JSxRef("RangeError")}} est levée si le composant temporel est hors plage.

### Valeur de retour

Un nouvel objet `Temporal.PlainTime`, représentant l'heure définie par `info`.

### Exceptions

- {{JSxRef("TypeError")}}
  - : Levée dans l'un des cas suivants&nbsp;:
    - `info` n'est pas un objet avec au moins une propriété reconnue ou une chaîne de caractères.
    - `options` n'est pas un objet ou est `undefined`.
- {{JSxRef("RangeError")}}
  - : Levée si les propriétés numériques fournies sont hors plage et que `options.overflow` est défini sur `"reject"`.

## Exemples

### Créer un `PlainTime` à partir d'un objet

```js
const t1 = Temporal.PlainTime.from({ hour: 0 });
console.log(t1.toString()); // "00:00:00"

const t2 = Temporal.PlainTime.from({ hour: 12, minute: 34, second: 56 });
console.log(t2.toString()); // "12:34:56"

const t3 = Temporal.PlainTime.from({
  hour: 12,
  minute: 34,
  second: 56,
  millisecond: 123,
  microsecond: 456,
  nanosecond: 789,
});
console.log(t3.toString()); // "12:34:56.123456789"
```

### Contrôler le comportement en cas de dépassement

Par défaut, les valeurs hors plage sont limitées à la plage valide&nbsp;:

```js
const t1 = Temporal.PlainTime.from({ hour: 25 });
console.log(t1.toString()); // "23:00:00"

const t2 = Temporal.PlainTime.from({ hour: 25, minute: 60 });
console.log(t2.toString()); // "23:59:00"
```

Vous pouvez changer ce comportement pour lever une erreur à la place&nbsp;:

```js
Temporal.PlainTime.from({ hour: 25 }, { overflow: "reject" });
// RangeError: time value "hour" not in 0..23: 25
```

### Créer un `PlainTime` à partir d'une chaîne de caractères

```js
const t1 = Temporal.PlainTime.from("12:34:56.123456789");
console.log(t1.toLocaleString("en-US", { timeStyle: "full" }));
// 12:34:56 PM
```

### Créer un `PlainTime` à partir d'une autre instance de `Temporal`

```js
const dt = Temporal.PlainDateTime.from("2021-07-01T12:00");
const t = Temporal.PlainTime.from(dt);
console.log(t.toString()); // "12:00:00"

const zdt = Temporal.ZonedDateTime.from(
  "2021-07-01T00:00+08:00[Asia/Shanghai]",
);
const t2 = Temporal.PlainTime.from(zdt);
console.log(t2.toString()); // "00:00:00"

const t3 = Temporal.PlainTime.from(t);
console.log(t3.toString()); // "12:00:00"
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'objet {{JSxRef("Temporal.PlainTime")}}
- Le constructeur {{JSxRef("Temporal/PlainTime/PlainTime", "Temporal.PlainTime()")}}
- La méthode {{JSxRef("Temporal/PlainTime/with", "Temporal.PlainTime.prototype.with()")}}
