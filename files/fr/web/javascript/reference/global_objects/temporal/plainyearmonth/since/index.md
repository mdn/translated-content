---
title: "Temporal.PlainYearMonth : méthode since()"
short-title: since()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainYearMonth/since
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

La méthode **`since()`** des instances de {{JSxRef("Temporal.PlainYearMonth")}} retourne un nouvel objet {{JSxRef("Temporal.Duration")}} représentant la durée entre une autre valeur de mois et son année (sous une forme convertible par {{JSxRef("Temporal/PlainYearMonth/from", "Temporal.PlainYearMonth.from()")}}) et ce mois avec son année. La durée est positive si l'autre mois est avant ce mois, et négative s'il est après.

Cette méthode effectue `this - other`. Pour effectuer `other - this`, utilisez la méthode {{JSxRef("Temporal/PlainYearMonth/until", "until()")}}.

## Syntaxe

```js-nolint
since(other)
since(other, options)
```

### Paramètres

- `other`
  - : Une chaîne de caractères, un objet ou une instance de {{JSxRef("Temporal.PlainYearMonth")}} représentant le mois et l'année à soustraire de ce mois et son année. Il est converti en un objet `Temporal.PlainYearMonth` en utilisant le même algorithme que {{JSxRef("Temporal/PlainYearMonth/from", "Temporal.PlainYearMonth.from()")}}. Il doit avoir le même calendrier que `this`.
- `options` {{Optional_Inline}}
  - : Un objet contenant les options pour {{JSxRef("Temporal/Duration/round", "Temporal.Duration.prototype.round()")}}, qui inclut `largestUnit`, `roundingIncrement`, `roundingMode` et `smallestUnit`. `largestUnit` et `smallestUnit` n'acceptent que les unités&nbsp;: `"years"`, `"months"`, ou leurs formes singulières. Pour `largestUnit`, la valeur par défaut `"auto"` signifie `"years"`. Pour `smallestUnit`, la valeur par défaut est `"months"`. La date actuelle est utilisée comme option `relativeTo`.

### Valeur de retour

Un nouvel objet {{JSxRef("Temporal.Duration")}} représentant la durée _depuis_ `other` jusqu'à ce mois et cette année. La durée est positive si `other` est avant ce mois et cette année, et négative si après.

### Exceptions

- {{JSxRef("RangeError")}}
  - : Levée dans l'un des cas suivants&nbsp;:
    - `other` a un calendrier différent de `this`.
    - L'une des options est invalide.

## Exemples

### Utiliser la méthode `since()`

```js
const lastUpdated = Temporal.PlainYearMonth.from("2022-01");
const now = Temporal.Now.plainDateISO().toPlainYearMonth();
const duration = now.since(lastUpdated);
console.log(`Dernière mise à jour il y a ${duration.toLocaleString("en-US")}`);
// Sortie attendue : "Dernière mise à jour il y a [number] années, [number] mois"

const duration2 = now.since(lastUpdated, { largestUnit: "months" });
console.log(`Dernière mise à jour il y a ${duration2.toLocaleString("en-US")}`);
// Sortie attendue : "Dernière mise à jour il y a [number] mois"

const duration3 = now.since(lastUpdated, { smallestUnit: "years" });
console.log(`Dernière mise à jour il y a ${duration3.toLocaleString("en-US")}`);
// Sortie attendue : "Dernière mise à jour il y a [number] années"
```

### Arrondir le résultat

Par défaut, la partie fractionnaire de `smallestUnit` est tronquée. Vous pouvez l'arrondir en utilisant les options `roundingIncrement` et `roundingMode`.

```js
const ym1 = Temporal.PlainYearMonth.from("2022-01");
const ym2 = Temporal.PlainYearMonth.from("2022-11");
const duration = ym2.since(ym1, {
  smallestUnit: "years",
  roundingMode: "ceil",
});
console.log(duration.toString()); // "P1Y"
```

### Obtenir le résultat en jours

Par défaut, la durée résultante ne contient jamais de jours, car `PlainYearMonth` n'offre pas de précision au niveau des jours. Vous pouvez obtenir le résultat en jours en le convertissant d'abord en un {{JSxRef("Temporal.PlainDate")}} avec un jour qui n'est pas ambigu.

```js
const ym1 = Temporal.PlainYearMonth.from("2022-01");
const ym2 = Temporal.PlainYearMonth.from("2022-11");
const duration = ym2.toPlainDate({ day: 1 }).since(ym1.toPlainDate({ day: 1 }));
console.log(duration.toString()); // "P304D"
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'objet {{JSxRef("Temporal.PlainYearMonth")}}
- L'objet {{JSxRef("Temporal.Duration")}}
- La méthode {{JSxRef("Temporal/PlainYearMonth/add", "Temporal.PlainYearMonth.prototype.add()")}}
- La méthode {{JSxRef("Temporal/PlainYearMonth/subtract", "Temporal.PlainYearMonth.prototype.subtract()")}}
- La méthode {{JSxRef("Temporal/PlainYearMonth/until", "Temporal.PlainYearMonth.prototype.until()")}}
