---
title: ':-moz-locale-dir(rtl)'
slug: Web/CSS/:-moz-locale-dir(rtl)
tags:
  - CSS
  - Droite-à-gauche
  - Localisation
  - Non-standard
  - Pseudo-classe
  - Reference
translation_of: Web/CSS/:-moz-locale-dir(rtl)
---
{{Non-standard_header}}{{CSSRef}}

La [pseudo-classe CSS](/fr/docs/Web/CSS/Pseudo-classes) **`:-moz-locale-dir(rtl)`** correspond à un élément si l'interface utilisateur est affichée de droite à gauche. Elle est déterminée par la préférence `intl.uidirection.`_`locale`_ (où _`locale`_ est la langue courante) qui est fixée à `"rtl"`.

Cela permet aux extensions (et thèmes) d'adapter facilement leur interface utilisateur basée sur les besoins de la langue de l'utilisateur. Cela peut varier d'une fenêtre à une autre et même d'un onglet à un autre. Cela permet aussi aux extensions de fonctionner même si elles ne prennent pas en compte la langue de l'utilisateur par défaut, puisqu'elles peuvent prendre en compte les agencements de gauche à droite et de droite à gauche sans être inquiétées par les spécificités de la langue.

Ce sélecteur ne fonctionne pas correctement pour des documents HTML ; il ne fait jamais correspondre, peu importe si la langue de l'interface utilisateur va de gauche à droite ou de droite à gauche.

## Exemples

### CSS

```css
p:-moz-locale-dir(rtl) {
  color: red;
}
```

### HTML

```html
<p>En utilisant une interface de droite à gauche, ce texte sera rouge.</p>
```

### Résultat

{{EmbedLiveSample("Exemples")}}

## Spécifications

Cette pseudo-classe est une pseudo-classe propriétaire liée à Gecko/Mozilla et ne fait partie d'aucune spécification.

## Voir aussi

- {{cssxref(":-moz-locale-dir(ltr)")}}
- [Garantir le fonctionnement de votre thème avec les locales RTL](/en-US/docs/Making_Sure_Your_Theme_Works_with_RTL_Locales)
