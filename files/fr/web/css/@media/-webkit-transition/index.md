---
title: '-webkit-transition'
slug: Web/CSS/@media/-webkit-transition
tags:
  - CSS
  - Caractéristique média
  - Non-standard
  - Obsolete
  - Reference
translation_of: Web/CSS/@media/-webkit-transition
---
{{CSSRef}}{{Non-standard_header}}{{obsolete_header}}

**`-webkit-transition`** est une [caractéristique média](/fr/docs/Web/CSS/Requêtes_média/Utiliser_les_Media_queries#Cibler_des_caractéristiques_média) booléenne non-standard qui permet d'indiquer si les transitions CSS ({{cssxref("transition")}}) sont prises en charge dans leurs versions préfixées.

> **Note :** Cette caractéristique est uniquement prise en charge par les navigateurs basés sur WebKit. L'alternative standard correspondante consiste à utiliser {{cssxref("@supports")}}.

## Privilégier `@supports`

S'il vous faut déterminer si les transitions CSS sont prises en charges, évitez d'utiliser `-webkit-transition`. En lieu et place, on utilisera la règle @ {{cssxref("@supports")}} :

```css
@supports(transition: initial) {
  /* Les règles CSS à utiliser si   */
  /* les transitions sont prises en */
  /* charge. */
}
```

## Spécifications

Cette caractéristique média est une caractéristique média propriétaire liée à WebKit/Blink. Elle ne fait partie d'aucune spécification. Elle est décrite plus en détails dans la [référence CSS Apple pour Safari (en anglais)](https://developer.apple.com/library/safari/documentation/AppleApplications/Reference/SafariCSSRef/Articles/OtherStandardCSS3Features.html#//apple_ref/doc/uid/TP40007601-SW3).

## Compatibilité des navigateurs

{{Compat("css.at-rules.media.-webkit-transition")}}

## Voir aussi

- [Utiliser les media queries](/fr/docs/Web/CSS/Requêtes_média/Utiliser_les_Media_queries)
- [Utiliser les transitions CSS](/fr/docs/Web/CSS/CSS_Transitions/Utiliser_transitions_CSS)
- {{cssxref("@supports")}}
- {{cssxref("transition")}}
- {{cssxref("-webkit-transform-3d")}}
- {{cssxref("-webkit-transform-2d")}}
- {{cssxref("-webkit-animation")}}
- [Page de test sur quirksmode.org](http://www.quirksmode.org/css/tests/mediaqueries/animation.html)
