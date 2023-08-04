---
title: scroll-snap-align
slug: Web/CSS/scroll-snap-align
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

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
