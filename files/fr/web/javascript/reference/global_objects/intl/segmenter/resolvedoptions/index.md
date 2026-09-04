---
title: "Intl.Segmenter : méthode resolvedOptions()"
short-title: resolvedOptions()
slug: Web/JavaScript/Reference/Global_Objects/Intl/Segmenter/resolvedOptions
l10n:
  sourceCommit: e7bc0ed5466f5834641d75d416fa81886cf6b37e
---

La méthode **`resolvedOptions()`** des instances de {{JSxRef("Intl.Segmenter")}} retourne un nouvel objet dont les propriétés reflètent les options calculées lors de l'initialisation de cet objet `Segmenter`.

{{InteractiveExample("Démonstration JavaScript&nbsp;: Intl.Segmenter.prototype.resolvedOptions()")}}

```js interactive-example
const segmenter = new Intl.Segmenter("fr-FR");
const options = segmenter.resolvedOptions();

console.log(options.locale);
// Résultat attendu : "fr-FR"

console.log(options.granularity);
// Résultat attendu : "grapheme"
```

## Syntaxe

```js-nolint
resolvedOptions()
```

### Paramètres

Aucun.

### Valeur de retour

Un nouvel objet dont les propriétés reflètent les options calculées lors de l'initialisation de cet objet `Segmenter`. L'objet possède les propriétés suivantes, dans l'ordre indiqué&nbsp;:

- `locale`
  - : La {{Glossary("BCP 47 language tag", "balise de langue BCP 47")}} pour la locale effectivement utilisée, déterminée par le processus de [négociation de la locale](/fr/docs/Web/JavaScript/Reference/Global_Objects/Intl#identification_et_négociation_de_locale). Aucune clé d'extension Unicode ne sera incluse dans la sortie.
- `granularity`
  - : La valeur fournie pour cette propriété dans l'argument `options`, avec les valeurs par défaut remplies si nécessaire. Il s'agit soit de `"grapheme"`, `"word"` ou `"sentence"`. La valeur par défaut est `"grapheme"`.

## Exemples

### Utilisation simple

```js
const spanishSegmenter = new Intl.Segmenter("es", { granularity: "sentence" });
const options = spanishSegmenter.resolvedOptions();
console.log(options.locale); // "es"
console.log(options.granularity); // "sentence"
```

### Granularité par défaut

```js
const spanishSegmenter = new Intl.Segmenter("es");
const options = spanishSegmenter.resolvedOptions();
console.log(options.locale); // "es"
console.log(options.granularity); // "grapheme"
```

### Locale de recours locale

```js
const banSegmenter = new Intl.Segmenter("ban");
const options = banSegmenter.resolvedOptions();
console.log(options.locale);
// "fr" sur un environnement d'exécution où la locale
// balinaise n'est pas prise en charge et où le
// français est la locale par défaut
console.log(options.granularity); // "grapheme"
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
