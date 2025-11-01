---
title: empty-cells
slug: Web/CSS/Reference/Properties/empty-cells
original_slug: Web/CSS/empty-cells
---

{{CSSRef}}

La propriété **`empty-cells`** définit la façon dont l'agent utilisateur doit afficher les bordures et l'arrière-plan des cellules d'un tableau ({{HTMLElement("table")}}) qui n'ont aucun contenu visible.

{{InteractiveExample("CSS Demo: empty-cells")}}

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
      <th>Client Name</th>
      <th>Age</th>
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
  border: 2px solid #a19;
  padding: 0.25rem 0.5rem;
}
```

Cette propriété est uniquement appliquée lorsque `border-collapse` vaut `separate`.

## Syntaxe

```css
/* Valeurs avec mot-clé */
empty-cells: show;
empty-cells: hide;

/* Valeurs globales */
empty-cells: inherit;
empty-cells: initial;
empty-cells: unset;
```

Cette propriété se définit avec l'un des mots-clés suivants.

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

### HTML

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

### CSS

```css
.table_1 {
  empty-cells: show;
}
.table_2 {
  empty-cells: hide;
}

td,
th {
  border: 1px solid #999;
  padding: 0.5rem;
}
```

### Résultat

{{EmbedLiveSample('Exemples', '100%', '200')}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
