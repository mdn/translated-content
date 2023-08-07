---
title: webRequest.StreamFilter.suspend()
slug: Mozilla/Add-ons/WebExtensions/API/webRequest/StreamFilter/suspend
---

{{AddonSidebar()}}

Suspend une demande. Après cet appel, plus aucune donnée ne sera livrée jusqu'à ce que la requête soit reprise avec un appel à {{WebExtAPIRef("webRequest.StreamFilter.resume()", "resume()")}}.

Vous ne pouvez pas appeler cette fonction avant que l'événement {{WebExtAPIRef("webRequest.StreamFilter.onstart", "onstart")}} ne soit déclenché.

## Syntaxe

```js
filter.suspend();
```

### Paramètres

None.

### Valeur retournée

None.

## Compatibilité des navigateurs

{{Compat}}

## Exemples

Cet exemple utilise la _suspend/resume_ pour retarder une requête web.

```js
function listener(details) {
  let filter = browser.webRequest.filterResponseData(details.requestId);

  filter.onstart = (event) => {
    filter.suspend();

    setTimeout(() => {
      filter.resume();
      filter.disconnect();
    }, 1000);
  };
}

browser.webRequest.onBeforeRequest.addListener(
  listener,
  { urls: ["https://example.org/"], types: ["main_frame"] },
  ["blocking"],
);
```

{{WebExtExamples}}
