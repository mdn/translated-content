---
title: border-collapse
slug: Web/CSS/Reference/Properties/border-collapse
l10n:
  sourceCommit: 46a4425d4b7160129fd4c8d0f684ccd0617326b7
---

La propriété [CSS](/fr/docs/Web/CSS) **`border-collapse`** définit si les cellules à l'intérieur d'un élément HTML {{HTMLElement("table")}} ont des bordures partagées ou séparées.

Lorsque les cellules sont fusionnées, la valeur `inset` de {{CSSxRef("border-style")}} se comporte comme `ridge`, et `outset` se comporte comme `groove`.

Lorsque les cellules sont séparées, la distance entre les cellules est définie par la propriété {{CSSxRef("border-spacing")}}.

{{InteractiveExample("Démonstration CSS&nbsp;: border-collapse")}}

```css interactive-example-choice
border-collapse: collapse;
```

```css interactive-example-choice
border-collapse: separate;
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
  border-color: crimson dodgerblue orange limegreen;
  padding: 0.75rem;
}
```

## Syntaxe

```css
/* Valeurs avec un mot-clé */
border-collapse: collapse;
border-collapse: separate;

/* Valeurs globales */
border-collapse: inherit;
border-collapse: initial;
border-collapse: revert;
border-collapse: revert-layer;
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

### Un tableau coloré des moteurs de navigateur

#### HTML

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

#### CSS

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
  border: dashed 5px;
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
.ed {
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

#### Résultat

{{EmbedLiveSample("Un tableau coloré des moteurs de navigateur", 400, 300)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{CSSxRef("border-spacing")}}, {{CSSxRef("border-style")}}
- La propriété `border-collapse` modifie l'apparence de l'élément HTML {{HTMLElement("table")}}.
- Le module [de tableau CSS](/fr/docs/Web/CSS/Guides/Table)
