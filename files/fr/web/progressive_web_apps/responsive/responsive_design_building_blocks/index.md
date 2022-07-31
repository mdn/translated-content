---
title: Adaptative
slug: Web/Progressive_web_apps/Responsive/responsive_design_building_blocks
tags:
  - Applications
  - Design adaptatif
  - Media Queries
  - flexbox
  - viewport
translation_of: Web/Progressive_web_apps/Responsive/responsive_design_building_blocks
translation_of_original: Web/Progressive_web_apps/Responsive
original_slug: Web/Progressive_web_apps/Adaptative
---
Les applications web adaptatives utilisent des technologies comme les media queries et viewport pour être sûre que leur interface convient avec tout les facteurs de forme: bureau, téléphone, tablette, ou peut importe ce qui viendra après.

## Guides

- [Les fondations du design adaptatif](/fr/Apps/app_layout/responsive_design_building_blocks)
  - : Apprendre les bases du design adaptatif, un sujet essentiel pour l'affichage des applications web modernes.
- [Mobile avant tout (_Mobile first_)](/fr/docs/Web/Apps/Modern/Responsive/Mobile_first)
  - : Souvent lors de la création de l'affichage d'une application adaptative, il est judicieux de créer en premier le rendu sur téléphone mobile, et d'utiliser ce rendu comme base pour concevoir les écrans plus larges.

## Technologies

| Technologie                                                                                            | Description                                                                                                                                                                       | Résumé du support                                                                                                                                             | Dernière spécification                                                                                 |
| ------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------ |
| [Media queries](/fr/docs/Web/CSS/Media_Queries)                                                        | Permet de définir des conditions permettant aux styles d'être appliqués aux contenus en fonction de l'affichage disponible (_viewport_), de la résolution, de l'orientation, etc. | Répandu sur les navigateurs modernes ([plus de détails](/fr/docs/Web/CSS/Media_Queries#Browser_compatibility))                                                | [Media Queries Level 4](https://drafts.csswg.org/mediaqueries-4/)                                      |
| [@viewport](/fr/docs/Web/CSS/@viewport)/[viewport meta tag](/fr/docs/Mozilla/Mobile/Viewport_meta_tag) | Contrôler la configuration du _viewport_, principalement sur les appareils mobiles.                                                                                               | @viewport: Expérimental ([plus de détails](/fr/docs/Web/CSS/@viewport#Browser_compatibility)) _Viewport meta tag_: Répandu sur les appareils mobiles modernes | [CSS Device Adaptation Module Level 1](https://drafts.csswg.org/css-device-adapt/#the-atviewport-rule) |
| [Flexbox](/fr/docs/Web/CSS/CSS_Flexible_Box_Layout)                                                    | Une fonctionnalité CSS très utile pour créer une mise en page flexible et adaptative.                                                                                             | Répandu sur les navigateurs modernes ([plus de détail](/fr/docs/Web/CSS/CSS_Flexible_Box_Layout#Browser_compatibility))                                       | [CSS Flexible Box Layout Module Level 1](https://drafts.csswg.org/css-flexbox-1/)                      |

## Outils

- [Modernizr](https://modernizr.com/)
  - : Une bibliothèque d'outils de détection des fonctionnalités pour appliquer différents CSS ou JS en fonctions de comment les différentes fonctionnalités CSS/JS sont supportées.
- [css3-mediaqueries-js](https://code.google.com/archive/p/css3-mediaqueries-js/)
  - : Un _polyfill_ en JavaScript pour assurer le support de _media query_ aux anciennes versions de IE (5+.)

## Voir aussi

- [Graphiques dans les sites adaptatifs](/fr/Apps/Design/Design_graphique_pour_les_sites_responsiveGraphics_for_responsive_sites)
  - : Points à garder à l'esprit lors de la conception de graphiques pour des sites ou des applications adaptatives.
- [Modèle de navigation adaptative](/fr/Apps/Design/Patrons_navigation_adaptative)
  - : Comment faire une interface aussi ressemblante et fonctionnelle sur téléphone mobile que sur bureau? Apprenez comment concevoir des interfaces qui changent pour s'adapter à l'écran de l'utilisateur.
