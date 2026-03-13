---
title: "Document : propriété preferredStyleSheetSet"
short-title: preferredStyleSheetSet
slug: Web/API/Document/preferredStyleSheetSet
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("DOM")}}{{Non-standard_Header}}{{Deprecated_Header}}

La propriété **`preferredStyleSheetSet`** de l'interface {{DOMxRef("Document")}} retourne l'ensemble de feuilles de style préféré tel que défini par l'auteur·ice de la page.

## Valeur

L'ensemble de feuilles de style préféré par l'auteur·ice. Ceci est déterminé par l'ordre des déclarations des feuilles de style et par l'entête HTTP intitulé `Default-Style`.

Si aucun ensemble de feuilles de style préféré n'est défini par l'auteur·ice, une chaîne de caractères vide (`""`) est retournée.

## Exemples

```js
if (document.preferredStyleSheetSet) {
  console.log(
    `L'ensemble de feuilles de style préféré est : ${document.preferredStyleSheetSet}`,
  );
} else {
  console.log("Il n'y a pas de feuille de style préférée.");
}
```

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{DOMxRef("document.lastStyleSheetSet")}}
- La propriété {{DOMxRef("document.selectedStyleSheetSet")}}
- La propriété {{DOMxRef("document.styleSheetSets")}}
- La méthode {{DOMxRef("document.enableStyleSheetsForSet()")}}
