---
title: font-variant
slug: conflicting/Web/CSS/@font-face
translation_of: Web/CSS/@font-face/font-variant
original_slug: Web/CSS/@font-face/font-variant
browser-compat: css.at-rules.font-face.font-variant
---
{{CSSRef}}

La [propriété raccourcie](/fr/docs/Web/CSS/Shorthand_properties) [CSS](/fr/docs/Web/CSS) **`font-variant`** permet de définir tous les paramètres typographiques pour des polices de caractères définies avec la règle [`@font-face`](/fr/docs/Web/CSS/@font-face).

## Propriétés détaillées correspondantes

Cette propriété est une propriété raccourcie pour les propriétés CSS suivantes&nbsp;:

- [`font-variant-alternates`](/fr/docs/Web/CSS/font-variant-alternates)
- [`font-variant-caps`](/fr/docs/Web/CSS/font-variant-caps)
- [`font-variant-east-asian`](/fr/docs/Web/CSS/font-variant-east-asian)
- [`font-variant-ligatures`](/fr/docs/Web/CSS/font-variant-ligatures)
- [`font-variant-numeric`](/fr/docs/Web/CSS/font-variant-numeric)

## Syntaxe

```css
font-variant: small-caps;
font-variant: common-ligatures small-caps;

/* Valeurs globales */
font-variant: inherit;
font-variant: initial;
font-variant: revert;
font-variant: unset;
```

### Valeurs

- `normal`
  - : Définit une police normale&nbsp;; chacune des propriétés individuelles a une valeur initiale de `normal`. Les propriétés détaillées de `font-variant` sont&nbsp;: [`font-variant-caps`](/fr/docs/Web/CSS/font-variant-caps), [`font-variant-numeric`](/fr/docs/Web/CSS/font-variant-numeric), [`font-variant-alternates`](/fr/docs/Web/CSS/font-variant-alternates), [`font-variant-ligatures`](/fr/docs/Web/CSS/font-variant-ligatures) et [`font-variant-east-asian`](/fr/docs/Web/CSS/font-variant-east-asian).
- `none`
  - : Définit une valeur de `none` pour [`font-variant-ligatures`](/fr/docs/Web/CSS/font-variant-ligatures) et une valeur de `normal` pour les autres propriétés, leur valeur initiale.
- `<common-lig-values>`, `<discretionary-lig-values>`, `<historical-lig-values>`, `<contextual-alt-values>`
  - : Définit les mots-clés relatifs à la propriété détaillée [`font-variant-ligatures`](/fr/docs/Web/CSS/font-variant-ligatures). Les valeurs possibles sont&nbsp;: `common-ligatures`, `no-common-ligatures`, `discretionary-ligatures`, `no-discretionary-ligatures`, `historical-ligatures`, `no-historical-ligatures`, `contextual` et `no-contextual`.
- `stylistic()`, `historical-forms`, `styleset()`, `character-variant()`, `swash()`, `ornaments()`, `annotation()`
  - : Définit les mots-clés et fonctions relatifs à la propriété détaillée [`font-variant-alternates`](/fr/docs/Web/CSS/font-variant-alternates).
- `small-caps`, `all-small-caps`, `petite-caps`, `all-petite-caps`, `unicase`, `titling-caps`
  - : Définit les mots-clés et fonctions relatifs à la propriété détaillée [`font-variant-caps`](/fr/docs/Web/CSS/font-variant-caps).
- `<numeric-figure-values>`, `<numeric-spacing-values>`, `<numeric-fraction-values>`, `ordinal`, `slashed-zero`
  - : Définit les mots-clés relatifs à la propriété détaillée [`font-variant-numeric`](/fr/docs/Web/CSS/font-variant-numeric). Les valeurs possibles sont&nbsp;:  `lining-nums`, `oldstyle-nums`, `proportional-nums`, `tabular-nums`, `diagonal-fractions`, `stacked-fractions`, `ordinal` et `slashed-zero`.
- `<east-asian-variant-values>`, `<east-asian-width-values>`, `ruby`
  - : Définit les mots-clés relatifs à la propriété détaillée [`font-variant-east-asian`](/fr/docs/Web/CSS/font-variant-east-asian). Les valeurs possibles sont&nbsp;: `jis78`, `jis83`, `jis90`, `jis04`, `simplified`, `traditional`, `full-width`, `proportional-width` et `ruby`.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{csssyntax}}

## Exemples

### Utiliser la valeur `small-caps` de `font-variant`

Le CSS suivant sélectionne une police Open Sans locale ou la télécharge, et permet d'utiliser sa propriété `small-caps`.

```css
@font-face {
  font-family: "Open Sans";
  src: local("Open Sans") format("woff2"),
       url("/fonts/OpenSans-Regular-webfont.woff") format("woff");
  font-variant: small-caps;
}
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [`font-display`](/fr/docs/Web/CSS/@font-face/font-display)
- [`font-family`](/fr/docs/Web/CSS/@font-face/font-family)
- [`font-weight`](/fr/docs/Web/CSS/@font-face/font-weight)
- [`font-style`](/fr/docs/Web/CSS/@font-face/font-style)
- [`font-stretch`](/fr/docs/Web/CSS/@font-face/font-stretch)
- [`font-feature-settings`](/fr/docs/Web/CSS/font-feature-settings)
- [`font-variation-settings`](/fr/docs/Web/CSS/@font-face/font-variation-settings)
- [`src`](/fr/docs/Web/CSS/@font-face/src)
- Le descripteur [`unicode-range`](/fr/docs/Web/CSS/@font-face/unicode-range)
