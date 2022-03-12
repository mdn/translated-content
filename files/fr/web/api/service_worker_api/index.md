---
title: Service Worker API
slug: Web/API/Service_Worker_API
tags:
  - API
  - Chargement
  - Service Workers
  - Workers
  - hors-ligne
translation_of: Web/API/Service_Worker_API
---
{{ServiceWorkerSidebar}}

{{ SeeCompatTable() }}

Les service workers jouent essentiellement le rôle de serveurs proxy placés entre une application web, et le navigateur ou le réseau (lorsque disponible.) Ils sont destinés (entre autres choses) à permettre la création d'expériences de navigation déconnectée efficaces, en interceptant les requêtes réseau et en effectuant des actions appropriées selon que le réseau est disponible et que des ressources mises à jour sont à disposition sur le serveur. Ils permettront aussi d'accéder aux APIs de notifications du serveur (push) et de synchronisation en arrière-plan.

## Service worker, concepts et usage

Un service worker est un [worker](/en-US/docs/Web/API/Worker) événementiel enregistré auprès d'une origine et d'un chemin. Il prend la forme d'un fichier JavaScript qui peut contrôler la page ou le site web auquel il est associé, en interceptant et en modifiant la navigation et les requêtes de ressources, et en mettant en cache les ressources selon une granularité très fine pour vous donner une maîtrise complète de la manière dont doit se comporter votre application dans certaines situations (l'une des plus évidentes étant l'indisponibilité du réseau.)

Un service worker fonctionne dans le contexte d'un worker : il n'a donc pas d'accès au DOM, et s'exécute dans une tâche différente de celle du script principal de votre application, ainsi il est non-bloquant. Il est conçu pour être totalement asynchrone; en conséquence, des APIs telles que [XHR](/fr/docs/Web/API/XMLHttpRequest) en synchrone et [localStorage](/fr/docs/Web/API/Web_Storage_API) ne peuvent pas être utilisées au sein d'un service worker.

Les service workers fonctionnent uniquement sur HTTPS, pour des raisons de sécurité. Laisser des requêtes réseau modifiées sans défense face aux attaques de l'homme du milieu est une bien mauvaise chose.

> **Note :** les service workers ont rallié à eux des tentatives précédemment effectuées dans les mêmes domaines comme l'API [AppCache](http://alistapart.com/article/application-cache-is-a-douchebag) parce qu'ils ne présument pas de ce que vous essayez de faire et ainsi s'interrompent quand ces suppositions ne sont pas tout à fait exactes; tout peut faire l'objet d'un contrôle d'une granularité très fine.

> **Note :** les service workers font un usage intensif des [promesses](/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise), comme généralement ils sont en attente de réponses, auxquelles ils réagissent alors différemment en cas de succès ou en cas d'erreur. L'architecture des promesses est idéale dans ces situations.

### Enregistrement

Un service worker est d'abord enregistré en utilisant la méthode {{domxref("ServiceWorkerContainer.register()")}}. En cas de succès, votre service worker sera téléchargé par le client et tentera l'installation/l'activation (voir ci-dessous) des URLs accédées par l'utilisateur au sein du domaine complet, ou bien au sein d'un sous-ensemble spécifié par vos soins.

### Télécharger, installer et activer

A cette étape, votre service worker observera le cycle de vie suivant :

1.  Téléchargement
2.  Installation
3.  Activation

Le service worker est immédiatement téléchargé lorsqu'un utilisateur accède pour la première fois à une page ou à un site contrôlé par un service worker.

Après cela, il est téléchargé toutes les 24 heures environ. Il \*peut\* être téléchargé plus fréquemment, mais il **doit** être téléchargé toutes les 24 heures pour s'assurer que des scripts défectueux ne constitueraient pas une nuisance durable.

Une tentative d'installation a lieu lorsque le fichier téléchargé se trouve être nouveau — soit qu'il est différent d'un service worker existant (comparaison bit à bit), soit qu'il s'agit du premier service worker rencontré pour cette page ou ce site.

Si c'est la première fois qu'un service worker est rendu disponible, une tentative d'installation a lieu, puis en cas d'installation avec succès il est activé.

S'il existait déjà un service worker, la nouvelle version est installée en arrière-plan, mais pas encore activée — à cette étape, on parle de _worker en attente_. Il n'est activé que lorsqu'il n'y a plus aucune page chargée faisant encore usage de l'ancien service worker. Aussitôt qu'il n'y a plus de telles pages chargées, le nouveau service worker est activé (devenant le _active worker_.)

Vous pouvez guetter l'événement {{domxref("InstallEvent")}}; une action standard consiste à préparer l'usage de votre service worker quand cet événement est lancé, par exemple en créant un cache au moyen de l'API de stockage native, et en y plaçant les ressources dont vous avez besoin pour faire fonctionner de manière déconnectée votre application.

Il y a aussi un événement `activate`. Lorsque cet événement se produit, c'est généralement le bon moment pour nettoyer les vieux caches et toutes les autres choses associées avec la version précédente de votre service worker.

Votre service worker peut répondre aux requêtes en utilisant l'événement {{domxref("FetchEvent")}}. Vous pouvez modifier la réponse à ces requêtes de la manière que vous souhaitez, en utilisant la méthode {{domxref("FetchEvent.respondWith") }}.

> **Note :** Parce que `oninstall`/`onactivate` pourraient prendre du temps à s'exécuter, la spec service worker fournit une méthode `waitUntil` qui, lorsque `oninstall` ou `onactivate` sont appelées, passe une promesse. Les événements fonctionnels ne sont pas envoyés au service worker tant que la promesse n'a pas été résolue avec succès.

Pour un tutoriel complet qui montre comment réaliser un premier exemple basique, il est conseillé de lire [Utiliser les Services Workers](/fr/docs/Web/API/Service_Worker_API/Using_Service_Workers).

## Autres idées de cas d'utilisation

Les service workers sont aussi destinés à être utilisés pour des choses telles que :

- Synchronisation de données en arrière-plan
- Répondre à des requêtes de ressource provenant d'autres origines
- Recevoir des mises à jour centralisées de données coûteuses à calculer telles que la géolocalisation ou le gyroscope, afin que de nombreuses pages puissent bénéficier du même ensemble de données
- Compilation côté client et gestion des dépendances de CoffeeScript, less, modules CJS/AMD, etc. pour des besoins de développement
- Branchements pour des services en arrière-plan
- Personnalisation de gabarit en fonction de certains schémas d'URL
- Amélioration des performances, par exemple en pré-chargeant des ressources dont l'utilisateur aura probablement besoin par la suite, comme de nouvelles images lors de la consultation d'un album photo.

À l'avenir, les service workers seront capables de réaliser nombre d'autres tâches utiles au sein d'une plate-forme web, ce qui les rapprochera de la viabilité des applications natives. Il est intéressant de noter que d'autres spécifications peuvent ou commencent à faire usage du contexte des service workers, par exemple :

- [Synchronisation en arrière-plan](https://github.com/slightlyoff/BackgroundSync) : démarrer un service worker même lorsqu'aucun utilisateur est sur le site, afin de mettre à jour les caches, etc.
- [Réagir à des messages de `push`](/fr/docs/Web/API/Push_API)&nbsp;: démarrer un service worker pour envoyer aux utilisatrices et utilisateurs un message leur signalant qu'un nouveau contenu est disponible.
- Réagir à une date particulière
- Enregistrer une géo-localisation

## Interfaces

- {{domxref("Cache") }}
  - : Représente le stockage pour le couple d'objets {{domxref("Request")}} / {{domxref("Response")}} qui sont mis en cache comme partie du cycle de vie de {{domxref("ServiceWorker")}}.
- {{domxref("CacheStorage") }}
  - : Représente le stockage pour les objets {{domxref("Cache")}}. Il fournit un répertoire maître à tous les caches nommés auxquels un {{domxref("ServiceWorker")}} peut accéder et maintient une correspondance de noms avec les objets {{domxref("Cache")}} correspondants.
- {{domxref("Client") }}
  - : Représente la portée d'un service worker client. Un service worker client est soit un document dans le contexte d'un navigateur ou un {{domxref("SharedWorker")}}, qui est contrôlé par un active worker.
- {{domxref("Clients") }}
  - : Représente un conteneur pour une liste d'objets {{domxref("Client")}}; la façon principale d'accéder aux clients du service worker actif de l'origine en cours.
- {{domxref("ExtendableEvent") }}
  - : Étend la durée de vie des événements `install` et `activate` envoyés au {{domxref("ServiceWorkerGlobalScope")}} comme partie du cycle de vie d'un service worker. Cela garantit que tout événement fonctionnel (comme {{domxref("FetchEvent")}}) n'est pas envoyé au {{domxref("ServiceWorker")}} avant qu'il ne mette à jour des schémas de base de données, supprime des entrées de cache obsolètes, etc.
- {{domxref("ExtendableMessageEvent") }}
  - : L'objet événement d'un événement {{event("message_(ServiceWorker)","message")}} déclenché sur un service worker (lorsqu'un message est reçu par le {{domxref("ServiceWorkerGlobalScope")}} à partir d'un autre contexte) — étend la durée de vie de tels événements.
- {{domxref("FetchEvent") }}
  - : Le paramètre passé au gestionnaire {{domxref("ServiceWorkerGlobalScope.onfetch")}}, l'interface `FetchEvent` représente une action de recherche qui est envoyée au {{domxref("ServiceWorkerGlobalScope")}} d'un {{domxref("ServiceWorker")}}. Il contient des informations à propos de la requête et de la réponse résultante, et fournit la méthode {{domxref("FetchEvent.respondWith", "FetchEvent.respondWith()")}}, qui nous permet de produire une réponse arbitraire en retour à la page contrôlée.
- {{domxref("InstallEvent") }}
  - : Le paramètre passé au gestionnaire {{domxref("ServiceWorkerGlobalScope.oninstall", "oninstall")}}, l'interface `InstallEvent` représente une action d'installation qui est envoyée au {{domxref("ServiceWorkerGlobalScope")}} d'un {{domxref("ServiceWorker")}}. En tant qu'enfant de {{domxref("ExtendableEvent")}}, il garantit que les événements fonctionnels tels que {{domxref("FetchEvent")}} ne sont pas envoyés pendant l'installation.
- {{domxref("Navigator.serviceWorker") }}
  - : Retourne un objet {{domxref("ServiceWorkerContainer")}}, qui fournit un accès provides à l'enregistrement, la supression, la mise à jour, et la communication avec les objets {{domxref("ServiceWorker")}} pour le [document associé](https://html.spec.whatwg.org/multipage/browsers.html#concept-document-window).
- {{domxref("NotificationEvent") }}
  - : Le paramètre passé au gestionnaire {{domxref("ServiceWorkerGlobalScope.onnotificationclick", "onnotificationclick")}}, l'interface `NotificationEvent` représente un événement de notification au clic qui est envoyé au {{domxref("ServiceWorkerGlobalScope")}} d'un {{domxref("ServiceWorker")}}.
- {{domxref("PeriodicSyncEvent")}} {{non-standard_inline}}
  - : Le paramètre passé au gestionnaire sync, l'interface SyncEvent représente une action de synchronisation périodique qui est envoyée au  {{domxref("ServiceWorkerGlobalScope")}} d'un ServiceWorker.
- {{domxref("PeriodicSyncManager")}} {{non-standard_inline}}
  - : Fournit une interface pour l'enregistrement et la récupération des objets {{domxref("PeriodicSyncRegistration")}}.
- {{domxref("PeriodicSyncRegistration")}} {{non-standard_inline}}
  - : Fournit un objet pour la gestion d'une synchronisation périodique en arrière-plan.
- {{domxref("ServiceWorker") }}
  - : Représente un service worker. De multiples contextes de navigation (e.g. des pages, des workers, etc.) peuvent être associés au même objet `ServiceWorker`.
- {{domxref("ServiceWorkerContainer") }}
  - : Fournit un objet représentant le service worker comme une unité d'ensemble dans l'éco-système du réseau, en incluant des facilités d'enregistrement, de désinscription et de mise à jour des service workers, et d'accès à l'état des service workers et de leur enregistrement.
- {{domxref("ServiceWorkerGlobalScope") }}
  - : Représente le contexte global d'exécution d'un service worker.
- {{domxref("ServiceWorkerMessageEvent")}}
  - : Contient des informations à propos d'un événement envoyé à la cible d'un {{domxref("ServiceWorkerContainer")}}.
- {{domxref("ServiceWorkerRegistration") }}
  - : Représente l'enregistrement d'un service worker.
- {{domxref("SyncEvent")}} {{non-standard_inline}}
  - : Le paramètre passé au gestionnaire sync, l'interface SyncEvent représente une action de synchronisation qui est envoyée au {{domxref("ServiceWorkerGlobalScope")}} d'un ServiceWorker.
- {{domxref("SyncManager")}} {{non-standard_inline}}
  - : Fournit une interface pour l'enregistrement et la récupération des objets {{domxref("SyncRegistration")}}.
- {{domxref("SyncRegistration")}} {{non-standard_inline}}
  - : Fournit un objet pour la gestion d'une synchronisation en arrière-plan.
- {{domxref("WindowClient") }}
  - : Représente la portée d'un service worker client qui est un document dans le contexte d'un navigateur, contrôlé par un active worker. C'est un type spécial d'objet {{domxref("Client")}}, avec des propriété et des méthodes supplémentaires.

## Spécifications

| Spécification                                    | Statut                               | Commentaire          |
| ------------------------------------------------ | ------------------------------------ | -------------------- |
| {{SpecName('Service Workers', '')}} | {{Spec2('Service Workers')}} | Définition initiale. |

## Voir aussi

- [ServiceWorker Cookbook](https://serviceworke.rs)
- [Utilisation des Service Workers](/fr/docs/Web/API/Service_Worker_API/Using_Service_Workers)
- [Exemple basique de Service workers](https://github.com/mdn/sw-test)
- [Is ServiceWorker ready?](https://jakearchibald.github.io/isserviceworkerready/)
- [Promises](/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise)
- [Utilisation des web workers](/fr/docs/Utilisation_des_web_workers)
