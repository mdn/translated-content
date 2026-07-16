---
title: "Intl.DisplayNames : méthode resolvedOptions()"
short-title: resolvedOptions()
slug: Web/JavaScript/Reference/Global_Objects/Intl/DisplayNames/resolvedOptions
l10n:
  sourceCommit: e7bc0ed5466f5834641d75d416fa81886cf6b37e
---

La méthode **`resolvedOptions()`** des instances de {{JSxRef("Intl.DisplayNames")}} retourne un nouvel objet contenant des propriétés qui reflètent les options calculées lors de l'initialisation de cet objet `DisplayNames`.

## Syntaxe

```js-nolint
resolvedOptions()
```

### Paramètres

Aucun.

### Valeur de retour

Un nouvel objet contenant des propriétés qui reflètent les options calculées lors de l'initialisation de cet objet `DisplayNames`. L'objet possède les propriétés suivantes, dans l'ordre où elles sont listées&nbsp;:

- `locale`
  - : La {{Glossary("BCP 47 language tag", "balise de langue BCP 47")}} pour la locale effectivement utilisée, déterminée par le processus [Identification et négociation de la locale](/fr/docs/Web/JavaScript/Reference/Global_Objects/Intl#identification_et_négociation_de_locale). Aucune clé d'extension Unicode n'est incluse dans la sortie.
- `style`
  - : La valeur fournie pour cette propriété dans l'argument `options`, avec la valeur par défaut remplie si nécessaire. Elle peut être soit `"narrow"`, `"short"` ou `"long"`. La valeur par défaut est `"long"`.
- `type`
  - : La valeur fournie pour cette propriété dans l'argument `options`. Elle peut être soit `"language"`, `"region"`, `"script"`, `"currency"`, `"calendar"` ou `"dateTimeField"`. Elle est requise, donc il n'y a pas de valeur par défaut.
- `fallback`
  - : La valeur fournie pour cette propriété dans l'argument `options`. Elle peut être soit `"code"` ou `"none"`. La valeur par défaut est `"code"`.
- `languageDisplay`
  - : La valeur fournie pour cette propriété dans l'argument `options`. Elle peut être soit `"dialect"` ou `"standard"`. La valeur par défaut est `"dialect"`.

## Exemples

### Utiliser la méthode `resolvedOptions()`

```js
const displayNames = new Intl.DisplayNames(["de-DE"], { type: "region" });

const usedOptions = displayNames.resolvedOptions();
console.log(usedOptions.locale); // "de-DE"
console.log(usedOptions.style); // "long"
console.log(usedOptions.type); // "region"
console.log(usedOptions.fallback); // "code"
```

```js
const displayNames = new Intl.DisplayNames("en", {
  type: "language",
  languageDisplay: "standard",
});

const usedOptions = displayNames.resolvedOptions();
console.log(usedOptions.type); // "language"
console.log(usedOptions.languageDisplay); // "standard"
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'objet {{JSxRef("Intl.DisplayNames")}}
