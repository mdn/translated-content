---
title: ServiceWorkerRegistration.scope
slug: Web/API/ServiceWorkerRegistration/scope
tags:
  - API
  - Portée
  - Propriété
  - Reference
  - Service Workers
  - ServiceWorkerRegistration
  - scope
translation_of: Web/API/ServiceWorkerRegistration/scope
---
{{APIRef("Service Workers API")}}

La propriété en lecture seule **`scope`** de l'interface {{domxref ("ServiceWorkerRegistration")}} renvoie un identifiant unique pour un enregistrement de service worker. Le service worker doit être sur la même origine que le document qui enregistre le {{domxref ("ServiceWorker")}}.

> **Note :** Cette fonctionnalité est disponible dans [Web Workers](/en-US/docs/Web/API/Web_Workers_API).

## Syntaxe

    serviceWorkerRegistration.scope

## Spécifications

| Spécification                                                                                                                                | État                                 | Commentaire          |
| -------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------ | -------------------- |
| {{SpecName('Service Workers', '#dom-serviceworkerregistration-scope', 'ServiceWorkerRegistration.scope')}} | {{Spec2('Service Workers')}} | Définition initiale. |

## Compatibilité des navigateurs

{{Compat("api.ServiceWorkerRegistration.scope")}}

## Voir également

- [Utilisation des Service Workers](/en-US/docs/Web/API/Service_Worker_API/Using_Service_Workers)
- [Exemple basique de code pour les Services workers](https://github.com/mdn/sw-test)
- [ServiceWorker est-il prêt?](https://jakearchibald.github.io/isserviceworkerready/)
- {{jsxref("Promise","Promesse")}}
- [Utilisation des web workers](/en-US/docs/Web/API/Web_Workers_API/Using_web_workers)
