---
title: webRequest.StreamFilter.onstop
slug: Mozilla/Add-ons/WebExtensions/API/webRequest/StreamFilter/onstop
---

{{AddonSidebar()}}

Un gestionnaire d'événements qui sera appelé lorsque le flux n'a plus de données à livrer. IDans le gestionnaire d'événements, vous pouvez toujours appeler des fonctions de filtrage telles que {{WebExtAPIRef("webRequest.StreamFilter.write()", "write()")}}, {{WebExtAPIRef("webRequest.StreamFilter.disconnect()", "disconnect()")}}, ou {{WebExtAPIRef("webRequest.StreamFilter.close()", "close()")}}.

## Compatibilité des navigateurs

{{Compat}}

## Exemples

Cet exemple ajoutera des "extra stuff" à la réponse :

```js
function listener(details) {
  let filter = browser.webRequest.filterResponseData(details.requestId);
  let encoder = new TextEncoder();

  filter.ondata = (event) => {
    // pass through all the response data
    filter.write(event.data);
  };

  filter.onstop = (event) => {
    filter.write(encoder.encode("extra stuff"));
    filter.disconnect();
  };
}

browser.webRequest.onBeforeRequest.addListener(
  listener,
  { urls: ["https://example.com/*"], types: ["main_frame"] },
  ["blocking"],
);
```

{{WebExtExamples}}
