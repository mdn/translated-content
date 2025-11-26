---
title: -webkit-touch-callout
slug: Web/CSS/Reference/Properties/-webkit-touch-callout
original_slug: Web/CSS/-webkit-touch-callout
---

{{Non-standard_header}}

La propriété **`-webkit-touch-callout`** permet de contrôler l'affichage de la légende (_callout_) affichée par défaut lorsque le toucher est maintenu sur un élément.

Lorsqu'un élément est touché et que la pression est maintenue sur iOS, Safari affiche une bulle d'informations à propos du lien. Cette propriété permet de désactiver ce fonctionnement.

## Syntaxe

```css
/* Valeurs avec un mot-clé */
-webkit-touch-callout: default;
-webkit-touch-callout: none;

/* Valeurs globales */
-webkit-touch-callout: initial;
-webkit-touch-callout: inherit;
-webkit-touch-callout: revert;
-webkit-touch-callout: revert-layer;
-webkit-touch-callout: unset;
```

### Valeurs

- `default`
  - : La légende par défaut est activée.
- `none`
  - : La légende est désactivée.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntaxRaw(`-webkit-touch-callout = default | none`)}}

## Exemples

```css
.exemple {
  -webkit-touch-callout: none;
}
```

## Spécifications

Cette propriété ne fait partie d'aucun standard. Elle est décrite dans [la référence CSS de Safari](https://developer.apple.com/library/safari/documentation/AppleApplications/Reference/SafariCSSRef/Articles/StandardCSSProperties.html#//apple_ref/doc/uid/TP30001266-_webkit_touch_callout).

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Extensions CSS WebKit](/fr/docs/Web/CSS/Reference/Webkit_extensions)
- [-webkit-touch-callout dans la documentation Apple <sup>(angl.)</sup>](https://developer.apple.com/library/archive/documentation/AppleApplications/Reference/SafariCSSRef/Articles/StandardCSSProperties.html#//apple_ref/doc/uid/TP30001266-_webkit_touch_callout)
