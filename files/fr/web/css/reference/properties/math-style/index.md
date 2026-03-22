---
title: math-style
slug: Web/CSS/Reference/Properties/math-style
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

La propriété [CSS](/fr/docs/Web/CSS) **`math-style`** indique si les équations MathML devraient être affichées en hauteur normale ou compacte.

## Syntaxe

```css
/* Valeurs avec un mot-clé */
math-style: normal;
math-style: compact;

/* Valeurs globales */
math-style: inherit;
math-style: initial;
math-style: revert;
math-style: revert-layer;
math-style: unset;
```

### Valeurs

- `normal`
  - : La valeur initiale, indiquant un rendu normal.
- `compact`
  - : La mise en page des éléments de l'équation est faite de manière à réduire la hauteur de l'ensemble.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Changer le style d'une formule en compact

#### CSS

```css
math {
  math-style: normal;
}
.compact {
  math-style: compact;
}
```

#### HTML

```html
<p>
  Hauteur normale
  <math>
    <mrow>
      <munderover>
        <mo>∑</mo>
        <mrow>
          <mi>n</mi>
          <mo>=</mo>
          <mn>1</mn>
        </mrow>
        <mrow>
          <mo>+</mo>
          <mn>∞</mn>
        </mrow>
      </munderover>
    </mrow>
  </math>
  et hauteur compacte
  <math class="compact">
    <mrow>
      <munderover>
        <mo>∑</mo>
        <mrow>
          <mi>n</mi>
          <mo>=</mo>
          <mn>1</mn>
        </mrow>
        <mrow>
          <mo>+</mo>
          <mn>∞</mn>
        </mrow>
      </munderover>
    </mrow>
  </math>
  des équations.
</p>
```

#### Résultat

{{EmbedLiveSample("Exemples")}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{CSSxRef("math-depth")}}
- La propriété {{CSSxRef("font-size")}}
