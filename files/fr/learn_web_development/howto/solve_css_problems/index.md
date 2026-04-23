---
title: Résoudre les problèmes CSS courants
short-title: Problèmes CSS courants
slug: Learn_web_development/Howto/Solve_CSS_problems
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Cette page regroupe des questions, réponses et autres ressources du site MDN qui peuvent vous aider à résoudre les problèmes CSS courants.

## Mettre en forme des boîtes

- [Comment ajouter une ombre portée à un élément&nbsp;?](/fr/docs/Learn_web_development/Howto/Solve_CSS_problems/Add_a_shadow)
  - : Les ombres peuvent être ajoutées aux boîtes avec la propriété {{CSSxRef("box-shadow")}}. Ce tutoriel explique son fonctionnement et donne un exemple.
- [Comment remplir une boîte avec une image sans la déformer&nbsp;?](/fr/docs/Learn_web_development/Howto/Solve_CSS_problems/Fill_a_box_with_an_image)
  - : La propriété {{CSSxRef("object-fit")}} propose différentes façons d'adapter une image à une boîte ayant un {{Glossary("aspect ratio", "rapport d'aspect")}} différent, et ce tutoriel explique comment les utiliser.
- [Quelles méthodes peut-on utiliser pour mettre en forme des boîtes&nbsp;?](/fr/docs/Learn_web_development/Howto/Solve_CSS_problems/Create_fancy_boxes)
  - : Un aperçu des différentes propriétés utiles pour mettre en forme des boîtes en CSS.
- [Comment rendre des éléments semi-transparents&nbsp;?](/fr/docs/Learn_web_development/Howto/Solve_CSS_problems/Make_box_transparent)
  - : La propriété {{CSSxRef("opacity")}} et les couleurs avec canal alpha peuvent être utilisées&nbsp;; découvrez laquelle utiliser selon le cas.

### Leçons et guides sur la mise en forme des boîtes

- [Le modèle de boîte](/fr/docs/Learn_web_development/Core/Styling_basics/Box_model)
- [Mettre en forme les arrière-plans et bordures](/fr/docs/Learn_web_development/Core/Styling_basics/Backgrounds_and_borders)

## CSS et texte

- [Comment ajouter une ombre portée au texte&nbsp;?](/fr/docs/Learn_web_development/Howto/Solve_CSS_problems/Add_a_text_shadow)
  - : Les ombres peuvent être ajoutées au texte avec la propriété {{CSSxRef("text-shadow")}}. Ce tutoriel explique son fonctionnement et donne un exemple.
- [Comment mettre en surbrillance la première ligne d'un paragraphe&nbsp;?](/fr/docs/Learn_web_development/Howto/Solve_CSS_problems/Highlight_first_line)
  - : Découvrez comment cibler la première ligne d'un paragraphe avec le pseudo-élément {{CSSxRef("::first-line")}}.
- [Comment mettre en surbrillance le premier paragraphe d'un article&nbsp;?](/fr/docs/Learn_web_development/Howto/Solve_CSS_problems/Highlight_first_para)
  - : Découvrez comment cibler le premier paragraphe avec la pseudo-classe {{CSSxRef(":first-child")}}.
- [Comment mettre en surbrillance un paragraphe uniquement s'il suit un titre&nbsp;?](/fr/docs/Learn_web_development/Howto/Solve_CSS_problems/Highlight_para_after_h1)
  - : Les combinateurs permettent de cibler précisément des éléments selon leur position dans le document&nbsp;; ce tutoriel explique comment les utiliser pour appliquer du CSS à un paragraphe uniquement s'il suit immédiatement un titre.

### Leçons et guides sur la mise en forme du texte

- [Comment mettre en forme le texte](/fr/docs/Learn_web_development/Core/Text_styling/Fundamentals)
- [Comment personnaliser une liste d'éléments](/fr/docs/Learn_web_development/Core/Text_styling/Styling_lists)
- [Comment mettre en forme les liens](/fr/docs/Learn_web_development/Core/Text_styling/Styling_links)
- [Sélecteurs CSS](/fr/docs/Learn_web_development/Core/Styling_basics/Basic_selectors)

## Mise en page CSS

- [Comment centrer un élément&nbsp;?](/fr/docs/Learn_web_development/Howto/Solve_CSS_problems/Center_an_item)
  - : Centrer un élément dans une boîte horizontalement et verticalement était autrefois complexe, mais flexbox rend cela simple.

### Guides de mise en page

- [Utiliser le flexbox CSS](/fr/docs/Web/CSS/Guides/Flexible_box_layout/Basic_concepts)
- [Utiliser les colonnes multiples en CSS](/fr/docs/Web/CSS/Guides/Multicol_layout/Using)
- [Utiliser la grille CSS](/fr/docs/Web/CSS/Guides/Grid_layout/Basic_concepts)
- [Utiliser le contenu généré en CSS](/fr/docs/Learn_web_development/Howto/Solve_CSS_problems/Generated_content)

> [!NOTE]
> Nous avons un livre de recettes dédié aux [solutions de mise en page CSS](/fr/docs/Web/CSS/How_to/Layout_cookbook), avec des exemples complets et des explications sur les tâches de mise en page courantes. Consultez aussi [Exemples pratiques de positionnement](/fr/docs/Learn_web_development/Core/CSS_layout/Practical_positioning_examples), qui montre comment utiliser le positionnement pour créer un onglet d'informations ou un panneau coulissant caché.
