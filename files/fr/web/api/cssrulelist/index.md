---
title: CSSRuleList
slug: Web/API/CSSRuleList
tags:
  - CSSOM
  - DOM
translation_of: Web/API/CSSRuleList
---
{{ APIRef("CSSOM") }}

A `CSSRuleList` est un objet de type tableau contenant une collection ordonnée d'objects [`CSSRule`](/en/DOM/cssRule).

## Description

Chaque règle `CSSRule` peut être atteinte via `rules.item(index),` ou simplement `rules[index]`, où `rules` est un objet implementant l'interface  `CSSRuleList`, et `index` est l'index de la règle (commence à zéro comme les tableaux), dans l'ordre dans lequel elle apparait dans la feuille de style CSS. Le nombre d'objets est `rules.length`.

## Exemple

```js
// récuperer la première règle de la première feuille de style
var firstRule = document.styleSheets[0].cssRules[0];
```

## Voir aussi

- [`CSSRule`](/en/DOM/cssRule)

### Implémentations de CSSRuleList

Il existe plusieurs propriétés dans le CSSOM qui retourne une `CSSRuleList` :

- {{ domxref("CSSStyleSheet") }} property {{ domxref("CSSStyleSheet/cssRules", "cssRules") }}
- {{ domxref("CSSMediaRule") }} property {{ domxref("CSSMediaRule/cssRules", "cssRules") }}
- {{ domxref("CSSKeyframesRule") }} property {{ domxref("CSSKeyframesRule/cssRules", "cssRules") }}
- {{ domxref("CSSMozDocumentRule") }} property {{ domxref("CSSMozDocumentRule/cssRules", "cssRules") }}

## Spécification

- [DOM Level 2 Style: `CSSRuleList` interface](http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSSRuleList)
- [DOM Level 2 Style: `CSSStyleSheet` attribute `cssRules`](http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSSStyleSheet-cssRules)
- [DOM Level 2 Style: `CSSMediaRule` attribute ](http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSSMediaRule-cssRules)[`cssRules`](http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSSMediaRule-cssRules)
- [CSS Animations: `CSSKeyframesRule` interface](http://dev.w3.org/csswg/css3-animations/#DOM-CSSKeyframesRule)
