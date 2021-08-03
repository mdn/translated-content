---
title: Number.prototype.valueOf()
slug: Web/JavaScript/Reference/Global_Objects/Number/valueOf
tags:
  - JavaScript
  - Méthode
  - Number
  - Prototype
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Number/valueOf
original_slug: Web/JavaScript/Reference/Objets_globaux/Number/valueOf
---
{{JSRef}}

La méthode **`valueOf()`** renvoie la valeur primitive correspondant à celle représentée par l'objet {{jsxref("Number")}}.

{{EmbedInteractiveExample("pages/js/number-valueof.html")}}

## Syntaxe

    objetNumber.valueOf()

### Valeur de retour

Un nombre qui représente la valeur primitive de l'objet {{jsxref("Number")}}.

## Description

Cette méthode est généralement utilisée de façon interne au moteur JavaScript et n'est pas utilisée de façon explicite dans du code JavaScript.

## Exemples

### Utiliser `valueOf`

```js
var numObj = new Number(10);
console.log(typeof numObj); // object

var num = numObj.valueOf();
console.log(num);           // 10
console.log(typeof num);    // number
```

## Spécifications

| Spécification                                                                                                    | État                         | Commentaires                                          |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------- | ----------------------------------------------------- |
| {{SpecName('ES1')}}                                                                                         | {{Spec2('ES1')}}         | Définition initiale. Implémentée avec JavaScript 1.1. |
| {{SpecName('ES5.1', '#sec-15.7.4.4', 'Number.prototype.valueOf')}}                         | {{Spec2('ES5.1')}}     |                                                       |
| {{SpecName('ES6', '#sec-number.prototype.valueof', 'Number.prototype.valueOf')}}     | {{Spec2('ES6')}}         |                                                       |
| {{SpecName('ESDraft', '#sec-number.prototype.valueof', 'Number.prototype.valueOf')}} | {{Spec2('ESDraft')}} |                                                       |

## Compatibilité des navigateurs

{{Compat("javascript.builtins.Number.valueOf")}}

## Voir aussi

- {{jsxref("Number.prototype.toSource()")}}
