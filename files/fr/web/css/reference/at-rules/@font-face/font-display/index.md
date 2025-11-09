---
title: font-display
slug: Web/CSS/Reference/At-rules/@font-face/font-display
original_slug: Web/CSS/@font-face/font-display
l10n:
  sourceCommit: 7c5497422bc7ec41f0aa1caf940c2e1fd6083941
---

Le {{Glossary("CSS_Descriptor", "descripteur")}} [CSS](/fr/docs/Web/CSS) **`font-display`** pour la [règle @](/fr/docs/Web/CSS/Guides/Syntax/At-rules) {{cssxref("@font-face")}} détermine comment une police est affichée en fonction de son état de téléchargement et de disponibilité.

## Syntaxe

```css
/* Valeurs avec un mot-clé */
font-display: auto;
font-display: block;
font-display: swap;
font-display: fallback;
font-display: optional;
```

### Valeurs

- `auto`
  - : La stratégie d'affichage de la fonte est définie par l'agent utilisateur.
- `block`
  - : La période de blocage est courte et est suivi d'une période d'échange infinie.
- `swap`
  - : La période de blocage est extrêmement courte et est suivie par une période d'échange infinie.
- `fallback`
  - : La période de blocage est extrêmement courte et est suivie par une courte période d'échange.
- `optional`
  - : La période de blocage est extrêmement courte et il n'y a pas de période d'échange.

> [!NOTE]
> Dans Firefox, les préférences `gfx.downloadable_fonts.fallback_delay` et `gfx.downloadable_fonts.fallback_delay_short` fournissent la durée des périodes «&nbsp;courte&nbsp;» et «&nbsp;extrêmement courte&nbsp;», respectivement.

## Description

La chronologie d'affichage de la police est basée sur un minuteur qui commence au moment où l'agent utilisateur tente d'utiliser une police donnée téléchargée. La chronologie est divisée en trois périodes qui dictent le comportement de rendu de tous les éléments utilisant la police&nbsp;:

- Période de blocage de la police&nbsp;: Si la police n'est pas chargée, tout élément tentant de l'utiliser doit rendre une police de repli _invisible_. Si la police se charge avec succès pendant cette période, elle est utilisée normalement.
- Période d'échange de la police&nbsp;: Si la police n'est pas chargée, tout élément tentant de l'utiliser doit rendre une police de repli. Si la police se charge avec succès pendant cette période, elle est utilisée normalement.
- Période d'échec de la police&nbsp;: Si la police n'est pas chargée, l'agent utilisateur la considère comme un échec de chargement, ce qui entraîne un repli normal de la police.

## Définition formelle

{{cssinfo}}

### Syntaxe formelle

{{csssyntax}}

## Exemples

```css
@font-face {
  font-family: FonteExemple;
  src:
    url("/chemin/vers/fonts/example-font.woff") format("woff"),
    url("/chemin/vers/fonts/example-font.eot") format("embedded-opentype");
  font-weight: 400;
  font-style: normal;
  font-display: fallback;
}
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{cssxref("@font-face/font-family", "font-family")}}
- {{cssxref("@font-face/font-stretch", "font-stretch")}}
- {{cssxref("@font-face/font-style", "font-style")}}
- {{cssxref("@font-face/font-weight", "font-weight")}}
- {{cssxref("font-feature-settings", "font-feature-settings")}}
- {{cssxref("@font-face/font-variation-settings", "font-variation-settings")}}
- {{cssxref("@font-face/src", "src")}}
- Le descripteur {{cssxref("@font-face/unicode-range", "unicode-range")}}
