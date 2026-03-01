---
title: "Intl.ListFormat : méthode resolvedOptions()"
short-title: resolvedOptions()
slug: Web/JavaScript/Reference/Global_Objects/Intl/ListFormat/resolvedOptions
l10n:
  sourceCommit: e7bc0ed5466f5834641d75d416fa81886cf6b37e
---

La méthode **`resolvedOptions()`** des instances de {{JSxRef("Intl.ListFormat")}} retourne un nouvel objet dont les propriétés reflètent les options calculées lors de l'initialisation de cet objet `ListFormat`.

{{InteractiveExample("Démonstration JavaScript&nbsp;: Intl.ListFormat.prototype.resolvedOptions()")}}

```js interactive-example
const deListFormatter = new Intl.ListFormat("de-DE", { type: "disjunction" });
const options = deListFormatter.resolvedOptions();

console.log(options.locale);
// Résultat attendu : "de-DE"

console.log(options.style);
// Résultat attendu : "long"

console.log(options.type);
// Résultat attendu : "disjunction"
```

## Syntaxe

```js-nolint
resolvedOptions()
```

### Paramètres

Aucun.

### Valeur de retour

Un nouvel objet dont les propriétés reflètent les options calculées lors de l'initialisation de cet objet `ListFormat`. L'objet possède les propriétés suivantes, dans l'ordre indiqué&nbsp;:

- `locale`
  - : La {{Glossary("BCP 47 language tag", "balise BCP 47 language tag")}} réellement utilisée, déterminée par le processus de [négociation de la locale](/fr/docs/Web/JavaScript/Reference/Global_Objects/Intl#identification_et_négociation_de_locale). Aucune clé d'extension Unicode ne sera incluse dans le résultat.
- `type`
  - : La valeur fournie pour cette propriété dans l'argument `options`, avec la valeur par défaut si nécessaire. Elle peut valoir `"conjunction"`, `"disjunction"` ou `"unit"`. La valeur par défaut est `"conjunction"`.
- `style`
  - : La valeur fournie pour cette propriété dans l'argument `options`, avec la valeur par défaut si nécessaire. Elle peut valoir `"long"`, `"short"` ou `"narrow"`. La valeur par défaut est `"long"`.

## Exemples

```js
const deListFormatter = new Intl.ListFormat("de-DE", { style: "short" });

const usedOptions = de.resolvedOptions();
console.log(usedOptions.locale); // "de-DE"
console.log(usedOptions.style); // "short"
console.log(usedOptions.type); // "conjunction" (la valeur par défaut)
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'objet {{JSxRef("Intl.ListFormat")}}
- La méthode {{JSxRef("Intl/NumberFormat/resolvedOptions", "Intl.NumberFormat.prototype.resolvedOptions()")}}
- La méthode {{JSxRef("Intl/Collator/resolvedOptions", "Intl.Collator.prototype.resolvedOptions()")}}
- La méthode {{JSxRef("Intl/DateTimeFormat/resolvedOptions", "Intl.DateTimeFormat.prototype.resolvedOptions()")}}
- La méthode {{JSxRef("Intl/PluralRules/resolvedOptions", "Intl.PluralRules.prototype.resolvedOptions()")}}
