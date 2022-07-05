---
title: webRequest.filterResponseData()
slug: Mozilla/Add-ons/WebExtensions/API/webRequest/filterResponseData
tags:
  - API
  - Add-ons
  - Extensions
  - Method
  - Reference
  - WebExtensions
  - filterResponseData
  - webRequest
translation_of: Mozilla/Add-ons/WebExtensions/API/webRequest/filterResponseData
---
{{AddonSidebar()}}

Utilisez cette fonction pour créer un objet {{WebExtAPIRef("webRequest.StreamFilter")}} pour une requête particulière.
Vous pouvez ensuite utiliser le filtre de flux pour surveiller et modifier la réponse. Vous appelez typiquement cette fonction à partir d'un écouteur d'événements `webRequest`.

Pour utiliser cette API, vous devez avoir la [permission de l'API](/fr/Add-ons/WebExtensions/manifest.json/permissions#API_permissions) "webRequestBlocking", ainsi que les permissions normales nécessaires à l'auditeur de l'événement (la permission "webRequest" et la [permission hôte ](/fr/Add-ons/WebExtensions/manifest.json/permissions#Host_permissions)pour l'hôte).

## Syntaxe

```js
var filter = browser.webRequest.filterResponseData(
  requestId       // string
)
```

### Paramètres

- `requestId`
  - : `string`. ID de la requête à filtrer. Vous pouvez l'obtenir à partir de l'objet de `details` qui est passé dans n'importe quel écouteur d'événement `webRequest`.

### Valeur retournée

Un objet {{WebExtAPIRef("webRequest.StreamFilter")}} que vous pouvez utiliser pour surveiller et modifier la réponse.

## Exemples

Cet exemple, tiré de l'extension [http-response](https://github.com/mdn/webextensions-examples/tree/master/http-response), crée un filtre dans  {{WebExtAPIRef("webRequest.onBeforeRequest")}} et l'utilise pour modifier la réponse :

```js
function listener(details) {
  let filter = browser.webRequest.filterResponseData(details.requestId);
  let decoder = new TextDecoder("utf-8");
  let encoder = new TextEncoder();

  filter.ondata = event => {
    let str = decoder.decode(event.data, {stream: true});
    // Just change any instance of Example in the HTTP response
    // to WebExtension Example.
    str = str.replace(/Example/g, 'WebExtension Example');
    filter.write(encoder.encode(str));
    filter.disconnect();
  }

  return {};
}

browser.webRequest.onBeforeRequest.addListener(
  listener,
  {urls: ["https://example.com/*"], types: ["main_frame"]},
  ["blocking"]
);
```

{{WebExtExamples}}

## Compatibilité du navigateur

{{Compat("webextensions.api.webRequest.filterResponseData", 10)}}
