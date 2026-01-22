---
title: "CSS : Feuilles de style en cascade"
short-title: CSS
slug: Web/CSS
l10n:
  sourceCommit: 04158640487c17d515de8078c9307a2f906377d0
---

**CSS** (pour <i lang="en">Cascading Style Sheets</i> en anglais), soit **feuilles de style en cascade**, est un langage de [feuille de style](/fr/docs/Web/API/StyleSheet) utilisé pour décrire la présentation d'un document écrit en [HTML](/fr/docs/Web/HTML) ou [XML](/fr/docs/Web/XML/Guides/XML_introduction) (y compris les dialects XML que sont [SVG](/fr/docs/Web/SVG), [MathML](/fr/docs/Web/MathML), ou [XHTML](/fr/docs/Glossary/XHTML)). CSS décrit la façon dont les éléments doivent être affichés à l'écran, sur papier, à l'oral ou sur d'autres médias.

CSS est l'un des langages principaux du **Web ouvert** et a été standardisé [par le W3C <sup>(angl.)</sup>](https://w3.org/Style/CSS/#specs). Auparavant, le développement des différentes parties de la spécification CSS était réalisé de façon synchrone, permettant d'avoir une version pour l'ensemble de la recommandation. Vous avez donc pu entendre parler de CSS1, CSS2.1, voire CSS3. Toutefois, il n'y aura pas de version CSS4 ou d'autres version globale numérotée de CSS.

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

## Référence

La [référence CSS](/fr/docs/Web/CSS/Reference) est une ressource exhaustive pour les développeur·euse·s web expérimenté·e·s, décrivant chaque propriété et concept de CSS, notamment&nbsp;:

- La [syntaxe et les formes du langage](/fr/docs/Web/CSS/Guides/Syntax/Introduction)
- [Spécificité](/fr/docs/Web/CSS/Guides/Cascade/Specificity), [héritage](/fr/docs/Web/CSS/Guides/Cascade/Inheritance) et [cascade](/fr/docs/Web/CSS/Guides/Cascade/Introduction)
- [Sélecteurs CSS](/fr/docs/Web/CSS/Guides/Selectors), dont les [pseudo-éléments](/fr/docs/Web/CSS/CSS_pseudo-elements), [imbrication](/fr/docs/Web/CSS/CSS_nesting), [portée](/fr/docs/Web/CSS/CSS_scoping) et [parties d'ombre](/fr/docs/Web/CSS/CSS_shadow_parts)
- [Règles CSS](/fr/docs/Web/CSS/Guides/Syntax/At-rules), dont les [requêtes média](/fr/docs/Web/CSS/Guides/Media_queries) et les [requêtes de conteneur](/fr/docs/Web/CSS/Guides/Containment)
- Le module des [valeurs et unités CSS](/fr/docs/Web/CSS/Guides/Values_and_units), dont les [types de données numériques](/fr/docs/Web/CSS/Guides/Values_and_units/Numeric_data_types), [types de données textuelles](/fr/docs/Web/CSS/Guides/Values_and_units/Textual_data_types) et [notations fonctionnelles](/fr/docs/Web/CSS/Reference/Values/Functions)
- Le [modèle de boîte](/fr/docs/Web/CSS/Guides/Box_model/Introduction) et la [fusion des marges](/fr/docs/Web/CSS/Guides/Box_model/Margin_collapsing)
- [Bloc englobant](/fr/docs/Web/CSS/Guides/Display/Containing_block)
- Contextes de [superposition](/fr/docs/Web/CSS/Guides/Positioned_layout/Stacking_context) et de [formatage de bloc](/fr/docs/Web/CSS/Guides/Display/Block_formatting_context)
- Valeurs [initiale](/fr/docs/Web/CSS/Guides/Cascade/Property_value_processing#initial_value), [calculée](/fr/docs/Web/CSS/Guides/Cascade/Property_value_processing#computed_value), [utilisée](/fr/docs/Web/CSS/Guides/Cascade/Property_value_processing#used_value) et [réelle](/fr/docs/Web/CSS/Guides/Cascade/Property_value_processing#actual_value)
- Les [propriétés raccourcies CSS](/fr/docs/Web/CSS/Guides/Cascade/Shorthand_properties)
- Mise en page de [boîte flexible](/fr/docs/Web/CSS/Guides/Flexible_box_layout), [multi-colonnes](/fr/docs/Web/CSS/Guides/Multicol_layout) et [grille](/fr/docs/Web/CSS/Guides/Grid_layout)
- [Animations](/fr/docs/Web/CSS/Guides/Animations), [transitions](/fr/docs/Web/CSS/Guides/Transitions) et [transformations](/fr/docs/Web/CSS/Guides/Transforms)

## Recettes CSS

Le [cookbook de mise en page CSS](/fr/docs/Web/CSS/How_to/Layout_cookbook) vise à rassembler des recettes pour les schémas de mise en page courants, utiles à implémenter sur vos sites. En plus de fournir du code à utiliser comme point de départ dans vos projets, ces recettes mettent en avant les différentes façons d'utiliser les spécifications de mise en page et les choix que vous pouvez faire en tant que développeur·euse.

## Outils pour le développement CSS

- Vous pouvez utiliser le [Service de validation CSS du W3C <sup>(angl.)</sup>](https://jigsaw.w3.org/css-validator/) pour vérifier la validité de votre CSS. C'est un outil de débogage précieux.
- Les [outils de développement de Firefox <sup>(angl.)</sup>](https://firefox-source-docs.mozilla.org/devtools-user/index.html) vous permettent de visualiser et d'éditer le CSS en direct d'une page via les outils [Inspecteur <sup>(angl.)</sup>](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/index.html) et [Éditeur de style <sup>(angl.)</sup>](https://firefox-source-docs.mozilla.org/devtools-user/style_editor/index.html).
- L'[extension Web Developer](https://addons.mozilla.org/fr/firefox/addon/web-developer/) pour Firefox vous permet de suivre et d'éditer le CSS en direct sur les sites surveillés.

## Bugs meta

- Firefox&nbsp;: [Bug Firefox 1323667](https://bugzil.la/1323667)

## Voir aussi

- Langages web auxquels CSS est souvent appliqué&nbsp;: [HTML](/fr/docs/Web/HTML), [SVG](/fr/docs/Web/SVG), [MathML](/fr/docs/Web/MathML), {{Glossary("XHTML")}} et [XML](/fr/docs/Web/XML/Guides/XML_introduction).
- [Questions Stack Overflow sur CSS <sup>(angl.)</sup>](https://stackoverflow.com/questions/tagged/css)
