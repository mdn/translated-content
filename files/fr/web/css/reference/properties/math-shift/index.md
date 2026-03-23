---
title: math-shift
slug: Web/CSS/Reference/Properties/math-shift
l10n:
  sourceCommit: 6e23feb9bf66f4734947d7cea5e4fe59dac028ce
---

La propriété [CSS](/fr/docs/Web/CSS) **`math-shift`** indique si les exposants à l'intérieur des formules MathML doivent être relevés par un décalage normal ou compact.

## Syntaxe

```css
/* Valeurs avec un mot-clé */
math-shift: normal;
math-shift: compact;

/* Valeurs globales */
math-shift: inherit;
math-shift: initial;
math-shift: revert;
math-shift: revert-layer;
math-shift: unset;
```

### Valeurs

- `normal`
  - : La valeur initiale, indique un rendu normal. Les exposants dans les formules MathML utilisent le paramètre [superscriptShiftUp <sup>(angl.)</sup>](https://w3c.github.io/mathml-core/#dfn-superscriptshiftup) de la table OpenType MATH.
- `compact`
  - : Indique un rendu compact. Les exposants dans les formules MathML utilisent le paramètre [superscriptShiftUpCramped <sup>(angl.)</sup>](https://w3c.github.io/mathml-core/#dfn-superscriptshiftupcramped) de la table OpenType MATH, qui est généralement plus petit.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Décalage normal et compact

Le MathML suivant affiche deux versions de «&nbsp;x au carré&nbsp;» en utilisant une police avec une table OpenType MATH.
La propriété `math-shift` est utilisée pour relever les exposants en utilisant le décalage `normal` et `compact`.

#### CSS

```css
math {
  font-size: 64pt;
  math-shift: normal;
}

.compact-shift {
  math-shift: compact;
}
```

#### MathML

```html
<math>
  <msup>
    <mi>x</mi>
    <mn>2</mn>
  </msup>
  <msup class="compact-shift">
    <mi>x</mi>
    <mn>2</mn>
  </msup>
</math>
```

#### Résultat

Notez que le deuxième «&nbsp;2&nbsp;» a un décalage plus compact (plus bas).

{{EmbedLiveSample("Décalage normal et compact", "100%", 150)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{CSSxRef("math-depth")}}
- La propriété {{CSSxRef("font-size")}}
