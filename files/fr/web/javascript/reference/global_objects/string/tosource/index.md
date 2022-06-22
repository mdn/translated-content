---
title: String.prototype.toSource()
slug: Web/JavaScript/Reference/Global_Objects/String/toSource
tags:
  - JavaScript
  - Méthode
  - Non-standard
  - Prototype
  - Reference
  - String
translation_of: Web/JavaScript/Reference/Global_Objects/String/toSource
original_slug: Web/JavaScript/Reference/Objets_globaux/String/toSource
---
{{JSRef}} {{Non-standard_header}}

La méthode **`toSource()`** permet de renvoyer une chaîne de caractères représentant le code source de l'objet.

## Syntaxe

```js
String.toSource()
str.toSource()
```

### Valeur de retour

Une chaîne de caractères qui représente le code source de la chaîne de caractères appelante.

## Description

La méthode `toSource()` renvoie les valeurs suivantes :

- Pour l'objet natif {{jsxref("String")}}, `toSource()` renvoie la chaîne de caractère suivante, indiquant que le code source n'est pas disponible :

  ```js
    function String() {
        [native code]
    }
    ```

- Pour les instances de {{jsxref("String")}} ou les littéraux de chaînes de caractères, `toSource()` renvoie une chaîne de caractère représentant le code source.

Généralement, cette méthode est appelée par du code interne au moteur JavaScript et n'est pas trouvée dans du code JavaScript externe.

## Spécifications

Cette méthode ne fait partie d'aucun standard. Elle a été implémentée avec JavaScript 1.3.

## Compatibilité des navigateurs

{{Compat("javascript.builtins.String.toSource")}}

## Voir aussi

- {{jsxref("Object.prototype.toSource()")}}
