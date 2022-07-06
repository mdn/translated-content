---
title: Introduction
slug: Web/SVG/Tutorial/Introduction
tags:
  - SVG
  - SVG:Tutoriel
translation_of: Web/SVG/Tutorial/Introduction
original_slug: Web/SVG/Tutoriel/Introduction
---
{{ PreviousNext("SVG/Tutoriel", "SVG/Tutoriel/Premiers_pas") }}

SVG est un langage [XML](/fr/XML "XML"), assez similaire au [XHTML](/fr/XHTML "fr/XHTML"). Ce langage peut être utilisé pour dessiner des choses complexes, comme le petit lion sur la gauche. Je l'ai dit en présentation de ce tutoriel, le SVG est un langage vectoriel. En gros, cela veut dire que l'image peut être transformée, rétrécie, agrandie, bref, manipulée, sans perte de qualité.

La seconde particularité est que vous allez pouvoir lire le code. Stop ! Lire une image ? Et oui, cela vient du fait que SVG dérive du XML. Nous verrons dans ce tutoriel que le code SVG reste (la plupart du temps) humainement lisible. C'est aussi sympa car on va pouvoir le transformer en arbre DOM et ainsi le manipuler, avec du CSS et / ou du Javascript.

SVG est apparu en 1999, après que plusieurs formats concurrents aient été soumis au [W3C](http://www.w3.org "en-US/W3C")  sans succès. SVG est pris en charge par tous les [principaux navigateurs](https://caniuse.com/#search=svg). Un inconvénient est que le chargement SVG peut être lent. En contrepartie, l'avantage c'est de disposer du DOM et de ne pas nécessiter d'extensions tierces. Choisir d'utiliser ou non SVG dépend souvent des cas d'utilisation.

## Les ingrédients de base

HTML founit des éléments pour définir des titres, paragraphes, tableaux, etc. De la même manière, SVG fournit des éléments pour dessiner des cercles, des rectangles, des courbes simples ou complexes, etc.

Un simple document SVG se compose de l'élément racine {{ SVGElement('svg') }}, à l'intérieur de laquelle vont être placées divers éléments. L'élément {{ SVGElement('g') }} permet de regrouper plusieurs éléments ensemble, un peu à la manière d'un div en HTML. À partir de là, l'image SVG peut devenir aussi complexe qu'on le veut.

SVG prend en charge les dégradés, les rotations, les effets de filtre, les animations, l'interactivité avec JavaScript... Mais toutes ces fonctionnalités reposent sur un petit nombre d'éléments de base.

## Les bons outils

Il y a un certain nombre de logiciels de dessin disponibles qui utilisent SVG comme format natif. Certains, comme [Inkscape](http://www.inkscape.org/), sont libres et gratuits. Néanmoins, ce tutoriel se basera sur le XML et un simple éditeur de texte. Le but est d'enseigner les mécanismes de SVG à ceux qui veulent les comprendre, et la meilleure façon de le faire est de mettre les mains dans le cambouis avec un peu de balisage.

> **Note :** Tous les visionneurs SVG ne sont pas égaux, il est donc probable que quelque chose écrit pour une application ne s'affiche pas exctement de la même manière dans une autre, simplement parce qu'ils prennent en charge différentes spécifications SVG, CSS ou JavaScript.

Avant de commencer, vous devez avoir une compréhension basique du XML ou d'un autre langage de balisage comme le [HTML](/fr/HTML "fr/HTML"). Si vous n'êtes pas à l'aise avec le XML, voici quelques règles à garder en-tête&nbsp;:

- Les éléments et attributs SVG sont sensibles à la casse (contrairement au HTML et doivent donc tous être entrés avec la casse indiquée ici).
- Les valeurs des attributs en SVG doivent être placées entre guillemets même si ce sont des nombres.

La [spécification du langage SVG (en)](http://www.w3.org/Graphics/SVG/) est énorme. Ce tutoriel a pour but d'en traiter juste assez pour pouvoir commencer. Une fois que vous serez à l'aise avec les bases du SVG, vous devriez être capables d'utiliser les [références d'éléments](/fr/SVG/Référence_d'éléments "fr/SVG/Référence_d'éléments") et les [références d'interfaces](/fr/SVG/Référence_d'interfaces "fr/SVG/Référence_d'interfaces") pour découvrir tout ce que vous aurez besoin de connaître.

## Les versions SVG

La version "complète" la plus récente de SVG est la 1.1 (devenue recommendation en 2003). Elle s'appuie sur SVG 1.0 mais ajoute davantage de modularisation pour faciliter l'implémentation. [La seconde édition de SVG 1.1](http://www.w3.org/TR/SVG/), est devenue recommendation en 2011.

SVG 1.2 devait être la prochaine version majeure de SVG mais celle-ci a été abandonnée pour le prochain [SVG 2.0](http://www.w3.org/TR/SVG2/), qui est actuellement en cours de développement. SVG 2.0 suit une approche similaire à CSS3: il divise les composants en plusieurs spécifications librement couplées.

Outre les recommendations complètes de SVG, le groupe de travail du W3C a introduit SVG Tiny et SVG basic en 2003. Ces deux profils d'adressent principalement aux mobiles. SVG Tiny devrait permettre d'obtenir des graphiques simples pour les périphériques qui ont de faibles capacités. SVG Basic, lui, offre de nombreuses fonctionnalités de SVG, mais n'inclut pas celles qui sont difficiles à implémenter ou lourdes à restituer (comme les animations). En 2008, SVG Tiny 1.2 est devenu une recommendation du W3C.

Une spécification SVG Print était prévue, qui ajouterait la prise en charge de plusieurs pages et une gestion améliorée des couleurs. Ce travail a été interrompu.

{{ PreviousNext("SVG/Tutoriel", "SVG/Tutoriel/Premiers_pas") }}
