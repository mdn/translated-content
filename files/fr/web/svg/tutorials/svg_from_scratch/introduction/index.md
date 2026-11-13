---
title: Introduction
slug: Web/SVG/Tutorials/SVG_from_scratch/Introduction
l10n:
  sourceCommit: 12f1c2ad8d4378d332a625b2601c575ca773cf26
---

{{PreviousNext("Web/SVG/Tutorials/SVG_from_scratch", "Web/SVG/Tutorials/SVG_from_scratch/Getting_started")}}

[SVG](/fr/docs/Web/SVG) est un langage [XML](/fr/docs/Web/XML), similaire à [XHTML](/fr/docs/Glossary/XHTML), qui permet de dessiner des graphiques vectoriels, comme celui présenté ci-dessous. Il peut servir à créer une image en spécifiant toutes les lignes et formes nécessaires, en modifiant des images matricielles existantes, ou par une combinaison des deux. L'image et ses composants peuvent aussi être transformés, composés ensemble ou filtrés pour changer complètement leur apparence.

![Logo dinosaure Mozilla](dino.svg)

SVG est apparu en 1999 après que plusieurs formats concurrents ont été soumis au [W3C <sup>(angl.)</sup>](https://www.w3.org/) sans être pleinement ratifiés. SVG est pris en charge par tous les principaux [navigateurs <sup>(angl.)</sup>](https://caniuse.com/#search=svg). Un inconvénient est que le chargement du SVG peut être lent. SVG offre des avantages, dont la disponibilité d'une [interface DOM](/fr/docs/Web/API) et l'absence de besoin d'extensions tierces. Son utilisation dépend souvent de votre cas d'usage spécifique.

## Les ingrédients de base

[HTML](/fr/docs/Web/HTML) fournit des éléments pour définir des titres, des paragraphes, des tableaux, etc. De la même manière, SVG fournit des éléments pour dessiner des cercles, des rectangles, des courbes simples ou complexes. Un document SVG de base se compose simplement de l'élément racine {{SVGElement('svg')}} et de plusieurs formes de base qui composent le graphique. Il existe aussi l'élément {{SVGElement('g')}}, qui sert à regrouper plusieurs formes de base.

À partir de cette structure de base, l'image SVG peut devenir aussi complexe qu'on le souhaite. SVG prend en charge les dégradés, les rotations, les effets de filtre, les animations, l'interactivité avec JavaScript, etc. Mais toutes ces fonctionnalités supplémentaires reposent sur ce petit ensemble d'éléments pour définir la zone graphique.

## Avant de commencer

Il existe de nombreux logiciels de dessin, comme [Inkscape <sup>(angl.)</sup>](https://inkscape.org/), qui sont gratuits et utilisent SVG comme format natif. Cependant, ce tutoriel s'appuiera sur le bon vieux éditeur XML ou texte (à votre convenance). L'idée est d'expliquer les mécanismes internes de SVG à celles et ceux qui veulent les comprendre, et cela se fait mieux en manipulant un peu de balisage. Pensez à votre objectif final. Tous les visionneurs SVG ne sont pas égaux, il est donc probable que quelque chose écrit pour une application ne s'affiche pas exactement de la même manière dans une autre, simplement parce qu'ils prennent en charge différents niveaux de la spécification SVG ou une autre spécification utilisée avec SVG (comme [JavaScript](/fr/docs/Web/JavaScript) ou [CSS](/fr/docs/Web/CSS)).

SVG est pris en charge dans tous les navigateurs modernes, et même dans quelques versions antérieures dans certains cas. Un tableau assez complet de la compatibilité navigateur est disponible sur [<i lang="en">Can I use</i> <sup>(angl.)</sup>](https://caniuse.com/svg). Firefox prend en charge certains contenus SVG depuis la version 1.5, et ce support s'est amélioré à chaque version. Espérons qu'avec ce tutoriel, MDN aidera les développeur·euse·s à suivre les différences entre Gecko et d'autres grandes implémentations.

Avant de commencer, vous devez avoir une compréhension basique du XML ou d'un autre langage de balisage comme HTML. Si vous n'êtes pas à l'aise avec le XML, voici quelques règles à garder en tête&nbsp;:

- Les éléments et attributs SVG doivent être saisis avec la casse indiquée ici, car XML est sensible à la casse (contrairement au HTML).
- Les valeurs d'attributs en SVG doivent être placées entre guillemets, même si ce sont des nombres.

SVG est une spécification très vaste. Ce tutoriel tente d'en couvrir les bases. Une fois à l'aise, vous pourrez utiliser la [référence des éléments](/fr/docs/Web/SVG/Reference/Element) et la [référence des interfaces](/fr/docs/Web/API/Document_Object_Model#dom_svg) pour trouver tout ce dont vous aurez besoin.

## Les versions SVG

Depuis qu'il est devenu une recommandation en 2003, la version «&nbsp;complète&nbsp;» la plus récente de SVG est la 1.1. Elle s'appuie sur SVG 1.0 mais ajoute davantage de modularisation pour faciliter l'implémentation. [La seconde édition de SVG 1.1 <sup>(angl.)</sup>](https://www.w3.org/TR/SVG11/) est devenue recommandation en 2011. SVG 1.2 «&nbsp;complète&nbsp;» devait être la prochaine version majeure de SVG, mais elle a été abandonnée au profit de la spécification [SVG 2.0 <sup>(angl.)</sup>](https://svgwg.org/svg2-draft/), qui est devenue recommandation candidate en 2018 et constitue la norme actuelle. SVG 2.0 suit une approche similaire à CSS et elle divise les composants en plusieurs spécifications faiblement couplées, comme [SVG strokes <sup>(angl.)</sup>](https://svgwg.org/specs/strokes/), [SVG paths <sup>(angl.)</sup>](https://svgwg.org/specs/paths/), et [SVG markers <sup>(angl.)</sup>](https://svgwg.org/specs/markers/).

En dehors des recommandations SVG complètes, le groupe de travail du W3C a introduit SVG Tiny et SVG Basic en 2003. Ces deux profils sont principalement destinés aux appareils mobiles. SVG Tiny doit permettre d'obtenir des primitives graphiques pour les petits appareils à faibles capacités. SVG Basic offre de nombreuses fonctionnalités de SVG complet, mais n'inclut pas celles qui sont difficiles à implémenter ou lourdes à restituer (comme les animations). En 2008, SVG Tiny 1.2 est devenu une recommandation du W3C.

Une spécification SVG Print était prévue, qui aurait ajouté la prise en charge de plusieurs pages et une gestion améliorée des couleurs. Ce travail a été interrompu.

{{PreviousNext("Web/SVG/Tutorials/SVG_from_scratch", "Web/SVG/Tutorials/SVG_from_scratch/Getting_started")}}
