---
title: "Temporal.ZonedDateTime : propriété minute"
short-title: minute
slug: Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime/minute
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

La propriété d'accesseur **`minute`** des instances de {{JSxRef("Temporal.ZonedDateTime")}} retourne un entier compris entre 0 et 59 représentant la composante minute de cette heure.

Le mutateur d'accesseur de `minute` est `undefined`. Vous ne pouvez pas modifier cette propriété directement. Utilisez la méthode {{JSxRef("Temporal/ZonedDateTime/with", "with()")}} pour créer un nouvel objet `Temporal.ZonedDateTime` avec la nouvelle valeur souhaitée.

Pour des informations générales et plus d'exemples, voir {{JSxRef("Temporal/PlainTime/minute", "Temporal.PlainTime.prototype.minute")}}.

Pour `ZonedDateTime`, `minute` peut être non continu en raison des changements de décalage. Bien que beaucoup plus rares que les changements de `hour` (car les changements d'heure d'été se font généralement par heures entières), cela peut quand même se produire.

## Exemples

### Utiliser la propriété `minute`

```js
const dt = Temporal.ZonedDateTime.from(
  "2021-07-01T12:34:56.123456789-04:00[America/New_York]",
);
console.log(dt.minute); // 34
```

### Minute discontinue

Typiquement, `minute` passe toujours de 0 à 59 puis revient à 0, même lors d'une transition vers l'heure d'été. Il existe un cas particulier où l'heure d'été a un décalage de 30 minutes&nbsp;: l'île Lord Howe en Australie, qui passe de +10:30 à +11:00. Dans ce cas, la minute peut être non continue.

```js
const dt = Temporal.ZonedDateTime.from(
  "2021-10-03T01:59:00+10:30[Australia/Lord_Howe]",
);
console.log(dt.minute); // 59
const dt2 = dt.add({ minutes: 1 });
console.log(dt2.minute); // 30
console.log(dt2.toString()); // 2021-10-03T02:30:00+11:00[Australia/Lord_Howe]
```

Il existe un deuxième cas particulier où la minute peut être non continue&nbsp;: la normalisation des fuseaux horaires horaires. Au début du XXe siècle, la plupart des pays utilisaient leurs propres fuseaux horaires, qui n'étaient souvent pas un décalage horaire complet par rapport à l'UTC. Par exemple, Paris avait un décalage de UTC+0:09:21, qui a été changé en UTC+0 le 11 mars 1911.

```js
const dt = Temporal.ZonedDateTime.from(
  "1911-03-10T23:59:00+00:09:21[Europe/Paris]",
);
console.log(dt.minute); // 59
const dt2 = dt.add({ minutes: 1 });
console.log(dt2.minute); // 50
console.log(dt2.toString()); // 1911-03-10T23:50:39+00:00[Europe/Paris]
```

Pour cette raison, il convient de toujours privilégier {{JSxRef("Temporal/ZonedDateTime/add", "add()")}} et {{JSxRef("Temporal/ZonedDateTime/subtract", "subtract()")}} pour manipuler les dates et les heures, plutôt que de modifier directement la propriété `minute`.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'objet {{JSxRef("Temporal.ZonedDateTime")}}
- La méthode {{JSxRef("Temporal/ZonedDateTime/with", "Temporal.ZonedDateTime.prototype.with()")}}
- La méthode {{JSxRef("Temporal/ZonedDateTime/add", "Temporal.ZonedDateTime.prototype.add()")}}
- La méthode {{JSxRef("Temporal/ZonedDateTime/subtract", "Temporal.ZonedDateTime.prototype.subtract()")}}
- La propriété {{JSxRef("Temporal/PlainTime/minute", "Temporal.ZonedDateTime.prototype.minute")}}
