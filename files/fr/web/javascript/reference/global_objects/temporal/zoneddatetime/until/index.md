---
title: "Temporal.ZonedDateTime : méthode until()"
short-title: until()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime/until
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

La méthode **`until()`** des instances de {{JSxRef("Temporal.ZonedDateTime")}} retourne un nouvel objet {{JSxRef("Temporal.Duration")}} représentant la durée entre cette date et heure et une autre date et heure (sous une forme convertible par {{JSxRef("Temporal/ZonedDateTime/from", "Temporal.ZonedDateTime.from()")}}). La durée est positive si l'autre date et heure est après cette date et heure, et négative si elle est avant.

Cette méthode fait `other - this`. Pour faire `this - other`, utilisez la méthode {{JSxRef("Temporal/ZonedDateTime/since", "since()")}}.

## Syntaxe

```js-nolint
until(other)
until(other, options)
```

### Paramètres

- `other`
  - : Une chaîne de caractères, un objet ou une instance de {{JSxRef("Temporal.ZonedDateTime")}} représentant une date et heure à soustraire de cette date et heure. Il est converti en objet `Temporal.ZonedDateTime` en utilisant le même algorithme que {{JSxRef("Temporal/ZonedDateTime/from", "Temporal.ZonedDateTime.from()")}}. Il doit avoir le même calendrier que `this`.
- `options` {{Optional_Inline}}
  - : Les mêmes options que [`since()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime/since#options).

### Valeur de retour

Un nouvel objet {{JSxRef("Temporal.Duration")}} représentant la durée entre cette date et heure et `other`. La durée est positive si `other` est après cette date et heure, et négative si elle est avant.

### Exceptions

- {{JSxRef("RangeError")}}
  - : Levée dans l'un des cas suivants&nbsp;:
    - `other` a un calendrier différent de `this`.
    - L'une des options est invalide.
    - `other` a un fuseau horaire différent de `this`, et `largestUnit` est `"days"` ou plus.

## Exemples

### Utiliser la méthode `until()`

```js
const flight = Temporal.ZonedDateTime.from(
  "2024-12-21T13:31:00-05:00[America/New_York]",
);
const now = Temporal.Now.zonedDateTimeISO("America/New_York").round("second");
if (Temporal.ZonedDateTime.compare(flight, now) < 0) {
  console.error(
    "Le vol est déjà passé. Le résultat peut ne pas avoir de sens.",
  );
}
const duration = now.until(flight, { largestUnit: "days" });
console.log(`Le vol est dans ${duration.toLocaleString("fr-FR")}`);
```

Pour plus d'exemples, voir [`since()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime/since).

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'objet natif {{JSxRef("Temporal.ZonedDateTime")}}
- L'objet natif {{JSxRef("Temporal.Duration")}}
- La méthode {{JSxRef("Temporal/ZonedDateTime/add", "Temporal.ZonedDateTime.prototype.add()")}}
- La méthode {{JSxRef("Temporal/ZonedDateTime/subtract", "Temporal.ZonedDateTime.prototype.subtract()")}}
- La méthode {{JSxRef("Temporal/ZonedDateTime/since", "Temporal.ZonedDateTime.prototype.since()")}}
