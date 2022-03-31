---
title: border-right-style
slug: Web/CSS/border-right-style
translation_of: Web/CSS/border-right-style
browser-compat: css.properties.border-right-style
---
{{CSSRef}}

La propriété **`border-right-style`** définit le style de ligne utilisé pour mettre en forme la bordure sur le côté droit d'une boîte.

{{EmbedInteractiveExample("pages/css/border-right-style.html")}}

> **Note :** La spécification ne définit pas la façon dont les bordures de différents styles se rejoignent dans les coins.

## Syntaxe

```css
/* Valeurs avec un mot-clé */
border-right-style: none;
border-right-style: hidden;
border-right-style: dotted;
border-right-style: dashed;
border-right-style: solid;
border-right-style: double;
border-right-style: groove;
border-right-style: ridge;
border-right-style: inset;
border-right-style: outset;

/* Valeurs globales */
border-right-style: inherit;
border-right-style: initial;
border-right-style: revert;
border-right-style: unset;
```

La propriété `border-right-style` se définit avec l'un des mots-clés utilisés par la propriété [`border-style`](/fr/docs/Web/CSS/border-style).

## Définition formelle

{{CSSInfo}}

### Syntaxe formelle

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

/* Des exemples pour border-right-style */
.b1 {border-right-style: none;}
.b2 {border-right-style: hidden;}
.b3 {border-right-style: dotted;}
.b4 {border-right-style: dashed;}
.b5 {border-right-style: solid;}
.b6 {border-right-style: double;}
.b7 {border-right-style: groove;}
.b8 {border-right-style: ridge;}
.b9 {border-right-style: inset;}
.b10 {border-right-style: outset;}
```

### Résultat

{{EmbedLiveSample('')}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Les autres propriétés liées au style des bordures&nbsp;: [`border-left-style`](/fr/docs/Web/CSS/border-left-style), [`border-top-style`](/fr/docs/Web/CSS/border-top-style), [`border-bottom-style`](/fr/docs/Web/CSS/border-bottom-style), [`border-style`](/fr/docs/Web/CSS/border-style).

- Les autres propriétés liées à la bordure droite&nbsp;: [`border-right`](/fr/docs/Web/CSS/border-right), [`border-right-color`](/fr/docs/Web/CSS/border-right-color), [`border-right-width`](/fr/docs/Web/CSS/border-right-width).
