---
title: "Document : propriété selectedStyleSheetSet"
short-title: selectedStyleSheetSet
slug: Web/API/Document/selectedStyleSheetSet
l10n:
  sourceCommit: be8f7f155a48e11b30c240f8731afb1845f85378
---

{{APIRef("DOM")}}{{Non-standard_Header}}{{Deprecated_Header}}

La propriété **`selectedStyleSheetSet`** de l'interface {{DOMxRef("Document")}} indique le nom du jeu de feuilles de styles actuellement utilisé.

## Value

Le nom du jeu de feuilles de styles actuellement utilisé. Vous pouvez également définir le jeu de feuilles de styles actuel en utilisant cette propriété.

La définition de la valeur de cette propriété équivaut à appeler {{DOMxRef("document.enableStyleSheetsForSet()")}} avec la valeur de `currentStyleSheetSet`, puis de définir la valeur de `lastStyleSheetSet` sur cette valeur.

> [!NOTE]
> La valeur de cet attribut est dynamique&nbsp;; modifier directement l'attribut `disabled` des feuilles de style affectera la valeur de cet attribut.

## Exemples

```js
console.log(
  `Le jeu de feuilles de styles actuel : ${document.selectedStyleSheetSet}`,
);

document.selectedStyleSheetSet = "D'autres feuilles de style";
```

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{DOMxRef("document.lastStyleSheetSet")}}
- La propriété {{DOMxRef("document.preferredStyleSheetSet")}}
- La propriété {{DOMxRef("document.styleSheetSets")}}
- La méthode {{DOMxRef("document.enableStyleSheetsForSet()")}}
