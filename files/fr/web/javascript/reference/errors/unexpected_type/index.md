---
title: 'TypeError: "x" is (not) "y"'
slug: Web/JavaScript/Reference/Errors/Unexpected_type
tags:
  - Erreurs
  - JavaScript
  - Reference
  - TypeError
translation_of: Web/JavaScript/Reference/Errors/Unexpected_type
original_slug: Web/JavaScript/Reference/Erreurs/Unexpected_type
---
{{jsSidebar("Errors")}}

## Message

```
TypeError: Unable to get property {x} of undefined or null reference (Edge)
TypeError: "x" is (not) "y" (Firefox)
```

Exemples&nbsp;:

```
TypeError: "x" is undefined
TypeError: "x" is null
TypeError: "undefined" is not an object
TypeError: "x" is not an object or null
TypeError: "x" is not a symbol
```

## Type d'erreur

{{jsxref("TypeError")}}.

## Quel est le problème ?

Un type inattendu a été rencontré. Cela se produit la plupart du temps avec les valeurs {{jsxref("undefined")}} ou {{jsxref("null")}}.

Certaines méthodes comme {{jsxref("Object.create()")}} ou {{jsxref("Symbol.keyFor()")}} ont des contraintes sur le type de valeur qui peut être passé en argument.

## Exemples

### Exemples invalides

```js example-bad
// undefined et null : des valeurs
// sur lesquelles la méthode substring
// ne fonctionnera pas
var toto = undefined;
toto.substring(1); // TypeError: toto is undefined

var toto = null;
toto.substring(1); // TypeError: toto is null


// Certaines méthodes nécessitent une valeur
// d'un type spécifique
var toto = {}
Symbol.keyFor(toto); // TypeError: toto is not a symbol

var toto = "truc"
Object.create(toto); // TypeError: "toto" is not an object or null
```

### Résoudre le problème

Pour résoudre ce problème et écarter les cas où la valeur vaut `undefined`, on peut par exemple utiliser l'opérateur [`typeof`](/fr/docs/Web/JavaScript/Reference/Opérateurs/L_opérateur_typeof).

```js
if (typeof toto !== 'undefined') {
  // Désormais, on sait que toto est bien
  // défini et on peut poursuivre.
}
```

## Voir aussi

- {{jsxref("undefined")}}
- {{jsxref("null")}}
