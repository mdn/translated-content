---
title: '-webkit-animation'
slug: Web/CSS/@media/-webkit-animation
tags:
  - CSS
  - Caractéristique média
  - Non-standard
  - Reference
translation_of: Web/CSS/@media/-webkit-animation
---
{{CSSRef}}{{Non-standard_header}}

**`-webkit-animation`** est une [caractéristique média](/fr/docs/Web/CSS/Requêtes_média/Utiliser_les_Media_queries#Cibler_des_caractéristiques_média) booléenne non-standard qui permet d'indiquer si les animationsCSS ({{cssxref("animation")}}) sont prises en charge dans leurs versions préfixées. Cette caractéristique est uniquement prise en charge par les navigateurs basés sur WebKit. L'alternative standard correspondante consiste à utiliser {{cssxref("@supports")}}.

## Exemples

```css
@media (-webkit-animation) {
  /* CSS à utiliser si les animations sont prises en charge */
}
```

## Spécifications

Cette caractéristique média est une caractéristique média propriétaire liée à WebKit/Blink. Elle ne fait partie d'aucune spécification. Elle est décrite plus en détails dans la [référence CSS Apple pour Safari (en anglais)](https://developer.apple.com/library/safari/documentation/AppleApplications/Reference/SafariCSSRef/Articles/OtherStandardCSS3Features.html#//apple_ref/doc/uid/TP40007601-SW3).

## Compatibilité des navigateurs

{{Compat("css.at-rules.media.-webkit-animation")}}

## Voir aussi

- {{cssxref("-webkit-transform-3d")}}
- {{cssxref("-webkit-transform-2d")}}
- {{cssxref("-webkit-transition")}}
- [Page de test sur quirksmode.org](http://www.quirksmode.org/css/tests/mediaqueries/animation.html)
