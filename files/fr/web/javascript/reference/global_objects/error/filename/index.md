---
title: "Error : propriété fileName"
short-title: fileName
slug: Web/JavaScript/Reference/Global_Objects/Error/fileName
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

{{Non-standard_Header}}

La propriété **`fileName`** d'une instance de {{JSxRef("Error")}} contient le chemin vers le fichier qui a déclenché l'erreur.

## Valeur

Une chaîne de caractères.

{{js_property_attributes(1, 0, 1)}}

## Description

Cette propriété non standard contient le chemin vers le fichier qui a déclenché cette erreur. Si elle est consultée depuis un contexte de débogage, par exemple les outils de développement de Firefox, la valeur «&nbsp;debugger eval code&nbsp;» est retournée.

## Exemples

### Utiliser la propriété `fileName`

```js
const e = new Error("Ne peut pas lire la donnée");
throw e;
// e.fileName peut ressembler à "file:///C:/exemple.html"
```

## Spécifications

Ne fait partie d'aucune spécification.

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{JSxRef("Error.prototype.stack")}} {{Non-standard_Inline}}
- La propriété {{JSxRef("Error.prototype.columnNumber")}} {{Non-standard_Inline}}
- La propriété {{JSxRef("Error.prototype.lineNumber")}} {{Non-standard_Inline}}
