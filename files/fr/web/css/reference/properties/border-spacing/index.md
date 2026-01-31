---
title: border-spacing
slug: Web/CSS/Reference/Properties/border-spacing
l10n:
  sourceCommit: 46a4425d4b7160129fd4c8d0f684ccd0617326b7
---

La propriété [CSS](/fr/docs/Web/CSS) **`border-spacing`** permet de définir la distance entre les bordures des cellules adjacentes dans un élément HTML {{HTMLElement("table")}}. Cette propriété s'applique uniquement lorsque {{CSSxRef("border-collapse")}} vaut `separate`.

{{InteractiveExample("Démonstration CSS&nbsp;: border-spacing")}}

```css interactive-example-choice
border-spacing: 0;
```

```css interactive-example-choice
border-spacing: 5px;
```

```css interactive-example-choice
border-spacing: 5px 1rem;
```

```html interactive-example
<section class="default-example" id="default-example">
  <table class="transition-all" id="example-element">
    <tr>
      <td>Cellule 1.1</td>
      <td>Cellule 1.2</td>
    </tr>
    <tr>
      <td>Cellule 2.1</td>
      <td>Cellule 2.2</td>
    </tr>
    <tr>
      <td>Cellule 3.1</td>
      <td>Cellule 3.2</td>
    </tr>
  </table>
</section>
```

```css interactive-example
table {
  width: 15rem;
  table-layout: fixed;
}

td {
  border: 5px solid;
  border-color: crimson dodgerblue;
  padding: 0.75rem;
}
```

## Syntaxe

```css
/* Caleur de type <length> */
border-spacing: 2px;

/* longeur horizontale | longeur verticale */
border-spacing: 1cm 2em;

/* Valeurs globales */
border-spacing: inherit;
border-spacing: initial;
border-spacing: revert;
border-spacing: revert-layer;
border-spacing: unset;
```

La propriété `border-spacing` peut être définie avec une ou deux valeurs.

- Lorsque **une** valeur `<length>` est indiquée, elle définit à la fois l'espacement horizontal et vertical entre les cellules.
- Lorsque **deux** valeurs `<length>` sont indiquées, la première valeur définit l'espacement horizontal entre les cellules (c'est-à-dire l'espace entre les cellules des _colonnes_ adjacentes), et la seconde valeur définit l'espacement vertical entre les cellules (c'est-à-dire l'espace entre les cellules des _lignes_ adjacentes).

### Valeurs

- {{CSSxRef("&lt;length&gt;")}}
  - : La taille de l'espacement en tant que valeur fixe.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Espacer et ajouter une marge aux cellules de tableau

Cet exemple applique un espacement de `.5em` verticalement et de `1em` horizontalement entre les cellules d'un tableau. Remarquez que, sur les bords extérieurs, les valeurs de `padding` du tableau s'ajoutent aux valeurs de `border-spacing`.

#### HTML

```html
<table>
  <tbody>
    <tr>
      <td>1</td>
      <td>2</td>
      <td>3</td>
    </tr>
    <tr>
      <td>4</td>
      <td>5</td>
      <td>6</td>
    </tr>
    <tr>
      <td>7</td>
      <td>8</td>
      <td>9</td>
    </tr>
  </tbody>
</table>
```

#### CSS

```css
table {
  border-spacing: 1em 0.5em;
  padding: 0 2em 1em 0;
  border: 1px solid orange;
}

td {
  width: 1.5em;
  height: 1.5em;
  background: #d2d2d2;
  text-align: center;
  vertical-align: middle;
}
```

#### Résultat

{{EmbedLiveSample("Espacer et ajouter une marge aux cellules de tableau", 400, 200)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Les propriétés {{CSSxRef("border-collapse")}}, {{CSSxRef("border-style")}}
- La propriété `border-spacing` modifie l'apparence de l'élément HTML {{HTMLElement("table")}}.
- Le module [de tableau CSS](/fr/docs/Web/CSS/Guides/Table)
