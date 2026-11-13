---
title: Combinateur de colonne
slug: Web/CSS/Reference/Selectors/Column_combinator
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

{{SeeCompatTable}}

Le **combinateur de colonne** (`||`) est placé entre deux sélecteurs CSS. Les éléments ciblés sont ceux ciblés par le deuxième sélecteur et qui appartiennent à un élément en colonne qui correspond au premier sélecteur.

```css
/* Les cellules de tableaux qui appartiennent */
/* à la colonne "selected" */
col.selected||td {
  background: gray;
}
```

## Syntaxe

```css-nolint
/* L'espace autour du combinateur || est optionnel mais recommandé. */
column-selector || cell-selector {
  /* propriétés de style */
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

- L'élément HTML {{HTMLElement("col")}}
- L'élément HTML {{HTMLElement("colgroup")}}
- La propriété {{CSSxRef("grid")}}
- La pseudo-classe {{CSSxRef(":nth-of-type")}}
- La pseudo-classe {{CSSxRef(":nth-last-of-type")}}
- Le module [des sélecteurs CSS](/fr/docs/Web/CSS/Guides/Selectors)
