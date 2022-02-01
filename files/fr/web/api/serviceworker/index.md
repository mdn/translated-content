---
title: ServiceWorker
slug: Web/API/ServiceWorker
tags:
  - API
  - Interface
  - Reference
  - Service Workers
  - ServiceWorker
  - Workers
  - hors-ligne
translation_of: Web/API/ServiceWorker
---
{{APIRef("Service Workers API")}}

L'interface **`ServiceWorker`** de l'[API ServiceWorker](/en-US/docs/Web/API/ServiceWorker_API) met à disposition une référence vers un service worker. Plusieurs  {{glossary("browsing context", "contextes de navigations")}} (par exemple une page, un _worker_, etc.) peuvent être associés au même service worker, chacun à travers un unique objet `ServiceWorker`.

Un objet `ServiceWorker` est disponible dans les propriétés  {{domxref("ServiceWorkerRegistration.active")}} et {{domxref("ServiceWorkerContainer.controller")}} — c'est un service worker qui a été activé et qui contrôle la page (ce service worker a été bien enregistré, et la page contrôlée a été rechargée).

L'interface `ServiceWorker` est distribuée à travers différents évènements de son cycle de vie — `install` et `activate` — et d'utilisation, comme `fetch`. Un objet `ServiceWorker` a un état associé {{domxref("ServiceWorker.state")}}, lié à son cycle de vie.

## Propriétés

_L'interface `ServiceWorker` hérite des propriétés de son parent, le {{domxref("Worker")}}._

- {{domxref("ServiceWorker.scriptURL")}} {{readonlyinline}}
  - : Retourne la `scriptURL` sérialisée du `ServiceWorker`, définie comme une partie du {{domxref("ServiceWorkerRegistration")}}. Cette URL doit avoir la même origine que le document qui enregistre le  `ServiceWorker`.
- {{domxref("ServiceWorker.state")}} {{readonlyinline}}
  - : Retourne le status du service worker. Il retourne l'une des valeurs suivantes : `installing`, `installed,` `activating`, `activated`, or `redundant`.

### Gestionnaires d'évènements

- {{domxref("ServiceWorker.onstatechange")}} {{readonlyinline}}
  - : Une propriété {{domxref("EventListener")}} est appelée quand un évènement de type `statechange` est déclenché; c'est le cas dès que le {{domxref("ServiceWorker.state")}} change.

## Méthodes

L'interface du *`ServiceWorker` hérite des méthodes de son parent, {{domxref("Worker")}}, avec l'exception de {{domxref("Worker.terminate")}}, qui ne doit pas être accessible depuis le service worker.*

## Exemples

Ce fragment de code provient d'[un exemple d'enregistrement d'évènement pour le service worker](https://github.com/GoogleChrome/samples/blob/gh-pages/service-worker/registration-events/index.html) ([démo en direct](https://googlechrome.github.io/samples/service-worker/registration-events/)). Le code écoute tout changement du {{domxref("ServiceWorker.state")}} et retourne sa valeur.

```js
if ('serviceWorker' in navigator) {
  navigator.serviceWorker
    .register('service-worker.js', {
      scope: './'
    })
    .then(({ installing, waiting, active }) => {
      let serviceWorker
      if (installing) {
        serviceWorker = installing
        document.querySelector('#kind').textContent = 'installé'
      } else if (waiting) {
        serviceWorker = waiting
        document.querySelector('#kind').textContent = 'en attente'
      } else if (active) {
        serviceWorker = active
        document.querySelector('#kind').textContent = 'actif'
      }
      if (serviceWorker) {
        // logState(serviceWorker.state);
        serviceWorker.addEventListener('statechange', (e) => {
          // logState(e.target.state);
        })
      }
    })
    .catch((error) => {
      // L'enregistrement s'est mal déroulé. Le fichier service-worker.js
      // est peut-être indisponible ou contient une erreur.
    })
} else {
  // Le navigateur ne supporte pas les service workers.
}
```

## Spécifications

| Spécification                                                                                    | État                                 | Commentaire          |
| ------------------------------------------------------------------------------------------------ | ------------------------------------ | -------------------- |
| {{SpecName('Service Workers', '#service-worker-obj', 'ServiceWorker')}} | {{Spec2('Service Workers')}} | Définition initiale. |

## Compatibilité des navigateurs

{{Compat("api.ServiceWorker")}}

## Voir aussi

- [ServiceWorker Cookbook](https://serviceworke.rs)
- [Using Service Workers](/en-US/docs/Web/API/ServiceWorker_API/Using_Service_Workers)
- [Service workers basic code example](https://github.com/mdn/sw-test)
- [Is ServiceWorker ready?](https://jakearchibald.github.io/isserviceworkerready/)
- {{jsxref("Promise")}}
- [Using web workers](/en-US/docs/Web/Guide/Performance/Using_web_workers)
