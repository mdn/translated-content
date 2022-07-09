---
title: DedicatedWorkerGlobalScope
slug: Web/API/DedicatedWorkerGlobalScope
translation_of: Web/API/DedicatedWorkerGlobalScope
---
{{APIRef("Web Workers API")}}

L'objet **`DedicatedWorkerGlobalScope`** (le contexte global du {{domxref("Worker")}}) est accessible au moyen du mot clé {{domxref("window.self","self")}}. Certaines fonctions globales additionnelles, des espaces de nom d'objets, et des constructeurs, non associés typiquement au contexte global d'un worker, et néanmoins disponibles, sont listés dans la  [Référence JavaScript](/fr/docs/Web/JavaScript/Reference). Consultez aussi : [Fonctions et classes disponibles dans les Web Workers](/fr/docs/Web/Guide/Needs_categorization/Functions_available_to_workers).

## Propriétés

_Cette interface hérite des propriétés de l'interface {{domxref("WorkerGlobalScope")}}, et de son parent {{domxref("EventTarget")}}, et implémente ainsi les propriétés de {{domxref("WindowTimers")}}, {{domxref("WindowBase64")}}, et {{domxref("WindowEventHandlers")}}._

- {{domxref("DedicatedWorkerGlobalScope.name")}} {{readOnlyinline}}
  - : Le nom du {{domxref("Worker")}} optionnellement donné lors de la création du worker avec le constructeur {{domxref("Worker.Worker", "Worker()")}}. Il est souvent utilisé pour du débogage.

### Propriétés héritées de WorkerGlobalScope

- {{domxref("WorkerGlobalScope.self")}}
  - : Retourne une référence d'objet à l'objet `DedicatedWorkerGlobalScope` lui-même.
- {{domxref("WorkerGlobalScope.console")}} {{readOnlyinline}}
  - : Retourne la {{domxref("Console")}} associée au worker.
- {{domxref("WorkerGlobalScope.location")}} {{readOnlyinline}}
  - : Retourne la {{domxref("WorkerLocation")}} associée au worker. `WorkerLocation` est un objet location spécifique, essentiellement un sous-ensemble de {{domxref("Location")}} utilisé dans le contexte d'un navigateur, mais adapté aux workers.
- {{domxref("WorkerGlobalScope.navigator")}} {{readOnlyinline}}
  - : Retourne le {{domxref("WorkerNavigator")}} associé au worker. `WorkerNavigator` est un objet navigator spécifique, essentiellement un sous-ensemble de {{domxref("Navigator")}} utilisé dans le contexte d'un navigateur, mais adapté aux workers.
- {{domxref("WorkerGlobalScope.performance")}} {{readOnlyinline}} {{Non-standard_inline}}
  - : Retourne l'objet {{domxref("Performance")}} associé au worker, qui correspond à l'objet performance normal, avec seulement à disposition un sous-ensemble de ses propriétés et méthodes.

### Gestionnaires d'événement

_Cette interface hérite des gestionnaires d'événement de l'interface {{domxref("WorkerGlobalScope")}}, et de son parent {{domxref("EventTarget")}}, et implémente ainsi les gestionnaires d'événement de {{domxref("WindowTimers")}}, {{domxref("WindowBase64")}}, et {{domxref("WindowEventHandlers")}}._

- {{domxref("DedicatedWorkerGlobalScope.onmessage")}}
  - : C'est un {{event("Event_handlers", "event handler")}} représentant le code à appeler lorsqu'un événement {{event("message")}} est déclenché. Ces événements sont du type {{domxref("MessageEvent")}} et sont appelés quand le worker reçoit un message du document qui l'a initialisé (i.e. à partir de la méthode {{domxref("Worker.postMessage")}}.)
- {{domxref("DedicatedWorkerGlobalScope.onmessageerror")}}
  - : C'est un {{event("Event_handlers", "event handler")}} représentant le code à appeler lorsqu'un événement {{event("messageerror")}} est déclenché.

## Méthodes

_Cette interface hérite des méthodes de l'interface {{domxref("WorkerGlobalScope")}}, et de son parent {{domxref("EventTarget")}}, et implémente ainsi les méthodes de {{domxref("WindowTimers")}}, {{domxref("WindowBase64")}}, et {{domxref("WindowEventHandlers")}}._

- {{domxref("WorkerGlobalScope.close()")}}
  - : Annule toute tâche en attente dans la boucle d'événement du `WorkerGlobalScope`, mettant alors fin à ce contexte précis.
- {{domxref("DedicatedWorkerGlobalScope.postMessage")}}
  - : Envoie un message — qui peut comprendre  `n'importe quel` objet JavaScript — au document parent qui a préalablement engendré le worker.

### Héritées de WorkerGlobalScope

- {{domxref("WorkerGlobalScope.dump()")}} {{non-standard_inline}}
  - : Écrit un message dans la console.
- {{domxref("WorkerGlobalScope.importScripts()")}}
  - : Importe un ou plusieurs scripts dans le contexte du worker. Vous pouvez spécifier autant de fichiers que souhaité, en les séparant par des virgules. Par exemple: `importScripts('foo.js', 'bar.js');`

### Implémentées à partir d'autres endroits

- {{domxref("WindowBase64.atob()")}}
  - : Décode une chaîne de données qui a été encodée en base-64.
- {{domxref("WindowBase64.btoa()")}}
  - : Crée une chaîne ASCII en base-64 à partir d'une chaîne de données binaires.
- {{domxref("WindowTimers.clearInterval()")}}
  - : Annule l'exécution répétée initiée par {{domxref("WindowTimers.setInterval()")}}.
- {{domxref("WindowTimers.clearTimeout()")}}
  - : Annule l'exécution répété initiée par {{domxref("WindowTimers.setTimeout()")}}.
- {{domxref("WindowTimers.setInterval()")}}
  - : Planifie l'exécution d'une fonction toutes les X millisecondes.
- {{domxref("WindowTimers.setTimeout()")}}
  - : Fixe un délai pour l'exécution d'une fonction.

## Spécifications

| Spécification                                                                                                        | Statut                           | Commentaire |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------- | ----------- |
| {{SpecName('HTML WHATWG', '#dedicatedworkerglobalscope', 'DedicatedWorkerGlobalScope')}} | {{Spec2('HTML WHATWG')}} |             |

## Compatibilité des navigateurs

{{Compat("api.DedicatedWorkerGlobalScope")}}

## Voir aussi

- {{domxref("Worker")}}
- {{domxref("WorkerGlobalScope")}}
- [Utilisation des web workers](/fr/docs/Web/Guide/Performance/Using_web_workers)
- [Fonctions et classes disponibles dans les Web Workers](/fr/docs/Web/Guide/Needs_categorization/Functions_available_to_workers)
