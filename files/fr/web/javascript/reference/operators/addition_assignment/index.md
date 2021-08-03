---
title: Affectation après addition (+=)
slug: Web/JavaScript/Reference/Operators/Addition_assignment
tags:
  - Assignment operator
  - JavaScript
  - Language feature
  - Operator
  - Reference
browser-compat: javascript.operators.addition_assignment
---
{{jsSidebar("Operators")}}

L'opérateur d'addition et d'affectation (`+=`) calcule la somme ou la concaténation de ses deux opérandes puis affecte le résultat à la variable représentée par l'opérande gauche. C'est le type des opérandes qui détermine s'il y a somme ou concaténation.

{{EmbedInteractiveExample("pages/js/expressions-addition-assignment.html")}}

## Syntax

```js
Opérateur : x += y
Signification :  x  = x + y
```

## Exemples

### Utiliser l'opérateur d'addition et d'affectation

```js
let toto = "toto";
let truc = 5;
let machin = true;

// nombre + nombre -> addition
truc += 2; // 7

// booléen + nombre -> addition
machin += 1; // 2

// booléen + booléen -> addition
machin += false; // 1

// nombre + chaîne de caractères -> concaténation
truc += 'toto'; // "5toto"

// chaîne de caractères + booléen -> concaténation
toto += false // "totofalse"

// chaîne de caractères + chaîne de caractères -> concaténation
toto += 'truc' // "tototruc"
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Les opérateurs d'affectation dans le guide JavaScript](/fr/docs/Web/JavaScript/Guide/Expressions_and_Operators#assignment)
- [L'opérateur d'addition/concaténation](/fr/docs/Web/JavaScript/Reference/Operators/Addition)
