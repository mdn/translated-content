---
title: 'Testez vos compétences : Grilles'
slug: Learn/CSS/CSS_layout/Grid_skills
translation_of: Learn/CSS/CSS_layout/Grid_skills
---
{{LearnSidebar}}

Le but de cette tâche est de vous faire travailler avec « _CSS Grid Layout_ » (modèle de disposition en grille) et d'évaluer votre compréhension du comportement d'une grille et des éléments de grille. Vous allez compléter trois petites tâches en utilisant différents éléments des grilles CSS.

> **Note :** Vous pouvez tester des solutions dans les éditeurs interactifs ci-dessous ou, si vous le préférez, sur un site comme [CodePen](https://codepen.io/), [jsFiddle](https://jsfiddle.net/) ou [Glitch](https://glitch.com/).
>
> N'hésitez pas à nous contacter si vous avez besoin d'aide — voir la section [Évaluation ou aide supplémentaire](#évaluation_ou_aide_supplémentaire) au bas de cette page.

## Disposition en grille 1

Dans cette tâche, vous devriez créer une grille dans laquelle les quatre enfants s'arrangeront automatiquement. La grille devrait répartir l'espace disponible en trois colonnes égales et avoir des «&nbsp;gouttières&nbsp;» de 20 pixels entre les colonnes et les lignes.

![Une grille à trois colonnes ayant quatre éléments.](grid-task1.png)

Essayez de mettre à jour le code ci-dessous pour recréer l'exemple terminé&nbsp;:

{{EmbedGHLiveSample("css-examples/learn/tasks/grid/grid1.html", '100%', 700)}}

> **Remarque :** Si vous voulez utiliser un autre éditeur de code, récupérez le code du [fichier de démarrage pour cette tâche (disposition en grille 1)](https://github.com/mdn/css-examples/blob/master/learn/tasks/grid/grid1-download.html).

## Disposition en grille 2

Nous avons déjà défini une grille dans cet exemple. Modifiez les règles CSS des deux enfants (`.item1` et `.item2`), chacun desquels devrait couvrir plusieurs pistes de grille — le deuxième élément devrait superposer le premier comme dans l'image ci-dessous.

![Un élément superposé sur un deuxième élément dans une boîte.](grid-task2.png)

Essayez de mettre à jour le code ci-dessous pour recréer l'exemple terminé&nbsp;:

{{EmbedGHLiveSample("css-examples/learn/tasks/grid/grid2.html", '100%', 800)}}

Questions supplémentaires&nbsp;:

- Pouvez-vous maintenant afficher le premier élément (`.item1`) en avant sans modifier l'ordre des éléments dans le code&nbsp;?

> **Remarque :** Si vous voulez utiliser un autre éditeur de code, récupérez le code du [fichier de démarrage pour cette tâche (disposition en grille 2)](https://github.com/mdn/css-examples/blob/master/learn/tasks/grid/grid2-download.html).

## Disposition en grille 3

Cette grille a quatre enfants directs — le code de démarrage affiche ces éléments en utilisant le placement automatique. Utilisez `grid-area` et `grid-template-areas` afin de les disposer comme le montre l'image ci-dessous.

![](grid-task3.png)

Essayez de mettre à jour le code ci-dessous pour recréer l'exemple terminé&nbsp;:

{{EmbedGHLiveSample("css-examples/learn/tasks/grid/grid3.html", '100%', 800)}}

> **Remarque :** Si vous voulez utiliser un autre éditeur de code, récupérez le code du [fichier de démarrage pour cette tâche (disposition en grille 3)](https://github.com/mdn/css-examples/blob/master/learn/tasks/grid/grid3-download.html).

## Mise en page avec Flexbox et grilles 4

Vous devrez utiliser Flexbox et les grilles CSS pour recréer l'exemple illustré dans l'image ci-dessous. Vous n'êtes pas obligé de modifier le code HTML pour y parvenir.

![Deux lignes de cartes, ayant chacune une image et un ensemble de tags.](grid-task4.png)

Essayez de mettre à jour le code ci-dessous pour recréer l'exemple terminé&nbsp;:

{{EmbedGHLiveSample("css-examples/learn/tasks/grid/grid4.html", '100%', 1200)}}

> **Remarque :** Si vous voulez utiliser un autre éditeur de code, récupérez le code du [fichier de démarrage pour cette tâche (mise en page avec Flexbox et Grilles 4)](https://github.com/mdn/css-examples/blob/master/learn/tasks/grid/grid4-download.html).

## Évaluation ou aide supplémentaire

Si vous souhaitez que votre travail soit évalué, ou si vous voulez demander de l'aide&nbsp;:

1. Mettez votre travail dans un éditeur partageable en ligne tel que [CodePen](https://codepen.io/), [jsFiddle](https://jsfiddle.net/) ou [Glitch](https://glitch.com/). Vous pouvez écrire votre propre code ou utiliser celui des fichiers de démarrage fournis ci-dessus.
2. Rédigez un sujet pour demander une évaluation et/ou une aide dans le [forum Discourse du MDN dans la catégorie «&nbsp;Learning&nbsp;»](https://discourse.mozilla.org/c/mdn/learn). Incluez dans votre message&nbsp;:

  - Un titre descriptif tel que «&nbsp;Évaluation demandée pour la mise en page flexible 1&nbsp;».
  - Des détails sur ce que vous souhaitez que nous fassions — par exemple, si vous êtes bloqué et avez besoin d'aide, écrivez ce que vous avez déjà essayé.
  - Un lien vers l'exemple que vous souhaitez faire évaluer ou pour lequel vous avez besoin d'aide, dans un éditeur en ligne (comme expliqué à l'étape 1). C'est une bonne pratique à adopter — il est très difficile d'aider une personne ayant un problème de codage si on ne peut pas voir son code.
  - Un lien vers la page de la tâche ou de l'évaluation proprement dite, afin que nous puissions trouver la question pour laquelle vous souhaitez de l'aide.