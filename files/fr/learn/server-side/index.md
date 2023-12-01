---
title: Programmation de Sites Web côté serveur
slug: Learn/Server-side
---

{{LearnSidebar}}

Le sujet abordant les sites **web dynamiques / la programmation coté serveur** est une série de modules vous montrant comment créer un site web dynamique (sites web intereagissant avec vous de manière à vous donner des informations personnelles en réponse aux requêtes HTTP). Les modules fournissent une introduction universelle à la programmation coté serveur à travers des guides spécifiques pour les debutants vous montrant comment vous servir des infrastructure d'application (aussi appelé frameworks) Django (fait en Python) et Express(fait en Node.js/JavaScript) afin de créer des applications basiques.

La plupart des sites web utilisent une technologie (frameworks, serveurs, languages, etc.) côté serveur afin d'afficher dynamiquement les différentes informations requises. Par exemple, imaginez combien de produits sont disponibles sur Amazon, et imaginez combien de post ont été publiés sur Facebook depuis son commencement ? Afficher tout ceci en utilisant uniquement des pages 'statiques' aurait été absolument inutile et complétement infernal, au lieu de ça les sites dynamiques utilisent des templates (sorte de page statique servant de 'modèle', programmé en utilisant le [HTML](/fr/docs/Learn/HTML), le [CSS](/fr/docs/Learn/CSS) et le [JavaScript](/fr/docs/Learn/JavaScript) dans lequel on viendra y insérer les informations voulues ; par exemple, chaque page d'article amazon est la même, il s'agit juste d'un template dans lequel viennent se placer les informations du produit sélectionné).

De nos jours, dans le monde du web, apprendre la programmation côté serveur est indispensable.

## L'apprentissage

Se lancer dans la programmation côté serveur est souvent plus facile que de se lancer dans la programmation côté client, parce que les sites dynamiques ont tendance à faire toujours la même chose (recevoir des données d'une base de données, et l'afficher dans une page, valider les entrées de l'utilisateur et les sauvegarder dans la base de données, vérifier les permissions utilisateur ainsi que les connections etc.), et sont en général construits autour d'un framework web rendant les opérations assez faciles.

Des connaissances minimales en concepts de programmation pourront être utiles, mais pas essentielles. Les connaissances en développement côté client sont également utiles mais pas indispensables, considérez néamoins que cela vous aiderai à mieux travailler avec des développeurs qui créeront la partie côté client du site aussi appelé "front-end".

Vous allez avoir besoin de comprendre "comment le fonctionne le Web". Nous vous recommandons premièremement de lire les sujets suivants :

- [Qu'est-ce qu'un serveur web](/fr/Apprendre/Qu_est-ce_qu_un_serveur_web)
- [De quel logiciels ai-je besoin afin de faire des sites web ?](/fr/Apprendre/Quels_logiciels_sont_nécessaires_pour_construire_un_site_web)
- [Comment transférer des fichiers à un serveur web ?](/fr/Apprendre/Transférer_des_fichiers_vers_un_serveur_web)

Ces articles vous donnerons les outils nécessaires afin de travailler avec les modules de cette section.

## Modules

Ce sujet contient les modules suivants. Vous feriez mieux de commencer par le premier module, pour ensuite faire les autres qui vous montrerons comment travailler à l'aide des 2 languages de programmation côté serveur les plus populaire en utilisant les frameworks web appropriés.

- [Les premiers pas en programmation de site web côté serveur](/fr/docs/Learn/Server-side/First_steps)
  - : Ce module fournit les informations de base sur la programmation de site web côté serveur en répondant à des questions telles que "Qu'est-ce que c'est ?", "En quoi est-ce différent de la prgrammation côté client ?" ou encore "Pourquoi est-ce si utile ?" ainsi qu'un aperçu de quelques frameworks côté serveur et comment choisir le vôtre en fonction de vos besoin ou des besoins de votre site web. Finalement nous allons vous présenter les principes de sécurité en serveur web.
- [Le framework Web Django (Python)](/fr/docs/Learn/Server-side/Django)
  - : Django est une infrastructure d'application (framework) côté serveur extrêmement populaire et dotée de son lot de fonctionnalités, écrite en Python. Ce module vous expliquera pourquoi Django fait un si bon framework pour serveurs, comment l'installer et s'en servir.
- [Express Web Framework (Node.js/JavaScript)](/fr/docs/Learn/Server-side/Express_Nodejs)
  - : Express est une infrastructure d'application (framework) assez populaire, écrite en JavaScript et fonctionnant à l'aide de Node.js. Ce module explique les avantages dont bénéficie ce framework, comment l'installer ainsi que comment s'en servir.

## Voir aussi

- [Serveur Node sans infrastucture d'application (framework)](/fr/docs/Learn/Server-side/Node_server_without_framework)
  - : Cet article comprend un serveur statique réalisé avec Node.js seul, pour ceux qui ne veulent pas utiliser de frameworks.
