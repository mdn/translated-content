---
title: CSS Shapes
slug: Web/CSS/CSS_shapes
---

{{CSSRef}}

**_CSS Shapes_** est un module de spécification CSS qui décrit les formes géométriques. [Selon le niveau 1 de cette spécification](https://drafts.csswg.org/css-shapes/), les formes CSS peuvent être appliquées aux éléments flottants. Cette spécification définit différentes façon permettant de définir la forme d'un élément flottant afin que les lignes « coulent » autour de la forme plutôt qu'autour du rectangle formé par la boîte de l'élément.

## Exemple simple

Dans l'exemple qui suit, on a une image qui flotte à gauche et la propriété `shape-outside` qui lui est appliquée vaut `circle(50%)`. Ceci crée une forme circulaire autour de laquelle le contenu peut s'inscrire. Les boîtes des lignes pour le texte qui entourent l'image sont donc modifiées.

{{EmbedGHLiveSample("css-examples/shapes/overview/circle.html", '100%', 720)}}

## Référence

### Propriétés

- {{cssxref("shape-image-threshold")}}
- {{cssxref("shape-margin")}}
- {{cssxref("shape-outside")}}

### Types de donnée

- {{cssxref("&lt;basic-shape&gt;")}}

## Guides

- [Un aperçu des formes CSS (_CSS Shapes_)](/fr/docs/Web/CSS/CSS_Shapes/Overview_of_CSS_Shapes)
- [Les formes appliquées aux différentes boîtes](/fr/docs/Web/CSS/CSS_Shapes/Shapes_From_Box_Values)
- [Des formes simples](/fr/docs/Web/CSS/CSS_Shapes/Basic_Shapes)
- [Des formes à partir d'images](/fr/docs/Web/CSS/CSS_Shapes/Shapes_From_Images)
- [Éditer les contours d'une forme en CSS dans Firefox](/fr/docs/Tools/Page_Inspector/How_to/Edit_CSS_shapes)

## Ressources externes

- [Une liste de ressources sur les formes CSS (en anglais)](https://codepen.io/KristopherVanSant/post/css-shapes-resources)
- [_CSS Shapes 101_ (en anglais)](https://alistapart.com/article/css-shapes-101)
- [Creating non-rectangular layouts with CSS Shapes (en anglais)](https://www.sarasoueidan.com/blog/css-shapes/)
- [_How To Use CSS Shapes In Your Web Design_ (en anglais)](https://webdesign.tutsplus.com/tutorials/how-to-use-css-shapes-in-your-web-design--cms-27498)
- [_How To Get Started With CSS Shapes_ (en anglais)](https://www.webdesignerdepot.com/2015/03/how-to-get-started-with-css-shapes/)
- [_What I Learned In One Weekend With CSS Shapes_ (en anglais)](https://medium.com/@MHarreither/what-i-learned-in-one-weekend-with-css-shapes-66ae9be69cc5)
- [_CSS vs. SVG: Shapes and Arbitrarily-Shaped UI Components_ (en anglais)](https://theblog.adobe.com/css-vs-svg-shapes-and-arbitrarily-shaped-ui-components/)

## Spécifications

{{Specifications}}
