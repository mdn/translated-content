---
title: ':-moz-locale-dir(ltr)'
slug: Web/CSS/:-moz-locale-dir(ltr)
tags:
  - CSS
  - Localisation
  - Non-standard
  - Pseudo-classe
  - Reference
  - l10n
translation_of: Web/CSS/:-moz-locale-dir(ltr)
---
{{Non-standard_header}}{{CSSRef}}{{gecko_minversion_header("1.9.2")}}

La pseudo-classe **`:-moz-locale-dir(ltr)`** correspond à un élément si l'interface utilisateur est affichée de gauche à droite. Ceci est déterminé par la préférence `intl.uidirection.`_`locale`_ (où _`locale`_ est le language courant) qui est fixé à "ltr".

Cela permet aux extensions (et thèmes) d'adapter facilement leur interface utilisateur basée sur les besoins du langage de l'utilisateur. Cela peut varier d'une fenêtre à une autre et même d'un onglet à un autre. Cela permet aussi aux extensions de fonctionner même si elles ne prennent pas en compte le langage de l'utilisateur par défaut, puisqu'elles peuvent prendre en compte les agencements de gauche à droite et de droite à gauche sans être inquiétée par les spécificités du langage.

Ce sélecteur ne fonctionne pas pour les documents l'HTML; il fait correspondre toujours, peu importe si le langage de l'UI va de gauche à droite ou de droite à gauche.

## Exemples

### HTML

```html
<p>Sur une interface allant de gauche à droite, ce texte devrait être rouge.</p>
```

### CSS

```css
p:-moz-locale-dir(ltr) {
  color: red;
}
```

### Résultat

{{EmbedLiveSample("Exemples")}}

## Spécifications

Cette pseudo-classe est une pseudo-classe propriétaire liée à Gecko/Mozilla et ne fait partie d'aucune spécification.

## Voir aussi

- {{cssxref(":dir",":dir(…)")}}
- {{cssxref(":-moz-locale-dir(rtl)")}}
