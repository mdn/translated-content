---
title: webRequest.StreamFilter.write()
slug: Mozilla/Add-ons/WebExtensions/API/webRequest/StreamFilter/write
tags:
  - API
  - Add-ons
  - Extensions
  - Reference
  - StreamFilter.write()
  - WebExtensions
  - webRequest
translation_of: Mozilla/Add-ons/WebExtensions/API/webRequest/StreamFilter/write
---
{{AddonSidebar()}}Écrit quelques données de réponse dans le flux de sortie..Vous ne pouvez appeler cette fonction qu'après le déclenchement de l'événement {{WebExtAPIRef("webRequest.StreamFilter.onstart", "onstart")}}.

## Syntaxe

```js
filter.write(
  data    // ArrayBuffer or Uint8Array
)
```

### Paramètres

- `data`
  - : [`Uint8Array`](/fr/docs/Web/JavaScript/Reference/Objets_globaux/Uint8Array) ou [`ArrayBuffer`](/fr/docs/Web/JavaScript/Reference/Objets_globaux/ArrayBuffer): tableau d'octets contenant les données à transmettre au moteur de rendu du navigateur.

### Valeur retournée

None.

## Compatibilité du navigateur

{{Compat("webextensions.api.webRequest.StreamFilter.write", 10)}}

## Exemples

Cet exemple utilise `write()` pour remplacer "Example" dans la réponse par  "WebExtension Example".

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

  //return {}; // not needed
}

browser.webRequest.onBeforeRequest.addListener(
  listener,
  {urls: ["https://example.com/*"], types: ["main_frame"]},
  ["blocking"]
);
```

{{WebExtExamples}}
