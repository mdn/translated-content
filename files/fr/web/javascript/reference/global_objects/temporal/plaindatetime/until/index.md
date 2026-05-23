---
title: "Temporal.PlainDateTime : méthode until()"
short-title: until()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainDateTime/until
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

La méthode **`until()`** des instances de {{JSxRef("Temporal.PlainDateTime")}} retourne un nouvel objet {{JSxRef("Temporal.Duration")}} représentant la durée entre cette date et heure et une autre date et heure (sous une forme convertible par {{JSxRef("Temporal/PlainDateTime/from", "Temporal.PlainDateTime.from()")}}). La durée est positive si l'autre date et heure est après cette date et heure, et négative si elle est avant.

Cette méthode effectue `other - this`. Pour effectuer `this - other`, utilisez la méthode {{JSxRef("Temporal/PlainDateTime/since", "since()")}}.

## Syntaxe

```js-nolint
until(other)
until(other, options)
```

### Paramètres

- `other`
  - : Une chaîne de caractères, un objet, ou une instance de {{JSxRef("Temporal.PlainDateTime")}} représentant une date et heure dont soustraire cette date et heure. Il est converti en un objet `Temporal.PlainDateTime` en utilisant le même algorithme que {{JSxRef("Temporal/PlainDateTime/from", "Temporal.PlainDateTime.from()")}}. Il doit avoir le même calendrier que `this`.
- `options` {{Optional_Inline}}
  - : Les mêmes options que [`since()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainDateTime/since#options).

### Valeur de retour

Un nouvel objet {{JSxRef("Temporal.Duration")}} représentant la durée de cette date et heure _jusqu'à_ `other`. La durée est positive si `other` est après cette date et heure, et négative si elle est avant.

### Exceptions

- {{JSxRef("RangeError")}}
  - : Levée dans l'un des cas suivants&nbsp;:
    - `other` a un calendrier différent de `this`.
    - Une des options est invalide.

## Exemples

### Utiliser la méthode `until()`

```js
let nextBilling = Temporal.PlainDateTime.from({
  year: Temporal.Now.plainDateISO().year,
  month: 4,
  day: 1,
});
const now = Temporal.Now.plainDateTimeISO().round("second");
if (Temporal.PlainDateTime.compare(nextBilling, now) < 0) {
  nextBilling = nextBilling.add({ years: 1 });
}
const duration = now.until(nextBilling);
console.log(
  `${duration.toLocaleString("fr-FR")} jusqu'à la prochaine facturation`,
);
```

Pour plus d'exemples, voir [`since()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainDateTime/since).

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{JSxRef("Temporal.PlainDateTime")}}
- {{JSxRef("Temporal.Duration")}}
- {{JSxRef("Temporal/PlainDateTime/add", "Temporal.PlainDateTime.prototype.add()")}}
- {{JSxRef("Temporal/PlainDateTime/subtract", "Temporal.PlainDateTime.prototype.subtract()")}}
- {{JSxRef("Temporal/PlainDateTime/since", "Temporal.PlainDateTime.prototype.since()")}}
