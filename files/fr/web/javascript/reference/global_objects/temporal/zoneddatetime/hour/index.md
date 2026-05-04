---
title: "Temporal.ZonedDateTime : propriété hour"
short-title: hour
slug: Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime/hour
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

La propriété d'accesseur **`hour`** des instances de {{JSxRef("Temporal.ZonedDateTime")}} retourne un entier de 0 à 23 représentant la composante heure de ce temps.

Le mutateur d'accesseur de `hour` est `undefined`. Vous ne pouvez pas modifier cette propriété directement. Utilisez la méthode {{JSxRef("Temporal/ZonedDateTime/with", "with()")}} pour créer un nouvel objet `Temporal.ZonedDateTime` avec la nouvelle valeur souhaitée.

Pour des informations générales et plus d'exemples, voir {{JSxRef("Temporal/PlainTime/hour", "Temporal.PlainTime.prototype.hour")}}.

Pour `ZonedDateTime`, `hour` peut être discontinu en raison des changements de décalage tels que les transitions de l'heure d'été. Dans ce cas, l'heure peut être répétée ou sautée.

## Exemples

### Utiliser la propriété `hour`

```js
const dt = Temporal.ZonedDateTime.from(
  "2021-07-01T12:34:56.123456789-04:00[America/New_York]",
);
console.log(dt.hour); // 12
```

### Heure discontinue

L'heure discontinue est très courante en raison des transitions de l'heure d'été, ce qui est expliqué plus en détail dans [Ambiguïté et écarts lors du passage de l'heure locale à l'UTC](/fr/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime#ambiguïté_et_écarts_lors_du_passage_de_lheure_locale_à_lutc).

```js
const dt = Temporal.ZonedDateTime.from(
  "2024-11-03T01:59:00-04:00[America/New_York]",
);
console.log(dt.hour); // 1
const dt2 = dt.add({ minutes: 1 });
console.log(dt2.hour); // 1
console.log(dt2.toString()); // 2024-11-03T01:00:00-05:00[America/New_York]

const dt3 = Temporal.ZonedDateTime.from(
  "2024-03-10T01:59:00-05:00[America/New_York]",
);
console.log(dt3.hour); // 1
const dt4 = dt3.add({ minutes: 1 });
console.log(dt4.hour); // 3
console.log(dt4.toString()); // 2024-03-10T03:00:00-04:00[America/New_York]
```

Pour cette raison, vous devriez toujours privilégier {{JSxRef("Temporal/ZonedDateTime/add", "add()")}} et {{JSxRef("Temporal/ZonedDateTime/subtract", "subtract()")}} pour manipuler les dates et les heures, plutôt que de modifier directement la propriété `hour`.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'objet {{JSxRef("Temporal.ZonedDateTime")}}
- La méthode {{JSxRef("Temporal/ZonedDateTime/with", "Temporal.ZonedDateTime.prototype.with()")}}
- La méthode {{JSxRef("Temporal/ZonedDateTime/add", "Temporal.ZonedDateTime.prototype.add()")}}
- La méthode {{JSxRef("Temporal/ZonedDateTime/subtract", "Temporal.ZonedDateTime.prototype.subtract()")}}
- La propriété {{JSxRef("Temporal/PlainTime/hour", "Temporal.PlainTime.prototype.hour")}}
