---
title: RegExp.prototype.toString()
slug: Web/JavaScript/Reference/Global_Objects/RegExp/toString
tags:
  - JavaScript
  - Méthode
  - Prototype
  - Reference
  - RegExp
translation_of: Web/JavaScript/Reference/Global_Objects/RegExp/toString
original_slug: Web/JavaScript/Reference/Objets_globaux/RegExp/toString
---
{{JSRef}}

La méthode **`toString()`** renvoie une chaîne de caractères représentant l'expression rationnelle.

{{EmbedInteractiveExample("pages/js/regexp-prototype-tostring.html", "taller")}}

## Syntaxe

```js
regexObj.toString();
```

### Valeur de retour

Une chaîne de caractères représentant l'expression rationnelle appelante.

## Description

L'objet {{jsxref("RegExp")}} surcharge la méthode `toString` de l'objet {{jsxref("Object")}}. Il n'hérite donc pas de {{jsxref("Object.prototype.toString()")}}. Pour les objets `RegExp`, la méthode `toString()` renvoie une représentation de l'expression rationnelle sous la forme d'une chaîne de caractères.

## Exemples

### Utiliser `toString()`

L'exemple qui suit affiche la chaîne correspondant à la valeur de l'objet {{jsxref("Global_Objects/RegExp", "RegExp")}} :

```js
var maRegExp = new RegExp("a+b+c");
console.log(maRegExp.toString());  // affiche "/a+b+c/"

var toto = new RegExp("truc", "g");
console.log(toto.toString());      // affiche "/truc/g"
```

### Les expressions ratonnelles vides et l'échappement

À partir d'ECMAScript 5, la méthode renvoie la chaîne `"(?:)"` pour les expressions vides. De plus, les fins de lignes (telles que "\n") sont désormais échappées.

```js
new RegExp().toString(); // "(?:)"

new RegExp('\n').toString() === "/\n/";  // true avant ES5
new RegExp('\n').toString() === "/\\n/"; // true à partir d'ES5
```

## Spécifications

| Spécification                                                                                                        | État                         | Commentaires                                                                                                                                 |
| -------------------------------------------------------------------------------------------------------------------- | ---------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| {{SpecName('ES3')}}                                                                                             | {{Spec2('ES3')}}         | Définition initiale. Implémentée avec JavaScript 1.1.                                                                                        |
| {{SpecName('ES5.1', '#sec-15.9.5.2', 'RegExp.prototype.toString')}}                             | {{Spec2('ES5.1')}}     | `source` renvoie désormais "(?:)" (et non "") pour les expressions vides. La définition du comportement pour les échappements a été ajoutée. |
| {{SpecName('ES6', '#sec-regexp.prototype.tostring', 'RegExp.prototype.toString')}}         | {{Spec2('ES6')}}         |                                                                                                                                              |
| {{SpecName('ESDraft', '#sec-regexp.prototype.tostring', 'RegExp.prototype.toString')}} | {{Spec2('ESDraft')}} |                                                                                                                                              |

## Compatibilité des navigateurs

{{Compat("javascript.builtins.RegExp.toString")}}

## Voir aussi

- {{jsxref("Object.prototype.toString()")}}
