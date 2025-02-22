---
title: Intl.Segmenter.prototype.resolvedOptions()
slug: Web/JavaScript/Reference/Global_Objects/Intl/Segmenter/resolvedOptions
---

{{JSRef}}

La méthode **`Intl.Segmenter.prototype.resolvedOptions()`** renvoie un nouvel objet dont les propriétés reflètent la locale et les options de granularité calculées lors de l'initialisation de cet objet [`Intl.Segmenter`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Intl/Segmenter).

{{InteractiveExample("JavaScript Demo: Intl.Segmenter.prototype.resolvedOptions")}}

```js interactive-example
const segmenter1 = new Intl.Segmenter("fr-FR");
const options1 = segmenter1.resolvedOptions();

console.log(options1.locale);
// Expected output: "fr-FR"

console.log(options1.granularity);
// Expected output: "grapheme"
```

## Syntaxe

```js
resolvedOptions();
```

### Paramètres

Aucun.

### Valeur de retour

Un nouvel objet dont les propriétés reflètent les options de locale et granularité calculées lors de l'initialisation de l'objet [`Intl.Segmenter`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Intl/Segmenter) courant.

## Description

L'objet renvoyé par la méthode possède les propriétés suivantes&nbsp;:

- `locale`
  - : La balise de langue BCP 47 pour la locale effectivement utilisée. Si des valeurs d'extension Unicode avaient été incluses dans la balise de langue BCP 47 pour l'initialisation, les paires de clé/valeur ayant été demandées et qui sont prises en charge pour cette locale seront incluses dans `locale`.
- `granularity`
  - : La valeur fournie pour cette propriété avec l'argument `options` ou une valeur par défaut.

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
