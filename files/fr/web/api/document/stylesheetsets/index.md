---
title: "Document : propriété styleSheetSets"
short-title: styleSheetSets
slug: Web/API/Document/styleSheetSets
l10n:
  sourceCommit: 41a8b9c9832359d445d136b6d7a8a28737badc6b
---

{{APIRef("DOM")}}{{Non-standard_Header}}{{Deprecated_Header}}

La propriété en lecture seule **`styleSheetSets`** de l'interface {{DOMxRef("Document")}} retourne une liste active de tous les jeux de feuilles de styles actuellement disponibles.

## Valeur

Une liste des jeux de feuilles de styles disponibles.

## Exemples

Étant donné un élément HTML {{HTMLElement("ul")}} (liste) avec l'ID `"sheetList"`, vous pouvez le remplir avec tous les noms de tous les jeux de feuilles de styles disponibles avec un code comme celui-ci&nbsp;:

```js
const list = document.getElementById("sheetList");
const sheets = document.styleSheetSets;

list.textContent = "";

for (const sheet of sheets) {
  const item = document.createElement("li");
  item.textContent = sheet;
  list.appendChild(item);
}
```

## Notes

La liste des jeux de feuilles de styles disponibles est construite par énumération de toutes les feuilles de styles disponibles pour le document, dans l'ordre dans lequel elles sont répertoriées dans l'attribut {{DOMxRef("document.styleSheets")}}, en ajoutant le `title` (_titre_) de chacune de celles en ayant un. Les doublons sont supprimés de la liste (en utilisant une comparaison sensible à la casse).

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'interface {{DOMxRef("Stylesheet")}}
- La propriété {{DOMxRef("Document.styleSheets")}}
- La propriété {{DOMxRef("Document.lastStyleSheetSet")}}
- La propriété {{DOMxRef("Document.preferredStyleSheetSet")}}
- La propriété {{DOMxRef("Document.selectedStyleSheetSet")}}
- La méthode {{DOMxRef("Document.enableStyleSheetsForSet()")}}
