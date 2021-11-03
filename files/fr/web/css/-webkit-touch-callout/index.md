---
title: '-webkit-touch-callout'
slug: Web/CSS/-webkit-touch-callout
tags:
  - CSS
  - Non-standard
  - Propriété
  - Reference
translation_of: Web/CSS/-webkit-touch-callout
---
{{CSSRef}}{{Non-standard_header}}

La propriété **`-webkit-touch-callout`** permet de contrôler l'affichage de la légende (_callout_) affichée par défaut lorsque le toucher est maintenu sur un élément.

Lorsqu'un élément est touché et que la pression est maintenue sur iOS, Safari affiche une bulle d'informations à propos du lien. Cette propriété permet de désactiver ce fonctionnement.

```css
/* Valeurs avec un mot-clé */
-webkit-touch-callout: default;
-webkit-touch-callout: none;

/* Valeurs globales */
-webkit-touch-callout: initial;
-webkit-touch-callout: inherit;
-webkit-touch-callout: unset;
```

## Syntaxe

### Valeurs

- `default`
  - : La légende par défaut est activée.
- `none`
  - : La légende est désactivée.

### Syntaxe formelle

{{csssyntax}}

## Exemples

```css
.exemple {
  -webkit-touch-callout: none;
}
```

## Spécifications

Cette propriété est une propriété propriétaire liée à WebKit/Blink et ne fait partie d'aucune spécification. Elle est décrite dans [la référence CSS de Safari](https://developer.apple.com/library/safari/documentation/AppleApplications/Reference/SafariCSSRef/Articles/StandardCSSProperties.html#//apple_ref/doc/uid/TP30001266-_webkit_touch_callout).

## Compatibilité des navigateurs

{{Compat("css.properties.-webkit-touch-callout")}}
