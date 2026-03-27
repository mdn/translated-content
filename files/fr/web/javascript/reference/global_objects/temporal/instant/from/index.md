---
title: "Temporal.Instant : méthode statique from()"
short-title: from()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/Instant/from
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

La méthode statique **`from()`** des instances de {{JSxRef("Temporal.Instant")}} crée un nouvel objet `Temporal.Instant` à partir d'un autre objet `Temporal.Instant` ou d'une chaîne de caractères au format [RFC 9557](/fr/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Instant#format_rfc_9557).

## Syntaxe

```js-nolint
Temporal.Instant.from(info)
```

### Paramètres

- `info`
  - : L'un des éléments suivants&nbsp;:
    - Une instance de {{JSxRef("Temporal.Instant")}}, ce qui crée une copie de l'instance.
    - Une chaîne de caractères au format [RFC 9557](/fr/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Instant#format_rfc_9557) contenant une date, une heure et un décalage de fuseau horaire. Le nom du fuseau horaire est ignoré&nbsp;; seul le décalage est utilisé.

### Valeur de retour

Un nouvel objet `Temporal.Instant` représentant l'instant dans le temps défini par `info`.

### Exceptions

- {{JSxRef("TypeError")}}
  - : Levée si `info` n'est pas une instance de `Temporal.Instant` ou une chaîne de caractères.
- {{JSxRef("RangeError")}}
  - : Levée dans l'un des cas suivants&nbsp;:
    - La chaîne de caractères n'est pas une chaîne de caractères RFC 9557 valide.
    - L'information n'est pas dans la [plage représentable](/fr/docs/Web/JavaScript/Reference/Global_Objects/Temporal#dates_représentables), qui est de ±10<sup>8</sup> jours, soit environ ±273 972,6 ans, à partir de l'époque Unix.

## Exemples

### Créer un instant à partir d'une chaîne de caractères

```js
const instant = Temporal.Instant.from("1970-01-01T00Z");
console.log(instant.toString()); // 1970-01-01T00:00:00Z

const instant2 = Temporal.Instant.from("1970-01-01T00+08:00");
console.log(instant2.toString()); // 1969-12-31T16:00:00Z

// America/New_York est UTC-5 en janvier 1970, pas UTC+8
const instant3 = Temporal.Instant.from("1970-01-01T00+08:00[America/New_York]");
console.log(instant3.toString()); // 1969-12-31T16:00:00Z; le nom du fuseau horaire est ignoré
```

### Créer un instant à partir d'un autre instant

```js
const instant = Temporal.Instant.from("1970-01-01T00Z");
const instant2 = Temporal.Instant.from(instant);
console.log(instant2.toString()); // 1970-01-01T00:00:00Z
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'objet {{JSxRef("Temporal.Instant")}}
- La méthode statique {{JSxRef("Temporal/Instant/fromEpochMilliseconds", "Temporal.Instant.fromEpochMilliseconds()")}}
- La méthode statique {{JSxRef("Temporal/Instant/fromEpochNanoseconds", "Temporal.Instant.fromEpochNanoseconds()")}}
