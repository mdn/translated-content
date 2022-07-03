---
title: Function.prototype.toSource()
slug: Web/JavaScript/Reference/Global_Objects/Function/toSource
tags:
  - Function
  - JavaScript
  - Méthode
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Function/toSource
original_slug: Web/JavaScript/Reference/Objets_globaux/Function/toSource
---
{{JSRef}}{{non-standard_header}}

La méthode **`toSource()`** renvoie une chaîne de caractères représentant le code source de l'objet.

## Syntaxe

```js
function.toSource();
Function.toSource();
```

### Valeur de retour

Une chaîne de caractères représentant le code source de l'objet.

## Description

La méthode `toSource()` renvoie les valeurs suivantes :

- Pour l'objet natif {{jsxref("Function")}}, `toSource()` renvoie la chaîne suivante qui indique que le code source n'est pas disponible :

  ```js
    function Function() {
        [native code]
    }
    ```

- Pour les fonctions définies dans les scripts, `toSource()` renverra la chaîne correspondant au code source JavaScript de l'objet.

  ```js
    function coucou() {
      console.log("Coucou le monde");
    }

    coucou.toSource();
    // produira la chaîne de caractères
    // "function coucou() {
    //   console.log(\"Coucou le monde\");
    // }"
    ```

De façon générale, cette méthode est utilisée en interne par le moteur JavaScript et n'est pas utilisée dans les scripts tiers. Il est possible d'utiliser cette méthode pour une aide au débogage et pouvoir examiner le contenu d'un objet.

## Spécifications

Ne fait partie d'aucune spécification. Implémentée avec JavaScript 1.3.

## Compatibilité des navigateurs

{{Compat("javascript.builtins.Function.toSource")}}

## Voir aussi

- {{jsxref("Object.prototype.toSource()")}}
