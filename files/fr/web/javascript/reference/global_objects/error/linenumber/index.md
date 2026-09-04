---
title: "Error : propriété lineNumber"
short-title: lineNumber
slug: Web/JavaScript/Reference/Global_Objects/Error/lineNumber
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

{{Non-standard_Header}}

La propriété **`lineNumber`** d'une instance de {{JSxRef("Error")}} contient le numéro de la ligne qui a déclenché l'erreur dans le fichier.

## Valeur

Un entier positif.

{{js_property_attributes(1, 0, 1)}}

## Exemples

### Utiliser la propriété `lineNumber`

```js
try {
  throw new Error("Ne peut pas lire la donnée");
} catch (err) {
  console.log(err.lineNumber); // 2
}
```

### Alternative en utilisant l'évènement `error`

```js
window.addEventListener("error", (e) => {
  console.log(e.lineNumber); //5
});
const e = new Error("Ne peut pas lire la donnée");
throw e;
```

## Spécifications

Ne fait partie d'aucune spécification.

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{JSxRef("Error.prototype.stack")}} {{Non-standard_Inline}}
- La propriété {{JSxRef("Error.prototype.columnNumber")}} {{Non-standard_Inline}}
- La propriété {{JSxRef("Error.prototype.fileName")}} {{Non-standard_Inline}}
