---
title: SVG
slug: Web/SVG
tags:
  - Graphiques 2D
  - Images
  - Images 2D
  - Images Extensibles
  - Images Vectorielles
  - Reference
  - SVG
  - Web
  - l10n:priority
  - Ícones
translation_of: Web/SVG
---
{{SVGRef}}

**SVG (Scalable Vector Graphics)** est un langage de balisage [XML](/fr/docs/Web/XML) décrivant des [images vectorielles](https://fr.wikipedia.org/wiki/Image_vectorielle) bidimensionnelles. On pourrait dire que SVG est aux images ce qu'[HTML](/fr/docs/Web/HTML) est au texte.

**[Premiers pas](/fr/SVG/Tutoriel "fr/SVG/Tutoriel")** ce tutoriel vous aidera à débuter en SVG.

SVG est une [recommandation du W3C](http://www.w3.org/Graphics/SVG/) et est basé sur XML. Il est explicitement conçu pour fonctionner avec d'autres standards du [W3C](http://www.w3.org/) comme [CSS](/fr/CSS "fr/CSS"), [DOM](/fr/DOM "fr/DOM") et [SMIL](http://www.w3.org/AudioVideo/).

SVG est un format d'images vectorielles. Les images vectorielles peuvent être redimensionnées sans perte de qualité, tandis que ce n'est pas possible avec des images matricielles (bitmap).

SVG est une norme développée par le [World Wide Web Consortium (W3C)](https://www.w3.org/) depuis 1999.

## Documentation

- [Référence des éléments SVG](/fr/SVG/Element "fr/SVG/Element")
  - : Obtenir des informations sur les éléments SVG.
- [Référence des attributs SVG](/fr/docs/Web/SVG/Attribute "/fr/docs/Web/SVG/Attribute")
  - : Obtenir des informations sur les attributs SVG.
- [Référence de l'interface DOM SVG](/fr/docs/Référence_du_DOM_Gecko#Interfaces_SVG "/fr/docs/Référence_du_DOM_Gecko#Interfaces_SVG")
  - : Les détails sur l'API DOM SVG pour intéragir avec Javascript.
- [SVG dans Firefox](/fr/SVG_dans_Firefox "fr/SVG_dans_Firefox")
  - : Cet article décrit les caractéristiques et le comportement du sous-ensemble de la spécification SVG 1.1 actuellement implémenté dans Firefox 2.
- [SVG documentation tierce](http://svground.fr/)
  - : Une référence francophone du format SVG sous forme de tutoriels.
- [SVG Authoring Guidelines](http://jwatt.org/svg/authoring/) (en anglais)
  - : jwatt traite des erreurs les plus courantes commises dans le contenu SVG, et explique ce que les auteurs peuvent faire pour les corriger.
- [Projet SVG de Mozilla](/fr/docs/Mozilla/Mozilla_SVG_Project "fr/Projet_SVG_de_Mozilla")
  - : Une présentation du projet SVG de Mozilla (à traduire de [en:Mozilla SVG Project](/fr/Mozilla_SVG_Project "en/Mozilla_SVG_Project")).
- [Mozilla SVG Project FAQ](http://www.mozilla.org/projects/svg/faq.html)
  - : Cette FAQ est le résultat de recherches au sein du groupe mozilla.dev.tech.svg et des forums de MozillaZine pour connaître les questions les plus souvent posées à propos de SVG dans Mozilla.
- Autres ressources

  - : Voici d'autres articles à propos de SVG sur MDN :

    - [Un tutoriel](/fr/docs/Web/SVG/Tutoriel "/fr/docs/Web/SVG/Tutoriel")
    - [Une introduction à SVG dans HTML](/fr/docs/Introduction_à_SVG_dans_HTML "/fr/docs/Introduction_à_SVG_dans_HTML")

## Communauté

- Voir les forums Mozilla... {{DiscussionList("dev-tech-svg", "mozilla.dev.tech.svg")}}

## Outils

- [SVG Test Suite](http://www.w3.org/Graphics/SVG/Test/)
- [Validateur SVG](http://validator.w3.org/) (jusqu'à 1.1 seulement)
- D'autres ressources connexes : [XML](/fr/docs/Web/XML "/fr/docs/XML"), [CSS](/fr/docs/CSS), [DOM](/fr/docs/DOM), [Canvas](/fr/docs/HTML/Canvas)

## Exemples

- [Galerie d'art SVG](http://plurib.us/1shot/2007/svg_gallery/)
- [carto.net](http://www.carto.net/papers/svg/samples/)
- Google [Maps](http://maps.google.com) (tracé des routes) et Google [Docs](http://docs.google.com) (graphiques des tableurs)
- [Menus « bulles » SVG](http://starkravingfinkle.org/projects/demo/svg-bubblemenu-in-html.xml)
- Présentation [SVG et Mozilla](https://jwatt.org/blog/2009/11/16/slides-and-demos-from-svg-open-2009) lors de SVG Open 2009
- [SVG comme image](/fr/docs/Web/SVG/SVG_en_tant_qu_image)
- [Animation SVG avec SMIL](/fr/docs/Web/SVG/SVG_animation_with_SMIL)

### Animation et interaction

Comme HTML, SVG dispose d'un modèle de document (DOM) et d'évènements, et est accessible depuis JavaScript. Ceci permet aux développeurs de créer des animations riches et des images interactives.

- [svg-wow.org](http://svg-wow.org/)
- Extension Firefox ([Grafox](http://schepers.cc/grafox/)) pour ajouter la gestion d'un sous-ensemble des animations SMIL
- Manipulation interactive de [photos](http://people.mozilla.com/~vladimir/demos/photos.svg)
- [Transformations HTML](http://starkravingfinkle.org/blog/2007/07/firefox-3-svg-foreignobject/) utilisant `foreignObject` de SVG

### Cartes, graphiques, jeux et expérimentations 3D

Bien qu'un peu de SVG puisse contribuer à améliorer le contenu du web, voici quelques exemples d'utilisation poussée du SVG.

- Un [Tetris en SVG](http://www.codedread.com/yastframe.php) et [Connect 4](http://www.treebuilder.de/svg/connect4.svg)
- Jeu [Find the State](http://dev.w3.org/SVG/tools/svgweb/samples/svg-files/USStates.svg)
- [Boîte 3D](http://www.treebuilder.de/default.asp?file=441875.xml) et [boîtes 3D](http://www.treebuilder.de/default.asp?file=206524.xml)
- [jVectorMap](http://jvectormap.com/) (pour représenter des cartes interactives avec des données) (en anglais)
