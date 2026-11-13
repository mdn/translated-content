---
title: "CSS : Feuilles de style en cascade"
short-title: CSS
slug: Web/CSS
l10n:
  sourceCommit: 423161782178b119c64cd0b41bff8df20dc84a56
---

**CSS** (pour <i lang="en">Cascading Style Sheets</i> en anglais), soit **feuilles de style en cascade**, est un langage de [feuille de style](/fr/docs/Web/API/StyleSheet) utilisé pour décrire la présentation d'un document écrit en [HTML](/fr/docs/Web/HTML) ou [XML](/fr/docs/Web/XML/Guides/XML_introduction) (y compris les dialects XML que sont [SVG](/fr/docs/Web/SVG), [MathML](/fr/docs/Web/MathML), ou {{Glossary("XHTML")}}). CSS décrit la façon dont les éléments doivent être affichés à l'écran, sur papier, à l'oral ou sur d'autres médias.

CSS est l'un des langages principaux du **Web ouvert** et a été standardisé [par le W3C <sup>(angl.)</sup>](https://w3.org/Style/CSS/#specs). Auparavant, le développement des différentes parties de la spécification CSS était réalisé de façon synchrone, permettant d'avoir une version pour l'ensemble de la recommandation. Vous avez donc pu entendre parler de CSS1, CSS2.1, voire CSS3. Il n'y aura jamais de CSS3 ou de CSS4&nbsp;; désormais, tout est simplement «&nbsp;CSS&nbsp;» avec des modules CSS individuels ayant des numéros de version.

En effet, après CSS 2.1, la portée de la spécification a augmenté significativement et les avancées sur les différents modules CSS ont commencé à diverger, et il est alors devenu plus efficace de [développer et diffuser les recommandations par module <sup>(angl.)</sup>](https://www.w3.org/Style/CSS/current-work). Plutôt que d'avoir une version globale de la spécification CSS, le W3C collecte désormais de façon périodique un instantané du [dernier état stable de la spécification CSS <sup>(angl.)</sup>](https://www.w3.org/TR/css/) et de l'avancée de chaque module. Les modules de spécification CSS ont un numéro de version, appelé niveau, comme [le module de spécification CSS sur les couleurs de niveau 5 <sup>(angl.)</sup>](https://drafts.csswg.org/css-color-5/).

## Tutoriels pour les débutant·e·s

Nos [modules de base pour apprendre le développement web](/fr/docs/Learn_web_development/Core) proposent des tutoriels modernes et à jour couvrant les fondamentaux de CSS.

- [Votre premier site&nbsp;: Mettre en forme le contenu](/fr/docs/Learn_web_development/Getting_started/Your_first_website/Styling_the_content)
  - : Cet article propose une brève présentation de ce qu'est CSS et de son utilisation, à destination des personnes totalement débutantes en développement web.
- [Bases de la présentation CSS](/fr/docs/Learn_web_development/Core/Styling_basics)
  - : Ce module fournit tous les fondamentaux de CSS dont vous aurez besoin pour commencer à apprendre la technologie efficacement, y compris la syntaxe, les fonctionnalités et les techniques.
- [Présentation du texte en CSS](/fr/docs/Learn_web_development/Core/Text_styling)
  - : Ici, nous examinons les fondamentaux du texte en CSS, y compris la définition de la police, du gras, de l'italique, de l'espacement des lignes et des lettres, et des ombres portées. Nous terminons le module en examinant l'application de polices personnalisées à votre page, ainsi que le style des listes et des liens.
- [Mise en page CSS](/fr/docs/Learn_web_development/Core/CSS_layout)
  - : Ce module examine les flottants, le positionnement, d'autres outils de mise en page modernes, et la création de conceptions réactives qui s'adapteront à différents appareils, tailles d'écran et résolutions.

## Guides

Les guides CSS sont organisés par modules et sont là pour vous aider à apprendre ce que vous pouvez réaliser avec CSS. Parcourez la liste complète des [guides CSS](/fr/docs/Web/CSS/Guides), qui inclut des sujets tels que&nbsp;:

- [La syntaxe CSS](/fr/docs/Web/CSS/Guides/Syntax/Introduction) incluant les déclarations et les règles.
- [La spécificité](/fr/docs/Web/CSS/Guides/Cascade/Specificity), [l'héritage](/fr/docs/Web/CSS/Guides/Cascade/Inheritance) et [la cascade](/fr/docs/Web/CSS/Guides/Cascade/Introduction)
- [L'imbrication](/fr/docs/Web/CSS/Guides/Nesting), [la portée](/fr/docs/Web/CSS/Guides/Scoping) et [les parties d'ombre](/fr/docs/Web/CSS/Guides/Shadow_parts)
- Les [requêtes média](/fr/docs/Web/CSS/Guides/Media_queries) et les [requêtes de conteneur](/fr/docs/Web/CSS/Guides/Containment)
- Les types de données [numériques](/fr/docs/Web/CSS/Guides/Values_and_units/Numeric_data_types) et [textuelles](/fr/docs/Web/CSS/Guides/Values_and_units/Textual_data_types)
- Le [modèle de boîte](/fr/docs/Web/CSS/Guides/Box_model/Introduction) et la [fusion des marges](/fr/docs/Web/CSS/Guides/Box_model/Margin_collapsing)
- [Bloc englobant](/fr/docs/Web/CSS/Guides/Display/Containing_block)
- Les contextes de [superposition](/fr/docs/Web/CSS/Guides/Positioned_layout/Stacking_context) et de [formatage de bloc](/fr/docs/Web/CSS/Guides/Display/Block_formatting_context)
- [Le traitement des valeurs des propriétés](/fr/docs/Web/CSS/Guides/Cascade/Property_value_processing)
- [Les propriétés raccourcies](/fr/docs/Web/CSS/Guides/Cascade/Shorthand_properties)
- La mise en page de [boîte flexible](/fr/docs/Web/CSS/Guides/Flexible_box_layout), [multi-colonnes](/fr/docs/Web/CSS/Guides/Multicol_layout) et [grille](/fr/docs/Web/CSS/Guides/Grid_layout)
- Les [animations](/fr/docs/Web/CSS/Guides/Animations), [transitions](/fr/docs/Web/CSS/Guides/Transitions) et [transformations](/fr/docs/Web/CSS/Guides/Transforms)

## Comment faire ?

- [Le livre de recettes de mise en page CSS](/fr/docs/Web/CSS/How_to/Layout_cookbook)
  - : Les recettes pour les schémas de mise en page courants que vous pourriez avoir besoin d'implémenter sur vos sites. Ces recettes fournissent du code que vous pouvez utiliser comme point de départ dans vos projets. Elles mettent également en évidence les différentes façons dont les spécifications de mise en page peuvent être utilisées et les choix que vous pouvez faire en tant que développeur·euse.

## Outils

- [Générateur d'images de bordure](/fr/docs/Web/CSS/Guides/Backgrounds_and_borders/Border-image_generator)
  - : Générer des valeurs CSS pour {{CSSxRef("border-image")}}.
- [Générateur de bordures arrondies](/fr/docs/Web/CSS/Guides/Backgrounds_and_borders/Border-radius_generator)
  - : Générer des effets CSS pour {{CSSxRef("border-radius")}}.
- [Générateur d'ombres de boîte](/fr/docs/Web/CSS/Guides/Backgrounds_and_borders/Box-shadow_generator)
  - : Ajouter des effets {{CSSxRef("box-shadow")}} à vos objets CSS.
- [Convertisseur de format de couleur](/fr/docs/Web/CSS/Guides/Colors/Color_format_converter)
  - : Entrez ou choisissez une couleur et copiez sa valeur correspondante dans n'importe quel [format de couleur CSS](/fr/docs/Web/CSS/Reference/Values/color_value).
- [Mélangeur de couleurs](/fr/docs/Web/CSS/Guides/Colors/Color_mixer)
  - : Mélangez deux couleurs dans n'importe quel espace colorimétrique en utilisant la fonction {{CSSxRef("color_value/color-mix", "color-mix()")}} et copiez la couleur résultante dans n'importe quel format de couleur CSS.
- [Générateur de formes](/fr/docs/Web/CSS/Guides/Shapes/Shape_generator)
  - : Définir les coordonnées et la syntaxe pour les fonctionnalités {{CSSxRef("basic-shape")}}.

Vous pouvez également utiliser les ressources suivantes&nbsp;:

- [Le service de validation CSS du W3C <sup>(angl.)</sup>](https://jigsaw.w3.org/css-validator/)&nbsp;: pour vérifier la validité de votre CSS. C'est un outil de débogage précieux.
- [Les outils de développement de Firefox <sup>(angl.)</sup>](https://firefox-source-docs.mozilla.org/devtools-user/index.html)&nbsp;: vous permettent de visualiser et d'éditer le CSS en direct d'une page via les outils [Inspecteur <sup>(angl.)</sup>](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/index.html) et [Éditeur de style <sup>(angl.)</sup>](https://firefox-source-docs.mozilla.org/devtools-user/style_editor/index.html).
- [L'extension Web Developer](https://addons.mozilla.org/fr/firefox/addon/web-developer/)&nbsp;: pour Firefox vous permet de suivre et d'éditer le CSS en direct sur les sites surveillés.

## Référence

Parcourez la documentation complète de la [référence CSS](/fr/docs/Web/CSS/Reference).

- [Propriétés CSS](/fr/docs/Web/CSS/Reference/Properties)
  - : Référence pour toutes les propriétés CSS.
- [Sélecteurs CSS](/fr/docs/Web/CSS/Reference/Selectors)
  - : Référence pour les sélecteurs CSS, les [combinateurs](/fr/docs/Web/CSS/Reference/Selectors/Combinators), les [pseudo-classes](/fr/docs/Web/CSS/Reference/Selectors/Pseudo-classes) et les [pseudo-éléments](/fr/docs/Web/CSS/Reference/Selectors/Pseudo-elements).
- [Règles CSS](/fr/docs/Web/CSS/Reference/At-rules)
  - : Référence pour les règles @ CSS, y compris les requêtes média.
- [Valeurs CSS](/fr/docs/Web/CSS/Reference/Values)
  - : Référence pour les mots-clés CSS, les [types de données](/fr/docs/Web/CSS/Reference/Values/Data_types) et les [fonctions](/fr/docs/Web/CSS/Reference/Values/Functions).

## Voir aussi

- Langages web auxquels CSS est souvent appliqué&nbsp;: [HTML](/fr/docs/Web/HTML), [SVG](/fr/docs/Web/SVG), [MathML](/fr/docs/Web/MathML), {{Glossary("XHTML")}} et [XML](/fr/docs/Web/XML/Guides/XML_introduction).
- [Questions Stack Overflow sur CSS <sup>(angl.)</sup>](https://stackoverflow.com/questions/tagged/css)
