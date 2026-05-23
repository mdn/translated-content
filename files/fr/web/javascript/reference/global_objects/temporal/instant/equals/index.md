---
title: "Temporal.Instant : méthode equals()"
short-title: equals()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/Instant/equals
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

La méthode **`equals()`** des instances de {{JSxRef("Temporal.Instant")}} retourne `true` si cet instant est équivalent en valeur à un autre instant (sous une forme convertible par {{JSxRef("Temporal/Instant/from", "Temporal.Instant.from()")}}), et `false` sinon. Ils sont comparés par leur {{JSxRef("Temporal/Instant/epochNanoseconds", "epochNanoseconds")}}. Cela équivaut à `Temporal.Instant.compare(this, other) === 0`.

## Syntaxe

```js-nolint
equals(other)
```

### Paramètres

- `other`
  - : Une chaîne de caractères ou une instance de {{JSxRef("Temporal.Instant")}} représentant l'autre instant à comparer. Il est converti en objet `Temporal.Instant` en utilisant le même algorithme que {{JSxRef("Temporal/Instant/from", "Temporal.Instant.from()")}}.

### Valeur de retour

`true` si cet instant est égal à `other` en nanosecondes, sinon `false`.

## Exemples

### Utiliser la méthode `equals()`

```js
const instant1 = Temporal.Instant.from("2021-08-01T12:34:56Z");
const instant2 = Temporal.Instant.fromEpochMilliseconds(1627821296000);
console.log(instant1.equals(instant2)); // true
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'objet {{JSxRef("Temporal.Instant")}}
- La méthode statique {{JSxRef("Temporal/Instant/compare", "Temporal.Instant.compare()")}}
