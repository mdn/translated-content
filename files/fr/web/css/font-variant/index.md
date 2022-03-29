---
title: font-variant
slug: Web/CSS/font-variant
translation_of: Web/CSS/font-variant
browser-compat: css.properties.font-variant
---
{{CSSRef}}

La [propriété raccourcie](/fr/docs/Web/CSS/Shorthand_properties) [CSS](/fr/docs/Web/CSS) **`font-variant`** permet de définir tous les paramètres typographiques pour une police de caractères.

On peut aussi utiliser les valeurs de la propriété `font-variant` définies avec la spécification CSS de niveau 2 (première révision), `normal` ou `small-caps`, en utilisant la propriété raccourcie [`font`](/fr/docs/Web/CSS/font).

{{EmbedInteractiveExample("pages/css/font-variant.html")}}

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

#### HTML

```html
<p class="normal">Firefox normal</p>
<p class="small">Firefox petit</p>
```

#### CSS

```css
p.normal {
  font-variant: normal;
}
p.small {
  font-variant: small-caps;
}
```

#### Résultat

{{EmbedLiveSample('', 'Web/CSS/font-variant')}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [`text-transform`](/fr/docs/Web/CSS/text-transform)
- [`text-combine-upright`](/fr/docs/Web/CSS/text-combine-upright)
- [`text-orientation`](/fr/docs/Web/CSS/text-orientation)
