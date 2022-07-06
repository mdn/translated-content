---
title: webRequest.StreamFilter.onstart
slug: Mozilla/Add-ons/WebExtensions/API/webRequest/StreamFilter/onstart
tags:
  - API
  - Add-ons
  - Extensions
  - Reference
  - StreamFilter.onstart
  - WebExtensions
  - webRequest
translation_of: Mozilla/Add-ons/WebExtensions/API/webRequest/StreamFilter/onstart
---
{{AddonSidebar()}}

Un gestionnaire d'événements qui sera appelé lorsque le flux est ouvert et est sur le point de commencer à livrer les données. A partir de ce point, l'extension peut utiliser des fonctions de filtrage telles que {{WebExtAPIRef("webRequest.StreamFilter.write()", "write()")}}, {{WebExtAPIRef("webRequest.StreamFilter.disconnect()", "disconnect()")}}, ou {{WebExtAPIRef("webRequest.StreamFilter.close()", "close()")}}.

## Compatibilité du navigateur

{{Compat("webextensions.api.webRequest.StreamFilter.onstart", 10)}}

## Exemples

Cet exemple remplacera le contenu de la page par "texte de remplacement" :

```js
function listener(details) {
  let filter = browser.webRequest.filterResponseData(details.requestId);

  filter.onstart = event => {
    console.log("started");
    let encoder = new TextEncoder();
    filter.write(encoder.encode("replacement content"));
    filter.close();
  }
}

browser.webRequest.onBeforeRequest.addListener(
  listener,
  {urls: ["https://example.org/"], types: ["main_frame"]},
  ["blocking"]
);
```

{{WebExtExamples}}
