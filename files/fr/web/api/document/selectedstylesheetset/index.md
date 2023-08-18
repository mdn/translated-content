---
title: Document.selectedStyleSheetSet
slug: Web/API/Document/selectedStyleSheetSet
---

{{ APIRef("DOM") }}

Indique le nom du jeu de feuilles de styles actuellement utilisé.

## Syntaxe

```js
currentStyleSheetSet = document.selectedStyleSheetSet;

document.selectedStyleSheet = newStyleSheetSet;
```

En retour, `currentStyleSheetSet` indique le nom du jeu de feuilles de styles en cours d'utilisation. Vous pouvez aussi définir celui-ci en utilisant cette propriété.

La définition de la valeur de cette propriété équivaut à appeler {{ domxref("document.enableStyleSheetsForSet()") }} avec la valeur de `currentStyleSheetSet`, puis de définir la valeur de `lastStyleSheetSet` sur cette valeur.

> **Note :** Cette valeur d'attribut est directe : sa modification affectera la valeur de l'attribut.

## Exemple

```js
console.log("Current style sheet set: " + document.selectedStyleSheetSet);

document.selectedStyleSheetSet = "Some other style sheet";
```

> **Note :** Cet exemple vous aidera à comprendre la différence de comportement entre la définition de la valeur de `selectedStyleSheetSet` et l'appel de {{ domxref("document.enableStyleSheetsForSet()") }}.

## Voir aussi

- {{ domxref("document.lastStyleSheetSet") }}
- {{ domxref("document.preferredStyleSheetSet") }}
- {{ domxref("document.styleSheetSets") }}
- {{ domxref("document.enableStyleSheetsForSet()") }}

## Spécifications

- [HTML5: Alternate Style Sheets](http://www.whatwg.org/specs/web-apps/current-work/#alternate-style-sheets)
