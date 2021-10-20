---
title: border-spacing
slug: Web/CSS/border-spacing
tags:
  - CSS
  - Propriété
  - Reference
  - Tableaux CSS
translation_of: Web/CSS/border-spacing
---
{{CSSRef}}

La propriété **`border-spacing`** définit la distance qu'il y a entre les bordures de cellules adjacentes d'un tableau (uniquement lorsque {{cssxref("border-collapse")}} vaut `separate`). Cette propriété est équivalente à l'attribut HTML déprécié {{htmlattrxref("cellspacing","table")}} mais une deuxième valeur peut être utilisée afin d'obtenir un espacement vertical différent de l'espacement horizontal.

{{EmbedInteractiveExample("pages/css/border-spacing.html")}}

La valeur de `border-spacing` est également utilisée le long du bord extérieur du tableau, où la distance entre la bordure du tableau et les cellules dans la première/dernière colonne ou ligne est la somme du `border-spacing` approprié (horizontal ou vertical) et du {{cssxref("padding")}} correspondant (top, right, bottom ou left).

> **Note :** La propriété `border-spacing` équivaut à l'attribut déprécié `cellspacing` de l'élément `<table>`, sauf qu'il possède une seconde valeur optionnelle qui peut être utilisée pour définir différents espacements horizontaux et verticaux.

## Syntaxe

```css
/* Une valeur de longueur */
/* Type <length>         */
border-spacing: 2px;

/* La première valeur indique */
/* l'espacement horizontal et */
/* la seconde le vertical.    */
border-spacing: 1cm 2em;

/* Valeurs globales */
border-spacing: inherit;
border-spacing: initial;
border-spacing: unset;
```

La propriété `border-spacing` peut être définie avec une ou deux valeurs :

- Avec une valeur de type {{cssxref("&lt;length&gt;")}}, la valeur est utilisée pour l'espacement vertical ainsi que pour l'espacement horizontal.
- Avec deux valeurs de type {{cssxref("&lt;length&gt;")}}, la première définit l'espacement horizontal (entre les colonnes) et la seconde définit l'espacement vertical (entre les lignes).

### Valeurs

- `length`
  - : Une valeur de longueur ({{cssxref("&lt;length&gt;")}} qui décrit l'espacement entre les cellules.

### Syntaxe formelle

{{csssyntax}}

## Exemples

### CSS

```css
table {
  border-collapse: separate;
  border: 1px solid #000;
}

td {
  border: 1px solid #000;
  padding: 5px;
}

.unevaleur {
  border-spacing: 5px;
}

.deuxvaleurs {
  border-spacing: 5px 10px;
}
```

### HTML

```html
<table class="unevaleur">
  <tr>
    <td>Ces cellules</td>
    <td>sont séparées par 5px</td>
    <td>tout autour.</td>
  </tr>
</table>
<br />
<table class="deuxvaleurs">
  <tr>
    <td>Ces cellules</td>
    <td>sont séparées par 5px d'écart horizontal</td>
    <td>et 10px d'écart vertical.</td>
  </tr>
</table>
```

### Résultat

{{EmbedLiveSample("Exemples","300","300")}}

## Spécifications

| Spécification                                                                                    | État                     | Commentaires         |
| ------------------------------------------------------------------------------------------------ | ------------------------ | -------------------- |
| {{SpecName('CSS2.1', 'tables.html#separated-borders', 'border-spacing')}} | {{Spec2('CSS2.1')}} | Définition initiale. |

{{cssinfo}}

## Compatibilité des navigateurs

{{Compat("css.properties.border-spacing")}}

## Voir auss

- {{cssxref("border-collapse")}}
- {{cssxref("border-style")}}
- L'élément HTML {{htmlelement("table")}}
