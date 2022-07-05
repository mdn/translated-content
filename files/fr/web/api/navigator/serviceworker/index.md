---
title: Navigator.serviceWorker
slug: Web/API/Navigator/serviceWorker
tags:
  - API
  - Navigateur
  - Propriété
  - Reference
  - Service Workers
  - Service worker API
  - ServiceWorker
translation_of: Web/API/Navigator/serviceWorker
---
{{APIRef("Service Workers API")}}

Le **`Navigator.serviceWorker`** est une propriété en lecture seule qui renvoie un objet {{domxref("ServiceWorkerContainer")}}, et qui permet d'accéder à l'enregistrement, la suppression, la mise à jour, et la communication avec les objets {{domxref("ServiceWorker")}} pour le [document associé](https://html.spec.whatwg.org/multipage/browsers.html#concept-document-window).

## syntaxe

    var workerContainerInstance = navigator.serviceWorker;

### Valeur

L'objet {{domxref("ServiceWorkerContainer")}}.



## Exemples

Le code ci-dessous vérifie si le navigateur supporte les service workers.

    if ('serviceWorker' in navigator) {
      // Supported!
    }



## Spécifications

| Spécification                                                                                                        | Statut                               | Commentaire          |
| -------------------------------------------------------------------------------------------------------------------- | ------------------------------------ | -------------------- |
| {{SpecName('Service Workers', '#navigator-service-worker', 'navigator.serviceWorker')}} | {{Spec2('Service Workers')}} | Définition initiale. |

## Compatibilité du navigateur

{{Compat("api.Navigator.serviceWorker")}}

## Voir aussi

- [ServiceWorker API](/en-US/docs/Web/API/ServiceWorker_API)
- [Utilisation de Service Workers](/en-US/docs/Web/API/ServiceWorker_API/Using_Service_Workers)
