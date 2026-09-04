---
title: Bases de la mise en forme CSS
slug: Learn_web_development/Core/Styling_basics
l10n:
  sourceCommit: cdf7db9ffe08cb952243d7e20b9beee4e9c9451b
---

{{NextMenu("Learn_web_development/Core/Styling_basics/What_is_CSS", "Learn_web_development/Core")}}

Le CSS (Cascading Style Sheets) est utilisé pour mettre en forme et mettre en page les pages web — par exemple, pour modifier la police, la couleur, la taille et l'espacement de votre contenu, le diviser en plusieurs colonnes, ou ajouter des animations et d'autres fonctionnalités décoratives. Ce module fournit tous les fondamentaux du CSS dont vous avez besoin pour l'instant, y compris la syntaxe, les fonctionnalités et les techniques.

## Prérequis

Avant de commencer ce module, vous devez avoir un environnement de travail de base configuré (comme détaillé dans [Installation des logiciels de base](/fr/docs/Learn_web_development/Getting_started/Environment_setup/Installing_software)), et comprendre comment créer et gérer des fichiers (comme détaillé dans [Gestion des fichiers](/fr/docs/Learn_web_development/Getting_started/Environment_setup/Dealing_with_files)). Vous devez également être familiarisé avec HTML (travaillez à travers notre module [Structurer le contenu avec HTML](/fr/docs/Learn_web_development/Core/Structuring_content) si ce n'est pas le cas).

> [!NOTE]
> Si vous travaillez sur un ordinateur, une tablette ou un autre appareil où vous ne pouvez pas créer de fichiers, vous pouvez essayer d'exécuter le code dans un éditeur en ligne tel que [CodePen <sup>(angl.)</sup>](https://codepen.io/) ou [JSFiddle <sup>(angl.)</sup>](https://jsfiddle.net/).

## Tutoriels et défis

- [Qu'est-ce que le CSS&nbsp;?](/fr/docs/Learn_web_development/Core/Styling_basics/What_is_CSS)
  - : Le CSS vous permet de créer des pages web attrayantes, mais comment fonctionne-t-il en interne&nbsp;? Cet article explique ce qu'est le CSS, à quoi ressemble la syntaxe de base et comment votre navigateur applique le CSS au HTML pour le mettre en forme.
- [Commencer avec le CSS](/fr/docs/Learn_web_development/Core/Styling_basics/Getting_started)
  - : Dans cet article, nous prenons un document HTML simple et y appliquons du CSS, en apprenant quelques détails pratiques du langage en cours de route. Nous passons également en revue les fonctionnalités de syntaxe CSS que vous n'avez pas encore examinées.
- [Mettre en forme une page de biographie](/fr/docs/Learn_web_development/Core/Styling_basics/Styling_a_bio_page) <sup>Défi</sup>
  - : Dans ce défi, vous allez mettre en forme une simple page de biographie, en testant certaines des compétences que vous avez apprises dans les dernières leçons, y compris l'écriture de sélecteurs, la coloration des arrière-plans et le style du texte. Nous vous invitons également à rechercher certaines fonctionnalités CSS de base que nous n'avons pas couvertes, pour tester vos compétences en recherche.
- [Sélecteurs CSS de base](/fr/docs/Learn_web_development/Core/Styling_basics/Basic_selectors)
  - : Dans cet article, nous récapitulons certains fondamentaux des sélecteurs, y compris les sélecteurs de type, de classe et d'identifiant.
- [Sélecteurs d'attributs](/fr/docs/Learn_web_development/Core/Styling_basics/Attribute_selectors)
  - : Comme vous le savez grâce à votre étude du HTML, les éléments peuvent avoir des attributs qui donnent plus de détails sur l'élément marqué. En CSS, vous pouvez utiliser des sélecteurs d'attributs pour cibler des éléments avec certains attributs. Cette leçon vous montre comment utiliser ces sélecteurs très utiles.
- [Pseudo-classes et pseudo-éléments](/fr/docs/Learn_web_development/Core/Styling_basics/Pseudo_classes_and_elements)
  - : Le prochain ensemble de sélecteurs que nous allons examiner est appelé **pseudo-classes** et **pseudo-éléments**. Il en existe un grand nombre, et ils servent souvent des objectifs assez spécifiques. Une fois que vous savez comment les utiliser, vous pouvez parcourir les différents types pour voir s'il y a quelque chose qui fonctionne pour la tâche que vous essayez d'accomplir.
- [Sélecteurs combinés](/fr/docs/Learn_web_development/Core/Styling_basics/Combinators)
  - : Les derniers sélecteurs que nous allons examiner sont appelés sélecteurs combinés. Les sélecteurs combinés sont utilisés pour combiner d'autres sélecteurs d'une manière qui nous permet de sélectionner des éléments en fonction de leur emplacement dans le DOM par rapport à d'autres éléments (par exemple, enfant ou voisin).
- [Le modèle de boîte](/fr/docs/Learn_web_development/Core/Styling_basics/Box_model)
  - : Tout en CSS a une boîte autour de lui, et comprendre ces boîtes est essentiel pour pouvoir créer des mises en page plus complexes avec CSS, ou pour aligner des éléments avec d'autres éléments. Dans cette leçon, nous allons examiner le _modèle de boîte_ CSS. Vous comprendrez comment il fonctionne et la terminologie qui s'y rapporte.
- [Gérer les conflits](/fr/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts)
  - : L'objectif de cette leçon est de développer votre compréhension de certains des concepts les plus fondamentaux du CSS — la cascade, la spécificité et l'héritage — qui contrôlent la manière dont le CSS est appliqué au HTML et comment les conflits entre les déclarations de style sont résolus.
- [Corriger les styles de la page de blog](/fr/docs/Learn_web_development/Core/Styling_basics/Fixing_blog_styles) <sup>Défi</sup>
  - : Dans ce défi, nous vous donnons un exemple de page de blog de base partiellement stylée. Nous avons besoin que vous corrigiez certains problèmes avec le CSS existant et ajoutiez des styles pour le terminer. En cours de route, nous testons vos connaissances des sélecteurs, du modèle de boîte et des conflits/cascade.
- [Valeurs et unités](/fr/docs/Learn_web_development/Core/Styling_basics/Values_and_units)
  - : Les règles CSS contiennent des [déclarations](/fr/docs/Web/CSS/Guides/Syntax/Introduction#déclarations_css), qui sont à leur tour composées de propriétés et de valeurs. Chaque propriété utilisée en CSS a un **type de valeur** qui décrit quel type de valeurs elle est autorisée à avoir. Dans cette leçon, nous y examinons certains des types de valeurs les plus fréquemment utilisés, ce qu'ils sont et comment ils fonctionnent.
- [Dimensionner les éléments en CSS](/fr/docs/Learn_web_development/Core/Styling_basics/Sizing)
  - : Comprendre la taille des différentes fonctionnalités de votre conception est important. Dans cette leçon, nous résumons les différentes façons dont les éléments obtiennent une taille avec CSS et définissons quelques termes sur la dimension qui vous aideront à l'avenir.
- [Arrière-plans et bordures](/fr/docs/Learn_web_development/Core/Styling_basics/Backgrounds_and_borders)
  - : Dans cette leçon, nous allons examiner certaines des choses créatives que vous pouvez faire avec les arrière-plans et les bordures CSS. De l'ajout de dégradés, d'images de fond et de coins arrondis, les arrière-plans et les bordures sont la réponse à de nombreuses questions de style en CSS.
- [Défi&nbsp;: Dimensionner et décorer un panneau de contenu](/fr/docs/Learn_web_development/Core/Styling_basics/Size_decorate_content_panel) <sup>Défi</sup>
  - : Dans ce défi, vous disposez d'une structure de page légèrement stylisée qui rend un panneau de contenu, avec un en-tête en haut et une barre de boutons en bas. Nous voulons que vous suiviez les instructions pour le dimensionner et le décorer, produisant ainsi une mise en page intéressante. En cours de route, nous testons vos connaissances des valeurs et unités CSS, du dimensionnement et des arrière-plans et bordures.
- [Contenu débordant](/fr/docs/Learn_web_development/Core/Styling_basics/Overflow)
  - : Le débordement se produit lorsqu'il y a trop de contenu pour tenir à l'intérieur d'une boîte d'élément. Dans cette leçon, vous apprenez à gérer le débordement à l'aide de CSS.
- [Images, médias et éléments de formulaire](/fr/docs/Learn_web_development/Core/Styling_basics/Images_media_forms)
  - : Dans cette leçon, nous allons examiner comment certains éléments spéciaux sont traités en CSS. Les images, autres médias et éléments de formulaire se comportent un peu différemment des boîtes régulières en termes de capacité à les mettre en forme avec CSS. Comprendre ce qui est possible ou non peut éviter certaines frustrations, et cette leçon met en évidence certaines des principales choses que vous devez savoir.
- [Mettre en forme les tableaux](/fr/docs/Learn_web_development/Core/Styling_basics/Tables)
  - : Mettre en forme un tableau HTML n'est pas le travail le plus glamour du monde, mais parfois, nous devons tous le faire. Cet article explique comment rendre les tableaux HTML attrayants, avec quelques techniques spécifiques de mise en forme des tableaux mises en avant.
- [Déboguer le CSS](/fr/docs/Learn_web_development/Core/Styling_basics/Debugging_CSS)
  - : Cet article vous donne des conseils sur la manière de déboguer un problème CSS et vous montre comment les outils de développement inclus dans tous les navigateurs modernes peuvent vous aider à comprendre ce qui se passe.

## Tester vos compétences

Vous trouvez des articles «&nbsp;Tester vos compétences&nbsp;» placés entre les articles de tutoriel pour vérifier si vous avez retenu les informations les plus importantes avant de continuer. Si vous souhaitez explorer tous ces articles ensemble, vous pouvez les trouver listés à [Tester vos compétences&nbsp;: Bases du style CSS](/fr/docs/Learn_web_development/Core/Styling_basics/Test_your_skills).

## Tutoriels supplémentaires

Ces tutoriels ne font pas partie du parcours d'apprentissage principal, mais ils sont néanmoins intéressants — vous devez les considérer comme des objectifs supplémentaires, à étudier éventuellement une fois que vous avez terminé les principaux articles du Core.

- [Effets de mise en forme avancés](/fr/docs/Learn_web_development/Core/Styling_basics/Advanced_styling_effects)
  - : Cet article fait office de boîte à astuces, présentant certaines fonctionnalités avancées intéressantes en matière de mise en forme, telles que les ombres portées, les modes de fusion et les filtres.
- [Couches de la cascade](/fr/docs/Learn_web_development/Core/Styling_basics/Cascade_layers)
  - : Cette leçon vise à vous présenter les [couches de la cascade](/fr/docs/Web/CSS/Reference/At-rules/@layer), une fonctionnalité plus avancée qui s'appuie sur les concepts fondamentaux de la [cascade CSS](/fr/docs/Web/CSS/Guides/Cascade/Introduction) et de la [spécificité CSS](/fr/docs/Web/CSS/Guides/Cascade/Specificity).
- [Gérer les différentes directions de texte](/fr/docs/Learn_web_development/Core/Styling_basics/Handling_different_text_directions)
  - : Ces dernières années, CSS a évolué pour mieux prendre en charge les différentes directions de contenu, y compris de droite à gauche mais aussi de haut en bas (comme le japonais) — ces différentes directions sont appelées modes d'écriture. Au fur et à mesure de votre progression dans l'étude et que vous commencez à travailler avec la mise en page, une compréhension des modes d'écriture vous est très utile, c'est pourquoi nous les introduisons dans cet article.
- [Organisation du CSS](/fr/docs/Learn_web_development/Core/Styling_basics/Organizing)
  - : Lorsque vous commencez à travailler sur de grandes feuilles de style et de gros projets, vous découvrirez que maintenir un fichier CSS énorme peut être un défi. Dans cet article, nous y examinons brièvement certaines bonnes pratiques pour écrire votre CSS afin de le rendre facilement maintenable, ainsi que certaines des solutions utilisées par d'autres pour améliorer la maintenabilité.

## Voir aussi

- [Apprendre le HTML et le CSS <sup>(angl.)</sup>](https://scrimba.com/learn-html-and-css-c0p?via=mdn), Scrimba <sup>[_Partenaire d'apprentissage MDN_](/fr/docs/MDN/Writing_guidelines/Learning_content#liens_partenaires_et_intégrations)</sup>
  - : Le cours [Scrimba <sup>(angl.)</sup>](https://scrimba.com/?via=mdn) _Apprendre le HTML et le CSS_ enseigne le HTML et le CSS à travers la création et le déploiement de cinq projets impressionnants, avec des leçons interactives amusantes et des défis enseignés par des enseignants compétents.
- [Écrivez vos premières lignes de CSS&nbsp;! <sup>(angl.)</sup>](https://scrimba.com/the-frontend-developer-career-path-c0j/~015?via=mdn), Scrimba <sup>[_Partenaire d'apprentissage MDN_](/fr/docs/MDN/Writing_guidelines/Learning_content#liens_partenaires_et_intégrations)</sup>
  - : Cette leçon interactive fournit une introduction utile à la syntaxe CSS.

{{NextMenu("Learn_web_development/Core/Styling_basics/What_is_CSS", "Learn_web_development/Core")}}
