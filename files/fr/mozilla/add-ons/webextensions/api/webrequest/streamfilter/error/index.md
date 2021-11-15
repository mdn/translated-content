---
title: webRequest.Streamfilter.error
slug: Mozilla/Add-ons/WebExtensions/API/webRequest/StreamFilter/error
tags:
  - API
  - Add-ons
  - Extensions
  - Reference
  - StreamFilter.error
  - WebExtensions
  - webRequest
translation_of: Mozilla/Add-ons/WebExtensions/API/webRequest/StreamFilter/error
---
{{AddonSidebar()}}

Une chaîne de caractères qui contiendra un message d'erreur après le déclenchement de l'événement {{WebExtAPIRef("webRequest.StreamFilter.onerror", "onerror")}}.

## Compatibilité du navigateur

{{Compat("webextensions.api.webRequest.StreamFilter.error", 10)}}

## Exemples

Cet exemple ajoute un écouteur {{WebExtAPIRef("webRequest.StreamFilter.onerror", "onerror")}} qui enregistre la valeur de `error`.

```js
function listener(details) {
  let filter = browser.webRequest.filterResponseData("12345");

  filter.onerror = event => {
    console.log(`Error: ${filter.error}`);
  }

  //return {}; // not needed
}

browser.webRequest.onBeforeRequest.addListener(
  listener,
  {urls: ["<all_urls>"], types: ["main_frame"]},
  ["blocking"]
);
```

{{WebExtExamples}}
