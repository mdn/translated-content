---
title: RegExp.prototype.source
slug: Web/JavaScript/Reference/Global_Objects/RegExp/source
tags:
  - JavaScript
  - Propriété
  - Prototype
  - Reference
  - RegExp
translation_of: Web/JavaScript/Reference/Global_Objects/RegExp/source
original_slug: Web/JavaScript/Reference/Objets_globaux/RegExp/source
---
{{JSRef}}

La propriété **`source`** renvoie une chaîne de caractères qui contient le texte du motif à rechercher (_pattern_), sans les barres obliques (_slashes_). C'est une propriété en lecture seule liée à l'instance. **`source`** ne contient aucun des options ou drapeaux (_flags_) (tels que "g", "i" ou "m") de l'expression rationnelle.

{{EmbedInteractiveExample("pages/js/regexp-prototype-source.html")}}{{js_property_attributes(0,0,1)}}

## Exemples

### Utiliser `source`

```js
var regex = /totoMachin/ig;

console.log(regex.source); // "totoMachin"
```

### Les expressions ratonnelles vides et l'échappement

À partir d'ECMAScript 5, la propriété `source` ne renvoie plus une chaîne vide pour les expressions rationnelles vides. Elle renvoie la chaîne `"(?:)"`. De plus, les fins de lignes (telles que "\n") sont désormais échappées.

```js
new RegExp().source; // "(?:)"

new RegExp('\n').source === "\n";  // true avant ES5
new RegExp('\n').source === "\\n"; // true à partir d'ES5
```

## Spécifications

| Spécification                                                                                                        | État                         | Commentaires                                                                                                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | ---------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| {{SpecName('ES3')}}                                                                                             | {{Spec2('ES3')}}         | Définition initiale. Implémentée avec JavaScript 1.2. Avec JavaScript 1.5 : `source` est une propriété de l'instance de {{jsxref("RegExp")}}, ce n'est pas une propriété de l'objet `RegExp`. |
| {{SpecName('ES5.1', '#sec-15.10.7.1', 'RegExp.prototype.source')}}                             | {{Spec2('ES5.1')}}     | `source` renvoie désormais "(?:)" (et non "") pour les expressions vides. La définition du comportement pour les échappements a été ajoutée.                                                          |
| {{SpecName('ES6', '#sec-get-regexp.prototype.source', 'RegExp.prototype.source')}}         | {{Spec2('ES6')}}         | `source` est désormais un accesseur lié au prototype plutôt qu'une propriété directement rattachée à l'instance.                                                                                      |
| {{SpecName('ESDraft', '#sec-get-regexp.prototype.source', 'RegExp.prototype.source')}} | {{Spec2('ESDraft')}} |                                                                                                                                                                                                       |

## Compatibilité des navigateurs

{{Compat("javascript.builtins.RegExp.source")}}

## Voir aussi

- {{jsxref("RegExp.prototype.flags")}}
