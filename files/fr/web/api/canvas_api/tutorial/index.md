---
title: Tutoriel canvas
slug: Web/API/Canvas_API/Tutorial
---

{{DefaultAPISidebar("Canvas API")}}

**[`<canvas>`](/fr/docs/Web/HTML/Reference/Elements/canvas)** est un nouvel élément [HTML](/fr/docs/Web/HTML) qui peut être utilisé pour dessiner des éléments graphiques à l'aide de scripts (habituellement [JavaScript](/fr/docs/Glossary/JavaScript)). Il permet par exemple de dessiner des graphiques, de réaliser des compositions de photographies ou des animations simples (voire [pas si simples](/fr/docs/Un_raycaster_basique_avec_canvas)). Les images à droite montrent quelques exemples d'implémentations utilisant `<canvas>` que nous verrons plus tard dans ce tutoriel.

Ce tutoriel explique comment utiliser l'élément `<canvas>` pour dessiner des graphiques 2D, en commençant par les bases. Les exemples fournis devraient vous donner des idées claires sur ce que vous pouvez faire avec la toile et fournir des extraits de code qui peuvent vous aider à créer votre propre contenu.

D'abord introduit dans WebKit par Apple pour le tableau de bord OS X, `<canvas>` a depuis été implémenté dans les navigateurs. Aujourd'hui, tous les principaux navigateurs le prennent en charge.

## Avant de commencer

L'utilisation de l'élément `<canvas>` n'a rien de très compliqué, mais nécessite tout de même une compréhension de base de [HTML](/fr/docs/Web/HTML) et [JavaScript](/fr/docs/Glossary/JavaScript). L'élément `<canvas>` n'est pas reconnu par tous les vieux navigateurs, mais il est supporté par les versions les plus récentes des principaux. La taille par défaut de canvas est 300 px × 150 px (largeur × hauteur). Mais les tailles personnalisées peuvent être définies à l'aide des propriétés [HTML](/fr/docs/Web/HTML) `height` et `width`. Afin de dessiner des graphiques sur canvas , nous utilisons un objet de contexte JavaScript, qui crée des graphiques à la volée.

## Dans ce tutoriel

- [Utilisation de base](/fr/docs/Web/API/Canvas_API/Tutorial/Basic_usage)
- [Dessin de formes géométriques](/fr/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes)
- [Ajout de styles et de couleurs](/fr/docs/Web/API/Canvas_API/Tutorial/Applying_styles_and_colors)
- [Dessin de texte](/fr/docs/Web/API/Canvas_API/Tutorial/Drawing_text)
- [Utilisation d'images](/fr/docs/Web/API/Canvas_API/Tutorial/Using_images)
- [Transformations](/fr/docs/Web/API/Canvas_API/Tutorial/Transformations)
- [Compositions et découpage](/fr/docs/Web/API/Canvas_API/Tutorial/Compositing)
- [Animations basiques](/fr/docs/Web/API/Canvas_API/Tutorial/Basic_animations)
- [Animations avancées](/fr/docs/Web/API/Canvas_API/Tutorial/Advanced_animations)
- [Manipulation des pixels](/fr/docs/Web/API/Canvas_API/Tutorial/Pixel_manipulation_with_canvas)
- [Régions touchées et accessibilité](/fr/docs/Web/API/Canvas_API/Tutorial/Hit_regions_and_accessibility)
- [Optimisation](/fr/docs/Web/API/Canvas_API/Tutorial/Optimizing_canvas)
- [Final](/fr/docs/Web/API/Canvas_API/Tutorial/Finale)

## Voir aussi

- [Page du sujet canvas](/fr/docs/Web/API/Canvas_API)
- [HTML5CanvasTutorials](https://www.html5canvastutorials.com/) (en)

{{ Next("Tutoriel_canvas/Utilisation_de_base") }}
