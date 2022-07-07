---
title: Error.prototype.fileName
slug: Web/JavaScript/Reference/Global_Objects/Error/fileName
tags:
  - Error
  - JavaScript
  - Non-standard
  - Propriété
  - Prototype
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Error/fileName
original_slug: Web/JavaScript/Reference/Objets_globaux/Error/fileName
---
{{JSRef}} {{non-standard_header}}

La propriété **`fileName`** contient le chemin vers le fichier qui a déclenché l'erreur.

## Description

Cette propriété non-standard contient le chemin vers le fichier qui a déclenché cette erreur. Si elle est appelée depuis un débugger (les outils de développement de Firefox par exemple), "debugger eval code" sera renvoyé.

## Exemples

### Utiliser `fileName`

```js
var e = new Error("Ne peut pas lire la donnée");
throw e;
// e.fileName peut ressembler à "file:///C:/exemple.html"
```

## Spécifications

Ne fait partie d'aucune spécification. Non standard.

## Compatibilité des navigateurs

{{Compat("javascript.builtins.Error.fileName")}}

## Voir aussi

- {{jsxref("Error.prototype.stack")}} {{non-standard_inline}}
- {{jsxref("Error.prototype.columnNumber")}} {{non-standard_inline}}
- {{jsxref("Error.prototype.lineNumber")}} {{non-standard_inline}}
