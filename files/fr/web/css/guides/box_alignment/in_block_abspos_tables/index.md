---
title: Aligner des boîtes en disposition de bloc, absolue et en tableau
short-title: En disposition de bloc
slug: Web/CSS/Guides/Box_alignment/In_block_abspos_tables
l10n:
  sourceCommit: ca5d9f9e63b460fc0c9e15ac57d9739e10e4ea0d
---

Le module [d'alignement des boîtes CSS](/fr/docs/Web/CSS/Guides/Box_alignment) détaille le fonctionnement de l'alignement selon les différentes méthodes de disposition. Dans ce guide, nous explorons comment l'alignement des boîtes fonctionne dans le contexte de la disposition en bloc, y compris pour les éléments flottants, positionnés et les tableaux. Comme ce guide vise à détailler les aspects spécifiques à la disposition en bloc et à l'alignement des boîtes, il doit être lu en conjonction avec le guide [d'alignement des boîtes](/fr/docs/Web/CSS/Guides/Box_alignment/Overview), qui détaille les fonctionnalités communes de l'alignement des boîtes à travers les méthodes de disposition.

## `align-content` et `justify-content`

La propriété {{CSSxRef("justify-content")}} ne s'applique pas aux conteneurs en bloc ou aux cellules de tableau.

La propriété {{CSSxRef("align-content")}} s'applique sur l'axe de bloc afin d'aligner le contenu de la boîte dans le conteneur. Si une méthode de distribution telle que `space-between`, `space-around` ou `space-evenly` est utilisée, c'est la méthode de repli qui est utilisée, car tout le contenu est considéré comme un seul {{Glossary("alignment subject", "sujet d'alignement")}}.

## `justify-self`

La propriété {{CSSxRef("justify-self")}} est utilisée afin d'aligner un objet au sein de son bloc englobant selon l'axe en ligne.

Cette propriété ne s'applique pas aux éléments flottants ou aux cellules de tableau.

## `align-self`

La propriété {{CSSxRef("align-self")}} ne s'applique pas aux boîtes de bloc (y compris pour les éléments flottants), car il y a plus d'un objet sur l'axe de bloc. Elle ne s'applique pas non plus aux cellules des tableaux.

### Éléments positionnés de façon absolue

Le conteneur d'alignement correspond au bloc positionné en prenant en compte les valeurs de décalage `top`, `left`, `bottom` et `right`. Le mot-clé `normal` est considéré équivalent à `stretch`, sauf si l'élément positionné est un élément remplacé, auquel cas il est équivalent à `start`.

## Utilisation actuelle de l'alignement pour ces dispositions

À l'heure actuelle, les navigateurs n'implémentent pas l'alignement des boîtes pour la disposition en bloc. Il faut donc, pour le moment, utiliser les méthodes existantes ou placer un élément dans un conteneur flexible afin de tirer parti des fonctionnalités d'alignement des boîtes flexibles (<i lang="en">flexbox</i> en anglais).

L'alignement des blocs horizontalement avant l'apparition des boîtes flexibles était généralement réalisé en définissant des marges automatiques sur le bloc. Une {{CSSxRef("margin")}} de `auto` absorbe tout l'espace disponible dans cette dimension, donc en définissant une marge gauche et une marge droite automatiques, vous pouvez centrer un bloc&nbsp;:

```css
.conteneur {
  width: 20em;
  margin-left: auto;
  margin-right: auto;
}
```

Dans une disposition en tableau, il faut accéder à la propriété {{CSSxRef("vertical-align")}} afin d'aligner le contenu d'une cellule dans celle-ci.

Pour de nombreux scénarios, transformer le conteneur de bloc en élément flexible fournit les options d'alignement souhaitées. Dans l'exemple qui suit, on dispose d'un conteneur avec un seul élément et ce conteneur a été transformé en élément flexible afin d'utiliser les propriétés d'alignement.

```html live-sample___intro
<div class="boite">
  <div></div>
</div>
```

```css live-sample___intro
.boite {
  height: 300px;
  border: 2px dotted rgb(96 139 168);
}

.boite > * {
  border: 2px solid rgb(96 139 168);
  border-radius: 5px;
  background-color: rgb(96 139 168 / 0.2);
}
.boite {
  display: flex;
  align-items: center;
  justify-content: center;
}

.boite div {
  width: 100px;
  height: 100px;
}
```

{{EmbedLiveSample("intro", "", 320)}}

## Voir aussi

- Le module [d'alignement de boîte CSS](/fr/docs/Web/CSS/Guides/Box_alignment)
- [L'aperçu de l'alignement de boîte](/fr/docs/Web/CSS/Guides/Box_alignment/Overview)
- [L'alignement de boîte dans les boîtes flexibles](/fr/docs/Web/CSS/Guides/Box_alignment/In_flexbox)
- [L'alignement de boîte dans la disposition en grille CSS](/fr/docs/Web/CSS/Guides/Box_alignment/In_grid_layout)
- [L'alignement de boîte dans la disposition en colonnes multiples](/fr/docs/Web/CSS/Guides/Box_alignment/In_multi-column_layout)
