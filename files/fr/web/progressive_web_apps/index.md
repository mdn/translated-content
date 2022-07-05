---
title: Applications Web Progressives
slug: Web/Progressive_web_apps
tags:
  - App
  - Applications
  - Apps
  - PWA
  - Progressive web apps
  - Web App Progressive
  - Web App modernes
  - Web app
translation_of: Web/Progressive_web_apps
---
Les **applications Web progressives** utilisent des API Web modernes ainsi qu'une stratégie d'amélioration progressive traditionnelle pour créer des applications Web multiplateformes. Ces applications fonctionnent partout et fournissent quelques fonctionnalités qui donnent à l'expérience utilisateur les mêmes avantages que les applications natives. Cet ensemble de documents explique tout ce qu'il faut savoir sur ces applications.

Pour qu'une application Web soit considérée comme un PWA, techniquement parlant, il devrait présenter les caractéristiques suivantes : [Secure contexts](/fr/docs/Web/Security/Secure_Contexts) (**{{Glossary("HTTPS")}}**), un ou plusieurs [Service Workers](/fr/docs/Web/API/Service_Worker_API) et un [fichier manifest](/fr/docs/Web/Manifest).

- [Secure contexts](/fr/docs/Web/Security/Secure_Contexts) ([HTTPS](/fr/docs/Glossaire/https))
  - : L'application web doit être servie sur un réseau sécurisé. Être un site sécurisé est non seulement une bonne pratique, mais cela fait également de votre application web un site de confiance, surtout si les utilisateurs ont besoin d'effectuer des transactions sécurisées. La plupart des fonctionnalités liées à un PWA telles que la géolocalisation et même les Service Workers ne sont disponibles qu'une fois l'application chargée à l'aide de HTTPS.
- [Service workers](/fr/docs/Web/API/Service_Worker_API)
  - : Un _Service Worker_ est un script qui permet d'intercepter et de contrôler la façon dont un navigateur web traite ses requêtes réseau et la mise en cache des ressources. Avec les Service Workers, les développeurs web peuvent créer des pages web rapides et fiables et des expériences hors ligne.
- [Manifest file](/fr/docs/Web/Manifest)
  - : Un fichier {{Glossary("JSON")}} qui contrôle la façon dont votre application apparaît à l'utilisateur et garantit que les applications web progressives sont découvrables. Il décrit le nom de l'application, l'URL de démarrage, les icônes et tous les autres détails nécessaires pour transformer le site web en un format similaire à celui d'une application.

## Avantages PWA

Les PWA doivent pouvoir être découvertes, installées, reliées, indépendantes du réseau, progressives, réengageables, réactives et sûres. Pour en savoir plus sur la signification de ces éléments, lisez [Avantages des applications web progressives](/fr/docs/Web/Progressive_web_apps/Introduction).

Pour savoir comment mettre en œuvre les PWA, lisez notre [guide du développeur de PWA](/fr/docs/Web/Progressive_web_apps/Developer_guide).

## Documentation

**<-- La liste automatique temporaire ci-dessous sera bientôt remplacée -->**

{{LandingPageListSubpages}}

> **Attention :** ce qui se trouve en dessous de ce point est un reste de l'ancienne version de cette page et sera remanié au fur et à mesure de la révision des autres contenus.

## Guides de base des PWA

Les guides suivants vous montrent ce qu'il faut faire pour mettre en œuvre une PWA, en examinant un exemple simple et en vous montrant comment tous les éléments fonctionnent.

1. [Introduction aux applications web progressives](/fr/docs/Web/Progressive_web_apps/Introduction)
2. [Structure progressive des applications web](/fr/docs/Web/Progressive_web_apps/App_structure)
3. [Faire travailler les VAP en différé avec les travailleurs des services](/fr/docs/Web/Progressive_web_apps/Offline_Service_workers)
4. [Comment rendre les PWA installables](/fr/docs/Web/Progressive_web_apps/Installable_PWAs)
5. [Comment rendre les PWA réengageables en utilisant les notifications et le Push](/fr/docs/Web/Progressive_web_apps/Relancer_Via_Notifications_Push)
6. [Chargement progressif](/fr/docs/Web/Progressive_web_apps/Chargement)
7. [Collection de ressources, de codelabs et d'outils dont vous avez besoin pour construire des PWA par l'équipe de pwafire.org](https://pwafire.org)
8. [Mise en place de votre environnement de développement d'applications web progressives](https://github.com/pwafire/pwadev-tips)

## Guides technologiques

- [Stockage côté client](/fr/docs/Apprendre/JavaScript/Client-side_web_APIs/Client-side_storage) – un long guide montrant comment et quand utiliser le stockage web, IndexedDB et les Service Workers.
- [Using service workers](/fr/docs/Web/API/Service_Worker_API/Using_Service_Workers) – un guide plus approfondi couvrant l'API Service Worker.
- [Utilisation d'IndexedDB](/fr/docs/Web/API/API_IndexedDB/Using_IndexedDB) – les principes fondamentaux d'IndexedDB, expliqués en détail.
- [Utilisation de l'API de stockage Web](/fr/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API) – l'API de stockage Web simplifiée.
- [Instant Loading Web Apps with An Application Shell Architecture](https://developers.google.com/web/updates/2015/11/app-shell) – un guide sur l'utilisation du modèle de codage App Shell pour créer des applications qui se chargent rapidement.
- [Utilisation de l'API Push](/fr/docs/Web/API/Push_API/Using_the_Push_API) – apprenez l'essentiel sur l'API Web Push.
- [Utilisation des notifications API](/fr/docs/Web/API/notification/Using_Web_Notifications) – les notifications Web en bref.
- [Les éléments de base du design réactif](/fr/docs/Web/Apps/Modern/Responsive/responsive_design_building_blocks) – apprenez les bases du design réactif, un sujet essentiel pour la mise en page d'une application moderne.
- [Mobile first](/fr/docs/Web/Apps/Modern/Responsive/Mobile_first) – souvent, lors de la création de mises en page d'applications réactives, il est judicieux de créer la mise en page mobile par défaut, et de construire des mises en page plus larges par-dessus.
- [Guide de l'ajout à l'écran d'accueil](/fr/docs/Web/Progressive_web_apps/ajouter_a_lecran_daccueil_a2hs) – découvrez comment vos applications peuvent tirer profit de l'ajout à l'écran d'accueil (A2HS).

## Outils

- [localForage](https://localforage.github.io/localForage/) – une belle et simple bibliothèque JavaScript pour rendre le stockage de données côté client vraiment simple ; elle utilise IndexedDB par défaut et revient à Web SQL/Web Storage si nécessaire.
- [ServiceWorkerWare](https://github.com/fxos-components/serviceworkerware) – un _Express-like_ microframe pour faciliter le développement du Service Worker.
- [oghliner](https://github.com/mozilla/oghliner) – il s'agit non seulement d'un modèle, mais aussi d'un outil permettant de déployer des applications Web hors ligne sur des pages GitHub.
- [sw-precache](https://github.com/GoogleChrome/sw-precache) – un module de nœud pour générer un code de travailleur de service qui précache des ressources spécifiques.
- [workbox](https://github.com/GoogleChrome/workbox) – successeur spirituel du sw-precache avec des stratégies de mise en cache plus avancées et un précaching facile.
- [upup](https://www.talater.com/upup/) – un petit script qui assure que votre site est toujours là pour vos utilisateurs.
- [The service worker cookbook](https://serviceworke.rs/) – une série d'excellentes recettes de service worker/push, montrant comment mettre en œuvre une application hors ligne, mais aussi bien plus.
- [WA VS Code extension](https://marketplace.visualstudio.com/items?itemName=mayeedwin.vscode-pwa) – une collection de tous les extraits de code essentiels dont vous avez besoin pour créer des applications Web progressives dans votre environnement VS Code.
- [Apps web progressives](https://developers.google.com/web/progressive-web-apps) sur Google Developers.
- [Applications Web progressives : Échapper aux tabulations sans perdre son âme](https://medium.com/@slightlylate/progressive-apps-escaping-tabs-without-losing-our-soul-3b93a8561955#.6czgj0myh) par Alex Russell.
- [Liste de contrôle des applications Web progressives](https://developers.google.com/web/progressive-web-apps/checklist).
- [L'outil phare](https://developers.google.com/web/tools/lighthouse) par Google.
- [Outils pour créer des applications web progressives avec Angular](https://github.com/angular/mobile-toolkit).
- [Guide PWA React](https://github.com/codebusking/react-pwa-guide-kit).
- [Offline-capable Pokédex web site](https://pokedex.org/).
- [Hacker News readers as Progressive Web Apps](https://hnpwa.com/).
- [Application Web progressive : Les avantages en bref](https://goingmeta.io/dienstleistungen/progressive-web-app/)
- [Pourquoi les applications Web progressives sont l'avenir du Web mobile (recherche 2019)](https://ymedialabs.com/progressive-web-apps).
- [Applications Web progressives : Tout ce que vous devez savoir](https://www.csschopper.com/blog/progressive-web-apps-everything-you-need-to-know/)

{{QuickLinksWithSubpages("/fr/docs/Web/Progressive_web_apps/")}}
