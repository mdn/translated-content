---
title: Document.preferredStyleSheetSet
slug: Web/API/Document/preferredStyleSheetSet
---

{{APIRef("DOM")}}

Retourne la feuille de style préférée, telle que définie par l'auteur de la page.

## Syntaxe

```js
preferredStyleSheetSet = document.preferredStyleSheetSet;
```

Au retour, `preferredStyleSheetSet` indique la feuille de style préférée par l'auteur. Ceci est déterminé par l'ordre des déclarations des feuilles de style et par l'entête HTTP intitulé `Default-Style`.

En l'absence de feuille de style préférée, une chaine vide ("") est retournée.

## Exemple

```js
if (document.preferredStyleSheetSet) {
  console.log(
    "La feuille de style préférée est : " + document.preferredStyleSheetSet,
  );
} else {
  console.log("Il n'y a pas de feuille de style préférée.");
}
```

## Spécifications

- [HTML5: Alternate Style Sheets](https://www.whatwg.org/specs/web-apps/current-work/#alternate-style-sheets)

## Voir aussi

- {{domxref("document.lastStyleSheetSet")}}
- {{domxref("document.selectedStyleSheetSet")}}
- {{domxref("document.styleSheetSets")}}
- {{domxref("document.enableStyleSheetsForSet()")}}
