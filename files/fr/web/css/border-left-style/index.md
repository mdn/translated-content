---
title: border-left-style
slug: Web/CSS/border-left-style
translation_of: Web/CSS/border-left-style
browser-compat: css.properties.border-left-style
---
{{CSSRef}}

La propriété **`border-left-style`** définit le style de ligne utilisé pour mettre en forme la bordure sur le côté gauche d'une boîte.

{{EmbedInteractiveExample("pages/css/border-left-style.html")}}

> **Note :** La spécification ne définit pas la façon dont les bordures de différents styles se rejoignent dans les coins.

## Syntaxe

```css
/* Valeurs avec un mot-clé */
border-left-style: none;
border-left-style: hidden;
border-left-style: dotted;
border-left-style: dashed;
border-left-style: solid;
border-left-style: double;
border-left-style: groove;
border-left-style: ridge;
border-left-style: inset;
border-left-style: outset;

/* Valeurs globales */
border-left-style: inherit;
border-left-style: initial;
border-left-style: revert;
border-left-style: unset;
```

La propriété `border-left-style` se définit avec l'un des mots-clés utilisés par la propriété [`border-style`](/fr/docs/Web/CSS/border-style).

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
  background-color: #52E385;
}
tr, td {
  padding: 3px;
}

/* Des exemples pour border-left-style */
.b1 {border-left-style: none;}
.b2 {border-left-style: hidden;}
.b3 {border-left-style: dotted;}
.b4 {border-left-style: dashed;}
.b5 {border-left-style: solid;}
.b6 {border-left-style: double;}
.b7 {border-left-style: groove;}
.b8 {border-left-style: ridge;}
.b9 {border-left-style: inset;}
.b10 {border-left-style: outset;}
```

### Résultat

{{EmbedLiveSample('', 300, 200)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Les autres propriétés liées au style des bordures&nbsp;: [`border-right-style`](/fr/docs/Web/CSS/border-right-style), [`border-top-style`](/fr/docs/Web/CSS/border-top-style), [`border-bottom-style`](/fr/docs/Web/CSS/border-bottom-style), [`border-style`](/fr/docs/Web/CSS/border-style).

- Les autres propriétés liées à la bordure gauche&nbsp;: [`border-left`](/fr/docs/Web/CSS/border-left), [`border-left-color`](/fr/docs/Web/CSS/border-left-color), [`border-left-width`](/fr/docs/Web/CSS/border-left-width).
