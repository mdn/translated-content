---
title: "Temporal.ZonedDateTime : méthode since()"
short-title: since()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime/since
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

La méthode **`since()`** des instances de {{JSxRef("Temporal.ZonedDateTime")}} retourne un nouvel objet {{JSxRef("Temporal.Duration")}} représentant la durée depuis une autre date et heure (sous une forme convertible par {{JSxRef("Temporal/ZonedDateTime/from", "Temporal.ZonedDateTime.from()")}}) jusqu'à cette date et heure. La durée est positive si l'autre date et heure est antérieure à celle-ci, et négative si elle est postérieure.

Cette méthode effectue `this - other`. Pour faire `other - this`, utilisez la méthode {{JSxRef("Temporal/ZonedDateTime/until", "until()")}}.

## Syntaxe

```js-nolint
since(other)
since(other, options)
```

### Paramètres

- `other`
  - : Une chaîne de caractères, un objet ou une instance de {{JSxRef("Temporal.ZonedDateTime")}} représentant une date et heure à soustraire de cette date et heure. Elle est convertie en objet `Temporal.ZonedDateTime` en utilisant le même algorithme que {{JSxRef("Temporal/ZonedDateTime/from", "Temporal.ZonedDateTime.from()")}}. Elle doit avoir le même calendrier que `this`.
- `options` {{Optional_Inline}}
  - : Un objet contenant les options pour {{JSxRef("Temporal/Duration/round", "Temporal.Duration.prototype.round()")}}, qui inclut `largestUnit`, `roundingIncrement`, `roundingMode` et `smallestUnit`. `largestUnit` et `smallestUnit` acceptent toutes les unités possibles. Pour `largestUnit`, la valeur par défaut `"auto"` signifie `"hours"` ou `smallestUnit`, selon la plus grande. Pour `smallestUnit`, la valeur par défaut est `"nanoseconds"`. La date courante est utilisée comme option `relativeTo`. Notez que l'utilisation [d'unités supérieures à `"hours"`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Duration#durées_calendaires) peut rendre la durée non portable vers d'autres calendriers, dates ou fuseaux horaires.

### Valeur de retour

Un nouvel objet {{JSxRef("Temporal.Duration")}} représentant la durée _depuis_ `other` jusqu'à cette date et heure. La durée est positive si `other` est antérieure à cette date et heure, et négative si elle est postérieure.

### Exceptions

- {{JSxRef("RangeError")}}
  - : Levée dans l'un des cas suivants&nbsp;:
    - `other` a un calendrier différent de `this`.
    - L'une des options est invalide.
    - `other` a un fuseau horaire différent de `this` et `largestUnit` vaut `"days"` ou plus.

## Description

La durée retournée est une durée «&nbsp;hybride&nbsp;». Cela signifie que la partie date de la durée représente des jours calendaires complets comme le retournerait {{JSxRef("Temporal/PlainDateTime/since", "Temporal.PlainDateTime.prototype.since()")}}, tandis que la partie temps représente le temps réel écoulé comme le retournerait {{JSxRef("Temporal/Instant/since", "Temporal.Instant.prototype.since()")}}. Cette approche de «&nbsp;durée hybride&nbsp;» s'ajuste automatiquement pour l'heure d'été et correspond aux standards largement adoptés dans l'industrie comme [RFC 5545 (iCalendar) <sup>(angl.)</sup>](https://datatracker.ietf.org/doc/html/rfc5545). Voir ci-dessous pour des exemples.

## Exemples

### Transitions de décalage

Lorsque des transitions se produisent, une journée peut ne pas avoir exactement 24 heures.

```js
const start = Temporal.ZonedDateTime.from(
  "2024-11-03T01:00:00-04:00[America/New_York]",
);
const end = Temporal.ZonedDateTime.from(
  "2024-11-04T01:00:00-05:00[America/New_York]",
);
console.log(end.since(start).toString()); // PT25H
console.log(end.since(start, { largestUnit: "days" }).toString()); // PT1D

const start2 = Temporal.ZonedDateTime.from(
  "2024-03-10T01:00:00-05:00[America/New_York]",
);
const end2 = Temporal.ZonedDateTime.from(
  "2024-03-11T01:00:00-04:00[America/New_York]",
);
console.log(end2.since(start2).toString()); // PT23H
console.log(end2.since(start2, { largestUnit: "days" }).toString()); // PT1D
```

Pour cette raison, la durée retournée est purement basée sur le temps sans partie date par défaut, afin de rester non ambiguë.

### Différents fuseaux horaires

La partie temps de la durée retournée est purement basée sur les instants et n'est pas affectée par les fuseaux horaires. Cependant, si vous souhaitez inclure des unités de date comme `day`, alors le début et la fin doivent être dans le même fuseau horaire.

```js
const start = Temporal.ZonedDateTime.from(
  "2024-11-03T01:00:00-04:00[America/New_York]",
);
// Le Pérou n'utilise pas l'heure d'été, donc son décalage reste à -05:00 toute l'année
const end = Temporal.ZonedDateTime.from(
  "2024-11-04T01:00:00-05:00[America/Lima]",
);

end.since(start); // PT25H
end.since(start, { largestUnit: "days" }); // RangeError: time zones "America/Lima" and "America/New_York" aren't compatible

end.withTimeZone("America/New_York").since(start, { largestUnit: "days" }); // P1D
end.since(start.withTimeZone("America/Lima"), { largestUnit: "days" }); // P1D1H
```

Pour plus d'exemples sur l'utilisation de `since()`, en particulier avec l'arrondi, voir {{JSxRef("Temporal/PlainDate/since", "Temporal.PlainDate.prototype.since()")}} et {{JSxRef("Temporal/PlainTime/since", "Temporal.PlainTime.prototype.since()")}}.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'objet {{JSxRef("Temporal.ZonedDateTime")}}
- L'objet {{JSxRef("Temporal.Duration")}}
- La méthode {{JSxRef("Temporal/ZonedDateTime/add", "Temporal.ZonedDateTime.prototype.add()")}}
- La méthode {{JSxRef("Temporal/ZonedDateTime/subtract", "Temporal.ZonedDateTime.prototype.subtract()")}}
- La méthode {{JSxRef("Temporal/ZonedDateTime/until", "Temporal.ZonedDateTime.prototype.until()")}}
