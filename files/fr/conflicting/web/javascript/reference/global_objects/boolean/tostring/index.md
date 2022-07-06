---
title: Boolean.prototype.toSource()
slug: conflicting/Web/JavaScript/Reference/Global_Objects/Boolean/toString
tags:
  - Boolean
  - JavaScript
  - Méthode
  - Non-standard
  - Prototype
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Boolean/toSource
original_slug: Web/JavaScript/Reference/Global_Objects/Boolean/toSource
---
{{JSRef}} {{Non-standard_header}}

La méthode **`toSource()`** renvoie une chaine de caractères représentant le code source de l'objet.

## Syntaxe

```js
booleanObj.toSource()
Boolean.toSource()
```

### Valeur de retour

Une chaîne de caractères représentant le code source de l'objet.

## Description

La méthode `toSource` renvoie les valeurs suivantes :

- Pour l'objet natif {{jsxref("Boolean")}} object, `toSource` renvoie la chaîne de caractères suivantes qui indique que le code source n'est pas disponible :

  ```js
    function Boolean() {
        [native code]
    }
    ```

- Pour les instances de {{jsxref("Boolean")}}, `toSource` renvoie une chaîne explicitant le code source de l'objet.

Cette méthode est généralement utilisée de façon interne par le moteur JavaScript et n'est pas appelée explicitement dans des scripts.

## Spécifications

Ne fait partie d'aucun standard. Implémentée avec JavaScript 1.3.

## Compatibilité des navigateurs

{{Compat("javascript.builtins.Boolean.toSource")}}

## Voir aussi

- {{jsxref("Object.prototype.toSource()")}} {{non-standard_inline}}
