---
title: String.prototype.toLowerCase()
slug: Web/JavaScript/Reference/Global_Objects/String/toLowerCase
tags:
  - JavaScript
  - Méthode
  - Prototype
  - Reference
  - String
translation_of: Web/JavaScript/Reference/Global_Objects/String/toLowerCase
original_slug: Web/JavaScript/Reference/Objets_globaux/String/toLowerCase
---
{{JSRef}}

La méthode **`toLowerCase()`** retourne la chaîne de caractères courante en minuscules.

{{EmbedInteractiveExample("pages/js/string-tolowercase.html")}}

## Syntaxe

    str.toLowerCase()

### Valeur de retour

Une nouvelle chaîne de caractères qui est obtenue en passant la chaîne appelante en minuscules.

## Description

La méthode `toLowerCase()` renvoie la valeur de la chaîne convertie en minuscules. `toLowerCase()` ne modifie pas la valeur de la chaîne courante.

## Exemples

```js
console.log( "ALPHABET".toLowerCase() ); // "alphabet"
```

## Spécifications

| Spécification                                                                                                                | État                         | Commentaires                                          |
| ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------- | ----------------------------------------------------- |
| {{SpecName('ES1')}}                                                                                                     | {{Spec2('ES1')}}         | Définition initiale. Implémentée avec JavaScript 1.0. |
| {{SpecName('ES5.1', '#sec-15.5.4.16', 'String.prototype.toLowerCase')}}                             | {{Spec2('ES5.1')}}     |                                                       |
| {{SpecName('ES6', '#sec-string.prototype.tolowercase', 'String.prototype.toLowerCase')}}         | {{Spec2('ES6')}}         |                                                       |
| {{SpecName('ESDraft', '#sec-string.prototype.tolowercase', 'String.prototype.toLowerCase')}} | {{Spec2('ESDraft')}} |                                                       |

## Compatibilité des navigateurs

{{Compat("javascript.builtins.String.toLowerCase")}}

## Voir aussi

- {{jsxref("String.prototype.toLocaleLowerCase()")}}
- {{jsxref("String.prototype.toLocaleUpperCase()")}}
- {{jsxref("String.prototype.toUpperCase()")}}
