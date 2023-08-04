---
title: WorkerGlobalScope
slug: Web/API/WorkerGlobalScope
---

{{APIRef("Web Workers API")}}

L'interface **`WorkerGlobalScope`** de l'[API Web Workers](/fr/docs/Web/API/Web_Workers_API) est une interface représentant la portée de tout worker. Les Workers n'ont pas de contexte de navigation; cette portée contient les informations généralement véhiculées par les objets {{domxref("Window")}} — dans ce cas les gestionnaires d'événements, la console ou l'objet {{domxref("WorkerNavigator")}} associé. Chaque `WorkerGlobalScope` a sa propre boucle d'événements.

Cette interface est généralement spécialisée par chaque type de worker : {{domxref("DedicatedWorkerGlobalScope")}} pour les workers dédiés, {{domxref("SharedWorkerGlobalScope")}} pour les workers partagés, et {{domxref("ServiceWorkerGlobalScope")}} pour [ServiceWorker](/fr/docs/Web/API/ServiceWorker_API). La propriété `self` renvoie la portée spécialisée pour chaque contexte.

## Propriétés

_Cette interface hérite des propriétés de l'interface {{domxref("EventTarget")}} et implémente les propriétés de {{domxref("WindowTimers")}}, {{domxref("WindowBase64")}}, et {{domxref("WindowEventHandlers")}}._

### Propriétés standard

- {{domxref("WorkerGlobalScope.navigator")}} {{readOnlyinline}}
  - : Renvoie le {{domxref("WorkerNavigator")}} associé au worker. C'est un objet navigator spécifique, principalement un sous-ensemble de {{domxref("Navigator")}} pour la navigation dans les portées, mais adapté aux workers.
- {{domxref("WorkerGlobalScope.self")}} {{readOnlyinline}}
  - : Renvoie une référence au `WorkerGlobalScope` lui-même. La plupart du temps, il s'agit d'une portée spécifique comme {{domxref("DedicatedWorkerGlobalScope")}}, {{domxref("SharedWorkerGlobalScope")}} ou {{domxref("ServiceWorkerGlobalScope")}}.
- {{domxref("WorkerGlobalScope.location")}} {{readOnlyinline}}
  - : Renvoie le {{domxref("WorkerLocation")}} associé au worker. Il s'agit d'un objet de localisation spécifique, principalement un sous-ensemble de {{domxref ("Location")}} pour les portées de navigation, mais adapté aux workers.

### Propriétés non standard

- {{domxref("WorkerGlobalScope.performance")}} {{readOnlyinline}} {{Non-standard_inline}}
  - : Renvoie la {{domxref ("Performance")}} associée au worker. Il s'agit d'un objet de performance standard, sauf que seul un sous-ensemble de sa propriété et de ses méthodes est disponible pour les nœuds de calcul.
- {{domxref("WorkerGlobalScope.console")}} {{readOnlyinline}} {{Non-standard_inline}}
  - : Renvoie la {{domxref("Console")}} associée au worker.

### Gestionnaires d'événements

Cette interface hérite des gestionnaires d'événements de l'interface {{domxref ("EventTarget")}} et implémente les gestionnaires d'événements de {{domxref ("WindowTimers")}} et {{domxref ("WindowBase64")}}.

- {{domxref("WorkerGlobalScope.onerror")}}
  - : Est un {{domxref ("EventHandler")}} représentant le code à appeler lorsque l'événement `error` est déclenché.
- {{domxref("WorkerGlobalScope.onoffline")}}
  - : Est un {{domxref ("EventHandler")}} représentant le code à appeler lorsque l'événement `offline` est déclenché.
- {{domxref("WorkerGlobalScope.ononline")}}
  - : Est un {{domxref ("EventHandler")}} représentant le code à appeler lorsque l'événement `online` est déclenché.
- {{domxref("WorkerGlobalScope.onlanguagechange")}}
  - : Un {{domxref ("EventHandler")}} déclenché sur l'objet de portée global / worker lorsque les langues préférées de l'utilisateur changent.

## Méthodes

Cette interface hérite des méthodes de l'interface {{domxref ("EventTarget")}} et implémente les méthodes de {{domxref ("WindowTimers")}}, {{domxref ("WindowBase64")}}, {{domxref ("WindowEventHandlers")}} et {{domxref ("GlobalFetch")}}.

### Méthodes standard

- {{domxref("WorkerGlobalScope.close()")}}
  - : Ignore toutes les tâches mises en file d'attente dans la boucle d'événements de `WorkerGlobalScope`, fermant ainsi cette portée particulière.
- {{domxref("WorkerGlobalScope.importScripts()")}}
  - : Importe un ou plusieurs scripts dans la portée du worker. Vous pouvez en spécifier autant que vous le souhaitez, séparés par des virgules. Par exemple&nbsp;: `importScripts('foo.js', 'bar.js');`

### Méthodes non standard

- {{domxref("WorkerGlobalScope.dump()")}} {{non-standard_inline}}
  - : Vous permet d'écrire un message stdout — c'est-à-dire dans votre terminal. C'est la même chose que {{domxref ("window.dump")}} de Firefox, mais pour les workers.

### Méthodes mises en œuvre d'ailleurs

- {{domxref("WindowBase64.atob()")}}
  - : Décode une chaîne de données qui a été encodée à l'aide d'un encodage base 64.
- {{domxref("WindowBase64.btoa()")}}
  - : Crée une chaîne ASCII encodée en base 64 à partir d'une chaîne de données binaires.
- {{domxref("WindowTimers.clearInterval()")}}
  - : Annule l'exécution répétée définie à l'aide de {{domxref ("WindowTimers.setInterval ()")}}.
- {{domxref("WindowTimers.clearTimeout()")}}
  - : Annule l'exécution répétée définie à l'aide de {{domxref ("WindowTimers.setTimeout ()")}}.
- {{domxref("GlobalFetch.fetch()")}}
  - : Démarre le processus de récupération d'une ressource.
- {{domxref("WindowTimers.setInterval()")}}
  - : Planifie l'exécution d'une fonction toutes les X millisecondes.
- {{domxref("WindowTimers.setTimeout()")}}
  - : Définit un délai pour l'exécution d'une fonction.

## Exemple

Vous n'accéderez pas à `WorkerGlobalScope` directement dans votre code; cependant, ses propriétés et méthodes sont héritées par des portées globales plus spécifiques telles que {{domxref ("DedicatedWorkerGlobalScope")}} et {{domxref ("SharedWorkerGlobalScope")}}. Par exemple, vous pouvez importer un autre script dans le worker et imprimer le contenu de l'objet `navigator` de l'étendue du worker en utilisant les deux lignes suivantes:

```js
importScripts("foo.js");
console.log(navigator);
```

> **Note :** Étant donné que la portée globale du script de worker est effectivement la portée globale du worker que vous exécutez ({{domxref ("DedicatedWorkerGlobalScope")}} ou autre) et que toutes les portées globales de worker héritent des méthodes, des propriétés, etc. À partir de `WorkerGlobalScope`, vous pouvez exécuter des lignes telles que celles ci-dessus sans spécifier d'objet parent.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Autre interface d'objet globale: {{domxref("Window")}}, {{domxref("DedicatedWorkerGlobalScope")}}, {{domxref("SharedWorkerGlobalScope")}}, , {{domxref("ServiceWorkerGlobalScope")}}
- Autres interfaces liées aux travailleurs: {{domxref("Worker")}}, {{domxref("WorkerLocation")}}, {{domxref("WorkerGlobalScope")}}, et {{domxref("ServiceWorkerGlobalScope")}}.
- [Utilisation de web workers.](/fr/docs/Web/Guide/Performance/Using_web_workers)
