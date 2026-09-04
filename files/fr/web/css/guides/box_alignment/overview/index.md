---
title: Aperçu de l'alignement de boîte CSS
short-title: Aperçu
slug: Web/CSS/Guides/Box_alignment/Overview
l10n:
  sourceCommit: 32bdfdb82cf91ce9942b694286dec62be2cc20aa
---

Le module [d'alignement de boîte CSS](/fr/docs/Web/CSS/Guides/Box_alignment) définit les fonctionnalités CSS relatives à l'alignement des boîtes dans les différents modèles de mise en page CSS. Le module vise à créer une méthode d'alignement cohérente dans tout le CSS. Les propriétés d'alignement des boîtes CSS offrent des capacités d'alignement horizontal et vertical complètes.

Ce guide détaille les concepts généraux trouvés dans ce module. Des guides supplémentaires fournissent plus d'informations sur l'alignement des boîtes dans [les boîtes flexibles (<i lang="en">flexbox</i> en anglais)](/fr/docs/Web/CSS/Guides/Box_alignment/In_flexbox), [mise en page en grille](/fr/docs/Web/CSS/Guides/Box_alignment/In_grid_layout), [mise en page multi-colonnes](/fr/docs/Web/CSS/Guides/Box_alignment/In_multi-column_layout) et [mise en page en bloc, positionnée absolument et en tableau](/fr/docs/Web/CSS/Guides/Box_alignment/In_block_abspos_tables). L'alignement du texte est couvert par les modules [de texte CSS](/fr/docs/Web/CSS/Guides/Text) et [disposition en ligne CSS](/fr/docs/Web/CSS/Guides/Inline_layout).

## Concepts clés et terminologie

La spécification détaille certaines terminologies d'alignement pour faciliter la discussion de ces propriétés d'alignement en dehors de leur mise en œuvre dans une méthode de mise en page particulière. Il existe également des concepts clés communs à toutes les méthodes de mise en page.

### Relation avec les modes d'écriture

L'alignement est lié aux modes d'écriture en ce sens que lorsque nous alignons un élément, nous ne considérons pas si nous l'alignons par rapport aux dimensions physiques de haut, droite, bas et gauche. Au lieu de cela, nous décrivons l'alignement en termes de début et de fin de la dimension particulière sur laquelle nous travaillons. Cela garantit que l'alignement fonctionne de la même manière quel que soit le mode d'écriture du document.

### Deux dimensions de l'alignement

Lors de l'utilisation des propriétés d'alignement des boîtes, vous alignerez le contenu sur l'un des deux axes&nbsp;: l'axe en ligne (ou principal) et l'axe de bloc (ou transversal). L'axe en ligne est l'axe le long duquel les mots d'une phrase s'écoulent dans le mode d'écriture utilisé. Pour l'anglais, par exemple, l'axe en ligne est horizontal. L'axe de bloc est l'axe le long duquel les blocs, tels que les éléments de paragraphe, sont disposés&nbsp;; il traverse l'axe en ligne.

![L'axe en ligne est la direction gauche / droite, ou horizontale. L'axe de bloc est vertical, ou haut / bas.](two-axes.png)

Lors de l'alignement des éléments sur l'axe en ligne, vous utiliserez les propriétés qui commencent par `justify-`&nbsp;:

- {{CSSxRef("justify-items")}}
- {{CSSxRef("justify-self")}}
- {{CSSxRef("justify-content")}}

Lors de l'alignement des éléments sur l'axe de bloc, vous utiliserez les propriétés qui commencent par `align-`&nbsp;:

- {{CSSxRef("align-items")}}
- {{CSSxRef("align-self")}}
- {{CSSxRef("align-content")}}

Les boîtes flexibles ajoutent une complication supplémentaire en ce sens que ce qui précède est vrai lorsque {{CSSxRef("flex-direction")}} est défini sur `row`. Les propriétés sont inversées lorsqu'une boîte flexible est définie sur `column`. Par conséquent, lorsqu'on travaille avec des boîtes flexibles, il est généralement plus facile de penser en termes d'axe principal et d'axe transversal plutôt qu'en termes d'axe en ligne et d'axe de bloc. Les propriétés `justify-` sont toujours utilisées pour l'alignement sur l'axe principal, les propriétés `align-` sur l'axe transversal.

### Le sujet d'alignement

Le **{{Glossary("alignment subject", "sujet d'alignement")}}** est l'élément qui est aligné. Pour `justify-self` ou `align-self`, ou lors de la définition de ces valeurs en groupe avec `justify-items` ou `align-items`, il s'agira de la boîte de marge de l'élément sur lequel cette propriété est utilisée. Les propriétés `justify-content` et `align-content` diffèrent selon la méthode de mise en page.

### Le conteneur d'alignement

Le **{{Glossary("alignment container", "conteneur d'alignement")}}** est la boîte dans laquelle le sujet est aligné. Il s'agira généralement du bloc contenant du sujet d'alignement. Un conteneur d'alignement peut contenir un ou plusieurs sujets d'alignement.

L'image ci-dessous montre un conteneur d'alignement avec deux sujets d'alignement à l'intérieur.

![Une boîte contenant deux rectangles de la même largeur mais de hauteurs différentes. Les deux rectangles sont alignés en haut, ce qui signifie qu'ils ont tous deux leurs lignes supérieures à environ 10px à l'intérieur du haut de la boîte dans laquelle ils sont contenus.](align-container-subjects.png)

## Types d'alignement

Il existe trois types d'alignement détaillés dans la spécification&nbsp;; ceux-ci utilisent des valeurs de mots-clés.

- [Alignement positionnel](#alignement_positionnel)
- [Alignement sur la ligne de base](#alignement_sur_la_ligne_de_base)
- [Alignement distribué](#alignement_distribué)

### Alignement positionnel

**L'alignement positionnel** est la position d'un sujet d'alignement par rapport à son conteneur d'alignement. Les valeurs de mots-clés d'alignement positionnel sont définies pour l'alignement positionnel et peuvent être utilisées comme valeurs pour l'alignement du contenu avec `justify-content` et `align-content` et également pour l'alignement individuel avec `justify-self` et `align-self`.

- `center`
- `start`
- `end`
- `self-start`
- `self-end`
- `flex-start` pour les boîtes flexibles uniquement
- `flex-end` pour les boîtes flexibles uniquement
- `left`
- `right`

À l'exception des valeurs physiques `left` et `right`, qui se rapportent aux attributs physiques de l'écran, toutes les autres valeurs, les valeurs de {{CSSxRef("self-position")}} et {{CSSxRef("content-position")}}, sont des valeurs logiques et se rapportent au mode d'écriture du contenu.

Par exemple, en travaillant avec la mise en page en grille CSS, si vous utilisez le français et définissez `justify-content` sur `start`, cela déplacera les éléments dans la dimension en ligne vers le début, c'est-à-dire vers la gauche puisque les phrases en français commencent à gauche de la page. Si vous utilisiez l'arabe, une langue de droite à gauche, la même valeur `start` déplacerait les éléments vers la droite, puisque les phrases en arabe commencent à droite de la page.

![Il y a deux boîtes, chacune contenant 3 enfants de hauteurs différentes mais de largeurs similaires. La première boîte comporte trois enfants marqués par les lettres A, B et C. Ces trois boîtes sont toutes alignées à gauche. La seconde boîte comporte trois enfants avec des lettres arabes. Ces trois boîtes sont toutes alignées à droite.](writing-mode-start.png)

Les deux ont `justify-content: start`, mais la position du début diffère selon le mode d'écriture.

### Alignement sur la ligne de base

**L'alignement sur la ligne de base** décrit la relation entre les lignes de base de plusieurs sujets d'alignement dans un même contexte d'alignement. Les mots-clés d'alignement sur la ligne de base {{CSSxRef("baseline-position")}} servent à aligner les lignes de base des boîtes au sein d'un groupe de sujets d'alignement. Ils peuvent être utilisés comme valeurs pour l'alignement du contenu avec `justify-content` et `align-content` et pour l'auto-alignement avec `justify-self` et `align-self`.

- `baseline`
- `first baseline`
- `last baseline`

L'alignement de contenu sur la ligne de base — définir une valeur d'alignement sur la ligne de base pour `justify-content` ou `align-content` — fonctionne dans les méthodes de mise en page qui disposent les éléments en rangées. Les sujets d'alignement sont alignés sur la ligne de base les uns par rapport aux autres en ajoutant du remplissage à l'intérieur des boîtes.

L'auto-alignement sur la ligne de base décale les boîtes pour les aligner sur la ligne de base en ajoutant une marge à l'extérieur des boîtes. L'auto-alignement s'applique aux boîtes individuelles avec `justify-self` ou `align-self`, ou aux groupes de boîtes avec `justify-items` et `align-items`.

### Alignement distribué

**L'alignement distribué** définit l'alignement comme une répartition d'espace entre les sujets d'alignement. Les mots-clés d'alignement distribué {{CSSxRef("content-distribution")}} sont utilisés avec les propriétés `align-content` et `justify-content`. Ces mots-clés définissent ce qu'il advient de l'espace supplémentaire après l'affichage des sujets d'alignement. Les valeurs sont les suivantes&nbsp;:

- `stretch`
- `space-between`
- `space-around`
- `space-evenly`

Par exemple, dans la mise en page flexible, les éléments sont initialement alignés avec `flex-start`. En travaillant dans un mode d'écriture horizontal de haut en bas (avec une langue comme le français), et avec `flex-direction` défini sur `row`, les éléments commencent tout à gauche, et tout espace disponible après l'affichage des éléments est placé après eux.

![Trois rectangles de largeurs différentes sont à l'intérieur d'une boîte. Ils sont tous alignés sur le côté gauche de la boîte parente, avec environ 10px entre eux, et 10px entre le côté gauche du premier rectangle et le conteneur parent.](justify-content-start.png)

Si vous définissez `justify-content: space-between` sur le conteneur flexible, l'espace disponible est désormais réparti et placé entre les éléments.

![Trois rectangles de largeurs différentes sont à l'intérieur d'une boîte. Le premier rectangle est aligné sur le côté gauche du conteneur, le troisième rectangle est aligné à droite, et le rectangle du milieu est équidistant entre le premier et le dernier.](justify-content-space-between.png)

Pour que ces mots-clés prennent effet, de l'espace est requis le long de la dimension dans laquelle vous souhaitez aligner les éléments. Sans espace, il n'y a rien à répartir.

### Exemples simples

Les exemples suivants montrent comment certaines propriétés d'alignement de boîte sont appliquées dans [la mise en page en grille](/fr/docs/Web/CSS/Guides/Grid_layout) et [les boîtes flexibles](/fr/docs/Web/CSS/Guides/Flexible_box_layout).

#### Exemple d'alignement en grille CSS

Dans cet exemple de mise en page en grille, il y a de l'espace supplémentaire dans le conteneur de grille après avoir disposé les pistes de largeur fixe sur l'axe en ligne (principal). Cet espace est réparti en utilisant {{CSSxRef("justify-content")}}. Sur l'axe de bloc (transversal), l'alignement des éléments à l'intérieur de leurs zones de grille est contrôlé avec {{CSSxRef("align-items")}}. Le premier élément remplace la valeur `align-items` définie sur le groupe en définissant {{CSSxRef("align-self")}} sur `center`.

```html live-sample___grid-align-items
<div class="box">
  <div>Un</div>
  <div>Deux</div>
  <div>Trois <br />a <br />du <br />texte <br />supplémentaire</div>
  <div>Quatre</div>
  <div>Cinq</div>
  <div>Six</div>
</div>
```

```css hidden live-sample___grid-align-items
body {
  font: 1.2em sans-serif;
}

.box {
  border: 2px dotted rgb(96 139 168);
}

.box > * {
  padding: 20px;
  border: 2px solid rgb(96 139 168);
  border-radius: 5px;
  background-color: rgb(96 139 168 / 0.2);
}
```

```css live-sample___grid-align-items
.box {
  display: grid;
  grid-template-columns: 120px 120px 120px;
  align-items: start;
  justify-content: space-between;
}

.box :first-child {
  align-self: center;
}
```

{{EmbedLiveSample("grid-align-items", "", "200px")}}

#### Exemple d'alignement de boîte flexible

Dans cet exemple, trois éléments flex sont alignés sur l'axe principal avec `justify-content` et sur l'axe transversal avec `align-items`. Le premier élément remplace la valeur `align-items` définie sur le groupe en définissant `align-self` sur `center`.

```html live-sample___flex-align-items
<div class="box">
  <div>Un</div>
  <div>Deux</div>
  <div>Trois <br />a <br />du <br />texte <br />supplémentaire</div>
</div>
```

```css hidden live-sample___flex-align-items
body {
  font: 1.2em sans-serif;
}

.box {
  border: 2px dotted rgb(96 139 168);
}

.box > * {
  padding: 20px;
  border: 2px solid rgb(96 139 168);
  border-radius: 5px;
  background-color: rgb(96 139 168 / 0.2);
}
```

```css live-sample___flex-align-items
.box {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
}

.box :first-child {
  align-self: center;
}
```

{{EmbedLiveSample("flex-align-items")}}

## Alignement en cas de débordement

Les mots-clés {{CSSxRef("overflow-position")}} `safe` et `unsafe` aident à définir le comportement lorsqu'un sujet d'alignement est plus grand que le conteneur d'alignement. Le mot-clé `safe` alignera sur `start` dans le cas où une valeur d'alignement définie provoquerait un débordement, l'objectif étant d'éviter «&nbsp;perte de données&nbsp;» où une partie de l'élément est en dehors des limites du conteneur et ne peut pas être consultée par défilement.

Si vous définissez `unsafe`, l'alignement sera respecté même si cela provoque une telle perte de données.

## Espacements entre les boîtes

La spécification d'alignement de boîte inclut également les propriétés `gap`, `row-gap` et `column-gap`. Ces propriétés permettent de définir un espacement cohérent entre les éléments d'une rangée ou d'une colonne, dans toute méthode de mise en page qui organise les éléments de cette manière.

La propriété `gap` est un raccourci pour `row-gap` et `column-gap`, ce qui permet de définir ces propriétés en une seule fois&nbsp;:

- {{CSSxRef("row-gap")}}
- {{CSSxRef("column-gap")}}
- {{CSSxRef("gap")}}

Dans l'exemple ci-dessous, une mise en page en grille utilise le raccourci `gap` pour définir un espacement de `10px` entre les pistes de ligne, et un espacement de `2em` entre les pistes de colonne.

```html live-sample___grid-gap
<div class="box">
  <div>Un</div>
  <div>Deux</div>
  <div>Trois</div>
  <div>Quatre</div>
  <div>Cinq</div>
  <div>Six</div>
</div>
```

```css hidden live-sample___grid-gap
body {
  font: 1.2em sans-serif;
}

.box {
  border: 2px dotted rgb(96 139 168);
}

.box > * {
  padding: 20px;
  border: 2px solid rgb(96 139 168);
  border-radius: 5px;
  background-color: rgb(96 139 168 / 0.2);
}
```

```css live-sample___grid-gap
.box {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 10px 2em;
}

.box :first-child {
  align-self: center;
}
```

{{EmbedLiveSample("grid-gap")}}

Les premières implémentations de la grille incluaient des propriétés `gap` préfixées par `grid-`. Tous les navigateurs prennent en charge les propriétés sans préfixe, bien qu'il soit possible de trouver dans du code les propriétés suivantes&nbsp;: {{CSSxRef("row-gap", "grid-row-gap")}}, {{CSSxRef("column-gap", "grid-column-gap")}} et {{CSSxRef("gap", "grid-gap")}}. Les versions préfixées sont des alias des versions sans préfixe.

Sachez que d'autres éléments peuvent augmenter l'espace visuel affiché, par exemple l'utilisation des mots-clés de distribution d'espace ou l'ajout de marges aux éléments.

## Alignement de boîte selon le type de mise en page

Comme les propriétés d'alignement de boîte CSS sont implémentées différemment selon les spécifications avec lesquelles elles interagissent, référez-vous aux guides suivants pour savoir comment utiliser les propriétés d'alignement avec chaque type de mise en page&nbsp;:

- [Alignement de boîte dans les boîtes flexibles](/fr/docs/Web/CSS/Guides/Box_alignment/In_flexbox)
- [Alignement de boîte dans la mise en page en grille](/fr/docs/Web/CSS/Guides/Box_alignment/In_grid_layout)
- [Alignement de boîte dans la mise en page multi-colonnes](/fr/docs/Web/CSS/Guides/Box_alignment/In_multi-column_layout)
- [Alignement de boîte pour les mises en page en bloc, positionnées absolument et en tableau](/fr/docs/Web/CSS/Guides/Box_alignment/In_block_abspos_tables)

## Voir aussi

- Le module [d'alignement de boîte CSS](/fr/docs/Web/CSS/Guides/Box_alignment)
- [L'alignement de boîte dans la mise en page en grille](/fr/docs/Web/CSS/Guides/Box_alignment/In_grid_layout)
- Le module [d'affichage CSS](/fr/docs/Web/CSS/Guides/Display)
- Le module [de mise en page flexible CSS](/fr/docs/Web/CSS/Guides/Flexible_box_layout)
- [Concepts de base de la mise en page flexible](/fr/docs/Web/CSS/Guides/Flexible_box_layout/Basic_concepts)
- [Aligner les éléments dans un conteneur flexible](/fr/docs/Web/CSS/Guides/Flexible_box_layout/Aligning_items)
- Le module [de mise en page en grille CSS](/fr/docs/Web/CSS/Guides/Grid_layout)
