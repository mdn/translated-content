---
title: Symbol.prototype.toSource()
slug: Web/JavaScript/Reference/Global_Objects/Symbol/toSource
tags:
  - JavaScript
  - Méthode
  - Non-standard
  - Prototype
  - Reference
  - Symbol
translation_of: Web/JavaScript/Reference/Global_Objects/Symbol/toSource
original_slug: Web/JavaScript/Reference/Objets_globaux/Symbol/toSource
---
{{JSRef}} {{non-standard_header}}

La méthode **`toSource()`** renvoie une chaîne de caractères représentant le code source de l'objet.

L'utilisation de cette méthode est généralement interne au moteur JavaScript.

## Syntaxe

```js
toSource()
```

### Valeur de retour

Une chaîne de caractères qui représente le code source de l'objet.

## Description

La méthode `toSource` renvoie les valeurs suivantes :

- Pour l'objet `Symbol` natif, `toSource()` renvoie la chaîne suivante, indiquant que le code source n'est pas disponible :

  ```js
    "function Symbol() {
       [native code]
    }"
    ```

- Pour les instances de `Symbol`, `toSource()` renvoie une chaîne représentant le code source :

  ```js
    "Symbol()"
    ```

## Spécifications

Cette méthode ne fait partie d'aucun standard.

## Compatibilité des navigateurs

{{Compat("javascript.builtins.Symbol.toSource")}}

## Voir aussi

- {{jsxref("Object.prototype.toSource()")}} {{Non-standard_inline()}}
