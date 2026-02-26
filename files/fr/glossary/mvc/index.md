---
title: MVC
slug: Glossary/MVC
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

**MVC** (Modèle-Vue-Contrôleur) est un modèle de conception logicielle couramment utilisé pour implémenter les interfaces utilisateurs, les données et la logique de contrôle. Il met l'accent sur la séparation entre la logique métier du logiciel et l'affichage. Cette «&nbsp;séparation des responsabilités&nbsp;» permet une meilleure répartition du travail et une maintenance facilitée. D'autres modèles de conception sont basés sur MVC, comme MVVM (Modèle-Vue-VueModèle), MVP (Modèle-Vue-Présentateur) et MVW (Modèle-Vue-Whatever).

Les trois parties du modèle de conception logicielle MVC peuvent être décrites ainsi&nbsp;:

1. Modèle&nbsp;: Gère les données et la logique métier.
2. Vue&nbsp;: Gère la présentation et l'affichage.
3. Contrôleur&nbsp;: Transmet les commandes aux parties modèle et vue.

## Exemple Modèle-Vue-Contrôleur

Imaginez une application de liste de courses simple. Tout ce que nous voulons, c'est une liste du nom, de la quantité et du prix de chaque article à acheter cette semaine. Ci-dessous, nous décrivons comment nous pourrions implémenter une partie de cette fonctionnalité en utilisant MVC.

![Diagramme illustrant les différentes parties de l'architecture MVC.](model-view-controller-light-blue.png)

### Le Modèle

Le modèle définit quelles données l'application doit contenir. Si l'état de ces données change, le modèle notifie généralement la vue (pour que l'affichage soit mis à jour si besoin) et parfois le contrôleur (si une logique différente est nécessaire pour contrôler la vue mise à jour).

Dans notre application de liste de courses, le modèle spécifierait quelles données doivent être présentes dans chaque élément de la liste — article, prix, etc. — et quels éléments sont déjà présents.

### La Vue

La vue définit comment les données de l'application doivent être affichées.

Dans notre application de liste de courses, la vue définirait comment la liste est présentée à l'utilisateur·ice et recevrait les données à afficher depuis le modèle.

### Le Contrôleur

Le contrôleur contient la logique qui met à jour le modèle et/ou la vue en réponse aux actions des utilisateur·ice·s de l'application.

Par exemple, notre liste de courses pourrait comporter des formulaires et des boutons permettant d'ajouter ou de supprimer des articles. Ces actions nécessitent la mise à jour du modèle, donc la saisie est envoyée au contrôleur, qui manipule alors le modèle comme il convient, puis envoie les données mises à jour à la vue.

Vous pourriez aussi vouloir simplement mettre à jour la vue pour afficher les données dans un format différent, par exemple trier les articles par ordre alphabétique ou du prix le plus bas au plus élevé. Dans ce cas, le contrôleur pourrait gérer cela directement sans avoir besoin de mettre à jour le modèle.

## MVC sur le Web

En tant que développeur·euse web, ce modèle vous sera probablement familier même si vous ne l'avez jamais utilisé consciemment. Votre modèle de données est probablement contenu dans une base de données (qu'il s'agisse d'une base traditionnelle côté serveur comme MySQL, ou d'une solution côté client telle que [IndexedDB](/fr/docs/Web/API/IndexedDB_API)). Le code de contrôle de votre application est probablement écrit en HTML/JavaScript, et votre interface utilisateur en HTML/CSS ou tout autre langage. Cela ressemble beaucoup à MVC, mais MVC impose à ces composants de suivre un schéma plus rigide.

Aux débuts du Web, l'architecture MVC était principalement implémentée côté serveur, le client demandant des mises à jour via des formulaires ou des liens, et recevant des vues mises à jour à afficher dans le navigateur. Aujourd'hui, la logique est de plus en plus poussée côté client avec l'apparition des bases de données locales et de l'[API Fetch](/fr/docs/Web/API/Fetch_API) permettant des mises à jour partielles de page selon les besoins.

Des frameworks web comme [AngularJS](https://fr.wikipedia.org/wiki/AngularJS) et [Ember.js](https://fr.wikipedia.org/wiki/Ember.js) implémentent tous une architecture MVC, bien que de façon légèrement différente.

## Voir aussi

- [Modèle-Vue-Contrôleur](https://fr.wikipedia.org/wiki/Mod%C3%A8le-vue-contr%C3%B4leur) sur Wikipédia
