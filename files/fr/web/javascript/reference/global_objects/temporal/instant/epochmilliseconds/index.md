---
title: "Temporal.Instant : propriété epochMilliseconds"
short-title: epochMilliseconds
slug: Web/JavaScript/Reference/Global_Objects/Temporal/Instant/epochMilliseconds
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

La propriété d'accesseur **`epochMilliseconds`** des instances de {{JSxRef("Temporal.Instant")}} retourne un entier représentant le nombre de millisecondes écoulées depuis l'époque Unix (minuit au début du 1er janvier 1970, UTC) jusqu'à cet instant. Elle est équivalente à la division de `epochNanoseconds` par `1e6` et à l'arrondi inférieur du résultat.

Le mutateur d'accesseur de `epochMilliseconds` est `undefined`. Vous ne pouvez pas modifier cette propriété directement. Pour créer un nouvel objet `Temporal.Instant` avec la nouvelle valeur souhaitée de `epochMilliseconds`, utilisez plutôt la méthode statique {{JSxRef("Temporal/Instant/fromEpochMilliseconds", "Temporal.Instant.fromEpochMilliseconds()")}}.

## Exemples

### Utiliser la propriété `epochMilliseconds`

```js
const instant = Temporal.Instant.from("2021-08-01T12:34:56.789Z");
console.log(instant.epochMilliseconds); // 1627821296789

const instant2 = Temporal.Instant.from("1969-08-01T12:34:56.789Z");
console.log(instant2.epochMilliseconds); // -13173903211
```

### Modifier `epochMilliseconds`

Ceci est la méthode qui permet de se déplacer de n'importe quelle quantité de temps&nbsp;:

```js
const instant = Temporal.Instant.from("2021-08-01T12:34:56.789Z");
const instant1hourLater = instant.add({ hours: 1 });
console.log(instant1hourLater.epochMilliseconds); // 1627824896789
```

Si vous connaissez déjà le changement en millisecondes, vous pouvez également créer directement un nouvel objet `Temporal.Instant`&nbsp;:

```js
const instant = Temporal.Instant.from("2021-08-01T12:34:56.789Z");
const instant1hourLater = Temporal.Instant.fromEpochMilliseconds(
  instant.epochMilliseconds + 3600000,
);
console.log(instant1hourLater.epochMilliseconds); // 1627824896789
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'objet {{JSxRef("Temporal.Instant")}}
- La propriété {{JSxRef("Temporal/Instant/epochNanoseconds", "Temporal.Instant.prototype.epochNanoseconds")}}
- La méthode statique {{JSxRef("Temporal/Instant/fromEpochMilliseconds", "Temporal.Instant.fromEpochMilliseconds()")}}
