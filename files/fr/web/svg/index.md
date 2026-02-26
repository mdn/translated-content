---
title: "SVG : Scalable Vector Graphics"
short-title: SVG
slug: Web/SVG
l10n:
  sourceCommit: a4fcf79b60471db6f148fa4ba36f2cdeafbbeb70
---

Les **Scalable Vector Graphics (SVG)** sont un langage de balisage basé sur [XML](/fr/docs/Web/XML) permettant de décrire des [images vectorielles](https://fr.wikipedia.org/wiki/Image_vectorielle) en deux dimensions.

Il s'agit donc d'un standard Web ouvert, basé sur du texte, pour décrire des images pouvant être affichées proprement à n'importe quelle taille et conçues pour fonctionner parfaitement avec d'autres standards du Web, notamment [CSS](/fr/docs/Web/CSS), [DOM](/fr/docs/Web/API/Document_Object_Model), [JavaScript](/fr/docs/Web/JavaScript) et [SMIL](/fr/docs/Web/SVG/Guides/SVG_animation_with_SMIL). SVG est, en substance, pour le graphisme ce que [HTML](/fr/docs/Web/HTML) est pour le texte.

Les images SVG et leurs comportements associés sont définis dans des fichiers texte [XML](/fr/docs/Web/XML), ce qui signifie qu'elles peuvent être recherchées, indexées, scriptées et compressées. De plus, cela signifie qu'elles peuvent être créées et modifiées avec n'importe quel éditeur de texte ou logiciel de dessin.

Comparées aux formats d'images matricielles classiques comme {{Glossary("JPEG")}} ou {{Glossary("PNG")}}, les images vectorielles au format SVG peuvent être affichées à n'importe quelle taille sans perte de qualité et peuvent être facilement localisées en modifiant le texte qu'elles contiennent, sans avoir besoin d'un éditeur graphique. Avec les bibliothèques appropriées, les fichiers SVG peuvent même être localisés à la volée.

SVG est développé par le [World Wide Web Consortium (W3C) <sup>(angl.)</sup>](https://www.w3.org/) depuis 1999.

## Tutoriels

Les [tutoriels SVG](/fr/docs/Web/SVG/Tutorials) sont conçus pour vous guider à travers différents sujets, en partant du principe que vous n'avez aucune expérience préalable, des bases jusqu'aux techniques avancées.

- [Découvrir SVG depuis zéro](/fr/docs/Web/SVG/Tutorials/SVG_from_scratch)
  - : Ce tutoriel vise à expliquer le fonctionnement interne de SVG et regorge de détails techniques. Si vous souhaitez simplement dessiner de belles images, vous trouverez peut-être des ressources plus utiles sur la [page de documentation d'Inkscape <sup>(angl.)</sup>](https://inkscape.org/learn/). Une autre bonne introduction à SVG est proposée par le [SVG Primer du W3C <sup>(angl.)</sup>](https://www.w3.org/Graphics/SVG/IG/resources/svgprimer.html). Découvrez aussi ce [tutoriel SVG <sup>(angl.)</sup>](https://svg-tutorial.com/) façon calendrier de l'Avent qui vous guide pour coder 25 SVG festifs.

## Guides

Les [guides SVG](/fr/docs/Web/SVG/Guides) vous aident à utiliser SVG sur le Web, couvrant des sujets comme l'intégration, les types MIME (médias), la gestion des scripts, les animations, les filtres, et plus encore.

- [Appliquer des effets SVG au contenu HTML](/fr/docs/Web/SVG/Guides/Applying_SVG_effects_to_HTML_content)
  - : Les navigateurs modernes prennent en charge l'utilisation de SVG dans les styles CSS pour appliquer des effets graphiques au contenu HTML.
- [Type de données](/fr/docs/Web/SVG/Guides/Content_type)
  - : Le SVG utilise plusieurs types de données. Cet article les liste avec leur syntaxe et une description de leur usage.
- [Cours accéléré sur les espaces de noms](/fr/docs/Web/SVG/Guides/Namespaces_crash_course)
  - : Les espaces de noms sont essentiels pour les agents utilisateurs qui gèrent plusieurs dialectes XML. Les navigateurs doivent être très stricts&nbsp;; prendre le temps de comprendre les espaces de noms vous évitera bien des soucis plus tard.
- [Scripts](/fr/docs/Web/SVG/Guides/Scripting)
  - : Il existe plusieurs façons de créer et manipuler du SVG avec JavaScript. Ce document décrit la gestion des évènements, l'interactivité et l'utilisation de SVG embarqué.
- [Animation SVG avec SMIL](/fr/docs/Web/SVG/Guides/SVG_animation_with_SMIL)
  - : SMIL est un langage XML pour écrire des présentations multimédias interactives. Les auteur·ice·s peuvent utiliser la syntaxe SMIL dans SVG pour définir le minutage et la disposition des éléments à animer.
- [SVG comme image](/fr/docs/Web/SVG/Guides/SVG_as_an_image)
  - : SVG peut être utilisé comme format d'image dans HTML, CSS, certains éléments SVG et via l'API Canvas. Cette page liste les fonctionnalités où SVG peut être utilisé comme source d'image.
- [Filtres SVG](/fr/docs/Web/SVG/Guides/SVG_filters)
  - : SVG prend en charge les filtres pour appliquer des effets comme une ombre ou un flou, ou même fusionner les résultats de différents filtres.
- [Introduction à SVG dans HTML](/fr/docs/Web/SVG/Guides/SVG_in_HTML)
  - : Cet article montre comment utiliser SVG en ligne et inclut des exemples illustrés.

## Référence

La [référence SVG](/fr/docs/Web/SVG/Reference) contient des informations complètes sur les éléments, attributs et interfaces DOM, ainsi que la liste des spécifications et documents de standards associés.

- [Éléments SVG](/fr/docs/Web/SVG/Reference/Element)
  - : Les éléments SVG utilisés pour construire, dessiner et organiser des graphiques vectoriels.
- [Attributs SVG](/fr/docs/Web/SVG/Reference/Attribute)
  - : Les attributs SVG disponibles qui permettent de définir la façon dont un élément doit être traité ou affiché.
- [Interface DOM SVG](/fr/docs/Web/API/Document_Object_Model#svg_dom)
  - : L'API DOM SVG pour interagir avec SVG en JavaScript.

## Ressources

- [Suite de tests SVG <sup>(angl.)</sup>](https://github.com/w3c/svgwg/wiki/Testing)
- [Validateur de balisage <sup>(angl.)</sup>](https://validator.w3.org/#validate_by_input)
- [Guide d'écriture SVG <sup>(angl.)</sup>](https://jwatt.org/svg/authoring/)
- [Tutoriel SVG <sup>(angl.)</sup>](https://svg-tutorial.com/)
- [Bibliothèque de visualisation de données D3 <sup>(angl.)</sup>](https://d3js.org/)
