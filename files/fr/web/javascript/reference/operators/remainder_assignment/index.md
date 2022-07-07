---
title: Affectation après reste (%=)
slug: Web/JavaScript/Reference/Operators/Remainder_assignment
tags:
  - Assignment operator
  - JavaScript
  - Language feature
  - Operator
  - Reference
browser-compat: javascript.operators.remainder_assignment
---
{{jsSidebar("Operators")}}

L'opérateur de reste et d'affectation (`%=`) calcule le reste de la division de l'opérande gauche par l'opérande droit et affecte ce résultat à la variable représentée par l'opérande gauche.

{{EmbedInteractiveExample("pages/js/expressions-remainder-assignment.html")}}

## Syntaxe

```js
Opérateur : x %= y
Signification :  x  = x % y
```

## Exemples

### Utiliser l'opérateur de reste et d'affectation

```js
let truc = 5;
truc %= 2;      // 1
truc %= 'toto'; // NaN
truc %= 0;      // NaN
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Les opérateurs d'affectation dans le guide JavaScript](/fr/docs/Web/JavaScript/Guide/Expressions_and_Operators#assignment)
- [L'opérateur de reste](/fr/docs/Web/JavaScript/Reference/Operators/Remainder)
