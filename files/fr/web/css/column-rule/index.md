---
title: column-rule
slug: Web/CSS/column-rule
---

{{CSSRef}}

Lorsqu'on utilise une disposition sur plusieurs colonnes, la [propriété raccourcie](/fr/docs/Web/CSS/CSS_cascade/Shorthand_properties) **`column-rule`** permet de définir l'affichage d'une ligne droite (aussi appelée « règle ») entre chaque colonne.

{{InteractiveExample("CSS Demo: column-rule")}}

```css interactive-example-choice
column-rule: dotted;
```

```css interactive-example-choice
column-rule: solid 6px;
```

```css interactive-example-choice
column-rule: solid blue;
```

```css interactive-example-choice
column-rule: thick inset blue;
```

```html interactive-example
<section id="default-example">
  <p id="example-element">
    London. Michaelmas term lately over, and the Lord Chancellor sitting in
    Lincoln's Inn Hall. Implacable November weather. As much mud in the streets
    as if the waters had but newly retired from the face of the earth, and it
    would not be wonderful to meet a Megalosaurus, forty feet long or so,
    waddling like an elephantine lizard up Holborn Hill.
  </p>
</section>
```

```css interactive-example
#example-element {
  columns: 3;
  column-rule: solid;
  text-align: left;
}
```

Cette propriété est une propriété raccourcie qui permet de définir {{cssxref("column-rule-width")}}, {{cssxref("column-rule-style")}} et {{cssxref("column-rule-color")}} (plutôt que d'avoir à les définir une par une, ce qui est plus laborieux).

> [!NOTE]
> Cette propriété étant une propriété raccourcie, elle surcharge toutes les déclarations avec les propriétés individuelles écrites avant au sein d'une même règle.

## Syntaxe

```css
/* Syntaxe avec des mots-clés */
column-rule: dotted;
column-rule: solid blue;
column-rule: solid 8px;
column-rule: thick inset blue;

/* Valeurs globales */
column-rule: inherit;
column-rule: initial;
column-rule: unset;
```

Cette propriété peut être définie avec une, deux ou trois valeurs telles que définies ci-après, dans n'importe quel ordre.

### Valeurs

- `<'column-rule-width'>`
  - : Une valeur de longueur (type {{cssxref("&lt;length&gt;")}}) ou l'un des mots-clés `thin`, `medium` ou `thick`. Pour plus de détails, voir {{cssxref("border-width")}}.
- `<'column-rule-style'>`
  - : Voir {{cssxref("border-style")}} pour les différentes valeurs possibles.
- `<'column-rule-color'>`
  - : Une valeur de couleur (type {{cssxref("&lt;color&gt;")}}).

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### HTML

```html
<div id="col_rul">
  <p>column one</p>
  <p>column two</p>
  <p>column three</p>
</div>
```

### CSS

```css
#col_rul {
  padding: 0.3em;
  background: gold;
  border: groove 2px gold;
  column-rule: inset 2px gold;
  column-count: 3;
}
```

### Résultat

{{EmbedLiveSample("Exemples")}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
