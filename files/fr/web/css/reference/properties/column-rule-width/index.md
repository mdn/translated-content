---
title: column-rule-width
slug: Web/CSS/Reference/Properties/column-rule-width
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

La propriété [CSS](/fr/docs/Web/CSS) **`column-rule-width`** définit la largeur de la ligne tracée entre les colonnes dans une mise en page multi-colonnes.

{{InteractiveExample("Démonstration CSS&nbsp;: column-rule-width")}}

```css interactive-example-choice
column-rule-width: thin;
```

```css interactive-example-choice
column-rule-width: medium;
```

```css interactive-example-choice
column-rule-width: thick;
```

```css interactive-example-choice
column-rule-width: 12px;
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

## Syntaxe

```css
/* Valeurs avec un mot-clé */
column-rule-width: thin;
column-rule-width: medium;
column-rule-width: thick;

/* Valeurs detype <length> */
column-rule-width: 1px;
column-rule-width: 2.5em;

/* Valeurs globales */
column-rule-width: inherit;
column-rule-width: initial;
column-rule-width: revert;
column-rule-width: revert-layer;
column-rule-width: unset;
```

La propriété `column-rule-width` est définie grâce à une valeur de type `<'border-width'>`.

### Valeurs

- `<'border-width'>`
  - : Une valeur de longueur ({{CSSxRef("&lt;length&gt;")}}) ou un mot-clé parmi `thin`, `medium` ou `thick` qui décrit l'épaisseur du trait séparant deux colonnes. C'est le type de valeur qui sera également utilisé pour la propriété {{CSSxRef("border-width")}}.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Définir une règle de colonne épaisse

#### HTML

```html
<p>
  Ce texte est réparti en trois colonnes. La propriété `column-rule-width` est
  utilisée pour changer la largeur de la ligne tracée entre les colonnes. Ne
  trouvez-vous pas cela merveilleux&nbsp;?
</p>
```

#### CSS

```css
p {
  column-count: 3;
  column-rule-style: solid;
  column-rule-width: thick;
}
```

### Résultat

{{EmbedLiveSample("Définir une règle de colonne épaisse")}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

- [Apprendre&nbsp;: Mise en page multi-colonnes](/fr/docs/Learn_web_development/Core/CSS_layout/Multiple-column_Layout)
- La propriété {{CSSxRef("column-rule")}}
- La propriété {{CSSxRef("column-rule-color")}}
- La propriété {{CSSxRef("column-rule-style")}}
