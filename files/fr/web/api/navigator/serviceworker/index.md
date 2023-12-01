---
title: Navigator.serviceWorker
slug: Web/API/Navigator/serviceWorker
---

{{APIRef("Service Workers API")}}

Le **`Navigator.serviceWorker`** est une propriété en lecture seule qui renvoie un objet {{domxref("ServiceWorkerContainer")}}, et qui permet d'accéder à l'enregistrement, la suppression, la mise à jour, et la communication avec les objets {{domxref("ServiceWorker")}} pour le [document associé](https://html.spec.whatwg.org/multipage/browsers.html#concept-document-window).

## Syntaxe

```js
var workerContainerInstance = navigator.serviceWorker;
```

### Valeur

L'objet {{domxref("ServiceWorkerContainer")}}.

## Exemples

Le code ci-dessous vérifie si le navigateur supporte les service workers.

```js
if ("serviceWorker" in navigator) {
  // Supported!
}
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [ServiceWorker API](/fr/docs/Web/API/ServiceWorker_API)
- [Utilisation de Service Workers](/fr/docs/Web/API/ServiceWorker_API/Using_Service_Workers)
