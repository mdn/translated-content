---
title: Intl.Collator
slug: Web/JavaScript/Reference/Global_Objects/Intl/Collator
translation_of: Web/JavaScript/Reference/Global_Objects/Intl/Collator
original_slug: Web/JavaScript/Reference/Objets_globaux/Intl/Collator
browser-compat: javascript.builtins.Intl.Collator
---
{{JSRef}}

L'objet **`Intl.Collator`** permet de comparer des chaînes de caractères en tenant compte de la locale.

{{EmbedInteractiveExample("pages/js/intl-collator.html")}}

## Constructeur

- [`Intl.Collator()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Intl/Collator/Collator)
  - : Crée un nouvel objet `Collator`.

## Méthodes statiques

- [`Intl.Collator.supportedLocalesOf()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Intl/Collator/supportedLocalesOf)
  - : Renvoie un tableau qui contient les locales, parmi celles fournies en arguments, qui sont prises en charge sans avoir à recourir à la locale par défaut de l'environnement d'exécution.

## Méthodes des instances

- [`Intl.Collator.prototype.compare`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Intl/Collator/compare)
  - : Une fonction d'accesseur qui compare deux chaînes de caractères selon l'ordre de tri de l'objet `Intl.Collator` courant.
- [`Intl.Collator.prototype.resolvedOptions()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Intl/Collator/resolvedOptions)
  - : Renvoie un nouvel objet dont les propriétés reflètent les options de locale et de collation calculées à l'initialisation de l'objet.

## Exemples

### Utiliser `Collator`

L'exemple qui suit illustre les différents résultats qu'on peut obtenir en comparant deux chaînes de caractères&nbsp;:

```js
console.log(new Intl.Collator().compare('a', 'c')); // → une valeur négative
console.log(new Intl.Collator().compare('c', 'a')); // → une valeur positive
console.log(new Intl.Collator().compare('a', 'a')); // → 0
```

Les résultats indiqués ici sont génériques et, en pratique, peuvent varier entre les navigateurs et les versions des navigateurs. En effet les valeurs obtenues dépendent de l'implémentation. Les spécifications indiquent uniquement le signe (positif ou négatif) du résultat.

### Utiliser `locales`

Les résultats fournis par [`Collator.prototype.compare()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Collator/compare) varient selon les locales. Afin d'obtenir le bon ordre lexicographique dans votre application, il est nécessaire de spécifier la locale de l'utilisatrice ou l'utilisateur (et éventuellement des locales pour des cas de replis) en utilisant l'argument `locales`&nbsp;:

```js
// en allemand, 'ä' est équivalent à 'a' pour le tri
console.log(new Intl.Collator('de').compare('ä', 'z'));
// → une valeur négative

// en suédois, 'ä' arrive après 'z'
console.log(new Intl.Collator('sv').compare('ä', 'z'));
// → une valeur positive
```

### Utiliser `options`

Les résultats fournis par [`Collator.prototype.compare()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Collator/compare) peuvent être adaptés grâce à l'argument `options`&nbsp;:

```js
// en allemand, 'ä' est composé de la lettre de base 'a'
console.log(new Intl.Collator('de', {sensitivity: 'base'}).compare('ä', 'a'));
// → 0

// en suédois, 'ä' et 'a' sont distincts en termes de base
console.log(new Intl.Collator('sv', {sensitivity: 'base'}).compare('ä', 'a'));
// → une valeur positive
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [`Intl`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Intl)
