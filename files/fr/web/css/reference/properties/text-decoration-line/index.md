---
title: text-decoration-line
slug: Web/CSS/Reference/Properties/text-decoration-line
original_slug: Web/CSS/text-decoration-line
---

{{CSSRef}}

La propriété **`text-decoration-line`** définit la façon dont les décorations linéaires sont ajoutées à un élément et notamment leur position (sous le texte, au-dessus ou en travers de celui-ci).

{{InteractiveExample("CSS Demo: text-decoration-line")}}

```css interactive-example-choice
text-decoration-line: none;
```

```css interactive-example-choice
text-decoration-line: underline;
```

```css interactive-example-choice
text-decoration-line: overline;
```

```css interactive-example-choice
text-decoration-line: line-through;
```

```css interactive-example-choice
text-decoration-line: underline overline;
```

```css interactive-example-choice
text-decoration-line: underline line-through;
```

```html interactive-example
<section id="default-example">
  <p>
    I'd far rather be
    <span class="transition-all" id="example-element">happy than right</span>
    any day.
  </p>
</section>
```

```css interactive-example
p {
  font: 1.5em sans-serif;
}
```

La propriété raccourcie {{cssxref("text-decoration")}} permet de paramétrer cette propriété et d'autres propriétés associées aux décorations.

## Syntaxe

```css
/* Valeurs avec un mot-clé */
text-decoration-line: none;
text-decoration-line: underline;
text-decoration-line: overline;
text-decoration-line: line-through;

/* Valeurs avec plusieurs mots-clés */
text-decoration-line: underline overline; /* On a deux décorations pour la ligne */
text-decoration-line: overline underline line-through; /* On a plusieurs décorations */

/* Valeurs globales */
text-decoration-line: inherit;
text-decoration-line: initial;
text-decoration-line: unset;
```

### Valeurs

Cette propriété peut avoir une ou plusieurs valeurs séparées par des espaces. Si aucune valeur n'est fournie, il n'y a pas de décoration ajoutée :

- `none`
  - : Aucune ligne ne décore le texte.
- `underline`
  - : Chaque ligne de texte est soulignée.
- `overline`
  - : Une ligne est dessinée au-dessus de chaque ligne de texte.
- `line-through`
  - : Une ligne est dessinée au milieu de chaque ligne de texte.
- `blink` {{deprecated_inline}}
  - : Le texte clignote. Les agents utilisateurs conformes peuvent ne pas suivre cette directive. Cette valeur est dépréciée et il est conseillé d'utiliser les [animations CSS](/fr/docs/Web/CSS/Reference/Properties/animation) pour obtenir un effet similaire.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### HTML

```html
<p>Voici un texte souligné avec une vaguelette rouge.</p>
```

### CSS

```css
p {
  text-decoration-line: underline;
  text-decoration-style: wavy;
  text-decoration-color: red;
}
```

### Résultat

{{EmbedLiveSample('Exemples', 300, 60)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété raccourcie {{cssxref("text-decoration")}} qui permet, entre autres, de paramétrer `text-decoration-line`.
