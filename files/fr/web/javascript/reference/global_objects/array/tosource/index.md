---
title: Array.prototype.toSource()
slug: Web/JavaScript/Reference/Global_Objects/Array/toSource
tags:
  - Array
  - JavaScript
  - Méthode
  - Non-standard
  - Prototype
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Array/toSource
original_slug: Web/JavaScript/Reference/Objets_globaux/Array/toSource
---
{{JSRef}}{{Non-standard_header}}

La méthode **`toSource()`** renvoie une chaine de caractères représentant le code source du tableau.

## Syntaxe

    arr.toSource()

### Valeur de retour

Une chaîne de caractères qui représente le code source du tableau.

## Description

La méthode `toSource()` renvoie les valeurs suivantes :

- Pour l'objet {{jsxref("Array")}} natif, `toSource()` renvoie la chaîne de caractères suivante indiquant que le code source n'est pas disponible :

  ```js
    function Array() {
        [native code]
    }
    ```

- Pour les instances d'{{jsxref("Array")}}, `toSource()` renvoie une chaîne représentant le code source.

Cette méthode est habituellement appelée en interne par le moteur JavaScript et n'est pas utilisée explicitement dans du code. Il est cependant possible d'appeler `toSource()` lors du débogage pour examiner le contenu d'un tableau.

## Exemples

### Examiner le code source d'un tableau

Pour examiner le code source d'un tableau :

```js
var alpha = new Array("a", "b", "c");
alpha.toSource();
// renvoie ["a", "b", "c"]
```

## Spécifications

Ne fait partie d'aucun standard. Implémenté dans JavaScript 1.3.

## Compatibilité des navigateurs

{{Compat("javascript.builtins.Array.toSource")}}

## Voir aussi

- {{jsxref("Object.prototype.toSource()")}}
- {{jsxref("Array.prototype.toString()")}}
