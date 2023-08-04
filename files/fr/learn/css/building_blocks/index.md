---
title: Blocs de base en CSS
slug: Learn/CSS/Building_blocks
---

{{LearnSidebar}}

Ce cours fait suite aux [premiers pas avec CSS](/fr/docs/Learn/CSS/First_steps) : vous avez déjà acquis une bonne familiarité avec le langage et sa syntaxe, avec déjà des expériences d'utilisation de CSS. Il est donc temps d'approfondir le sujet. On examine ici les principes de cascade et d'héritage, tous les types de sélecteurs à notre disposition, les unités, le dimensionnement, les arrière-plans de style et les limites, le débogage, et bien d'autres choses.

L'objectif est d'introduire les outils qui feront de vous un utilisateur CSS compétent avec une bonne compréhension du cœur de la théorie CSS. Nous étudierons plus tard des sujets plus spécifiques comme [le style de texte](/fr/docs/Learn/CSS/Styling_text) et la [mise en page CSS](/fr/docs/Apprendre/CSS/CSS_layout).

## Prérequis

Avant de commencer ce cours, nous vous recommandons :

1. D'être familiarisé avec l'usage des ordinateurs et avec la navigation sur internet.
2. De disposer d'un environnement de travail comme il est décrit dans l'article [installation des outils de base](/fr/docs/Apprendre/Commencer_avec_le_web/Installation_outils_de_base) et de savoir créer et gérer des fichiers (cf. leçon [gérer les fichiers](/fr/docs/Apprendre/Commencer_avec_le_web/Gérer_les_fichiers)).
3. D'être suffisamment à votre aise avec HTML (voir le cours [introduction au HTML](/fr/docs/Apprendre/HTML/Introduction_à_HTML)).
4. D'avoir compris les bases du CSS telles qu'exposées dans le cours [premiers pas avec CSS.](/fr/docs/Learn/CSS/First_steps)

> **Note :** Si vous travaillez sur un ordinateur, une tablette ou tout autre appareil sur lequel vous n'avez pas la possibilité de créer vos propres fichiers, vous pourrez tester (la plupart) des exemples de code dans un site de programmation en ligne comme [JSBin](http://jsbin.com/) ou [Thimble](https://thimble.mozilla.org/fr/).

## Guides

Les articles qui composent ce module traitent la majeure partie du langage CSS. En les parcourant, vous découvrirez de nombreux exercices qui vous permettront d'évaluer votre bonne compréhension.

> **Note :** Les articles dont le titre apparaît en anglais ne sont pas encore traduits au moment de la traduction de la page que vous lisez.

- [Cascade and inheritance (Cascade et héritage)](/fr/docs/Learn/CSS/Building_blocks/Cascade_and_inheritance)
  - : Le but de cette leçon est de vous permettre d'acquérir des concepts fondamentaux du CSS : la cascade, la spécificité et l'héritage... et ainsi d'apprendre comment le CSS s'applique au HTML, et comment les conflits se résolvent.
- [CSS selectors (sélecteurs CSS)](/fr/docs/Learn/CSS/Building_blocks/Selectors)

  - : Il y a une large palette de sélecteurs CSS disponibles permettant avec une fine granularité de désigner les éléments auxquels appliquer des styles. Dans cet article, nous verrons avec moult détails comment ces différents types de sélecteurs fonctionnent, au travers de plusieurs parties :

    - [Type, class, and ID selectors](/fr/docs/Learn/CSS/Building_blocks/Selectors/Type_Class_and_ID_Selectors)
    - [Attribute selectors](/fr/docs/Learn/CSS/Building_blocks/Selectors/Attribute_selectors)
    - [Pseudo-classes and pseudo-elements](/fr/docs/Learn/CSS/Building_blocks/Selectors/Pseudo-classes_and_pseudo-elements)
    - [Combinators](/fr/docs/Learn/CSS/Building_blocks/Selectors/Combinators)

- [The box model (le modèle des boîtes)](/fr/docs/Learn/CSS/Building_blocks/The_box_model)
  - : Tout en CSS a une boîte autour de lui, et comprendre ces boîtes est la clef pour être capable de créer des mises en page avec CSS, ou d'aligner des éléments avec d'autres. Dans cette leçon, nous nous attarderons sur le modèle de boîte CSS, afin que vous puissiez passer à des mises en page plus complexes grâce à une meilleure compréhension du fonctionnement et de la terminologie.
- [Backgrounds and borders (arrières-plans et bordures)](/fr/docs/Learn/CSS/Building_blocks/Backgrounds_and_borders)
  - : Dans cette leçon, nous illustrerons des usages créatifs des arrières-plans et bordures en CSS. Des dégradés, des images de fond, des coins arrondis.... les arrières plans et les bordures sont les réponses à de nombreuses questions de style en CSS.
- [Handling different text directions (manipuler les différentes directions du texte)](/fr/docs/Learn/CSS/Building_blocks/Handling_different_text_directions)
  - : Ces dernières années, le CSS a évolué afin de permettre aux contenus de prendre des directions différentes ; pas seuleument de droite à gauche mais aussi de haut en bas (comme au Japon) ; ces différentes directions sont appelées modes d'écriture (**writing modes**). Comme vous progressez dans l'étude du CSS et commencez à travailler la mise en page, la compréhension des modes d'écriture vous sera fort utile, c'est pour cela que nous vous les présentons dans cet article. .
- [Overflowing content (quand ça dépasse)](/fr/docs/Learn/CSS/Building_blocks/Overflowing_content)
  - : Autre concept important du CSS: le dépassement (**overflow**) : c'est ce qui se passe quand il y a trop de contenu pour qu'il puisse tenir dans la boîte. Dans cette leçon, vous apprendrez comment le gérer.
- [Values and units (valeurs et unités)](/fr/docs/Learn/CSS/Building_blocks/Values_and_units)
  - : Toute propriété utilisée en CSS dispose de valeurs ou d'ensembles de valeurs autorisées pour cette propriété. Dans cette leçon, nous aborderons les valeurs et unités les plus communément utilisées.
- [Sizing items in CSS (dimensionner les éléments en CSS)](/fr/docs/Learn/CSS/Building_blocks/Sizing_items_in_CSS)
  - : Dans plusieurs leçons précédentes, vous avez abordé plusieurs façons de dimensionner de nombreux éléments d'une page web en utilisant le CSS. Comprendre pour anticiper les tailles des composants de votre design est important. Dans cette leçon nous résumerons par quels différents biais les éléments sont dimensionnés en CSS et définirons quelques termes qui vous aideront à l'avenir.
- [Images, media, and form elements (images, médias et éléments de formulaires)](/fr/docs/Learn/CSS/Building_blocks/Images_media_form_elements)
  - : Dans cet article, nous verrons comment des éléments particuliers sont traités en CSS. Les images, les autres médias, ou encore le éléments de formulaires se comportent légèrement différement des boîtes habituelles lorsque vous souhaitez leur appliquer un style CSS. Comprendre ce qu'il est possible ou non de faire vous évitera d'éventuelles déceptions cette leçon soulignera ce qu'il vous faut savoir.
- [Mise en page des tableaux](/fr/docs/Apprendre/CSS/Building_blocks/Styling_tables)
  - : Styliser un tableau HTML n'est pas le travail qui fait rêver, mais vous pouvez parfois avoir à le faire. Cet article vous guide pour réussir l'apparence de vos tableaux en soulignant les techniques spécifiques applicables.
- [Debugging CSS (déboguer le CSS)](/fr/docs/Learn/CSS/Building_blocks/Debugging_CSS)
  - : Parfois, lorsque vous écrivez du CSS, le résultat n'est pas ce que vous attendiez. Cet article vous guidera pour déboguer un problème de CSS en vous montrant comment utiliser les outils de développement contenus dans tout navigateur moderne pour vous aider à trouver ce qui se passe.
- [Organizing your CSS (organiser votre CSS)](/fr/docs/Learn/CSS/Building_blocks/Organizing)
  - : Au fur et à mesure que vous travaillerez sur des feuilles de style de plus en plus longues et des projets de plus en plus volumineux, vous découvrirez que maintenir un énorme fichier CSS peut être problématique. Dans cet article, nous aborderons les bonnes pratiques pour écrire votre CSS, le rendre facile à maintenir, et d'autres solutions pouvant vous aider à améliorer cette maintenabilité.

## Voir aussi

- [Effets de boîte avancés](/fr/docs/Apprendre/CSS/Building_blocks/Advanced_styling_effects)
  - : Cet article est un "trucs et astuces" vous fournissant un aperçu de fonctionnalités intéressantes comme l'ombre des boîtes, les mélanges de couleurs ou les filtres.
