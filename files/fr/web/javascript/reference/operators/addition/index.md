---
title: Addition (+)
slug: Web/JavaScript/Reference/Operators/Addition
l10n:
  sourceCommit: 1133f9e054bad2340b98a608b7894fd7daa62af6
---

L'opérateur d'addition (`+`) produit la somme de deux opérandes numériques ou la concaténation de deux chaînes de caractères.

{{InteractiveExample("Démonstration JavaScript&nbsp;: l'opérateur Addition (+)")}}

```js interactive-example
console.log(2 + 2);
// Résultat attendu : 4

console.log(2 + true);
// Résultat attendu : 3

console.log("bonjour " + "à tous");
// Résultat attendu : "bonjour à tous"

console.log(2001 + " : L'Odyssée de l'espace");
// Résultat attendu : "2001 : L'Odyssée de l'espace"
```

## Syntaxe

```js-nolint
x + y
```

## Description

L'opérateur `+` est surchargé pour deux opérations distinctes&nbsp;: l'addition numérique et la concaténation de chaînes de caractères. Lors de l'évaluation, il [convertit d'abord les deux opérandes en valeurs primitives](/fr/docs/Web/JavaScript/Guide/Data_structures#conversion_en_primitive). Ensuite, les types des deux opérandes sont testés&nbsp;:

- Si l'un des côtés est une chaîne de caractères, l'autre opérande est également [converti en chaîne de caractères](/fr/docs/Web/JavaScript/Reference/Global_Objects/String#conversion_en_chaîne_de_caractères), puis les deux chaînes de caractères sont concaténées.
- Si les deux opérandes sont des [grands entiers](/fr/docs/Web/JavaScript/Reference/Global_Objects/BigInt), une addition de grands entiers est effectuée. Si l'un des côtés est un grand entier, mais pas l'autre, une exception {{JSxRef("TypeError")}} est levée.
- Sinon, les deux côtés sont [convertis en nombres](/fr/docs/Web/JavaScript/Reference/Global_Objects/Number#conversion_numérique), puis une addition numérique est effectuée.

La concaténation de chaînes de caractères est souvent considérée comme équivalente aux [littéraux gabarits](/fr/docs/Web/JavaScript/Reference/Template_literals) ou à [`String.prototype.concat()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/String/concat), mais ce n'est pas le cas. L'addition convertit l'expression sous contrainte en une valeur _primitive_, ce qui appelle [`valueOf()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Object/valueOf) en priorité&nbsp;; en revanche, les littéraux gabarits et `concat()` convertissent l'expression sous contrainte en une _chaîne de caractères_, ce qui appelle [`toString()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Object/toString) en priorité. Si l'expression possède une méthode [`[Symbol.toPrimitive]()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toPrimitive), la concaténation de chaînes de caractères l'appelle avec `"default"` comme indication, tandis que les littéraux gabarits utilisent `"string"`. Ce point est important pour les objets qui possèdent des représentations différentes sous forme de chaîne de caractères et de valeur primitive — comme {{JSxRef("Temporal")}}, dont les méthodes `valueOf()` des objets lèvent toutes une exception.

```js
const t = Temporal.Now.instant();
"" + t; // Throws TypeError
`${t}`; // '2022-07-31T04:48:56.113918308Z'
"".concat(t); // '2022-07-31T04:48:56.113918308Z'
```

Il est déconseillé d'utiliser `"" + x` pour effectuer une [conversion en chaîne de caractères](/fr/docs/Web/JavaScript/Reference/Global_Objects/String#conversion_de_chaîne_de_caractères).

## Exemples

### Additionner des nombres

```js
1 + 2; // 3
```

Les autres valeurs qui ne sont pas des chaînes de caractères, pas des grands entiers sont converties en nombres&nbsp;:

```js
true + 1; // 2
false + false; // 0
```

### Additionner des grands entiers

```js
1n + 2n; // 3n
```

Vous ne pouvez pas mélanger des opérandes de type BigInt et number lors de l'addition. `null`, `undefined` et les valeurs booléennes sont converties en nombres et sont également interdites.

```js example-bad
1n + 2; // TypeError: Cannot mix BigInt and other types, use explicit conversions
2 + 1n; // TypeError: Cannot mix BigInt and other types, use explicit conversions
```

Les chaînes de caractères ont la priorité sur les autres types, donc ajouter une chaîne de caractères à un BigInt produit une concaténation de chaînes de caractères plutôt qu'une `TypeError`.

```js
"1" + 2n; // "12"
```

Pour effectuer une addition avec un BigInt et un non-BigInt, convertissez l'un des opérandes&nbsp;:

```js
1n + BigInt(2); // 3n
Number(1n) + 2; // 3
```

### Additionner des chaînes de caractères

Si l'un des opérandes est une chaîne de caractères, l'autre est converti en chaîne de caractères et ils sont concaténés&nbsp;:

```js
"toto" + "truc"; // "tototruc"
5 + "toto"; // "5toto"
"toto" + false; // "totofalse"
"2" + 2; // "22"
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'opérateur de [Soustraction (`-`)](/fr/docs/Web/JavaScript/Reference/Operators/Subtraction)
- L'opérateur de [Division (`/`)](/fr/docs/Web/JavaScript/Reference/Operators/Division)
- L'opérateur de [Multiplication (`*`)](/fr/docs/Web/JavaScript/Reference/Operators/Multiplication)
- L'opérateur de [Reste (`%`)](/fr/docs/Web/JavaScript/Reference/Operators/Remainder)
- L'opérateur de [Exponentiation (`**`)](/fr/docs/Web/JavaScript/Reference/Operators/Exponentiation)
- L'opérateur de [Incrément (`++`)](/fr/docs/Web/JavaScript/Reference/Operators/Increment)
- L'opérateur de [Décrément (`--`)](/fr/docs/Web/JavaScript/Reference/Operators/Decrement)
- L'opérateur de [Négation unaire (`-`)](/fr/docs/Web/JavaScript/Reference/Operators/Unary_negation)
- L'opérateur [d'Addition unaire (`+`)](/fr/docs/Web/JavaScript/Reference/Operators/Unary_plus)
