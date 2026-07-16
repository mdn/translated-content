---
title: "Temporal.PlainDateTime : méthode since()"
short-title: since()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainDateTime/since
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

La méthode **`since()`** des instances de {{JSxRef("Temporal.PlainDateTime")}} retourne un nouvel objet {{JSxRef("Temporal.Duration")}} représentant la durée entre une autre date et heure (sous une forme convertible par {{JSxRef("Temporal/PlainDateTime/from", "Temporal.PlainDateTime.from()")}}) et cette date et heure. La durée est positive si l'autre date et heure est avant cette date et heure, et négative si elle est après.

Cette méthode effectue `this - other`. Pour effectuer `other - this`, utilisez la méthode {{JSxRef("Temporal/PlainDateTime/until", "until()")}}.

## Syntaxe

```js-nolint
since(other)
since(other, options)
```

### Paramètres

- `other`
  - : Une chaîne de caractères, un objet ou une instance de {{JSxRef("Temporal.PlainDateTime")}} représentant une date et une heure à soustraire de cette date et heure. Elle est convertie en un objet `Temporal.PlainDateTime` en utilisant le même algorithme que {{JSxRef("Temporal/PlainDateTime/from", "Temporal.PlainDateTime.from()")}}. Elle doit avoir le même calendrier que `this`.
- `options` {{Optional_Inline}}
  - : Un objet contenant les options pour {{JSxRef("Temporal/Duration/round", "Temporal.Duration.prototype.round()")}}, qui inclut `largestUnit`, `roundingIncrement`, `roundingMode` et `smallestUnit`. `largestUnit` et `smallestUnit` acceptent toutes les unités possibles. Pour `largestUnit`, la valeur par défaut `"auto"` signifie `"days"` ou `smallestUnit`, selon la plus grande. Pour `smallestUnit`, la valeur par défaut est `"nanoseconds"`. La date actuelle est utilisée comme option `relativeTo`. Notez que l'utilisation [d'unités supérieures à `"days"`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Duration#durées_calendaires) peut rendre la durée non portable vers d'autres calendriers ou dates.

### Valeur de retour

Un nouvel objet {{JSxRef("Temporal.Duration")}} représentant la durée _depuis_ `other` jusqu'à cette date et heure. La durée est positive si `other` est avant cette date et heure, et négative si elle est après.

### Exceptions

- {{JSxRef("RangeError")}}
  - : Levée dans l'un des cas suivants&nbsp;:
    - `other` a un calendrier différent de `this`.
    - L'une des options est invalide.

## Exemples

### Utiliser la méthode `since()`

```js
let lastBilling = Temporal.PlainDateTime.from({
  year: Temporal.Now.plainDateISO().year,
  month: 4,
  day: 1,
});
const now = Temporal.Now.plainDateTimeISO().round("second");
if (Temporal.PlainDateTime.compare(lastBilling, now) > 0) {
  lastBilling = lastBilling.subtract({ years: 1 });
}
const duration = now.since(lastBilling);
console.log(
  `${duration.toLocaleString("fr-FR")} depuis la dernière facturation`,
);
// Sortie attendue : "[number] jours, [number] heures, [number] minutes, [number] secondes depuis la dernière facturation"

const duration2 = now.since(lastBilling, { smallestUnit: "days" });
console.log(
  `${duration2.toLocaleString("fr-FR")} depuis la dernière facturation`,
);
// Sortie attendue : "[number] jours depuis la dernière facturation"

const duration3 = now.since(lastBilling, {
  largestUnit: "years",
  smallestUnit: "days",
});
console.log(
  `${duration3.toLocaleString("fr-FR")} depuis la dernière facturation`,
);
// Sortie attendue : "[number] mois, [number] jours depuis la dernière facturation"
```

### Arrondir le résultat

Par défaut, la partie fractionnaire de l'`smallestUnit` est tronquée. Vous pouvez l'arrondir en utilisant les options `roundingIncrement` et `roundingMode`.

```js
const dt1 = Temporal.PlainDateTime.from("2022-01-01T00:00:00");
const dt2 = Temporal.PlainDateTime.from("2022-01-28T12:34:56");
const duration = dt2.since(dt1, {
  smallestUnit: "days",
  roundingIncrement: 5,
  roundingMode: "ceil",
});
console.log(duration.toString()); // "P30D"
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'objet {{JSxRef("Temporal.PlainDateTime")}}
- L'objet {{JSxRef("Temporal.Duration")}}
- La méthode {{JSxRef("Temporal/PlainDateTime/add", "Temporal.PlainDateTime.prototype.add()")}}
- La méthode {{JSxRef("Temporal/PlainDateTime/subtract", "Temporal.PlainDateTime.prototype.subtract()")}}
- La méthode {{JSxRef("Temporal/PlainDateTime/until", "Temporal.PlainDateTime.prototype.until()")}}
