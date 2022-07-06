---
title: history.deleteUrl()
slug: Mozilla/Add-ons/WebExtensions/API/history/deleteUrl
tags:
  - API
  - Add-ons
  - Extensions
  - History
  - Method
  - Non-standard
  - Reference
  - WebExtensions
  - deleteUrl
translation_of: Mozilla/Add-ons/WebExtensions/API/history/deleteUrl
---
{{AddonSidebar()}}

Supprime toutes les visites à l'URL donnée de l'historique du navigateur.

C'est une fonction asynchrone qui renvoie une [`Promise`](/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise).

## Syntaxe

```js
var deletingUrl = browser.history.deleteUrl(
  details         // object
)
```

### Paramètres

- `details`

  - : `object`. Objet contenant l'URL dont les visites doivent être supprimées.

    - `url`
      - : `string`. L'URL dont les visites doivent être supprimées.

### Valeur retournée

Une [`Promise`](/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise) sera remplie sans paramètres lorsque les visites auront été supprimées.

## Compatibilité du navigateur

{{Compat("webextensions.api.history.deleteUrl")}}

## Exemples

Supprimez toutes les visites de "https\://example.org/" de l'historique, puis vérifiez que cette URL n'est plus renvoyée par {{WebExtAPIRef("history.search()")}}:

```js
var urlToRemove = "https://example.org/";

function onGot(results) {
  if (!results.length) {
    console.log(urlToRemove  + " was removed");
  } else {
    console.log(urlToRemove  + " was not removed");
  }
}

function onRemoved() {
  var searching = browser.history.search({
    text: urlToRemove,
    startTime: 0
  });

  searching.then(onGot);
}

var deletingUrl = browser.history.deleteUrl({url: urlToRemove});

deletingUrl.then(onRemoved);
```

Supprimez la dernière page visitée de l'historique, avec un écouteur à {{WebExtAPIRef("history.onVisitRemoved")}} pour consigner l'URL de la page supprimée :

```js
function onRemoved(removeInfo) {
  if (removeInfo.urls.length) {
    console.log("Removed: " + removeInfo.urls[0]);
  }
}

browser.history.onVisitRemoved.addListener(onRemoved);

function onGot(results) {
  if (results.length) {
    console.log("Removing: " + results[0].url);
    browser.history.deleteUrl({url: results[0].url});
  }
}

var searching = browser.history.search({
  text: "",
  startTime: 0,
  maxResults: 1
});

searching.then(onGot);
```

{{WebExtExamples}}

> **Note :**
>
> Cette API est basée sur l'API Chromium [`chrome.history`](https://developer.chrome.com/extensions/history). Cette documentation est dérivée de [`history.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/history.json) dans le code de Chromium.
>
> Les données de compatibilité relatives à Microsoft Edge sont fournies par Microsoft Corporation et incluses ici sous la licence Creative Commons Attribution 3.0 pour les États-Unis.

<div class="hidden"><pre>// Copyright 2015 The Chromium Authors. All rights reserved.
//
// Redistribution and use in source and binary forms, with or without
// modification, are permitted provided that the following conditions are
// met:
//
//    * Redistributions of source code must retain the above copyright
// notice, this list of conditions and the following disclaimer.
//    * Redistributions in binary form must reproduce the above
// copyright notice, this list of conditions and the following disclaimer
// in the documentation and/or other materials provided with the
// distribution.
//    * Neither the name of Google Inc. nor the names of its
// contributors may be used to endorse or promote products derived from
// this software without specific prior written permission.
//
// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
// "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
// LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
// A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
// OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
// SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
// LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
// DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
// THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
// (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
// OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
</pre></div>
