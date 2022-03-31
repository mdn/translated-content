---
title: webRequest.StreamFilter.resume()
slug: Mozilla/Add-ons/WebExtensions/API/webRequest/StreamFilter/resume
tags:
  - API
  - Add-ons
  - Extensions
  - Reference
  - StreamFilter.resume()
  - WebExtensions
  - webRequest
translation_of: Mozilla/Add-ons/WebExtensions/API/webRequest/StreamFilter/resume
---
{{AddonSidebar()}}

Reprend une requête qui a été précédemment suspendue par un appel à {{WebExtAPIRef("webRequest.StreamFilter.suspend()", "suspend()")}}.

Vous ne pouvez pas appeler cette fonction avant que l'événement  {{WebExtAPIRef("webRequest.StreamFilter.onstart", "onstart")}} ne soit déclenché.

## Syntaxe

```js
filter.suspend()
```

### Paramètres

None.

### Valeur retournée

None.

## Compatibilité du navigateur

{{Compat("webextensions.api.webRequest.StreamFilter.suspend", 10)}}

## Exemples

Cet exemple utilise la _suspend/resume_ pour retarder une requête web

```js
function listener(details) {
  let filter = browser.webRequest.filterResponseData(details.requestId);

  filter.onstart = event => {
    filter.suspend();

    setTimeout(() => {
      filter.resume();
      filter.disconnect();
    }, 1000);

  }
}

browser.webRequest.onBeforeRequest.addListener(
  listener,
  {urls: ["https://example.org/"], types: ["main_frame"]},
  ["blocking"]
);
```

{{WebExtExamples}}
