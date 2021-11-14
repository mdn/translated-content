---
title: Combinateur de colonne
slug: Web/CSS/Column_combinator
tags:
  - CSS
  - Reference
  - Sélecteur
translation_of: Web/CSS/Column_combinator
original_slug: Web/CSS/Combinateur_colonne
---
{{CSSRef("Selectors")}}{{SeeCompatTable}}

Le **combinateur de colonne** (`||`) est placé entre deux sélecteurs CSS. Les éléments ciblés sont ceux ciblés par le deuxième sélecteur et qui appartiennent à un élément en colonne qui correspond au premier sélecteur.

```css
/* Les cellules de tableaux qui appartiennent */
/* à la colonne "selected" */
col.selected || td {
  background: gray;
}
```

## Syntaxe

    column-selector || cell-selector {
      /* propriétés pour le style */
    }

## Exemples

### HTML

```html
<table border="1">
  <colgroup>
    <col span="2"/>
    <col class="selected"/>
  </colgroup>
  <tbody>
    <tr>
      <td>A
      <td>B
      <td>C
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
col.selected || td {
  background: gray;
  color: white;
  font-weight: bold;
}
```

### Résultat

{{EmbedLiveSample("Exemples", "100%")}}

## Spécifications

| Spécification                                                                                            | État                                 | Commentaires         |
| -------------------------------------------------------------------------------------------------------- | ------------------------------------ | -------------------- |
| {{SpecName("CSS4 Selectors", "#the-column-combinator", "column combinator")}} | {{Spec2("CSS4 Selectors")}} | Définition initiale. |

## Compatibilité des navigateurs

{{Compat("javascript.builtins.Array.sort")}}

## Voir aussi

- {{HTMLElement("col")}}
- {{HTMLElement("colgroup")}}
- {{CSSxRef("grid")}}
