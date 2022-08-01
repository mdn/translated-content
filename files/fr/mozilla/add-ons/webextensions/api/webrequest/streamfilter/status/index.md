---
title: webRequest.StreamFilter.status
slug: Mozilla/Add-ons/WebExtensions/API/webRequest/StreamFilter/status
tags:
  - API
  - Add-ons
  - Extensions
  - Reference
  - StreamFilter.status
  - WebExtensions
  - webRequest
translation_of: Mozilla/Add-ons/WebExtensions/API/webRequest/StreamFilter/status
---
{{AddonSidebar()}}

Une chaîne de caractères qui décrit l'état actuel de la demande. Ce sera l'une des valeurs suivantes :

- `"uninitialized"`
  - : Le filtre n'est pas entièrement initialisé. Aucune fonction de filtrage ne peut être appelée.
- `"transferringdata"`
  - : Le canal sous-jacent transfère actuellement des données qui seront acheminées vers l'extension dans un ou plusieurs événements  {{WebExtAPIRef("webRequest.StreamFilter.ondata", "ondata")}}. L'extension peut appeler des fonctions de filtrage telles que  {{WebExtAPIRef("webRequest.StreamFilter.write()", "write()")}}, {{WebExtAPIRef("webRequest.StreamFilter.close()", "close()")}}, ou  {{WebExtAPIRef("webRequest.StreamFilter.disconnect()", "disconnect()")}}.
- `"finishedtransferringdata"`
  - : Le canal sous-jacent a terminé le transfert des données. Dans cet état, l'extension peut toujours écrire des données de réponse en utilisant la fonction  {{WebExtAPIRef("webRequest.StreamFilter.write()", "write()")}}  du filtre.
- `"suspended"`
  - :  Le transfert de données est actuellement suspendu. Dans cet état, l'extension peut reprendre la requête en appelant la fonction  {{WebExtAPIRef("webRequest.StreamFilter.resume()", "resume()")}} et peut écrire les données de réponse en utilisant la fonction  {{WebExtAPIRef("webRequest.StreamFilter.write()", "write()")}}  du filtre.
- `"closed"`
  - : L'extension a fermé la requête en appelant la fonction {{WebExtAPIRef("webRequest.StreamFilter.close()", "close()")}} du filtre. Le filtre ne déclenchera plus d'événements, et l'extension ne peut pas appeler de fonctions de filtrage.
- `"disconnected"`
  - :  L'extension a déconnecté le filtre de la requête en appelant la fonction  {{WebExtAPIRef("webRequest.StreamFilter.disconnect()", "disconnect()")}} du filtre. Toutes les autres données seront livrées directement, sans passer par le filtre. Le filtre ne déclenchera plus d'événements, et l'extension ne peut pas appeler de fonctions de filtrage.
- `"failed"`
  - : Une erreur s'est produite et le filtre a été déconnecté de la requête. L'extension peut trouver un message d'erreur dans {{WebExtAPIRef("webRequest.StreamFilter.error", "error")}}, et ne peut appeler aucune fonction de filtrage.

## Compatibilité du navigateur

{{Compat("webextensions.api.webRequest.StreamFilter.status", 10)}}

## Exemples

```js
function listener(details) {
  let filter = browser.webRequest.filterResponseData(details.requestId);
  console.log(filter.status);          // uninitialized

  filter.onstart = event => {
    console.log(filter.status);        // transferringdata
  }

  filter.ondata = event => {
    console.log(filter.status);        // transferringdata
    // pass through the response data
    filter.write(event.data);
  }

  filter.onstop = event => {
    console.log(filter.status);        // finishedtransferringdata
    filter.disconnect();
    console.log(filter.status);        // disconnected
  }
}

browser.webRequest.onBeforeRequest.addListener(
  listener,
  {urls: ["https://example.com/*"], types: ["main_frame"]},
  ["blocking"]
);
```

{{WebExtExamples}}
