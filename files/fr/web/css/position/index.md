---
title: position
slug: Web/CSS/position
---

{{CSSRef}}

La propriété [CSS](/fr/docs/Web/CSS) **`position`** définit la façon dont un élément est positionné dans un document. Les propriétés [`top`](/fr/docs/Web/CSS/top), [`right`](/fr/docs/Web/CSS/right), [`bottom`](/fr/docs/Web/CSS/bottom) et [`left`](/fr/docs/Web/CSS/left) déterminent l'emplacement final de l'élément positionné.

{{EmbedInteractiveExample("pages/css/position.html")}}

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
position: unset;
```

### Valeurs

- `static`

  - : Comportement normal (par défaut). L'élément est alors positionné dans le flux avec sa position. Les propriétés [`top`](/fr/docs/Web/CSS/top), [`right`](/fr/docs/Web/CSS/right), [`bottom`](/fr/docs/Web/CSS/bottom), [`left`](/fr/docs/Web/CSS/left) et [`z-index`](/fr/docs/Web/CSS/z-index) ne s'appliquent pas.

- `relative`

  - : L'élément est positionné dans le flux normal du document puis décalé, par rapport à lui-même, selon les valeurs fournies par `top`, `right`, `bottom` et `left`. Le décalage n'a pas d'impact sur la position des éléments. Aussi, l'espace fourni à l'élément sur la page est le même que celui fourni avec `static`.

    Cette valeur crée un nouveau [contexte d'empilement](/fr/docs/Glossary/Stacking_context) lorsque `z-index` ne vaut pas `auto`. L'effet de cette valeur n'est pas défini pour les éléments `table-*-group`, `table-row`, `table-column`, `table-cell` et `table-caption`.

- `absolute`

  - : L'élément est retiré du flux normal et aucun espace n'est créé pour l'élément sur la page. Il est ensuite positionné par rapport à son ancêtre le plus proche qui est positionné s'il y en a un ou par rapport au bloc englobant initial sinon. La position finale de l'élément est déterminée par les valeurs de `top`, `right`, `bottom` et `left`.

    Cette valeur crée un nouveau [contexte d'empilement](/fr/docs/Glossary/Stacking_context) lorsque `z-index` ne vaut pas `auto`. Les éléments positionnés de façon absolue peuvent avoir des marges, ces marges ne fusionnent pas avec les autres marges.

- `fixed`

  - : L'élément est retiré du flux normal et aucun espace n'est laissé pour l'élément. L'élément est positionné relativement au bloc englobant initial formé par la zone d'affichage (<i lang="en">viewport</i>), sauf si un des ancêtres a une propriété [`transform`](/fr/docs/Web/CSS/transform), [`perspective`](/fr/docs/Web/CSS/perspective) ou [`filter`](/fr/docs/Web/CSS/filter) qui est différente de `none` (voir [la spécification sur les transformations CSS](https://www.w3.org/TR/css-transforms-1/#propdef-transform))&nbsp;; dans ce cas, c'est l'élément ancêtre qui joue le rôle de bloc englobant. Cela empêche le défilement lorsque la page est parcourue (ou lors de l'impression, le positionne à cette position fixe pour _chaque page_). Cette valeur crée toujours un nouveau contexte d'empilement. Certaines incohérences existent entre les navigateurs quant au rôle de `perspective` et `filter` pour la définition du bloc englobant. La valeur finale de l'élément est déterminée par les valeurs de `top`, `right`, `bottom` et `left`.

    Cette valeur crée toujours un nouveau [contexte d'empilement](/fr/docs/Glossary/Stacking_context). Pour les documents imprimés, cela se traduit par le placement de l'élément au même endroit pour _chacune des pages_.

- `sticky`

  - : La position de la boîte est calculée en fonction du flux normal du document. Ensuite, la boîte est décalée par rapport à son ancêtre de défilement le plus proche et par rapport à [son bloc englobant](/fr/docs/Web/CSS/Containing_block) selon les valeurs de `top`, `right`, `bottom` et `left`. Dans tous les cas, y compris avec les éléments `table`, cela n'affecte pas la position des autres éléments.

    Cette valeur entraîne toujours la création d'un nouveau [contexte d'empilement](/fr/docs/Glossary/Stacking_context). On notera qu'un tel élément «&nbsp;adhèrera&nbsp;» à l'ancêtre le plus proche qui dispose d'un mécanisme de défilement (c'est-à-dire quand `overflow` vaut `hidden`, `scroll`, `auto` ou `overlay`) même si cet ancêtre n'est pas nécessairement l'ancêtre de défilement le plus proche&nbsp;: cette valeur ne fonctionnera pas dans un élément pour lequel la propriété vaut `overflow: hidden` ou `auto` ([cf. cette _issue_ GitHub](https://github.com/w3c/csswg-drafts/issues/865)).

## Description

### Types de positionnement

- Un **élément positionné** est un élément dont la propriété de position [calculée](/fr/docs/Web/CSS/computed_value) est `relative`, `absolute`, `fixed` ou `sticky`.
- Un **élément positionné de façon relative** est un élément dont la propriété de position calculée est `relative`. Dans ce cas, les propriétés [`top`](/fr/docs/Web/CSS/top) ou [`bottom`](/fr/docs/Web/CSS/bottom) indiquent le décalage vertical à appliquer et [`left`](/fr/docs/Web/CSS/left) ou [`right`](/fr/docs/Web/CSS/right) indiquent le décalage horizontal.
- Un **élément positionné de façon absolue** est un élément dont la propriété de position calculée est `absolute` ou `fixed`. Dans ce cas, les propriétés [`top`](/fr/docs/Web/CSS/top), [`bottom`](/fr/docs/Web/CSS/bottom), [`right`](/fr/docs/Web/CSS/right) et [`left`](/fr/docs/Web/CSS/left) indiquent les distances entre les bords de l'élément et les bords du bloc englobant (c'est-à-dire l'ancêtre par rapport auquel l'élément est positionné). Si l'élément possède des marges, elles sont ajoutées aux décalages.
- Un **élément positionné en adhérence** est un élément dont la propriété de position calculée vaut `sticky`. Un tel élément se comporte comme un élément positionné de façon relative jusqu'à ce que son bloc englobant dépasse un seuil donné (par exemple fourni par la valeur de [`top`](/fr/docs/Web/CSS/top)) au sein du conteneur puis il se comporte ensuite comme un élément fixe jusqu'à atteindre le bord opposé du bloc englobant.

La plupart du temps, les éléments positionnés de façon absolue ont leurs propriétés [`height`](/fr/docs/Web/CSS/height) et [`width`](/fr/docs/Web/CSS/width) qui valent `auto` afin que le contenu ait suffisamment d'espace. Toutefois, les éléments positionnés de façon absolue et qui ne sont pas des éléments remplacés peuvent remplir l'espace vertical en utilisant [`top`](/fr/docs/Web/CSS/top) et [`bottom`](/fr/docs/Web/CSS/bottom) tout en laissant [`height`](/fr/docs/Web/CSS/height) indéfini (c'est-à-dire avec la valeur `auto`). On pourra faire de même pour l'espace horizontal avec les propriétés [`left`](/fr/docs/Web/CSS/left) et [`right`](/fr/docs/Web/CSS/right).

Sauf dans le cas précédemment énoncé des éléments positionnés de façon absolue et qui remplissent l'espace&nbsp;:

- Si `top` et `bottom` sont tous les deux définis (enfin, s'ils ne valent pas `auto`), c'est `top` qui aura la priorité
- Si `left` et `right` sont tous les deux définis, c'est `left` qui aura la priorité si la direction du texte est de gauche à droite (LTR) et `right` qui aura la priorité si la direction du texte est de droite à gauche (RTL) (par exemple en perse, arabe, hébreu).

## Accessibilité

Il faut s'assurer que les éléments positionnés avec `absolute` ou `fixed` ne masquent pas d'autre contenu sur la page lorsqu'on zoome sur la page afin d'augmenter la taille du texte.

- [Comprendre les règles WCAG 1.4](/fr/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [Présentation visuelle&nbsp;: comprendre les critères de succès 1.4.8 | Comprendre WCAG 2.0 (en anglais)](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-visual-presentation.html)

### Performance et accessibilité

Les éléments qui défilent avec du contenu utilisant `fixed` ou `sticky` peuvent entraîner des problèmes de performance et d'accessibilité. Lorsque l'utilisatrice ou l'utilisateur fait défiler le contenu, le navigateur doit «&nbsp;repeindre&nbsp;» le contenu adhérant ou fixé à un nouvel emplacement. Selon le contenu qui doit être repeint, les performances du navigateur et celles de l'appareil, il est possible que le contenu ne soit pas affiché de façon fluide (60fps), créant ainsi des saccades. Une solution consiste à ajouter `will-change: transform` (cf. [`will-change`](/fr/docs/Web/CSS/will-change)) aux éléments positionnés afin que le rendu de l'élément soit géré à part, améliorant ainsi les performances et l'accessibilité.

## Définition formelle

{{cssinfo}}

## Syntaxe formelle

{{csssyntax}}

## Exemples

### Positionnement relatif

Dans cet exemple, on voit comment les autres éléments sont positionnés, comme si «&nbsp;Deux&nbsp;» prenait l'espace de sa position normale.

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

#deux {
  position: relative;
  top: 20px;
  left: 20px;
  background: blue;
}
```

#### Résultat

{{EmbedLiveSample('', '600px', '200px')}}

### Positionnement absolu

Les éléments qui sont positionnés de façon relative sont toujours pris en compte dans le flux normal des éléments du document. En revanche, les éléments positionnés de façon absolue sont retirés du flux et ne prennent donc plus d'espace lorsqu'il s'agit de positionner les autres éléments. Un élément positionné de façon absolue est positionné par rapport à son plus proche ancêtre positionné. S'il n'y a pas de tel ancêtre, c'est le conteneur initial, le bloc englobant la racine du document, qui est utilisé (voir [la définition du W3C](https://www.w3.org/TR/CSS2/visudet.html#containing-block-details)).

Dans l'exemple qui suit, on n'a pas d'ancêtre positionné et la boîte «&nbsp;Trois&nbsp;» est positionnée de façon absolue par rapport à l'ancêtre immédiat (l'élément `<body>` de l'`iframe` générée ici)&nbsp;:

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
  Les éléments <em>en ligne (inline)</em> <span>comme celui-ci</span> et
  <span>celui-là</span> se situent sur la même ligne avec également les nœuds
  texte. S'il y a de l'espace sur la même ligne. Les éléments qui dépassent
  <span>passent à la ligne si possible — comme pour ce texte.</span> ou cette
  image <img src="long.jpg" />
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
  top: 30px;
  left: 30px;
}
```

#### Résultat

{{EmbedLiveSample('', '100%', 420)}}

### Positionnement fixe

Le positionnement fixe est semblable au positionnement absolu sauf qu'ici, le bloc englobant correspond à la zone d'affichage (<i lang="en">viewport</i>) si aucun ancêtre de l'élément ne possède une propriété [`transform`](/fr/docs/Web/CSS/transform), [`perspective`](/fr/docs/Web/CSS/perspective) ou [`filter`](/fr/docs/Web/CSS/filter) qui est différente de `none`. On utilise souvent ce positionnement pour créer un élément flottant qui reste à la même position, même lorsqu'on fait défiler la page. Dans l'exemple qui suit, la boîte «&nbsp;Un&nbsp;» est fixée à 80 pixels du haut de la page et à 20 pixels du bord gauche.

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

Lorsqu'on regarde le haut de la page, la boîte apparaît en haut à gauche, même après avoir défilé, elle reste à la même place par rapport à la zone d'affichage (<i lang="en">viewport</i>)&nbsp;:

{{EmbedLiveSample('', '800px', '300px')}}

### Positionnement adhérent (<i lang="en">sticky</i>)

Le positionnement adhérent est un mélange de positionnement relatif et de positionnement fixe. L'élément est considéré comme positionné de façon relative, jusqu'à ce qu'un seuil soit franchi. À partir de ce seuil, l'élément est positionné de façon fixe. Par exemple&nbsp;:

```css
#un {
  position: sticky;
  top: 10px;
}
```

positionnera l'élément avec l'identifiant `un` de façon relative jusqu'à ce que la zone d'affichage défile au point où l'élément est à moins de 10 pixels du haut. Ensuite, il sera fixé à 10 pixels du haut, jusqu'à ce que la zone d'affichage redéfile jusqu'avant ce seuil.

Le positionnement adhérent est souvent utilisé pour gérer les niveaux de titre dans les listes alphabétiques. Le titre pour B apparaîtra sous les éléments commençant par A jusqu'à ce que ceux-ci disparaissent de l'écran. Plutôt que de défiler avec le reste de l'écran, la lettre B restera affichée en haut de la zone d'affichage jusqu'à ce que tous les éléments commençant par B aient défilés sur l'écran (ce sera ensuite le tour de la lettre C et ainsi de suite).

Il faut définir un seuil avec au moins [`top`](/fr/docs/Web/CSS/top) ou [`right`](/fr/docs/Web/CSS/right) ou [`bottom`](/fr/docs/Web/CSS/bottom) ou [`left`](/fr/docs/Web/CSS/left) pour que le positionnement adhérent fonctionne comme attendu. Sinon, on ne pourra pas le distinguer du positionnement relatif.

#### HTML

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
    <dd>Ted Leo & The Pharmacists</dd>
    <dd>T-Pain</dd>
    <dd>Thrice</dd>
    <dd>TV On The Radio</dd>
    <dd>Two Gallants</dd>
  </div>
</dl>
```

#### CSS

```css
* {
  box-sizing: border-box;
}

dl > div {
  background: #fff;
  padding: 24px 0 0 0;
}

dt {
  background: #b8c1c8;
  border-bottom: 1px solid #989ea4;
  border-top: 1px solid #717d85;
  color: #fff;
  font:
    bold 18px/21px Helvetica,
    Arial,
    sans-serif;
  margin: 0;
  padding: 2px 0 0 12px;
  position: -webkit-sticky;
  position: sticky;
  top: -1px;
}

dd {
  font:
    bold 20px/45px Helvetica,
    Arial,
    sans-serif;
  margin: 0;
  padding: 0 0 0 12px;
  white-space: nowrap;
}

dd + dd {
  border-top: 1px solid #ccc;
}
```

#### Résultat

{{EmbedLiveSample('', '500px', '300px')}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Apprendre le CSS&nbsp;: le positionnement](/fr/docs/Learn/CSS/CSS_layout/Positioning)
