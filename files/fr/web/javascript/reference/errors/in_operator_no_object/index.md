---
title: 'TypeError: invalid ''in'' operand "x"'
slug: Web/JavaScript/Reference/Errors/in_operator_no_object
tags:
  - Erreurs
  - JavaScript
  - TypeError
translation_of: Web/JavaScript/Reference/Errors/in_operator_no_object
original_slug: Web/JavaScript/Reference/Erreurs/in_operator_no_object
---
{{jsSidebar("Errors")}}

## Message

    TypeError: Invalid operand to 'in' (Edge)
    TypeError: right-hand side of 'in' should be an object, got 'x' (Firefox)
    TypeError: cannot use 'in' operator to search for 'x' in 'y' (Firefox, Chrome)

## Type d'erreur

{{jsxref("TypeError")}}

## Quel est le problème ?

L'[opérateur `in`](/fr/docs/Web/JavaScript/Reference/Opérateurs/L_opérateur_in) peut uniquement être utilisé pour vérifier qu'une propriété appartient à un objet. Il ne peut pas être utilisé pour rechercher des caractères dans des chaînes de caractères, des nombres ou dans d'autres types de données en dehors des objets.

## Exemples

### Rechercher un texte dans une chaîne de caractères

À la différence de certains langages de programmation (Python par exemple), JavaScript ne permet pas de chercher des textes dans une chaîne de caractères grâce à l'opérateur [`in`](/fr/docs/Web/JavaScript/Reference/Opérateurs/L_opérateur_in).

```js example-bad
"Coucou" in "Coucou monde";
// TypeError: cannot use 'in' operator to search for 'Coucou' in 'Coucou monde'
```

On utilisera plutôt la méthode {{jsxref("String.prototype.indexOf()")}} :

```js example-good
"Coucou monde".indexOf("Coucou") !== -1;
// true
```

### `null` ou `undefined` ne fonctionnent pas

Avant d'utiliser `in`, il faut s'assurer que la valeur qu'on inspecte n'est pas {{jsxref("null")}} ou {{jsxref("undefined")}}.

```js example-bad
var toto = null;
"truc" in toto;
// TypeError: cannot use 'in' operator to search for 'truc' in 'toto" (Chrome)
// TypeError: right-hand side of 'in' should be an object, got null (Firefox)
```

L'opérateur `in` doit être utilisé avec un objet.

```js example-good
var toto = { machin: "bidule" };
"truc" in toto; // false

"PI" in Math; // true
"pi" in Math; // false
```

### Rechercher dans un tableau

Attention lorsqu'on utilise l'opérateur `in` quand on recherche une valeur dans un objet {{jsxref("Array")}}. L'opérateur `in` vérifie la présence de l'index mais pas la valeur présente à cet index.

```js
var arbres = ['cèdre', 'bouleau', 'pin', 'sapin', 'érable'];
3 in arbres; // true
"pin" in arbres; // false
```

## Voir aussi

- [L'opérateur `in`](/fr/docs/Web/JavaScript/Reference/Opérateurs/L_opérateur_in)
