---
title: Document.styleSheetSets
slug: Web/API/Document/styleSheetSets
tags:
  - API
  - DOM
  - Document
  - Feuilles de styles
  - Propriétés
translation_of: Web/API/Document/styleSheetSets
---
{{APIRef("DOM")}}{{gecko_minversion_header("1.9")}}

Renvoie une liste active de tous les jeux de feuilles de styles actuellement disponibles.

## Syntaxe

    sets = document.styleSheetSets

En retour, `sets` est une liste de jeux de feuilles de styles disponibles.

## Exemple

Étant donné un élément {{HTMLElement("ul")}} (liste) avec l'ID "sheetList", vous pouvez le remplir avec tous les noms de tous les jeux de feuilles de styles disponibles avec un code comme celui-ci :

```js
var list = document.getElementById("sheetList");
var sheets = document.styleSheetSets;

list.innerHTML = "";

for (var i = 0; i < sheets.length; i++) {
  var item = document.createElement("li");

  item.innerHTML = sheets[i];
  list.appendChild(item);
}
```

## Notes

La liste des jeux de feuilles de styles disponibles est construite par énumération de toutes les feuilles de styles disponibles pour le document, dans l'ordre dans lequel elles sont répertoriées dans l'attribut {{domxref("document.styleSheets")}}, en ajoutant le `title` (_titre_) de chacune de celles en ayant un. Les doublons sont supprimés de la liste (en utilisant une comparaison sensible à la casse).

## Spécifications

- [HTML5 : Alternate Style Sheets](http://www.whatwg.org/specs/web-apps/current-work/#alternate-style-sheets)

## Voir aussi

- {{domxref("Stylesheet")}}
- {{domxref("document.styleSheets")}}
- {{domxref("document.lastStyleSheetSet")}}
- {{domxref("document.preferredStyleSheetSet")}}
- {{domxref("document.selectedStyleSheetSet")}}
- {{domxref("document.enableStyleSheetsForSet()")}}
