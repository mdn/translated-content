---
title: font-variant
slug: Web/CSS/font-variant
tags:
  - CSS
  - Propriété
  - Reference
translation_of: Web/CSS/font-variant
---
{{CSSRef}}

La propriété **`font-variant`** est une propriété raccourcie représentant les propriétés : {{cssxref("font-variant-caps")}}, {{cssxref("font-variant-numeric")}}, {{cssxref("font-variant-alternates")}}, {{cssxref("font-variant-ligatures")}} et {{cssxref("font-variant-east-asian")}}. On peut aussi utiliser les valeurs de la propriété `font-variant` définies avec CSS Level 2 (`normal` ou `small-caps`), en utilisant la propriété raccourcie {{cssxref("font")}}.

{{EmbedInteractiveExample("pages/css/font-variant.html")}}

## Syntaxe

```css
font-variant: small-caps;
font-variant: common-ligatures small-caps;

/* Valeurs globales */
font-variant: inherit;
font-variant: initial;
font-variant: unset;
```

### Valeurs

- `normal`
  - : Définit une police normale ; chacune des propriétés individuelles a une valeur initiale de `normal`. Ces propriétés sont {{cssxref("font-variant-caps")}}, {{cssxref("font-variant-numeric")}}, {{cssxref("font-variant-alternates")}}, {{cssxref("font-variant-ligatures")}}, et {{cssxref("font-variant-east-asian")}}.
- `none`
  - : Définit la valeur de {{cssxref("font-variant-ligatures")}} comme étant `none` et les valeurs des autres propriétés à `normal`, leur valeur initiale.
- \<common-lig-values>, \<discretionary-lig-values>, \<historical-lig-values>, \<contextual-alt-values>
  - : Définit la valeur de la propriété {{cssxref("font-variant-ligatures")}}. Les valeurs possibles sont: `common-ligatures`,`no-common-ligatures`, `discretionary-ligatures`, `no-discretionary-ligatures`, `historical-ligatures`, `no-historical-ligatures`,`contextual`, et `no-contextual`.
- `stylistic()`, `historical-forms`, `styleset()`, `character-variant()`, `swash()`, `ornaments()`, `annotation()`
  - : Définit les mots-clés et fonctions relatives à la propriété {{cssxref("font-variant-alternates")}}.
- `small-caps`, `all-small-caps`, `petite-caps`, `all-petite-caps`, `unicase`, `titling-caps`
  - : Définit le mot-clé relatif à la propriété {{cssxref("font-variant-caps")}}.
- `<numeric-figure-values>`, `<numeric-spacing-values>`, `<numeric-fraction-values>`, `ordinal`, `slashed-zero`
  - : Définit la valeur de la propriété {{cssxref("font-variant-numeric")}}. Les valeurs possibles sont `lining-nums`,` oldstyle-nums`, `proportional-nums`, `tabular-nums`, `diagonal-fractions`, `stacked-fractions`, `ordinal`, et `slashed-zero.`
- `<east-asian-variant-values>`, `<east-asian-width-values>`, `ruby`
  - : Définit la valeur de la propriété {{cssxref("font-variant-east-asian")}}. Les valeurs possibles sont: `jis78`, `jis83`,`jis90`, `jis04`, `simplified`, `traditional`, `full-width`, `proportional-width`, `ruby`.

### Syntaxe formelle

{{csssyntax}}

## Exemples

### HTML

```html
<p class="normal">Firefox normal</p>
<p class="small">Firefox petit</p>
```

### CSS

```css
p.normal {
    font-variant: normal;
}
p.small {
    font-variant: small-caps;
}
```

### Résultat

{{EmbedLiveSample('Exemples', '', '', '', 'Web/CSS/font-variant')}}

## Spécifications

| Spécification                                                                                    | État                             | Commentaires                                                                                         |
| ------------------------------------------------------------------------------------------------ | -------------------------------- | ---------------------------------------------------------------------------------------------------- |
| {{SpecName('CSS3 Fonts', '#propdef-font-variant', 'font-variant')}}         | {{Spec2('CSS3 Fonts')}} | La propriété est désormais une propriété raccourcie pour les nouvelles propriétés  `font-variant-*`. |
| {{SpecName('CSS2.1', 'fonts.html#propdef-font-variant', 'font-variant')}} | {{Spec2('CSS2.1')}}         | Aucun changement.                                                                                    |
| {{SpecName('CSS1', '#font-variant', 'font-variant')}}                         | {{Spec2('CSS1')}}         | Définition initiale.                                                                                 |

{{cssinfo}}

## Compatibilité des navigateurs

{{Compat("css.properties.font-variant")}}

## Voir aussi

- {{cssxref("text-transform")}}
- {{cssxref("text-combine-upright")}}
- {{cssxref("text-orientation")}}
