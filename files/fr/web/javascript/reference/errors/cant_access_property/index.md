---
title: 'TypeError: can''t access property "x" of "y"'
slug: Web/JavaScript/Reference/Errors/Cant_access_property
tags:
  - Erreurs
  - JavaScript
  - TypeError
translation_of: Web/JavaScript/Reference/Errors/Cant_access_property
original_slug: Web/JavaScript/Reference/Erreurs/Cant_access_property
---
{{jsSidebar("Errors")}}

## Message

    TypeError: Unable to get property {x} of undefined or null reference (Edge)
    TypeError: can't access property {x} of {y} (Firefox)
    TypeError: {y} is undefined, can't access property {x} of it (Firefox)
    TypeError: {y} is null, can't access property {x} of it (Firefox)

    Exemples
    TypeError: x is undefined, can't access property "prop" of it
    TypeError: x is null, can't access property "prop" of it
    TypeError: can't access property "prop" of undefined
    TypeError: can't access property "prop" of null

## Types d'erreur

{{jsxref("TypeError")}}.

## Quel est le problème ?

On a tenté d'accéder à une propriété sur la valeur {{jsxref("undefined")}} ou {{jsxref("null")}}.

## Exemples

### Cas invalides

```js example-bad
// undefined et null ne possèdent aucune propriété et aucune méthode substring
var toto = undefined;
toto.substring(1); // TypeError: x is undefined, can't access property "substring" of it

var toto = null;
toto.substring(1); // TypeError: x is null, can't access property "substring" of it
```

### Corriger le problème

Pour détecter le cas où la valeur utilisée est `undefined` ou `null`, on peut utiliser l'opérateur [`typeof`](/fr/docs/Web/JavaScript/Reference/Opérateurs/L_opérateur_typeof). Par exemple :

```js
if (typeof toto !== 'undefined') {
  // On sait alors que toto est bien défini et on peut utiliser ses propriétés s'il en a.
}
```

## Voir aussi

- {{jsxref("undefined")}}
- {{jsxref("null")}}
