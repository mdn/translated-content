---
title: Les images CSS
short-title: Images
slug: Web/CSS/Guides/Images
l10n:
  sourceCommit: 33094d735e90b4dcae5733331b79c51fee997410
---

Le module des **images CSS** définit les types d'images pouvant être utilisés (le type {{CSSxRef("&lt;image&gt;")}}, qui comprend les URL, les dégradés et d'autres types d'images), la manière de les redimensionner, ainsi que la façon dont elles, tout comme les autres contenus remplacés, interagissent avec les différents modèles de disposition.

## Référence

### Propriétés

- {{CSSxRef("image-orientation")}}
- {{CSSxRef("image-rendering")}}
- {{CSSxRef("object-fit")}}
- {{CSSxRef("object-position")}}
- {{CSSxRef("object-view-box")}}

Le module d'image CSS définit également la propriété {{CSSxRef("image-resolution")}}. Actuellement, aucun navigateur ne prend en charge cette fonctionnalité.

### Fonctions

- {{CSSxRef("gradient/linear-gradient", "linear-gradient()")}}
- {{CSSxRef("gradient/radial-gradient", "radial-gradient()")}}
- {{CSSxRef("gradient/repeating-linear-gradient", "repeating-linear-gradient()")}}
- {{CSSxRef("gradient/repeating-radial-gradient", "repeating-radial-gradient()")}}
- {{CSSxRef("gradient/conic-gradient", "conic-gradient()")}}
- {{CSSxRef("gradient/repeating-conic-gradient", "repeating-conic-gradient()")}}
- {{CSSxRef("cross-fade()")}}
- {{CSSxRef("element()")}}
- {{CSSxRef("image/image-set", "image-set()")}}

Le module d'image CSS définit également la fonction {{CSSxRef("image/image", "image()")}}. Actuellement, aucun navigateur ne prend en charge cette fonctionnalité.

### Types de données

- {{CSSxRef("&lt;gradient&gt;")}}
- {{CSSxRef("&lt;image&gt;")}}

## Guides

- [Utiliser les dégradés CSS](/fr/docs/Web/CSS/Guides/Images/Using_gradients)
  - : Présente un type spécifique d'images CSS, les _dégradés_, et comment les créer et les utiliser.

- [Implémenter des images <i lang="en">sprites</i> en CSS](/fr/docs/Web/CSS/Guides/Images/Implementing_image_sprites)
  - : Présente la technique courante consistant à regrouper plusieurs images dans un seul document afin de réduire les requêtes de téléchargement et d'accélérer la disponibilité d'une page.

- [Mettre en forme des éléments remplacés](/fr/docs/Web/CSS/Guides/Images/Replaced_element_properties)
  - : Introduction des propriétés qui s'appliquent seulement aux _éléments remplacés_.

- [Comprendre les rapports d'aspect](/fr/docs/Web/CSS/Guides/Box_sizing/Aspect_ratios)
  - : Apprenez-en davantage sur la propriété `aspect-ratio`, discutez des rapports d'aspect pour les éléments remplacés et non remplacés, et examinez quelques cas d'utilisation courants des rapports d'aspect.

- [Utiliser la propriété CSS `object-view-box`](/fr/docs/Web/CSS/Guides/Images/Using_object-view-box)
  - : Apprendre la propriété CSS `object-view-box`, notamment comment zoomer, dézoomer et faire un panoramique sur les images.

## Concepts associés

- {{CSSxRef("url_value", "&lt;url&gt;")}}
- {{CSSxRef("url_function", "url()")}}
- [`<basic-shape-rect>`](/fr/docs/Web/CSS/Reference/Values/basic-shape#syntaxe_pour_les_rectangles_basic-shape-rect)

## Spécifications

{{Specifications}}

## Voir aussi

- Le module [des effets de filtre CSS](/fr/docs/Web/CSS/Guides/Filter_effects)
- Le module [de composition et de fusion CSS](/fr/docs/Web/CSS/Guides/Compositing_and_blending)
- Le module [des couleurs CSS](/fr/docs/Web/CSS/Guides/Colors)
- Le module [des valeurs et unités CSS](/fr/docs/Web/CSS/Guides/Values_and_units)
