---
title: webRequest.StreamFilter.ondata
slug: Mozilla/Add-ons/WebExtensions/API/webRequest/StreamFilter/ondata
tags:
  - API
  - Add-ons
  - Extensions
  - Reference
  - StreamFilter.ondata
  - TextDecoder
  - TextEncoder
  - WebExtensions
  - webRequest
translation_of: Mozilla/Add-ons/WebExtensions/API/webRequest/StreamFilter/ondata
---
{{AddonSidebar()}}

Un gestionnaire d'événements qui sera appelé à plusieurs reprises lorsque les données de réponse sont disponibles. Le gestionnaire est passé un objet `event` qui contient une propriété de `data`, qui contient un morceau des données de réponse sous la forme d'un {{domxref("ArrayBuffer")}}.

## Exemples

Cet exemple ajoute un écouteur `ondata` qui remplace "Example" dans la réponse par  "WebExtension Example".

Notez que cet exemple ne fonctionne que pour les occurrences de "Example" qui sont entièrement contenues dans un bloc de données, et non celles qui chevauchent deux morceaux (ce qui peut arriver \~0.1% du temps pour les gros documents). De plus, il ne traite que les documents codés UTF-8. Une véritable mise en œuvre de ce projet devrait être plus complexe.

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
    // Doing filter.disconnect(); here would make us process only
    // the first chunk, and let the rest through unchanged. Note
    // that this would break multi-byte characters that occur on
    // the chunk boundary!
  }

  filter.onstop = event => {
    filter.close();
  }

  //return {}; // not needed
}

browser.webRequest.onBeforeRequest.addListener(
  listener,
  {urls: ["https://example.com/*"], types: ["main_frame"]},
  ["blocking"]
);
```

Un autre exemple pour le traitement de documents volumineux :

```js
function listener(details) {
  let filter = browser.webRequest.filterResponseData(details.requestId);
  let decoder = new TextDecoder("utf-8");
  let encoder = new TextEncoder();

  let data = [];
  filter.ondata = event => {
    data.push(event.data);
  };

  filter.onstop = event => {
    let str = "";
    if (data.length == 1) {
      str = decoder.decode(data[0]);
    }
    else {
      for (let i = 0; i < data.length; i++) {
        let stream = (i == data.length - 1) ? false : true;
        str += decoder.decode(data[i], {stream});
      }
    }
    // Just change any instance of Example in the HTTP response
    // to WebExtension Example.
    str = str.replace(/Example/g, 'WebExtension $&');
    filter.write(encoder.encode(str));
    filter.close();
  };
}

browser.webRequest.onBeforeRequest.addListener(
  listener,
  {urls: ["https://example.com/"], types: ["main_frame"]},
  ["blocking"]
);
```

L'exemple ci-dessus peut aussi s'écrire ainsi :

```js
function listener(details) {
  let filter = browser.webRequest.filterResponseData(details.requestId);
  let decoder = new TextDecoder("utf-8");
  let encoder = new TextEncoder();

  let data = [];
  filter.ondata = event => {
    data.push(decoder.decode(event.data, {stream: true}));
  };

  filter.onstop = event => {
    data.push(decoder.decode());

    let str = data.join("");
    // Just change any instance of Example in the HTTP response
    // to WebExtension Example.
    str = str.replace(/Example/g, 'WebExtension $&');
    filter.write(encoder.encode(str));
    filter.close();
  };
}

browser.webRequest.onBeforeRequest.addListener(
  listener,
  {urls: ["https://example.com/"], types: ["main_frame"]},
  ["blocking"]
);
```

Cet exemple utilise un {{domxref("Blob")}}:

```js
function listener(details) {
  let filter = browser.webRequest.filterResponseData(details.requestId);
  let encoder = new TextEncoder();

  let data = [];
  filter.ondata = event => {
    data.push(event.data);
  };

  filter.onstop = async event => {
    let blob = new Blob(data, {type: 'text/html'});
    let str = await blob.text();

    // Just change any instance of Example in the HTTP response
    // to WebExtension Example.
    str = str.replace(/Example/g, 'WebExtension $&');
    filter.write(encoder.encode(str));
    filter.close();
  };
}

browser.webRequest.onBeforeRequest.addListener(
  listener,
  {urls: ["https://example.com/"], types: ["main_frame"]},
  ["blocking"]
);
```

Cet exemple combine tous les tampons en un simple tampon :

```js
function listener(details) {
  let filter = browser.webRequest.filterResponseData(details.requestId);
  let decoder = new TextDecoder("utf-8");
  let encoder = new TextEncoder();

  let data = [];
  filter.ondata = event => {
    data.push(new Uint8Array(event.data));
  };

  filter.onstop = event => {
    let combinedLength = 0;
    for (let buffer of data) {
      combinedLength += buffer.length;
    }
    let combinedArray = new Uint8Array(combinedLength);
    let writeOffset = 0;
    while (writeOffset < combinedLength) {
      let buffer = data.shift();
      combinedArray.set(buffer, writeOffset);
      writeOffset += buffer.length;
    }
    let str = decoder.decode(combinedArray);
    // Just change any instance of Example in the HTTP response
    // to WebExtension Example.
    str = str.replace(/Example/g, 'WebExtension $&');
    filter.write(encoder.encode(str));
    filter.close();
  };
}

browser.webRequest.onBeforeRequest.addListener(
  listener,
  {urls: ["https://example.com/"], types: ["main_frame"]},
  ["blocking"]
);
```

{{WebExtExamples}}

## Compatibilité du navigateur

{{Compat("webextensions.api.webRequest.StreamFilter.ondata", 10)}}
