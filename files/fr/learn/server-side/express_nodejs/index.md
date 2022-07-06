---
title: Express Web Framework (Node.js/JavaScript)
slug: Learn/Server-side/Express_Nodejs
tags:
  - Beginner
  - CodingScripting
  - Express
  - Express.js
  - Intro
  - JavaScript
  - Learn
  - Node
  - Server-side programming
  - node.js
translation_of: Learn/Server-side/Express_Nodejs
---
{{LearnSidebar}}

Express est une infrastructure d'application (framework), écrit en JavaScript et hébergée dans l'environnement d'exécution node.js. Cette section explique certains de ses principaux avantages, comment configurer votre environnement de développement et comment effectuer des tâches courantes de développement et de déploiement.

## Prérequis

Avant d'aller plus loin, vous devrez avoir compris ce qu'est la programmation côté serveur et le concept de "framework", idéalement en ayant lu notre article [Premiers pas en programmation côté-serveur](/fr/docs/Learn/Server-side/First_steps). Une connaissance générale des concepts de programmation et du [JavaScript](/fr/docs/Web/JavaScript) est vivement recommandée, sans pour autant être essentielle à la compréhension des concepts fondamentaux.

> **Note :** Le site MDN possède de nombreuses ressources utiles pour apprendre JavaScript dans le contexte du _développement côté client_ : [Référence JavaScript](/fr/docs/Web/JavaScript), [Guide JavaScript](/fr/docs/Web/JavaScript/Guide), [Les bases de JavaScript](/fr/docs/Learn/Getting_started_with_the_web/JavaScript_basics), [Apprendre JavaScript](/fr/docs/Learn/JavaScript). Le noyau du langage et les principaux concepts de JavaScript sont les mêmes que pour le développement côté serveur sur Node.js, il est donc important d'avoir déjà une bonne compréhension de JavaScript avant de continuer. Node.js offre des [API supplémentaires](https://nodejs.org/dist/latest/docs/api/) pour supporter des fonctionnalités utiles dans des environnements sans navigateur, par ex. pour créer des serveurs HTTP et accéder au système de fichiers, mais ne prend pas en charge les API JavaScript pour travailler avec le navigateur et le DOM.
>
> Ce guide vous fournira des informations sur l'utilisation de Node.js et Express, et contient de nombreuses références à d'autres excellentes ressources sur Internet et dans des livres — dont des liens depuis [How do I get started with Node.js](https://stackoverflow.com/questions/2353818/how-do-i-get-started-with-node-js/5511507#5511507) (StackOverflow) et [What are the best resources for learning Node.js?](https://www.quora.com/What-are-the-best-resources-for-learning-Node-js?) (Quora).

## Guides

- [Introduction à Express/Node](/fr/docs/Learn/Server-side/Express_Nodejs/Introduction)
  - : Dans ce premier article sur Express nous répondons aux questions « Qu'est-ce que Node ? » et « Qu'est-ce qu'Express ? » et donnerons une vue d'ensemble de ce qui rend cette infrastructure d'application Express si spéciale. Nous décrirons les principales fonctionnalités et montrerons quelques-uns des principaux éléments constitutifs d'une application Express (bien qu'à ce stade, vous n'aurez pas encore un environnement de développement dans lequel la tester)
- [Installer un environnement de développement pour Node (Express)](/fr/docs/Learn/Server-side/Express_Nodejs/development_environment)
  - : Maintenant que nous savons à quoi sert Express, nous allons vous apprendre à installer et tester un environnement de développement Node/Express sur Windows, Linux (Ubuntu), et macOS. Quel que soit votre système d'exploitation, cet article devrait vous fournir le nécessaire pour commencer le développement d'applications Express.
- [Tutoriel Express : le site d'une bibliothèque locale](/fr/docs/Learn/Server-side/Express_Nodejs/Tutorial_local_library_website)
  - : Le premier article de notre série de tutoriels explique ce que vous allez apprendre et fournit l'aperçu d'un exemple de site pour une bibliothèque municipale locale. Nous ferons évoluer cet exemple au fur et à mesure des articles suivants.
- [2<sup>e</sup> partie du tutoriel Express : création d'un squelette de site web](/fr/docs/Learn/Server-side/Express_Nodejs/skeleton_website)
  - : Cet article explique comment vous pouvez créer un « squelette » de projet de site web, que vous pouvez alors étoffer de routes spécifiques, de modèles de vues et de bases de données.
- [3<sup>e</sup> partie du tutoriel Express : utilisation d'une base de données (avec Mongoose)](/fr/docs/Learn/Server-side/Express_Nodejs/mongoose)
  - : Cet article introduit brièvement le concept de base de données pour Node/Express. Il se poursuit en décrivant comment on peut utiliser [Mongoose](http://mongoosejs.com/) pour fournir un accès à la base de données de notre site internet de bibliothèque locale. Il explique comment les schémas de données et les modèles sont déclarées, les types principaux des champs de données, et les validations de base. Il donne aussi un aperçu rapide de quelques moyens d'accéder aux données.
- [4<sup>e</sup> partie du tutoriel Express : les routes et les contrôleurs](/fr/docs/Learn/Server-side/Express_Nodejs/routes)
  - : Dans ce tutoriel nous programmerons des routes (traitements des URL) avec des fonctions factices de traitement pour tous les points de sortie dont nous pourrions éventuellement avoir besoin pour notre site web de la bibliothèque locale. Nous obtiendrons ainsi une structure modulaire pour notre code de traitement par les routes, que nous pourrons étendre avec de vraies fonctions de traitement dans les articles suivants. Nous acquerrons de cette manière une réelle compréhension de la création modulaire des routes avec Express.
- [5<sup>e</sup> partie du tutoriel Express : affichage des données de la bibliothèque](/fr/docs/Learn/Server-side/Express_Nodejs/Displaying_data)
  - : Nous sommes prêts maintenant à ajouter des pages qui afficheront les livres et autres données de notre bibliothèque locale sur son site internet. Ces pages incluront notamment une page d'accueil qui indiquera le nombre d'enregistrements pour chaque type de modèle de donnée, une liste et des pages de détail pour chacun de ces modèles. Chemin faisant, nous acquerrons de l'expérience dans la récupération des données depuis la base, et l'utilisation des modèles de vue (_templates_).
- [6<sup>e</sup> partie du tutoriel Express : travail avec les formulaires](/fr/docs/Learn/Server-side/Express_Nodejs/forms)
  - : Dans ce tutoriel nous verrons comment travailler avec les [formulaires HTML](/fr/docs/Learn/Forms) dans Express, à l'aide de Pug, et en particulier comment concevoir des formulaires pour créer, actualiser et détruire des documents dans la base de données.
- [7<sup>e</sup> partie du tutoriel Express : déploiement de l'application en production](/fr/docs/Learn/Server-side/Express_Nodejs/deployment)
  - : Maintenant que nous avons créé un fantastique site internet pour notre bibliothèque locale, nous allons vouloir installer le serveur du site public pour qu'il soit accessible par les employés de la bibliothèque et les adhérents depuis n'importe où par le Net. Cet article fournit un aperçu de comment trouver un hébergement pour déployer son site web et ce que vous avez à faire pour préparer votre site à la production.

## Ajout de tutoriels

Tous les tutoriaux de ce module sont listés ci-avant, si vous souhaitez compléter ce module, vous pouvez contribuer avec d'autres tutoriels, notamment sur :

- l'utilisation des sessions ;
- l'authentification des utilisateurs ;
- la gestion des autorisations des utilisateurs et leurs privilèges ;
- le test d'une application web Express ;
- les applications web Express et sécurité.

Et bien sûr, il serait excellent d'avoir une évaluation !
