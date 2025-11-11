---
title: CSSRuleList
slug: Web/API/CSSRuleList
---

{{ APIRef("CSSOM") }}

Une `CSSRuleList` est un objet de type tableau contenant une collection ordonnée d'objects [`CSSRule`](/fr/docs/Web/API/CSSRule).

## Description

Chaque règle `CSSRule` peut être atteinte via `rules.item(index),` ou simplement `rules[index]`, où `rules` est un objet implementant l'interface `CSSRuleList`, et `index` est l'index de la règle (commence à zéro comme les tableaux), dans l'ordre dans lequel elle apparait dans la feuille de style CSS. Le nombre d'objets est `rules.length`.

## Exemple

```js
// récuperer la première règle de la première feuille de style
var firstRule = document.styleSheets[0].cssRules[0];
```

### Implémentations de CSSRuleList

Il existe plusieurs propriétés dans le CSSOM qui retourne une `CSSRuleList` :

- {{ domxref("CSSStyleSheet") }} property {{ domxref("CSSStyleSheet/cssRules", "cssRules") }}
- {{ domxref("CSSMediaRule") }} property {{ domxref("CSSMediaRule/cssRules", "cssRules") }}
- {{ domxref("CSSKeyframesRule") }} property {{ domxref("CSSKeyframesRule/cssRules", "cssRules") }}
- {{ domxref("CSSMozDocumentRule") }} property {{ domxref("CSSMozDocumentRule/cssRules", "cssRules") }}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [`CSSRule`](/fr/docs/Web/API/CSSRule)
