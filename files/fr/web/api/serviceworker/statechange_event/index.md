---
title: ServiceWorker.onstatechange
slug: Web/API/ServiceWorker/statechange_event
tags:
  - API
  - Propriété
  - Reference
translation_of: Web/API/ServiceWorker/onstatechange
original_slug: Web/API/ServiceWorker/onstatechange
---
{{SeeCompatTable}}{{APIRef("Service Workers API")}}

Une propriété {{domxref("EventListener")}} appelée quand un évenement de type `statechange` est déclenché; c'est le cas dès que le {{domxref("ServiceWorker.state")}} change.

## Syntax

    ServiceWorker.onstatechange = function(statechangeevent) { ... }
    ServiceWorker.addEventListener('statechange', function(statechangeevent) { ... } )

## Examples

Ce fragment de code présente [un exemple d'enregistrement d'évenements pour le service worker](https://github.com/GoogleChrome/samples/blob/gh-pages/service-worker/registration-events/index.html) ([démo live](https://googlechrome.github.io/samples/service-worker/registration-events/)). Le code écoute pour tout changement du {{domxref("ServiceWorker.state")}} et retourne sa valeur.

```js
var serviceWorker;
if (registration.installing) {
  serviceWorker = registration.installing;
  document.querySelector('#kind').textContent = 'installé';
} else if (registration.waiting) {
  serviceWorker = registration.waiting;
  document.querySelector('#kind').textContent = 'en attente';
} else if (registration.active) {
  serviceWorker = registration.active;
  document.querySelector('#kind').textContent = 'actif';
}

if (serviceWorker) {
  logState(serviceWorker.state);
  serviceWorker.addEventListener('statechange', function(e) {
  logState(e.target.state);
  });
}
```

Notez que quand l'évenement `statechange` est déclenché, la référence du service worker peut avoir changée. Par exemple :

```js
navigator.serviceWorker.register(..).then(function(swr) {
  swr.installing.state == "installé"
  swr.installing.onstatechange = function() {
    swr.installing == null;
    // Ici, swr.waiting OU swr.active peuvent valoir true. Parce que l'évènement
    // statechange est mis en queue, pendant que le worker sous jacent est peut être en
    // état d'attente et sera immédiatement activé si possible.
  }
})
```

## Specifications

| Spécification                                                                                                                                | État                                 | Commentaire        |
| -------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------ | ------------------ |
| {{SpecName('Service Workers', '#service-worker-onstatechange-attribute', 'ServiceWorker.onstatechange')}} | {{Spec2('Service Workers')}} | Définition intiale |

## Browser compatibility

{{Compat("api.ServiceWorker.onstatechange")}}
