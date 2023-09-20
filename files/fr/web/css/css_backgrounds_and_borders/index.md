---
title: Arrière-plans et bordures CSS
slug: Web/CSS/CSS_backgrounds_and_borders
l10n:
  sourceCommit: 856b52f634b889084869d2ee0b8bb62c084be04d
---

{{CSSRef}}

Le module **Arrière-plans et bordures CSS** fournit des propriétés permettant d'ajouter des bordures, des coins arrondis et des ombres aux éléments.

Vous pouvez ajouter différents types de styles de bordures, y compris des bordures composées d'images de tous types, des [images matricielles](https://fr.wikipedia.org/wiki/Image_matricielle) aux dégradés CSS. Les bordures peuvent être carrées ou arrondies, et un rayon différent peut être défini pour chaque coin. Les éléments peuvent être arrondis, qu'ils aient ou non une bordure visible.

Les ombres des boîtes comprennent les ombres intérieures et extérieures, les ombres simples ou multiples, et les ombres solides ou transparentes. Une ombre extérieure projette une ombre comme si la bordure de l'élément était opaque. Une ombre de boîte intérieure projette une ombre comme si tout ce qui se trouve à l'extérieur du bord de remplissage était opaque. L'ombre peut être solide ou inclure une distance d'étalement avec une transition de la couleur de l'ombre vers la transparence.

Les propriétés de ce module vous permettent également de définir si les cellules à l'intérieur d'un [`<table>`](/fr/docs/Web/HTML/Element/table) doivent avoir des bordures communes ou séparées.

### Arrière-plans, bordures et ombres de boîtes en action

Cet exemple de bordures, d'arrière-plans et d'ombres en boîte se compose d'images d'arrière-plan centrées composées de dégradés linéaires et radiaux. Une série d'ombres en boîte fait ressortir la bordure. L'élément de gauche a une image de bordure définie. L'élément de droite a une bordure arrondie en pointillés.

{{EmbedGHLiveSample("css-examples/modules/backgrounds.html", '100%', 430)}}

Les images d'arrière-plan sont définies avec la propriété CSS [`background-image`](/fr/docs/Web/CSS/background-image). Les images sont centrées avec la propriété [`background-position`](/fr/docs/Web/CSS/background-position). Différentes valeurs de la propriété [`background-clip`](/fr/docs/Web/CSS/background-clip) pour les images d'arrière-plan multiples sont utilisées pour faire en sorte que les images d'arrière-plan restent à l'intérieur de la boîte de contenu. La couleur d'arrière-plan est découpée dans le cadre de remplissage, ce qui empêche l'arrière-plan d'apparaître à travers les sections transparentes pour les propriétés [`border-image`](/fr/docs/Web/CSS/border-image) et [`dotted`](/fr/docs/Web/CSS/border-style) [`border`](/fr/docs/Web/CSS/border). Les coins arrondis de l'élément de droite sont créés à l'aide de la propriété [`border-radius`](/fr/docs/Web/CSS/border-radius). Une seule déclaration [`box-shadow`](/fr/docs/Web/CSS/box-shadow) est utilisée pour définir toutes les ombres, tant à l'intérieur qu'à l'extérieur.

Pour voir le code de cet exemple, [regardez la source sur GitHub](https://github.com/mdn/css-examples/blob/main/modules/backgrounds.html).

## Référence

### Propriétés CSS

- [`background-attachment`](/fr/docs/Web/CSS/background-attachment)
- [`background-clip`](/fr/docs/Web/CSS/background-clip)
- [`background-color`](/fr/docs/Web/CSS/background-color)
- [`background-image`](/fr/docs/Web/CSS/background-image)
- [`background-origin`](/fr/docs/Web/CSS/background-origin)
- [`background-position`](/fr/docs/Web/CSS/background-position)
- [`background-repeat`](/fr/docs/Web/CSS/background-repeat)
- [`background-size`](/fr/docs/Web/CSS/background-size)
- [`background`](/fr/docs/Web/CSS/background) abrégé
- [`background-position-x`](/fr/docs/Web/CSS/background-position-x) {{experimental_inline}}
- [`background-position-y`](/fr/docs/Web/CSS/background-position-y) {{experimental_inline}}
- [`background-position-inline`](/fr/docs/Web/CSS/background-position-inline) {{experimental_inline}}
- [`background-position-block`](/fr/docs/Web/CSS/background-position-block) {{experimental_inline}}

- [`border-bottom-color`](/fr/docs/Web/CSS/border-bottom-color)
- [`border-bottom-style`](/fr/docs/Web/CSS/border-bottom-style)
- [`border-bottom-width`](/fr/docs/Web/CSS/border-bottom-width)
- [`border-bottom`](/fr/docs/Web/CSS/border-bottom) abrégé
- [`border-left-color`](/fr/docs/Web/CSS/border-left-color)
- [`border-left-style`](/fr/docs/Web/CSS/border-left-style)
- [`border-left-width`](/fr/docs/Web/CSS/border-left-width)
- [`border-left`](/fr/docs/Web/CSS/border-left) abrégé
- [`border-right-color`](/fr/docs/Web/CSS/border-right-color)
- [`border-right-style`](/fr/docs/Web/CSS/border-right-style)
- [`border-right-width`](/fr/docs/Web/CSS/border-right-width)
- [`border-right`](/fr/docs/Web/CSS/border-right) abrégé
- [`border-top-color`](/fr/docs/Web/CSS/border-top-color)
- [`border-top-style`](/fr/docs/Web/CSS/border-top-style)
- [`border-top-width`](/fr/docs/Web/CSS/border-top-width)
- [`border-top`](/fr/docs/Web/CSS/border-top) abrégé
- [`border-color`](/fr/docs/Web/CSS/border-color) abrégé
- [`border-style`](/fr/docs/Web/CSS/border-style) abrégé
- [`border-width`](/fr/docs/Web/CSS/border-width) abrégé
- [`border`](/fr/docs/Web/CSS/border) abrégé

- [`border-collapse`](/fr/docs/Web/CSS/border-collapse)

- [`border-bottom-left-radius`](/fr/docs/Web/CSS/border-bottom-left-radius)
- [`border-bottom-right-radius`](/fr/docs/Web/CSS/border-bottom-right-radius)
- [`border-top-left-radius`](/fr/docs/Web/CSS/border-top-left-radius)
- [`border-top-right-radius`](/fr/docs/Web/CSS/border-top-right-radius)
- [`border-radius`](/fr/docs/Web/CSS/border-radius) abrégé

- [`border-image-outset`](/fr/docs/Web/CSS/border-image-outset)
- [`border-image-repeat`](/fr/docs/Web/CSS/border-image-repeat)
- [`border-image-slice`](/fr/docs/Web/CSS/border-image-slice)
- [`border-image-source`](/fr/docs/Web/CSS/border-image-source)
- [`border-image-width`](/fr/docs/Web/CSS/border-image-width)
- [`border-image`](/fr/docs/Web/CSS/border-image) abrégé

- [`box-shadow`](/fr/docs/Web/CSS/box-shadow)

### Types de données

- [`line-type`](/fr/docs/Web/CSS/line-type") type énuméré

## Guides

- [Apprendre CSS: Arrière-plans et bordures](/fr/docs/Learn/CSS/Building_blocks/Backgrounds_and_borders)
  - : Dans cet article, on voit comment implémenter des images décoratives à l'aide d'images d'arrière-plan CSS.
- [Utiliser plusieurs arrière-plans](/fr/docs/Web/CSS/CSS_backgrounds_and_borders/Using_multiple_backgrounds)
  - : Dans cet article, on voit comment paramétrer un ou plusieurs arrière-plans pour un élément.
- [Redimensionner les images d'arrière-plan avec background-size](/fr/docs/Web/CSS/CSS_backgrounds_and_borders/Resizing_background_images)
  - : Dans cet article, on voit comment modifier la taille et paramétrer la répétition d'une image d'arrière-plan.
- [Apprendre CSS: Le modèle de boîte](/fr/docs/Learn/CSS/Building_blocks/The_box_model)
  - : Dans cet article, on voit comment les bordures, ainsi que d'autres propriétés du modèle de boîte, affectent le modèle de boîte CSS.
- [Utilisation de dégradés CSS](/fr/docs/Web/CSS/CSS_images/Using_CSS_gradients)
  - : Dans cet article, on voit comment créer des images d'arrière-plan dégradées CSS.

## Notions associées

- [`border-block-end-color`](/fr/docs/Web/CSS/border-block-end-color) propriété
- [`border-block-start-color`](/fr/docs/Web/CSS/border-block-start-color) propriété
- [`border-inline-end-color`](/fr/docs/Web/CSS/border-inline-end-color) propriété
- [`border-inline-start-color`](/fr/docs/Web/CSS/border-inline-start-color) propriété
- [`border-block-end-style`](/fr/docs/Web/CSS/border-block-end-style) propriété
- [`border-block-start-style`](/fr/docs/Web/CSS/border-block-start-style) propriété
- [`border-inline-end-style`](/fr/docs/Web/CSS/border-inline-end-style) propriété
- [`border-inline-start-style`](/fr/docs/Web/CSS/border-inline-start-style) propriété
- [`border-block-end-width`](/fr/docs/Web/CSS/border-block-end-width) propriété
- [`border-block-start-width`](/fr/docs/Web/CSS/border-block-start-width) propriété
- [`border-inline-end-width`](/fr/docs/Web/CSS/border-inline-end-width) propriété
- [`border-inline-start-width`](/fr/docs/Web/CSS/border-inline-start-width) propriété

- [`border-start-start-radius`](/fr/docs/Web/CSS/border-start-start-radius) propriété
- [`border-start-end-radius`](/fr/docs/Web/CSS/border-start-end-radius) propriété
- [`border-end-start-radius`](/fr/docs/Web/CSS/border-end-start-radius) propriété
- {{cssxref("border-end-end-radius ")}} propriété

- [`box-sizing`](/fr/docs/Web/CSS/box-sizing) propriété
- [`box-decoration-break`](/fr/docs/Web/CSS/box-decoration-break) propriété
- [`text-shadow`](/fr/docs/Web/CSS/text-shadow) propriété

- [`url()`](/fr/docs/Web/CSS/url) fonction CSS
- [`<color>`](/fr/docs/Web/CSS/color) type de donnée
- [`<image>`](/fr/docs/Web/CSS/image) type de donnée
- [`<position>`](/fr/docs/Web/CSS/position) type de donnée

- [`currentcolor`](/fr/docs/Web/CSS/color_value#currentcolor_keyword) mot clé

## Spécifications

{{Specifications}}

## Voir aussi

- Des outils interactifs qui vous permettent de créer visuellement des bordures, des coins arrondis et des ombres :
  - [Générateur pour `border-image`](/fr/docs/Web/CSS/Arrière-plans_et_bordures_CSS/Border-image_generator)
  - [Générateur pour `border-radius`](/fr/docs/Web/CSS/Arrière-plans_et_bordures_CSS/Border-radius_generator)
  - [Générateur pour `box-shadow`](/fr/docs/Web/CSS/Modèle_de_boîte_CSS/Box-shadow_generator)
- [Appliquer des couleurs sur des éléments HTML grâce à CSS](/fr/docs/Web/CSS/CSS_colors/Applying_color), incluant les bordures.
- Le filtre de fonction [`drop-shadow()`](/fr/docs/Web/CSS/filter-function/drop-shadow) qui applique un effet d'ombre portée à une image en entrée. Cette fonction est utilisée par les propriétés {{cssxref("filter")}} et {{cssxref("backdrop-filter")}}.
