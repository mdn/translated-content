---
title: "Temporal.Instant : propriété epochNanoseconds"
short-title: epochNanoseconds
slug: Web/JavaScript/Reference/Global_Objects/Temporal/Instant/epochNanoseconds
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

La propriété d'accesseur **`epochNanoseconds`** des instances de {{JSxRef("Temporal.Instant")}} retourne un {{JSxRef("BigInt")}} représentant le nombre de nanosecondes écoulées depuis l'époque Unix (minuit au début du 1er janvier 1970, UTC) jusqu'à cet instant.

Le mutateur d'accesseur de `epochNanoseconds` est `undefined`. Vous ne pouvez pas modifier cette propriété directement. Pour créer un nouvel objet `Temporal.Instant` avec la nouvelle valeur souhaitée de `epochNanoseconds`, utilisez plutôt la méthode statique {{JSxRef("Temporal/Instant/fromEpochNanoseconds", "Temporal.Instant.fromEpochNanoseconds()")}}.

Un instant ne peut représenter que ±10<sup>8</sup> jours (environ ±273 972,6 ans) autour de l'époque, soit ±8,64e21 nanosecondes. Tenter de définir `epochNanoseconds` au-delà de cette limite déclenche une {{JSxRef("RangeError")}}.

## Exemples

### Utiliser la propriété `epochNanoseconds`

```js
const instant = Temporal.Instant.from("2021-08-01T12:34:56.789Z");
console.log(instant.epochNanoseconds); // 1627821296789000000n

const instant2 = Temporal.Instant.from("1969-08-01T12:34:56.789Z");
console.log(instant2.epochNanoseconds); // -13173903211000000n
```

### Modifier `epochNanoseconds`

Ceci est la méthode qui permet de se déplacer de n'importe quelle quantité de temps&nbsp;:

```js
const instant = Temporal.Instant.from("2021-08-01T12:34:56.789Z");
const instant1hourLater = instant.add({ hours: 1 });
console.log(instant1hourLater.epochNanoseconds); // 1627824896789000000n
```

Si vous connaissez déjà le changement en nanosecondes, vous pouvez également créer directement un nouvel objet `Temporal.Instant`&nbsp;:

```js
const instant = Temporal.Instant.from("2021-08-01T12:34:56.789Z");
const instant1hourLater = Temporal.Instant.fromEpochNanoseconds(
  instant.epochNanoseconds + 3600000000000n,
);
console.log(instant1hourLater.epochNanoseconds); // 1627824896789000000n
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'objet {{JSxRef("Temporal.Instant")}}
- La propriété {{JSxRef("Temporal/Instant/epochMilliseconds", "Temporal.Instant.prototype.epochMilliseconds")}}
- La méthode statique {{JSxRef("Temporal/Instant/fromEpochNanoseconds", "Temporal.Instant.fromEpochNanoseconds()")}}
