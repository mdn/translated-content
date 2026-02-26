---
title: flex-grow
slug: Web/CSS/Reference/Properties/flex-grow
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

La propriété [CSS](/fr/docs/Web/CSS) **`flex-grow`** définit le facteur de grossissement, qui indique quelle part de [**l'espace libre positif**](/fr/docs/Web/CSS/Guides/Flexible_box_layout/Controlling_flex_item_ratios), s'il y en a, doit être attribuée à la [taille principale](/fr/docs/Learn_web_development/Core/CSS_layout/Flexbox#aparté_sur_le_modèle_flex) de l'élément flexible.

Lorsque la taille principale du conteneur flexible est supérieure à la somme des tailles principales de ses éléments flexibles, cet espace libre positif peut être réparti entre les éléments flexibles, l'agrandissement de chaque élément étant déterminée par la valeur de son facteur de grossissement par rapport à la somme totale des facteurs de grossissement de tous les éléments flexibles.

> [!NOTE]
> Il est recommandé d'utiliser la propriété abrégée {{CSSxRef("flex")}} avec une valeur mot-clé comme `auto` ou `initial` plutôt que de définir `flex-grow` seul. Les [valeurs mot-clés](/fr/docs/Web/CSS/Reference/Properties/flex#valeurs) s'étendent à des combinaisons fiables de `flex-grow`, {{CSSxRef("flex-shrink")}} et {{CSSxRef("flex-basis")}}, ce qui permet d'obtenir les comportements flex les plus courants.

{{InteractiveExample("Démonstration CSS&nbsp;: flex-grow")}}

```css interactive-example-choice
flex-grow: 1;
```

```css interactive-example-choice
flex-grow: 2;
```

```css interactive-example-choice
flex-grow: 3;
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="transition-all" id="example-element">Je grandis</div>
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
  flex-basis: 0;
}
```

## Syntaxe

```css
/* Valeurs de type <number> */
flex-grow: 3;
flex-grow: 0.6;

/* Valeurs globales */
flex-grow: inherit;
flex-grow: initial;
flex-grow: revert;
flex-grow: revert-layer;
flex-grow: unset;
```

La propriété `flex-grow` se définit avec une valeur de type `<number>`.

### Valeurs

- `<number>`
  - : Un nombre ({{CSSxRef("&lt;number&gt;")}}). Les valeurs négatives sont invalides. La valeur par défaut est 0, ce qui empêche l'agrandissement de l'élément flexible.

## Description

Cette propriété définit la part de l'espace restant dans le conteneur flexible qui doit être attribuée à l'élément (le facteur d'agrandissement).

La [taille principale](/fr/docs/Learn_web_development/Core/CSS_layout/Flexbox#aparté_sur_le_modèle_flex) correspond soit à la largeur, soit à la hauteur de l'élément, selon la valeur de {{CSSxRef("flex-direction")}}.

L'espace restant, ou espace libre positif, correspond à la taille du conteneur flexible moins la taille totale de tous les éléments flexibles. Si tous les éléments frères ont le même facteur d'agrandissement, alors tous recevront la même part de l'espace restant. La pratique courante consiste à définir `flex-grow: 1`, mais définir le facteur d'agrandissement de tous les éléments flexibles à `88`, `100`, `1.2` ou toute autre valeur supérieure à `0` produira le même résultat&nbsp;: la valeur est un ratio.

Si les valeurs `flex-grow` diffèrent, l'espace libre positif est réparti selon le rapport défini par les différents facteurs d'agrandissement flexibles. Les valeurs du facteur `flex-grow` de tous les éléments flexibles frères sont additionnées. L'espace libre positif du conteneur flexible, s'il existe, est ensuite divisé par ce total. La taille principale de chaque élément flexible dont la valeur `flex-grow` est supérieure à `0` augmentera de ce quotient multiplié par son propre facteur d'agrandissement.

Par exemple, si quatre `100px` flex items sont dans un conteneur de `700px` et que les flex items ont des facteurs de `flex-grow` de `0`, `1`, `2`, et `3`, respectivement, la taille principale totale des quatre items est de `400px`, ce qui signifie qu'il y a `300px` d'espace libre positif à répartir. La somme des quatre facteurs (`0 + 1 + 2 + 3 = 6`) est égale à six. Donc, chaque facteur est égal à `50px` (`(300px / 6 )`). Chaque flex item reçoit 50px d'espace libre multiplié par son facteur de `flex-grow` — donc `0`, `50px`, `100px`, et `150px` respectivement. Les tailles finales des flex items deviennent `100px`, `150px`, `200px`, et `250px` respectivement.

`flex-grow` s'utilise généralement avec les autres propriétés abrégées {{CSSxRef("flex")}}, {{CSSxRef("flex-shrink")}} et {{CSSxRef("flex-basis")}}. Il est recommandé d'utiliser la propriété abrégée `flex` pour s'assurer que toutes les valeurs sont définies.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Définir le facteur d'agrandissement d'un élément flexible

Dans cet exemple, la somme de six facteurs d'agrandissement est égale à huit, ce qui signifie que chaque valeur de facteur d'agrandissement est `12.5%` de l'espace restant.

#### HTML

```html
<h1>Ceci est un exemple de <code>flex-grow</code></h1>
<p>
  A, B, C et F ont <code>flex-grow: 1</code>. D et E ont
  <code>flex-grow: 2</code>.
</p>
<div id="content">
  <div class="box1">A</div>
  <div class="box2">B</div>
  <div class="box3">C</div>
  <div class="box4">D</div>
  <div class="box5">E</div>
  <div class="box6">F</div>
</div>
```

#### CSS

```css
#content {
  display: flex;
}

div > div {
  border: 3px solid rgb(0 0 0 / 20%);
}

.box1,
.box2,
.box3,
.box6 {
  flex-grow: 1;
}

.box4,
.box5 {
  flex-grow: 2;
  border: 3px solid rgb(0 0 0 / 20%);
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
  background-color: brown;
}
.box5 {
  background-color: lightgreen;
}
.box6 {
  background-color: brown;
}
```

#### Résultat

{{EmbedLiveSample("Définir le facteur d'agrandissement d'un élément flexible")}}

Lorsque les six éléments flexibles sont répartis le long de l'axe principal du conteneur, si la somme du contenu principal de ces éléments flexibles est inférieure à la taille de l'axe principal du conteneur, l'espace supplémentaire est réparti entre les éléments flexibles, avec `A`, `B`, `C` et `F` recevant chacun `12.5%` de l'espace restant et `D` et `E` recevant chacun `25%` de l'espace supplémentaire.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété raccourcie {{CSSxRef("flex")}}
- [Concepts de base des boîtes flexibles](/fr/docs/Web/CSS/Guides/Flexible_box_layout/Basic_concepts)
- [Contrôler les proportions des éléments flexibles le long de l'axe principal](/fr/docs/Web/CSS/Guides/Flexible_box_layout/Controlling_flex_item_ratios)
- Le module [du modèle de boîte flexible CSS](/fr/docs/Web/CSS/Guides/Flexible_box_layout)
- [`flex-grow` est bizarre. Ou peut-être pas&nbsp;? <sup>(angl.)</sup>](https://css-tricks.com/flex-grow-is-weird/) sur CSS-Tricks (2017)
