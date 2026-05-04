---
title: "Temporal.PlainDate : méthode since()"
short-title: since()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainDate/since
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

La méthode **`since()`** des instances de {{JSxRef("Temporal.PlainDate")}} retourne un nouvel objet {{JSxRef("Temporal.Duration")}} représentant la durée entre une autre date (sous une forme convertible par {{JSxRef("Temporal/PlainDate/from", "Temporal.PlainDate.from()")}}) et cette date. La durée est positive si l'autre date est avant cette date, et négative si elle est après.

Cette méthode effectue `this - other`. Pour effectuer `other - this`, utilisez la méthode {{JSxRef("Temporal/PlainDate/until", "until()")}}.

## Syntaxe

```js-nolint
since(other)
since(other, options)
```

### Paramètres

- `other`
  - : Une chaîne de caractères, un objet ou une instance de {{JSxRef("Temporal.PlainDate")}} représentant une date à soustraire de cette date. Elle est convertie en un objet `Temporal.PlainDate` en utilisant le même algorithme que {{JSxRef("Temporal/PlainDate/from", "Temporal.PlainDate.from()")}}. Elle doit avoir le même calendrier que `this`.
- `options` {{Optional_Inline}}
  - : Un objet contenant les options pour {{JSxRef("Temporal/Duration/round", "Temporal.Duration.prototype.round()")}}, qui inclut `largestUnit`, `roundingIncrement`, `roundingMode` et `smallestUnit`. `largestUnit` et `smallestUnit` n'acceptent que les unités&nbsp;: `"years"`, `"months"`, `"weeks"`, `"days"`, ou leurs formes singulières. Pour `largestUnit`, la valeur par défaut `"auto"` signifie `"days"` ou `smallestUnit`, selon la plus grande. Pour `smallestUnit`, la valeur par défaut est `"days"`. La date actuelle est utilisée comme option `relativeTo`. Notez que l'utilisation [d'unités supérieures à `"days"`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Duration#calendar_durations) peut rendre la durée non portable vers d'autres calendriers ou dates.

### Valeur de retour

Un nouvel objet {{JSxRef("Temporal.Duration")}} représentant la durée _depuis_ `other` jusqu'à cette date. La durée est positive si `other` est avant cette date, et négative si elle est après.

### Exceptions

- {{JSxRef("RangeError")}}
  - : Levée dans l'un des cas suivants&nbsp;:
    - `other` a un calendrier différent de `this`.
    - L'une des options est invalide.

## Exemples

### Utiliser la méthode `since()`

```js
const date = Temporal.PlainDate.from("2022-12-25");
const now = Temporal.Now.plainDateISO();
const duration = now.since(date);
const formatter = new Intl.DurationFormat("en-US", { style: "long" });
console.log(`Cela fait ${formatter.format(duration)} depuis ce Noël...`);
// Sortie attendue : "Cela fait [number] jours depuis ce Noël..."

const duration2 = now.since(date, { smallestUnit: "months" });
console.log(`Cela fait ${formatter.format(duration2)} depuis ce Noël...`);
// Sortie attendue : "Cela fait [number] mois depuis ce Noël..."

const duration3 = now.since(date, {
  largestUnit: "years",
  smallestUnit: "months",
});
console.log(`Cela fait ${formatter.format(duration3)} depuis ce Noël...`);
// Sortie attendue : "Cela fait [number] années, [number] mois depuis ce Noël..."
```

### Arrondir le résultat

Par défaut, la partie fractionnaire de `smallestUnit` est tronquée. Vous pouvez l'arrondir en utilisant les options `roundingIncrement` et `roundingMode`.

```js
const date1 = Temporal.PlainDate.from("2022-01-01");
const date2 = Temporal.PlainDate.from("2022-01-28");
const duration = date2.since(date1, {
  smallestUnit: "days",
  roundingIncrement: 5,
  roundingMode: "ceil",
});
console.log(duration.toString()); // "P30D"
```

### Comparer différents calendriers

Par défaut, les deux dates doivent avoir le même calendrier. Cela permet d'éviter toute ambiguïté dans la signification des mois et des années. Si vous souhaitez comparer des dates provenant de calendriers différents, vous pouvez d'abord les convertir dans le même calendrier.

```js
const date1 = Temporal.PlainDate.from("2022-01-01");
const date2 = Temporal.PlainDate.from("2022-01-28[u-ca=chinese]");
const duration = date2.withCalendar("iso8601").since(date1);
console.log(duration.toString()); // "P27D"
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'objet {{JSxRef("Temporal.PlainDate")}}
- L'objet {{JSxRef("Temporal.Duration")}}
- La méthode {{JSxRef("Temporal/PlainDate/add", "Temporal.PlainDate.prototype.add()")}}
- La méthode {{JSxRef("Temporal/PlainDate/subtract", "Temporal.PlainDate.prototype.subtract()")}}
- La méthode {{JSxRef("Temporal/PlainDate/until", "Temporal.PlainDate.prototype.until()")}}
