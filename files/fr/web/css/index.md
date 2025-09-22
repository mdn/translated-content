---
title: "CSS : Feuilles de style en cascade"
slug: Web/CSS
l10n:
  sourceCommit: 9b73bdea5458572f77a401596fef9a06ed8bba1b
---

{{CSSRef}}

**CSS** (pour <i lang="en">Cascading Style Sheets</i> en anglais), soit feuilles de style en cascade, est un langage de [feuille de style](/fr/docs/Web/API/StyleSheet) utilisé pour décrire la présentation d'un document écrit en [HTML](/fr/docs/Web/HTML) ou [XML](/fr/docs/Web/XML/Guides/XML_introduction) (y compris les dialects XML que sont [SVG](/fr/docs/Web/SVG), [MathML](/fr/docs/Web/MathML), ou [XHTML](/fr/docs/Glossary/XHTML)). CSS décrit la façon dont les éléments doivent être affichés à l'écran, sur papier, à l'oral ou sur d'autres médias.

CSS est l'un des langages principaux du **Web ouvert** et a été standardisé [par le W3C](https://w3.org/Style/CSS/#specs). Auparavant, le développement des différentes parties de la spécification CSS était réalisé de façon synchrone, permettant d'avoir une version pour l'ensemble de la recommandation. Vous avez donc pu entendre parler de CSS1, CSS2.1, voire CSS3. Toutefois, il n'y aura pas de version CSS4 ou d'autres version globale numérotée de CSS.

En effet, après CSS 2.1, la portée de la spécification a augmenté significativement et les avancées sur les différents modules CSS ont commencé à diverger, et il est alors devenu plus efficace de [développer et diffuser les recommandations par module](https://www.w3.org/Style/CSS/current-work). Plutôt que d'avoir une version globale de la spécification CSS, le W3C collecte désormais de façon périodique un instantané du [dernier état stable de la spécification CSS](https://www.w3.org/TR/css/) et de l'avancée de chaque module. Les modules de spécification CSS ont un numéro de version, appelé niveau, comme [le module de spécification CSS sur les couleurs de niveau 5](https://drafts.csswg.org/css-color-5/).

## Ressources principales

- Introduction à CSS
  - : Si vous débutez en développement web, n'hésitez pas à consulter l'article [les bases de CSS](/fr/docs/Learn_web_development/Getting_started/Your_first_website/Styling_the_content) pour découvrir CSS, ce que c'est et comment l'utiliser.
- Tutoriels CSS
  - : Notre section [Apprendre le Web - CSS](/fr/docs/Learn_web_development/Core/Styling_basics) contient de nombreux tutoriels pour vous guider d'un niveau débutant à intermédiaire en CSS. Elle couvre l'ensemble des concepts fondamentaux en CSS.
- La référence CSS
  - : [Une référence exhaustive](/fr/docs/Web/CSS/Reference) destinée aux développeuses et développeurs web expérimentés et qui décrit chaque propriété et concept de CSS.

## Tutoriels

La section [CSS - Apprendre le Web](/fr/docs/Learn_web_development/Core/Styling_basics) fournit différents modules qui permettent d'apprendre CSS sans connaissance particulière préalable.

- [Premiers pas en CSS](/fr/docs/conflicting/Learn_web_development/Core/Styling_basics_beefded63afe2ba224c92b0dbe0482e175dee799d9c2519eae043aaa448c950f)
  - : CSS est utilisé pour mettre en forme et organiser le contenu sur page web, par exemple en modifiant la police, la couleur, la taille, ou l'espacement du contenu. On peut ainsi l'organiser en plusieurs colonnes, ajouter des animations ou d'autres décorations. Ce module est une introduction en douceur à CSS, expliquant les fondamentaux de son fonctionnement, la syntaxe et comment commencer à l'utiliser pour mettre en forme un document HTML.
- [Les blocs de construction de CSS](/fr/docs/conflicting/Learn_web_development/Core/Styling_basics)
  - : Ce module explore la cascade et l'héritage, les différents types de sélecteurs disponibles, les unités, le dimensionnement, la mise en forme des arrière-plans et des bordures, le débogage et plus encore.

    L'objectif est de fournir une boîte à outils pour écrire du CSS correct et vous permettre de comprendre les fondamentaux théoriques avant d'aller plus loin vers [la mise en forme du texte](/fr/docs/Learn_web_development/Core/Text_styling) et [les dispositions CSS](/fr/docs/Learn_web_development/Core/CSS_layout).

- [Mettre en forme le texte](/fr/docs/Learn_web_development/Core/Text_styling)
  - : Dans ce chapitre, on voit comment mettre en forme du texte&nbsp;: changer la police, mettre en gras, mettre en italique, gérer les espaces entre les lignes et les lettres, ajouter des ombres portées, etc. En fin de chapitre, on voit comment appliquer des polices personnalisées sur une page et comment mettre en forme les listes et les liens.
- [La disposition en CSS](/fr/docs/Learn_web_development/Core/CSS_layout)
  - : On voit ici comment correctement placer les boîtes dans la zone d'affichage (<i lang="en">viewport</i>). Grâce aux concepts précédents, on peut désormais étudier les différentes méthodes pour positionner les éléments sur une page&nbsp;: les boîtes flexibles (<i lang="en">flexbox</i>), les grilles CSS et d'autres techniques historiques.
- [Comment utiliser CSS afin de résoudre certains problèmes usuels](/fr/docs/Learn_web_development/Howto/Solve_CSS_problems)
  - : Ce module fournit des liens vers du contenu expliquant comment utiliser CSS afin de résoudre des problèmes fréquemment rencontrés lors de la création d'une page web.

## Références

- [La référence CSS](/fr/docs/Web/CSS/Reference)
  - : Une référence exhaustive, destinée aux développeuses et développeurs web expérimentés. Elle décrit les différentes propriétés et concepts qui composent CSS.
- Les concepts majeurs de CSS
  - : Plusieurs articles de cette section présentent les aspects clés du langage. On y décrit notamment&nbsp;:
    - [La syntaxe et les formes du langage](/fr/docs/Web/CSS/CSS_syntax/Syntax)
    - [La spécificité](/fr/docs/Web/CSS/CSS_cascade/Specificity) et [l'héritage](/fr/docs/Web/CSS/CSS_cascade/Inheritance), et [la cascade](/fr/docs/Web/CSS/CSS_cascade/Cascade)
    - [Les unités et valeurs CSS](/fr/docs/Web/CSS/CSS_Values_and_Units) et [les notations fonctionnelles](/fr/docs/Web/CSS/CSS_Functions)
    - [Le modèle de boîtes](/fr/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model) et [la fusion des marges](/fr/docs/Web/CSS/CSS_box_model/Mastering_margin_collapsing)
    - [Le bloc englobant](/fr/docs/Web/CSS/CSS_display/Containing_block)
    - [L'empilement](/fr/docs/Web/CSS/CSS_positioned_layout/Stacking_context) et [le contexte de formatage de blocs](/fr/docs/Web/CSS/CSS_display/Block_formatting_context)
    - les concepts de [valeur initiale](/fr/docs/conflicting/Web/CSS/CSS_cascade/Value_processing_f91302baa0061849ce1a7eea54ba57f650b9256fcf644b7a35a0645d353b08fc), [valeur calculée](/fr/docs/Web/CSS/CSS_cascade/Value_processing), [valeur utilisée](/fr/docs/conflicting/Web/CSS/CSS_cascade/Value_processing_ec5028512f59a0673c4ed5cfd5bcbbe4dcec85980166da23f909867f8a36e8b2) et [valeur réelle](/fr/docs/conflicting/Web/CSS/CSS_cascade/Value_processing)
    - [Les propriétés raccourcies](/fr/docs/Web/CSS/CSS_cascade/Shorthand_properties)
    - [Les boîtes flexibles CSS (<i lang="en">flexbox</i>)](/fr/docs/Web/CSS/CSS_flexible_box_layout)
    - [Les grilles CSS](/fr/docs/Web/CSS/CSS_grid_layout)
    - [Les sélecteurs CSS](/fr/docs/Web/CSS/CSS_selectors)
    - [Les requêtes media (<i lang="en">media queries</i>)](/fr/docs/Web/CSS/CSS_media_queries)
    - [Les animations](/fr/docs/Web/CSS/animation)

## Livre de recettes

[Le livre de recettes de disposition CSS](/fr/docs/Web/CSS/Layout_cookbook) contient différentes recettes pour mettre en place différentes dispositions courantes. En plus de fournir du code pouvant servir de point de départ, ces recettes illustrent les différentes façons dont les spécifications CSS liées à la disposition peuvent être utilisées ainsi que les choix à faire lors du développement.

## Outils de développement CSS

- [Le service de validation CSS du W3C](https://jigsaw.w3.org/css-validator/) permet de vérifier si une feuille de style CSS est valide.
- [Les outils de développement de Firefox](https://firefox-source-docs.mozilla.org/devtools-user/index.html) permettent de visualiser, d'éditer une feuille de style en direct grâce à [l'inspecteur](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/index.html) et à [l'éditeur de styles](https://firefox-source-docs.mozilla.org/devtools-user/style_editor/index.html).

## Voir aussi

- [Quelques démonstrations en CSS](/fr/docs/orphaned/Web/Demos#css)
- Les langages du Web auxquels CSS s'applique&nbsp;: [HTML](/fr/docs/Web/HTML), [SVG](/fr/docs/Web/SVG), [MathML](/fr/docs/Web/MathML), [XHTML](/fr/docs/Glossary/XHTML), et [XML](/fr/docs/Web/XML/Guides/XML_introduction).
