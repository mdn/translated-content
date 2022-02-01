---
title: Introduction aux progressive web apps
slug: Web/Progressive_web_apps/Introduction
tags:
  - Introduction
  - PWA
  - Service Worker
  - application web progressive
  - web manifest
translation_of: Web/Progressive_web_apps/Introduction
---
{{NextMenu("Web/Progressive_web_apps/App_structure", "Web/Progressive_web_apps")}}

Cet article fournit une introduction aux Progressive Web Apps (PWA), présentant ce qui les caractérise, et les avantages qu'elles apportent par rapport à de simples applications web.

## Qu'est-ce qu'une Progressive Web App?

Les PWA sont des applications web développées à l'aide de technologies spécifiques et de standards leur permettant de tirer parti à la fois des fonctionnalités du web et de celles des applications natives.

Par exemple, les applications web sont plus faciles à trouver — c'est beaucoup plus facile et rapide de consulter un site web que d'installer une application, et ces applications web peuvent être partagées grâce à un lien.

Par ailleurs, les applications natives s'intègrent mieux avec le système d'exploitation et offrent souvent une expérience utilisateur plus fluide. Vous pouvez installer une application native afin qu'elle fonctionne hors-ligne, et les utilisateurs préfèrent ouvrir leur applications favorites via les icônes présentent sur leur écran d'accueil de téléphone, plutôt que d'y accéder via leur navigateur.

Les PWA nous offrent la possibilité de créer des applications web qui bénéficient des mêmes avantages.

Ce n'est pas un tout nouveau concept — par le passé, ce type d'idées ont été revues de nombreuses fois sur le web avec des approches différentes. L'amélioration progressive (_progressive enhancement_) et le _responsive design_ nous permettent déjà de créer des site web plus accessibles sur téléphone. Travailler hors-ligne et installer des applications était possible au sein de l'environnement Firefox OS il y a quelques années.

Les PWA, cependant, vont encore plus loin, sans pour autant se débarrasser des fonctionnalités qui font la force du web.

## Qu'est-ce qui caractérise une PWA ?

Comme suggéré plus haut, les PWA ne sont pas créées à l'aide d'une seule technologie. Elles constituent une nouvelle philosophie pour faire des applications web, impliquant certains motifs spécifiques, des API, et d'autres fonctionnalités. De prime abord, ce n'est pas évident de savoir si une application web est une application web progressive. Une application peut être considérée une application web progressive si elle remplit certains critères, ou implémente un ensemble de fonctionnatilés données: fonctionne hors-ligne, est installable, est facile à synchroniser, peut envoyer des notifications _push_, etc.

En complément, il existe des outils pour mesurer le pourcentage de conformité d'une application a être une application web progressive ([Lighthouse](https://developers.google.com/web/tools/lighthouse/) est actuellement le plus populaire). En implémentant une variété de technologies, nous pouvons rendre une application plus progressive, finissant ainsi avec un score Lighthouse plus élevé. Mais ce n'est qu'un indicateur global.

Il y a des principes clés qu'une application web devrait suivre afin d'être identifée comme une PWA. Elle doit être:

- [Discoverable](/fr/docs/Web/Progressive_web_apps/Advantages#Discoverable), afin que le contenu soit trouvé à l'aide de moteurs de recherche.
- [Installable](/fr/docs/Web/Progressive_web_apps/Advantages#Installable), afin d'être disponible sur l'écran d'accueil de l'appareil.
- [Linkable](/fr/docs/Web/Progressive_web_apps/Advantages#Linkable), afin que vous puissiez la partager simplement en envoyant un lien.
- [Network independent](/fr/docs/Web/Progressive_web_apps/Advantages#Network_independent), afin qu'elle fonctionne hors-ligne ou avec une mauvaise connexion internet.
- [Progressive](/fr/docs/Web/Progressive_web_apps/Advantages#Progressive), afin qu'elle soit utilisable sur les plus vieux navigateurs, mais complétement fonctionnelle sur les derniers.
- [Re-engageable](/fr/docs/Web/Progressive_web_apps/Advantages#Re-engageable), afin qu'elle soit capable d'envoyer des notifications lorsque du nouveau contenu est disponible.
- [Responsive](/fr/docs/web/Progressive_web_apps/Advantages#Responsive), afin q'uelle soit fonctionnelle sur n'importe quel appareil et résolution d'écran — téléphones mobiles, tablettes, ordinateurs portables, télévisions, réfrigérateurs, etc.
- [Safe](/fr/docs/web/Progressive_web_apps/Advantages#Safe), afin que le connexion entre vous et l'application soit sécurisée et prévienne n'importe quel tiers d'accéder à vos données.

### Est-ce que ça vaut le coup de faire tout ça ?

Absolument! Avec relativement peu d'effort pour implémenter l'essentiel des fonctionnalités requises par une PWA, les bénéfices sont énormes. Par exemple:

- Une diminution du temps de chargement après avoir installé l'application, et ceci grâce au système de cache des [Service Workers](/fr/docs/Web/API/Service_Worker_API), s'accompagnant aussi par une économie précieuse de bande passante et de temps.
- La possibilité de seulement mettre à jour le contenu qui a changé lorsque qu'une mise à jour d'application est disponible. A contrario, avec une  application native, même la plus petite modification peut obliger l'utilisateur à télécharger entièrement l'application à nouveau.
- Une sensation d'utilisation et une apparence plus proche d'une application native— icônes d'applications sur l'écran d'accueil, des applications qui s'ouvrent en plein écran, etc.
- Les utilisateurs sont plus engagés grâce à un système de notifications et de messages _push_, créant des utlisateurs plus impliqués apportant des taux de conversion plus élevés.

Il y a de nombreuses histoires à succès à propos d'entreprises ayant essayé les PWA, optant pour une expérience web enrichie plutôt qu'une application, et constatant des bénéfices significatifs et mesurables. Le site web [PWA Stats](https://www.pwastats.com/) partage de nombreux cas d'études qui démontrent ces bénéfices.

L'histoire la plus connue est sans doute celle de [Flipkart Lite](https://stories.flipkart.com/introducing-flipkart-lite/) — le plus large site e-commerce indien redéveloppé en PWA en 2015, ce qui a conduit à 70% d'augmentation en conversions. La PWA [AliExpress](https://m.aliexpress.com/) a aussi constaté de bien meilleurs résultats que le web ou l'application native, avec une augmentation de 104% en terme de taux de conversions pour les nouveaux utilisateurs. Au vu de ces augmentations de profit, et la charge relativement faible de travail requis pour convertir une application en PWA, l'avantage est évident.

Des start-up émergeantes comme [couponmoto](https://www.couponmoto.com/) ont aussi commencé à utiliser des applications web progressives pour améliorer l'engagement des consommateurs, démontrant qu'elles peuvent aider les petites entreprises autant que les grosses à fidéliser les utilisateurs plus efficacement.

Vous pouvez consulter la liste sur [pwa.rocks](https://pwa.rocks/) pour plus d'exemples. Une page particulièrement intéressante à mentionner est celle de [hnpwa.com](https://hnpwa.com/) — elle liste un exemple d'implémentation du site web Hacker News (au lieu du TodoMVC app classique), dans lequel vous pouvez voir l'utilisation de plusieurs _frameworks_ front-end.

Vous pouvez même générer des PWA en ligne à l'aide du site web [PWABuilder](https://www.pwabuilder.com/).

Pour les informations spécifiques aux _service workers_ et aux notifications _push_, consultez le [Service Worker Cookbook](https://serviceworke.rs/), une collection d'exemples utilisant des _service workers_.

Ça vaut le coup d'essayer l'approche PWA, afin que vous puissiez constater par vous-même si ça convient à votre application.

## Compatibilité navigateur

Comme expliqué précédemment, les PWA ne reposent pas sur une seule API, mais plutôt sur plusieurs technologies pour atteindre l'objectif de délivrer la meilleure expérience web possible.

L'ingrédient clé requis pour les PWA est le support des [service worker](/fr/docs/Web/API/Service_Worker_API). Heureusement les _service workers_ sont [désormais supportés sur tous les principaux navigateurs](https://jakearchibald.github.io/isserviceworkerready/), sur ordinateur et sur téléphone mobile.

D'autres fonctionnalités telles que [Web App Manifest](/fr/docs/Web/Manifest), [Push](/fr/docs/Web/API/Push_API), [Notifications](/fr/docs/Web/API/Notifications_API), et [Add to Home Screen](/fr/docs/Web/Progressive_web_apps/Add_to_home_screen) bénéficient également d'un large support. Juqu'à présent Safari a limité le support du _Web App Manifest_ et _Add to Home Screen_, et ne supporte pas les notifications web _push_. Cependant, les principaux autres navigateurs supportent toutes ces fonctionnalités.

Certaines de ces API sont expérimentales, et accompagnées d'une documenation toujours à l'état de brouillon, mais les histoires à succès comme celles de Flibkart et AliExpress devraient d'ores et déjà suffire à vous convaincre d'essayer et d'implémenter certaines de ces fonctionnalités dans votre application web.

Par dessus tout, vous devriez suivre la régle d'amélioration progressive — utilisez les technologies qui fournissent ces améliorations seulement où elles sont supportées, mais proposez quand même les fonctionnalités basiques de votre application lorsqu'elles ne le sont pas. De cette façon, tout le monde sera en mesure de l'utiliser, mais ceux aqui ont un navigateur récent bénéficieront de toutes les fonctionnalités offertes par les PWA et même plus.

## Un exemple d'application

Dans cette série d'articles nous examinerons le code source d'un site web simple qui propose des informations à propos de jeux soumis à [A-Frame category](http://js13kgames.com/aframe) lors de la compétition [js13kGames 2017](http://2017.js13kgames.com/). Ne vous souciez pas du contenu réel du site — le plus important est d'apprendre à utiliser les fonctionnalités des PWA dans vos propres projets.

Vous pouvez trouver la version en ligne sur [mdn.github.io/pwa-examples/js13kpwa](https://mdn.github.io/pwa-examples/js13kpwa/) (et [le code source](https://github.com/mdn/pwa-examples/tree/master/js13kpwa)), que l'on va expliquer avec attention dans les prochains articles.

Maintenant, allons à la deuxième partie de cette série, dans laquelle on s'intéressera à la structure de notre application démo.

{{NextMenu("Web/Progressive_web_apps/App_structure", "Web/Progressive_web_apps")}}

{{QuickLinksWithSubpages("/en-US/docs/Web/Progressive_web_apps/")}}
