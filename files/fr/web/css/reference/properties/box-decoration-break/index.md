---
title: box-decoration-break
slug: Web/CSS/Reference/Properties/box-decoration-break
l10n:
  sourceCommit: 46a4425d4b7160129fd4c8d0f684ccd0617326b7
---

La propriété [CSS](/fr/docs/Web/CSS) **`box-decoration-break`** définit comment les [fragments](/fr/docs/Web/CSS/Guides/Fragmentation) d'un élément doivent être affichés lorsqu'ils sont coupés sur plusieurs lignes, colonnes ou pages.

{{InteractiveExample("Démonstration CSS&nbsp;: box-decoration-break")}}

```css interactive-example-choice
-webkit-box-decoration-break: slice;
box-decoration-break: slice;
```

```css interactive-example-choice
-webkit-box-decoration-break: clone;
box-decoration-break: clone;
```

```html interactive-example
<section id="default-example">
  <div id="example-container">
    <span id="example-element">Ce texte se casse sur plusieurs lignes.</span>
  </div>
</section>
```

```css interactive-example
#example-container {
  width: 14rem;
}

#example-element {
  background: linear-gradient(to bottom right, #6f6f6f, black);
  color: white;
  box-shadow:
    8px 8px 10px 0 #ff1492,
    -5px -5px 5px 0 blue,
    5px 5px 15px 0 yellow;
  padding: 0 1em;
  border-radius: 16px;
  border-style: solid;
  margin-left: 10px;
  font: 24px sans-serif;
  line-height: 2;
}
```

## Syntaxe

```css
/* Valeurs avec un mot-clé */
box-decoration-break: slice;
box-decoration-break: clone;

/* Valeurs globales */
box-decoration-break: inherit;
box-decoration-break: initial;
box-decoration-break: revert;
box-decoration-break: revert-layer;
box-decoration-break: unset;
```

La propriété `box-decoration-break` est définie avec l'un des mots-clés définis ci-après.

### Valeurs

- `slice`
  - : L'élément est initialement affiché comme si la boîte n'était pas fragmentée puis le rendu de cette boîte hypothétique est découpé en fragments pour chaque ligne/colonne/page. On notera que la boîte hypothétique peut être différente pour chaque fragment car elle utilise sa propre hauteur (si la rupture apparaît dans la direction de l'élément) ou sa propre largeur (si la rupture apparaît dans la direction orthogonale). C'est la valeur initiale de la propriété.
- `clone`
  - : Le rendu de chaque fragment de boîte est obtenu indépendamment avec la bordure, le remplissage, la marge indiqués pour chacun des fragments. Les propriétés {{CSSxRef("border-radius")}}, {{CSSxRef("border-image")}} et {{CSSxRef("box-shadow")}} sont appliquées indépendamment à chaque fragment. L'arrière-plan est dessiné indépendamment pour chaque fragment (ainsi, une image d'arrière-plan avec {{CSSxRef("background-repeat", "background-repeat: no-repeat")}} pourra être présente à plusieurs reprises).

## Description

La valeur définie aura un impact sur l'apparence des propriétés suivantes&nbsp;:

- {{CSSxRef("background")}}
- {{CSSxRef("border")}}
- {{CSSxRef("border-image")}}
- {{CSSxRef("box-shadow")}}
- {{CSSxRef("clip-path")}}
- {{CSSxRef("margin")}}
- {{CSSxRef("padding")}}

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Fragments de boîte en ligne

Un élément en ligne avec une décoration de boîte peut avoir une apparence inattendue lorsqu'il contient des sauts de ligne à cause de la valeur initiale `slice`.
L'exemple suivant montre l'effet de l'ajout de `box-decoration-break: clone` à un {{HTMLElement("span")}} qui contient des balises {{HTMLElement("br")}}&nbsp;:

```css hidden
body {
  display: flex;
  background-color: grey;
  justify-content: space-around;
}

span {
  padding: 0em 1em;
  border-radius: 1rem;
  border-style: solid;
  margin: 1rem;
  font: 22px sans-serif;
  line-height: 2;
}
```

```css
span {
  background: linear-gradient(to bottom right, yellow, green);
  box-shadow:
    8px 8px 10px 0px deeppink,
    -5px -5px 5px 0px blue,
    5px 5px 15px 0px yellow;
}

#clone {
  -webkit-box-decoration-break: clone;
  box-decoration-break: clone;
}
```

```html
<p>
  <span>Le<br />renard<br />orange rapide</span>
</p>
<p>
  <span id="clone">Le<br />renard<br />orange rapide</span>
</p>
```

{{EmbedLiveSample("Fragments de boîte en ligne", "100%", 210)}}

### Fragments de boîte en bloc

L'exemple suivant montre l'apparence des éléments de bloc avec une décoration de boîte lorsqu'ils contiennent des sauts de ligne dans une [mise en page multicolonne](/fr/docs/Learn_web_development/Core/CSS_layout/Multiple-column_Layout).
Remarquez que le résultat de `box-decoration-break: slice` serait équivalent au premier {{HTMLElement("div")}} si on les empilait verticalement.

```css hidden
body {
  background-color: grey;
}
span {
  padding: 0em 2em;
  border-radius: 250px;
  border-style: solid;
  margin-left: 1em;
  font: 20px sans-serif;
  line-height: 1.5;
}
```

```css
span {
  display: block;
  background: linear-gradient(to bottom right, yellow, green);
  box-shadow:
    inset 8px 8px 10px 0px deeppink,
    inset -5px -5px 5px 0px blue,
    inset 5px 5px 15px 0px yellow;
}
#base {
  width: 33%;
}
.columns {
  columns: 3;
}

.clone {
  -webkit-box-decoration-break: clone;
  box-decoration-break: clone;
}
```

```html
<div id="base">
  <span>Le<br />renard<br />orange rapide</span>
</div>
<br />

<h2>'box-decoration-break: slice'</h2>
<div class="columns">
  <span>Le<br />renard<br />orange rapide</span>
</div>

<h2>'box-decoration-break: clone'</h2>
<div class="columns">
  <span class="clone">Le<br />renard<br />orange rapide</span>
</div>
```

{{EmbedLiveSample("Fragments de boîte en bloc", "", 340)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Les propriétés {{CSSxRef("break-after")}}, {{CSSxRef("break-before")}}, {{CSSxRef("break-inside")}}
