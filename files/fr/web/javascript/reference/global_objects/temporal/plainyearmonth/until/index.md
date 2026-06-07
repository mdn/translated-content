---
title: "Temporal.PlainYearMonth : méthode until()"
short-title: until()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainYearMonth/until
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

La méthode **`until()`** des instances de {{JSxRef("Temporal.PlainYearMonth")}} retourne un nouvel objet {{JSxRef("Temporal.Duration")}} représentant la durée entre de ce mois et son année et d'un autre mois et son année (sous une forme convertible par {{JSxRef("Temporal/PlainYearMonth/from", "Temporal.PlainYearMonth.from()")}}). La durée est positive si l'autre mois est après ce mois, et négative si avant.

Cette méthode effectue `other - this`. Pour effectuer `this - other`, utilisez la méthode {{JSxRef("Temporal/PlainYearMonth/since", "since()")}}.

## Syntaxe

```js-nolint
until(other)
until(other, options)
```

### Paramètres

- `other`
  - : Une chaîne de caractères, un objet ou une instance de {{JSxRef("Temporal.PlainYearMonth")}} représentant un mois et une année à soustraire de ce mois et cette année. Il est converti en objet `Temporal.PlainYearMonth` en utilisant le même algorithme que {{JSxRef("Temporal/PlainYearMonth/from", "Temporal.PlainYearMonth.from()")}}. Il doit avoir le même calendrier que `this`.
- `options` {{Optional_Inline}}
  - : Les mêmes options que [`since()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainYearMonth/since#options).

### Valeur de retour

Un nouvel objet {{JSxRef("Temporal.Duration")}} représentant la durée entre ce mois et son année _jusqu'à_ `other`. La durée est positive si `other` est après ce mois et son année, et négative si avant.

### Exceptions

- {{JSxRef("RangeError")}}
  - : Levée dans l'un des cas suivants&nbsp;:
    - `other` utilise un calendrier différent de celui de `this`.
    - Aucune des options n'est valide.

## Exemples

### Utiliser la méthode `until()`

```js
const launch = Temporal.PlainYearMonth.from("2035-01");
const now = Temporal.Now.plainDateISO().toPlainYearMonth();
const duration = now.until(launch);
console.log(
  `Il restera ${duration.toLocaleString("fr-FR")} jusqu'au lancement.`,
);
```

Pour plus d'exemples, voir {{JSxRef("Temporal/PlainYearMonth/since", "since()")}}.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'objet {{JSxRef("Temporal.PlainYearMonth")}}
- L'objet {{JSxRef("Temporal.Duration")}}
- La méthode {{JSxRef("Temporal/PlainYearMonth/add", "Temporal.PlainYearMonth.prototype.add()")}}
- La méthode {{JSxRef("Temporal/PlainYearMonth/subtract", "Temporal.PlainYearMonth.prototype.subtract()")}}
- La méthode {{JSxRef("Temporal/PlainYearMonth/since", "Temporal.PlainYearMonth.prototype.since()")}}
