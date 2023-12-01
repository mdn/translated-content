---
title: border-top-style
slug: Web/CSS/border-top-style
---

{{CSSRef}}

La propriété **`border-top-style`** définit le style de ligne utilisé pour mettre en forme la bordure en haut d'une boîte.

{{EmbedInteractiveExample("pages/css/border-top-style.html")}}

> **Note :** La spécification ne définit pas la façon dont les bordures de différents styles se rejoignent dans les coins.

## Syntaxe

```css
/* Valeurs avec un mot-clé */
border-top-style: none;
border-top-style: hidden;
border-top-style: dotted;
border-top-style: dashed;
border-top-style: solid;
border-top-style: double;
border-top-style: groove;
border-top-style: ridge;
border-top-style: inset;
border-top-style: outset;

/* Valeurs globales */
border-top-style: inherit;
border-top-style: initial;
border-top-style: revert;
border-top-style: unset;
```

La propriété `border-top-style` se définit avec l'un des mots-clés utilisés par la propriété [`border-style`](/fr/docs/Web/CSS/border-style).

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

/* Des exemples pour border-top-style */
.b1 {
  border-top-style: none;
}
.b2 {
  border-top-style: hidden;
}
.b3 {
  border-top-style: dotted;
}
.b4 {
  border-top-style: dashed;
}
.b5 {
  border-top-style: solid;
}
.b6 {
  border-top-style: double;
}
.b7 {
  border-top-style: groove;
}
.b8 {
  border-top-style: ridge;
}
.b9 {
  border-top-style: inset;
}
.b10 {
  border-top-style: outset;
}
```

### Résultat

{{EmbedLiveSample('', 300, 200)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Les autres propriétés liées au style des bordures&nbsp;: [`border-left-style`](/fr/docs/Web/CSS/border-left-style), [`border-right-style`](/fr/docs/Web/CSS/border-right-style), [`border-bottom-style`](/fr/docs/Web/CSS/border-bottom-style), [`border-style`](/fr/docs/Web/CSS/border-style).

- Les autres propriétés liées à la bordure haute&nbsp;: [`border-top`](/fr/docs/Web/CSS/border-top), [`border-top-color`](/fr/docs/Web/CSS/border-top-color), [`border-top-width`](/fr/docs/Web/CSS/border-top-width).
