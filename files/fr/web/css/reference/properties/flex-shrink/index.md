---
title: flex-shrink
slug: Web/CSS/Reference/Properties/flex-shrink
l10n:
  sourceCommit: 9b26f4f3abc805da8a8956da80b927cc09d2fe6b
---

La propriété [CSS](/fr/docs/Web/CSS) **`flex-shrink`** définit le facteur de rétrécissement d'un élément flexible. Si la taille de tous les éléments flexibles est supérieure à celle du conteneur flexible, [les éléments flexibles peuvent rétrécir](/fr/docs/Web/CSS/Guides/Flexible_box_layout/Controlling_flex_item_ratios#la_propriété_flex-shrink) pour s'adapter selon leur valeur `flex-shrink`. [L'espace négatif libre](/fr/docs/Web/CSS/Guides/Flexible_box_layout/Controlling_flex_item_ratios#espace_libre_positif_et_négatif) de chaque ligne flexible se répartit entre les éléments flexibles de la ligne ayant une valeur `flex-shrink` supérieure à `0`.

> [!NOTE]
> Il est recommandé d'utiliser le raccourci {{CSSxRef("flex")}} avec une valeur clé comme `auto` ou `initial` plutôt que de définir `flex-shrink` seul. Les [valeurs avec un mot-clé](/fr/docs/Web/CSS/Reference/Properties/flex#valeurs) correspondent à des combinaisons fiables de {{CSSxRef("flex-grow")}}, `flex-shrink` et {{CSSxRef("flex-basis")}}, ce qui aide à obtenir les comportements flex couramment recherchés.

{{InteractiveExample("Démonstration CSS&nbsp;: flex-shrink")}}

```css interactive-example-choice
flex-shrink: 0;
```

```css interactive-example-choice
flex-shrink: 1;
```

```css interactive-example-choice
flex-shrink: 2;
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="transition-all" id="example-element">Je rétrécis</div>
  <div>Élément Deux</div>
  <div>Élément Trois</div>
</section>
```

```css interactive-example
.default-example {
  border: 1px solid #c5c5c5;
  width: auto;
  max-height: 300px;
  display: flex;
}

.default-example > div {
  background-color: rgb(0 0 255 / 0.2);
  border: 3px solid blue;
  margin: 10px;
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: 300px;
}
```

## Syntaxe

```css
/* Valeurs de type <number> */
flex-shrink: 2;
flex-shrink: 0.6;

/* Valeurs globales */
flex-shrink: inherit;
flex-shrink: initial;
flex-shrink: revert;
flex-shrink: revert-layer;
flex-shrink: unset;
```

### Valeurs

La propriété `flex-shrink` est définie à l'aide d'un nombre (`<number>`) unique.

- `<number>`
  - : Voir {{CSSxRef("&lt;number&gt;")}}. Les valeurs négatives sont invalides. La valeur par défaut est 1.

## Description

La propriété `flex-shrink` définit le facteur de rétrécissement, qui détermine dans quelle mesure l'élément flexible va rétrécir par rapport aux autres éléments flexibles du conteneur lorsque l'espace négatif libre est réparti.

Cette propriété intervient lorsque le navigateur calcule les valeurs de base de flexibilité des éléments flexibles et constate qu'elles sont trop grandes pour tenir dans le conteneur flexible. Tant que le facteur de rétrécissement est positif, les éléments rétrécissent afin de ne pas déborder du conteneur.

La propriété `flex-grow` permet de répartir l'espace libre positif disponible proportionnellement au facteur d'agrandissement de chaque élément, en ne tenant compte que de la valeur de la propriété `flex-grow`. La propriété `flex-shrink` gère la suppression de l'espace négatif libre pour que les boîtes tiennent dans leur conteneur sans déborder. Supprimer de l'espace est un peu plus complexe qu'en ajouter. Le facteur de rétrécissement est multiplié par la taille de base flexible&nbsp;; cela répartit l'espace négatif en proportion de la capacité de rétrécissement de l'élément. Cela évite que les petits éléments rétrécissent à `0px` avant qu'un élément plus grand ne soit visiblement réduit.

En général, `flex-shrink` s'utilise avec les propriétés {{CSSxRef("flex-grow")}} et {{CSSxRef("flex-basis")}}. Dans le raccourci `flex`, le facteur de rétrécissement est toujours le second nombre (`<number>`). Si le raccourci ne contient qu'une seule valeur numérique, cette valeur est considérée comme celle de `flex-grow`.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Définir le facteur de rétrécissement d'un élément flexible

Cet exemple montre comment l'espace négatif libre est réparti selon le facteur de rétrécissement de l'élément. Il inclut cinq éléments flexibles dont la valeur `flex-shrink` est supérieure à 0, et dont la largeur totale dépasse celle du conteneur flexible parent.

#### HTML

```html
<div id="content">
  <div class="box1">A</div>
  <div class="box2">B</div>
  <div class="box3">C</div>
  <div class="box4">D</div>
  <div class="box5">E</div>
</div>
```

#### CSS

Chaque élément flexible reçoit une largeur {{CSSxRef("width")}} de `200px`. Comme la propriété {{CSSxRef("flex-basis")}} a pour valeur par défaut `auto`, la base de flexibilité de chaque élément est `200px`. Cela donne aux éléments flexibles une largeur totale de `1000px`, soit le double de celle du conteneur. Tous les éléments flexibles sont rendus réductibles, avec des valeurs `flex-shrink` supérieures à `0`. Les deux derniers éléments ont des valeurs de `flex-shrink` plus élevées, ils rétréciront donc davantage.

```css
#content {
  display: flex;
  width: 500px;
}

#content div {
  width: 200px;
}

.box1,
.box2,
.box3 {
  flex-shrink: 1;
}

.box4 {
  flex-shrink: 1.5;
}

.box5 {
  flex-shrink: 2;
}
```

```css hidden
#content {
  margin: 5px;
}
div {
  font-family: monospace;
  outline: 1px solid;
  line-height: 4em;
  text-align: center;
}
.box1 {
  background-color: red;
}
.box2 {
  background-color: lightblue;
}
.box3 {
  background-color: yellow;
}
.box4 {
  background-color: lightsalmon;
}
.box5 {
  background-color: lightgreen;
}
```

#### Résultat

{{EmbedLiveSample("Définir le facteur de rétrécissement d'un élément flexible", 500, 100)}}

Les éléments flexibles ne débordent pas de leur conteneur car ils peuvent rétrécir&nbsp;: les `500px` d'espace négatif libre sont répartis entre les cinq éléments selon leurs valeurs `flex-shrink`. Les trois premiers éléments ont la valeur `flex-shrink: 1`. D a la valeur `flex-shrink: 1.5` et E a la valeur `flex-shrink: 2`. La largeur finale de D et E est inférieure à celle des autres, E étant plus petit que D.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Concepts de base des boîtes flexibles](/fr/docs/Web/CSS/Guides/Flexible_box_layout/Basic_concepts)
- [Contrôler les proportions des boîtes flexibles le long de l'axe principal](/fr/docs/Web/CSS/Guides/Flexible_box_layout/Controlling_flex_item_ratios)
- Le module [du modèle de boîte flexible CSS](/fr/docs/Web/CSS/Guides/Flexible_box_layout)
