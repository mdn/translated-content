---
title: Service Worker API
slug: Web/API/Service_Worker_API
l10n:
  sourceCommit: 1a2274453f55f4305809e0463fea71bd266b1bf8
---

{{DefaultAPISidebar("Service Workers API")}}

Les <i lang="en">service workers</i> agissent principalement comme des serveurs intermédiaires entre les applications web, le navigateur, et le réseau (lorsque celui-ci est disponible). Ils sont conçus, entre autres, pour permettre la création de fonctionnalités hors ligne, intercepter les requêtes réseau, et agir en conséquence selon que le réseau est disponible ou non, et mettre à jour les fichiers qui sont situés sur le serveur. Ils permettent également d'accéder aux API de notifications <i lang="en">push</i> et de synchronisation en arrière-plan.

## Concepts et utilisation des <i lang="en">service workers</i>

Un <i lang="en">service worker</i> est un [<i lang="en">worker</i>](/fr/docs/Web/API/Worker) manipulé avec des évènements et enregistré relativement à une origine et à un chemin. Il prend la forme d'un fichier JavaScript qui peut contrôler la page web à laquelle il est associé, interceptant et modifiant les requêtes de ressources et de navigation, permettant une gestion fine de la mise en cache des ressources afin de permettre un contrôle complet sur le comportement de votre application dans certains cas (le plus évident étant l'absence de réseau).

Un <i lang="en">service worker</i> s'exécute dans le contexte d'un <i lang="en">worker</i> et n'a donc pas accès au DOM. Il s'exécute dans un <i lang="en">thread</i> différent du <i lang="en">thread</i> JavaScript principal et n'est donc pas bloquant. Il est conçu pour fonctionner de façon complètement asynchrone. Aussi, les API synchrones comme [XHR](/fr/docs/Web/API/XMLHttpRequest) et [<i lang="en">Web Storage</i>](/fr/docs/Web/API/Web_Storage_API) ne peuvent pas être utilisées dans le code d'un <i lang="en">service worker</i>.

Pour des raisons de sécurité, les <i lang="en">service workers</i> ne fonctionnent qu'avec le protocole HTTPS. En effet, les connexions HTTP sont susceptibles d'être victimes d'injection de code par [attaque du monstre du milieu](/fr/docs/Glossary/MitM) et l'accès à ces API aggraverait ces attaques.

> [!NOTE]
> Sur Firefox, les <i lang="en">service workers</i> ne fonctionnent pas en navigation privée.

> [!NOTE]
> Sur Firefox, il est possible de tester les <i lang="en">service workers</i> via HTTP (donc de façon non-sécurisée) en cochant l'option **Activer les Service Workers via HTTP (lorsque la boîte à outils est ouverte)** dans les options des outils de développement.

> [!NOTE]
> Les <i lang="en">service workers</i> utilisent [les promesses](/fr/docs/Web/JavaScript/Reference/Global_Objects/Promise). Ils attendent généralement l'arrivée de réponses auxquelles ils répondront par une action de réussite ou d'échec. L'architecture asynchrone des promesses est idéale pour ce mode de fonctionnement.

### Enregistrement

On commence par enregistrer un <i lang="en">service worker</i> à l'aide de la méthode [`ServiceWorkerContainer.register()`](/fr/docs/Web/API/ServiceWorkerContainer/register). Si cela fonctionne, le <i lang="en">service worker</i> sera téléchargé sur le client et tentera les étapes d'installation et d'activation (voir ci-après) pour les URL auxquelles la personne accède pour toute l'origine concernée ou le sous-ensemble qui a été indiqué.

### Téléchargement, installation et activation

À partir de ce point, le <i lang="en">service worker</i> suivra ce parcours&nbsp;:

1. Téléchargement
2. Installation
3. Activation

Le <i lang="en">service worker</i> est téléchargé immédiatement lorsque la personne accède pour la première fois à une page/un site contrôlé par un <i lang="en">service worker</i>.

Ensuite, le <i lang="en">service worker</i> est mis à jour&nbsp;:

- Lorsque la personne navigue sur une page concernée par la portée du <i lang="en">service worker</i>.
- Lorsqu'un évènement est déclenché sur le <i lang="en">service worker</i> et qu'il n'a pas été téléchargé lors des dernières 24 heures.

Une tentative d'installation a lieu lorsque le fichier téléchargé est nouveau, soit parce qu'il est différent (en termes d'octets) du <i lang="en">service worker</i> actuel, ou parce que c'est la première fois qu'un <i lang="en">service worker</i> est rencontré pour cette page/ce site.

Si c'est la première fois qu'un <i lang="en">service worker</i> est disponible, une tentative d'installation a lieu et si elle réussit, il est activé.

S'il y a déjà un <i lang="en">service worker</i> existant disponible, la nouvelle version est installée en arrière-plan mais n'est pas activée immédiatement. À cet instant, le <i lang="en">service worker</i> est considéré comme _<i lang="en">worker</i> en attente_. L'activation a lieu dès qu'il n'y a plus de pages chargées qui utilisent encore l'ancien <i lang="en">service worker</i>. Dès qu'il n'y a plus de pages à charger, le nouveau <i lang="en">service worker</i> est activé et devient donc le _<i lang="en">worker</i> actif_. L'activation peut être déclenchée plus tôt en utilisant [`ServiceWorkerGlobalScope.skipWaiting()`](/fr/docs/Web/API/ServiceWorkerGlobalScope/skipWaiting) et les pages existantes peuvent alors être revendiquées par le <i lang="en">worker</i> actif avec [`Clients.claim()`](/fr/docs/Web/API/Clients/claim).

Il est possible d'écouter l'évènement [`install`](/fr/docs/Web/API/ServiceWorkerGlobalScope/install_event), cela permet généralement de préparer le <i lang="en">service worker</i> à être utilisé lorsque cet évènement se déclenche (par exemple en créant un cache avec l'API de stockage et en y plaçant des données qui permettront l'exécution de l'application hors-ligne).

Il existe également un évènement [`activate`](/fr/docs/Web/API/ServiceWorkerGlobalScope/activate_event) qui est déclenché à l'activation. À ce moment, il est généralement utile de rafraîchir les vieux caches et autres éléments associés à l'ancienne version du <i lang="en">service worker</i>.

Un <i lang="en">service worker</i> peut répondre aux requêtes en utilisant l'évènement [`FetchEvent`](/fr/docs/Web/API/FetchEvent). Les réponses à ces requêtes peuvent être modifiées en utilisant la méthode [`FetchEvent.respondWith()`](/fr/docs/Web/API/FetchEvent/respondWith).

> [!NOTE]
> Comme les évènements `install`/`activate` peuvent prendre un certain temps à finir, la spécification fournit une méthode [`waitUntil()`](/fr/docs/Web/API/ExtendableEvent/waitUntil). Lorsque celle-ci est appelée sur les évènements `install` ou `activate` avec une promesse, les évènements fonctionnels comme `fetch` et `push` attendront la résolution de la promesse.

Pour un tutoriel complet illustrant comment construire un premier exemple simple fonctionnel, voir le guide [Utiliser les <i lang="en">service workers</i>](/fr/docs/Web/API/Service_Worker_API/Using_Service_Workers).

## Autres idées de cas d'usage

Les <i lang="en">service workers</i> sont également conçus pour répondre à ces scénarios&nbsp;:

- Synchronisation de données en arrière-plan
- Réponse à des requêtes de ressource depuis d'autres origines
- Réception de mises à jour de données coûteuses en calcul (par exemple la géolocalisation ou le gyroscope) afin que plusieurs pages puissent utiliser un même ensemble de données
- Compilation et gestion de dépendances côté client à des fins de développement (par exemple CoffeeScript, less, modules CJS/AMD)
- Déclencheurs (<i lang="en">hooks</i>) pour des services d'arrière-plan
- Gestion de modèles personnalisés selon le motif des URL
- Amélioration des performances, par exemple pour précharger les ressources qui seront probablement nécessaires ensuite (par exemple la prochaine image d'un album que la personne parcourt).

À l'avenir, les <i lang="en">service workers</i> pourront réaliser d'autres tâches qui rapprocheront la plateforme web des applications natives. D'autres spécifications peuvent déjà exploiter les contextes des <i lang="en">service workers</i>, par exemple&nbsp;:

- [Synchronisation en arrière-plan](https://github.com/WICG/background-sync) pour démarrer un <i lang="en">service worker</i> même lorsqu'il n'y a personne sur le site afin de mettre à jour les caches, etc.
- [Réaction aux messages <i lang="en">push</i>](/fr/docs/Web/API/Push_API) pour démarrer un <i lang="en">service worker</i> afin d'envoyer un message aux personnes pour leur indiquer que du nouveau contenu est disponible
- Réaction à une date/heure donnée
- Entrée dans une zone géographique donnée.

## Interfaces

- [`Cache`](/fr/docs/Web/API/Cache)
  - : Représente le stockage pour la paire d'objets [`Request`](/fr/docs/Web/API/Request) / [`Response`](/fr/docs/Web/API/Response) mis en cache pendant la vie du [<i lang="en">service worker</i>](/fr/docs/Web/API/ServiceWorker).
- [`CacheStorage`](/fr/docs/Web/API/CacheStorage)
  - : Représente le stockage pour les objets [`Cache`](/fr/docs/Web/API/Cache). Fournit un répertoire racine pour tous les caches nommés auxquels un [<i lang="en">service worker</i>](/fr/docs/Web/API/ServiceWorker) peut accéder et maintient la liste des noms des objets [`Cache`](/fr/docs/Web/API/Cache) correspondants.
- [`Client`](/fr/docs/Web/API/Client)
  - : Représente la portée d'un client de <i lang="en">service worker</i>. Un client de <i lang="en">service worker</i> est un document dans le contexte d'un navigateur ou un [`SharedWorker`](/fr/docs/Web/API/SharedWorker), contrôlé par un <i lang="en">worker</i> actif.
- [`Clients`](/fr/docs/Web/API/Clients)
  - : Représente un conteneur d'une liste d'objets [`Client`](/fr/docs/Web/API/Client). Il s'agit de la méthode principale pour accéder aux clients du <i lang="en">service worker</i> actif pour l'origine courante.
- [`ExtendableEvent`](/fr/docs/Web/API/ExtendableEvent)
  - : Étend la durée de vie des évènements `install` et `activate` émis sur la portée [`ServiceWorkerGlobalScope`](/fr/docs/Web/API/ServiceWorkerGlobalScope) pendant le cycle de vie d'un <i lang="en">service worker</i>. Cela permet de s'assurer que les évènements fonctionnels (comme [`FetchEvent`](/fr/docs/Web/API/FetchEvent)) ne sont pas diffusés au [<i lang="en">service worker</i>](/fr/docs/Web/API/ServiceWorker) tant qu'il n'a pas mis à jour ses modèles de base de données, supprimé ses éléments de cache expirés, etc.
- [`ExtendableMessageEvent`](/fr/docs/Web/API/ExtendableMessageEvent)
  - : Un objet représentant l'évènement [`message`](/fr/docs/Web/API/ServiceWorkerGlobalScope/message_event) déclenché sur un <i lang="en">service worker</i> (lorsqu'un message de canal est reçu sur la portée [`ServiceWorkerGlobalScope`](/fr/docs/Web/API/ServiceWorkerGlobalScope) depuis un autre contexte). Permet d'étendre la durée de vie de tels évènements.
- [`FetchEvent`](/fr/docs/Web/API/FetchEvent)
  - : Le paramètre passé au gestionnaire d'évènement [`onfetch`](/fr/docs/Web/API/ServiceWorkerGlobalScope/fetch_event). Représente une action de récupération diffusée sur la portée [`ServiceWorkerGlobalScope`](/fr/docs/Web/API/ServiceWorkerGlobalScope) d'un [<i lang="en">service worker</i>](/fr/docs/Web/API/ServiceWorker). Contient des informations à propos de la requête et de la réponse associé. Fournit une méthode [`FetchEvent.respondWith()`](/fr/docs/Web/API/FetchEvent/respondWith) qui permet de fournir une réponse arbitraire à la page contrôlée.
- [`InstallEvent`](/fr/docs/Web/API/InstallEvent) {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Le paramètre passé au gestionnaire d'évènement [`oninstall`](/fr/docs/Web/API/ServiceWorkerGlobalScope/install_event). Représente une action d'installation diffusée sur la portée [`ServiceWorkerGlobalScope`](/fr/docs/Web/API/ServiceWorkerGlobalScope) d'un [<i lang="en">service worker</i>](/fr/docs/Web/API/ServiceWorker). Il s'agit d'une interface enfant de [`ExtendableEvent`](/fr/docs/Web/API/ExtendableEvent) et permet donc de s'assurer que les évènements fonctionnels comme [`FetchEvent`](/fr/docs/Web/API/FetchEvent) ne sont pas diffusés pendant l'installation.
- [`NavigationPreloadManager`](/fr/docs/Web/API/NavigationPreloadManager)
  - : Fournit des méthodes pour gérer le préchargement des ressources avec un <i lang="en">service worker</i>.
- [`Navigator.serviceWorker`](/fr/docs/Web/API/Navigator/serviceWorker)
  - : Renvoie un objet [`ServiceWorkerContainer`](/fr/docs/Web/API/ServiceWorkerContainer) qui donne accès à l'enregistrement, la suppression, la mise à jour et la communication avec les objets [`ServiceWorker`](/fr/docs/Web/API/ServiceWorker) pour le [document associé](https://html.spec.whatwg.org/multipage/browsers.html#concept-document-window).
- [`NotificationEvent`](/fr/docs/Web/API/NotificationEvent)
  - : Le paramètre passé au gestionnaire d'évènement [`onnotificationclick`](/fr/docs/Web/API/ServiceWorkerGlobalScope/notificationclick_event). L'interface `NotificationEvent` représente un évènement de clic de notification diffusé sur la portée [`ServiceWorkerGlobalScope`](/fr/docs/Web/API/ServiceWorkerGlobalScope) d'un [<i lang="en">service worker</i>](/fr/docs/Web/API/ServiceWorker).
- [`ServiceWorker`](/fr/docs/Web/API/ServiceWorker)
  - : Représente un <i lang="en">service worker</i>. Plusieurs contextes de navigation (par exemple des pages, des <i lang="en">workers</i>) peuvent être associés au même objet `ServiceWorker`.
- [`ServiceWorkerContainer`](/fr/docs/Web/API/ServiceWorkerContainer)
  - : Fournit un objet représentant le <i lang="en">service worker</i> comme une unité dans l'écosystème réseau, avec des utilitaires pour enregistrer, décommissionner, mettre à jour des <i lang="en">service workers</i> et accéder à l'état des <i lang="en">service workers</i> et de leur enregistrement.
- [`ServiceWorkerGlobalScope`](/fr/docs/Web/API/ServiceWorkerGlobalScope)
  - : Représente le contexte global d'exécution d'un <i lang="en">service worker</i>.
- [`MessageEvent`](/fr/docs/Web/API/MessageEvent)
  - : Représente un message envoyé à une portée [`ServiceWorkerGlobalScope`](/fr/docs/Web/API/ServiceWorkerGlobalScope).
- [`ServiceWorkerRegistration`](/fr/docs/Web/API/ServiceWorkerRegistration)
  - : Représente l'enregistrement d'un <i lang="en">service worker</i>.
- [`SyncEvent`](/fr/docs/Web/API/SyncEvent) {{Experimental_Inline}}
  - : L'interface `SyncEvent` représente une action de synchronisation diffusée sur la portée [`ServiceWorkerGlobalScope`](/fr/docs/Web/API/ServiceWorkerGlobalScope) d'un <i lang="en">service worker</i>.
- [`SyncManager`](/fr/docs/Web/API/SyncManager) {{Experimental_Inline}}
  - : Fournit une interface pour enregistrer et écouter les enregistrements de synchronisation.
- [`WindowClient`](/fr/docs/Web/API/WindowClient)
  - : Représente la portée d'un client de <i lang="en">service worker</i> qui est un document dans le contexte d'un navigateur, contrôlé par un <i lang="en">worker</i> actif. Il s'agit d'un type particulier d'objet [`Client`](/fr/docs/Web/API/Client) avec certaines méthodes et propriétés complémentaires.

## Spécifications

{{Specifications}}

## Voir aussi

- [Livre de recettes avec les <i lang="en">service workers</i>](https://github.com/mdn/serviceworker-cookbook)
- [Utiliser les <i lang="en">service workers</i>](/fr/docs/Web/API/Service_Worker_API/Using_Service_Workers)
- [Exemple de code simple avec les <i lang="en">service workers</i>](https://github.com/mdn/dom-examples/tree/main/service-worker/simple-service-worker)
- [Les <i lang="en">service workers</i> sont-ils prêts&nbsp;? (en anglais)](https://jakearchibald.github.io/isserviceworkerready/)
- [`Promise`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Promise)
