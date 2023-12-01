---
title: ServiceWorkerRegistration.active
slug: Web/API/ServiceWorkerRegistration/active
---

{{SeeCompatTable}}{{APIRef("Service Workers API")}}

La propriété **`active`** de l'interface {{domxref("ServiceWorkerRegistration")}} retourne un _service worker_ dont le {{domxref("ServiceWorker.state")}} est `activating` ou `activated`. Cette propriété est initialement définie à `null`.

Un _worker_ actif contrôle un {{domxref("ServiceWorkerClient")}} si l'URL du client appartient au domaine de l'inscription (l'option `scope` définie lorsque {{domxref("ServiceWorkerContainer.register")}} est initialement appelé.)

> **Note :** Cette fonctionnalité est disponible dans les [Web Workers](/fr/docs/Web/API/Web_Workers_API).

## Syntaxe

```js
sw = ServiceWorker.active;
```

### Valeur

Un objet {{domxref("ServiceWorker")}}, si le _worker_ est actuellement dans un état `activating` ou `activated`.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Utiliser les Service Workers](/fr/docs/Web/API/ServiceWorker_API/Using_Service_Workers)
- [Service workers basic code example](https://github.com/mdn/sw-test)
- [Is ServiceWorker ready?](https://jakearchibald.github.io/isserviceworkerready/)
- {{jsxref("Promise")}}
- [Utilisation des web workers](/fr/docs/Web/Guide/Performance/Using_web_workers)
