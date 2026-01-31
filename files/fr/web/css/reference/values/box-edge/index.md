---
title: <box-edge>
slug: Web/CSS/Reference/Values/box-edge
original_slug: Web/CSS/box-edge
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Le [type de donnée](/fr/docs/Web/CSS/Reference/Values/Data_types) [CSS](/fr/docs/Web/CSS) **`<box-edge>`** représentent un mot-clé de [bord de boîte](/fr/docs/Web/CSS/Guides/Box_model/Introduction), comme [`content-box`](#content-box) et [`border-box`](#border-box). Les mots-clés de bord de boîte servent à définir différents aspects du modèle de boîte d'un element et la façon dont les elements sont positionnés et affichés à l'écran.

Les mots-clés de bord de boîte sont les composants, entre autres, des types de données `<visual-box>`, `<layout-box>`, `<paint-box>`, `<coord-box>` et `<geometry-box>`. Ces types sont utilisés dans des propriétés telles que {{CSSxRef("transform-box")}} et {{CSSxRef("background-clip")}}.

## Syntaxe

```plain
/* les trois valeurs <box> */
<visual-box> = content-box | padding-box | border-box

/* les valeurs <shape-box> */
<layout-box> = <visual-box> | margin-box

<paint-box> = <visual-box> | fill-box | stroke-box
<coord-box> = <paint-box> | fill-box | stroke-box | view-box
<geometry-box> = <shape-box> | fill-box | stroke-box | view-box
```

### Valeurs

Une `<box-edge>` peut être de type `<visual-box>`, `<layout-box>`, `<paint-box>`, `<coord-box>` ou `<geometry-box>`.

- `<visual-box>`
  - : Désigne la boîte rectangulaire générée pour un élément telle qu'elle est vue par un·e utilisateur·ice sur une page web. Elle inclut le contenu de l'élément, le remplissage (<i lang="en">padding</i>) et la bordure. Aussi appelée `<box>`, cette valeur exclut la marge. Ce type de valeur est utilisé pour les propriétés {{CSSxRef("background-clip")}} et {{CSSxRef("overflow-clip-margin")}}.

- `<layout-box>`
  - : Désigne l'espace occupé par un élément, incluant son contenu, son remplissage, sa bordure et sa marge. Ce type de valeur est utilisé pour la mise en page et le positionnement. Aussi appelée `<shape-box>`, cette valeur est utilisée pour la propriété {{CSSxRef("shape-outside")}}.

- `<paint-box>`
  - : Désigne la zone à l'intérieur de la boîte de mise en page utilisée pour afficher visuellement le contenu. Cela inclut la zone où l'arrière-plan et les bordures de l'élément sont peints. Comme la zone peignable d'un élément n'inclut pas ses marges, cette valeur exclut `margin-box`.

- `<coord-box>`
  - : Désigne la boîte de coordonnées utilisée pour positionner et dimensionner un élément dans son conteneur parent. Elle sert à contrôler la façon dont le contenu se déplace autour des bords de la boîte. Elle exclut la marge. Ce type de valeur est utilisé pour la propriété {{CSSxRef("offset-path")}}.

- `<geometry-box>`
  - : Définit la boîte de référence pour une [forme de base](/fr/docs/Web/CSS/Reference/Values/basic-shape), ou, si elle est définie seule, fait que les bords de la boîte indiquée, y compris les coins arrondis (comme avec {{CSSxRef("border-radius")}}), servent de chemin de découpe (<i lang="en">clipping path</i> en anglais). Ce type de valeur est utilisé pour les propriétés {{CSSxRef("clip-path")}}, {{CSSxRef("mask-clip")}}, {{CSSxRef("mask-origin")}} et l'attribut SVG {{SVGAttr("clip-path")}}.

### Mots-clés

Les mots-clés `<box-edge>` sont définis comme suit&nbsp;:

- `content-box`
  - : Désigne le bord extérieur de la zone de contenu de la boîte. La boîte de contenu est la boîte la plus interne. La zone de contenu contient le contenu réel, comme du texte, des images ou d'autres éléments HTML. En SVG, cette valeur est traitée comme `fill-box`.

- `padding-box`
  - : Désigne le bord extérieur du remplissage de la boîte. S'il n'y a pas de remplissage sur un côté, la valeur est identique à `content-box`. En SVG, `padding-box` est traité comme `fill-box`. La zone de remplissage entoure la zone de contenu, à partir du bord extérieur de la boîte de contenu.

- `border-box`
  - : Désigne le bord extérieur de la bordure de la boîte. S'il n'y a pas de bordure sur un côté, la valeur est identique à `padding-box`. En SVG, `border-box` est traité comme `stroke-box`. La zone de bordure entoure la zone de remplissage, à partir du bord extérieur de la boîte de remplissage.

- `margin-box`
  - : Désigne le bord extérieur de la marge de la boîte. S'il n'y a pas de marge sur un côté, la valeur est identique à `border-box`. En SVG, `margin-box` est traité comme `stroke-box`.

- `fill-box`
  - : Désigne la boîte englobante de l'objet en SVG. En CSS, `fill-box` est traité comme `content-box`. Elle sert à envelopper le contenu autour des bords définis par les valeurs de `coord-box`.

- `stroke-box`
  - : Désigne la boîte englobante du contour en SVG. En CSS, `stroke-box` est traité comme `border-box`. Elle sert à définir la forme de l'élément lorsque des contours sont appliqués.

- `view-box`
  - : Désigne la zone d'affichage (<i lang="en">viewport</i>) de boîte d'origine de l'élément SVG le plus proche. La boîte d'origine est un rectangle avec la largeur et la hauteur du système de coordonnées utilisateur initial SVG établi par l'attribut {{SVGAttr("viewBox")}} pour cet élément. La boîte d'origine est positionnée de sorte que son coin supérieur gauche soit ancré à l'origine du [système de coordonnées](/fr/docs/Web/API/CSSOM_view_API/Coordinate_systems). En CSS, `view-box` est traité comme `border-box`.
    > [!NOTE]
    > Lorsque la zone d'affichage (<i lang="en">viewport</i>) SVG n'est pas ancrée à l'origine, la boîte d'origine ne correspond pas à la zone d'affichage SVG.

## Spécifications

{{Specifications}}

## Voir aussi

- Le module de [modèle de boîte CSS](/fr/docs/Web/CSS/Guides/Box_model)
