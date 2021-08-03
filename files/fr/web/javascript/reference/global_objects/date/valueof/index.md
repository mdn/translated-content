---
title: Date.prototype.valueOf()
slug: Web/JavaScript/Reference/Global_Objects/Date/valueOf
tags:
  - Date
  - JavaScript
  - Méthode
  - Prototype
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Date/valueOf
original_slug: Web/JavaScript/Reference/Objets_globaux/Date/valueOF
---
{{JSRef}}

La méthode **`valueOf()`** renvoie la valeur primitive d'un objet {{jsxref("Date")}}.

{{EmbedInteractiveExample("pages/js/date-valueof.html")}}

## Syntaxe

    date.valueOf()

### Valeur de retour

Le nombre de millisecondes écoulées entre le premier janvier 1970, minuit UTC et la date indiquée.

## Description

La méthode `valueOf()` renvoie la valeur primitive d'un objet `Date` sous forme d'un nombre. Ce nombre correspond au nombre de millisecondes écoulées depuis le 1 janvier 1970 00h00 GMT.

D'un point de vue fonctionnel, cette méthode est équivalente à {{jsxref("Date.prototype.getTime()")}}.

Cette méthode est souvent appelée en interne par le moteur JavaScript et n'est pas utilisée de façon explicite dans des scripts.

## Exemples

### Utiliser `valueOf()`

```js
var x = new Date(56, 6, 17);
var maVar = x.valueOf();      // maVar vaut -424713600000
```

## Spécifications

| Spécification                                                                                                | État                         | Commentaires                                          |
| ------------------------------------------------------------------------------------------------------------ | ---------------------------- | ----------------------------------------------------- |
| {{SpecName('ES1')}}                                                                                     | {{Spec2('ES1')}}         | Définition initiale. Implémentée avec JavaScript 1.1. |
| {{SpecName('ES5.1', '#sec-15.9.5.8', 'Date.prototype.valueOf')}}                         | {{Spec2('ES5.1')}}     |                                                       |
| {{SpecName('ES6', '#sec-date.prototype.valueof', 'Date.prototype.valueOf')}}         | {{Spec2('ES6')}}         |                                                       |
| {{SpecName('ESDraft', '#sec-date.prototype.valueof', 'Date.prototype.valueOf')}} | {{Spec2('ESDraft')}} |                                                       |

## Compatibilité des navigateurs

{{Compat("javascript.builtins.Date.valueOf")}}

## Voir aussi

- {{jsxref("Object.prototype.valueOf()")}}
- {{jsxref("Date.prototype.getTime()")}}
