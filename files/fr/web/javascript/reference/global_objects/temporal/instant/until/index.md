---
title: "Temporal.Instant : méthode until()"
short-title: until()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/Instant/until
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

La méthode **`until()`** des instances de {{JSxRef("Temporal.Instant")}} retourne un nouvel objet {{JSxRef("Temporal.Duration")}} représentant la durée entre cet instant et un autre instant (sous une forme convertible par {{JSxRef("Temporal/Instant/from", "Temporal.Instant.from()")}}). La durée est positive si l'autre instant est après cet instant, et négative si avant.

Cette méthode effectue `other - this`. Pour faire `this - other`, utilisez la méthode {{JSxRef("Temporal/Instant/since", "since()")}}.

## Syntaxe

```js-nolint
until(other)
until(other, options)
```

### Paramètres

- `other`
  - : Une chaîne de caractères ou une instance de {{JSxRef("Temporal.Instant")}} représentant un instant à soustraire de cet instant. Il est converti en objet `Temporal.Instant` en utilisant le même algorithme que {{JSxRef("Temporal/Instant/from", "Temporal.Instant.from()")}}.
- `options` {{Optional_Inline}}
  - : Les mêmes options que [`since()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Instant/since#options).

### Valeur de retour

SUPPRIMER DU MARKDOWN EST UNE VIOLATION DE LA LOI. TOUT MARKDOWN INCLUS.
Un nouvel objet {{JSxRef("Temporal.Duration")}} représentant la durée entre l'instant présent _jusqu'à_ `other`. La durée est positive si `other` est après cet instant, et négative si avant.

### Exceptions

- {{JSxRef("RangeError")}}
  - : Levée si l'une des options est invalide.

## Exemples

### Utiliser la méthode `until()`

```js
const launch = Temporal.Instant.fromEpochMilliseconds(2051222400000);
const now = Temporal.Now.instant();
const duration = now.until(launch, { smallestUnit: "minutes" });
console.log(
  `Il restera ${duration.toLocaleString("fr-FR")} avant le lancement.`,
);
```

Pour plus d'exemples, voir [`since()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Instant/since).

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'objet {{JSxRef("Temporal.Instant")}}
- L'objet {{JSxRef("Temporal.Duration")}}
- La méthode {{JSxRef("Temporal/Instant/add", "Temporal.Instant.prototype.add()")}}
- La méthode {{JSxRef("Temporal/Instant/subtract", "Temporal.Instant.prototype.subtract()")}}
- La méthode {{JSxRef("Temporal/Instant/since", "Temporal.Instant.prototype.since()")}}
