---
title: empty-cells
slug: Web/CSS/Reference/Properties/empty-cells
l10n:
  sourceCommit: 46a4425d4b7160129fd4c8d0f684ccd0617326b7
---

La propriété [CSS](/fr/docs/Web/CSS) **`empty-cells`** permet de définir si les bordures et l'arrière-plan apparaissent autour des cellules {{HTMLElement("table")}} qui n'ont pas de contenu visible.

Cette propriété n'a d'effet que lorsque la propriété {{CSSxRef("border-collapse")}} vaut `separate`.

{{InteractiveExample("Démonstration CSS&nbsp;: empty-cells")}}

```css interactive-example-choice
empty-cells: show;
```

```css interactive-example-choice
empty-cells: hide;
```

```html interactive-example
<section class="default-example" id="default-example">
  <table class="transition-all" id="example-element">
    <tr>
      <th>Nom du client</th>
      <th>Âge</th>
    </tr>
    <tr>
      <td></td>
      <td>25</td>
    </tr>
    <tr>
      <td>Louise Q.</td>
      <td></td>
    </tr>
    <tr>
      <td>Owen B.</td>
      <td></td>
    </tr>
    <tr>
      <td>Stan L.</td>
      <td>71</td>
    </tr>
  </table>
</section>
```

```css interactive-example
th,
td {
  border: 2px solid #aa1199;
  padding: 0.25rem 0.5rem;
}
```

## Syntaxe

```css
/* Valeurs avec un mot-clé */
empty-cells: show;
empty-cells: hide;

/* Valeurs globales */
empty-cells: inherit;
empty-cells: initial;
empty-cells: revert;
empty-cells: revert-layer;
empty-cells: unset;
```

La propriété `empty-cells` se définit avec l'un des mots-clés listés ci-dessous.

### Valeurs

- `show`
  - : Un mot-clé indiquant que les bordures et l'arrière-plan doivent être dessinés comme pour les cellules normales.
- `hide`
  - : Un mot-clé indiquant qu'aucune bordure ou arrière-plan ne doit être dessiné.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Afficher ou masquer les cellules vides de tableau

#### HTML

```html
<table class="table_1">
  <tr>
    <td>Jean</td>
    <td>Biche</td>
  </tr>
  <tr>
    <td>Alice</td>
    <td></td>
  </tr>
</table>
<table class="table_2">
  <tr>
    <td>Jean</td>
    <td>Biche</td>
  </tr>
  <tr>
    <td>Alice</td>
    <td></td>
  </tr>
</table>
```

#### CSS

```css
.table_1 {
  empty-cells: show;
}

.table_2 {
  empty-cells: hide;
}

td,
th {
  border: 1px solid gray;
  padding: 0.5rem;
}
```

#### Résultat

{{EmbedLiveSample("Afficher ou masquer les cellules vides de tableau", "100%", 200)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{CSSxRef("border-collapse")}}
- [Apprendre&nbsp;: Mise en forme des tableaux](/fr/docs/Learn_web_development/Core/Styling_basics/Tables)
- Le module [des tableaux CSS](/fr/docs/Web/CSS/Guides/Table)
