---
title: -webkit-border-before
slug: Web/CSS/Reference/Properties/-webkit-border-before
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

{{Non-standard_Header}}

La propriété raccourcie [CSS](/fr/docs/Web/CSS) **`-webkit-border-before`** permet de définir les propriétés de la bordure pour le début d'un élément dans l'axe de bloc (l'axe logique orthogonal à l'axe de lecture).

## Propriétés constitutives

Cette propriété est une propriété raccourcie pour les propriétés CSS suivantes&nbsp;:

- `-webkit-border-before-color`
- `-webkit-border-before-style`
- `-webkit-border-before-width`

## Syntaxe

```css
/* Valeurs décrivant une bordure */
-webkit-border-before: 1px;
-webkit-border-before: 2px dotted;
-webkit-border-before: medium dashed blue;

/* Valeurs globales */
-webkit-border-before: inherit;
-webkit-border-before: initial;
-webkit-border-before: revert;
-webkit-border-before: revert-layer;
-webkit-border-before: unset;
```

### Valeurs

Une ou plusieurs valeurs parmi les suivantes, dans n'importe quel ordre&nbsp;:

- `<border-width>`
  - : Voir {{CSSxRef("border-width")}}.
- `<border-style>`
  - : Voir {{CSSxRef("border-style")}}.
- `<color>`
  - : Voir {{CSSxRef("color")}}.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntaxRaw(`-webkit-border-before = <'border-width'> || <'border-style'> || <color>`)}}

## Exemples

### Appliquer une bordure avec du texte vertical

#### HTML

```html
<div>
  <p class="texteExemple">Texte pour l'exemple</p>
</div>
```

#### CSS

```css
div {
  background-color: yellow;
  width: 120px;
  height: 120px;
}

.texteExemple {
  writing-mode: vertical-rl;
  -webkit-border-before: 5px dashed blue;
}
```

#### Résultat

{{EmbedLiveSample("Appliquer une bordure avec du texte vertical", 140, 140)}}

## Spécifications

Cette propriété ne fait partie d'aucun standard, mais est lié à la propriété {{CSSxRef('border-block-start')}} en cours de standardisation.

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{CSSxRef("border-block-start")}}
- Les propriétés physiques correspondantes&nbsp;: {{CSSxRef("border-top")}}, {{CSSxRef("border-right")}}, {{CSSxRef("border-bottom")}} et {{CSSxRef("border-left")}}
- Les propriétés {{CSSxRef("writing-mode")}}, {{CSSxRef("direction")}}, {{CSSxRef("text-orientation")}}
