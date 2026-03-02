---
title: corner-shape
slug: Web/CSS/Reference/Properties/corner-shape
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

{{SeeCompatTable}}

La [propriété raccourcie](/fr/docs/Web/CSS/Guides/Cascade/Shorthand_properties) [CSS](/fr/docs/Web/CSS) **`corner-shape`** permet de définir la forme des coins d'une boîte, dans la zone déterminée par la valeur de sa propriété {{CSSxRef("border-radius")}}.

## Propriétés constitutives

La propriété `corner-shape` est une forme raccourcie pour les propriétés physiques suivantes&nbsp;:

- {{CSSxRef("corner-top-left-shape")}}
- {{CSSxRef("corner-top-right-shape")}}
- {{CSSxRef("corner-bottom-left-shape")}}
- {{CSSxRef("corner-bottom-right-shape")}}

## Syntaxe

```css
/* Valeur unique appliquée aux quatre coins */
corner-shape: bevel;

/* coin supérieur gauche et inférieur droit, coin supérieur droit et inférieur gauche */
corner-shape: notch superellipse(0.6);

/* coin supérieur gauche, coin supérieur droit et inférieur gauche, coin inférieur droit */
corner-shape: superellipse(-1.2) square squircle;

/* coin supérieur gauche, coin supérieur droit, coin inférieur droit, coin inférieur gauche */
corner-shape: scoop superellipse(-1.6) superellipse(-2.2) round;

/* Valeurs globales */
corner-shape: inherit;
corner-shape: initial;
corner-shape: revert;
corner-shape: revert-layer;
corner-shape: unset;
```

La propriété `corner-shape` peut être définie avec une, deux, trois ou quatre valeurs {{CSSxRef("&lt;corner-shape-value&gt;")}}&nbsp;:

- Si **une** valeur est utilisée, elle définit la forme des **quatre coins**.
- Si **deux** valeurs sont utilisées, la première s'applique aux **coins supérieur gauche et inférieur droit**, la seconde aux **coins supérieur droit et inférieur gauche**.
- Si **trois** valeurs sont utilisées, la première définit la forme du **coin supérieur gauche**, la seconde celle des **coins supérieur droit et inférieur gauche**, la troisième celle du **coin inférieur droit**.
- Si quatre valeurs sont utilisées, elles définissent la forme des **coins supérieur gauche**, **supérieur droit**, **inférieur droit** et **inférieur gauche**, dans cet ordre (sens horaire).

### Valeurs

- {{CSSxRef("corner-shape-value")}}
  - : Une fonction {{CSSxRef("superellipse()")}} ou un mot-clé équivalent décrivant la forme du coin.

## Description

La propriété `corner-shape` permet de modifier la forme des coins arrondis créés par la propriété {{CSSxRef("border-radius")}} et ses variantes détaillées. Les coins déjà arrondis peuvent être personnalisés davantage selon le degré d'arrondi appliqué, ce qui permet de créer, par exemple, des coins biseautés, encochés ou en forme de carré-rond (<i lang="en">squircle</i> en anglais). Les bordures, contours, ombres et effets d'arrière-plan appliqués au conteneur suivront la forme définie du coin.

Si aucune valeur de `border-radius` n'est appliquée à un conteneur, ou si `border-radius` vaut `0`, `corner-shape` n'aura aucun effet.

La propriété raccourcie `corner-shape` et ses variantes associées [`corner-*-shape`](#corner--shape_shorthands_and_longhands) acceptent de une à quatre valeurs {{CSSxRef("&lt;corner-shape-value>")}}. Chacune est définie directement comme une fonction {{CSSxRef("superellipse()")}} ou un mot-clé décrivant une forme courante. Chaque mot-clé correspond à une valeur précise de `superellipse()`.

La valeur initiale de `corner-shape` est `round`, ce qui donne le même effet que l'utilisation de `border-radius` seul, sans `corner-shape`. Il existe aussi le mot-clé `square`, qui donne le même effet que des coins carrés par défaut, supprimant ainsi tout `border-radius` appliqué. La valeur `bevel` trace une ligne droite entre les deux extrémités d'un `border-radius`.

Différentes valeurs de `corner-shape` peuvent être animées de façon fluide, car les équivalents `superellipse()` des mots-clés servent de valeurs d'interpolation.

La propriété raccourcie `corner-shape` est particulièrement utile si vous souhaitez que les quatre bordures soient identiques, ou si vous voulez définir différentes valeurs en une seule déclaration. Pour ne définir qu'une ou deux formes de coins à la fois, utilisez les variantes raccourcies ou détaillées `corner-*-shape`.

### Raccourcis et variantes détaillées de `corner-*-shape`

Le raccourci `corner-shape` définit la forme des quatre coins en une seule déclaration.

Pour définir la forme d'un seul coin à la fois, utilisez les variantes détaillées&nbsp;:

- Propriétés détaillées physiques&nbsp;:
  - {{CSSxRef("corner-bottom-left-shape")}}
  - {{CSSxRef("corner-bottom-right-shape")}}
  - {{CSSxRef("corner-top-left-shape")}}
  - {{CSSxRef("corner-top-right-shape")}}
- Propriétés détaillées logiques&nbsp;:
  - {{CSSxRef("corner-start-start-shape")}}
  - {{CSSxRef("corner-start-end-shape")}}
  - {{CSSxRef("corner-end-start-shape")}}
  - {{CSSxRef("corner-end-end-shape")}}

Pour définir la forme de deux coins à la fois, utilisez les raccourcis de côté&nbsp;:

- Raccourcis physiques&nbsp;:
  - {{CSSxRef("corner-top-shape")}}
  - {{CSSxRef("corner-right-shape")}}
  - {{CSSxRef("corner-bottom-shape")}}
  - {{CSSxRef("corner-left-shape")}}
- Raccourcis logiques&nbsp;:
  - {{CSSxRef("corner-block-start-shape")}}
  - {{CSSxRef("corner-block-end-shape")}}
  - {{CSSxRef("corner-inline-start-shape")}}
  - {{CSSxRef("corner-inline-end-shape")}}

### Contraindre les rayons de forme des coins opposés

Lorsque des coins opposés ont des valeurs de `border-radius` et de `corner-shape` qui provoqueraient un chevauchement des formes, le navigateur ajuste les valeurs pour éviter ce chevauchement.

Par exemple, les valeurs suivantes provoqueraient un chevauchement des coins supérieur gauche et inférieur droit, le navigateur ajuste donc le premier composant de `border-radius` pour éviter cela.

```css
div {
  width: 480px;
  height: 200px;
  background-color: goldenrod;
  border-radius: 80% 20px;
  corner-shape: scoop;
}
```

### Propriétés qui suivent la forme du coin

Les propriétés suivantes suivent la forme du coin lorsqu'elles sont appliquées au conteneur&nbsp;:

- {{CSSxRef("background-color")}}
- {{CSSxRef("background-image")}}
- {{CSSxRef("border")}}
- {{CSSxRef("outline")}}
- {{CSSxRef("box-shadow")}}
- {{CSSxRef("overflow")}}
- {{CSSxRef("backdrop-filter")}}

Voir la [démonstration des propriétés qui suivent la forme du coin](#demonstration_of_properties_that_follow_the_corner-shape) pour quelques exemples.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

## Examples

### Utilisation simple de `corner-shape`

#### HTML

Le balisage de cet exemple contient un seul élément HTML {{HTMLElement("div")}}.

```html live-sample___basic-corner-shape
<div>Jolis coins creusés</div>
```

#### CSS

Nous donnons à la boîte une hauteur ({{CSSxRef("height")}}) fixe, une ombre portée ({{CSSxRef("box-shadow")}}), un `border-radius` de 30 pixels et un `corner-shape` de `scoop`, ainsi que quelques styles supplémentaires masqués ici pour plus de clarté.

```css hidden live-sample___basic-corner-shape
body {
  font-family: "Helvetica", "Arial", sans-serif;
  width: 240px;
  margin: 20px auto;
}

div {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: cyan;
  background-image: linear-gradient(
    to bottom,
    rgb(255 255 255 / 0),
    rgb(255 255 255 / 0.5)
  );
}

@supports not (corner-shape: scoop) {
  body {
    all: unset !important;
  }

  body::before {
    content: "Votre navigateur ne prend pas en charge la propriété 'corner-shape'.";
    color: black;
    background-color: #ffcd33;
    display: block;
    width: 100%;
    text-align: center;
    padding: 1rem 0;
  }

  body > * {
    display: none;
  }
}
```

```css live-sample___basic-corner-shape
div {
  height: 180px;
  box-shadow: 1px 1px 3px gray;
  border-radius: 30px;
  corner-shape: scoop;
}
```

#### Résultat

Le résultat affiché ressemble à ceci&nbsp;:

{{EmbedLiveSample("basic-corner-shape", "100%", 240)}}

Remarquez comment la valeur `corner-shape` de `scoop` donne à la boîte des coins concaves — la courbe est une inversion de la courbe par défaut de `border-radius`. Notez aussi que l'arrière-plan, la bordure et l'ombre portée suivent la forme de la courbe.

### Démonstration des propriétés qui suivent la `corner-shape`

#### HTML

Le balisage de cet exemple contient un seul élément HTML {{HTMLElement("div")}} avec du texte à l'intérieur.

```html live-sample___styles-following-corner-shape
<div>
  Certaines propriétés suivent la forme du coin, comme la bordure, le contour,
  l'ombre portée, le débordement et le filtre d'arrière-plan. Cela est utile
  pour aider différents aspects de votre conception à ne pas entrer en conflit.
  Comme montré, cela peut produire des effets visuels intéressants, donc vous
  devriez tester soigneusement votre conception.
</div>
```

#### CSS

Pour démontrer comment certaines propriétés suivent la forme des coins d'un conteneur, nous appliquons une {{CSSxRef("background-image")}} au `<body>` du document, puis un `border-radius` de `40px` et un `corner-shape` de `scoop notch` au `<div>`.

Nous appliquons ensuite les éléments suivants au `<div>`&nbsp;:

- Une {{CSSxRef("background-color")}} semi-transparente.
- Une couleur et un style de {{CSSxRef("border")}} différents sur chaque bord.
- Un {{CSSxRef("backdrop-filter")}} qui inverse la {{CSSxRef("background-image")}} définie sur le `<body>`.
- Un style `:hover` pour montrer que la zone cliquable dépasse la forme du coin.

Des styles d'installation supplémentaires ont été masqués pour plus de clarté.

```css hidden live-sample___styles-following-corner-shape
html {
  height: 100%;
}

body {
  font-family: "Helvetica", "Arial", sans-serif;
  height: inherit;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

div {
  width: 240px;
  height: 180px;
}

@supports not (corner-shape: scoop notch) {
  body {
    all: unset !important;
  }

  body::before {
    content: "Votre navigateur ne prend pas en charge la propriété 'corner-shape'.";
    color: black;
    background-color: #ffcd33;
    display: block;
    width: 100%;
    text-align: center;
    padding: 1rem 0;
  }

  body > * {
    display: none;
  }
}
```

```css live-sample___styles-following-corner-shape
body {
  background: url("https://mdn.github.io/shared-assets/images/examples/leopard.jpg")
    no-repeat;
  background-size: cover;
}

div {
  border-radius: 40px;
  corner-shape: scoop notch;
  background-color: rgb(255 255 255 / 0.2);
  border-top: 3px solid blue;
  border-left: 6px dashed red;
  border-bottom: 9px solid yellow;
  border-right: 12px double green;
  backdrop-filter: invert(100%);
}

div:hover {
  background-color: white;
}
```

#### Résultat

Le résultat affiché ressemble à ceci&nbsp;:

{{EmbedLiveSample("styles-following-corner-shape", "100%", "240")}}

Remarquez que la plupart des propriétés appliquées suivent la forme du `<div>` résultant de ses styles `corner-shape`, mais pas toutes. Le contenu est affiché par rapport à la boîte d'origine, et l'effet de survol s'applique toujours si vous survolez le texte qui dépasse des coins supérieur et inférieur gauches.

### Comparer les valeurs de `corner-shape`

Dans cette démonstration, vous pouvez sélectionner différentes valeurs de `corner-shape` et définir différentes valeurs de {{CSSxRef("border-radius")}} sur un conteneur pour comparer les effets.

#### HTML

Le balisage de cet exemple contient un sélecteur ({{HTMLElement("select")}}) permettant de choisir différentes valeurs de `corner-shape`, un curseur [`<input type="range">`](/fr/docs/Web/HTML/Reference/Elements/input/range) pour sélectionner différentes valeurs de `border-radius`, et un élément HTML {{HTMLElement("section")}} pour appliquer ces valeurs. Les éléments HTML {{HTMLElement("option")}} du sélecteur proposent plusieurs mots-clés et valeurs {{CSSxRef("superellipse()")}}, répartis en deux groupes avec {{HTMLElement("optgroup")}}. Pour les mots-clés, la valeur équivalente de `superellipse()` est aussi indiquée, séparée par une barre verticale.

```html live-sample___corner-shape-select
<form>
  <div>
    <label for="corner-shape-choice"
      >Choisir une valeur de corner-shape&nbsp;:</label
    >
    <select id="corner-shape-choice">
      <optgroup label="Mots-clés">
        <option value="square">square | superellipse(infinity)</option>
        <option selected value="squircle">squircle | superellipse(2)</option>
        <option value="round">round | superellipse(1)</option>
        <option value="bevel">bevel | superellipse(0)</option>
        <option value="scoop">scoop | superellipse(-1)</option>
        <option value="notch">notch | superellipse(-infinity)</option>
      </optgroup>
      <optgroup label="Fonctions">
        <option>superellipse(3)</option>
        <option>superellipse(1.5)</option>
        <option>superellipse(0.5)</option>
        <option>superellipse(-0.5)</option>
        <option>superellipse(-1.5)</option>
        <option>superellipse(-3)</option>
      </optgroup>
    </select>
  </div>
  <div>
    <label for="radius-slider"
      >Choisir une valeur de border-radius&nbsp;:</label
    >
    <input
      type="range"
      id="radius-slider"
      min="0"
      value="45"
      max="90"
      step="1" />
  </div>
</form>
<section></section>
```

#### CSS

Nous appliquons une {{CSSxRef("box-shadow")}} à l'élément `<section>`. Nous donnons aussi quelques styles de base à `<section>` et aux éléments du formulaire, qui ont été masqués pour plus de clarté.

```css hidden live-sample___corner-shape-select
html {
  font-family: "Helvetica", "Arial", sans-serif;
}

body {
  width: fit-content;
  margin: 20px auto;
}

section {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
}

select {
  padding: 3px 5px;
}

form div:nth-of-type(2) {
  margin-top: 5px;
  display: flex;
}

section {
  width: 100%;
  height: 180px;
  background-color: gold;
  background-image: linear-gradient(
    to bottom,
    rgb(255 255 255 / 0),
    rgb(255 255 255 / 0.5)
  );
}

@supports not (corner-shape: scoop) {
  body {
    all: unset !important;
  }

  body::before {
    content: "Votre navigateur ne prend pas en charge la propriété 'corner-shape'.";
    color: black;
    background-color: #ffcd33;
    display: block;
    width: 100%;
    text-align: center;
    padding: 1rem 0;
  }

  body > * {
    display: none;
  }
}
```

```css live-sample___corner-shape-select
section {
  box-shadow: 1px 1px 3px gray;
}
```

```js hidden live-sample___corner-shape-select
const rectangle = document.querySelector("section");
const select = document.querySelector("select");
const range = document.getElementById("radius-slider");

function setCorners() {
  rectangle.style.cornerShape = select.value;
  const brValue = `${range.value}px`;
  rectangle.style.borderRadius = brValue;
  rectangle.innerHTML = `<div><code>corner-shape: ${select.value};</code><br><code>border-radius: ${brValue};</code></div>`;
}

select.addEventListener("change", setCorners);
range.addEventListener("input", setCorners);
setCorners();
```

Le JavaScript qui applique les valeurs sélectionnées par l'utilisateur·ice à `<section>` a été masqué pour plus de clarté.

#### Résultat

Le résultat affiché ressemble à ceci&nbsp;:

{{EmbedLiveSample("corner-shape-select", "100%", 300)}}

Essayez de sélectionner différentes valeurs pour voir comment cela affecte la forme des coins.

### Comparaison des valeurs de `superellipse()`

Dans cet exemple, nous proposons deux curseurs [`<input type="range">`](/fr/docs/Web/HTML/Reference/Elements/input/range) permettant de parcourir de nombreuses valeurs différentes de `corner-shape` avec {{CSSxRef("superellipse()")}} et de {{CSSxRef("border-radius")}} pour comparer les effets de chaque valeur sur un conteneur.

#### HTML

Le balisage de cet exemple contient deux éléments `<input type="range">` permettant de sélectionner différentes valeurs de `corner-shape` `superellipse()` et de `border-radius`, ainsi qu'un élément HTML {{HTMLElement("section")}} pour appliquer ces valeurs.

```html live-sample___superellipse-slider
<form>
  <div>
    <label for="superellipse-slider"
      >Choisir une valeur superellipse()&nbsp;:</label
    >
    <input
      type="range"
      id="superellipse-slider"
      min="-5"
      value="0"
      max="5"
      step="0.1" />
  </div>
  <div>
    <label for="radius-slider"
      >Choisir une valeur de border-radius&nbsp;:</label
    >
    <input
      type="range"
      id="radius-slider"
      min="0"
      value="45"
      max="90"
      step="1" />
  </div>
</form>
<section></section>
```

#### CSS

Nous appliquons une ombre portée ({{CSSxRef("box-shadow")}}) à l'élément `<section>`. Des styles de base supplémentaires ont été masqués pour plus de clarté.

```css hidden live-sample___superellipse-slider
html {
  font-family: "Helvetica", "Arial", sans-serif;
}

body {
  width: fit-content;
  margin: 20px auto;
}

section {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
}

form div {
  margin-top: 5px;
  display: flex;
}

section {
  width: 100%;
  height: 180px;
  background-color: orange;
  background-image: linear-gradient(
    to bottom,
    rgb(255 255 255 / 0),
    rgb(255 255 255 / 0.5)
  );
}

@supports not (corner-shape: superellipse(0)) {
  body {
    all: unset !important;
  }

  body::before {
    content: "Votre navigateur ne prend pas en charge la propriété 'corner-shape'.";
    color: black;
    background-color: #ffcd33;
    display: block;
    width: 100%;
    text-align: center;
    padding: 1rem 0;
  }

  body > * {
    display: none;
  }
}
```

```css live-sample___superellipse-slider
section {
  box-shadow: 1px 1px 3px gray;
}
```

```js hidden live-sample___superellipse-slider
const rectangle = document.querySelector("section");
const superEllipseRange = document.getElementById("superellipse-slider");
const borderRadiusRange = document.getElementById("radius-slider");

function setCorners() {
  const seValue = `superellipse(${superEllipseRange.value})`;
  rectangle.style.cornerShape = seValue;
  const brValue = `${borderRadiusRange.value}px`;
  rectangle.style.borderRadius = brValue;
  rectangle.innerHTML = `<div><code>corner-shape: ${seValue};</code><br><code>border-radius: ${brValue};</code></div>`;
}

superEllipseRange.addEventListener("input", setCorners);
borderRadiusRange.addEventListener("input", setCorners);
setCorners();
```

Le JavaScript qui applique les valeurs sélectionnées par l'utilisateur·ice à `<section>` a été masqué pour plus de clarté.

#### Résultat

Le résultat affiché ressemble à ceci&nbsp;:

{{EmbedLiveSample("superellipse-slider", "100%", 300)}}

Essayez de sélectionner différentes valeurs pour voir comment cela affecte la forme des coins.

### Animer `corner-shape`

Dans cet exemple, nous montrons comment la propriété `corner-shape` peut être animée.

#### HTML

```html live-sample___corner-shape-animation
<div></div>
```

#### CSS

Nous créons un ensemble de {{CSSxRef("@keyframes")}} qui anime de façon fluide les valeurs de `corner-shape` entre `square` et `notch`. Nous appliquons ensuite une {{CSSxRef("animation")}} basée sur ces `@keyframes` au `<div>` lorsque l'élément `<html>` englobant est survolé ou sélectionné. Des styles de base supplémentaires pour le `<div>` ont été masqués pour plus de clarté.

```css hidden live-sample___corner-shape-animation
body {
  width: 200px;
  margin: 20px auto;
}

div {
  width: 100%;
  height: 200px;
  background-color: green;
  background-image: linear-gradient(
    to bottom,
    rgb(255 255 255 / 0),
    rgb(255 255 255 / 0.5)
  );
  box-shadow: 1px 1px 3px gray;
  border-radius: 50%;
  corner-shape: square;
  outline: none;
}

@supports not (corner-shape: square) {
  body {
    all: unset !important;
  }

  body::before {
    content: "Votre navigateur ne prend pas en charge la propriété 'corner-shape'.";
    color: black;
    background-color: #ffcd33;
    display: block;
    width: 100%;
    text-align: center;
    padding: 1rem 0;
  }

  body > * {
    display: none;
  }
}
```

```css live-sample___corner-shape-animation
@keyframes corner-pulse {
  0% {
    corner-shape: square;
  }

  /* Pour rendre le point de départ apparent, gardons
  la forme identique pendant une courte durée. */
  20% {
    corner-shape: square;
  }

  100% {
    corner-shape: notch;
  }
}

div {
  animation: corner-pulse infinite alternate 4s linear;
}
```

#### Résultat

Le résultat affiché ressemble à ceci&nbsp;:

{{EmbedLiveSample("corner-shape-animation", "100%", 270)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{CSSxRef("border-radius")}}
- Le module [des bordures et décorations de boîte CSS](/fr/docs/Web/CSS/Guides/Borders_and_box_decorations)
- Le module [des arrière-plans et bordures CSS](/fr/docs/Web/CSS/Guides/Backgrounds_and_borders)
- Le module [des animations CSS](/fr/docs/Web/CSS/Guides/Animations)
