---
title: column-rule-style
slug: Web/CSS/Reference/Properties/column-rule-style
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

La propriété [CSS](/fr/docs/Web/CSS) **`column-rule-style`** définit le style de la ligne tracée entre les colonnes dans une mise en page multi-colonnes.

{{InteractiveExample("Démonstration CSS&nbsp;: column-rule-style")}}

```css interactive-example-choice
column-rule-style: none;
```

```css interactive-example-choice
column-rule-style: dotted;
```

```css interactive-example-choice
column-rule-style: solid;
```

```css interactive-example-choice
column-rule-style: double;
```

```css interactive-example-choice
column-rule-style: ridge;
column-rule-color: #8888ff;
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
/* Valeurs de type <'border-style'> */
column-rule-style: none;
column-rule-style: hidden;
column-rule-style: dotted;
column-rule-style: dashed;
column-rule-style: solid;
column-rule-style: double;
column-rule-style: groove;
column-rule-style: ridge;
column-rule-style: inset;
column-rule-style: outset;

/* Valeurs globales */
column-rule-style: inherit;
column-rule-style: initial;
column-rule-style: revert;
column-rule-style: revert-layer;
column-rule-style: unset;
```

La propriété `column-rule-style` avec une valeur unique de type `<'border-style'>`.

### Valeurs

- `<'border-style'>`
  - : Un mot-clé défini comme pour {{CSSxRef("border-style")}} qui permet de définir le style appliqué au trait. Le rendu doit être interprété conformément au modèle d'affaissement des bordures.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Définir une règle de colonne en tirets

#### HTML

```html
<p>
  Ce texte est réparti en trois colonnes. La propriété `column-rule-style` est
  utilisée pour changer le style de la ligne tracée entre les colonnes. Ne
  trouvez-vous pas cela merveilleux&nbsp;?
</p>
```

#### CSS

```css
p {
  column-count: 3;
  column-rule-style: dashed;
}
```

#### Résultat

{{EmbedLiveSample("Définir une règle de colonne en tirets")}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Apprendre&nbsp;: Mise en page multi-colonnes](/fr/docs/Learn_web_development/Core/CSS_layout/Multiple-column_Layout)
- La propriété {{CSSxRef("column-rule")}}
- La propriété {{CSSxRef("column-rule-color")}}
- La propriété {{CSSxRef("column-rule-width")}}
