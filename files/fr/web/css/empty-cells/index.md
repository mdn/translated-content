---
title: empty-cells
slug: Web/CSS/empty-cells
tags:
  - CSS
  - Propriété
  - Reference
translation_of: Web/CSS/empty-cells
---
{{CSSRef}}

La propriété **`empty-cells`** définit la façon dont l'agent utilisateur doit afficher les bordures et l'arrière-plan des cellules d'un tableau ({{HTMLElement("table")}}) qui n'ont aucun contenu visible.

{{EmbedInteractiveExample("pages/css/empty-cells.html")}}

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

### Syntaxe formelle

{{csssyntax}}

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

td, th {
  border: 1px solid #999;
  padding: 0.5rem;
}
```

### Résultat

{{EmbedLiveSample('Exemples', '100%', '200')}}

## Spécifications

| Spécification                                                                        | État                     | Commentaires         |
| ------------------------------------------------------------------------------------ | ------------------------ | -------------------- |
| {{SpecName('CSS2.1', 'tables.html#empty-cells', 'empty-cells')}} | {{Spec2('CSS2.1')}} | Définition initiale. |

{{cssinfo}}

## Compatibilité des navigateurs

{{Compat("css.properties.empty-cells")}}
