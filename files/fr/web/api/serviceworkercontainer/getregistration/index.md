---
title: ServiceWorkerContainer.getRegistration()
slug: Web/API/ServiceWorkerContainer/getRegistration
translation_of: Web/API/ServiceWorkerContainer/getRegistration
---
{{APIRef("Service Workers API")}}

La méthode **`getRegistration()`** de l'interface {{domxref("ServiceWorkerContainer")}} fournis un objet {{domxref("ServiceWorkerRegistration")}} dont la porté inclue l'URL du document. Cette méthode retourne une {{jsxref("Promise")}} qui se résout avec un {{domxref("ServiceWorkerRegistration")}} ou `undefined`.

## Syntaxe

    serviceWorkerContainer.getRegistration(scope).then(function(serviceWorkerRegistration) { ... });

### Paramètres

- `scope` {{optional_inline}}
  - : Un identifiant unique pour l'enregistrement du service worker que vous voulez récupérer. L'URL de porté de l'enregistrement . C'est souvent une URL relative.

### Valeur retournée

Une {{domxref("Promise")}} qui est résolue avec un objet {{domxref("ServiceWorkerRegistration")}} ou `undefined`.

## Exemple

```js
navigator.serviceWorker.getRegistration('/app').then(function(registration) {
  if(registration){
    document.querySelector('#status').textContent = 'ServiceWorkerRegistration found.';
  }
});
```

## Spécifications

| Spécification                                                                                                                                                    | Statuts                              | Commentaires         |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------ | -------------------- |
| {{SpecName('Service Workers', '#dom-serviceworkercontainer-getregistration', 'ServiceWorkerContainer: getRegistration')}} | {{Spec2('Service Workers')}} | Définition initiale. |

## Compatibilité des navigateurs

{{Compat("api.ServiceWorkerContainer.getRegistration")}}
