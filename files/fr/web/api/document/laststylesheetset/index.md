---
title: "Document : propriété lastStyleSheetSet"
short-title: lastStyleSheetSet
slug: Web/API/Document/lastStyleSheetSet
l10n:
  sourceCommit: be8f7f155a48e11b30c240f8731afb1845f85378
---

{{APIRef("DOM")}}{{Non-standard_Header}}{{Deprecated_Header}}

La propriété **`lastStyleSheetSet`** de l'interface {{DOMxRef("Document")}} retourne le dernier jeu de feuilles de styles activé. La valeur de cette propriété change chaque fois que la propriété {{DOMxRef("document.selectedStyleSheetSet")}} est modifiée.

## Valeur

Le jeu de feuilles de styles qui a été défini le plus récemment. Si le jeu de feuilles de styles en cours n'a pas été modifié en définissant {{DOMxRef("document.selectedStyleSheetSet")}}, la valeur retournée est `null`.

> [!NOTE]
> Cette valeur ne change pas lorsque {{DOMxRef("document.enableStyleSheetsForSet()")}} est appelée.

## Exemples

```js
let lastSheetSet = document.lastStyleSheetSet;

if (!lastSheetSet) {
  lastSheetSet = "Le jeu de feuilles de styles n'a pas encore été modifié";
} else {
  console.log(`Le dernier jeu de feuilles de styles est : ${lastSheetSet}`);
}
```

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{DOMxRef("document.preferredStyleSheetSet")}}
- La propriété {{DOMxRef("document.selectedStyleSheetSet")}}
- La propriété {{DOMxRef("document.styleSheetSets")}}
- La méthode {{DOMxRef("document.enableStyleSheetsForSet()")}}
