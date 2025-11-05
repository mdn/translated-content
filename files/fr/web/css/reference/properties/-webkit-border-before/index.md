---
title: -webkit-border-before
slug: Web/CSS/Reference/Properties/-webkit-border-before
original_slug: Web/CSS/-webkit-border-before
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

{{Non-standard_header}}

La propriété [CSS](/fr/docs/Web/CSS) **`-webkit-border-before`** est une propriété raccourcie qui permet de définir les propriétés de la bordure pour le début d'un élément dans l'axe de bloc (l'axe logique orthogonal à l'axe de lecture).

## Constituent properties

Cette propriété est une propriété raccourcie pour les propriétés CSS suivantes&nbsp;:

- {{cssxref("-webkit-border-before-color")}}
- {{cssxref("-webkit-border-before-style")}}
- {{cssxref("-webkit-border-before-width")}}

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
  - : Voir {{cssxref("border-width")}}.
- `<border-style>`
  - : Voir {{cssxref("border-style")}}.
- `<color>`
  - : Voir {{cssxref("color")}}.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntaxRaw(`-webkit-border-before = <'border-width'> || <'border-style'> || <color>`)}}

## Exemples

### CSS

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

### HTML

```html
<div>
  <p class="texteExemple">Texte pour l'exemple</p>
</div>
```

### Résultat

{{EmbedLiveSample("Exemples", 140, 140)}}

## Spécifications

Cette propriété ne fait partie d'aucun standard, mais est lié à la propriété {{cssxref('border-block-start')}} en cours de standardisation.

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{cssxref("border-block-start")}}
- Les propriétés physiques correspondantes :
  - {{cssxref("border-top")}}
  - {{cssxref("border-right")}}
  - {{cssxref("border-bottom")}}
  - {{cssxref("border-left")}}

- Les propriétés qui déterminent les propriétés logiques par rapport aux propriétés physiques
  - {{cssxref("writing-mode")}}
  - {{cssxref("direction")}}
  - {{cssxref("text-orientation")}}
