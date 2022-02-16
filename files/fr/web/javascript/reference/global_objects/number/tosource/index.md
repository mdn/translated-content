---
title: Number.prototype.toSource()
slug: Web/JavaScript/Reference/Global_Objects/Number/toSource
tags:
  - JavaScript
  - Méthode
  - Number
  - Prototype
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Number/toSource
original_slug: Web/JavaScript/Reference/Objets_globaux/Number/toSource
---
{{JSRef}} {{non-standard_header}}

La méthode **`toSource()`** permet de renvoyer une chaîne de caractère représentant le code source de l'objet.

## Syntaxe

    objetNumber.toSource();
    Number.toSource();

### Valeur de retour

Une chaîne de caractères représentant le code source de l'objet.

## Description

La méthode `toSource()` renvoie les valeurs suivantes :

- Pour l'objet natif {{jsxref("Number")}}, `toSource()` renvoie la chaîne suivante, indiquant que le code source n'est pas disponible :

  ```js
    function Number() {
        [native code]
    }
    ```

- Pour les instances de {{jsxref("Number")}}, `toSource()` renvoie une chaîne représentant le code source de l'objet.

Cette méthode est généralement appelée par du code interne au moteur JavaScript et n'est pas utilisée dans des scripts JavaScript.

## Spécifications

Cette méthode ne fait partie d'aucun standard. Elle a été implémentée avec JavaScript 1.3.

## Compatibilité des navigateurs

{{Compat("javascript.builtins.Number.toSource")}}

## Voir aussi

- {{jsxref("Object.prototype.toSource()")}}
