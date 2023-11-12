---
title: webRequest.StreamFilter.onerror
slug: Mozilla/Add-ons/WebExtensions/API/webRequest/StreamFilter/onerror
---

{{AddonSidebar()}}

Un gestionnaire d'événements qui sera appelé lorsqu'une erreur se produit. C'est le plus souvent parce qu'un ID de requête invalide a été passé dans {{WebExtAPIRef("webRequest.filterResponseData()")}}.

Après le déclenchement de cet événement, la propriété {{WebExtAPIRef("webRequest.StreamFilter.error")}} contiendra un message donnant plus d'informations sur l'erreur.

Notez que cet événement n'est _pas_ déclenché pour les erreurs réseau.

## Compatibilité des navigateurs

{{Compat}}

## Exemples

Cet exemple ajoute un écouteur `onerror` qui enregistre la valeur de {{WebExtAPIRef("webRequest.StreamFilter.error")}}.

```js
function listener(details) {
  let filter = browser.webRequest.filterResponseData("12345");

  filter.onerror = (event) => {
    console.log(`Error: ${filter.error}`);
  };

  //return {}; // not needed
}

browser.webRequest.onBeforeRequest.addListener(
  listener,
  { urls: ["<all_urls>"], types: ["main_frame"] },
  ["blocking"],
);
```

{{WebExtExamples}}
