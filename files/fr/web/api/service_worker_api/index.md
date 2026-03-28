---
title: API Service Worker
slug: Web/API/Service_Worker_API
l10n:
  sourceCommit: 73ca80b86a348f88f51fdb8f9441c114b76e94f1
---

{{DefaultAPISidebar("Service Workers API")}}{{AvailableInWorkers}}

Les <i lang="en">service workers</i> agissent principalement comme des serveurs intermédiaires entre les applications web, le navigateur, et le réseau (lorsque celui-ci est disponible). Ils sont conçus, entre autres, pour permettre la création de fonctionnalités hors ligne, intercepter les requêtes réseau, et agir en conséquence selon que le réseau est disponible ou non, et mettre à jour les fichiers qui sont situés sur le serveur. Ils permettent également d'accéder aux API de notifications <i lang="en">push</i> et de synchronisation en arrière-plan.

> [!NOTE]
> Les <i lang="en">service workers</i> sont un type de <i lang="en">web worker</i>. Voir [<i lang="en">Web workers</i>](/fr/docs/Web/API/Web_Workers_API) pour des informations générales sur les types de workers et leurs cas d'utilisation.

## Concepts et utilisation des service workers

Un <i lang="en">service worker</i> est un [<i lang="en">worker</i>](/fr/docs/Web/API/Worker) piloté par les évènements, enregistré par rapport à une origine et un chemin. Il prend la forme d'un fichier JavaScript qui peut contrôler la page web/le site auquel il est associé, interceptant et modifiant les requêtes de navigation et de ressources, et mettant en cache les ressources de manière très granulaire pour vous donner un contrôle complet sur le comportement de votre application dans certaines situations (la plus évidente étant lorsque le réseau n'est pas disponible).

Un <i lang="en">service worker</i> s'exécute dans le contexte d'un <i lang="en">worker</i> et n'a donc pas accès au DOM. Il s'exécute dans un <i lang="en">thread</i> différent du <i lang="en">thread</i> JavaScript principal et n'est donc pas bloquant. Il est conçu pour fonctionner de façon complètement asynchrone. Aussi, les API synchrones comme [XHR](/fr/docs/Web/API/XMLHttpRequest) et [<i lang="en">Web Storage</i>](/fr/docs/Web/API/Web_Storage_API) ne peuvent pas être utilisées dans le code d'un <i lang="en">service worker</i>.

Les <i lang="en">service workers</i> ne peuvent pas importer des modules JavaScript de manière dynamique, et [`import()`](/fr/docs/Web/JavaScript/Reference/Operators/import) générera une erreur si elle est appelée dans le contexte global d'un <i lang="en">service worker</i>. Les importations statiques utilisant l'instruction [`import`](/fr/docs/Web/JavaScript/Reference/Statements/import) sont autorisées.

Les <i lang="en">service workers</i> ne sont disponibles que dans des [contextes sécurisés](/fr/docs/Web/Security/Defenses/Secure_Contexts)&nbsp;: cela signifie que leur document est servi avec HTTPS, bien que les navigateurs considèrent également `http://localhost` comme un contexte sécurisé, pour faciliter le développement local. Les connexions HTTP sont susceptibles d'être victimes d'injection de code malveillant par des attaques {{Glossary("MitM", "de l'homme du milieu")}}, et de telles attaques pourraient être aggravées si elles avaient accès à ces API puissantes.

> [!NOTE]
> Sous Firefox, pour effectuer des tests, vous pouvez exécuter les <i lang="en">service workers</i> sur HTTP (de manière non sécurisée)&nbsp;; il suffit de cocher l'option **Activer les Service Workers sur HTTP (lorsque la boîte à outils est ouverte)** dans le menu des options/roue dentée des outils de développement de Firefox.

> [!NOTE]
> Contrairement aux tentatives précédentes dans ce domaine telles que [AppCache <sup>(angl.)</sup>](https://alistapart.com/article/application-cache-is-a-douchebag/), les <i lang="en">service workers</i> ne font pas d'hypothèses sur ce que vous essayez de faire, mais échouent ensuite lorsque ces hypothèses ne sont pas exactement correctes. Au lieu de cela, les <i lang="en">service workers</i> vous donnent un contrôle bien plus granulaire.

> [!NOTE]
> Les <i lang="en">service workers</i> utilisent massivement les [promesses](/fr/docs/Web/JavaScript/Reference/Global_Objects/Promise), car en général ils attendent que des réponses arrivent, après quoi ils réagissent avec une action de succès ou d'échec. L'architecture des promesses est idéale pour cela.

### Enregistrement

On commence par enregistrer un <i lang="en">service worker</i> à l'aide de la méthode {{DOMxRef("ServiceWorkerContainer.register()")}}. Si cela fonctionne, le <i lang="en">service worker</i> sera téléchargé sur le client et tentera les étapes d'installation et d'activation (voir ci-après) pour les URL auxquelles la personne accède pour toute l'origine concernée ou le sous-ensemble qui a été indiqué.

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

S'il y a déjà un <i lang="en">service worker</i> existant disponible, la nouvelle version est installée en arrière-plan mais n'est pas activée immédiatement. À cet instant, le <i lang="en">service worker</i> est considéré comme _<i lang="en">worker</i> en attente_. L'activation a lieu dès qu'il n'y a plus de pages chargées qui utilisent encore l'ancien <i lang="en">service worker</i>. Dès qu'il n'y a plus de pages à charger, le nouveau <i lang="en">service worker</i> est activé (devient donc le _<i lang="en">worker</i> actif_). L'activation peut être déclenchée plus tôt en utilisant {{DOMxRef("ServiceWorkerGlobalScope.skipWaiting()")}} et les pages existantes peuvent alors être revendiquées par le <i lang="en">worker</i> actif avec {{DOMxRef("Clients.claim()")}}.

Il est possible d'écouter l'évènement {{DOMxRef("ServiceWorkerGlobalScope.install_event", "install")}}&nbsp;; cela permet généralement de préparer le <i lang="en">service worker</i> à être utilisé lorsque cet évènement se déclenche (par exemple en créant un cache avec l'API de stockage et en y plaçant des données qui permettront l'exécution de l'application hors-ligne).

Il existe également un évènement {{DOMxRef("ServiceWorkerGlobalScope.activate_event", "activate")}} qui est déclenché à l'activation. À ce moment, il est généralement utile de rafraîchir les vieux caches et autres éléments associés à l'ancienne version du <i lang="en">service worker</i>.

Un <i lang="en">service worker</i> peut répondre aux requêtes en utilisant l'évènement {{DOMxRef("FetchEvent", "fetch")}}. Les réponses à ces requêtes peuvent être modifiées en utilisant la méthode {{DOMxRef("FetchEvent.respondWith()")}}.

> [!NOTE]
> Comme les évènements `install`/`activate` peuvent prendre un certain temps à finir, la spécification fournit une méthode {{DOMxRef("ExtendableEvent.waitUntil", "waitUntil()")}}. Lorsque celle-ci est appelée sur les évènements `install` ou `activate` avec une promesse, les évènements fonctionnels comme `fetch` et `push` attendront la résolution de la promesse.

Pour un tutoriel complet illustrant comment construire un premier exemple simple fonctionnel, voir le guide [Utiliser les <i lang="en">service workers</i>](/fr/docs/Web/API/Service_Worker_API/Using_Service_Workers).

### Utiliser le routage statique pour contrôler la façon dont les ressources sont récupérées

Les <i lang="en">service workers</i> peuvent entraîner un coût de performance inutile — lorsqu'une page est chargée pour la première fois depuis un certain temps, le navigateur doit attendre que le <i lang="en">service worker</i> démarre et s'exécute pour savoir quel contenu charger et s'il doit venir d'un cache ou du réseau.

Si vous savez déjà à l'avance d'où certains contenus doivent être récupérés, vous pouvez contourner le <i lang="en">service worker</i> et récupérer les ressources immédiatement. La méthode {{DOMxRef("InstallEvent.addRoutes()")}} peut être utilisée pour ce cas d'usage et plus encore.

## Autres idées de cas d'usage

Les <i lang="en">service workers</i> sont également conçus pour répondre à ces scénarios&nbsp;:

- Synchronisation de données en arrière-plan.
- Réponse à des requêtes de ressource depuis d'autres origines.
- Réception de mises à jour de données coûteuses en calcul (par exemple la géolocalisation ou le gyroscope) afin que plusieurs pages puissent utiliser un même ensemble de données.
- Compilation et gestion de dépendances côté client à des fins de développement (par exemple CoffeeScript, less, modules CJS/AMD).
- Déclencheurs (<i lang="en">hooks</i>) pour des services d'arrière-plan.
- Gestion de modèles personnalisés selon le motif des URL.
- Améliorations des performances, par exemple, le préchargement de ressources dont l'utilisateur·ice aura probablement bientôt besoin, comme les prochaines images d'un album photo.
- Simulation d'API.

À l'avenir, les <i lang="en">service workers</i> pourront réaliser d'autres tâches qui rapprocheront la plateforme web des applications natives. D'autres spécifications peuvent déjà exploiter les contextes des <i lang="en">service workers</i>, par exemple&nbsp;:

- [Synchronisation en arrière-plan <sup>(angl.)</sup>](https://github.com/WICG/background-sync)&nbsp;: Démarrer un service worker même lorsqu'il n'y a personne sur le site, afin que les caches puissent être mis à jour, etc.
- [Réaction aux messages push](/fr/docs/Web/API/Push_API)&nbsp;: Démarrer un service worker pour envoyer un message aux utilisateur·ice·s afin de leur indiquer qu'un nouveau contenu est disponible.
- Réaction à une date et une heure données.
- Entrée dans une zone géographique donnée.

## Interfaces

- {{DOMxRef("Cache")}}
  - : Représente le stockage pour la paire d'objets {{DOMxRef("Request")}} / {{DOMxRef("Response")}} mis en cache pendant la vie du {{DOMxRef("ServiceWorker")}}.
- {{DOMxRef("CacheStorage")}}
  - : Représente le stockage pour les objets {{DOMxRef("Cache")}}. Fournit un répertoire racine pour tous les caches nommés auxquels un {{DOMxRef("ServiceWorker")}} peut accéder et maintient la liste des noms des objets {{DOMxRef("Cache")}} correspondants.
- {{DOMxRef("Clients")}}
  - : Représente un conteneur d'une liste d'objets {{DOMxRef("Client")}}&nbsp;; il s'agit de la méthode principale pour accéder aux clients actifs du <i lang="en">service worker</i> à l'origine courante.
- {{DOMxRef("ExtendableEvent")}}
  - : Étend la durée de vie des évènements `install` et `activate` émis sur la portée {{DOMxRef("ServiceWorkerGlobalScope")}} pendant le cycle de vie d'un <i lang="en">service worker</i>. Cela permet de s'assurer que les évènements fonctionnels (comme {{DOMxRef("FetchEvent")}}) ne sont pas diffusés au {{DOMxRef("ServiceWorker")}} tant qu'il n'a pas mis à jour ses schémas de base de données, supprimé ses éléments de cache obsolètes, etc.
- {{DOMxRef("ExtendableMessageEvent")}}
  - : Un objet représentant l'évènement {{DOMxRef("ServiceWorkerGlobalScope/message_event", "message")}} déclenché sur un <i lang="en">service worker</i> (lorsqu'un message de canal est reçu sur la portée {{DOMxRef("ServiceWorkerGlobalScope")}} depuis un autre contexte). Permet d'étendre la durée de vie de tels évènements.
- {{DOMxRef("FetchEvent")}}
  - : Le paramètre passé au gestionnaire d'évènement {{DOMxRef("ServiceWorkerGlobalScope.fetch_event", "onfetch")}}. Représente une action de récupération diffusée sur la portée {{DOMxRef("ServiceWorkerGlobalScope")}} d'un {{DOMxRef("ServiceWorker")}}. Contient des informations à propos de la requête et de la réponse associé. Fournit une méthode {{DOMxRef("FetchEvent.respondWith", "FetchEvent.respondWith()")}} qui permet de fournir une réponse arbitraire à la page contrôlée.
- {{DOMxRef("InstallEvent")}}
  - : Le paramètre passé au gestionnaire d'évènement {{DOMxRef("ServiceWorkerGlobalScope.install_event", "install")}}. Représente une action d'installation diffusée sur la portée {{DOMxRef("ServiceWorkerGlobalScope")}} d'un {{DOMxRef("ServiceWorker")}}. Il s'agit d'une interface enfant de {{DOMxRef("ExtendableEvent")}} et permet donc de s'assurer que les évènements fonctionnels comme {{DOMxRef("FetchEvent")}} ne sont pas diffusés pendant l'installation.
- {{DOMxRef("NavigationPreloadManager")}}
  - : Fournit des méthodes pour gérer le préchargement des ressources avec un <i lang="en">service worker</i>.
- {{DOMxRef("ServiceWorker")}}
  - : Représente un <i lang="en">service worker</i>. Plusieurs contextes de navigation (par exemple, des pages, des <i lang="en">workers</i>, etc.) peuvent être associés au même objet `ServiceWorker`.
- {{DOMxRef("ServiceWorkerContainer")}}
  - : Fournit un objet représentant le <i lang="en">service worker</i> comme une unité dans l'écosystème réseau, avec des utilitaires pour enregistrer, désenregistrer, mettre à jour des <i lang="en">service workers</i> et accéder à l'état des <i lang="en">service workers</i> et de leur enregistrement.
- {{DOMxRef("ServiceWorkerGlobalScope")}}
  - : Représente le contexte global d'exécution d'un <i lang="en">service worker</i>.
- {{DOMxRef("ServiceWorkerRegistration")}}
  - : Représente l'enregistrement d'un <i lang="en">service worker</i>.
- {{DOMxRef("WindowClient")}}
  - : Représente la portée d'un client de <i lang="en">service worker</i> qui est un document dans le contexte d'un navigateur, contrôlé par un <i lang="en">worker</i> actif. Il s'agit d'un type particulier d'objet {{DOMxRef("Client")}} avec certaines méthodes et propriétés complémentaires.

### Extensions à d'autres interfaces

- {{DOMxRef("Window.caches")}} et {{DOMxRef("WorkerGlobalScope.caches")}}
  - : Retourne l'objet {{DOMxRef("CacheStorage")}} associé au contexte courant.
- {{DOMxRef("Navigator.serviceWorker")}} et {{DOMxRef("WorkerNavigator.serviceWorker")}}
  - : Retourne un objet {{DOMxRef("ServiceWorkerContainer")}}, qui donne accès à l'enregistrement, la suppression, la mise à jour et la communication avec les objets {{DOMxRef("ServiceWorker")}} pour le [document associé <sup>(angl.)</sup>](https://html.spec.whatwg.org/multipage/browsers.html#concept-document-window).

## Spécifications

{{Specifications}}

## Voir aussi

- [Utiliser les <i lang="en">Service Workers</i>](/fr/docs/Web/API/Service_Worker_API/Using_Service_Workers)
- [Cycle de vie des <i lang="en">Service Workers</i> <sup>(angl.)</sup>](https://web.dev/articles/service-worker-lifecycle)
- [Exemple de code de base pour les <i lang="en">Service Workers</i> <sup>(angl.)</sup>](https://github.com/mdn/dom-examples/tree/main/service-worker/simple-service-worker)
- Les Web APIs qui sont liées à l'API <i lang="en">Service Worker</i>&nbsp;:
  - {{DOMxRef("Background Fetch API", "L'API de récupération en arrière-plan", "", "nocode")}}
  - {{DOMxRef("Background Synchronization API", "L'API de synchronisation en arrière-plan", "", "nocode")}}
  - {{DOMxRef("Content Index API", "L'API d'indexation de contenu", "", "nocode")}}
  - {{DOMxRef("Cookie Store API", "L'API de stockage des cookies", "", "nocode")}}
  - {{DOMxRef("Notifications API", "L'API de notifications", "", "nocode")}}
  - {{DOMxRef("Web-based Payment Handler API", "L'API de gestion des paiements basée sur le web", "", "nocode")}}
  - {{DOMxRef("Push API", "L'API de notifications push", "", "nocode")}}
  - {{DOMxRef("Web Periodic Background Synchronization API", "L'API de synchronisation périodique en arrière-plan", "", "nocode")}}
