---
title: Error.prototype.lineNumber
slug: Web/JavaScript/Reference/Global_Objects/Error/lineNumber
tags:
  - Error
  - JavaScript
  - Non-standard
  - Propriété
  - Prototype
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Error/lineNumber
original_slug: Web/JavaScript/Reference/Objets_globaux/Error/lineNumber
---
{{JSRef}} {{non-standard_header}}

La propriété **`lineNumber`** contient le numéro de la ligne qui a déclenché l'erreur dans le fichier.

## Exemples

### Utiliser `lineNumber`

```js
var e = new Error("Ne peut pas lire la donnée");
throw e;
console.log(e.lineNumber) // 2
```

### Alternative en utilisant l'événement `error`

```js
window.addEventListener("error", function (e) {
 console.log(e.lineNumber); //5
});
var e = new Error('Ne peut pas lire la donnée');
throw e;
```

## Spécifications

Ne fait partie d'aucune spécification. Non standard.

## Compatibilité des navigateurs

{{Compat("javascript.builtins.Error.lineNumber")}}

## Voir aussi

- {{jsxref("Error.prototype.stack")}} {{non-standard_inline}}
- {{jsxref("Error.prototype.columnNumber")}} {{non-standard_inline}}
- {{jsxref("Error.prototype.fileName")}} {{non-standard_inline}}
