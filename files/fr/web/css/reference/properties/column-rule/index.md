---
title: column-rule
slug: Web/CSS/Reference/Properties/column-rule
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

La [propriété raccourcie](/fr/docs/Web/CSS/Guides/Cascade/Shorthand_properties) [CSS](/fr/docs/Web/CSS) `column-rule` définit la largeur, le style et la couleur de la ligne tracée entre les colonnes dans une mise en page multi-colonnes.

{{InteractiveExample("Démonstration CSS&nbsp;: column-rule")}}

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
    Londres. Le trimestre de Michaelmas venait de se terminer, et le lord
    chancelier siégeait dans la salle de Lincoln's Inn. Un novembre implacable.
    Tant de boue dans les rues comme si les eaux venaient tout juste de se
    retirer de la surface de la terre, et il ne serait pas étonnant de
    rencontrer un Megalosaurus, quarante pieds de long environ, se dandinant
    comme un lézard éléphantesque en montant Holborn Hill.
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

## Propriétés constituantes

Cette propriété est une propriété raccourcie regroupant les propriétés CSS suivantes&nbsp;:

- {{CSSxRef("column-rule-color")}}
- {{CSSxRef("column-rule-style")}}
- {{CSSxRef("column-rule-width")}}

## Syntaxe

```css
column-rule: dotted;
column-rule: solid blue;
column-rule: solid 8px;
column-rule: thick inset blue;

/* Valeurs globales */
column-rule: inherit;
column-rule: initial;
column-rule: revert;
column-rule: revert-layer;
column-rule: unset;
```

### Valeurs

- `<'column-rule-width'>`
  - : Une valeur de longueur ({{CSSxRef("&lt;length&gt;")}}) ou l'un des mots-clés `thin`, `medium` ou `thick`. Pour plus de détails, voir {{CSSxRef("border-width")}}.
- `<'column-rule-style'>`
  - : Voir {{CSSxRef("border-style")}} pour les différentes valeurs possibles.
- `<'column-rule-color'>`
  - : Une valeur de couleur ({{CSSxRef("&lt;color&gt;")}}).

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Exemple 1

```css
/* Équivaut à "medium dotted currentColor" */
p.toto {
  column-rule: dotted;
}

/* Équivaut à "medium solid blue" */
p.tata {
  column-rule: solid blue;
}

/* Équivaut à "8px solid currentColor" */
p.tutu {
  column-rule: solid 8px;
}

p.abc {
  column-rule: thick inset blue;
}
```

### Exemple 2

#### HTML

```html
<p class="content-box">
  Il s'agit d'un bloc de texte réparti en trois colonnes. Notez comment la
  propriété `column-rule` sert à ajuster le style, la largeur et la couleur de
  la règle qui apparaît entre les colonnes.
</p>
```

#### CSS

```css
.content-box {
  padding: 0.3em;
  background: #ffff77;
  column-count: 3;
  column-rule: inset 2px #3333ff;
}
```

### Résultat

{{EmbedLiveSample("Exemple 2")}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Apprendre&nbsp;: Mise en page multi-colonnes](/fr/docs/Learn_web_development/Core/CSS_layout/Multiple-column_Layout)
- La propriété {{CSSxRef("column-rule-style")}}
- La propriété {{CSSxRef("column-rule-width")}}
- La propriété {{CSSxRef("column-rule-color")}}
