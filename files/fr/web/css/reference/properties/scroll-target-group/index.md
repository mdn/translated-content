---
title: scroll-target-group
slug: Web/CSS/Reference/Properties/scroll-target-group
l10n:
  sourceCommit: 9dbcd91284ec1ec64c4d8b343c3770880dd25129
---

{{SeeCompatTable}}

La propriété [CSS](/fr/docs/Web/CSS) **`scroll-target-group`** définit si un élément est un conteneur de groupe de marqueurs de défilement.

## Syntaxe

```css
/* Valeurs avec un mot-clé */
scroll-target-group: none;
scroll-target-group: auto;

/* Valeurs globales² */
scroll-target-group: inherit;
scroll-target-group: initial;
scroll-target-group: revert;
scroll-target-group: revert-layer;
scroll-target-group: unset;
```

La propriété `scroll-target-group` est définie comme l'une des valeurs de mot-clé suivantes&nbsp;:

### Valeurs

- `none`
  - : L'élément n'est pas un conteneur de groupe de marqueurs de défilement.
- `auto`
  - : L'élément est un conteneur de groupe de marqueurs de défilement.

## Description

Définir `scroll-target-group: auto` sur un élément le désigne comme un **conteneur de groupe de marqueurs de défilement**. Cela regroupe un ensemble d'éléments de navigation permettant aux utilisateur·ice·s de naviguer entre les éléments d'une page (comme les éléments d'un carrousel ou les sections d'un article) et de mettre en évidence l'élément actuellement visible.

Tout élément HTML {{HTMLElement("a")}} avec des identifiants de fragment à l'intérieur du conteneur est automatiquement défini comme un marqueur de défilement. L'élément d'ancrage dont la cible de défilement est actuellement visible peut être mis en forme avec la pseudo-classe {{CSSxRef(":target-current")}}.

### Différences entre `scroll-target-group` et `scroll-marker-group`

Les conteneurs de groupe de marqueurs de défilement créés à l'aide de `scroll-target-group` se comportent de manière très similaire à ceux créés à l'aide de la propriété {{CSSxRef("scroll-marker-group")}}, avec quelques différences&nbsp;:

- Avec `scroll-target-group`, vous devez créer votre propre balisage pour représenter le conteneur de groupe de marqueurs de défilement et les marqueurs de défilement, tandis que `scroll-marker-group` crée automatiquement un ensemble de pseudo-éléments pour représenter le conteneur ({{CSSxRef("::scroll-marker-group")}}) et les marqueurs (une ou plusieurs instances de {{CSSxRef("::scroll-marker")}}). Ceux-ci ont automatiquement les associations de navigation attendues avec le {{Glossary("scroll container", "conteneur de défilement")}} sur lequel ils sont générés. L'utilisation de `scroll-marker-group` offre une configuration plus rapide car vous n'avez pas besoin d'utiliser votre propre balisage. Cependant, créer votre propre balisage et le définir comme conteneur de groupe de marqueurs de défilement via `scroll-target-group` offre plus de contrôle et de flexibilité.
- Les liens désignés comme marqueurs de défilement via `scroll-target-group` n'ont aucun comportement de navigation spécial, tandis que les marqueurs générés via `scroll-marker-group` ont automatiquement les sémantiques [`tablist`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/tablist_role)/[`tab`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/tab_role) appliquées, ce qui signifie qu'ils se comportent comme un seul élément dans l'ordre de tabulation, et les utilisateur·ice·s peuvent se déplacer entre les marqueurs de défilement avec les touches fléchées. Encore une fois, `scroll-marker-group` fournit un comportement par défaut utile, mais vous avez la flexibilité de fournir des sémantiques et un comportement alternatifs pour les marqueurs définis à l'aide de `scroll-target-group`.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Utilisation simple de `scroll-target-group`

Cet exemple montre une page avec une table des matières reliant différentes sections.

#### HTML

Notre balisage comporte une série d'éléments HTML {{HTMLElement("section")}} contenant du contenu, et une table des matières créée à l'aide d'une liste ordonnée ({{HTMLElement("ol")}}/{{HTMLElement("li")}}) et d'éléments HTML {{HTMLElement("a")}}.

```html
<nav id="toc">
  <ol>
    <li><a href="#intro">Introduction</a></li>
    <li><a href="#ch1">Chapitre 1</a></li>
    <li><a href="#ch2">Chapitre 2</a></li>
    <li><a href="#ch3">Chapitre 3</a></li>
    <li><a href="#ch4">Chapitre 4</a></li>
  </ol>
</nav>
<section id="intro" class="chapter">
  <h1>Prose du siècle</h1>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus
    aliquam dolor, eu lacinia lorem placerat vulputate. Duis felis orci,
    pulvinar id metus ut, rutrum luctus orci. Cras porttitor imperdiet nunc, at
    ultricies tellus laoreet sit amet.
  </p>
</section>
<section id="ch1" class="chapter">
  <h2>Chapitre 1</h2>

  <!-- … -->
</section>
<section id="ch2" class="chapter">
  <h2>Chapitre 2</h2>

  <!-- … -->
</section>

<!-- … -->
```

```html hidden live-sample___basic-usage
<nav id="toc">
  <ol>
    <li><a href="#intro">Introduction</a></li>
    <li><a href="#ch1">Chapitre 1</a></li>
    <li><a href="#ch2">Chapitre 2</a></li>
    <li><a href="#ch3">Chapitre 3</a></li>
    <li><a href="#ch4">Chapitre 4</a></li>
  </ol>
</nav>
<section id="intro" class="chapter">
  <h1>Mon histoire</h1>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus
    aliquam dolor, eu lacinia lorem placerat vulputate. Duis felis orci,
    pulvinar id metus ut, rutrum luctus orci. Cras porttitor imperdiet nunc, at
    ultricies tellus laoreet sit amet.
  </p>
</section>
<section id="ch1" class="chapter">
  <h2>Chapitre 1</h2>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus
    aliquam dolor, eu lacinia lorem placerat vulputate. Duis felis orci,
    pulvinar id metus ut, rutrum luctus orci. Cras porttitor imperdiet nunc, at
    ultricies tellus laoreet sit amet.
  </p>
  <p>
    Sed auctor cursus massa at porta. Integer ligula ipsum, tristique sit amet
    orci vel, viverra egestas ligula. Curabitur vehicula tellus neque, ac ornare
    ex malesuada et. In vitae convallis lacus. Aliquam erat volutpat.
    Suspendisse ac imperdiet turpis. Aenean finibus sollicitudin eros pharetra
    congue. Duis ornare egestas augue ut luctus. Proin blandit quam nec lacus
    varius commodo et a urna. Ut id ornare felis, eget fermentum sapien.
  </p>
  <p>
    Nam vulputate diam nec tempor bibendum. Donec luctus augue eget malesuada
    ultrices. Phasellus turpis est, posuere sit amet dapibus ut, facilisis sed
    est. Nam id risus quis ante semper consectetur eget aliquam lorem. Vivamus
    tristique elit dolor, sed pretium metus suscipit vel. Mauris ultricies
    lectus sed lobortis finibus. Vivamus eu urna eget velit cursus viverra quis
    vestibulum sem. Aliquam tincidunt eget purus in interdum. Cum sociis natoque
    penatibus et magnis dis parturient montes, nascetur ridiculus mus.
  </p>
</section>
<section id="ch2" class="chapter">
  <h2>Chapitre 2</h2>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus
    aliquam dolor, eu lacinia lorem placerat vulputate. Duis felis orci,
    pulvinar id metus ut, rutrum luctus orci. Cras porttitor imperdiet nunc, at
    ultricies tellus laoreet sit amet.
  </p>
  <p>
    Sed auctor cursus massa at porta. Integer ligula ipsum, tristique sit amet
    orci vel, viverra egestas ligula. Curabitur vehicula tellus neque, ac ornare
    ex malesuada et. In vitae convallis lacus. Aliquam erat volutpat.
    Suspendisse ac imperdiet turpis. Aenean finibus sollicitudin eros pharetra
    congue. Duis ornare egestas augue ut luctus. Proin blandit quam nec lacus
    varius commodo et a urna. Ut id ornare felis, eget fermentum sapien.
  </p>
</section>
<section id="ch3" class="chapter">
  <h2>Chapitre 3</h2>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus
    aliquam dolor, eu lacinia lorem placerat vulputate. Duis felis orci,
    pulvinar id metus ut, rutrum luctus orci. Cras porttitor imperdiet nunc, at
    ultricies tellus laoreet sit amet.
  </p>
  <p>
    Sed auctor cursus massa at porta. Integer ligula ipsum, tristique sit amet
    orci vel, viverra egestas ligula. Curabitur vehicula tellus neque, ac ornare
    ex malesuada et. In vitae convallis lacus. Aliquam erat volutpat.
    Suspendisse ac imperdiet turpis. Aenean finibus sollicitudin eros pharetra
    congue. Duis ornare egestas augue ut luctus. Proin blandit quam nec lacus
    varius commodo et a urna. Ut id ornare felis, eget fermentum sapien.
  </p>
</section>
<section id="ch4" class="chapter">
  <h2>Chapitre 4</h2>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus
    aliquam dolor, eu lacinia lorem placerat vulputate. Duis felis orci,
    pulvinar id metus ut, rutrum luctus orci. Cras porttitor imperdiet nunc, at
    ultricies tellus laoreet sit amet.
  </p>
  <p>
    Sed auctor cursus massa at porta. Integer ligula ipsum, tristique sit amet
    orci vel, viverra egestas ligula. Curabitur vehicula tellus neque, ac ornare
    ex malesuada et. In vitae convallis lacus. Aliquam erat volutpat.
    Suspendisse ac imperdiet turpis. Aenean finibus sollicitudin eros pharetra
    congue. Duis ornare egestas augue ut luctus. Proin blandit quam nec lacus
    varius commodo et a urna. Ut id ornare felis, eget fermentum sapien.
  </p>
</section>
```

#### CSS

Nous avons masqué la plupart des styles pour plus de concision. Le plus pertinent pour cet exemple est que nous avons défini `scroll-target-group: auto` sur le `<ol>` pour le transformer en conteneur de groupe de marqueurs de défilement et déclencher l'algorithme du navigateur pour calculer quel élément `<a>` est le `:target-current` à tout moment (c'est-à-dire quel lien est actuellement visible). Nous stylons ensuite la pseudo-classe `:target-current` avec une couleur ({{CSSxRef("color")}}) `red` afin qu'elle se démarque clairement.

```css hidden live-sample___basic-usage
body {
  font: 1.2em / 1.5 system-ui;
  width: 50%;
  max-width: 700px;
  margin: 0 auto;
}

nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
}

section {
  padding-top: 60px;
}

a {
  color: black;
  text-decoration: none;
}

a:hover,
a:focus {
  text-decoration: underline;
}

ol {
  display: flex;
  width: 100%;
  justify-content: space-around;
  list-style-type: none;
  padding: 20px 0;
  margin: 0;
  background: white;
}
```

```css live-sample___basic-usage
ol {
  scroll-target-group: auto;
}

:target-current {
  color: red;
}
```

#### Résultat

Essayez de naviguer en activant les liens et en faisant défiler. Vous verrez que dans chaque cas, la mise en surbrillance rouge se déplace entre les liens pour correspondre à la section actuellement affichée.

{{EmbedLiveSample("basic-usage", "100%", 500)}}

### Carrousel CSS avec des marqueurs de défilement `scroll-target-group`

Cet exemple montre comment créer des marqueurs de défilement pour un [carrousel CSS](/fr/docs/Web/CSS/Guides/Overflow/Carousels) en utilisant `scroll-target-group`. Le code pour cet exemple est similaire à notre exemple de [Carrousel avec des pages uniques](/fr/docs/Web/CSS/Guides/Overflow/Carousels#carousel_avec_des_pages_uniques)&nbsp;; nous expliquerons simplement les différences ci-dessous.

#### HTML

Le balisage a des ID définis sur les éléments de la liste qui définissent chaque page, et une liste ordonnée ajoutée que nous transformerons en conteneur de groupe de marqueurs de défilement en utilisant CSS.

```html live-sample___carousel
<h1>Carrousel CSS avec un élément par page</h1>
<ul>
  <li id="page1">
    <h2>Page 1</h2>
  </li>
  <li id="page2">
    <h2>Page 2</h2>
  </li>
  <li id="page3">
    <h2>Page 3</h2>
  </li>
  <li id="page4">
    <h2>Page 4</h2>
  </li>
</ul>
<ol>
  <li><a href="#page1">1</a></li>
  <li><a href="#page2">2</a></li>
  <li><a href="#page3">3</a></li>
  <li><a href="#page4">4</a></li>
</ol>
```

#### CSS

Nous créons le conteneur de groupe de marqueurs de défilement et les marqueurs de défilement en définissant `scroll-target-group` sur l'élément `<ol>`. Le reste du code pour les mettre en forme est très similaire, sauf que nous ciblons des éléments de notre choix (`<ol>` et `<a>`) plutôt que les pseudo-éléments {{CSSxRef("::scroll-marker-group")}} et {{CSSxRef("::scroll-marker")}}.

Nous complétons le code en définissant quelques styles sur les états `:target-current`, `a:hover` et `a:focus` pour indiquer quelle page est actuellement affichée et quels liens sont survolés/sélectionnés.

```css hidden live-sample___carousel
/* Mise en forme générale */

* {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: "Helvetica", "Arial", sans-serif;
}

h1 {
  text-align: center;
}

button {
  background-color: white;
}

/* Mise en forme générale de la liste en tant que carrousel défilant */

ul {
  width: 100%;
  height: 400px;
  padding: 20px;
  gap: 4%;
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: 100%;
  overflow-x: scroll;
  scroll-snap-type: x mandatory;
}

ul li {
  list-style-type: none;
  background-color: #eeeeee;
  border: 1px solid #dddddd;
  padding: 20px;

  scroll-snap-align: center;
}

/* Boutons de défilement CSS */

/* Mise en forme des boutons de défilement */

ul::scroll-button(*) {
  border: 0;
  font-size: 2rem;
  background: none;
  color: rgb(0 0 0 / 0.7);
  cursor: pointer;
}

ul::scroll-button(*):hover,
ul::scroll-button(*):focus {
  color: black;
}

ul::scroll-button(*):active {
  translate: 1px 1px;
}

ul::scroll-button(*):disabled {
  color: rgb(0 0 0 / 0.2);
}

ul::scroll-button(left) {
  content: "◄";
}

ul::scroll-button(right) {
  content: "►";
}

/* Position des boutons de défilement */

ul {
  anchor-name: --my-carousel;
}

ul::scroll-button(*) {
  position: absolute;
  position-anchor: --my-carousel;
}

ul::scroll-button(left) {
  right: calc(anchor(left) - 70px);
  top: calc(anchor(bottom) - 80px);
}

ul::scroll-button(right) {
  left: calc(anchor(right) - 70px);
  top: calc(anchor(bottom) - 80px);
}
```

```css live-sample___carousel
ol {
  position: absolute;
  position-anchor: --my-carousel;
  top: calc(anchor(bottom) - 90px);
  justify-self: anchor-center;
  display: flex;
  justify-content: center;
  gap: 20px;

  list-style-type: none;
  padding: 0;
  scroll-target-group: auto;
}

ol a {
  width: 28px;
  height: 28px;
  display: inline-block;
  text-align: center;
  text-decoration: none;
  padding-top: 4px;
  color: black;
  background-color: transparent;
  border: 2px solid black;
  border-radius: 50%;
}

ol a:hover,
ol a:focus,
:target-current {
  background-color: black;
  color: white;
}
```

#### Résultat

Essayez de naviguer de chacune de ces trois manières&nbsp;: en activant les liens de marqueurs de défilement, en faisant défiler horizontalement ou en appuyant sur les boutons de défilement de chaque côté. Vous verrez que dans chaque cas, la mise en surbrillance se déplace entre les liens pour correspondre à la section actuellement affichée.

{{EmbedLiveSample("carousel", "100%", 500)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{CSSxRef("scroll-marker-group")}}
- Les pseudo-éléments {{CSSxRef("::scroll-marker-group")}} et {{CSSxRef("::scroll-marker")}}
- Les pseudo-classes {{CSSxRef(":target-current")}}, {{CSSxRef(":target-before")}} et {{CSSxRef(":target-after")}}
- [Créer des carroussels CSS](/fr/docs/Web/CSS/Guides/Overflow/Carousels)
- Le module [de débordement CSS](/fr/docs/Web/CSS/Guides/Overflow)
