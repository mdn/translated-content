---
title: Affectation après division (/=)
slug: Web/JavaScript/Reference/Operators/Division_assignment
tags:
  - Assignment operator
  - JavaScript
  - Language feature
  - Operator
  - Reference
browser-compat: javascript.operators.division_assignment
---
{{jsSidebar("Operators")}}

L'opérateur de division et d'affectation (`/=`) divise la variable fournie par l'opérande gauche par la valeur indiquée par l'opérande droit puis affecte le résultat à la variable représentée par l'opérande gauche.

{{EmbedInteractiveExample("pages/js/expressions-division-assignment.html")}}

## Syntaxe

```js
Opérateur : x /= y
Signification:  x  = x / y
```

## Exemples

### Utiliser l'opérateur de division et d'affectation

```js
let truc = 5;
truc /= 2;      // 2.5
truc /= 2;      // 1.25
truc /= 0;      // Infinity
truc /= 'toto'; // NaN
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Les opérateurs d'affectation dans le guide JavaScript](/fr/docs/Web/JavaScript/Guide/Expressions_and_Operators#assignment)
- [L'opérateur de division](/fr/docs/Web/JavaScript/Reference/Operators/Division)
