---
title: "String : méthode lastIndexOf()"
short-title: lastIndexOf()
slug: Web/JavaScript/Reference/Global_Objects/String/lastIndexOf
l10n:
  sourceCommit: b0426436f128938c9ee8e26dfa17f0a2bebdf70d
---

La méthode **`lastIndexOf()`** des valeurs {{JSxRef("String")}} recherche dans cette chaîne de caractères et retourne l'indice de la dernière occurrence de la sous-chaîne de caractères définie. Elle prend une position de départ optionnelle et retourne la dernière occurrence de la sous-chaîne de caractères définie à un indice inférieur ou égal au nombre défini.

{{InteractiveExample("Démonstration JavaScript&nbsp;: String.prototype.lastIndexOf()")}}

```js interactive-example
const paragraph = "Je pense que le chien de Ruth est plus mignon que le tien !";

const searchTerm = "chien";

console.log(
  `L'indice de la dernière occurrence de « ${searchTerm} » est ${paragraph.lastIndexOf(searchTerm)}`,
);
// Résultat attendu : "L'indice de la dernière occurrence de « chien » est 16"
```

## Syntaxe

```js-nolint
lastIndexOf(searchString)
lastIndexOf(searchString, position)
```

### Paramètres

- `searchString`
  - : La sous-chaîne de caractères à rechercher. Toutes les valeurs sont [converties en chaînes de caractères](/fr/docs/Web/JavaScript/Reference/Global_Objects/String#conversion_en_chaîne_de_caractères), donc l'omission de ce paramètre ou le passage de `undefined` fait que `lastIndexOf()` recherche la chaîne de caractères `"undefined"`, ce qui est rarement ce que vous voulez.

- `position` {{Optional_Inline}}
  - : La méthode retourne l'indice de la dernière occurrence de la sous-chaîne de caractères définie à une position inférieure ou égale à `position`, dont la valeur par défaut est `Infinity`. Si `position` est supérieure à la longueur de la chaîne de caractères appelante, la méthode effectue une recherche sur l'intégralité de la chaîne de caractères. Si `position` est inférieure à `0`, le comportement est identique à celui de `0` — c'est-à-dire que la méthode recherche la sous-chaîne de caractères définie uniquement à l'indice `0`.
    - `'bonjour le monde bonjour'.lastIndexOf('monde', 4)` retourne `-1` — car, bien que la sous-chaîne de caractères `monde` se trouve à l'indice `11`, cette position n'est pas inférieure ou égale à `4`.

    - `'bonjour le monde bonjour'.lastIndexOf('bonjour', 99)` retourne `17` — car la dernière occurrence de `bonjour` à une position inférieure ou égale à `99` se trouve à l'indice `17`.

    - `'bonjour le monde bonjour'.lastIndexOf('bonjour', 0)` et `'bonjour le monde bonjour'.lastIndexOf('bonjour', -5)` retournent tous deux `0` — car les deux font en sorte que la méthode ne recherche `bonjour` qu'à l'indice `0`.

### Valeur de retour

L'indice de la dernière occurrence trouvée de `searchString`, ou `-1` si rien n'a été trouvé.

## Description

Les chaînes de caractères sont indexées à partir de zéro&nbsp;: l'indice du premier caractère d'une chaîne de caractères est `0`, et l'indice du dernier caractère est la longueur de la chaîne de caractères moins 1.

```js
"canal".lastIndexOf("a"); // retourne 3
"canal".lastIndexOf("a", 2); // retourne 1
"canal".lastIndexOf("a", 0); // retourne -1
"canal".lastIndexOf("x"); // retourne -1
"canal".lastIndexOf("c", -5); // retourne 0
"canal".lastIndexOf("c", 0); // retourne 0
"canal".lastIndexOf(""); // retourne 5
"canal".lastIndexOf("", 2); // retourne 2
```

### Sensibilité à la casse

La méthode `lastIndexOf()` est sensible à la casse. Par exemple, l'expression suivante retourne `-1`&nbsp;:

```js
"Baleine Bleue, Baleine Tueuse".lastIndexOf("bleue"); // retourne -1
```

## Exemples

### Utiliser `indexOf()` et `lastIndexOf()`

L'exemple suivant utilise {{JSxRef("String/indexOf", "indexOf()")}} et `lastIndexOf()` pour situer certaines valeurs dans la chaîne de caractères `"Un, Un Nouveau Monde"`.

```js
const touteChaineCaracteres = "Un, Un Nouveau Monde";

console.log(touteChaineCaracteres.indexOf("Un")); // 0
console.log(touteChaineCaracteres.lastIndexOf("Un")); // 4
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La méthode {{JSxRef("String.prototype.charAt()")}}
- La méthode {{JSxRef("String.prototype.indexOf()")}}
- La méthode {{JSxRef("String.prototype.split()")}}
- La méthode {{JSxRef("Array.prototype.indexOf()")}}
- La méthode {{JSxRef("Array.prototype.lastIndexOf()")}}
