---
title: border-color
slug: Web/CSS/Reference/Properties/border-color
l10n:
  sourceCommit: 1dbba9f7a2c2e35c6e01e8a63159e2aac64b601b
---

La propriété [raccourcie](/fr/docs/Web/CSS/Guides/Cascade/Shorthand_properties) [CSS](/fr/docs/Web/CSS) **`border-color`** définit la couleur de la bordure d'un élément.

{{InteractiveExample("Démonstration CSS&nbsp;: border-color")}}

```css interactive-example-choice
border-color: red;
```

```css interactive-example-choice
border-color: red #32a1ce;
```

```css interactive-example-choice
border-color: red rgb(170 50 220 / 0.6) green;
```

```css interactive-example-choice
border-color: red yellow green hsl(60 90% 50% / 0.8);
```

```css interactive-example-choice
border-color: red yellow green transparent;
```

```html interactive-example
<section class="default-example" id="default-example">
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
```

## Propriétés constitutives

Cette propriété est une propriété raccourcie pour les propriétés CSS suivantes&nbsp;:

- {{CSSxRef("border-bottom-color")}}
- {{CSSxRef("border-left-color")}}
- {{CSSxRef("border-right-color")}}
- {{CSSxRef("border-top-color")}}

## Syntaxe

```css
/* Valeurs de type <color> */
border-color: red;

/* haut et bas | gauche et droite */
border-color: red #f015ca;

/* haut | gauche et droite | bas */
border-color: red rgb(240 30 50 / 70%) green;

/* haut | droite | bas | gauche */
border-color: red yellow green blue;

/* Valeurs globales */
border-color: inherit;
border-color: initial;
border-color: revert;
border-color: revert-layer;
border-color: unset;
```

La propriété `border-color` peut être définie avec une, deux, trois ou quatre valeurs.

- Lorsqu'**une** valeur est définie, elle applique la même couleur aux **quatre côtés**.
- Lorsqu'**il y a deux** valeurs, la première couleur s'applique au **haut et au bas**, la seconde à la **gauche et à la droite**.
- Lorsqu'**il y a trois** valeurs, la première couleur s'applique au **haut**, la seconde à la **gauche et à la droite**, la troisième au **bas**.
- Lorsqu'**il y a quatre** valeurs, les couleurs s'appliquent au **haut**, à la **droite**, au **bas** et à la **gauche** dans cet ordre (dans le sens des aiguilles d'une montre).

### Valeurs

- {{CSSxRef("&lt;color&gt;")}}
  - : Définit la couleur de la bordure.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Utilisation complète de `border-color`

#### HTML

```html
<div id="unevaleur">
  <p><code>border-color: red;</code> équivalent à</p>
  <ul>
    <li><code>border-top-color: red;</code></li>
    <li><code>border-right-color: red;</code></li>
    <li><code>border-bottom-color: red;</code></li>
    <li><code>border-left-color: red;</code></li>
  </ul>
</div>
<div id="horzvert">
  <p><code>border-color: gold red;</code> équivalent à</p>
  <ul>
    <li><code>border-top-color: gold;</code></li>
    <li><code>border-right-color: red;</code></li>
    <li><code>border-bottom-color: gold;</code></li>
    <li><code>border-left-color: red;</code></li>
  </ul>
</div>
<div id="hauthoribas">
  <p><code>border-color: red cyan gold;</code> équivalent à</p>
  <ul>
    <li><code>border-top-color: red;</code></li>
    <li><code>border-right-color: cyan;</code></li>
    <li><code>border-bottom-color: gold;</code></li>
    <li><code>border-left-color: cyan;</code></li>
  </ul>
</div>
<div id="hdbg">
  <p><code>border-color: red cyan black gold;</code> équivalent à</p>
  <ul>
    <li><code>border-top-color: red;</code></li>
    <li><code>border-right-color: cyan;</code></li>
    <li><code>border-bottom-color: black;</code></li>
    <li><code>border-left-color: gold;</code></li>
  </ul>
</div>
```

#### CSS

```css
#unevaleur {
  border-color: red;
}

#horzvert {
  border-color: gold red;
}

#hauthoribas {
  border-color: red cyan gold;
}

#hdbg {
  border-color: red cyan black gold;
}

/* Définir la largeur et le style pour tous les divs */
div {
  border: solid 0.3em;
  width: auto;
  margin: 0.5em;
  padding: 0.5em;
}

ul {
  margin: 0;
  list-style: none;
}
```

#### Résultat

{{EmbedLiveSample("Utilisation complète de `border-color`", 600, 700)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Les propriétés CSS liées à la couleur de la bordure&nbsp;: {{CSSxRef("border")}}, {{CSSxRef("border-top-color")}}, {{CSSxRef("border-right-color")}}, {{CSSxRef("border-bottom-color")}}, {{CSSxRef("border-left-color")}},
- Les autres propriétés CSS liées à la bordure&nbsp;: {{CSSxRef("border-width")}}, {{CSSxRef("border-style")}}
- Le type de donnée {{CSSxRef("&lt;color&gt;")}}
- Les autres propriétés liées aux couleurs&nbsp;: {{CSSxRef("color")}}, {{CSSxRef("background-color")}}, {{CSSxRef("outline-color")}}, {{CSSxRef("text-decoration-color")}}, {{CSSxRef("text-emphasis-color")}}, {{CSSxRef("text-shadow")}}, {{CSSxRef("caret-color")}} et {{CSSxRef("column-rule-color")}}
- [Appliquer des couleurs sur des éléments HTML grâce à CSS](/fr/docs/Web/CSS/Guides/Colors/Applying_color)
