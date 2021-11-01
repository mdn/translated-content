---
title: Outils pour SVG
slug: Web/SVG/Tutorial/Tools_for_SVG
translation_of: Web/SVG/Tutorial/Tools_for_SVG
original_slug: Web/SVG/Tutoriel/Tools_for_SVG
---
{{ PreviousNext("Web/SVG/Tutoriel/SVG_Image_Tag") }}

Maintenant que nous avons vu les notions de base en SVG, nous allons nous intéresser à quelques outils qui permettent d'éditer des fichiers SVG.

### Support des navigateurs

Avec l'arrivée de IE9, on peut enfin dire que les principaux navigateurs -  Internet Explorer 9, Mozilla Firefox, Safari, Google Chrome et Opera - supportent le SVG. Sur mobile c'est aussi le cas des navigateurs basés sur Webkit (principalement iOS et Android). Et il y a en général des chances pour que les appareils plus vieux ou plus petits supportent au moins SVG Tiny.

## Inkscape

URL: [www.inkscape.org](http://www.inkscape.org)

L'un des outils fondamentaux pour travailler un format graphique est un logiciel de dessin performant. Inkscape permet de faire du dessin vectoriel, il est mis à jour régulièrement, et a le mérite d'être open source.

Il utilise le SVG comme format natif, et l'étend avec des éléments et attributs définis dans un espace de nommage spécifique. On peut aussi choisir un export au format SVG standard.

## Adobe Illustrator

URL: [www.adobe.com/products/illustrator/](http://www.adobe.com/products/illustrator/)

Avant de racheter Macromedia, Adobe était le plus ardent défenseur de SVG. C'est de cette époque que date le bon support du SVG dans Illustrator. Cependant, le code généré comporte souvent des bizarreries, qui obligent à le retraiter pour pouvoir l'utiliser en dehors d'Illustrator.

## Apache Batik

URL: [xmlgraphics.apache.org/batik/](http://xmlgraphics.apache.org/batik/)

Batik est un ensemble d'outils open source proposés par Apache Software Foundation. La boite à outils est codée en Java et assure un support quasi intégral de SVG 1.1, ainsi que certaines des fonctionnalités qui étaient prévues à l'origine pour SVG 1.2.

En plus d'un outil de visualisation (Squiggle) et d'un moteur d'aplatissement des calques pour l'export en PNG, Batik propose aussi un outil de formatage du code SVG, ainsi qu'un convertisseur de typographie TrueType vers SVG.

Utilisé avec [Apache FOP](http://xmlgraphics.apache.org/fop/), il permet également de transformer du SVG en PDF.

### Autres moteurs de rendu

Il existe plusieurs projets qui permettent d'exporter une image tramée à partie d'une source SVG. [ImageMagick](http://ImageMagick.org) est l'un des outils les plus connus de traitement des images en ligne de commande.  Wikipédia utilise la librairie de code Gnome [rsvg](http://library.gnome.org/devel/rsvg/) pour le rendu de ses images SVG.

## Raphael JS

URL: [raphaeljs.com](http://raphaeljs.com/)

Raphaël est un framework javascript, qui propose une couche d'abstraction pour les différentes implémentations des navigateurs. Les vieilles versions d'Internet Explorer sont supportées grace à la génération de code VML, un langage de balisage vectoriel, qui est l'un des ancêtres de SVG et existe depuis IE 5.5.

## Snap.svg

URL: [snapsvg.io](http://snapsvg.io/)

Une nouvelle couche d'abstraction JavaScript, plus récent, du même auteur que Raphael JS. Snap.svg est conçu pour les navigateurs modernes et prend donc en charge les dernières fonctionnalités SVG telles que la masquage, le découpage, les motifs, gradients et groupes. Il ne supporte pas les anciens navigateurs, contrairement à Raphael.

## Google Docs

URL: [www.google.com/google-d-s/drawings/](http://www.google.com/google-d-s/drawings/)

Les dessins réalisés dans Google Docs peuvent être exportés en SVG.

## Science

Les fameux outils d'analyse de données xfig and gnuplot supportent l'export en SVG. Pour le rendu de graphiques sur le web [JSXGraph](http://jsxgraph.uni-bayreuth.de/wp/) supporte VML, SVG et canvas, proposant automatiquement l'un ou l'autre en fonction du support des navigateurs.

SVG est souvent utilisé dans les applications GIS (Geographic Information System) à la fois comme format de stockage et de rendu. Cf [carto.net](http://carto.net) pour davantage de détails.

## Autres outils

Le W3C propose une [liste des programmes](http://www.w3.org/Graphics/SVG/WG/wiki/Implementations) qui supportent le SVG.

{{ PreviousNext("Web/SVG/Tutoriel/SVG_Image_Tag") }}
