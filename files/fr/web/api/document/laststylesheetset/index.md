---
title: Document.lastStyleSheetSet
slug: Web/API/Document/lastStyleSheetSet
---

{{ APIRef("DOM") }}

Renvoie le dernier jeu de feuilles de styles activé ; cette valeur de la propriété change chaque fois que la propriété {{ domxref("document.selectedStyleSheetSet") }} est modifiée.

## Syntaxe

```js
lastStyleSheetSet = document.lastStyleSheetSet;
```

En retour, `lastStyleSheetSet` indique le jeu de feuilles de styles qui a été défini le plus récemment. Si le jeu de feuilles de style en cours n'a pas été modifié en définissant {{ domxref("document.selectedStyleSheetSet") }}, la valeur retournée est `null`.

> **Note :** Cette valeur ne doit pas changer lorsque {{ domxref("document.enableStyleSheetsForSet()") }} est appelé.

## Exemple

```js
var lastSheetSet = document.lastStyleSheetSet;
if (!lastSheetSet) {
  lastSheetSet = "Sheet not yet changed";
}
console.log("The last sheet set is: " + lastSheetSet);
```

## Voir aussi

- {{ domxref("document.preferredStyleSheetSet") }}
- {{ domxref("document.selectedStyleSheetSet") }}
- {{ domxref("document.styleSheetSets") }}
- {{ domxref("document.enableStyleSheetsForSet()") }}

## Spécifications

- [HTML5: Alternate Style Sheets](http://www.whatwg.org/specs/web-apps/current-work/#alternate-style-sheets)
