---
title: "Temporal.PlainTime : méthode until()"
short-title: until()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainTime/until
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

La méthode **`until()`** des instances de {{JSxRef("Temporal.PlainTime")}} retourne un nouvel objet {{JSxRef("Temporal.Duration")}} représentant la durée entre cette heure et une autre heure (sous une forme convertible par {{JSxRef("Temporal/PlainTime/from", "Temporal.PlainTime.from()")}}). La durée est positive si l'autre heure est après cette heure, et négative si elle est avant.

Cette méthode effectue `other - this`. Pour effectuer `this - other`, utilisez la méthode {{JSxRef("Temporal/PlainTime/since", "since()")}}.

## Syntaxe

```js-nolint
until(other)
until(other, options)
```

### Paramètres

- `other`
  - : Une chaîne de caractères, un objet ou une instance de {{JSxRef("Temporal.PlainTime")}} représentant une heure à soustraire de cette heure. Il est converti en objet `Temporal.PlainTime` en utilisant le même algorithme que {{JSxRef("Temporal/PlainTime/from", "Temporal.PlainTime.from()")}}. Il doit avoir le même calendrier que `this`.
- `options` {{Optional_Inline}}
  - : Les mêmes options que [`since()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainTime/since#options).

### Valeur de retour

Un nouvel objet {{JSxRef("Temporal.Duration")}} représentant la durée entre cette heure et `other`. La durée est positive si `other` est après cette heure, et négative si elle est avant.

### Exceptions

- {{JSxRef("RangeError")}}
  - : Levée si l'une des options est invalide.

## Exemples

### Utiliser la méthode `until()`

```js
const lunchTime = Temporal.PlainTime.from("12:30:00");
const now = Temporal.Now.plainTimeISO();
const duration = now.until(lunchTime);
console.log(`Il restera ${duration.toLocaleString("fr-FR")} avant le déjeuner`);
// Sortie d'exemple : "Il restera -3 h, 7 min, 10 s et 244 ms avant le déjeuner"
```

Pour plus d'exemples, voir la méthode {{JSxRef("Temporal/PlainTime/since", "since()")}}.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'objet {{JSxRef("Temporal.PlainTime")}}
- L'objet {{JSxRef("Temporal.Duration")}}
- La méthode {{JSxRef("Temporal/PlainTime/add", "Temporal.PlainTime.prototype.add()")}}
- La méthode {{JSxRef("Temporal/PlainTime/subtract", "Temporal.PlainTime.prototype.subtract()")}}
- La méthode {{JSxRef("Temporal/PlainTime/since", "Temporal.PlainTime.prototype.since()")}}
