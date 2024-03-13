---
title: border-collapse
slug: Web/CSS/border-collapse
---

{{CSSRef}}

La propriété **`border-collapse`** détermine si les bordures d'un tableau sont séparées ou fusionnées. Quand elles sont séparées, chaque cellule du tableau a ses propres bordures, distinctes. Quand elles sont fusionnées, les bordures des cellules sont partagées.

{{EmbedInteractiveExample("pages/css/border-collapse.html")}}

Le modèle des _bordures séparées_ est celui qui est traditionnellement utilisé par HTML. Les cellules adjacente ont des bordures distinctes et la distance entre ces bordures est définie par la propriété {{cssxref("border-spacing")}}.

Le modèle des _bordures fusionnées_ permet que les cellules adjacentes partagent leurs bordures. Lorsqu'on utilise ce modèle, les valeurs `inset` et `outset` de {{cssxref("border-style")}} se comportent respectivement comme `groove` et `ridge`.

## Syntaxe

```css
/* Valeurs avec un mot-clé */
border-collapse: collapse;
border-collapse: separate;

/* Valeurs globales */
border-collapse: inherit;
border-collapse: initial;
border-collapse: unset;
```

La propriété `border-collapse` est définie avec un seul mot-clé parmi ceux définis ci-après.

### Valeurs

- `collapse`
  - : Un mot-clé qui indique que le modèle des bordures fusionnées doit être utilisé.
- `separate`
  - : Un mot-clé qui indique que le modèle des bordures séparées doit être utilisé. C'est la valeur par défaut.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### CSS

```css
.collapse {
  border-collapse: collapse;
}
.separate {
  border-collapse: separate;
}
table {
  display: inline-table;
  margin: 1em;
  border: dashed 6px;
  border-width: 6px;
}
table th,
table td {
  border: solid 3px;
}
.fx {
  border-color: orange blue;
}
.gk {
  border-color: black red;
}
.ie {
  border-color: blue gold;
}
.tr {
  border-color: aqua;
}
.sa {
  border-color: silver blue;
}
.wk {
  border-color: gold blue;
}
.ch {
  border-color: red yellow green blue;
}
.bk {
  border-color: navy blue teal aqua;
}
.op {
  border-color: red;
}
```

### HTML

```html
<table class="separate">
  <caption>
    <code>border-collapse: separate</code>
  </caption>
  <tbody>
    <tr>
      <th>Navigateur</th>
      <th>Moteur de rendu</th>
    </tr>
    <tr>
      <td class="fx">Firefox</td>
      <td class="gk">Gecko</td>
    </tr>
    <tr>
      <td class="ie">Internet Explorer</td>
      <td class="tr">Trident</td>
    </tr>
    <tr>
      <td class="sa">Safari</td>
      <td class="wk">Webkit</td>
    </tr>
    <tr>
      <td class="ch">Chrome</td>
      <td class="bk">Blink</td>
    </tr>
    <tr>
      <td class="op">Opera</td>
      <td class="bk">Blink</td>
    </tr>
  </tbody>
</table>
<table class="collapse">
  <caption>
    <code>border-collapse: collapse</code>
  </caption>
  <tbody>
    <tr>
      <th>Navigateur</th>
      <th>Moteur de rendu</th>
    </tr>
    <tr>
      <td class="fx">Firefox</td>
      <td class="gk">Gecko</td>
    </tr>
    <tr>
      <td class="ie">Internet Explorer</td>
      <td class="tr">Trident</td>
    </tr>
    <tr>
      <td class="sa">Safari</td>
      <td class="wk">Webkit</td>
    </tr>
    <tr>
      <td class="ch">Chrome</td>
      <td class="bk">Blink</td>
    </tr>
    <tr>
      <td class="op">Opera</td>
      <td class="bk">Blink</td>
    </tr>
  </tbody>
</table>
```

### Résultat

{{EmbedLiveSample('Exemples', 400, 300)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{cssxref("border-spacing")}}
- {{cssxref("border-style")}}
- L'élément HTML {{HTMLElement("table")}} impacté `border-collapse`.
