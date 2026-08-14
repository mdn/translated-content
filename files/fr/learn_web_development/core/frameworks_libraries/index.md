---
title: Cadriciels et bibliothèques JavaScript
slug: Learn_web_development/Core/Frameworks_libraries
l10n:
  sourceCommit: 238b07dfeb8c347c590bd02a63140867525d511c
---

{{NextMenu("Learn_web_development/Core/Frameworks_libraries/Introduction", "Learn_web_development/Core")}}

Les cadriciels (<i lang="en">frameworks</i> en anglais) JavaScript sont une partie essentielle du développement web front-end moderne, fournissant aux développeur·euse·s des outils éprouvés pour construire des applications web évolutives et interactives. De nombreuses entreprises modernes utilisent des cadriciels comme un élément normé de leur outillage, de sorte que de nombreux emplois de développement front-end requièrent désormais une expérience avec ces cadriciels.

En tant que futur·e développeur·euse front-end, il peut être difficile de savoir par où commencer lors de l'apprentissage des cadriciels&nbsp;: il y a tant de cadriciels si différents les uns des autres et de nouveaux qui apparaissent sans cesse, ils fonctionnent généralement de manière similaire mais font certaines choses différemment, et il y a certaines choses spécifiques à avoir en tête lors de leur utilisation.

Dans cet ensemble d'articles, nous cherchons à vous donner un point de départ confortable pour vous aider à commencer votre apprentissage des cadriciels. Nous ne visons pas à vous enseigner exhaustivement tout ce que vous devez savoir sur React / ReactDOM, ou n'importe quel autre cadriciel particulier&nbsp;: les documentations fournies par les équipes de développement des cadriciels font déjà ce travail. Nous souhaitons plutôt faire simple et répondre d'abord à des questions plus fondamentales telles que&nbsp;:

- Pourquoi devrais-je utiliser un cadriciel&nbsp;? Quels problèmes résolvent-ils pour moi&nbsp;?
- Quelles questions devrais-je me poser pour choisir un cadriciel&nbsp;? Ai-je au moins besoin d'un cadriciel&nbsp;?
- Quelles fonctionnalités proposent les cadriciels&nbsp;? Comment fonctionnent-ils en général et comment diffèrent leurs implantations de ces fonctionnalités&nbsp;?
- Comment se rapportent-ils au JavaScript «&nbsp;vanilla&nbsp;» ou à l'HTML&nbsp;?

Après ceci, nous vous fournissons quelques tutoriels couvrant les notions fondamentales de certains des principaux cadriciels afin de vous fournir suffisamment de contexte et de familiarité pour commencer à approfondir par vous-même. Nous voulons que vous puissiez progresser et en apprendre plus sur les cadriciels de manière pragmatique sans oublier les bonnes pratiques fondamentales du web telles que l'accessibilité.

> [!NOTE]
> Le tutoriel interactif [Bibliothèques/Cadriciels <sup>(angl.)</sup>](https://scrimba.com/learn-react-c0e/~033a?via=mdn) de Scrimba <sup>[_Partenaire d'apprentissage MDN_](/fr/docs/MDN/Writing_guidelines/Learning_content#liens_partenaires_et_intégrations)</sup> propose un résumé utile des cadriciels par rapport aux bibliothèques, un bref historique des bibliothèques et cadriciels sur le web, ainsi que des informations de contexte spécifiques à React.

## Prérequis

Vous devez vraiment connaître les bases des principaux langages du web ([HTML](/fr/docs/Learn_web_development/Core/Structuring_content), [CSS](/fr/docs/Learn_web_development/Core/Styling_basics), et particulièrement [JavaScript](/fr/docs/Learn_web_development/Core/Scripting)) avant d'essayer de vous lancer dans l'apprentissage des cadriciels côté client.

Votre code n'en est que de meilleure qualité et plus professionnel, et vous êtes en mesure de résoudre vos problèmes avec plus de confiance si vous comprenez les fonctionnalités fondamentales du web sur lesquelles les cadriciels s'appuient.

## Guides d'introduction

- [Introduction aux cadriciels côté client](/fr/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Introduction)
  - : Nous commençons notre aperçu des cadriciels par un tour d'horizon général du domaine, notamment en regardant un bref historique de JavaScript et des cadriciels, la raison pour laquelle les cadriciels existent et ce qu'ils nous proposent, comment commencer à réfléchir au choix d'un cadriciel à apprendre et quelles alternatives il y a aux cadriciels côté client.
- [Principales caractéristiques du Framework](/fr/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Main_features)
  - : Chaque cadriciel JavaScript majeur a une approche différente de la mise à jour du DOM, de la gestion des évènements du navigateur et de la manière dont rendre l'expérience de développement agréable. Cet article explore les principales caractéristiques des 4 grands cadriciels, en examinant comment les cadriciels ont tendance à fonctionner à un haut niveau et les différences entre eux.

## Tutoriels sur React

> [!NOTE]
> Les tutoriels sur React ont été essayés pour la dernière fois en janvier 2023, avec React/ReactDOM 18.2.0 et create-react-app 5.0.1.
>
> Si vous avez besoin de vérifier votre code par rapport à notre version, vous pouvez trouver une version finale de l'exemple de code d'application React dans notre [dépôt todo-react <sup>(angl.)</sup>](https://github.com/mdn/todo-react). Pour une version exécutable en direct, voir <https://mdn.github.io/todo-react/>.

- [Premier pas avec React](/fr/docs/Learn_web_development/Core/Frameworks_libraries/React_getting_started)
  - : Dans cet article, nous disons bonjour à React. Nous découvrons les prémices de son fonctionnement et de ses cas d'utilisation, configurons une chaîne d'outils React de base sur notre ordinateur local et créons et jouons avec une application de démarrage simple, en apprenant un peu plus sur le fonctionnement de React dans le processus.
- [Début de notre liste de tâches React](/fr/docs/Learn_web_development/Core/Frameworks_libraries/React_todo_list_beginning)
  - : Supposons que nous ayons été chargé·e·s de créer une preuve de concept dans React — une application qui permet aux utilisateur·ice·s d'ajouter, de modifier et de supprimer les tâches sur lesquelles ils souhaitent travailler, ainsi que de marquer les tâches comme terminées sans les supprimer. Cet article vous guide tout au long de la mise en place de la structure et du style des composants de base de l'application, prêts pour la définition et l'interactivité des composants individuels, que nous ajoutons plus tard.
- [Diviser notre application React en composants](/fr/docs/Learn_web_development/Core/Frameworks_libraries/React_components)
  - : À ce stade, notre application est un monolithe. Avant de pouvoir lui faire faire des choses, nous devons le diviser en composants descriptifs gérables. React n'a pas de règles strictes pour ce qui est et n'est pas un composant&nbsp;: c'est à vous de décider&nbsp;! Dans cet article, nous allons vous montrer un moyen judicieux de diviser notre application en composants.
- [Interactivité de React&nbsp;: évènements et états](/fr/docs/Learn_web_development/Core/Frameworks_libraries/React_interactivity_events_state)
  - : Une fois notre plan de composants élaboré, il est maintenant temps de commencer à faire évoluer notre application d'une interface utilisateur complètement statique vers une interface qui nous permet réellement d'interagir et de modifier des choses. Dans cet article, nous allons le faire, en explorant les évènements et les états en cours de route.
- [Interactivité de React&nbsp;: modification, filtrage, rendu conditionné](/fr/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_interactivity_filtering_conditional_rendering)
  - : Alors que nous approchons de la fin de notre voyage React (pour l'instant du moins), nous ajoutons la touche finale aux principaux domaines de fonctionnalités de notre application de liste de tâches. Cela comprend la possibilité de modifier les tâches existantes et de filtrer la liste des tâches entre toutes les tâches, terminées et incomplètes. Nous examinons le rendu conditionné de l'interface utilisateur en cours de route.
- [Accessibilité dans React](/fr/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_accessibility)
  - : Dans notre avant-dernier article du tutoriel, nous nous concentrons sur l'accessibilité, y compris la gestion de la mise au point dans React, ce qui peut améliorer la convivialité et réduire la confusion pour les utilisateur·ice·s de clavier uniquement et de lecteur d'écran.
- [Ressources sur React](/fr/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_resources)
  - : Notre dernier article vous fournit une liste de ressources sur React que vous pouvez utiliser pour aller plus loin dans votre apprentissage.

## Autres choix de cadriciels

Si vous ne souhaitez pas commencer à apprendre les cadriciels avec React, vous pouvez choisir une autre option.

Nous vous recommandons de jeter un œil aux options suivantes comme alternatives&nbsp;:

- [Angular <sup>(angl.)</sup>](https://angular.dev/)&nbsp;: Commencez avec le [tutoriel Angular <sup>(angl.)</sup>](https://angular.dev/tutorials/learn-angular).
- [Ember <sup>(angl.)</sup>](https://emberjs.com/)&nbsp;: Commencez avec la [documentation d'apprentissage de Ember.js <sup>(angl.)</sup>](https://emberjs.com/learn/).
- [Svelte <sup>(angl.)</sup>](https://svelte.dev/)&nbsp;: Commencez avec le [tutoriel Svelte <sup>(angl.)</sup>](https://svelte.dev/tutorial/svelte/welcome-to-svelte).
- [Vue <sup>(angl.)</sup>](https://vuejs.org/)&nbsp;: Commencez avec le [démarrage rapide de Vue <sup>(angl.)</sup>](https://vuejs.org/guide/quick-start.html).

Nous tenons à le dire d'emblée — nous n'avons **pas** choisi les cadriciels mentionnés précédemment parce que nous pensons qu'ils sont les meilleurs, ou parce que nous les approuvons d'une quelconque manière. Nous pensons simplement qu'ils obtiennent de bons résultats selon les critères suivants, qui doivent être pris en compte lorsque l'on commence à investir du temps dans l'apprentissage de nouveaux logiciels&nbsp;:

- Ils sont bien pris en charge et sont là pour un certain temps&nbsp;: Comme pour tout outil logiciel, il est bon de s'en tenir à des choix activement développés qui ne sont probablement pas abandonnés la semaine prochaine, et qui sont des ajouts souhaitables à votre ensemble de compétences lorsque vous cherchez un emploi.
- Ils ont de fortes communautés et une bonne documentation&nbsp;: Il est très important de pouvoir obtenir de l'aide pour apprendre un sujet complexe, surtout lorsque l'on débute.

{{NextMenu("Learn_web_development/Core/Frameworks_libraries/Introduction", "Learn_web_development/Core")}}
