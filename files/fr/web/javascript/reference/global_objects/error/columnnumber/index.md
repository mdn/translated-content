---
title: Error.prototype.columnNumber
slug: Web/JavaScript/Reference/Global_Objects/Error/columnNumber
tags:
  - Error
  - JavaScript
  - Non-standard
  - Propriété
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Error/columnNumber
original_slug: Web/JavaScript/Reference/Objets_globaux/Error/columnNumber
---
{{JSRef}} {{non-standard_header}}

La propriété **`columnNumber`** contient le numéro de la colonne, dans la ligne du fichier qui a déclenché l'erreur.

## Exemples

### Utiliser de `columnNumber`

```js
var e = new Error("Ne peut pas lire la donnée");
throw e;
console.log(e.columnNumber) // 0
```

## Spécifications

Ne fait partie d'aucune spécification. Non standard.

## Compatibilité des navigateurs

{{Compat("javascript.builtins.Error.columnNumber")}}

## Voir aussi

- {{jsxref("Error.prototype.stack")}} {{non-standard_inline}}
- {{jsxref("Error.prototype.lineNumber")}} {{non-standard_inline}}
- {{jsxref("Error.prototype.fileName")}} {{non-standard_inline}}
