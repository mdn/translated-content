---
title: color-interpolation-filters
slug: Web/CSS/Reference/Properties/color-interpolation-filters
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

La propriété [CSS](/fr/docs/Web/CSS) **`color-interpolation-filters`** définit l'espace colorimétrique utilisé pour les opérations d'imagerie réalisées par les effets de filtre SVG. Si elle est explicitement déclarée, la valeur de la propriété CSS remplace toute valeur donnée dans l'attribut {{SVGAttr("color-interpolation-filters")}} de l'élément.

> [!NOTE]
> La propriété SVG {{SVGAttr("color-interpolation-filters")}} ne concerne que les opérations de filtre SVG. Elle n'a _aucun_ effet sur les primitives de filtre comme {{SVGElement("feOffset")}}, {{SVGElement("feImage")}}, {{SVGElement("feTile")}} et {{SVGElement("feFlood")}}, mais s'applique aux différents éléments d'effet de filtre (par exemple, {{SVGElement('feBlend')}}). Voir la page SVG {{SVGAttr('color-interpolation-filters')}} pour la liste complète.

> [!NOTE]
> Il est important de se rappeler que l'attribut SVG {{SVGAttr('color-interpolation')}} a pour valeur initiale `sRGB`, tandis que `color-interpolation-filters` a pour valeur initiale `linearRGB`. Cela signifie que, par défaut, les interpolations des effets de filtre se produisent dans un espace colorimétrique différent de celui des autres interpolations de couleur.

## Syntaxe

```css
color-interpolation-filters: auto;
color-interpolation-filters: linearRGB;
color-interpolation-filters: sRGB;

/* Valeurs globales */
color-interpolation-filters: inherit;
color-interpolation-filters: initial;
color-interpolation-filters: revert;
color-interpolation-filters: revert-layer;
color-interpolation-filters: unset;
```

### Valeurs

- `linearRGB`
  - : Indique que l'interpolation des couleurs doit se faire dans l'espace colorimétrique RGB linéarisé tel que décrit dans [la spécification sRGB <sup>(angl.)</sup>](https://webstore.iec.ch/en/publication/6169). Il s'agit de la valeur par défaut de la propriété.
- `sRGB`
  - : Indique que l'interpolation des couleurs doit se faire dans l'espace colorimétrique sRGB gamma-encodé.
- `auto`
  - : Indique que l'agent utilisateur peut choisir l'espace colorimétrique `sRGB` ou `linearRGB` pour l'interpolation des couleurs. Cette option signifie que l'auteur·ice ne demande pas que l'interpolation des couleurs se fasse dans un espace colorimétrique particulier.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{CSSxRef("color-interpolation")}}
- L'attribut SVG {{SVGAttr("color-interpolation-filters")}}
- [Spécification sRGB <sup>(angl.)</sup>](https://webstore.iec.ch/en/publication/6169)
