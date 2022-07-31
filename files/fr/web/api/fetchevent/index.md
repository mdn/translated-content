---
title: FetchEvent
slug: Web/API/FetchEvent
translation_of: Web/API/FetchEvent
---
{{APIRef("Service Workers API")}}{{ SeeCompatTable() }}

Le paramètre passé au gestionnaire {{domxref("ServiceWorkerGlobalScope.onfetch")}}, `FetchEvent` représente une action de récupération qui est délivrée sur la {{domxref("ServiceWorkerGlobalScope")}} d'un {{domxref("ServiceWorker")}}. Il contient des informations relatives à la requête et la réponse associée, et fourni la méthode {{domxref("FetchEvent.respondWith", "FetchEvent.respondWith()")}} , qui permet de renvoyer une réponse arbitraire à la page controlée.

## Constructeur

- {{domxref("FetchEvent.FetchEvent()")}}
  - : Crée un nouvel objet `FetchEvent`.

## Propriétés

_Hérite de son ancêtre, {{domxref("Event")}}_.

- {{domxref("FetchEvent.isReload")}} {{readonlyInline}}
  - : Retourne un {{jsxref("Boolean")}} qui est à `true` si l'évènement a été délivré avec l'intention de recharger la page, ou `false` sinon. Par exemple, cliquer sur le bouton recharger du navigateur est considéré comme une intention de recharger la page, tandis que cliquer sur un lien ou sur le bouton précédent du navigateur n'est pas considéré comme tel.
- {{domxref("FetchEvent.request")}} {{readonlyInline}}
  - : Retourne la {{domxref("Request")}} qui a déclenché l'évènement.
- {{domxref("FetchEvent.clientId")}} {{readonlyInline}}
  - : Retourne l'id du {{domxref("Client")}} controlé par le service worker en cours.

### Propriétés dépréciées

- {{domxref("FetchEvent.client")}} {{readonlyInline}}
  - : Retourne le {{domxref("Client")}} controlé par le service worker en cours.

## Méthodes

_Hérite de son parent,_ _{{domxref("ExtendableEvent")}}_.

- {{domxref("FetchEvent.respondWith()")}}
  - : Promesse qui est résolue en retournant une {{domxref("Response")}} ou une [erreur réseau](http://fetch.spec.whatwg.org/#concept-network-error)  à [`Fetch`](http://fetch.spec.whatwg.org/#concept-fetch).
- {{domxref("ExtendableEvent.waitUntil", "ExtendableEvent.waitUntil()")}}
  - : Etend la durée de vie de l'évènement. Cette méthode est destinée à être appelée dans l'{{event("Event_handlers", "event handler")}} {{event("install")}} pour le worker {{domxref("ServiceWorkerRegistration.installing", "installing")}}, et dans l'{{event("Event_handlers", "event handler")}} {{event("active")}} pour le worker {{domxref("ServiceWorkerRegistration.active", "active")}}.

## Exemples

Ce extrait de code provient de l'exemple [Service Worker Fetch](https://github.com/GoogleChrome/samples/blob/gh-pages/service-worker/prefetch/service-worker.js) ([lancer l'exemple dans le navigateur](https://googlechrome.github.io/samples/service-worker/prefetch/)). Dans une partie antérieure du code,  un {{domxref("InstallEvent")}} contrôle la mise en cache de plusieurs ressources. Le gestionnaire {{domxref("ServiceWorkerGlobalScope.onfetch")}} attends ensuite l'évènement {{event("fetch")}} . Une fois déclenché, {{domxref("FetchEvent.respondWith()")}} retourne une promesse à la page contrôlée. Cette promesse est résolue avec comme valeur de retour la première requête d'URL qui correspond dans l'objet {{domxref("Cache")}}. Si aucune correspondance n'est trouvée (i.e. la ressource n'a pas été mise en cache pendant la phase d'installation), le code va récupérer une réponse depuis le réseau.

Le code gère aussi les exceptions émises depuis l'opération {{domxref("ServiceWorkerGlobalScope.fetch()")}}. A noter que qu'une réponse d'erreur HTTP (e.g., 404) ne déclenche pas d'exception. Elle retourne un objet de réponse normal avec le code d'erreur approprié.

```js
self.addEventListener('fetch', function(event) {
  console.log('Gestion de l\'évènement de fetch pour', event.request.url);

  event.respondWith(
    caches.match(event.request).then(function(response) {
      if (response) {
        console.log('Réponse trouvée en cache:', response);

        return response;
      }
      console.log('Pas de réponse trouvée en cache. Sur le point de la récupérer via le réseau...');

      return fetch(event.request).then(function(response) {
        console.log('La réponse du réseau est:', response);

        return response;
      }).catch(function(error) {
        console.error('Récupération échouée:', error);

        throw error;
      });
    })
  );
});
```

## Spécifications

| Spécification                                                                                | Statut                               | Commentaire          |
| -------------------------------------------------------------------------------------------- | ------------------------------------ | -------------------- |
| {{SpecName('Service Workers', '#fetch-event-section', 'FetchEvent')}} | {{Spec2('Service Workers')}} | Définition initiale. |

## Compatibilité des navigateurs

{{Compat("api.FetchEvent")}}

## Voir aussi

- {{jsxref("Promise")}}
- [Fetch API](/en-US/docs/Web/API/Fetch_API)
