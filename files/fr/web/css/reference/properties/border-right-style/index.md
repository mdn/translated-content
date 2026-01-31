---
title: border-right-style
slug: Web/CSS/Reference/Properties/border-right-style
l10n:
  sourceCommit: 46a4425d4b7160129fd4c8d0f684ccd0617326b7
---

La propriété [CSS](/fr/docs/Web/CSS) **`border-right-style`** permet de définir le style de ligne de la {{CSSxRef("border")}} droite d'un élément.

> [!NOTE]
> La spécification ne définit pas comment les bordures de styles différents se rejoignent dans les coins.

{{InteractiveExample("Démonstration CSS&nbsp;: border-right-style")}}

```css interactive-example-choice
border-right-style: none;
```

```css interactive-example-choice
border-right-style: dotted;
```

```css interactive-example-choice
border-right-style: dashed;
```

```css interactive-example-choice
border-right-style: solid;
```

```css interactive-example-choice
border-right-style: groove;
```

```css interactive-example-choice
border-right-style: inset;
```

```html interactive-example
<section id="default-example">
  <div class="transition-all" id="example-element">
    Ceci est une boîte avec une bordure autour.
  </div>
</section>
```

```css interactive-example
#example-element {
  background-color: #eeeeee;
  color: black;
  border: 0.75em solid;
  padding: 0.75em;
  width: 80%;
  height: 100px;
}

body {
  background-color: white;
}
```

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
border-right-style: revert-layer;
border-right-style: unset;
```

La propriété `border-right-style` se définit avec un seul mot-clé de type {{CSSxRef("&lt;line-style&gt;")}}.

## Définition formelle

{{CSSInfo}}

### Syntaxe formelle

{{CSSSyntax}}

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

/* Des exemples pour border-right-style */
.b1 {
  border-right-style: none;
}
.b2 {
  border-right-style: hidden;
}
.b3 {
  border-right-style: dotted;
}
.b4 {
  border-right-style: dashed;
}
.b5 {
  border-right-style: solid;
}
.b6 {
  border-right-style: double;
}
.b7 {
  border-right-style: groove;
}
.b8 {
  border-right-style: ridge;
}
.b9 {
  border-right-style: inset;
}
.b10 {
  border-right-style: outset;
}
```

### Résultat

{{EmbedLiveSample("Exemples")}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Les autres propriétés liées au style des bordures&nbsp;: {{CSSxRef("border-bottom-style")}}, {{CSSxRef("border-left-style")}}, {{CSSxRef("border-top-style")}} et {{CSSxRef("border-style")}}.
- Les autres propriétés liées à la bordure droite&nbsp;: {{CSSxRef("border-right")}}, {{CSSxRef("border-right-color")}} et {{CSSxRef("border-right-width")}}.
