---
title: border-bottom-style
slug: Web/CSS/border-bottom-style
---

{{CSSRef}}

La propriété **`border-bottom-style`** définit le style de ligne utilisé pour mettre en forme la bordure en bas d'une boîte.

{{EmbedInteractiveExample("pages/css/border-bottom-style.html")}}

> **Note :** La spécification ne définit pas la façon dont les bordures de différents styles se rejoignent dans les coins.

## Syntaxe

```css
/* Valeurs avec un mot-clé */
border-bottom-style: none;
border-bottom-style: hidden;
border-bottom-style: dotted;
border-bottom-style: dashed;
border-bottom-style: solid;
border-bottom-style: double;
border-bottom-style: groove;
border-bottom-style: ridge;
border-bottom-style: inset;
border-bottom-style: outset;

/* Valeurs globales */
border-bottom-style: inherit;
border-bottom-style: initial;
border-bottom-style: revert;
border-bottom-style: unset;
```

La propriété `border-bottom-style` se définit avec l'un des mots-clés utilisés par la propriété [`border-style`](/fr/docs/Web/CSS/border-style).

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{csssyntax}}

## Exemples

### HTML

```html
<table>
  <tr>
    <td class="b1">none</td>
    <td class="b2">hidden</td>
    <td class="b3">petits points</td>
    <td class="b4">tirets</td>
  </tr>
  <tr>
    <td class="b5">solid</td>
    <td class="b6">double</td>
    <td class="b7">groove</td>
    <td class="b8">ridge</td>
  </tr>
  <tr>
    <td class="b9">inset</td>
    <td class="b10">outset</td>
  </tr>
</table>
```

### CSS

```css
/* On applique un style sur le tableau */
table {
  border-width: 2px;
  background-color: #52e385;
}
tr,
td {
  padding: 3px;
}

/* Des exemples pour border-bottom-style */
.b1 {
  border-bottom-style: none;
}
.b2 {
  border-bottom-style: hidden;
}
.b3 {
  border-bottom-style: dotted;
}
.b4 {
  border-bottom-style: dashed;
}
.b5 {
  border-bottom-style: solid;
}
.b6 {
  border-bottom-style: double;
}
.b7 {
  border-bottom-style: groove;
}
.b8 {
  border-bottom-style: ridge;
}
.b9 {
  border-bottom-style: inset;
}
.b10 {
  border-bottom-style: outset;
}
```

### Résultat

{{EmbedLiveSample('', 300, 200)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Les autres propriétés liées au style des bordures&nbsp;:

  - [`border-left-style`](/fr/docs/Web/CSS/border-left-style)
  - [`border-right-style`](/fr/docs/Web/CSS/border-right-style)
  - [`border-top-style`](/fr/docs/Web/CSS/border-top-style)
  - [`border-style`](/fr/docs/Web/CSS/border-style).

- Les autres propriétés liées à la bordure basse&nbsp;:

  - [`border-bottom`](/fr/docs/Web/CSS/border-bottom)
  - [`border-bottom-color`](/fr/docs/Web/CSS/border-bottom-color)
  - [`border-bottom-width`](/fr/docs/Web/CSS/border-bottom-width).
