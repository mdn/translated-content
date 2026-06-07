---
title: "Temporal.ZonedDateTime : propriété second"
short-title: second
slug: Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime/second
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

La propriété d'accesseur **`second`** des instances de {{JSxRef("Temporal.ZonedDateTime")}} retourne un entier compris entre 0 et 59 représentant la composante seconde de cette heure.

Le mutateur d'accesseur de `second` est `undefined`. Vous ne pouvez pas modifier cette propriété directement. Utilisez la méthode {{JSxRef("Temporal/ZonedDateTime/with", "with()")}} pour créer un nouvel objet `Temporal.ZonedDateTime` avec la nouvelle valeur souhaitée.

Pour des informations générales et plus d'exemples, voir {{JSxRef("Temporal/PlainTime/second", "Temporal.PlainTime.prototype.second")}}.

Pour `ZonedDateTime`, `second` peut être discontinue en raison des changements de décalage. Bien que beaucoup plus rares que les changements de `hour` ou de `minute` (car les changements d'heure d'été se font généralement par heures entières), cela peut quand même se produire.

## Exemples

### Utiliser la propriété `second`

```js
const dt = Temporal.ZonedDateTime.from(
  "2021-07-01T12:34:56.123456789-04:00[America/New_York]",
);
console.log(dt.second); // 56
```

### Seconde discontinue

Typiquement, `second` passe toujours de 0 à 59 puis revient à 0, même lors d'une transition vers l'heure d'été. Il existe un cas particulier où la seconde peut être non continue&nbsp;: la normalisation des fuseaux horaires horaires. Au début du 20e siècle, la plupart des pays utilisaient leurs propres fuseaux horaires, qui n'étaient souvent pas un décalage horaire complet par rapport à l'UTC. Par exemple, Paris avait un décalage de UTC+0:09:21, qui a été changé en UTC+0 le 11 mars 1911.

```js
const dt = Temporal.ZonedDateTime.from(
  "1911-03-10T23:59:59+00:09:21[Europe/Paris]",
);
console.log(dt.second); // 59
const dt2 = dt.add({ seconds: 1 });
console.log(dt2.second); // 39
console.log(dt2.toString()); // 1911-03-10T23:50:39+00:00[Europe/Paris]
```

Pour cette raison, il convient de toujours privilégier {{JSxRef("Temporal/ZonedDateTime/add", "add()")}} et {{JSxRef("Temporal/ZonedDateTime/subtract", "subtract()")}} pour manipuler les dates et les heures, plutôt que de modifier directement la propriété `second`.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'objet {{JSxRef("Temporal.ZonedDateTime")}}
- La méthode {{JSxRef("Temporal/ZonedDateTime/with", "Temporal.ZonedDateTime.prototype.with()")}}
- La méthode {{JSxRef("Temporal/ZonedDateTime/add", "Temporal.ZonedDateTime.prototype.add()")}}
- La méthode {{JSxRef("Temporal/ZonedDateTime/subtract", "Temporal.ZonedDateTime.prototype.subtract()")}}
- La propriété {{JSxRef("Temporal/ZonedDateTime/millisecond", "Temporal.ZonedDateTime.prototype.millisecond")}}
- La propriété {{JSxRef("Temporal/ZonedDateTime/microsecond", "Temporal.ZonedDateTime.prototype.microsecond")}}
- La propriété {{JSxRef("Temporal/ZonedDateTime/nanosecond", "Temporal.ZonedDateTime.prototype.nanosecond")}}
- La propriété {{JSxRef("Temporal/PlainTime/second", "Temporal.PlainTime.prototype.second")}}
