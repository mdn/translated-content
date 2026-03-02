---
title: font-variant
slug: Web/CSS/Reference/Properties/font-variant
l10n:
  sourceCommit: 1dbba9f7a2c2e35c6e01e8a63159e2aac64b601b
---

La [propriété raccourcie](/fr/docs/Web/CSS/Guides/Cascade/Shorthand_properties) [CSS](/fr/docs/Web/CSS) **`font-variant`** permet de définir tous les paramètres typographiques pour une police de caractères.

On peut aussi utiliser les valeurs de la propriété `font-variant` définies avec la spécification CSS de niveau 2.1, `normal` ou `small-caps`, en utilisant la propriété raccourcie {{CSSxRef("font")}}.

{{InteractiveExample("Démonstration CSS&nbsp;: font-variant")}}

```css interactive-example-choice
font-variant: normal;
```

```css interactive-example-choice
font-variant: no-common-ligatures proportional-nums;
```

```css interactive-example-choice
font-variant: common-ligatures tabular-nums;
```

```css interactive-example-choice
font-variant: small-caps slashed-zero;
```

```html interactive-example
<section id="default-example">
  <div id="example-element">
    <p>La difficulté des gauffres</p>
    <table>
      <tr>
        <td><span class="tabular">0O</span></td>
      </tr>
      <tr>
        <td><span class="tabular">3.14</span></td>
      </tr>
      <tr>
        <td><span class="tabular">2.71</span></td>
      </tr>
    </table>
  </div>
</section>
```

```css interactive-example
@font-face {
  font-family: "Fira Sans";
  src:
    local("FiraSans-Regular"),
    url("/shared-assets/fonts/FiraSans-Regular.woff2") format("woff2");
  font-weight: normal;
  font-style: normal;
}

section {
  font-family: "Fira Sans", sans-serif;
  margin-top: 10px;
  font-size: 1.5em;
}

#example-element table {
  margin-left: auto;
  margin-right: auto;
}

.tabular {
  border: 1px solid;
}
```

## Propriétés constitutives

Cette propriété est une abréviation pour les propriétés CSS suivantes&nbsp;:

- {{CSSxRef("font-variant-alternates")}}
- {{CSSxRef("font-variant-caps")}}
- {{CSSxRef("font-variant-east-asian")}}
- {{CSSxRef("font-variant-emoji")}}
- {{CSSxRef("font-variant-ligatures")}}
- {{CSSxRef("font-variant-numeric")}}
- {{CSSxRef("font-variant-position")}}

## Syntaxe

```css
font-variant: small-caps;
font-variant: common-ligatures small-caps;

/* Valeurs globales */
font-variant: inherit;
font-variant: initial;
font-variant: revert;
font-variant: revert-layer;
font-variant: unset;
```

### Valeurs

- `normal`
  - : Définit une police normale. Chaque propriété individuelle a une valeur initiale de `normal`.

- `none`
  - : Définit la valeur de {{CSSxRef("font-variant-ligatures")}} à `none` et la valeur des autres propriétés individuelles à `normal`, leur valeur initiale.

- `<common-lig-values>`, `<discretionary-lig-values>`, `<historical-lig-values>`, `<contextual-alt-values>`
  - : Définit les mots-clés relatifs à la propriété détaillée {{CSSxRef("font-variant-ligatures")}}. Les valeurs possibles sont&nbsp;: `common-ligatures`, `no-common-ligatures`, `discretionary-ligatures`, `no-discretionary-ligatures`, `historical-ligatures`, `no-historical-ligatures`, `contextual` et `no-contextual`.

- `stylistic()`, `historical-forms`, `styleset()`, `character-variant()`, `swash()`, `ornaments()`, `annotation()`
  - : Définit les mots-clés et fonctions relatifs à la propriété détaillée {{CSSxRef("font-variant-ligatures")}}.

- `small-caps`, `all-small-caps`, `petite-caps`, `all-petite-caps`, `unicase`, `titling-caps`
  - : Définit les mots-clés et fonctions relatifs à la propriété détaillée {{CSSxRef("font-variant-caps")}}. La valeur `small-caps` est la seule variante de police non `normal` valide dans la propriété raccourcie {{CSSxRef("font")}}.

- `<numeric-figure-values>`, `<numeric-spacing-values>`, `<numeric-fraction-values>`, `ordinal`, `slashed-zero`
  - : Définit les mots-clés relatifs à la propriété détaillée {{CSSxRef("font-variant-numeric")}}. Les valeurs possibles sont&nbsp;: `lining-nums`, `oldstyle-nums`, `proportional-nums`, `tabular-nums`, `diagonal-fractions`, `stacked-fractions`, `ordinal` et `slashed-zero`.

- `<east-asian-variant-values>`, `<east-asian-width-values>`, `ruby`
  - : Définit les mots-clés relatifs à la propriété détaillée {{CSSxRef("font-variant-east-asian")}}. Les valeurs possibles sont&nbsp;: `jis78`, `jis83`, `jis90`, `jis04`, `simplified`, `traditional`, `full-width`, `proportional-width` et `ruby`.

- `sub`, `super`
  - : Définit les mots-clés et fonctions relatifs à la propriété détaillée {{CSSxRef("font-variant-position")}}.

- `text`, `emoji`, `unicode`
  - : Définit les mots-clés et fonctions relatifs à la propriété détaillée {{CSSxRef("font-variant-emoji")}}.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Utiliser la valeur `small-caps` de `font-variant`

#### HTML

```html
<p class="normal">Firefox normal&nbsp;!</p>
<p class="small">Firefox petit&nbsp;!</p>
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

{{EmbedLiveSample("Utiliser la valeur `small-caps` de `font-variant`")}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{CSSxRef("text-transform")}}
- La propriété {{CSSxRef("text-combine-upright")}}
- La propriété {{CSSxRef("text-orientation")}}
- L'attribut SVG {{SVGAttr("font-variant")}}
