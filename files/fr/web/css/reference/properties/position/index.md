---
title: position
slug: Web/CSS/Reference/Properties/position
l10n:
  sourceCommit: 1dbba9f7a2c2e35c6e01e8a63159e2aac64b601b
---

La propriété [CSS](/fr/docs/Web/CSS) **`position`** définit la façon dont un élément est positionné dans un document. Les propriétés {{CSSxRef("top")}}, {{CSSxRef("right")}}, {{CSSxRef("bottom")}} et {{CSSxRef("left")}}, et les propriétés logiques relatives au flux {{CSSxRef("inset-block-start")}}, {{CSSxRef("inset-block-end")}}, {{CSSxRef("inset-inline-start")}} et {{CSSxRef("inset-inline-end")}} peuvent être utilisées pour déterminer l'emplacement final des éléments positionnés.

{{InteractiveExample("Démonstration CSS&nbsp;: position")}}

```css interactive-example-choice
position: static;
```

```css interactive-example-choice
position: relative;
top: 40px;
left: 40px;
```

```css interactive-example-choice
position: absolute;
inset-inline-start: 40px;
inset-block-start: 40px;
```

```css interactive-example-choice
position: sticky;
top: 20px;
```

```html interactive-example
<section class="default-example" id="default-example">
  <div id="example-element-container">
    <p>
      Dans cette démo, vous pouvez contrôler la propriété
      <code>position</code> pour la boîte jaune.
    </p>
    <div class="box"></div>
    <div class="box" id="example-element"></div>
    <div class="box"></div>
    <p class="clear">
      Pour voir l'effet du positionnement <code>sticky</code>, sélectionnez
      l'option <code>position: sticky</code> et faites défiler ce conteneur.
    </p>
    <p>
      L'élément défilera avec son conteneur, jusqu'à ce qu'il atteigne le haut
      du conteneur (ou atteigne le décalage défini dans
      <code>top</code>), puis il cessera de défiler, restant ainsi visible.
    </p>
    <p>
      Le reste de ce texte est fourni uniquement pour s'assurer que le conteneur
      déborde, afin de vous permettre de le faire défiler et de voir l'effet.
    </p>
    <hr />
    <p>
      Au fin fond des confins inexplorés de la partie la moins en vue du bras
      spiral ouest de la Galaxie se trouve un petit soleil jaune dont personne
      ne se soucie. En orbite autour de lui, à une distance d'environ 148
      millions de kilomètres, tourne une petite planète bleu-vert tout à fait
      insignifiante, dont les formes de vie issues du singe sont si
      incroyablement primitives qu'elles trouvent encore les montres numériques
      plutôt géniales.
    </p>
  </div>
</section>
```

```css interactive-example
section {
  align-items: flex-start;
  overflow: auto;
}

.box {
  background-color: rgb(0 0 255 / 0.2);
  border: 3px solid blue;
  float: left;
  width: 65px;
  height: 65px;
}

.box + .box {
  margin-left: 10px;
}

.clear {
  clear: both;
  padding-top: 1em;
}

#example-element-container {
  position: relative;
  text-align: left;
}

#example-element {
  background-color: yellow;
  border: 3px solid red;
  z-index: 1;
}
```

## Syntaxe

```css
position: static;
position: relative;
position: absolute;
position: fixed;
position: sticky;

/* Valeurs globales */
position: inherit;
position: initial;
position: revert;
position: revert-layer;
position: unset;
```

### Valeurs

- `static`
  - : L'élément est positionné selon le [flux normal](/fr/docs/Learn_web_development/Core/CSS_layout/Introduction#normal_layout_flow) du document. Les propriétés {{CSSxRef("top")}}, {{CSSxRef("right")}}, {{CSSxRef("bottom")}}, {{CSSxRef("left")}} et {{CSSxRef("z-index")}} n'ont _aucun effet_. C'est la valeur par défaut.
- `relative`
  - : L'élément est positionné selon le flux normal du document, puis décalé _par rapport à lui-même_ en fonction des valeurs de `top`, `right`, `bottom` et `left`. Le décalage n'affecte pas la position des autres éléments&nbsp;; ainsi, l'espace réservé à l'élément dans la mise en page de la page est le même que si la position était `static`.

    Cette valeur crée un nouveau [contexte d'empilement](/fr/docs/Web/CSS/Guides/Positioned_layout/Stacking_context) lorsque la valeur de `z-index` n'est pas `auto`. Son effet sur les éléments `table-*-group`, `table-row`, `table-column`, `table-cell` et `table-caption` est indéfini.

- `absolute`
  - : L'élément est retiré du flux normal du document, et aucun espace n'est créé pour l'élément dans la mise en page de la page. L'élément est positionné par rapport à son ancêtre positionné le plus proche (le cas échéant) ou par rapport au [bloc englobant](/fr/docs/Web/CSS/Guides/Display/Containing_block#identifier_le_bloc_englobant) initial. Sa position finale est déterminée par les valeurs de `top`, `right`, `bottom` et `left`.

    Cette valeur crée un nouveau [contexte d'empilement](/fr/docs/Web/CSS/Guides/Positioned_layout/Stacking_context) lorsque la valeur de `z-index` n'est pas `auto`. Les marges des boîtes positionnées absolument ne se [combinent pas](/fr/docs/Web/CSS/Guides/Box_model/Margin_collapsing) avec d'autres marges.

- `fixed`
  - : L'élément est retiré du flux normal du document, et aucun espace n'est créé pour l'élément dans la mise en page de la page. L'élément est positionné par rapport à son [bloc englobant](/fr/docs/Web/CSS/Guides/Display/Containing_block#identifier_le_bloc_englobant) initial, qui est la fenêtre d'affichage dans le cas des médias visuels. Sa position finale est déterminée par les valeurs de `top`, `right`, `bottom` et `left`.

    Cette valeur crée toujours un nouveau [contexte d'empilement](/fr/docs/Web/CSS/Guides/Positioned_layout/Stacking_context). Dans les documents imprimés, l'élément est placé à la même position sur _chaque page_.

- `sticky`
  - : L'élément est positionné selon le flux normal du document, puis décalé par rapport à son _ancêtre défilant le plus proche_ et à son [bloc englobant](/fr/docs/Web/CSS/Guides/Display/Containing_block) (l'ancêtre de niveau bloc le plus proche), y compris les éléments liés aux tableaux, en fonction des valeurs de `top`, `right`, `bottom` et `left`. Le décalage n'affecte pas la position des autres éléments.

    Cette valeur crée toujours un nouveau [contexte d'empilement](/fr/docs/Web/CSS/Guides/Positioned_layout/Stacking_context). Notez qu'un élément attaché «&nbsp;adhère&nbsp;» à son ancêtre le plus proche qui possède un «&nbsp;mécanisme de défilement&nbsp;» (créé lorsque `overflow` est `hidden`, `scroll`, `auto` ou `overlay`), même si cet ancêtre n'est pas le plus proche ancêtre réellement défilant.

    > [!NOTE]
    > Au moins une propriété [d'encart](/fr/docs/Web/CSS/Reference/Properties/inset) ({{CSSxRef("top")}}, {{CSSxRef("inset-block-start")}}, {{CSSxRef("right")}}, {{CSSxRef("inset-inline-end")}}, etc.) doit être définie avec une valeur différente de `auto` pour l'axe sur lequel l'élément doit être rendu adhérent. Si les deux propriétés `inset` pour un axe sont définies sur `auto`, sur cet axe la valeur `sticky` se comportera comme `relative`.

## Description

### Types de positionnement

- Un **élément positionné** est un élément dont la valeur [calculée](/fr/docs/Web/CSS/Guides/Cascade/Property_value_processing#valeur_calculée) de la propriété `position` est soit `relative`, `absolute`, `fixed` ou `sticky`. (En d'autres termes, il s'agit de toute valeur autre que `static`.)
- Un **élément positionné relativement** est un élément dont la valeur [calculée](/fr/docs/Web/CSS/Guides/Cascade/Property_value_processing#valeur_calculée) de la propriété `position` est `relative`. Les propriétés {{CSSxRef("top")}} et {{CSSxRef("bottom")}} définissent le décalage vertical par rapport à sa position normale&nbsp;; les propriétés {{CSSxRef("left")}} et {{CSSxRef("right")}} définissent le décalage horizontal.
- Un **élément positionné absolument** est un élément dont la valeur [calculée](/fr/docs/Web/CSS/Guides/Cascade/Property_value_processing#valeur_calculée) de la propriété `position` est `absolute` ou `fixed`. Les propriétés {{CSSxRef("top")}}, {{CSSxRef("right")}}, {{CSSxRef("bottom")}} et {{CSSxRef("left")}} définissent les décalages par rapport aux bords du [bloc englobant](/fr/docs/Web/CSS/Guides/Display/Containing_block) de l'élément. (Le bloc englobant est l'ancêtre par rapport auquel l'élément est positionné.) Si l'élément a des marges, elles sont ajoutées au décalage. L'élément crée un nouveau [contexte de formatage de bloc](/fr/docs/Web/CSS/Guides/Display/Block_formatting_context) (BFC) pour son contenu.
- Un **élément positionné de manière adhérente** est un élément dont la valeur [calculée](/fr/docs/Web/CSS/Guides/Cascade/Property_value_processing#valeur_calculée) de la propriété `position` est `sticky`. Il est traité comme positionné relativement jusqu'à ce que son [bloc englobant](/fr/docs/Web/CSS/Guides/Display/Containing_block) dépasse un seuil défini (par exemple, en définissant {{CSSxRef("top")}} sur une valeur autre que auto) dans sa racine de flux (ou le conteneur dans lequel il défile), auquel cas il est traité comme «&nbsp;collé&nbsp;» jusqu'à ce qu'il rencontre le bord opposé de son [bloc englobant](/fr/docs/Web/CSS/Guides/Display/Containing_block).

La plupart du temps, les éléments positionnés absolument qui ont {{CSSxRef("height")}} et {{CSSxRef("width")}} définis sur `auto` sont dimensionnés de manière à s'adapter à leur contenu. Cependant, les éléments positionnés absolument non {{Glossary("Replaced_elements", "remplacés")}} peuvent être configurés pour remplir l'espace vertical disponible en définissant à la fois {{CSSxRef("top")}} et {{CSSxRef("bottom")}} et en laissant {{CSSxRef("height")}} non défini (c'est-à-dire `auto`). Ils peuvent de même être configurés pour remplir l'espace horizontal disponible en définissant à la fois {{CSSxRef("left")}} et {{CSSxRef("right")}} et en laissant {{CSSxRef("width")}} sur `auto`.

À l'exception du cas décrit ci-dessus (des éléments positionnés absolument remplissant l'espace disponible)&nbsp;:

- Si `top` et `bottom` sont tous deux définis (techniquement, pas `auto`), `top` prévaut.
- Si `left` et `right` sont tous deux définis, `left` prévaut lorsque {{CSSxRef("direction")}} est `ltr` (anglais, japonais horizontal, etc.) et `right` prévaut lorsque {{CSSxRef("direction")}} est `rtl` (persan, arabe, hébreu, etc.).

## Accessibilité

Assurez-vous que les éléments positionnés avec une valeur `absolute` ou `fixed` ne masquent pas d'autres contenus lorsque la page est zoomée pour augmenter la taille du texte.

- [Comprendre le WCAG sur MDN, explications de la règle 1.4](/fr/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#règle_1.4_—_faciliter_la_perception_visuelle_et_auditive_du_contenu_notamment_en_séparant_le_premier_plan_de_larrière-plan)
- [Présentation visuelle&nbsp;: Comprendre SC 1.4.8 | Comprendre le WCAG 2.0 <sup>(angl.)</sup>](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-visual-presentation.html)

### Performance et accessibilité

Les éléments défilants contenant du contenu `fixed` ou `sticky` peuvent causer des problèmes de performance et d'accessibilité. Lorsque l'utilisateur·ice fait défiler la page, le navigateur doit repeindre le contenu adhérant ou fixe à un nouvel emplacement. En fonction du contenu à repeindre, des performances du navigateur et de la vitesse de traitement de l'appareil, le navigateur peut ne pas être capable de gérer les repeints à 60 fps. Un tel scénario peut entraîner des {{Glossary("Jank", "saccades")}} et, plus important encore, des problèmes d'accessibilité pour les personnes sensibles. Une solution consiste à ajouter {{CSSxRef("will-change", "will-change: transform")}} aux éléments positionnés pour rendre l'élément dans sa propre couche, améliorant ainsi la vitesse de repeint et donc les performances et l'accessibilité.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Positionnement relatif

Les éléments positionnés relativement sont décalés d'une certaine distance par rapport à leur position normale dans le document, mais sans que ce décalage n'affecte les autres éléments. Dans l'exemple ci-dessous, notez comment les autres éléments sont placés comme si «&nbsp;Deux&nbsp;» occupait l'espace de sa position normale.

#### HTML

```html
<div class="box" id="un">Un</div>
<div class="box" id="deux">Deux</div>
<div class="box" id="trois">Trois</div>
<div class="box" id="quatre">Quatre</div>
```

#### CSS

```css
* {
  box-sizing: border-box;
}

.box {
  display: inline-block;
  width: 100px;
  height: 100px;
  background: red;
  color: white;
}

#two {
  position: relative;
  top: 20px;
  left: 20px;
  background: blue;
}
```

#### Résultat

{{EmbedLiveSample("Positionnement relatif", "", 200)}}

### Positionnement absolu

Les éléments positionnés relativement restent dans le flux normal du document. En revanche, un élément positionné de manière absolue est retiré du flux&nbsp;; ainsi, les autres éléments sont positionnés comme s'il n'existait pas. L'élément positionné de manière absolue est positionné par rapport à son _ancêtre positionné le plus proche_ (c'est-à-dire l'ancêtre le plus proche qui n'est pas `static`). Si aucun ancêtre positionné n'existe, il est positionné par rapport au ICB ([initial containing block <sup>(angl.)</sup>](https://drafts.csswg.org/css-display/#initial-containing-block)), qui est le bloc englobant de l'élément racine du document.

#### HTML

```html
<h1>Positionnement absolu</h1>

<p>
  Un élément de bloc simple. Les éléments de bloc adjacents sont sur de
  nouvelles lignes en dessous.
</p>

<p class="positioned">
  Par défaut, on occupe 100% de la largeur de l'élément parent et on est aussi
  grand que notre contenu.
</p>
<p>
  Nous sommes séparés par nos marges (une seule marge en raison de la fusion des
  marges).
</p>

<p>
  les éléments en ligne <span>comme celui-ci</span> et <span>celui-là</span> se
  situent sur la même ligne avec également les nœuds de texte. S'il y a de
  l'espace sur la même ligne. Les éléments qui dépassent
  <span>passent à la ligne si possible — comme pour ce texte.</span> ou cette
  image
  <img src="https://mdn.github.io/shared-assets/images/examples/long.jpg" />
</p>
```

#### CSS

```css
* {
  box-sizing: border-box;
}

body {
  width: 500px;
  margin: 0 auto;
}

p {
  background: aqua;
  border: 3px solid blue;
  padding: 10px;
  margin: 10px;
}

span {
  background: red;
  border: 1px solid black;
}

.positioned {
  position: absolute;
  background: yellow;
  inset-block-start: 30px;
  inset-inline-start: 30px;
}
```

#### Résultat

{{EmbedLiveSample("Positionnement absolu", "100%", 420)}}

### Positionnement fixe

Le positionnement fixe est similaire au positionnement absolu, à la différence que le [bloc englobant](/fr/docs/Web/CSS/Guides/Display/Containing_block) de l'élément est le bloc englobant initial établi par la _zone d'affichage_, sauf si un ancêtre possède une propriété `transform`, `perspective` ou `filter` définie sur une valeur autre que `none` (voir [bloc englobant pour le positionnement fixe <sup>(angl.)</sup>](https://drafts.csswg.org/css-position/#fixed-positioning-containing-block)), auquel cas cet ancêtre prend la place du [bloc englobant](/fr/docs/Web/CSS/Guides/Display/Containing_block) de l'élément. Cela permet de créer un élément «&nbsp;flottant&nbsp;» qui reste à la même position, quel que soit le défilement. Dans l'exemple ci-dessous, la boîte «&nbsp;Un&nbsp;» est fixée à 80 pixels du haut de la page et à 10 pixels de la gauche. Même après défilement, elle reste à la même place par rapport à la _zone d'affichage_. De plus, lorsque la propriété {{CSSxRef("will-change")}} est définie sur `transform`, un nouveau bloc englobant est établi.

#### HTML

```html
<div class="outer">
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam congue tortor
    eget pulvinar lobortis. Vestibulum ante ipsum primis in faucibus orci luctus
    et ultrices posuere cubilia Curae; Nam ac dolor augue. Pellentesque mi mi,
    laoreet et dolor sit amet, ultrices varius risus. Nam vitae iaculis elit.
    Aliquam mollis interdum libero. Sed sodales placerat egestas. Vestibulum ut
    arcu aliquam purus viverra dictum vel sit amet mi. Duis nisl mauris, aliquam
    sit amet luctus eget, dapibus in enim. Sed velit augue, pretium a sem
    aliquam, congue porttitor tortor. Sed tempor nisl a lorem consequat, id
    maximus erat aliquet. Sed sagittis porta libero sed condimentum. Aliquam
    finibus lectus nec ante congue rutrum. Curabitur quam quam, accumsan id
    ultrices ultrices, tempor et tellus.
  </p>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam congue tortor
    eget pulvinar lobortis. Vestibulum ante ipsum primis in faucibus orci luctus
    et ultrices posuere cubilia Curae; Nam ac dolor augue. Pellentesque mi mi,
    laoreet et dolor sit amet, ultrices varius risus. Nam vitae iaculis elit.
    Aliquam mollis interdum libero. Sed sodales placerat egestas. Vestibulum ut
    arcu aliquam purus viverra dictum vel sit amet mi. Duis nisl mauris, aliquam
    sit amet luctus eget, dapibus in enim. Sed velit augue, pretium a sem
    aliquam, congue porttitor tortor. Sed tempor nisl a lorem consequat, id
    maximus erat aliquet. Sed sagittis porta libero sed condimentum. Aliquam
    finibus lectus nec ante congue rutrum. Curabitur quam quam, accumsan id
    ultrices ultrices, tempor et tellus.
  </p>
  <div class="box" id="un">Un</div>
</div>
```

#### CSS

```css
* {
  box-sizing: border-box;
}

.box {
  width: 100px;
  height: 100px;
  background: red;
  color: white;
}

#un {
  position: fixed;
  top: 80px;
  left: 10px;
  background: blue;
}

.outer {
  width: 500px;
  height: 300px;
  overflow: scroll;
  padding-left: 150px;
}
```

#### Résultat

{{EmbedLiveSample("Positionnement fixe", "", 300)}}

### Positionnement adhérent

La règle CSS suivante positionne l'élément avec l'identifiant `un` de manière relative jusqu'à ce que la zone d'affichage soit défilée de sorte que l'élément soit à 10 pixels du haut. Au-delà de ce seuil, l'élément est fixé à 10 pixels du haut.

```css
#un {
  position: sticky;
  top: 10px;
}
```

#### Liste avec des en-têtes adhérents

Une utilisation courante du positionnement adhérent est pour les en-têtes dans une liste alphabétique. L'en-tête «&nbsp;B&nbsp;» apparaîtra juste en dessous des éléments commençant par «&nbsp;A&nbsp;» jusqu'à ce qu'ils soient défilés hors de l'écran. Plutôt que de glisser hors de l'écran avec le reste du contenu, l'en-tête «&nbsp;B&nbsp;» restera fixé en haut de la zone d'affichage jusqu'à ce que tous les éléments «&nbsp;B&nbsp;» aient été défilés hors de l'écran, moment auquel il sera recouvert par l'en-tête «&nbsp;C&nbsp;», et ainsi de suite.

Vous devez définir un seuil avec au moins une des propriétés `top`, `right`, `bottom` ou `left` pour que le positionnement adhérent fonctionne comme prévu. Sinon, il sera indiscernable du positionnement relatif.

##### HTML

```html
<dl>
  <div>
    <dt>A</dt>
    <dd>Andrew W.K.</dd>
    <dd>Apparat</dd>
    <dd>Arcade Fire</dd>
    <dd>At The Drive-In</dd>
    <dd>Aziz Ansari</dd>
  </div>
  <div>
    <dt>C</dt>
    <dd>Chromeo</dd>
    <dd>Common</dd>
    <dd>Converge</dd>
    <dd>Crystal Castles</dd>
    <dd>Cursive</dd>
  </div>
  <div>
    <dt>E</dt>
    <dd>Explosions In The Sky</dd>
  </div>
  <div>
    <dt>T</dt>
    <dd>Ted Leo &amp; The Pharmacists</dd>
    <dd>T-Pain</dd>
    <dd>Thrice</dd>
    <dd>TV On The Radio</dd>
    <dd>Two Gallants</dd>
  </div>
</dl>
```

##### CSS

```css
* {
  box-sizing: border-box;
}

dl > div {
  background: white;
  padding-top: 24px;
}

dt {
  background: #b8c1c8;
  border-bottom: 1px solid #989ea4;
  border-top: 1px solid #717d85;
  color: white;
  font:
    bold 18px/21px "Helvetica",
    "Arial",
    sans-serif;
  margin: 0;
  padding: 2px 0 0 12px;
  position: -webkit-sticky;
  position: sticky;
  top: -1px;
}

dd {
  font:
    bold 20px/45px "Helvetica",
    "Arial",
    sans-serif;
  margin: 0;
  padding-left: 12px;
  white-space: nowrap;
}

dd + dd {
  border-top: 1px solid #cccccc;
}
```

##### Résultat

{{EmbedLiveSample("Liste avec des en-têtes adhérents", "", 300)}}

#### Positionnement adhérent avec toutes les limites définies

L'exemple suivant démontre le comportement d'un élément lorsque toutes les limites sont définies. Ici, nous avons deux emojis d'ampoule dans un paragraphe. Les ampoules utilisent le positionnement adhérent, et les limites sont définies à 50px du haut, 100px de la droite, 50px du bas et 50px de la gauche. Un fond gris sur l'élément div parent marque la zone des limites.

##### HTML

```html
Utilisez les barres de défilement pour placer les ampoules (💡) au bon endroit
dans le texte suivant&nbsp;:
<div>
  <p>
    La représentation d'une idée par une ampoule (<span class="bulb">💡</span>)
    est une métaphore couramment utilisée qui symbolise le moment d'inspiration
    ou la naissance d'une nouvelle idée. L'association entre une ampoule et une
    idée peut être retracée jusqu'à l'invention de l'ampoule à incandescence
    (<span class="bulb">💡</span>) par Thomas Edison à la fin du 19ème siècle.
    L'ampoule est un symbole puissant car elle représente l'illumination, la
    clarté et l'éclaircissement soudain des pensées ou de la compréhension.
    Lorsqu'une personne a une idée, on décrit souvent cela comme une ampoule qui
    s'allume dans son esprit, signifiant un moment d'intuition ou de créativité.
    L'image d'une ampoule suggère également l'idée d'énergie, de puissance et de
    potentiel de croissance et de développement.
  </p>
</div>
```

##### CSS

```css hidden
div {
  width: 400px;
  height: 200px;
  overflow: scroll;
  scrollbar-width: thin;
  font-size: 16px;
  font-family: "Verdana";
  border: 1px solid;
}

p {
  width: 600px;
  user-select: none;
  margin: 0;
  border: 110px solid transparent;
}
```

```css
.bulb {
  position: sticky;
  inset: 50px 100px;
}

div {
  /* marquer la zone définie par les limites inset en utilisant une couleur grise */
  background: linear-gradient(#99999999, #99999999) 100px 50px / 192px 100px
    no-repeat;
}
```

##### Résultat

{{EmbedLiveSample("Positionnement adhérent avec toutes les limites définies", "", 300)}}

Lorsque vous placez les deux ampoules à leur place correcte, vous remarquerez qu'elles sont positionnées relativement à l'intérieur de la zone définie par les limites inset. Lorsque vous les déplacez en dehors de cette zone, elles restent fixes (adhérentes) à la limite inset dans cette direction.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'entrée de glossaire {{Glossary("Inset properties", "Propriétés d'encart")}}
- [Apprendre&nbsp;: Le positionnement](/fr/docs/Learn_web_development/Core/CSS_layout/Positioning)
- [Propriétés d'encart pour la disposition positionnée](/fr/docs/Web/CSS/Guides/Logical_properties_and_values/Floating_and_positioning#exemple_des_propriétés_inset_pour_les_dispositions_positionnées)
- Le module [de disposition positionnée CSS](/fr/docs/Web/CSS/Guides/Positioned_layout)
