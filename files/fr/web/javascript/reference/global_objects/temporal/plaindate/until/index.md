---
title: "Temporal.PlainDate : méthode until()"
short-title: until()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainDate/until
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

La méthode **`until()`** des instances de {{JSxRef("Temporal.PlainDate")}} retourne un nouvel objet {{JSxRef("Temporal.Duration")}} représentant la durée entre cette date et une autre date (sous une forme convertible par {{JSxRef("Temporal/PlainDate/from", "Temporal.PlainDate.from()")}}). La durée est positive si l'autre date est après cette date, et négative si elle est avant.

Cette méthode effectue `other - this`. Pour effectuer `this - other`, utilisez la méthode {{JSxRef("Temporal/PlainDate/since", "since()")}}.

## Syntaxe

```js-nolint
until(other)
until(other, options)
```

### Paramètres

- `other`
  - : Une chaîne de caractères, un objet ou une instance de {{JSxRef("Temporal.PlainDate")}} représentant une date à soustraire de cette date. Elle est convertie en un objet `Temporal.PlainDate` en utilisant le même algorithme que {{JSxRef("Temporal/PlainDate/from", "Temporal.PlainDate.from()")}}. Elle doit avoir le même calendrier que `this`.
- `options` {{Optional_Inline}}
  - : Les mêmes options que [`since()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainDate/since#options).

### Valeur de retour

Un nouvel objet {{JSxRef("Temporal.Duration")}} représentant la durée entre cette date et `other`. La durée est positive si `other` est après cette date, et négative si elle est avant.

### Exceptions

- {{JSxRef("RangeError")}}
  - : Levée dans l'un des cas suivants&nbsp;:
    - `other` a un calendrier différent de `this`.
    - L'une des options est invalide.

## Exemples

### Utiliser la méthode `until()`

```js
const launch = Temporal.PlainDate.from("2035-01-01");
const now = Temporal.Now.plainDateISO();
const duration = now.until(launch);
console.log(`Il reste ${duration.toLocaleString("fr-FR")} avant le lancement`);
```

Pour plus d'exemples, voir [`since()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainDate/since).

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'objet {{JSxRef("Temporal.PlainDate")}}
- L'objet {{JSxRef("Temporal.Duration")}}
- La méthode {{JSxRef("Temporal/PlainDate/add", "Temporal.PlainDate.prototype.add()")}}
- La méthode {{JSxRef("Temporal/PlainDate/subtract", "Temporal.PlainDate.prototype.subtract()")}}
- La méthode {{JSxRef("Temporal/PlainDate/since", "Temporal.PlainDate.prototype.since()")}}
