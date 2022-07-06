---
title: Date.prototype.toSource()
slug: conflicting/Web/JavaScript/Reference/Global_Objects/Date/toString
tags:
  - Date
  - JavaScript
  - Méthode
  - Prototype
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Date/toSource
original_slug: Web/JavaScript/Reference/Global_Objects/Date/toSource
---
{{JSRef}} {{Non-standard_header}}

La méthode **`toSource()`** renvoie une chaîne de caractères représentant le code source de l'objet.

## Syntaxe

```js
dateObj.toSource()
Date.toSource()
```

### Valeur de retour

Une chaîne de caractères représentant le code source de l'objet date indiqué.

## Description

La méthode `toSource()` renvoie les valeur suivantes :

- Pour l'objet natif {{jsxref("Date")}}, `toSource()` renvoie la chaîne de caractères suivante, indiquant que le code source n'est pas disponible :

```js
function Date() {
    [native code]
}
```

- Pour les instances de {{jsxref("Date")}}, `toSource()` renvoie une chaîne de caractères représentant le code source.

Cette méthode est habituellement appelée en interne par le moteur JavaScript et non explicitement dans le code d'un script.

## Spécifications

Ne fait partie d'aucune spécification. Implémentée dans JavaScript 1.3.

## Compatibilité des navigateurs

{{Compat("javascript.builtins.Date.toSource")}}

## Voir aussi

- {{jsxref("Object.prototype.toSource()")}}
