---
title: RegExp.prototype.ignoreCase
slug: Web/JavaScript/Reference/Global_Objects/RegExp/ignoreCase
tags:
  - JavaScript
  - Propriété
  - Prototype
  - Reference
  - RegExp
translation_of: Web/JavaScript/Reference/Global_Objects/RegExp/ignoreCase
original_slug: Web/JavaScript/Reference/Objets_globaux/RegExp/ignoreCase
---
{{JSRef}}

La propriété **`ignoreCase`** indique si le drapeau (_flag_) "`i`" est utilisé ou non pour cette expression rationnelle. `ignoreCase` est une propriété accessible en lecture seule d'une instance d'expression rationnelle donnée.

{{EmbedInteractiveExample("pages/js/regexp-prototype-ignorecase.html")}}{{js_property_attributes(0,0,1)}}

## Description

La valeur de `ignoreCase` est un booléen. Elle vaut `true` si le flag "`i`" a été utilisé et `false` sinon. Le drapeau "`i`" indique si la recherche de correspondances doit être sensible à la casse ou non.

Cette propriété ne peut pas être modifiée directement.

## Exemples

```js
var regex = new RegExp("toto", "i");

console.log(regex.ignoreCase); // true
```

## Spécifications

| Spécification                                                                                                                | Statut                       | Commentaires                                                                                                                                                                                        |
| ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| {{SpecName('ES3')}}                                                                                                     | {{Spec2('ES3')}}         | Définition initiale. Implémentée avec JavaScript 1.2. Avec JavaScript 1.5 : `ignoreCase` est une propriété d'une instance de {{jsxref("RegExp")}} et pas une propriété de l'objet `RegExp`. |
| {{SpecName('ES5.1', '#sec-15.10.7.3', 'RegExp.prototype.ignoreCase')}}                                 | {{Spec2('ES5.1')}}     |                                                                                                                                                                                                     |
| {{SpecName('ES6', '#sec-get-regexp.prototype.ignorecase', 'RegExp.prototype.ignoreCase')}}     | {{Spec2('ES6')}}         | `ignoreCase` est désormais une propriété du prototype sous forme d'accesseur plutôt qu'une propriété directe de l'instance.                                                                         |
| {{SpecName('ESDraft', '#sec-get-regexp.prototype.ignorecase', 'RegExp.prototype.ignoreCase')}} | {{Spec2('ESDraft')}} |                                                                                                                                                                                                     |

## Compatibilité des navigateurs

{{Compat("javascript.builtins.RegExp.ignoreCase")}}

## Voir aussi

- {{jsxref("RegExp.prototype.global")}}
- {{jsxref("RegExp.prototype.lastIndex")}}
- {{jsxref("RegExp.prototype.multiline")}}
- {{jsxref("RegExp.prototype.source")}}
- {{jsxref("RegExp.prototype.sticky")}}
