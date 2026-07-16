---
title: Aligner des boîtes dans des boîtes flexibles
short-title: En disposition flexible
slug: Web/CSS/Guides/Box_alignment/In_flexbox
l10n:
  sourceCommit: ca5d9f9e63b460fc0c9e15ac57d9739e10e4ea0d
---

Le module [d'alignement de boîte](/fr/docs/Web/CSS/Guides/Box_alignment) décrit comment l'alignement fonctionne dans différentes méthodes de mise en page. Dans ce guide, nous explorons comment l'alignement des boîtes fonctionne dans le contexte de [boîtes flexibles](/fr/docs/Web/CSS/Guides/Flexible_box_layout/Basic_concepts) (<i lang="en">flexbox</i> en anglais). Comme ce guide vise à détailler les aspects spécifiques aux boîtes flexibles et à l'alignement des boîtes, il doit être lu en conjonction avec le guide [aperçu de l'alignement des boîtes](/fr/docs/Web/CSS/Guides/Box_alignment/Overview), qui détaille les fonctionnalités communes de l'alignement des boîtes dans différentes méthodes de mise en page.

## Exemple simple

Dans cet exemple de boîte flexible, trois éléments flexibles sont alignés sur l'axe principal à l'aide de {{CSSxRef("justify-content")}} et sur l'axe secondaire à l'aide de {{CSSxRef("align-items")}}. Le premier élément remplace les valeurs de `align-items` définies sur le groupe en définissant {{CSSxRef("align-self")}} sur `center`.

```css hidden live-sample___gap live-sample___flex-align-items live-sample___auto-margins
body {
  font-family: sans-serif;
}
.boite > * {
  padding: 20px;
  border: 2px solid rgb(96 139 168);
  border-radius: 5px;
  background-color: rgb(96 139 168 / 0.2);
}
```

```html live-sample___flex-align-items
<div class="boite">
  <div>Un</div>
  <div>Deux</div>
  <div>Trois <br />a <br />du <br />texte <br />supplémentaire</div>
</div>
```

```css live-sample___flex-align-items
.boite {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  border: 2px dotted rgb(96 139 168);
}

.boite :first-child {
  align-self: center;
}
```

{{EmbedLiveSample("flex-align-items")}}

## Liens entre les axes et `flex-direction`

Les boîtes flexibles respectent le mode d'écriture du document, donc si vous travaillez en français et que vous définissez {{CSSxRef("justify-content")}} sur `flex-end`, ça aligne les éléments à la fin du conteneur flexible. Si vous travaillez avec {{CSSxRef("flex-direction")}} défini sur `row`, cet alignement se fait dans la direction en ligne.

Cependant, dans les boîtes flexibles, vous pouvez changer l'axe principal en définissant `flex-direction` sur `column`. Dans ce cas, `justify-content` aligne les éléments dans la direction de bloc. Il est donc plus facile de penser en termes d'axe principal et d'axe secondaire lorsqu'on travaille avec les boîtes flexibles&nbsp;:

- L'axe principal = direction définie par `flex-direction` = alignement avec `justify-content`
- L'axe secondaire = perpendiculaire à l'axe principal = alignement avec {{CSSxRef("align-content")}}, {{CSSxRef("align-self")}}/{{CSSxRef("align-items")}}

### Alignement sur l'axe principal

- {{CSSxRef("justify-content")}}

### Alignement sur l'axe secondaire

- {{CSSxRef("align-self")}}
- {{CSSxRef("align-items")}}
- {{CSSxRef("align-content")}}

### Absence de `justify-self` pour les boîtes flexibles

Sur l'axe principal, les boîtes flexibles considèrent les éléments flexibles comme un groupe. La quantité d'espace nécessaire pour disposer les éléments est calculée, et l'espace restant est ensuite disponible pour la distribution. La propriété `justify-content` contrôle comment cet espace restant est utilisé. Avec `justify-content: flex-end`, l'espace supplémentaire est placé avant les éléments, avec `justify-content: space-around`, il est placé de chaque côté de l'élément dans cette dimension, etc.

Cela signifie qu'une propriété `justify-self` n'a pas de sens dans les boîtes flexibles, car nous traitons toujours le déplacement de l'ensemble du groupe d'éléments.

Sur l'axe secondaire, `align-self` a du sens, car il peut y avoir un espace supplémentaire dans le conteneur flexible dans cette dimension, dans lequel un seul élément peut être déplacé vers le début ou la fin.

## Alignement et marges automatiques

Il existe un cas d'utilisation spécifique dans les boîtes flexibles où l'on peut penser qu'une propriété `justify-self` est nécessaire, et c'est lorsque l'on souhaite séparer un ensemble d'éléments flexibles, peut-être pour créer un modèle de navigation fractionnée. Pour ce cas d'utilisation, nous pouvons utiliser une marge `auto`. Une marge définie sur `auto` absorbe tout l'espace disponible dans sa dimension. C'est ainsi que fonctionne le centrage d'un bloc avec des marges automatiques. En définissant la marge gauche et droite sur `auto`, les deux côtés de notre bloc essaient de prendre tout l'espace disponible et poussent ainsi la boîte au centre.

En définissant une marge ({{CSSxRef("margin")}}) à `auto` sur un élément d'un ensemble d'éléments flexibles tous alignés au début, nous pouvons créer une navigation fractionnée. Cela fonctionne bien avec les boîtes flexibles et les propriétés d'alignement. Dès qu'il n'y a plus d'espace disponible pour la marge automatique, l'élément se comporte de la même manière que tous les autres éléments flexibles et se réduit pour essayer de s'adapter à l'espace disponible.

```html live-sample___auto-margins
<div class="boîte">
  <div>Un</div>
  <div>Deux</div>
  <div>Trois</div>
  <div class="pousse">Quatre</div>
  <div>Cinq</div>
</div>
```

```css live-sample___auto-margins
.boîte {
  display: flex;
  border: 2px dotted rgb(96 139 168);
}
.pousse {
  margin-left: auto;
}
```

{{EmbedLiveSample("auto-margins")}}

## Les propriétés `gap`

- {{CSSxRef("row-gap")}}
- {{CSSxRef("column-gap")}}
- {{CSSxRef("gap")}}

### Créer des gouttières fixes entre chaque objet

Sur l'axe principal, la propriété `column-gap` permet de créer des gouttières de taille fixe entre les éléments adjacents.

Sur l'axe secondaire, la propriété `row-gap` crée un espacement entre les lignes flexibles adjacentes, donc {{CSSxRef("flex-wrap")}} doit également être défini sur `wrap` pour que cela ait un effet.

```html live-sample___gap
<div class="boite">
  <div>Un</div>
  <div>Deux</div>
  <div>Trois</div>
  <div>Quatre</div>
  <div>Cinq</div>
  <div>Six</div>
</div>
```

```css live-sample___gap
.boite {
  width: 450px;
  display: flex;
  flex-wrap: wrap;
  row-gap: 10px;
  column-gap: 2em;
  border: 2px dotted rgb(96 139 168);
}

.boite > * {
  flex: 1;
}
```

{{EmbedLiveSample("gap")}}

## Voir aussi

- Le module [d'alignement de boîtes CSS](/fr/docs/Web/CSS/Guides/Box_alignment)
- [Aperçu de l'alignement des boîtes](/fr/docs/Web/CSS/Guides/Box_alignment/Overview)
- [Alignement des boîtes dans une grille CSS](/fr/docs/Web/CSS/Guides/Box_alignment/In_grid_layout)
- [Alignement des boîtes dans une disposition multi-colonnes](/fr/docs/Web/CSS/Guides/Box_alignment/In_multi-column_layout)
- [Alignement des boîtes pour les dispositions bloc, positionnées absolument et tableaux](/fr/docs/Web/CSS/Guides/Box_alignment/In_block_abspos_tables)
- [Alignement des éléments dans un conteneur flexible](/fr/docs/Web/CSS/Guides/Flexible_box_layout/Aligning_items)
- L'entrée de glossaire {{Glossary("Cross axis", "Axe secondaire")}}
- L'entrée de glossaire {{Glossary("Main axis", "Axe principal")}}
