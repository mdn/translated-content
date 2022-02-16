---
title: RegExp.prototype.toSource()
slug: Web/JavaScript/Reference/Global_Objects/RegExp/toSource
tags:
  - JavaScript
  - Méthode
  - Non-standard
  - Prototype
  - Reference
  - RegExp
translation_of: Web/JavaScript/Reference/Global_Objects/RegExp/toSource
original_slug: Web/JavaScript/Reference/Objets_globaux/RegExp/toSource
---
{{JSRef}}{{non-standard_header}}

La méthode **`toSource()`** permet de renvoyer une chaîne de caractères représentant le code source de l'objet.

## Syntaxe

    objetRegExp.toSource()

### Valeur de retour

Une chaîne de caractères représentant le code source de l'objet {{jsxref("RegExp")}}.

## Description

La méthode `toSource` renvoie les valeurs suivantes :

- Pour l'objet natif {{jsxref("RegExp")}}, `toSource()` renvoie la chaîne de caractères suivante, indiquant que le code source n'est pas disponible :

  ```js
    function RegExp() {
        [native code]
    }
    ```

- Pour les instances de {{jsxref("RegExp")}}, `toSource()` renvoie une chaîne de caractères indiquant le code source de l'objet.

Cette méthode est généralement utilisée de façon interne au moteur JavaScript, elle n'est pas censée être utilisée dans du code JavaScript classique.

## Spécifications

Cette méthode ne fait partie d'aucun standard. Elle a été implémentée avec JavaScript 1.3.

## Compatibilité des navigateurs

{{Compat("javascript.builtins.RegExp.toSource")}}

## Voir aussi

- {{jsxref("Object.prototype.toSource()")}}
