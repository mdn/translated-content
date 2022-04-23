---
title: Clients.claim()
slug: Web/API/Clients/claim
tags:
  - API
  - Clients
  - Méthode
  - Reference
  - Service Workers
  - claim
translation_of: Web/API/Clients/claim
---
{{SeeCompatTable}}{{APIRef("Service Worker Clients")}}

La méthode **`claim()`** de l'interface {{domxref("Clients")}} permet à un service worker actif de se définir comme service worker actif de la page client quand le worker et la page sont dans le même scope. Ceci déclenche un évènement {{domxref("ServiceWorkerContainer.oncontrollerchange","oncontrollerchange")}} dans toutes les pages dans la portée du service worker.

Cette méthode peut être utilisée avec {{domxref("ServiceWorkerGlobalScope.skipWaiting()")}} pour s'assurer que la mise à jour du service worker sous jacent prend effet immédiatement pour et le client courant et tous les autres clients actifs.

## Syntaxe

```js
ServiceWorkerClients.claim().then(function() {
  // Faire quelque chose
});
```

### Paramètres

None.

### Valeur de retour

Une `Promise.`

## Exemple

L'exemple suivant utilise `claim()` dans le gestionnaire d'évènement `onActivate` d'un service worker. Donc la page client chargée dans la même portée n'a pas besoin d'être rechargée avant de pouvoir utiliser le service worker.

```js
self.addEventListener('install', function(event) {
  event.waitUntil(self.skipWaiting());
});
self.addEventListener('activate', function(event) {
  event.waitUntil(self.clients.claim());
});
```

## Spécifications

| Spécification                                                            | Statut                               | Commentaire                                                                                                                                                                                                    |
| ------------------------------------------------------------------------ | ------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| {{SpecName('Service Workers', '#clients', 'Clients')}} | {{Spec2('Service Workers')}} | Définition initiale. Toujours en cours de développement (voir [ticket 414](https://github.com/slightlyoff/ServiceWorker/issues/414) et [ticket 423](https://github.com/slightlyoff/ServiceWorker/issues/423)). |

## Compatibilité de navigateurs

{{Compat("api.Clients.claim")}}

## À voir aussi

- [Utiliser les Service Workers](/en-US/docs/Web/API/ServiceWorker_API/Using_Service_Workers)
- [Example simple de service workers](https://github.com/mdn/sw-test)
- [Est-ce que les ServiceWorker sont prêt?](https://jakearchibald.github.io/isserviceworkerready/)
- {{jsxref("Promise")}}
- [Utilisation optimisée des web workers](/en-US/docs/Web/Guide/Performance/Using_web_workers)
- {{domxref("ServiceWorkerGlobalScope.skipWaiting()")}}
