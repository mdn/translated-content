---
title: 'Testez vos compétences : l''accessibilité en CSS et JavaScript'
slug: >-
  Learn/Accessibility/CSS_and_JavaScript/Test_your_skills:_CSS_and_JavaScript_accessibility
tags:
  - Accessibility
  - Assessment
  - Beginner
  - HTML
  - JavaScript
  - Learn
  - test your skills
---
{{LearnSidebar}}

L'objectif de ce test de connaissances est d'évaluer si vous maîtrisez les [meilleures pratiques d'accessibilité en CSS et en JavaScript](/fr/docs/Learn/Accessibility/CSS_and_JavaScript).

> **Note :** Vous pouvez tester les solutions dans les éditeurs interactifs ci-dessous, cependant il peut être plus utile de télécharger le code et d'utiliser un outil en ligne comme [CodePen](https://codepen.io/), [jsFiddle](https://jsfiddle.net/) ou [Glitch](https://glitch.com/) pour travailler sur les exercices suivants.
>
> Si vous bloquez, demandez-nous de l'aide — plus d'informations dans la section [Évaluation ou aide supplémentaire](#assessment_or_further_help) en bas de la page.

## Accessibilité en CSS - Exercice 1

Dans ce premier exercice, vous trouverez une liste de liens. Toutefois, leur accessibilité est assez mauvaise — impossible de savoir si ce sont effectivement des liens, ou encore de savoir lequel d'entre eux l'utilisateur survole.

Vous pouvez partir du principe que l'ensemble des règles associées au sélecteur `a` sont fournies par un CMS, et qu'il vous est impossible de le modifier. Vous devrez donc créer de nouvelles règles pour permettre aux liens d'apparaître et de se comporter comme des liens, et permettre à l'utilisateur de savoir où il se trouve dans la liste.

Essayez de mettre à jour le code direct ci-dessous pour reproduire l'exemple final :

{{EmbedGHLiveSample("learning-area/accessibility/tasks/html-css/css/css-a11y1.html", '100%', 700)}}

> **Note :** [Télécharger le code de départ de cet exercice](https://github.com/mdn/learning-area/blob/master/accessibility/tasks/html-css/css/css-a11y1-download.html) pour travailler dessus dans votre propre éditeur ou avec un éditeur en ligne.

## Accessibilité en CSS - Exercice 2

Dans ce nouvel exercice, vous démarrez avec une petite portion de contenu : de simples titres et paragraphes. On constate des problèmes d'accessibilité avec les couleurs et la taille du texte. Nous vous demandons de :

1.  Expliquez quels sont les problèmes et quelles sont les règles à suivre définissant les valeurs acceptables en termes de couleurs et de taille.
2.  Choisir de nouvelles valeurs en termes de couleur et de taille de police pour corriger ce problème.
3.  Mettre à jour le code CSS avec ces nouvelles valeurs pour résoudre le problème.
4.  Tester le code pour s'assurer que le problème est désormais résolu. Décrivez quels outils ou méthodes vous avez utilisé pour choisir les nouvelles valeurs et tester le code.

Essayez de mettre à jour le code en direct ci-dessous pour reproduire l'exemple fini :

{{EmbedGHLiveSample("learning-area/accessibility/tasks/html-css/css/css-a11y2.html", '100%', 700)}}

> **Note :** [Télécharger le code de départ de cet exercice](https://github.com/mdn/learning-area/blob/master/accessibility/tasks/html-css/css/css-a11y2-download.html) pour travailler dessus dans votre propre éditeur ou avec un éditeur en ligne.

## Accessibilité en JavaScript - Exercice 1

Dans ce dernier exercice, vous avez un peu de JavaScript à écrire. Vous avez une application très simple qui affiche une liste de noms d'animaux. Cliquer sur l'un des noms d'animaux fait apparaître une description plus détaillée de l'animal dans un cadre sous la liste.

Ce n'est hélas pas très accessible — dans l'état actuel des choses vous pouvez seulement utiliser la souris. Nous aimerions que vous ajoutiez du code HTML et JavaScript de façon à rendre l'application également utilisable avec un clavier.

> **Note :** [Télécharger le code de départ de cet exercice](https://github.com/mdn/learning-area/blob/master/accessibility/tasks/js/js/js1-download.html) pour travailler dessus dans votre propre éditeur ou avec un éditeur en ligne.

## Évaluation ou aide supplémentaire

Vous pouvez vous entraîner avec ces exemples dans les Éditeurs Interactifs ci-dessus.

Si vous souhaitez obtenir une évaluation de votre travail, ou si vous bloquez et que vous souhaitez obtenir de l'aide :

1.  Publiez votre travail dans un éditeur en ligne partageable, comme [CodePen](https://codepen.io/), [jsFiddle](https://jsfiddle.net/) ou [Glitch](https://glitch.com/). Vous pouvez soit écrire le code vous-même, soit utiliser les fichiers de départ via les liens présents dans les sections ci-dessus.
2.  Écrivez un message pour demander une évaluation et/ou de l'aide dans la [catégorie Apprentissage (Learning) du forum de discussion de MDN](https://discourse.mozilla.org/c/mdn/learn). Votre message doit comprendre :

    - Un titre explicite, par exemple « Évaluation souhaitée pour le test d'Accessibilité CSS 1 ».
    - Des détails sur ce que vous avez déjà tenté, et ce que vous aimeriez que nous fassions, c'est-à-dire si vous bloquez et que vous avez besoin d'aide, ou si vous souhaitez qu'on évalue votre travail.
    - Un lien vers l'exemple que vous souhaitez voir évalué ou sur lequel vous avez besoin d'aide, dans un éditeur en ligne partageable (comme précisé dans le point 1 ci-dessus). C'est une bonne pratique à adopter : il est très difficile d'aider quelqu'un à résoudre un problème de code si vous ne pouvez pas voir le code en question!
    - Un lien vers l'exercice en cours ou vers la page d'évaluation, de façon à ce que nous puissions trouver la question sur laquelle vous avez besoin d'un coup de main.
