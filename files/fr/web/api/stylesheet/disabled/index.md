---
title: StyleSheet.disabled
slug: Web/API/StyleSheet/disabled
---

{{APIRef("CSSOM")}}

La **`StyleSheet.disabled`** propriété indique si la feuille de style est empêchée de demander le document. Une feuille de style peut être désactivé en réglant manuellement cette propriété `true` ou si elle est une forme inactive [feuille de style alternatif](/fr/docs/Web/CSS/Alternative_style_sheets) . Notez que `disabled == false` ne garantit pas la feuille de style est appliquée (il pourrait être supprimé du document, par exemple).

## Syntaxe

```js
bool = stylesheet.disabled;
```

## Exemple

```js
// si la feuille de style est désactivé ...
if (stylesheet.disabled) {
  // appliquer le style en ligne
}
```

## Spécification

[désactivée](http://www.w3.org/TR/2000/REC-DOM-Level-2-Style-20001113/stylesheets.html#StyleSheets-StyleSheet-disabled)
