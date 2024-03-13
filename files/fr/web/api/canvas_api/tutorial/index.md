---
title: Tutoriel canvas
slug: Web/API/Canvas_API/Tutorial
---

{{DefaultAPISidebar("Canvas API")}}

**[`<canvas>`](/fr/docs/Web/HTML/Element/canvas)** est un nouvel élément [HTML](/fr/docs/Web/HTML) qui peut être utilisé pour dessiner des éléments graphiques à l'aide de scripts (habituellement [JavaScript](/fr/docs/Glossaire/JavaScript)). Il permet par exemple de dessiner des graphiques, de réaliser des compositions de photographies ou des animations simples (voire [pas si simples](/fr/docs/Un_raycaster_basique_avec_canvas)). Les images à droite montrent quelques exemples d'implémentations utilisant `<canvas>` que nous verrons plus tard dans ce tutoriel.

Ce tutoriel explique comment utiliser l'élément `<canvas>` pour dessiner des graphiques 2D, en commençant par les bases. Les exemples fournis devraient vous donner des idées claires sur ce que vous pouvez faire avec la toile et fournir des extraits de code qui peuvent vous aider à créer votre propre contenu.

D'abord introduit dans WebKit par Apple pour le tableau de bord OS X, `<canvas>` a depuis été implémenté dans les navigateurs. Aujourd'hui, tous les principaux navigateurs le prennent en charge.

## Avant de commencer

L'utilisation de l'élément `<canvas>` n'a rien de très compliqué, mais nécessite tout de même une compréhension de base de [HTML](/fr/docs/Web/HTML) et [JavaScript](/fr/docs/Glossaire/JavaScript). L'élément `<canvas>` n'est pas reconnu par tous les vieux navigateurs, mais il est supporté par les versions les plus récentes des principaux. La taille par défaut de canvas est 300 px × 150 px (largeur × hauteur). Mais les tailles personnalisées peuvent être définies à l'aide des propriétés [HTML](/fr/docs/Web/HTML) `height` et `width`. Afin de dessiner des graphiques sur canvas , nous utilisons un objet de contexte JavaScript, qui crée des graphiques à la volée.

## Dans ce tutoriel

- [Utilisation de base](/fr/docs/Tutoriel_canvas/Utilisation_de_base)
- [Dessin de formes géométriques](/fr/docs/Tutoriel_canvas/Formes_géométriques)
- [Ajout de styles et de couleurs](/fr/docs/Tutoriel_canvas/Ajout_de_styles_et_de_couleurs)
- [Dessin de texte](/fr/docs/Dessin_de_texte_avec_canvas)
- [Utilisation d'images](/fr/docs/Tutoriel_canvas/Utilisation_d'images)
- [Transformations](/fr/docs/Tutoriel_canvas/Transformations)
- [Compositions et découpage](/fr/docs/Web/API/Canvas_API/Tutorial/Compositing)
- [Animations basiques](/fr/docs/Tutoriel_canvas/Animations_basiques)
- [Animations avancées](/fr/docs/Tutoriel_canvas/Advanced_animations)
- [Manipulation des pixels](/fr/docs/Tutoriel_canvas/Pixel_manipulation_with_canvas)
- [Régions touchées et accessibilité](/fr/docs/Web/API/Canvas_API/Tutorial/Hit_regions_and_accessibility)
- [Optimisation](/fr/docs/Tutoriel_canvas/Optimizing_canvas)
- [Final](/fr/docs/Web/API/Canvas_API/Tutorial/Finale)

## Voir aussi

- [Page du sujet canvas](/fr/docs/Web/HTML/Canvas)
- [HTML5CanvasTutorials](http://www.html5canvastutorials.com/) (en)

{{ Next("Tutoriel_canvas/Utilisation_de_base") }}
