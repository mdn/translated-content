---
title: ServiceWorkerContainer
slug: Web/API/ServiceWorkerContainer
---

{{SeeCompatTable}}{{APIRef("Service Workers API")}}

L'interface `ServiceWorkerContainer` de l'[API ServiceWorker](/fr/docs/Web/API/Service_Worker_API) fournit un objet représentant le service worker comme une unité globale de l'écosystème réseau, incluant des fonctionnalités pour enregistrer, désenregistrer et mettre à jour des services workers, et accéder à l'état des services workers et de leurs enregistrements.

Parmi le plus important, cette interface expose la méthode {{domxref("ServiceWorkerContainer.register", "ServiceWorkerContainer.register(scriptURL, scope[, base])")}} utilisée pour enregistrer les services workers, et la propriété {{domxref("ServiceWorkerContainer.controller")}} utilisée pour déterminer si oui ou non la page courante est activement conrôlée.

## Propriétés

- {{domxref("ServiceWorkerContainer.controller")}} {{readonlyinline}}
  - : Retourne un objet {{domxref("ServiceWorker")}} si son état est `activated` (le même objet retourné par {{domxref("ServiceWorkerRegistration.active")}}). Cette propriété retourne `null` si la requête est un rechargement forcé (_Majuscule_ + rechargement) ou si il n'y a pas de worker actif.

<!---->

- {{domxref("ServiceWorkerContainer.ready")}} {{readonlyinline}}
  - : Détermine si oui ou non un service worker est prêt à contrôler la page. Cette propriété retourne une {{jsxref("Promise")}} qui ne sera jamais rejetée, et se résoudra en un {{domxref("ServiceWorkerRegistration")}} avec un worker en état {{domxref("ServiceWorkerRegistration.active")}}.

### Gestionnaires d'événement

- {{domxref("ServiceWorkerContainer.oncontrollerchange")}}
  - : Un gestionnaire d'événement lancé quand un événement [`controllerchange`](/fr/docs/Web/API/ServiceWorkerContainer/controllerchange_event) se produit — quand le {{domxref("ServiceWorkerRegistration")}} associé au document ajoute un nouveau worker en état {{domxref("ServiceWorkerRegistration.active")}}.
- {{domxref("ServiceWorkerContainer.onerror")}}
  - : Un gestionnaire d'événement lancé quand un événement [`error`](/fr/docs/Web/API/ServiceWorkerContainer/error_event) se produit dans le service worker associé.
- {{domxref("ServiceWorkerContainer.onmessage")}}
  - : Un gestionnaire d'événement lancé quand un événement [`message`](/fr/docs/Web/API/ServiceWorkerContainer/message_event) se produit — quand des messages entrants sont reçus par l'objet {{domxref("ServiceWorkerContainer")}} (e.g. par un appel à {{domxref("MessagePort.postMessage()")}}.)

## Méthodes

- {{domxref("ServiceWorkerContainer.register", "ServiceWorkerContainer.register()")}}
  - : Crée ou met à jour un {{domxref("ServiceWorkerRegistration")}} pour un `scriptURL` donné.
- {{domxref("ServiceWorkerContainer.getRegistration()")}}
  - : Récupère un objet {{domxref("ServiceWorkerRegistration")}} dont l'URL de la portée correspond à l'URL du document fourni. Si la méthode ne peut retourner un {{domxref("ServiceWorkerRegistration")}}, elle retourne une [`Promise`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Promise).
- {{domxref("ServiceWorkerContainer.getRegistrations()")}}
  - : Retourne tous les {{domxref("ServiceWorkerRegistration")}} associés à un `ServiceWorkerContainer` dans un tableau. Si la méthode ne peut retourner les {{domxref("ServiceWorkerRegistration")}}, elle retourne une [`Promise`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Promise).

## Exemples

Cet extrait de code provient de [exemple service worker fallback-response](https://github.com/GoogleChrome/samples/blob/gh-pages/service-worker/fallback-response/index.html#L126) (voir [fallback-response live](http://googlechrome.github.io/samples/service-worker/fallback-response/)). Le code test si le navigateur supporte les services workers. Alors le code enregistre le service worker et détermine si la page est activement contrôlée par le service worker. Si elle ne l'est pas, il invite l'utilisateur à recharger la page pour permettre au service worker de prendre le contrôle. Ce code indique aussi les échecs d'enregistrement.

```js
if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("service-worker.js", { scope: "./" })
    .then(function () {
      if (navigator.serviceWorker.controller) {
        document.querySelector("#status").textContent =
          "The service worker is currently handling network operations.";
        showRequestButtons();
      } else {
        document.querySelector("#status").textContent =
          "Please reload this page to allow the service worker to handle network operations.";
      }
    })
    .catch(function (error) {
      document.querySelector("#status").textContent = error;
    });
} else {
  var aElement = document.createElement("a");
  aElement.href =
    "http://www.chromium.org/blink/serviceworker/service-worker-faq";
  aElement.textContent = "unavailable";
  document.querySelector("#status").appendChild(aElement);
}
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Utiliser les Service Workers](/fr/docs/Web/API/Service_Worker_API/Using_Service_Workers)
- [Service workers : exemple basique](https://github.com/mdn/sw-test)
- [Le ServiceWorker est-il prêt&nbsp;?](https://jakearchibald.github.io/isserviceworkerready/)
- {{jsxref("Promise")}}
- [Utiliser les web workers](/fr/docs/Web/API/Web_Workers_API/Using_web_workers)
