---
title: "Intl.Collator : méthode resolvedOptions()"
short-title: resolvedOptions()
slug: Web/JavaScript/Reference/Global_Objects/Intl/Collator/resolvedOptions
l10n:
  sourceCommit: e7bc0ed5466f5834641d75d416fa81886cf6b37e
---

La méthode **`resolvedOptions()`** des instances de {{JSxRef("Intl.Collator")}} retourne un nouvel objet dont les propriétés reflètent les options calculées lors de l'initialisation de cet objet de comparaison.

{{InteractiveExample("Démonstration JavaScript&nbsp;: Intl.Collator.prototype.resolvedOptions()")}}

```js interactive-example
const numberDe = new Intl.NumberFormat("de-DE");
const numberAr = new Intl.NumberFormat("ar");

console.log(numberDe.resolvedOptions().numberingSystem);
// Résultat attendu : "latn"

console.log(numberAr.resolvedOptions().numberingSystem);
// Résultat attendu : "arab"
```

## Syntaxe

```js-nolint
resolvedOptions()
```

### Paramètres

Aucun.

### Valeur de retour

Un nouvel objet dont les propriétés reflètent les options calculées lors de l'initialisation de cet objet `Collator`. L'objet possède les propriétés suivantes, dans l'ordre indiqué&nbsp;:

- `locale`
  - : {{Glossary("BCP 47 language tag", "L'étiquette de langue BCP 47")}} réellement utilisée, déterminée par le processus de [négociation de la locale](/fr/docs/Web/JavaScript/Reference/Global_Objects/Intl#identification_et_négociation_de_locale). Seules les clés d'extension Unicode `co`, `kn` et `kf`, si elles sont demandées et prises en charge, peuvent être incluses dans le résultat.
- `usage`
  - : La valeur fournie pour cette propriété dans l'argument `options`, ou la valeur par défaut si nécessaire. Elle vaut soit `"sort"`, soit `"search"`. La valeur par défaut est `"sort"`.
- `sensitivity`
  - : La valeur fournie pour cette propriété dans l'argument `options`, ou la valeur par défaut si nécessaire. Elle vaut soit `"base"`, `"accent"`, `"case"` ou `"variant"`. La valeur par défaut est `"variant"` pour l'usage `"sort"`&nbsp;; elle dépend de la locale pour l'usage `"search"`.
- `ignorePunctuation`
  - : La valeur fournie pour cette propriété dans l'argument `options`, ou la valeur par défaut si nécessaire. Il s'agit d'un booléen. La valeur par défaut est `true` pour le thaï (`th`) et `false` pour toutes les autres langues.
- `collation`
  - : La valeur fournie pour cette propriété dans l'argument `options`, ou via la clé d'extension Unicode `"co"`, ou la valeur par défaut si nécessaire. Il s'agit d'un [type de collation](/fr/docs/Web/JavaScript/Reference/Global_Objects/Intl/supportedValuesOf#types_de_collation_pris_en_charge) pris en charge pour cette locale. La valeur par défaut est `"default"`.
- `numeric`
  - : La valeur fournie pour cette propriété dans l'argument `options`, ou via la clé d'extension Unicode `"kn"`, ou la valeur par défaut si nécessaire. Il s'agit d'un booléen. La valeur par défaut est `false`. Si l'implémentation ne prend pas en charge cette clé d'extension Unicode, cette propriété est omise.
- `caseFirst`
  - : La valeur fournie pour cette propriété dans l'argument `options`, ou via la clé d'extension Unicode `"kf"`, ou la valeur par défaut si nécessaire. Elle vaut soit `"upper"`, `"lower"` ou `"false"`. La valeur par défaut est `"false"`. Si l'implémentation ne prend pas en charge cette clé d'extension Unicode, cette propriété est omise.

## Exemples

```js
const de = new Intl.Collator("de", { sensitivity: "base" });
const usedOptions = de.resolvedOptions();

usedOptions.locale; // "de"
usedOptions.usage; // "sort"
usedOptions.sensitivity; // "base"
usedOptions.ignorePunctuation; // false
usedOptions.collation; // "default"
usedOptions.numeric; // false
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'objet {{JSxRef("Intl.Collator")}}
