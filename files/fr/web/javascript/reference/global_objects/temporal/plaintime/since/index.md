---
title: "Temporal.PlainTime : méthode since()"
short-title: since()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainTime/since
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

La méthode **`since()`** des instances de {{JSxRef("Temporal.PlainTime")}} retourne un nouvel objet {{JSxRef("Temporal.Duration")}} représentant la durée écoulée depuis un autre moment (sous une forme convertible par {{JSxRef("Temporal/PlainTime/from", "Temporal.PlainTime.from()")}}) jusqu'à ce moment. La durée est positive si l'autre moment est avant ce moment, et négative si après.

Cette méthode effectue `this - other`. Pour effectuer `other - this`, utilisez la méthode {{JSxRef("Temporal/PlainTime/until", "until()")}}.

## Syntaxe

```js-nolint
since(other)
since(other, options)
```

### Paramètres

- `other`
  - : Une chaîne de caractères, un objet ou une instance de {{JSxRef("Temporal.PlainTime")}} représentant un moment à soustraire de ce moment. Il est converti en un objet `Temporal.PlainTime` en utilisant le même algorithme que {{JSxRef("Temporal/PlainTime/from", "Temporal.PlainTime.from()")}}.
- `options` {{Optional_Inline}}
  - : Un objet contenant les options pour {{JSxRef("Temporal/Duration/round", "Temporal.Duration.prototype.round()")}}, qui inclut `largestUnit`, `roundingIncrement`, `roundingMode` et `smallestUnit`. `largestUnit` et `smallestUnit` n'acceptent que les unités&nbsp;: `"hours"`, `"minutes"`, `"seconds"`, `"milliseconds"`, `"microseconds"`, `"nanoseconds"`, ou leurs formes singulières. Pour `largestUnit`, la valeur par défaut `"auto"` signifie `"hours"`. Pour `smallestUnit`, la valeur par défaut est `"nanoseconds"`.

### Valeur de retour

Un nouvel objet {{JSxRef("Temporal.Duration")}} représentant la durée _depuis_ `other` jusqu'à ce moment. La durée est positive si `other` est avant ce moment, et négative si après.

### Exceptions

- {{JSxRef("RangeError")}}
  - : Levée si l'une des options est invalide.

## Exemples

### Utiliser la méthode `since()`

```js
const lunchTime = Temporal.PlainTime.from("12:30:00");
const now = Temporal.Now.plainTimeISO();
const duration = now.since(lunchTime);
console.log(`Vous avez déjeuné il y a ${duration.toLocaleString("fr-FR")}`);
// Sortie d'exemple : "Vous avez déjeuné il y a 3 h 42 min 21 s 343 ms 131 μs 718 ns"

const duration2 = now.since(lunchTime, { smallestUnit: "minutes" });
console.log(`Vous avez déjeuné il y a ${duration2.toLocaleString("fr-FR")}`);
// Sortie d'exemple : "Vous avez déjeuné il y a 3 h 42 min"

const duration3 = now.since(lunchTime, {
  largestUnit: "minutes",
  smallestUnit: "minutes",
});
console.log(`Vous avez déjeuné il y a ${duration3.toLocaleString("fr-FR")}`);
// Sortie d'exemple : "Vous avez déjeuné il y a 222 min"
```

### Arrondir le résultat

Par défaut, la partie fractionnaire de `smallestUnit` est tronquée. Vous pouvez l'arrondir en utilisant les options `roundingIncrement` et `roundingMode`.

```js
const time1 = Temporal.PlainTime.from("12:30:00");
const time2 = Temporal.PlainTime.from("12:30:01");
const duration = time2.since(time1, {
  smallestUnit: "seconds",
  roundingIncrement: 15,
  roundingMode: "ceil",
});
console.log(duration.toString()); // "PT15S"
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'objet {{JSxRef("Temporal.PlainTime")}}
- L'objet {{JSxRef("Temporal.Duration")}}
- La méthode {{JSxRef("Temporal/PlainTime/add", "Temporal.PlainTime.prototype.add()")}}
- La méthode {{JSxRef("Temporal/PlainTime/subtract", "Temporal.PlainTime.prototype.subtract()")}}
- La méthode {{JSxRef("Temporal/PlainTime/until", "Temporal.PlainTime.prototype.until()")}}
