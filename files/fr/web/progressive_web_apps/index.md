---
title: Applications web progressives
slug: Web/Progressive_web_apps
l10n:
  sourceCommit: 26fb7eaa7b398a35c2463fa15ab6ccfa46a9e06d
---

Une **application web progressive** (<abbr lang="en" title="Progressive Web App">PWA</abbr>) est une application construite en utilisant les technologies de la plateforme web, mais qui offre une expérience utilisateur similaire à celle d'une application spécifique à une plateforme.

Comme un site web, une PWA peut s'exécuter sur plusieurs plateformes et appareils à partir d'une seule base de code. Comme une application spécifique à une plateforme, elle peut être installée sur l'appareil, fonctionner hors ligne et en arrière-plan, et s'intégrer à l'appareil ainsi qu'aux autres applications installées.

## Guides

Les [guides PWA](/fr/docs/Web/Progressive_web_apps/Guides) fournissent des explications conceptuelles sur différents aspects des PWA.
Ils sont destinés à vous aider à comprendre quels types de fonctionnalités sont possibles avec les PWA, et à fournir suffisamment d'indications pour vous aider à comprendre comment les mettre en œuvre.

- [Qu'est-ce qu'une application web progressive&nbsp;?](/fr/docs/Web/Progressive_web_apps/Guides/What_is_a_progressive_web_app)
  - : Introduction aux PWA, comparaison avec les sites web traditionnels et les applications spécifiques à une plateforme, et présentation de leurs principales fonctionnalités.
- [Rendre les PWA installables](/fr/docs/Web/Progressive_web_apps/Guides/Making_PWAs_installable)
  - : L'un des aspects déterminants d'une PWA est qu'elle peut être installée sur l'appareil, puis apparaître aux utilisateur·ice·s comme une application spécifique à une plateforme, une fonctionnalité permanente de leur appareil qu'ils peuvent lancer directement depuis le système d'exploitation comme toute autre application. Dans ce guide, nous explorons ce que signifie «&nbsp;installable&nbsp;», ce qu'une PWA doit fournir pour être installable, et comment vous pouvez personnaliser l'expérience d'installation.
- [Installer et désinstaller des applications web](/fr/docs/Web/Progressive_web_apps/Guides/Installing)
  - : Ce guide explique comment les utilisateur·ice·s peuvent installer et désinstaller des PWA sur leurs appareils.
- [Fonctionnement hors ligne et en arrière-plan](/fr/docs/Web/Progressive_web_apps/Guides/Offline_and_background_operation)
  - : Dans ce guide, nous présentons un ensemble de technologies permettant à une PWA d'offrir une bonne expérience utilisateur même lorsque l'appareil dispose d'une connectivité réseau intermittente et d'effectuer des opérations en arrière-plan, même lorsque l'application principale n'est pas en cours d'exécution.
- [Mise en cache](/fr/docs/Web/Progressive_web_apps/Guides/Caching)
  - : Vue d'ensemble des API permettant à une PWA de mettre en cache des ressources localement, et de certaines stratégies couramment utilisées par les PWA pour implémenter la fonctionnalité hors ligne.
- [Bonnes pratiques pour les PWA](/fr/docs/Web/Progressive_web_apps/Guides/Best_practices)
  - : Les PWA doivent s'adapter à différents navigateurs et appareils, être accessibles, offrir de bonnes performances et bien s'intégrer au système d'exploitation. Ce guide fournit une liste de bonnes pratiques pour vous aider à vous assurer que votre PWA est aussi performante que possible.

## Comment faire

Les [guides pratiques PWA](/fr/docs/Web/Progressive_web_apps/How_to) fournissent des instructions détaillées sur la mise en œuvre de fonctionnalités PWA spécifiques.

- [Créer une application autonome](/fr/docs/Web/Progressive_web_apps/How_to/Create_a_standalone_app)
  - : Explique comment définir qu'une PWA doit être lancée dans sa propre fenêtre dédiée lorsqu'elle est lancée, plutôt que dans un onglet de navigateur.
- [Définir les icônes de votre application](/fr/docs/Web/Progressive_web_apps/How_to/Define_app_icons)
  - : Explique comment définir votre propre ensemble d'icônes à utiliser lorsque la PWA est installée sur un appareil.
- [Personnaliser les couleurs de votre application](/fr/docs/Web/Progressive_web_apps/How_to/Customize_your_app_colors)
  - : Explique comment définir les couleurs de fond et de thème pour une PWA.
- [Afficher des badges](/fr/docs/Web/Progressive_web_apps/How_to/Display_badge_on_app_icon)
  - : Explique comment afficher un badge sur l'icône de la PWA&nbsp;: par exemple pour informer l'utilisateur·ice qu'il·elle a reçu·e de nouveaux messages.
- [Exposer les actions courantes de l'application en tant que raccourcis](/fr/docs/Web/Progressive_web_apps/How_to/Expose_common_actions_as_shortcuts)
  - : Explique comment exposer les actions courantes d'une PWA qui peuvent être lancées depuis le menu des raccourcis de l'application du système d'exploitation.
- [Partager des données entre les applications](/fr/docs/Web/Progressive_web_apps/How_to/Share_data_between_apps)
  - : Explique comment les PWA peuvent partager des données entre elles en utilisant le mécanisme de partage d'applications du système d'exploitation.
- [Déclencher l'installation depuis votre PWA](/fr/docs/Web/Progressive_web_apps/How_to/Trigger_install_prompt)
  - : Explique comment les développeur·euse·s peuvent fournir leur propre interface utilisateur pour inviter les utilisateur·ice·s à installer leur PWA.
- [Associer des fichiers à votre PWA](/fr/docs/Web/Progressive_web_apps/How_to/Associate_files_with_your_PWA)
  - : Explique comment créer une association entre les types de fichiers et votre PWA, de sorte que lorsque l'utilisateur·ice clique sur le fichier, votre PWA se lance pour le traiter.

## Tutoriels

Créez une PWA à partir de zéro en utilisant ces [tutoriels PWA](/fr/docs/Web/Progressive_web_apps/Tutorials), qui expliquent les étapes de bout en bout, en détaillant comment les différentes fonctionnalités de l'application sont mises en œuvre.

- [Créer votre première PWA](/fr/docs/Web/Progressive_web_apps/Tutorials/CycleTracker)
  - : Ce tutoriel pour débutant explique la création d'une PWA pour suivre les cycles menstruels. Les leçons incluent une présentation du HTML, CSS et JavaScript nécessaires pour créer une application web entièrement fonctionnelle, la configuration d'un environnement de test, et des explications complètes guidant l'apprenant dans la transformation de l'application web en PWA&nbsp;; y compris le développement et l'inspection d'un manifeste, l'ajout d'un service worker, et l'utilisation du service worker pour supprimer les caches obsolètes.
- [Approfondir les PWA](/fr/docs/Web/Progressive_web_apps/Tutorials/js13kGames)
  - : Ce tutoriel de niveau intermédiaire explique la création d'une PWA qui répertorie les informations sur les jeux envoyés à la catégorie A-Frame dans la compétition [js13kGames 2017 <sup>(angl.)</sup>](https://js13kgames.com/2017/). Ce tutoriel inclut tous les éléments de base pour créer une PWA, avec des fonctionnalités supplémentaires, y compris les notifications, le push et les performances de l'application.

## Référence

Notre [référence PWA](/fr/docs/Web/Progressive_web_apps/Reference) répertorie toutes les fonctionnalités documentées sur MDN dont vous avez besoin pour créer une PWA.

### Manifeste d'application web

- [Membres du manifeste d'application web](/fr/docs/Web/Progressive_web_apps/Manifest)
  - : Les développeur·euse·s peuvent utiliser les membres du manifeste d'application web pour décrire une PWA, personnaliser son apparence et l'intégrer plus profondément dans le système d'exploitation.

### Les API Service Worker

#### Communiquer avec l'application

Les API suivantes peuvent être utilisées par un service worker pour communiquer avec sa PWA cliente associée&nbsp;:

- La méthode {{DOMxRef("Client.postMessage()")}}
  - : Permet à un service worker d'envoyer un message à sa PWA cliente.
- [L'API de canal de diffusion](/fr/docs/Web/API/Broadcast_Channel_API)
  - : Permet à un service worker et à sa PWA cliente d'établir un canal de communication bidirectionnel de base.

#### Opération hors ligne

Les API suivantes peuvent être utilisées par un service worker pour permettre à votre application de fonctionner hors ligne&nbsp;:

- L'interface {{DOMxRef("Cache")}}
  - : Un mécanisme de stockage persistant pour les réponses HTTP utilisé pour stocker des ressources pouvant être réutilisées lorsque l'application est hors ligne.
- L'interface {{DOMxRef("Clients")}}
  - : Une interface utilisée pour fournir l'accès aux documents contrôlés par le service worker.
- L'interface {{DOMxRef("FetchEvent")}}
  - : Un évènement, déclenché dans le service worker à chaque requête HTTP effectuée par la PWA cliente. L'évènement peut être utilisé soit pour envoyer la requête au serveur comme d'habitude et enregistrer la réponse pour une utilisation future, soit pour intercepter la requête et répondre immédiatement avec une réponse mise en cache précédemment.

#### Opération en arrière-plan

Les API suivantes peuvent être utilisées par un service worker pour effectuer des tâches en arrière-plan, même lorsque votre application n'est pas en cours d'exécution&nbsp;:

- [L'API de synchronisation en arrière-plan](/fr/docs/Web/API/Background_Synchronization_API)
  - : Un moyen de différer l'exécution des tâches dans un service worker une fois qu'une connexion réseau stable est disponible.
- [L'API de synchronisation en arrière-plan périodique du Web](/fr/docs/Web/API/Web_Periodic_Background_Synchronization_API)
  - : Un moyen d'enregistrer des tâches à exécuter dans un service worker à des intervalles périodiques avec une connectivité réseau.
- [L'API de récupération en arrière-plan](/fr/docs/Web/API/Background_Fetch_API)
  - : Une méthode permettant à un service worker de gérer les téléchargements pouvant prendre un temps considérable, tels que les fichiers vidéo ou audio.

### Autres API Web

- [IndexedDB](/fr/docs/Web/API/IndexedDB_API)
  - : Une API de stockage côté client pour des quantités importantes de données structurées, y compris des fichiers.
- [L'API de badge](/fr/docs/Web/API/Badging_API)
  - : Une méthode permettant de définir un badge sur l'icône de l'application, fournissant une notification peu intrusive.
- [L'API de notifications](/fr/docs/Web/API/Notifications_API)
  - : Un moyen d'envoyer des notifications affichées au niveau du système d'exploitation.
- [L'API de partage Web](/fr/docs/Web/API/Web_Share_API)
  - : Un mécanisme permettant de partager du texte, des liens, des fichiers et d'autres contenus avec d'autres applications sélectionnées par l'utilisateur·ice sur son appareil.
- [L'API de superposition des contrôles de fenêtre](/fr/docs/Web/API/Window_Controls_Overlay_API)
  - : Une API pour les PWA installées sur les systèmes d'exploitation de bureau qui permet de masquer la barre de titre de la fenêtre par défaut, permettant d'afficher l'application sur toute la surface de la fenêtre de l'application.

## Voir aussi

- [Les applications web progressives <sup>(angl.)</sup>](https://web.dev/explore/progressive-web-apps) sur web.dev
- [Apprendre les PWA <sup>(angl.)</sup>](https://web.dev/learn/pwa/) sur web.dev
- [Les applications web progressives <sup>(angl.)</sup>](https://learn.microsoft.com/en-us/microsoft-edge/progressive-web-apps/) sur learn.microsoft.com (2023)
