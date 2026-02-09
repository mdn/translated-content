---
title: justify-content
slug: Web/CSS/Reference/Properties/justify-content
l10n:
  sourceCommit: 1dbba9f7a2c2e35c6e01e8a63159e2aac64b601b
---

La propriété [CSS](/fr/docs/Web/CSS) **`justify-content`** définit comment le navigateur répartit l'espace entre et autour des éléments de contenu le long de {{Glossary("main axis", "l'axe principal")}} d'un conteneur flexible et le long de [l'axe en ligne](/fr/docs/Glossary/Logical_properties#direction_en_ligne) des conteneurs grille et des conteneurs multicolonnes.

L'exemple interactif ci-dessous montre quelques valeurs de `justify-content` en utilisant une disposition en grille.

{{InteractiveExample("Démonstration CSS&nbsp;: justify-content")}}

```css interactive-example-choice
justify-content: start;
```

```css interactive-example-choice
justify-content: center;
```

```css interactive-example-choice
justify-content: space-between;
```

```css interactive-example-choice
justify-content: space-around;
```

```css interactive-example-choice
justify-content: space-evenly;
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="example-container">
    <div class="transition-all" id="example-element">
      <div>Un</div>
      <div>Deux</div>
      <div>Trois</div>
    </div>
  </div>
</section>
```

```css interactive-example
#example-element {
  border: 1px solid #c5c5c5;
  width: 220px;
  display: grid;
  grid-template-columns: 60px 60px;
  grid-auto-rows: 40px;
  row-gap: 10px;
}

#example-element > div {
  background-color: rgb(0 0 255 / 0.2);
  border: 3px solid blue;
}
```

## Syntaxe

```css
/* Alignement « géométrique » */
justify-content: center;
justify-content: start;
justify-content: end;
justify-content: flex-start;
justify-content: flex-end;
justify-content: left;
justify-content: right;

/* Alignement normal */
justify-content: normal;

/* Alignement distribué */
justify-content: space-between;
justify-content: space-around;
justify-content: space-evenly;
justify-content: stretch;

/* Alignement pour le dépassement (pour l'alignement géométrique seulement) */
justify-content: safe center;
justify-content: unsafe center;

/* Valeurs globales */
justify-content: inherit;
justify-content: initial;
justify-content: revert;
justify-content: revert-layer;
justify-content: unset;
```

### Valeurs

- `start`
  - : Les éléments sont regroupés au début du conteneur selon l'axe principal. Le bord du premier élément est aligné avec le bord du conteneur.

- `end`
  - : Les éléments sont regroupés à la fin du conteneur selon l'axe principal. Le bord du dernier élément est aligné avec le bord du conteneur.

- `flex-start`
  - : Les éléments sont regroupés vers le début du conteneur, selon l'axe principal et le sens du conteneur flexible.
    Cette valeur ne s'applique qu'aux éléments flexibles. Pour les éléments qui ne sont pas dans un conteneur flexible, cette valeur est synonyme de `start`.
- `flex-end`
  - : Les éléments sont regroupés vers la fin du conteneur, selon l'axe principal et le sens du conteneur flexible.
    Cette valeur ne s'applique qu'aux éléments flexibles. Pour les éléments qui ne sont pas dans un conteneur flexible, cette valeur est synonyme de `end`.
- `center`
  - : Les éléments sont regroupés au centre du conteneur selon l'axe principal.

- `left`
  - : Les éléments sont regroupés bord à bord vers le bord gauche du conteneur d'alignement. Lorsque l'axe horizontal de la propriété n'est pas parallèle à l'axe en ligne, comme lorsque [`flex-direction: column;`](/fr/docs/Web/CSS/Reference/Properties/flex-direction) est utilisé, cette valeur se comporte comme `start`.

- `right`
  - : Les éléments sont regroupés bord à bord vers le bord droit du conteneur d'alignement sur l'axe approprié. Si l'axe de la propriété n'est pas parallèle à l'axe en ligne (dans un conteneur grille) ou à l'axe principal (dans un conteneur flexible), cette valeur se comporte comme `start`.

- `normal`
  - : Se comporte comme `stretch`, sauf dans le cas des conteneurs multicolonnes avec une valeur de {{CSSxRef("column-width")}} différente de `auto`, auquel cas les colonnes prennent la largeur définie par `column-width` au lieu de s'étirer pour remplir le conteneur. Comme `stretch` se comporte comme `start` dans les conteneurs flexibles, `normal` se comporte aussi comme `start`.

- `space-between`
  - : Les éléments ont espacés équitablement selon l'axe principal. L'espace utilisé entre chaque élément est le même. Le premier élément est aligné sur le bord du conteneur et le dernier élément est aussi aligné sur le bord de l'élément.

- `space-around`
  - : Les éléments ont espacés équitablement selon l'axe principal. L'espace utilisé entre chaque élément est le même. L'espace entre le bord du conteneur et le premier élément et l'espace entre le dernier élément et le bord du conteneur représente la moitié de l'espace entre deux éléments.

- `space-evenly`
  - : Les éléments sont espacés équitablement. L'espace utilisé entre chaque élément, entre le bord du conteneur et le premier élément, et entre le dernier élément et le bord du conteneur est le même.

- `stretch`
  - : Si la somme des tailles des éléments sur l'axe principal est inférieure à la taille du conteneur, tous les éléments dimensionnés avec `auto` sont agrandis avec le même supplément (et non proportionnellement), tout en respectant les contraintes imposées par {{CSSxRef("max-height")}}/{{CSSxRef("max-width")}} (ou par des fonctionnalités analogues), de sorte que l'ensemble des éléments remplit exactement le conteneur sur l'axe principal.

    > [!NOTE]
    > Pour les [boîtes flexibles](/fr/docs/Web/CSS/Guides/Flexible_box_layout/Basic_concepts), la valeur `stretch` se comporte comme `flex-start` ou `start`. En effet, dans les boîtes flexibles, l'étirement est contrôlé à l'aide de la propriété {{CSSxRef("flex-grow")}}.

- `safe`
  - : Si l'élément dépasse le conteneur d'alignement, alors l'élément est aligné comme si le mode d'alignement était `start`. L'alignement souhaité ne sera pas appliqué.

- `unsafe`
  - : Même si l'élément dépasse le conteneur d'alignement, l'alignement souhaité sera appliqué. Contrairement à `safe`, qui ignorera l'alignement souhaité pour éviter le dépassement.

## Description

Définie dans le module [d'alignement des boîtes CSS](/fr/docs/Web/CSS/Guides/Box_alignment), la propriété `justify-content` s'applique aux conteneurs multicolonnes, flexibles et grille. Cette propriété ne s'applique pas aux conteneurs de type bloc et n'a aucun effet sur eux.

Cette propriété partage de nombreux mots-clés avec la propriété {{CSSxRef("align-content")}}, mais pas tous&nbsp;! `justify-content` n'intervient pas dans l'alignement sur la ligne de base et ne prend donc pas de valeurs de ligne de base.

Dans les [dispositions flexibles](/fr/docs/Web/CSS/Guides/Flexible_box_layout), la propriété définit comment l'espace libre positif est réparti entre ou autour des éléments flexibles le long de l'axe principal. Cette propriété affecte l'espace entre les éléments d'une ligne, et non l'espace entre les lignes. L'alignement est effectué après l'application des longueurs et des marges automatiques, ce qui signifie que lorsque un ou plusieurs éléments flexibles d'une ligne ont un facteur {{CSSxRef("flex-grow")}} supérieur à `0`, la propriété n'a aucun effet car il n'y a pas d'espace à répartir sur cette ligne. De plus, comme l'étirement sur l'axe principal est contrôlé par {{CSSxRef("flex")}}, la valeur `stretch` se comporte comme `flex-start`.

Avec la [disposition en grille](/fr/docs/Web/CSS/Guides/Grid_layout), cette propriété répartit l'espace disponible entre ou autour des colonnes de la grille, et non des éléments de la grille. Si le conteneur de grille est plus grand que la grille elle-même, la propriété `justify-content` peut être utilisée pour justifier la grille le long de l'axe en ligne, en alignant les colonnes de la grille.

Les tailles de pistes `auto` de la grille (et uniquement les tailles de pistes `auto`) peuvent être étirées par les propriétés `align-content` et `justify-content`. Par conséquent, par défaut, une piste dimensionnée en `auto` occupera tout espace restant dans le conteneur de grille. Comme la taille en ligne de la grille doit être inférieure à celle du conteneur de grille pour qu'il y ait de l'espace à répartir, la propriété n'a aucun effet dans ce cas.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Exemple de grille de base

Dans cet exemple, il y a une grille plus étroite que son conteneur de grille, et nous utilisons `justify-content` pour répartir l'espace disponible de façon égale autour et entre les colonnes de la grille.

#### HTML

Le conteneur {{HTMLElement("section")}}, qui va devenir notre conteneur de grille, contient 16 {{HTMLElement("div")}} imbriqués qui deviendront des éléments de la grille.

```html
<section class="container">
  <div>A</div>
  <div>B</div>
  <div>C</div>
  <div>D</div>
  <div>E</div>
  <div>F</div>
  <div>G</div>
  <div>H</div>
  <div>I</div>
  <div>J</div>
  <div>K</div>
  <div>L</div>
  <div>M</div>
  <div>N</div>
  <div>O</div>
  <div>P</div>
</section>
```

#### CSS

```css hidden
.container {
  margin: 5px;
  border: 1px solid;
  box-sizing: border-box;
}

div {
  line-height: 2em;
  border: 1px solid;
  box-sizing: border-box;
  text-align: center;
}
```

Nous définissons la largeur du conteneur à `500px` et indiquons trois colonnes, chacune ayant une largeur de `80px`, ce qui signifie qu'il y a `260px` d'espace disponible à répartir entre ou autour d'elles. Nous appliquons ensuite `justify-content: space-evenly`, ce qui signifie qu'il y aura `65px` d'espace avant, entre et après chaque colonne.

Nous définissons différentes largeurs (et couleurs de fond) pour montrer comment la justification est appliquée aux colonnes.

```css
.container {
  display: grid;
  grid: auto-flow / repeat(3, 80px);
  width: 500px;
  justify-content: space-evenly;
}

div {
  background-color: pink;
  width: 80px;
}

div:nth-of-type(n + 9) {
  width: 35px;
  background-color: lightgreen;
}

div:nth-last-of-type(3) {
  width: 250px;
  background-color: lightblue;
}
```

#### Résultat

{{EmbedLiveSample("Exemple de grille de base", "100%", 220)}}

Notez que `justify-contents` aligne les colonnes et n'a aucun effet sur les éléments ou l'alignement dans les zones de grille. Les éléments de la grille, même ceux qui débordent de leur cellule, n'affectent pas la justification des colonnes.

### Le mot-clé `safe`

Cet exemple montre le mot-clé `safe`. Nous définissons quatre éléments flexibles centrés qui ne peuvent pas être répartis sur plusieurs lignes, et qui débordent donc leur conteneur à ligne unique. En ajoutant `safe` à `center` dans la propriété `justify-content`, le contenu débordant se comporte comme si le mode d'alignement était `start`.

```html hidden
<p><code>justify-content: center;</code></p>
<section class="container safe">
  <div>A</div>
  <div>B</div>
  <div>C</div>
  <div>D</div>
</section>
<p><code>justify-content: safe center;</code></p>
<section class="container safe-center">
  <div>A</div>
  <div>B</div>
  <div>C</div>
  <div>D</div>
</section>
<p><code>justify-content: safe center;</code> with 3 items</p>
<section class="container safe-center">
  <div>A</div>
  <div>B</div>
  <div>C</div>
</section>
```

```css hidden
.container {
  margin: 5px auto;
  border: 1px dashed;
  box-sizing: border-box;
  background-color: lightblue;
}

div {
  line-height: 1em;
  border: 1px solid;
  box-sizing: border-box;
  text-align: center;
  background-color: pink;
}
```

Le conteneur est positionné sur `center`, chaque conteneur sauf le premier ayant le mot-clé `safe` ajouté&nbsp;:

```css
.container {
  align-items: baseline;
  display: flex;
  width: 350px;
  height: 2em;
}

.safe {
  justify-content: center;
}

.safe-center {
  justify-content: safe center;
}

div {
  flex: 0 0 100px;
}
```

#### Résultat

{{EmbedLiveSample("Le mot-clé `safe`", "100%", 260)}}

Lorsqu'un élément déborde du conteneur d'alignement, avec `safe` inclus, le mode d'alignement se comporte comme `start` et l'alignement `center` n'est pas appliqué. Le mot-clé `safe` n'a aucun effet si les éléments ne débordent pas du conteneur.

### Visualiser la répartition des éléments flexibles

Cet exemple inclut une disposition flexible à plusieurs lignes. Le second élément flexible possède un facteur de croissance positif, absorbant tout l'espace libre disponible dans la première ligne flexible.

```css hidden
#container {
  margin: 5px auto;
  border: 1px dashed black;
  box-sizing: border-box;
}

div {
  line-height: 2em;
  border: 1px solid;
  box-sizing: border-box;
  text-align: center;
}
```

```css
#container {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between; /* Peut être modifié dans l'exemple en direct */
  width: 510px;
}

div {
  line-height: 2em;
  flex: 0 0 120px;
  background-color: pink;
}

div:nth-of-type(2) {
  flex-grow: 1;
  background-color: yellow;
}

div:nth-of-type(n + 9) {
  flex: 0 0 35px;
  background-color: lightgreen;
}
div:last-of-type {
  flex: 0 0 300px;
  background-color: lightblue;
}
```

```html hidden
<section id="container">
  <div>A</div>
  <div>GROW</div>
  <div>C</div>
  <div>D</div>
  <div>E</div>
  <div>F</div>
  <div>G</div>
  <div>H</div>
  <div>I</div>
  <div>J</div>
  <div>K</div>
  <div>L</div>
  <div>M</div>
  <div>N</div>
  <div>O</div>
  <div>P</div>
</section>
<select id="justifyContent">
  <option value="start">start</option>
  <option value="end">end</option>
  <option value="flex-start">flex-start</option>
  <option value="flex-end">flex-end</option>
  <option value="center">center</option>
  <option value="left">left</option>
  <option value="right">right</option>
  <option value="space-between" selected>space-between</option>
  <option value="space-around">space-around</option>
  <option value="space-evenly">space-evenly</option>
  <option value="stretch">stretch</option>
</select>
```

```js hidden
const justifyContent = document.getElementById("justifyContent");
justifyContent.addEventListener("change", (evt) => {
  document.getElementById("container").style.justifyContent = evt.target.value;
});
```

#### Résultat

{{EmbedLiveSample("Visualiser la répartition des éléments flexibles", "100%", 180)}}

Sélectionnez différents mots-clés dans le menu déroulant pour visualiser les différentes valeurs de mot-clé `justify-content`. Comme un élément de la première ligne peut croître, il n'y a pas d'espace disponible sur cette ligne pour que la propriété `justify-content` le répartisse. Avec la valeur `space-between`, le premier élément de chaque ligne est aligné avec le bord de début principal, et le dernier élément est aligné avec le bord de fin principal. Ainsi, si une ligne ne contient qu'un seul élément, il sera aligné avec le bord de début principal (comme on le voit sur la dernière ligne). Ce n'est pas le cas pour les autres valeurs `space-*`, telles que `space-evenly` et `space-around`, qui centrent les lignes flexibles à un seul élément.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Les concepts de bases](/fr/docs/Web/CSS/Guides/Flexible_box_layout/Basic_concepts)
- [Aligner des objets dans un conteneur flexible](/fr/docs/Web/CSS/Guides/Flexible_box_layout/Aligning_items)
- [Aligner des objets dans une grille](/fr/docs/Web/CSS/Guides/Box_alignment/In_grid_layout)
- Le module [d'alignement de boîte CSS](/fr/docs/Web/CSS/Guides/Box_alignment)
