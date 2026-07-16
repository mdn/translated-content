---
title: "Error : propriété columnNumber"
short-title: columnNumber
slug: Web/JavaScript/Reference/Global_Objects/Error/columnNumber
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

{{Non-standard_Header}}

La propriété **`columnNumber`** d'une instance de {{JSxRef("Error")}} contient le numéro de la colonne, dans la ligne du fichier qui a déclenché l'erreur.

## Valeur

Un entier positif.

{{js_property_attributes(1, 0, 1)}}

## Exemples

### Utiliser la propriété `columnNumber`

```js
try {
  throw new Error("Ne peut pas analyser l'entrée");
} catch (err) {
  console.log(err.columnNumber); // 9
}
```

## Spécifications

Ne fait partie d'aucune spécification.

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{JSxRef("Error.prototype.stack")}} {{Non-standard_Inline}}
- La propriété {{JSxRef("Error.prototype.lineNumber")}} {{Non-standard_Inline}}
- La propriété {{JSxRef("Error.prototype.fileName")}} {{Non-standard_Inline}}
