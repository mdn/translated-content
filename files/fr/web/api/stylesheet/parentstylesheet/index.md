---
title: StyleSheet.parentStyleSheet
slug: Web/API/StyleSheet/parentStyleSheet
translation_of: Web/API/StyleSheet/parentStyleSheet
---
{{APIRef ("CSSOM")}}

Renvoie la feuille de style qui inclut celle-ci, le cas échéant.

## Syntaxe

    ObjRef = stylesheet.parentStyleSheet

## Exemple

```js
// trouve la feuille de style de niveau supérieur
If (stylesheet.parentStyleSheet) {
    Feuille = stylesheet.parentStyleSheet;
} autre {
    Feuille = feuille de style;
}
```

## Remarques

Cette propriété renvoie NULL est la feuille de style actuelle est une feuille de style de haut niveau ou si l'inclusion de la feuille de style n'est pas prise en charge.

## spécification

- [ParentStyleSheet](http://www.w3.org/TR/2000/REC-DOM-Level-2-Style-20001113/stylesheets.html#StyleSheets-StyleSheet-parentStyleSheet)
