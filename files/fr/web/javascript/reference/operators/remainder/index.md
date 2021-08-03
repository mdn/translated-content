---
title: Reste (%)
slug: Web/JavaScript/Reference/Operators/Remainder
tags:
  - JavaScript
  - Language feature
  - Operator
  - Reference
browser-compat: javascript.operators.remainder
---
{{jsSidebar("Operators")}}

L'opérateur du reste (`%`) renvoie le reste de la division de l'opérande gauche par l'opérande droit. Le résultat a toujours le signe du numérateur.

{{EmbedInteractiveExample("pages/js/expressions-remainder.html")}}

Bien que dans la plupart des langages, `%` est un opérateur de reste, pour d'autres (par exemple [Python, Perl](https://en.wikipedia.org/wiki/Modulo_operation#In_programming_languages)) c'est un opérateur de modulo. Lorsqu'on utilise des valeurs positives, les deux opérateurs sont équivalents mais lorsque le numérateur et de dénominateur ont des signes différents, le reste et le modulo fourniront des signes différents. Pour obtenir une opération équivalente au modulo en JavaScript, on pourra utiliser `((a % n ) + n ) % n`.

## Syntaxe

```js
Opérateur : var1 % var2
```

## Exemples

### Reste avec numérateur positif

```js
12 % 5  //  2
 1 % -2 //  1
 1 % 2  //  1
 2 % 3  //  2
5.5 % 2 // 1.5
```

### Reste avec numérateur négatif

```js
-12 % 5 // -2
-1 % 2  // -1
-4 % 2  // -0
```

### Reste avec NaN

```js
NaN % 2 // NaN
```

### Reste avec l'infini

```js
Infinity % 2 // NaN
Infinity % 0 // NaN
Infinity % Infinity // NaN
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Opérateur d'addition](/fr/docs/Web/JavaScript/Reference/Operators/Addition)
- [Opérateur de soustraction](/fr/docs/Web/JavaScript/Reference/Operators/Subtraction)
- [Opérateur de multiplication](/fr/docs/Web/JavaScript/Reference/Operators/Multiplication)
- [Opérateur de division](/fr/docs/Web/JavaScript/Reference/Operators/Division)
- [Opérateur d'exponentiation](/fr/docs/Web/JavaScript/Reference/Operators/Exponentiation)
- [Opérateur d'incrémentation](/fr/docs/Web/JavaScript/Reference/Operators/Increment)
- [Opérateur de décrémentation](/fr/docs/Web/JavaScript/Reference/Operators/Decrement)
- [Opérateur de négation unaire](/fr/docs/Web/JavaScript/Reference/Operators/Unary_negation)
- [Opérateur plus unaire](/fr/docs/Web/JavaScript/Reference/Operators/Unary_plus)
