---
title: column-rule-color
slug: Web/CSS/Reference/Properties/column-rule-color
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

La propriété [CSS](/fr/docs/Web/CSS) **`column-rule-color`** définit la couleur de la ligne tracée entre les colonnes dans une mise en page multi-colonnes.

{{InteractiveExample("Démonstration CSS&nbsp;: column-rule-color")}}

```css interactive-example-choice
column-rule-color: red;
```

```css interactive-example-choice
column-rule-color: rgb(48 125 222);
```

```css interactive-example-choice
column-rule-color: hsl(120 80% 40% / 0.6);
```

```css interactive-example-choice
column-rule-color: currentColor;
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
/* Valeurs de type <color> */
column-rule-color: red;
column-rule-color: rgb(192 56 78);
column-rule-color: transparent;
column-rule-color: hsl(0 100% 50% / 60%);

/* Valeurs globales */
column-rule-color: inherit;
column-rule-color: initial;
column-rule-color: revert;
column-rule-color: revert-layer;
column-rule-color: unset;
```

La propriété `column-rule-color` se définit grâce à une valeur de type `<color>`.

### Valeurs

- {{CSSxRef("&lt;color&gt;")}}
  - : Une valeur de couleur qui indique la couleur du trait entre les colonnes.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Définir une règle de colonne bleue

#### HTML

```html
<p>
  Ce texte est réparti en trois colonnes. La propriété `column-rule-color` est
  utilisée pour changer la couleur de la ligne tracée entre les colonnes. Ne
  trouvez-vous pas cela merveilleux&nbsp;?
</p>
```

#### CSS

```css
p {
  column-count: 3;
  column-rule-style: solid;
  column-rule-color: blue;
}
```

#### Résultat

{{EmbedLiveSample("Définir une règle de colonne bleue")}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Le type de donnée {{CSSxRef("&lt;color&gt;")}}
- Les autres propriétés relatives aux couleurs&nbsp;: {{CSSxRef("color")}}, {{CSSxRef("background-color")}}, {{CSSxRef("border-color")}}, {{CSSxRef("outline-color")}}, {{CSSxRef("text-decoration-color")}}, {{CSSxRef("text-emphasis-color")}}, {{CSSxRef("text-shadow")}} et {{CSSxRef("caret-color")}}
