---
title: Combinateur de colonne
slug: Web/CSS/Column_combinator
---

{{CSSRef("Selectors")}}{{SeeCompatTable}}

Le **combinateur de colonne** (`||`) est placé entre deux sélecteurs CSS. Les éléments ciblés sont ceux ciblés par le deuxième sélecteur et qui appartiennent à un élément en colonne qui correspond au premier sélecteur.

```css
/* Les cellules de tableaux qui appartiennent */
/* à la colonne "selected" */
col.selected||td {
  background: gray;
}
```

## Syntaxe

```css
column-selector||cell-selector {
  /* propriétés pour le style */
}
```

## Exemples

### HTML

```html
<table border="1">
  <colgroup>
    <col span="2" />
    <col class="selected" />
  </colgroup>
  <tbody>
    <tr>
      <td>A</td>
      <td>B</td>
      <td>C</td>
    </tr>
    <tr>
      <td colspan="2">D</td>
      <td>E</td>
    </tr>
    <tr>
      <td>F</td>
      <td colspan="2">G</td>
    </tr>
  </tbody>
</table>
```

### CSS

```css
col.selected||td {
  background: gray;
  color: white;
  font-weight: bold;
}
```

### Résultat

{{EmbedLiveSample("Exemples", "100%")}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{HTMLElement("col")}}
- {{HTMLElement("colgroup")}}
- {{CSSxRef("grid")}}
