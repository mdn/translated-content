---
title: Comprendre les frameworks JavaScript côté client
slug: Learn/Tools_and_testing/Client-side_JavaScript_frameworks
tags:
  - Beginner
  - Frameworks
  - JavaScript
  - Learn
  - TopicStub
  - client-side
translation_of: Learn/Tools_and_testing/Client-side_JavaScript_frameworks
---
{{LearnSidebar}}

Les frameworks JavaScript sont une partie essentielle du développement web front-end moderne, fournissant aux développeurs des outils éprouvés pour construire des applications web évolutives et interactives. De nombreuses entreprises modernes utilisent des frameworks comme un élément normé de leur outillage, de sorte que de nombreux emplois de développement front-end requièrent désormais une expérience avec ces frameworks.

En tant que futur développeur front-end, il peut être difficile de savoir par où commencer lors de l'apprentissage des frameworks – il y a tant de frameworks si différents les uns des autres et de nouveaux qui apparaissent sans cesse, ils fonctionnent généralement de manière similaire mais font certaines choses différemment, et il y a certaines choses spécifiques à avoir en tête lors de leur utilisation.

Dans cet ensemble d'articles, nous chercherons à vous donner un point de départ confortable pour vous aider à commencer votre apprentissage des frameworks. Nous ne visons pas à vous enseigner exhaustivement tout ce que vous devez savoir sur React / ReactDOM, Vue ou quelque autre framework particulier ; les documentations fournises par les équipes de développement des frameworks font déjà ce travail. Nous souhaitons plutôt faire simple et répondre d'abord à des questions plus fondamentales telles que :

- Pourquoi devrais-je utiliser un framework ? Quels problèmes résolvent-ils pour moi ?
- Quelles questions devrais-je me poser pour choisir un framework ? Ai-je au moins besoin d'un framework ?
- Quelles fonctionnalités proposent les frameworks ? Comment fonctionnent-ils en général et comment diffèrent leurs  implantations de ces fonctionnalités ?
- Comment se rapportent-ils au JavaScript "vanilla" ou à l'HTML ?

Après ceci, nous vous fournirons quelques tutoriels couvrant les notions fondamentales de certains des principaux frameworks afin de vous fournir suffisamment de contexte et de familiarité pour commencer à approfondir par vous-même. Nous voulons que vous puissiez progresser et en apprendre plus sur les frameworks de manière pragmatique sans oublier les bonnes pratiques fondamentales du web telles que l'accessibilité.

**[Commencez dès maintenant, avec "Introduction aux frameworks côté client"](/fr/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Introduction)**

## Prérequis

Vous devez vraiment connaitre les bases des principaux langages du web ([HTML](/fr/docs/Learn/HTML), [CSS](/fr/docs/Learn/CSS), et particulièrement [JavaScript](/fr/docs/Learn/JavaScript)) avant d'essayer de vous lancer dans l'apprentissage des frameworks côté client.

Votre code n'en sera que plus qualitatif et plus professionnel, et vous serez en mesure de résoudre vos problèmes avec plus de confiance si vous comprenez les fonctionnalités fondamentales du web sur lesquelles les frameworks s'appuient.

### Vous voulez devenir développeur web front-end ?

Nous avons créé un cours qui inclut toutes les informations essentielles dont vous avez besoin pour atteindre votre objectif.

[Commencer](/fr/docs/Learn/Front-end_web_developer)

## Guides d'introduction

- [1. Introduction aux frameworks côté client](/fr/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Introduction)
  - : Nous commençons notre aperçu des frameworks par un tour d'horizon général du domaine, notamment en regardant un bref historique de JavaScript et des frameworks, la raison pour laquelle les frameworks existent et ce qu'ils nous proposent, comment commencer à réfléchir au choix d'un framework à apprendre et quelles alternatives il y a aux frameworks côté client.
- [2. Principales caractéristiques du Framework](/fr/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Main_features)
  - : Chaque framework JavaScript majeur a une approche différente de la mise à jour du DOM, de la gestion des évènements du navigateur et de la manière dont rendre l'expérience de développement agréable. Cet article explorera les principales caractéristiques des 4 grands frameworks, en examinant comment les frameworks ont tendance à fonctionner à un haut niveau et les différences entre eux.

## Tutoriels sur React

> **Note :** Les tutoriels sur React ont été essayés pour la dernière fois en mai 2020, avec React/ReactDOM 16.13.1 et create-react-app 3.4.1.
>
> Si vous avez besoin de vérifier votre code par rapport à notre version, vous pouvez trouver une version finale de l'exemple de code d'application React dans notre [todo-react repository](https://github.com/mdn/todo-react). Pour une version exécutable en direct, voir <https://mdn.github.io/todo-react-build/>.

- [1. Premier pas avec React](/fr/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_getting_started)
  - : Dans cet article, nous dirons bonjour à React. Nous découvrirons les prémices de son fonctionnement et de ses cas d'utilisation, configurerons une chaine d'outils React de base sur notre ordinateur local et créerons et jouerons avec une application de démarrage simple, en apprenant un peu plus sur le fonctionnement de React dans le processus.
- [2. Début de notre liste de tâches React](/fr/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_todo_list_beginning)
  - : Supposons que nous ayons été chargés de créer une preuve de concept dans React – une application qui permet aux utilisateurs d'ajouter, de modifier et de supprimer les tâches sur lesquelles ils souhaitent travailler, ainsi que de marquer les tâches comme terminées sans les supprimer. Cet article vous guidera tout au long de la mise en place de la structure et du style des composants de base de l'application, prêts pour la définition et l'interactivité des composants individuels, que nous ajouterons plus tard.
- [3. Diviser notre application React en composants](/fr/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_components)
  - : À ce stade, notre application est un monolithe. Avant de pouvoir lui faire faire des choses, nous devons le diviser en composants descriptifs gérables. React n'a pas de règles strictes pour ce qui est et n'est pas un composant - c'est à vous de décider ! Dans cet article, nous allons vous montrer un moyen judicieux de diviser notre application en composants.
- [4. Interactivité de React: évènements et états](/fr/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_interactivity_events_state)
  - : Une fois notre plan de composants élaboré, il est maintenant temps de commencer à faire évoluer notre application d'une interface utilisateur complètement statique vers une interface qui nous permet réellement d'interagir et de modifier des choses. Dans cet article, nous allons le faire, en explorant les évènements et les états en cours de route.
- [5. Interactivité de React: modification, filtrage, rendu conditionné](/fr/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_interactivity_filtering_conditional_rendering)
  - : Alors que nous approchons de la fin de notre voyage React (pour l'instant du moins), nous ajouterons la touche finale aux principaux domaines de fonctionnalités de notre application de liste de tâches. Cela comprend la possibilité de modifier les tâches existantes et de filtrer la liste des tâches entre toutes les tâches, terminées et incomplètes. Nous examinerons le rendu conditionné de l'interface utilisateur en cours de route.
- [6. Accessibilité dans React](/fr/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_accessibility)
  - : Dans notre avant-dernier article du tutoriel, nous nous concentrerons sur l'accessibilité, y compris la gestion de la mise au point dans React, ce qui peut améliorer la convivialité et réduire la confusion pour les utilisateurs de clavier uniquement et de lecteur d'écran.
- [7. Ressources sur React](/fr/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_resources)
  - : Notre dernier article vous fournit une liste de ressources sur React que vous pouvez utiliser pour aller plus loin dans votre apprentissage.

## Tutoriels sur Ember

> **Note :** Les tutoriels Ember ont été essayés pour la dernière fois en Mai 2020, avec Ember/Ember CLI version 3.18.0.
>
> Si vous avez besoin de vérifier votre code par rapport à notre version, vous pouvez trouver une version finale de l'exemple de code d'application Ember dans le Ember app code in the [ember-todomvc-tutorial repository](https://github.com/NullVoxPopuli/ember-todomvc-tutorial/tree/master/steps/00-finished-todomvc/todomvc). Pour une version exécutable en direct, voir <https://nullvoxpopuli.github.io/ember-todomvc-tutorial/> (cela inclut également quelques fonctionnalités supplémentaires non couvertes dans le tutoriel).

- [1. Premiers pas avec Ember](/fr/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Ember_getting_started)
  - : Dans notre premier article sur Ember, nous verrons comment fonctionne Ember et ce à quoi il sert, installerons la chaine d'outils d'Ember localement, créerons un exemple d'application, puis effectuerons une configuration initiale pour la préparer au développement.
- [2. Structure et composant de l'application Ember](/fr/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Ember_structure_componentization)
  - : Dans cet article, nous commencerons à planifier la structure de notre application TodoMVC Ember, à ajouter du code HTML correspondant, puis nous diviserons cette structure HTML en composants.
- [3. Interactivité Ember : évènements, classes et états](/fr/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Ember_interactivity_events_state)
  - : À ce stade, nous allons commencer à ajouter de l'interactivité à notre application, offrant la possibilité d'ajouter et d'afficher de nouveaux éléments à notre liste. En cours de route, nous examinerons l'utilisation d'évènements dans Ember, la création de classes de composants pour contenir du code JavaScript pour contrôler les fonctionnalités interactives et la configuration d'un service pour suivre l'état des données de notre application.
- [4. Interactivité Ember : fonctionnalité du Footer, rendu conditionné](/fr/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Ember_conditional_footer)
  - : Il est maintenant temps de commencer à aborder la fonctionnalité de footer dans notre application. Ici, nous allons mettre à jour le compteur de tâches pour afficher le nombre correct de tâches à compléter et appliquer correctement le style aux tâches terminées (c'est-à-dire là dont la case a été cochée). Nous allons également câbler notre bouton "Effacer terminé". En cours de route, nous découvrirons comment utiliser le rendu conditionné dans nos modèles.
- [5. Routage dans Ember](/fr/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Ember_routing)
  - : Dans cet article, nous apprendrons les bases du routage avec Ember. Nous l'utiliserons pour fournir une URL unique pour chacune des trois vues à faire : "Tous", "Actif", et "Terminé".
- [6. Ressources sur Ember et dépannage](/fr/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Ember_resources)
  - : Notre dernier article sur Ember vous fournit une liste de ressources que vous pouvez utiliser pour aller plus loin dans votre apprentissage, ainsi que des dépannages utiles et d'autres informations.

## Tutoriels sur Vue

> **Note :** Les tutoriels sur Vue ont été essayés pour la dernière fois en mai 2020, avec Vue 2.6.11.
>
> Si vous avez besoin de vérifier votre code par rapport à notre version, vous pouvez trouver une version terminée de l'exemple de code d'application Vue dans notre [todo-vue repository](https://github.com/mdn/todo-vue). Pour une version exécutable en direct, voir <https://mdn.github.io/todo-vue/dist/>.

- [1. Premiers pas avec Vue](/fr/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_getting_started)
  - : Maintenant, introduisons Vue, le troisième de nos frameworks. Dans cet article, nous allons examiner un peu le contexte de Vue, apprendre à l'installer et créer un nouveau projet, étudier la structure de haut niveau de l'ensemble du projet et d'un composant individuel, voir comment exécuter le projet localement, et préparez-le à commencer à construire notre exemple.
- [2. Création de notre premier composant Vue](/fr/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_first_component)
  - : Il est maintenant temps de plonger plus profondément dans Vue et de créer notre propre composant personnalisé (nous commencerons par créer un composant pour représenter chaque élément de la liste de tâches). En cours de route, nous découvrirons quelques concepts importants tels que l'appel de composants à l'intérieur d'autres composants, leur transmission de données via des accessoires et l'enregistrement de l'état des données.
- [3. Rendu d'une liste de composants Vue](/fr/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_rendering_lists)
  - : À ce stade, nous avons un composant entièrement fonctionnel ; nous sommes maintenant prêts à ajouter plusieurs composants `ToDoItem` à notre application. Dans cet article, nous examinerons l'ajout d'un ensemble de données d'élément todo à notre composant `App.vue` que nous allons ensuite parcourir et afficher à l'intérieur des composants `ToDoItem` à l'aide de la directive `v-for`.
- [4. Ajout d'un nouveau formulaire todo: évènements, méthodes, et modèles Vue](/fr/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_methods_events_models)
  - : Nous avons maintenant des exemples de données en place et une boucle qui prend chaque bit de données et le rend dans un `ToDoItem` dans notre application. Ce dont nous avons vraiment besoin ensuite, c'est la possibilité de permettre à nos utilisateurs de saisir leurs propres éléments à faire dans l'application, et pour cela, nous aurons besoin d'un texte `<input>`, un évènement à déclencher lorsque les données sont soumises, une méthode de déclenchement lors de la soumission pour ajouter les données et relancer la liste, et un modèle pour contrôler les données. C'est ce que nous allons couvrir dans cet article.
- [5. Styliser les composants Vue avec CSS](/fr/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_styling)
  - : Le moment est enfin venu de rendre notre application un peu plus jolie. Dans cet article, nous explorerons les différentes façons de styliser les composants Vue avec CSS.
- [6. Utilisation des propriétés calculées de Vue](/fr/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_computed_properties)
  - : Dans cet article, nous allons ajouter un compteur qui affiche le nombre d'éléments à faire terminés, en utilisant une fonctionnalité de Vue appelée propriétés calculées. Celles-ci fonctionnent de la même manière que les méthodes, mais ne sont réexécutées que lorsque l'une de leurs dépendances change.
- [7. Rendu conditionnel Vue : éditer les todos existants](/fr/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_conditional_rendering)
  - : Il est maintenant temps d'ajouter l'un des éléments majeurs de la fonctionnalité qui nous manque toujours: la possibilité de modifier les éléments todos existants. Pour ce faire, nous profiterons des capacités de rendu conditionnel de Vue — à savoir `v-if` et `v-else` — pour nous permettre de basculer entre la vue d'élément todo existante et une vue d'édition où vous pouvez mettre à jour les étiquettes d'élément todo. Nous examinerons également l'ajout de fonctionnalités pour supprimer les éléments todo.
- [8. Gestion de la mise au poinr avec les références de Vue](/fr/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_refs_focus_management)
  - : Nous en avons presque terminé avec Vue. La dernière fonctionnalité à implanter est la gestion de la mise au point, ou en d'autres termes, la façon dont nous pouvons améliorer l'accessibilité du clavier de notre application. Nous allons examiner l'utilisation des références de Vue pour gérer cela, une fonctionnalité avancée qui vous permet d'avoir un accès direct aux nœuds DOM sous-jacents sous le DOM virtuel, ou un accès direct d'un composant à la structure DOM interne d'un composant enfant.
- [9. Ressources Vue](/fr/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_resources)
  - : Nous allons maintenant terminer notre étude de Vue en vous donnant une liste de ressources que vous pouvez utiliser pour aller plus loin dans votre apprentissage, ainsi que d'autres conseils utiles.

## Tutoriels sur Svelte

> **Note :** Les tutoriels sur Svelte ont été essayés pour la dernière fois en aout 2020, avec Svelte 3.24.1.
>
> Si vous avez besoin de vérifier votre code par rapport à notre version, vous pouvez trouver une version terminée de l'exemple eu code de l'application Svelte (tel qu'il est après chaque chapitre) dans le dépôt [mdn-svelte-tutorial](https://github.com/opensas/mdn-svelte-tutorial). Pour une version exécutable en direct, voir <https://svelte.dev/repl/378dd79e0dfe4486a8f10823f3813190?version=3.23.2>.

- [1. Premiers pas avec Svelte](/fr/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_getting_started)
  - : Dans cet articles, nous vous proposerons une brève introduction au framework Svelte. Nous verrons comment Svelte fonctionne et qu'est-ce qui le rend si différent des autrse frameworks et outils que nous avons vus jusqu'à présent. Ensuite, nous apprendronds à mettre en place notre environnement de développement, créerons une application démonstrative, appréhenderons la structure du projet et nous verrons comment la mettre en oeuvre localement puis la compiler pour la mettre en production.

<!---->

- [2. Commencer notre application todolist avec Svelte](/fr/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_Todo_list_beginning)
  - : Maintenant que nous avons compris les bases du fonctionnement  de Svelte, nous pouvons commencer à construirer application démonstrative : une liste de tâches. Dans cet article, nous verrons d'abord les fonctionnalités attendues dans notre application, puis nous créerons un composant Todos.svelte et mettrons en place un HTML statique et du CSS, prêts pour commencer le développement des fonctionnalités de notre application de liste de tâches avec laquelle nous continuerons dans les articles suivants.
- [3. Comportements dynamiques dans Svelte : travailler avec les variables et les propriétés](/fr/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_variables_props)
  - : Maintenant que nous avons HTML et notre CSS, nous pouvons commencer le développement des fonctionnalités attendues pour notre application de liste de tâches Svelte. Dans cet article, nous utiliserons des variables et propriétés pour rendre notre application dynamique, nous permettant d'ajouter et de supprimer des tâches, de les marquer comme terminées et de les filter par état.
- [4. Diviser notre application Svelte en composants](/fr/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_components)
  - : L'objectif principal de cet article est de voir comment nous pouvons diviser notre application en composants gérables et partager l'information entre eux. Nous décomposerons notre application puis y ajouterons plus de fonctionnalités pour permettre aux utilisateurs de modifier des composants existants.
- [5. Svelte avancé : réactivité, cycle de vie et accessibilité](/fr/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_reactivity_lifecycle_accessibility)
  - : Dans cet articles, nous ajouterons les dernières fonctionnalités de l'application et nous pousserons la décomposition de notre application encore plus loin. Nous apprendrons comment résoudre des problèmes de réactivité liés à la mise à jour d'objets et de tableaux. Pour éviter les erreurs communes, nous devrons nous explorer plus profondément le système de réactivité de Svelte. nous verrons aussi comment résoudre certaines problèmes de mise au point pour l'accessibilité et plus encore.
- [6. Travailler avec le stockage de Svelte](/fr/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_stores)
  - : Dans cet article, nous vous montrerons une autre manière de gérer les états avec Svelte : les stockages Stores. Les Stores sont des répertoires de données globaux qui contiennent des valeurs. Les composants peuvent s'abonner aux stockages et recevoir des notifications que leurs valeurs changent.
- [7. Support de TypeScript avec Svelte](/fr/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_TypeScript)
  - : Nous allons maintenant apprendre à utiliser TypeScript dans nos applications Svelte. D'abord, nous apprendrons ce qu'est TypeScript et quels bénéfices il peut nous apporter, puis nous verrons ensemble comment configurer notre projet pour travailler avec des fichiers TypeScript. Enfin, nous parcourerons notre application pour voir ce que nous pouvons y changer pour tirer pleinement parti des fonctionnalités de TypeScript.
- [8. Déploiement et étapes suivantes](/fr/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_deployment_next)
  - : Dans ce dernier article, nous verrons comment déployer votre application et la mettre en ligne et nous vous partagerons quelques-unes des ressources auxquelles vous devriez jeter un oeil pour poursuivre votre apprentissage de Svelte.

## Quels frameworks avons-nous choisis ?

Nous publions notre première série d'articles accompagné de guides axés sur quatre frameworks. Trois d'entre eux sont très populaires et bien établis (React/ReactDOM, Ember et Vue) tandis que Svelte est un nouveau prometteur et qui a déjà gagné beaucoup en popularité dernièrement.

Il existe plusieurs raisons à ceci :

- Ce sont des outils populaires qui dureront un certain temps – comme avec tout outil logiciel, il est bon de s'en tenir à des outils activement développés et qui ne seront probablement pas interrompus la semaine prochaine et qui constitueront des atouts considérables à vos compétences lorsque vous cherchez un emploi,
- Ils ont des communautés solides et de bonnes documentations. C'est très important pour être en mesure de recevoir de l'aide lors de votre apprentissage d'un sujet complexe, surtout lorsque vous débutez.
- Nous n'avons pas les ressources nécessaires pour couvrir _tous_ les frameworks modernes. De toute façon, cette liste serait très difficile à tenir à jour car de nouveaux apparaissent tout le temps.
- En tant que débutant, choisir sur quoi se pencher parmi le grand nombre de choix disponibles est un problème très réel. Faire en sorte que cette liste soit courte est donc utile.

Disons-le franchement : nous n'avons **pas** choisi les frameworks sur lesquels nous nous concentrons parce que nous pensons qu'ils sont les meilleurs ou parce que nous les soutenons de quelque manière que ce soit. Nous pensons seulement qu'ils correspondent le mieux aux critères établis ci-avant.

Notez que nous espérions avoir plus de frameworks inclus lors de la publication initiale, mais nous avons décidé de publier le contenu, puis d'ajouter plus de guides de framework plus tard plutôt que de le retarder l'édition. Si votre framework préféré n'est pas représenté dans ce contenu et que vous souhaitez faire changer cela, n'hésitez pas à en discuter avec nous ! Contactez-nous via [Matrix](https://wiki.mozilla.org/Matrix), ou [Discourse](https://discourse.mozilla.org/c/mdn), ou envoyez-nous un mail sur la [liste mdn-admins](mailto:mdn-admins@mozilla.org).
