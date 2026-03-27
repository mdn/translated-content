---
title: "Temporal.Instant : méthode statique compare()"
short-title: compare()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/Instant/compare
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

La méthode statique **`compare()`** des instances de {{JSxRef("Temporal.Instant")}} retourne un nombre (-1, 0 ou 1) indiquant si le premier instant est antérieur, identique ou postérieur au second instant. Elle est équivalente à la comparaison des {{JSxRef("Temporal/Instant/epochNanoseconds", "epochNanoseconds")}} des deux instants.

## Syntaxe

```js-nolint
Temporal.Instant.compare(instant1, instant2)
```

### Paramètres

- `instant1`
  - : Une chaîne de caractères ou une instance de {{JSxRef("Temporal.Instant")}} représentant le premier instant à comparer. Il est converti en objet `Temporal.Instant` en utilisant le même algorithme que {{JSxRef("Temporal/Instant/from", "Temporal.Instant.from()")}}.
- `instant2`
  - : Le second instant à comparer, converti en objet `Temporal.Instant` en utilisant le même algorithme que `instant1`.

### Valeur de retour

Retourne `-1` si `instant1` est antérieur à `instant2`, `0` s'ils sont identiques, et `1` si `instant1` est postérieur à `instant2`.

## Exemples

### Utiliser la méthode `compare()`

```js
const instant1 = Temporal.Instant.from("2021-08-01T12:34:56Z");
const instant2 = Temporal.Instant.from("2021-08-01T12:34:56Z");

console.log(Temporal.Instant.compare(instant1, instant2)); // 0

const instant3 = Temporal.Instant.from("2021-08-01T13:34:56Z");
console.log(Temporal.Instant.compare(instant1, instant3)); // -1
```

### Trier un tableau d'instants

L'objectif de cette fonction `compare()` est d'agir comme un comparateur à passer à {{JSxRef("Array.prototype.sort()")}} et aux fonctions associées.

```js
const instants = [
  Temporal.Instant.from("2021-08-01T12:34:56Z"),
  Temporal.Instant.from("2021-08-01T12:34:56+01:00"),
  Temporal.Instant.from("2021-08-01T12:34:56-01:00"),
];

instants.sort(Temporal.Instant.compare);
console.log(instants.map((instant) => instant.toString()));
// [ '2021-08-01T11:34:56Z', '2021-08-01T12:34:56Z', '2021-08-01T13:34:56Z' ]
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'objet {{JSxRef("Temporal.Instant")}}
- La méthode {{JSxRef("Temporal/Instant/equals", "Temporal.Instant.prototype.equals()")}}
