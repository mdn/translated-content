---
title: "Intl.RelativeTimeFormat : méthode resolvedOptions()"
short-title: resolvedOptions()
slug: Web/JavaScript/Reference/Global_Objects/Intl/RelativeTimeFormat/resolvedOptions
l10n:
  sourceCommit: e7bc0ed5466f5834641d75d416fa81886cf6b37e
---

La méthode **`resolvedOptions()`** des instances de {{JSxRef("Intl.RelativeTimeFormat")}} retourne un nouvel objet dont les propriétés reflètent les options calculées lors de l'initialisation de cet objet `RelativeTimeFormat`.

{{InteractiveExample("Démonstration JavaScript&nbsp;: Intl.RelativeTimeFormat.prototype.resolvedOptions()")}}

```js interactive-example
const rtf1 = new Intl.RelativeTimeFormat("en", { style: "narrow" });
const options1 = rtf1.resolvedOptions();

const rtf2 = new Intl.RelativeTimeFormat("es", { numeric: "auto" });
const options2 = rtf2.resolvedOptions();

console.log(`${options1.locale}, ${options1.style}, ${options1.numeric}`);
// Résultat attendu : "en, narrow, always"

console.log(`${options2.locale}, ${options2.style}, ${options2.numeric}`);
// Résultat attendu : "es, long, auto"
```

## Syntaxe

```js-nolint
resolvedOptions()
```

### Paramètres

Aucun.

### Valeur de retour

Un nouvel objet dont les propriétés reflètent les options calculées lors de l'initialisation de cet objet `RelativeTimeFormat`. L'objet possède les propriétés suivantes, dans l'ordre dans lequel elles sont listées&nbsp;:

- `locale`
  - : La {{Glossary("BCP 47 language tag", "balise de langue BCP 47")}} pour la locale réellement utilisée, déterminée par le processus de [négociation de la locale](/fr/docs/Web/JavaScript/Reference/Global_Objects/Intl#identification_et_négociation_de_locale). Seule la clé d'extension Unicode `nu`, si elle est demandée, peut être incluse dans la sortie.
- `style`
  - : La valeur fournie pour cette propriété dans l'argument `options`, avec les valeurs par défaut remplies si nécessaire. Elle peut être `"long"`, `"short"` ou `"narrow"`. La valeur par défaut est `"long"`.
- `numeric`
  - : La valeur fournie pour cette propriété dans l'argument `options`, avec les valeurs par défaut remplies si nécessaire. Elle peut être `"always"` ou `"auto"`. La valeur par défaut est `"always"`.
- `numberingSystem`
  - : La valeur fournie pour cette propriété dans l'argument `options`, ou en utilisant la clé d'extension Unicode `"nu"`, avec les valeurs par défaut remplies si nécessaire. Il s'agit d'un [système de numération](/fr/docs/Web/JavaScript/Reference/Global_Objects/Intl/supportedValuesOf#types_de_systèmes_de_numération_pris_en_charge) pris en charge pour cette locale. La valeur par défaut dépend de la locale.

## Exemples

### Utiliser la méthode `resolvedOptions()`

```js
const de = new Intl.RelativeTimeFormat("de-DE");
const usedOptions = de.resolvedOptions();

usedOptions.locale; // "de-DE"
usedOptions.style; // "long"
usedOptions.numeric; // "always"
usedOptions.numberingSystem; // "latn"
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'objet {{JSxRef("Intl.RelativeTimeFormat")}}
