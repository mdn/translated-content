---
title: Intl.Collator
slug: Web/JavaScript/Reference/Global_Objects/Intl/Collator
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

L'objet **`Intl.Collator`** permet de comparer des chaînes de caractères en tenant compte de la locale.

{{InteractiveExample("Démonstration JavaScript&nbsp;: Intl.Collator")}}

```js interactive-example
console.log(["Z", "a", "z", "ä"].sort(new Intl.Collator("de").compare));
// Résultat attendu : Array ["a", "ä", "z", "Z"]

console.log(["Z", "a", "z", "ä"].sort(new Intl.Collator("sv").compare));
// Résultat attendu : Array ["a", "z", "Z", "ä"]

console.log(
  ["Z", "a", "z", "ä"].sort(
    new Intl.Collator("de", { caseFirst: "upper" }).compare,
  ),
);
// Résultat attendu : Array ["a", "ä", "Z", "z"]
```

## Constructeur

- {{JSxRef("Intl/Collator/Collator", "Intl.Collator()")}}
  - : Crée un nouvel objet `Collator`.

## Méthodes statiques

- {{JSxRef("Intl/Collator/supportedLocalesOf", "Intl.Collator.supportedLocalesOf()")}}
  - : Retourne un tableau qui contient les locales, parmi celles fournies en arguments, qui sont prises en charge sans avoir à recourir à la locale par défaut de l'environnement d'exécution.

## Propriétés d'instance

Ces propriétés sont définies sur `Intl.Collator.prototype` et partagées par toutes les instances de `Intl.Collator`.

- {{JSxRef("Object/constructor", "Intl.Collator.prototype.constructor")}}
  - : La fonction constructeur qui a créé l'objet instance. Pour les instances de `Intl.Collator`, la valeur initiale est le constructeur {{JSxRef("Intl/Collator/Collator", "Intl.Collator")}}.
- `Intl.Collator.prototype[Symbol.toStringTag]`
  - : La valeur initiale de la propriété [`[Symbol.toStringTag]`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag) est la chaîne de caractères `"Intl.Collator"`. Cette propriété est utilisée dans {{JSxRef("Object.prototype.toString()")}}.

## Méthodes d'instances

- {{JSxRef("Intl/Collator/compare", "Intl.Collator.prototype.compare()")}}
  - : Une fonction d'accesseur qui compare deux chaînes de caractères selon l'ordre de tri de l'objet `Intl.Collator` courant.
- {{JSxRef("Intl/Collator/resolvedOptions", "Intl.Collator.prototype.resolvedOptions()")}}
  - : Retourne un nouvel objet dont les propriétés reflètent les options de locale et de collation calculées à l'initialisation de l'objet.

## Exemples

### Utiliser l'objet `Collator`

L'exemple qui suit illustre les différents résultats qu'on peut obtenir en comparant deux chaînes de caractères&nbsp;:

```js
console.log(new Intl.Collator().compare("a", "c")); // -1, ou une valeur négative
console.log(new Intl.Collator().compare("c", "a")); // 1, ou une valeur positive
console.log(new Intl.Collator().compare("a", "a")); // 0
```

Les résultats indiqués ici sont génériques et, en pratique, peuvent varier entre les navigateurs et les versions des navigateurs. En effet les valeurs obtenues dépendent de l'implémentation. Les spécifications indiquent uniquement le signe (positif ou négatif) du résultat.

### Utiliser l'argument `locales`

Les résultats fournis par [`Collator.prototype.compare()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Intl/Collator/compare) varient selon les locales. Afin d'obtenir le bon ordre lexicographique dans votre application, il est nécessaire de spécifier la locale de l'utilisatrice ou l'utilisateur (et éventuellement des locales pour des cas de replis) en utilisant l'argument `locales`&nbsp;:

```js
// en allemand, 'ä' est équivalent à 'a' pour le tri
console.log(new Intl.Collator("de").compare("ä", "z"));
// -1, ou une valeur négative

// en suédois, 'ä' arrive après 'z'
console.log(new Intl.Collator("sv").compare("ä", "z"));
// 1, ou une valeur positive
```

### Utiliser l'argument `options`

Les résultats fournis par [`Collator.prototype.compare()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Intl/Collator/compare) peuvent être adaptés grâce à l'argument `options`&nbsp;:

```js
// en allemand, 'ä' est composé de la lettre de base 'a'
console.log(new Intl.Collator("de", { sensitivity: "base" }).compare("ä", "a"));
// 0

// en suédois, 'ä' et 'a' sont distincts en termes de base
console.log(new Intl.Collator("sv", { sensitivity: "base" }).compare("ä", "a"));
// 1, ou une valeur positive
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'objet {{JSxRef("Intl")}}
- La méthode {{JSxRef("String.prototype.localeCompare()")}}
