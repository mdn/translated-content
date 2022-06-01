---
title: Git and GitHub
slug: Learn/Tools_and_testing/GitHub
tags:
  - Apprendre
  - Beginner
  - Débutant
  - GitHub
  - Learn
  - Web
  - git
translation_of: Learn/Tools_and_testing/GitHub
original_slug: Apprendre/Outils_et_tests/GitHub
---
{{LearnSidebar}}

Tous les développeurs utiliseront une sorte de **système de contrôle des versions** (_version control system_ ou VCS en anglais), un outil leur permettant de collaborer avec d'autres développeurs sur un projet sans prendre le risque que l'un d'eux écrase le travail d'un autre, et de revenir à une version précédente de la base de code si un problème est découvert plus tard. Le plus populaires de ces outils (au mois parmi les développeurs) est **Git**, ainsi que **GitHub**, un site vous proposant d'héberger vos dépôts de code et plusieurs outils pour travailler avec eux. Ce module vise à vous enseigner ce que vous devez savoir à propos de ces deux outils.

## Vue d'ensemble

Les systèmes de contrôles des versions sont nécessaires pour le développement de logiciel :

- Il est rare que vous travailliez sur un projet complètement seul, et aussitôt que vous commencez à travailler avec d'autres gens, vous commencez à courir le risque de créer des conflits entre votre travail et celui des autres — situation qui arrive quand deux personnes tentent de modifier le même morceau de code au même moment. Vous devez avoir une sorte de mécanisme en place pour gérer ces conflits et vous aider à éviter la perte de travail qui peut en résulter.
- Lorsque vous travailler sur un projet seul ou avec d'autres, vous voudrez être en mesure de centraliser le code afin qu'il ne soit pas perdu par des pannes d'ordinateur.
- Vous voudrez aussi être en mesure de revenir à de précédentes versions si un problème est découvert plus tard. Vous pourriez avoir commencé à faire ceci dans vos propres projets en créant différentes versions du même fichier, par exemple `monCode.js`, `monCode_v2.js`, `myCode_v3.js`, `myCode_final.js`, `monCode_vraiment_final.js`, etc., mais c'est une méthode faillible et donc peu fiable.
- Différents membres d'une équipe vont communément créer leur propres versions séparées du code (appelées des **branches** en Git), travailler sur une nouvelle fonctionnalité sur cette version et finalement la fusionner de manière contrôlée (avec GitHub, on fait des "requêtes de tirage" ou **_pull requests_** en anglais) avec la version principale quand ils pensent en avoir fini.

Les systèmes de contrôle des versions fournissent des outils pour répondre à ces besoins. [Git](https://git-scm.com/) est un exrmple d'un tel système, et [GitHub](https://github.com/) est un site web avec une infrastructure qui propose un serveur Git et d'autres outils très pratiques pour travailler avec des dépôts Git individuellement ou en équipe, tel que le rapportage de problèmes liés au code, la relecture et validation de code, la gestion de projet par différentes fonctions comme l'assignation de tâches et les statistiques sur l'utilisation de tâches, et plus encore.

> **Note :** Git est en fait un système de contrôle des versions _distribué_, signifiant qu'une copie complète du dépôt contenant la base de code est fait sur votre ordinateur (et celui de tous les autres participants). Vous modifiez votre propre copie et puis vous les envoyez vers le serveur, où un administrateur pourra décider de les fusionner avec la copie commune ou non.

> **Remarque :**
>
> Vous cherchez à devenir un développeur web front-end ?
>
> Nous avons mis ensemble un cours incluant toutes les informations nécessaires dont vous avez besoin pour atteindre votre objectif.
>
> [Commencer](/docs/Learn/Front-end_web_developer)

## Prérequis

Pour utiliser Git et GitHub, vous avez besoin :

- Un ordinateur de bureau avec Git installé (voir la [page des téléchargements Git](https://git-scm.com/downloads)).
- Un outil pour utiliser Git. Selon la manière dont vous préférez travailler, vous pourriez utiliser une [interface graphique Git](https://git-scm.com/downloads/guis/) (nous recommandons GitHub Desktop, SourceTree et Git Kraken) ou simplement se contenter d'utiliser un terminal en ligne de commande. En fait, il est probablement utile pour vous d'apprendre au moins les bases des commandes git du terminal, même si avez l'intention d'utiliser une interface graphiques.
- Un compte [GitHub](https://github.com/join). Si vous n'en avez pas encore un, inscrivez-vous maintenant en utilisant le lien précédent.

En matière de connaissances prérequises, vous n'avez besoin de rien concernant le développement web, Git/GitHub ou les système de contrôle des versions pour commencer ce module. Toutefois, il vous est recommandé de connaitre les bases de la programmation afin que vous ayiez des connaissances informatiques suffisantes ainsi qu'un code à héberger dans vos dépôts !

Il est aussi préférable que vous ayiez quelques connaissances fondamentales sur le terminal, par exemple du déplacement entre dossiers, de la création de fichiers et de la modification du `PATH` du système.

> **Note :** GitHub n'est pas le seul site et un ensemble d'outils que vous pouvez utiliser avec Git. Il existe d'autres alternatives telles que [GitLab](https://about.gitlab.com/) que vous pourriez essayer. Vous pouvez même tenter de configurer votre propre serveur Git et l'utiliser à la place de GitHub. Nous nous en sommes tenus à GitHub dans ce cours pour vous montrer une seule manière de faire.

## Guides

Notez que les liens ci-après vous amènent à des ressources sur des sites externes. Nous envisageons la possibilité d'avoir notre cours consacré à Git/GitHub, mais pour l'instant, ceux-ci vous aideront à mieux appréhender le sujet.

- [Hello World (de GitHub)](https://guides.github.com/activities/hello-world/)
  - : C'est un bon point pour commencer — ce guide pratique vous fera entrer dans l'utilisation de GitHub en vous apprenant les fondements de Git tels que la création de dépôts et de branches, la créations de _commits_ ainsi qu'à l'ouverture et à la fusion de _pull requests_.
- [Git Handbook (de GitHub)](https://guides.github.com/introduction/git-handbook/)
  - : Ce manuel sur Git va plus en profondeur en expliquant ce qu'un système de contrôle des versions est, ce qu'on dépôt est, comment le modèle minimal de GitHub fonctionne, les commandes Git avec divers exemples et plus encore.
- [Forking Projects (de GitHub)](https://guides.github.com/activities/forking/)
  - : Forking projects est nécessaire quand vous souhaitez contribuer au code de quelqu'un d'autre. Ce guide vous explique comment.
- [About Pull Requests (de GitHub)](https://help.github.com/en/articles/about-pull-requests)
  - : Un guide utile pour apprendre à gérer les _pull requests_, la manière dont les changements de code suggérés sont envoyés aux dépôts locaux des autres contributeurs pour être pris en considération.
- [Mastering issues (de GitHub)](https://guides.github.com/features/issues/)
  - : Les _issues_ (problèmes) sont comme un forum pour votre projet GitHub, où chacun peut venir poser des questions et rapporter des problèmes, et vous pouvez gérer les mises à jour (par exemple assigner certaines personnes à la résolution de problèmes, à la clarification de problèmes ou à l'information de la correction de problèmes). Cet article vous donne ce dont vous avez besoin de savoir à propos des _issues_.

> **Note :** Il existe **beaucoup d'autres** choses que vous pouvez faire avec Git et GitHub, mais nous pensons que ce qui précède représente le minimum dont vous aurez besoin pour commencer à utiliser Git efficacement. Au fur et à mesure de votre progression avec Git, vous comprendrez de plus en plus qu'il est facile de faire des erreurs quand on commence à utiliser des commandes plus complexes. Ne vous inquiétez pas, même les développeurs web aguerris pensent que Git est parfois déroutant, et résolvent souvent des problèmes en cherchant des solutions sur internet ou en consultat des sites comme [Flight rules for Git](https://github.com/k88hudson/git-flight-rules) et [Dangit, git!](https://dangitgit.com/)

## Voir aussi

- [Understanding the GitHub flow](https://guides.github.com/introduction/flow/)
- [Git command list](https://git-scm.com/docs)
- [Mastering markdown](https://guides.github.com/features/mastering-markdown/) (le format de texte avec lequel vous écrivez vos _pull request_, commentaires de problèmes et les fichiers `.md`).
- [Getting Started with GitHub Pages](https://guides.github.com/features/pages/) (comment publier des démonstrations et des sites web sur GitHub).
- [Learn Git branching](https://learngitbranching.js.org/)
- [Flight rules for Git](https://github.com/k88hudson/git-flight-rules) (un compendium très utile de manière de réaliser des tâches spécifiques avec Git, incluant la manière de corriger la situation quand vous vous êtes trompé).
- [Dangit, git!](https://dangitgit.com/) (un autre compendium utile, spécifiquement des manières de corriger la situation quand vous vous êtes trompé).
