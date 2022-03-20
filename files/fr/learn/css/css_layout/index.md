---
title: La mise en page avec CSS
slug: Learn/CSS/CSS_layout
tags:
  - Beginner
  - CSS
  - Floating
  - Grids
  - Guide
  - Landing
  - Layout
  - Learn
  - Module
  - Multiple column
  - Positioning
  - alignment
  - flexbox
  - float
  - table
translation_of: Learn/CSS/CSS_layout
original_slug: Apprendre/CSS/CSS_layout
---
{{LearnSidebar}}

À ce stade, les principes fondamentaux du CSS ont été vus : comment composer le texte et comment mettre en forme et manipuler les boîtes dans lesquelles se trouve votre contenu. Il est maintenant temps de regarder comment placer vos boîtes au bon endroit dans la vue et par rapport aux autres boîtes. Les prérequis nécessaires ont été examinés, nous pouvons maintenant nous plonger profondément dans la mise en page avec CSS, en regardant les différents paramètres d'affichage, les outils modernes tels que «&nbsp;flexbox&nbsp;», les grilles CSS et le positionnement, ainsi que quelques méthodes traditionnelles qu'il est encore bon de connaître.

> **Remarque :**
>
> Vous cherchez à devenir développeuse ou développeur web front-end&nbsp;?
>
> Nous avons élaboré un cours qui comprend toutes les informations essentielles dont vous avez besoin pour atteindre votre objectif.
>
> [Commencer](/fr/docs/Learn/Front-end_web_developer)

## Prérequis

Avant de commencer ce module, vous devriez déjà :

1.  Connaître les bases du HTML, telles qu'exposées dans le module [Introduction au HTML.](/fr/docs/Learn/HTML/Introduction_to_HTML)
2.  Être à l'aise avec les fondamentaux du CSS, telles qu'exposés dans [Introduction à CSS](/fr/docs/Learn/CSS/First_steps).
3.  Savoir [mettre en forme les boîtes.](/fr/docs/Learn/CSS/Building_blocks)

> **Note :** Si vous travaillez sur un ordinateur, une tablette ou autre périphérique sur lequel vous ne pouvez pas créer vos propres fichiers, vous pourrez essayer (la plupart) les exemples de code dans des sites de développement en ligne tels que [JSBin](http://jsbin.com/) ou [Glitch](https://glitch.com/)

## Guides

Ces articles fourniront des instructions sur les outils et techniques de mise en page fondamentaux disponibles dans CSS. À la fin des leçons, un exercice vous permettra de vérifier la compréhension des méthodes de mise en page en créant votre propre page web.

- [Introduction à la mise en page en CSS](/fr/docs/Learn/CSS/CSS_layout/Introduction)
  - : Cet article récapitule quelques-unes des fonctionnalités de mise en page CSS que nous avons déjà abordées dans les modules précédents — telles que les diverses valeurs de [`display`](/fr/docs/Web/CSS/display) — et présente certains des concepts que nous couvrirons dans de ce module.
- [Flux normal des éléments](/fr/docs/Learn/CSS/CSS_layout/Normal_Flow)
  - : Les éléments se placent d'eux‑même sur les pages web selon un _flux normal_ sauf à ce que nous modifions la disposition avec CSS. Cet article explique les fondamentaux du flux normal pour permettre de comprendre comment le modifier.
- [Flexbox](/fr/docs/Learn/CSS/CSS_layout/Flexbox)
  - : [Flexbox](/fr/docs/Glossary/Flexbox) est une méthode de mise en page unidimensionnelle pour disposer les éléments en lignes ou en colonnes. Les éléments s'adaptent pour remplir de l'espace supplémentaire et se rétractent pour s'insérer dans des espaces plus petits. Cet article explique les bases de cet outil CSS.
- [Grilles](/fr/docs/Learn/CSS/CSS_layout/Grids)
  - : Les grilles CSS permettent de composer un document avec une mise en page bidimensionnelle. Elles permettent de disposer le contenu en lignes et en colonnes, et possèdent de nombreuses fonctionnalités qui simplifient la construction de mises en page complexes. Cet article vous fournira l'ensemble des informations pour commencer avec la mise en page via les grilles CSS.
- [Le flottement](/fr/docs/Learn/CSS/CSS_layout/Floats)
  - : À l'origine destinée aux images flottantes à l'intérieur de blocs de texte, la propriété [`float`](/fr/docs/Web/CSS/float) fut pendant un moment l'un des outils les plus utilisés pour créer des mises en page sur plusieurs colonnes sur des pages web. Avec l'avènement de flexbox et des grilles, cette propriété retrouve son usage initial. Nous verrons ce qu'il en est dans cet article.
- [Le positionnement](/fr/docs/Learn/CSS/CSS_layout/Positioning)
  - : Le positionnement vous permet d'extraire des éléments du flux de mise en page normal du document et de les faire se comporter différemment, par exemple en se mettant l'un sur l'autre ou en les positionnant toujours au même endroit dans la fenêtre du navigateur. Cet article indique les différentes valeurs pour la propriété CSS [`position`](/fr/docs/Web/CSS/position) et comment les utiliser.
- [Disposition en colonnes](/fr/docs/Learn/CSS/CSS_layout/Multiple-column_Layout)
  - : Ce type de disposition permet d'organiser le contenu en colonnes, comme dans un journal papier. Cet article explique comment utiliser cette fonctionnalité.
- [_Responsive design_](/fr/docs/Learn/CSS/CSS_layout/Responsive_Design)
  - : Avec l'apparition d'écrans de tailles diverses pour naviguer sur le Web, le concept de « _responsive design_ » (ou conception de sites web réactifs en français) est apparu. Il s'agit d'un ensemble de pratiques qui permettent d'adapter la disposition et l'apparence du contenu web pour s'afficher au mieux sur les différents écrans (quelle que soit leur largeur ou leur résolution par exemple). Cette méthode a changé la façon de concevoir des sites et applications web pour les différents appareils. Dans cet article, nous verrons les techniques principales associées et ce qu'il faut connaître pour maîtriser cette méthode.
- [Guide pour débuter avec les _media queries_](/fr/docs/Learn/CSS/CSS_layout/Media_queries)
  - : Les _media queries_ (ou requêtes média en français) permettent d'appliquer des règles CSS en fonction de conditions sur l'environnement ou l'appareil. On peut ainsi choisir de déclencher une règle lorsque la zone d'affichage est plus large que 480 pixels. Les requêtes média sont une brique fondamentale pour la conception de sites web réactifs car elles permettent de créer différentes dispositions en fonction de la taille de la zone d'affichage. Elles permettent également de détecter d'autres notions relatives à l'environnement de navigation comme l'utilisation d'un écran tactile ou d'une souris. Dans cet article, nous verrons la syntaxe utilisée pour les _media queries_ puis appliquerons cela à un exemple pour le rendre réactif.
- [Méthodes de mise en page historiques](/fr/docs/Learn/CSS/CSS_layout/Legacy_Layout_Methods)
  - : Les systèmes de grilles sont une fonctionnalité courramment utilisée pour les mises en page avec CSS. Avant l'implémentation des grilles CSS, il fallait utiliser le flottement ou d'autres techniques de disposition. Dans cet article, nous exposerons comment ces méthodes plus anciennes fonctionnent afin que vous compreniez comment elles étaient utilisées si vous travaillez sur un projet historique.
- [Prise en charge des anciens navigateurs](/fr/docs/Learn/CSS/CSS_layout/Supporting_Older_Browsers)
  - : Dans ce module, nous vous recommandons d'utiliser flexbox et les grilles CSS comme méthodes de mise en page pour vos pages et applications. Cependant, il y aura des visiteurs de votre site utilisant des navigateurs plus anciens ou des navigateurs ne prenant pas en charge les méthodes que vous avez utilisées. Ce sera toujours le cas sur le Web — au fur et à mesure du développement de nouvelles fonctionnalités, les implémentations des navigateurs pourront varier. Cet article explique comment utiliser les techniques modernes du Web sans exclure les personnes utilisant des navigateurs plus anciens.
- [Compréhension des fondamentaux de la mise en page](/fr/docs/Learn/CSS/CSS_layout/Fundamental_Layout_Comprehension)
  - : Une évaluation pour tester vos connaissances des différentes méthodes de mise en page web.

## Voir aussi

- [Exemples pratiques de positionnement](/fr/docs/Learn/CSS/CSS_layout/Practical_positioning_examples)
  - : Cet article montre comment construire quelques exemples réalistes pour illustrer les possibilités du positionnement.
