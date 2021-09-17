---
title: '-webkit-border-before'
slug: Web/CSS/-webkit-border-before
tags:
  - CSS
  - Non-standard
  - Propriété
  - Reference
translation_of: Web/CSS/-webkit-border-before
---
{{CSSRef}}{{Non-standard_header}}

La propriété **`-webkit-border-before`** est une propriété raccourcie qui permet de définir les propriétés de la bordure pour le début d'un élément dans l'axe de bloc (l'axe logique orthogonal à l'axe de lecture).

```css
/* Valeurs décrivant une bordure */
-webkit-border-before: 1px;
-webkit-border-before: 2px dotted;
-webkit-border-before: medium dashed blue;

/* Valeurs globales */
-webkit-border-before: inherit;
-webkit-border-before: initial;
-webkit-border-before: unset;
```

`-webkit-border-before` peut ainsi être utilisée pour définir les valeurs d'une ou plusieurs de ces propriétés : {{cssxref("-webkit-border-before-width")}}, {{cssxref("-webkit-border-before-style")}}, et {{cssxref("-webkit-border-before-color")}}. Cette propriété est une propriété logique qui correspond à une propriété physique selon le mode d'écriture, la direction et l'orientation du texte. Autrement dit, cette propriété correspond à {{cssxref("border-top")}}, {{cssxref("border-right")}}, {{cssxref("border-bottom")}}ou {{cssxref("border-left")}} selon les valeurs définies pour {{cssxref("writing-mode")}}, {{cssxref("direction")}} et {{cssxref("text-orientation")}}.

Cette propriété est à mettre en relation avec les propriétés {{cssxref("-webkit-border-after")}}, {{cssxref("-webkit-border-start")}}, et {{cssxref("-webkit-border-end")}} qui définissent les autres bordures de l'élément.

L'équivalent standard de cette propriété est la propriété non-préfixée {{cssxref("border-block-start")}}.

## Syntaxe

### Valeurs

Une ou plusieurs valeurs parmi les suivantes, dans n'importe quel ordre :

- `<border-width>`
  - : Voir {{cssxref("border-width")}}.
- `<border-style>`
  - : Voir {{cssxref("border-style")}}.
- `<color>`
  - : Voir {{cssxref("color")}}.

### Syntaxe formelle

{{csssyntax}}

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

Cette propriété est une propriété propriétaire liée à WebKit/Blink et ne fait partie d'aucune spécification. Toutefois, on peut la rapprocher de la propriété standard {{cssxref("border-block-start")}}.

{{cssinfo}}

## Compatibilité des navigateurs

{{Compat("css.properties.-webkit-border-before")}}

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
