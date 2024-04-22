---
title: "TypeError: invalid 'instanceof' operand 'x'"
slug: Web/JavaScript/Reference/Errors/invalid_right_hand_side_instanceof_operand
---

{{jsSidebar("Errors")}}

## Message

```
TypeError: invalid 'instanceof' operand "x" (Firefox)
TypeError: "x" is not a function (Firefox)
TypeError: Right-hand side of 'instanceof' is not an object (Chrome)
TypeError: Right-hand side of 'instanceof' is not callable (Chrome)
```

## Type d'erreur

{{jsxref("TypeError")}}

## Quel est le problème ?

L'opérateur [`instanceof`](/fr/docs/Web/JavaScript/Reference/Opérateurs/instanceof) attend un opérande droit qui soit un objet constructeur, c'est-à-dire un objet possédant une propriété `prototype` et qui puisse être appelé.

## Exemples

```js example-bad
"test" instanceof ""; // TypeError: invalid 'instanceof' operand ""
42 instanceof 0; // TypeError: invalid 'instanceof' operand 0

function Toto() {}
var f = Toto(); // Toto() est appelé et renvoie undefined
var x = new Toto();

x instanceof f; // TypeError: invalid 'instanceof' operand f
x instanceof x; // TypeError: x is not a function
```

Pour corriger ces erreurs, il faut remplacer l'opérateur `instanceof` avec l'opérateur [`typeof`](/fr/docs/Web/JavaScript/Reference/Opérateurs/L_opérateur_typeof) ou s'assurer que l'opérande droit est la fonction et non le résultat de son évaluation.

```js example-good
typeof "test" == "string"; // true
typeof 42 == "number"; // true

function Toto() {}
var f = Toto; // On n'appelle pas Toto.
var x = new Toto();

x instanceof f; // true
x instanceof Toto; // true
```

## Voir aussi

- L'opérateur [`instanceof`](/fr/docs/Web/JavaScript/Reference/Opérateurs/instanceof)
- L'opérateur [`typeof`](/fr/docs/Web/JavaScript/Reference/Opérateurs/L_opérateur_typeof)
