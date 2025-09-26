---
title: RegExp.prototype.source
slug: Web/JavaScript/Reference/Global_Objects/RegExp/source
---

{{JSRef}}

La propriété **`source`** renvoie une chaîne de caractères qui contient le texte du motif à rechercher (_pattern_), sans les barres obliques (_slashes_). C'est une propriété en lecture seule liée à l'instance. **`source`** ne contient aucun des options ou drapeaux (_flags_) (tels que "g", "i" ou "m") de l'expression rationnelle.

{{InteractiveExample("JavaScript Demo: RegExp.prototype.source")}}

```js interactive-example
const regex1 = /fooBar/gi;

console.log(regex1.source);
// Expected output: "fooBar"

console.log(new RegExp().source);
// Expected output: "(?:)"

console.log(new RegExp("\n").source === "\\n");
// Expected output: true (starting with ES5)
// Due to escaping
```

{{js_property_attributes(0,0,1)}}

## Exemples

### Utiliser `source`

```js
var regex = /totoMachin/gi;

console.log(regex.source); // "totoMachin"
```

### Les expressions ratonnelles vides et l'échappement

À partir d'ECMAScript 5, la propriété `source` ne renvoie plus une chaîne vide pour les expressions rationnelles vides. Elle renvoie la chaîne `"(?:)"`. De plus, les fins de lignes (telles que "\n") sont désormais échappées.

```js
new RegExp().source; // "(?:)"

new RegExp("\n").source === "\n"; // true avant ES5
new RegExp("\n").source === "\\n"; // true à partir d'ES5
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{jsxref("RegExp.prototype.flags")}}
