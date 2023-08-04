---
title: table-layout
slug: Web/CSS/table-layout
---

{{CSSRef}}

La propriété **`table-layout`** définit l'algorithme utilisé pour disposer les cellules, lignes et colonnes d'un tableau.

{{EmbedInteractiveExample("pages/css/table-layout.html")}}

## Syntaxe

```css
/* Valeur utilisant un mot-clé */
table-layout: auto;
table-layout: fixed;

/* Valeurs globales */
table-layout: inherit;
table-layout: initial;
table-layout: unset;
```

### Valeurs

- {{cssxref("auto")}}
  - : Un algorithme automatique, utilisé communément par la plupart des navigateurs, est utilisé pour gérer la disposition du tableau. La largeur du tableau et de ses cellules dépendent de leur contenu.
- `fixed`

  - : La largeur du tableau et celles des colonnes sont définies grâce aux largeurs des éléments `table` et `col` ou grâce à la largeur (explicite) de la première ligne de cellules. Les cellules des lignes suivantes n'affectent pas la largeur des colonnes.

    Avec cette méthode « fixée », tout le tableau peut être rendu dès que la première ligne a été téléchargée et analysée. Cela permet d'accélérer le temps de rendu par rapport à la valeur `auto`. En revanche, le contenu des lignes (en dehors de la première), peut ne pas rentrer dans les colonnes avec la largeur calculée. Les cellules dont le contenu est trop large utiliseront la propriété {{cssxref("overflow")}} pour déterminer comment gérer le dépassement.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

Cet exemple utilise `table-layout: fixed` et une largeur donnée (avec la propriété `width`) afin que le tableau ne s'agrandisse pas avec son contenu. Ainsi, on peut voir l'effet de la propriété {{cssxref("text-overflow")}} et l'application d'une ellipse pour les mots trop longs pour le tableau.

### HTML

```html
<table class="exemple">
  <tr>
    <td width="7em">Jean</td>
    <td width="7em">Biche</td>
  </tr>
  <tr>
    <td>Jean-Roger-Michel</td>
    <td>du Domaine de la Biche</td>
  </tr>
</table>
```

### CSS

```css
.exemple {
  table-layout: fixed;
  width: 120px;
  border: 1px solid red;
}

tr,
td {
  border: solid;
}

td {
  border: 1px solid blue;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
```

### Résultat

{{EmbedLiveSample("Exemples")}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
