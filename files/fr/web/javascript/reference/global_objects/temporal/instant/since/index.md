---
title: "Temporal.Instant : méthode since()"
short-title: since()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/Instant/since
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

La méthode **`since()`** des instances de {{JSxRef("Temporal.Instant")}} retourne un nouvel objet {{JSxRef("Temporal.Duration")}} représentant la durée depuis un autre instant (sous une forme convertible par {{JSxRef("Temporal/Instant/from", "Temporal.Instant.from()")}}) jusqu'à cet instant. La durée est positive si l'autre instant est avant cet instant, et négative si après.

Cette méthode effectue `this - other`. Pour effectuer `other - this`, utilisez la méthode {{JSxRef("Temporal/Instant/until", "until()")}}.

## Syntaxe

```js-nolint
since(other)
since(other, options)
```

### Paramètres

- `other`
  - : Une chaîne de caractères ou une instance de {{JSxRef("Temporal.Instant")}} représentant un instant à soustraire de cet instant. Il est converti en objet `Temporal.Instant` en utilisant le même algorithme que {{JSxRef("Temporal/Instant/from", "Temporal.Instant.from()")}}.
- `options` {{Optional_Inline}}
  - : Un objet contenant les options pour {{JSxRef("Temporal/Duration/round", "Temporal.Duration.prototype.round()")}}, qui inclut `largestUnit`, `roundingIncrement`, `roundingMode` et `smallestUnit`. `largestUnit` et `smallestUnit` n'acceptent que les unités&nbsp;: `"hours"`, `"minutes"`, `"seconds"`, `"milliseconds"`, `"microseconds"`, `"nanoseconds"`, ou leurs formes singulières. Pour `largestUnit`, la valeur par défaut `"auto"` signifie `"seconds"` ou `smallestUnit`, selon la plus grande. Pour `smallestUnit`, la valeur par défaut est `"nanoseconds"`.

### Valeur de retour

Un nouvel objet {{JSxRef("Temporal.Duration")}} représentant la durée _depuis_ `other` jusqu'à cet instant. La durée est positive si `other` est avant cet instant, et négative si après.

### Exceptions

- {{JSxRef("RangeError")}}
  - : Levée si l'une des options est invalide.

## Exemples

### Utiliser la méthode `since()`

```js
const lastUpdated = Temporal.Instant.fromEpochMilliseconds(1735235418000);
const now = Temporal.Now.instant();
const duration = now.since(lastUpdated, { smallestUnit: "minute" });
console.log(`Dernière mise à jour il y a ${duration.toLocaleString("fr-FR")}`);
```

### Équilibrer la durée résultante

Parce qu'un instant ne contient pas d'informations calendaire, la durée résultante évite les [durées calendaire](/fr/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Duration#durées_calendaires), qui sont ambiguës sans un calendrier et une référence temporelle. Par conséquent, le résultat est [déséquilibré](/fr/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Duration#équilibrage_des_durées) car les `heures` peuvent être supérieures à `24`. Pour équilibrer la durée, [arrondissez](/fr/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Duration/round) à nouveau la durée résultante avec l'unité la plus grande souhaitée, en passant un `relativeTo` qui contient les informations du calendrier.

```js
const lastUpdated = Temporal.Instant.fromEpochMilliseconds(1735235418000);
const now = Temporal.Now.instant();
const duration = now.since(lastUpdated, { smallestUnit: "minutes" });
const roundedDuration = duration.round({
  largestUnit: "years",
  // Utiliser le calendrier ISO ; vous pouvez convertir vers un autre
  // calendrier en utilisant withCalendar()
  relativeTo: now.toZonedDateTimeISO("UTC"),
});
console.log(
  `Dernière mise à jour il y a ${roundedDuration.toLocaleString("fr-FR")}`,
);
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'objet {{JSxRef("Temporal.Instant")}}
- L'objet {{JSxRef("Temporal.Duration")}}
- La méthode {{JSxRef("Temporal/Instant/add", "Temporal.Instant.prototype.add()")}}
- La méthode {{JSxRef("Temporal/Instant/subtract", "Temporal.Instant.prototype.subtract()")}}
- La méthode {{JSxRef("Temporal/Instant/until", "Temporal.Instant.prototype.until()")}}
