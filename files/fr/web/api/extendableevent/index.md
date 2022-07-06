---
title: ExtendableEvent
slug: Web/API/ExtendableEvent
tags:
  - API
  - Experimental
  - ExtendableEvent
  - Interface
  - Offline
  - Reference
  - Service Workers
  - ServiceWorker
  - Workers
translation_of: Web/API/ExtendableEvent
browser-compat: api.ExtendableEvent
---
{{APIRef("Service Workers API")}}

L'interface **`ExtendableEvent`** étend la durée de vie des événements [`install`](/fr/docs/Web/API/ServiceWorkerGlobalScope/install_event) et [`activate`](/fr/docs/Web/API/ServiceWorkerGlobalScope/activate_event) envoyés dans la portée globale dans le cycle de vie du service worker. Elle s'assure que les événements fonctionnels (comme [`FetchEvent`](/fr/docs/Web/API/FetchEvent)) ne soient pas distribués avant de mettre à jour les schémas de la base de données et de vider l'ancien cache.

Si [`waitUntil()`](/fr/docs/Web/API/ExtendableEvent/waitUntil) est appelé en dehors du gestionnaire `ExtendableEvent`, le navigateur doit lever une exception `InvalidStateError` ; notez que plusieurs appels vont s'empiler, et que les promesses de résultat seront ajoutées à la liste des [promesses à vie étendue](https://slightlyoff.github.io/ServiceWorker/spec/service_worker/index.html#dfn-extend-lifetime-promises).

> **Note :** Le comportement décrit dans le paragraphe précédent a été corrigé dans Firefox 43 (voir [le bug 1180274](https://bugzilla.mozilla.org/show_bug.cgi?id=1180274)).

Cette interface hérite de l'interface [`Event`](/fr/docs/Web/API/Event).

{{InheritanceDiagram(700, 60, 20)}}

> **Note :** Cette interface est disponible seulement quand la portée globale est [`ServiceWorkerGlobalScope`](/fr/docs/Web/API/ServiceWorkerGlobalScope). Elle n'est pas disponible quand c'est un objet [`Window`](/fr/docs/Web/API/Window) ou un autre type de worker.

## Constructeur

- [`ExtendableEvent()`](/fr/docs/Web/API/ExtendableEvent/ExtendableEvent)
  - : Crée un nouvel objet `ExtendableEvent`.

## Propriétés

N'implémente pas de propriétés spécifiques, mais hérite de celles de son parent, _[`Event`](/fr/docs/Web/API/Event)._

## Méthodes

Hérite des méthodes de son parent _[`Event`](/fr/docs/Web/API/Event)._

- [`ExtendableEvent.waitUntil()`](/fr/docs/Web/API/ExtendableEvent/waitUntil)
  - : Étend la durée de vie de l'évènement. Cette méthode doit être appelée dans le gestionnaire d'évènement [`install`](/fr/docs/Web/API/ServiceWorkerGlobalScope/install_event) pour le worker en cours d'installation (voir [`installing`](/fr/docs/Web/API/ServiceWorkerRegistration/installing)) et dans le gestionnaire d'évènement [`activate`](/fr/docs/Web/API/ServiceWorkerGlobalScope/activate_event) pour le worker actif (voir [`active`](/fr/docs/Web/API/ServiceWorkerRegistration/active)).

## Exemples

Ce fragment de code est tiré de [l'exemple du service worker utilisant prefetch](https://github.com/GoogleChrome/samples/blob/gh-pages/service-worker/prefetch/service-worker.js) (voir [l'exemple en live](https://googlechrome.github.io/samples/service-worker/prefetch/)). Ce code appelle [`ExtendableEvent.waitUntil()`](/fr/docs/Web/API/ExtendableEvent/waitUntil) dans le gestionnaire d'évènement [`ServiceWorkerGlobalScope.oninstall`](/fr/docs/Web/API/ServiceWorkerGlobalScope/oninstall), retardant le traitement du worker [`ServiceWorkerRegistration.installing`](/fr/docs/Web/API/ServiceWorkerRegistration/installing) après l'installation jusqu'à ce que la promesse se résolve. La promesse se résout quand toutes les ressources ont été récupérées et mises en cache, ou quand une exception est levée.

Ce fragment de code montre aussi une bonne pratique pour construire des versions de cache utilisées par le service worker. Même s'il n'y a qu'un cache dans cet exemple, la même approche peut être utilisée pour plusieurs caches. Il lie un identifiant court pour un cache avec un nom de cache spécifique et versionné.

```js
var CACHE_VERSION = 1;
var CURRENT_CACHES = {
  prefetch: 'prefetch-cache-v' + CACHE_VERSION
};

self.addEventListener('install', function(event) {
  var urlsToPrefetch = [
    './static/pre_fetched.txt',
    './static/pre_fetched.html',
    'https://www.chromium.org/_/rsrc/1302286216006/config/customLogo.gif'
  ];

  console.log('Installation en cours. Ressources à pré-charger :', urlsToPrefetch);

  event.waitUntil(
    caches.open(CURRENT_CACHES['prefetch']).then(function(cache) {
      cache.addAll(urlsToPrefetch.map(function(urlToPrefetch) {
        return new Request(urlToPrefetch, {mode: 'no-cors'});
      })).then(function() {
        console.log('Toutes les ressources ont été chargées et mises en cache.');
      });
    }).catch(function(error) {
      console.error('Erreur de pré-chargement :', error);
    })
  );
});
```

> **Attention :** Au moment du chargement des ressources, il est très important d'utiliser `{mode: 'no-cors'}` s'il y a une chance que la ressource soit servie depuis un serveur qui ne supporte pas le [CORS](http://en.wikipedia.org/wiki/Cross-origin_resource_sharing). Dans cet exemple, [www.chromium.org](https://www.chromium.org) ne prend pas en charge le CORS.

## Spécifications

| Spécification                                                                                    | Statut                               | Commentaire         |
| ------------------------------------------------------------------------------------------------ | ------------------------------------ | ------------------- |
| {{SpecName('Service Workers', '#extendable-event', 'ExtendableEvent')}} | {{Spec2('Service Workers')}} | Définition initiale |

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Utiliser les Service Workers](/fr/docs/Web/API/ServiceWorker_API/Using_Service_Workers)
- [Un exemple de base pour un service worker](https://github.com/mdn/sw-test)
- [Peut-on utiliser les service workers ?](https://jakearchibald.github.io/isserviceworkerready/)
- [`Promise`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Promise)
- [Utiliser les web workers](/fr/docs/Web/Guide/Performance/Using_web_workers)
