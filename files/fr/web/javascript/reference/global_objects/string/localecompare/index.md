---
title: String.prototype.localeCompare()
slug: Web/JavaScript/Reference/Global_Objects/String/localeCompare
translation_of: Web/JavaScript/Reference/Global_Objects/String/localeCompare
original_slug: Web/JavaScript/Reference/Objets_globaux/String/localeCompare
browser-compat: javascript.builtins.String.localeCompare
---
{{JSRef}}

La méthode **`localeCompare()`** renvoie un nombre indiquant si la chaîne de caractères courante se situe avant, après ou est la même que la chaîne passée en paramètre, selon l'ordre lexicographique de la locale.

{{EmbedInteractiveExample("pages/js/string-localecompare.html")}}

Les arguments `locales` et `options` permettent de définir la locale et des options pour adapter le comportement de la fonction. Pour les anciennes implémentations qui ignorent les arguments `locales` et `options`, l'ordre de tri utilisé sera entièrement dépendant de l'implémentation.

## Syntaxe

```js
localeCompare(chaineAComparer)
localeCompare(chaineAComparer, locales)
localeCompare(chaineAComparer, locales, options)
```

### Paramètres

- `chaineAComparer`
  - : La chaîne avec laquelle on souhaite comparer la chaîne de caractères courante.

- `locales` et `options`

  - : Ces arguments permettent d'adapter le comportement de la fonction pour que les applications puissent indiquer la locale dont les conventions doivent être utilisées. Pour les implémentations qui ignorent les arguments `locales` et `options`, la locale et le format de la chaîne qui est renvoyée dépendent entièrement de l'implémentation.

    Voir [la page du constructeur `Intl.Collator()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Collator/Collator) pour plus de détails sur ces paramètres et leur utilisation.

### Valeur de retour

Un nombre négatif si la chaîne de caractères appelante est ordonnée avant la chaîne passée en argument, un nombre positif si elle se situe après, 0 si les deux chaînes sont équivalentes.

## Description

Cette méthode renvoie un nombre entier qui indique si la chaîne de caractères courante se situe avant ou après la chaîne passée en argument selon l'ordre lexicographique tenant compte de la locale.

Cette méthode renvoie&nbsp;:

- un nombre négatif si la chaîne de caractères courant se situe avant la chaîne `chaineAComparer`
- un nombre positif si elle se situe après
- 0 si les deux chaînes sont équivalentes selon cet ordre.

> **Attention :** Il ne faut pas tester uniquement les valeurs -1 et 1.
>
> En effet les valeurs entières utilisées peuvent varier en fonction des navigateurs et de leurs versions. En effet, la spécification indique uniquement le signe de la valeur à fournir. Par exemple, certains navigateurs pourront renvoyer -2 ou 2 (voire d'autres valeurs).

## Performances

Pour comparer un grand nombre de chaînes de caractères, par exemple pour trier de grands tableaux, il est préférable de créer un objet [`Intl.Collator`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Intl/Collator) et d'utiliser la fonction fournie par la propriété [`compare`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Collator/compare).

## Exemples

### Utiliser la méthode `localeCompare()`

L'exemple qui suit illustre les différents cas de figures lors de la comparaison des chaînes de caractères&nbsp;:

```js
// La lettre "a" est située avant la lettre "c"
// On a donc une valeur négative
'a'.localeCompare('c'); // -2, ou -1, ou toute autre valeur négative

// Alphabétiquement, le mot "coucou" est situé après
// "avion", la valeur est donc positive
'coucou'.localeCompare('avion')); // 2, ou 1, ou toute autre valeur positive

// Deux chaînes de caractères identiques sont équivalentes : 0
'a'.localeCompare('a'); // 0
```

### Trier un tableau

`localeCompare()` permet de trier un tableau sans tenir compte de la casse&nbsp;:

```js
var items = ['réservé', 'Premier', 'Cliché', 'communiqué', 'café', 'Adieu'];
items.sort((a, b) => a.localeCompare(b, 'fr', {ignorePunctuation: true}));
// ['Adieu', 'café', 'Cliché', 'communiqué', 'Premier', 'réservé']
```

### Vérifier la prise en charge des arguments `locales` et `options`

Les arguments `locales` et `options` ne sont pas pris en charge par tous les navigateurs.

Pour vérifier qu'une implémentation implémente ces paramètres, il est possible d'utiliser un cas d'erreur quand on utilise une balise de langue incorrecte (ce qui provoque une exception [`RangeError`](/fr/docs/Web/JavaScript/Reference/Global_Objects/RangeError))&nbsp;:

```js
function localeCompareSupportsLocales() {
  try {
    'toto'.localeCompare('truc', 'i');
  } catch (e) {
    return e.name === 'RangeError';
  }
  return false;
}
```

### Utiliser le paramètre `locales`

Les résultats fournis par la méthode `localeCompare()` peuvent varier selon les locales utilisées. Pour spécifier la locale à utiliser pour votre application, utilisez l'argument `locales` (éventuellement en incluant des locales de recours)&nbsp;:

```js
console.log('ä'.localeCompare('z', 'de')); // une valeur négative : en allemand ä est avant z
console.log('ä'.localeCompare('z', 'sv')); // une valeur positive : en suédois, ä arrive après z
```

### Utiliser le paramètre `options`

Les résultats construits par la méthode `localeCompare()` peuvent être adaptés grâce au paramètre `options`&nbsp;:

```js
// en allemand, ä et a ont la même lettre de base
console.log('ä'.localeCompare('a', 'de', {sensitivity: "base"})); // 0

// en suédois, ä et a n'ont pas la même lettre de base
console.log('ä'.localeCompare('a', 'sv', {sensitivity: "base"})); // une valeur positive
```

### Tri numérique

```js
// Par défaut, selon l'ordre lexicographique, "2" est supérieur à "10"
console.log("2".localeCompare("10")); // 1

// En utilisant un ordre numérique
console.log("2".localeCompare("10", undefined, {numeric: true})); // -1

// En utilisant une balise de locale
console.log("2".localeCompare("10","en-u-kn-true")); // -1
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [`Intl.Collator`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Intl/Collator)
