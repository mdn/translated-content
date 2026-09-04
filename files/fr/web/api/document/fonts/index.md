---
title: "Document : propriété fonts"
short-title: fonts
slug: Web/API/Document/fonts
l10n:
  sourceCommit: e1e7e2ac2cb1e40293c32c24bc0667905e9a7a04
---

{{APIRef("DOM")}}

La propriété **`fonts`** de l'interface {{DOMxRef("Document")}} retourne l'interface {{DOMxRef("FontFaceSet")}} du document.

Cette fonctionnalité fait partie de [l'API de chargement des polices CSS](/fr/docs/Web/API/CSS_Font_Loading_API).

## Valeur

La valeur retournée est l'interface {{DOMxRef("FontFaceSet")}} du document.
L'interface `FontFaceSet` est utile pour charger de nouvelles polices, vérifier l'état des polices précédemment chargées, etc.

## Exemples

### Effectuer une opération après le chargement des polices

```js
document.fonts.ready.then((fontFaceSet) => {
  // Toute opération qui doit être effectuée uniquement après que toutes
  // les polices utilisées ont terminé leur chargement peut être placée
  // ici.
  const fontFaces = [...fontFaceSet];
  console.log(fontFaces);
  // certaines polices peuvent encore être non chargées si elles ne sont
  // pas utilisées sur le site
  console.log(fontFaces.map((f) => f.status));
});
```

La promesse se résout lorsque les opérations de chargement et de mise en page de toutes les polices utilisées sont terminées. L'ensemble des polices utilisées peut être différent de l'ensemble des polices _déclarées_, par exemple, si des polices optionnelles (c'est-à-dire des polices déclarées avec `font-display: optional`) n'ont pas pu être chargées à temps.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'interface {{DOMxRef("FontFaceSet")}}
- L'interface {{DOMxRef("FontFace")}}
