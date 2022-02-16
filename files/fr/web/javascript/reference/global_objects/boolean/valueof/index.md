---
title: Boolean.prototype.valueOf()
slug: Web/JavaScript/Reference/Global_Objects/Boolean/valueOf
tags:
  - Boolean
  - JavaScript
  - Méthode
  - Prototype
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Boolean/valueOf
original_slug: Web/JavaScript/Reference/Objets_globaux/Boolean/valueOf
---
{{JSRef}}

La méthode **`valueOf()`** renvoie la valeur primitive de l'objet {{jsxref("Boolean")}}.

{{EmbedInteractiveExample("pages/js/boolean-valueof.html")}}

## Syntaxe

    bool.valueOf()

### Valeur de retour

La valeur primitive associée à l'objet {{jsxref("Boolean")}}.

## Description

La méthode `valueOf()` de {{jsxref("Boolean")}} renvoie la valeur primitive d'un objet `Boolean`, ou d'un littéral booléen.

Cette méthode est généralement utilisée de façon interne pas le moteur JavaScript et n'est pas utilisée explicitement dans les scripts.

## Exemples

### Utiliser `valueOf()`

```js
var x = new Boolean();
var maVar = x.valueOf()      // assigne false à maVar
```

## Spécifications

| Spécification                                                                                                        | État                         | Commentaires                                          |
| -------------------------------------------------------------------------------------------------------------------- | ---------------------------- | ----------------------------------------------------- |
| {{SpecName('ES1')}}                                                                                             | {{Spec2('ES1')}}         | Définition initiale. Implémentée avec JavaScript 1.1. |
| {{SpecName('ES5.1', '#sec-15.6.4.3', 'Boolean.prototype.valueOf')}}                             | {{Spec2('ES5.1')}}     |                                                       |
| {{SpecName('ES6', '#sec-boolean.prototype.valueof', 'Boolean.prototype.valueOf')}}         | {{Spec2('ES6')}}         |                                                       |
| {{SpecName('ESDraft', '#sec-boolean.prototype.valueof', 'Boolean.prototype.valueOf')}} | {{Spec2('ESDraft')}} |                                                       |

## Compatibilité des navigateurs

{{Compat("javascript.builtins.Boolean.valueOf")}}

## Voir aussi

- {{jsxref("Object.prototype.valueOf()")}}
