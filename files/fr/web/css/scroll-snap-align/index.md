---
title: scroll-snap-align
slug: Web/CSS/scroll-snap-align
tags:
  - CSS
  - Propriété
  - Reference
translation_of: Web/CSS/scroll-snap-align
---
{{CSSRef}}

La propriété **`scroll-snap-align`** définit la position de la boîte d'accroche (_snap positions_) comme un alignement entre la zone d'accroche et le conteneur (la boîte de défilement de l'élément). Les deux valeurs fournies à cette propriété s'appliquent respectivement à l'axe de bloc et à l'axe en ligne. Lorsqu'une seule valeur est fournie, la seconde prendra par défaut la valeur de la première.

## Syntaxe

```css
/* Valeurs avec un mot-clé */
scroll-snap-align: none;
scroll-snap-align: start end;
scroll-snap-align: center;

/* Valeurs globales */
scroll-snap-align: inherit;
scroll-snap-align: initial;
scroll-snap-align: unset;
```

### Valeurs

- `none`
  - : La boîte ne définit aucune position d'accroche sur cet axe.
- `start`
  - : Le point d'alignement situé au début de l'axe et sur le bord de la boîte de défilement est une position d'accroche sur cet axe.
- `end`
  - : Le point d'alignement situé à la fin de l'axe et sur le bord de la boîte de défilement est une position d'accroche sur cet axe.
- `center`
  - : Le point d'alignement situé au centre de l'axe et à l'intérieur de la boîte de défilement est une position d'accroche sur cet axe.

### Syntaxe formelle

{{csssyntax}}

## Spécifications

| Spécification                                                                                                            | État                                             | Commentaires       |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------ | ------------------ |
| {{SpecName("CSS Scroll Snap Points", "#propdef-scroll-snap-align", "scroll-snap-align")}} | {{Spec2("CSS Scroll Snap Points")}} | Initial definition |

{{cssinfo}}

## Compatibilité des navigateurs

{{Compat("css.properties.scroll-snap-align")}}

> **Attention :** Pour Safari, la syntaxe utilisant les deux valeurs intervertit les deux valeurs (la première cible l'alignement en ligne et la seconde l'alignement en bloc). Voir [le bug n°191865](https://bugs.webkit.org/show_bug.cgi?id=191865).
