---
title: downloads.search()
slug: Mozilla/Add-ons/WebExtensions/API/downloads/search
tags:
  - API
  - Add-ons
  - Extensions
  - Méthode
  - Non-standard
  - Recherche
  - Reference
  - Search
  - WebExtensions
  - downloads
translation_of: Mozilla/Add-ons/WebExtensions/API/downloads/search
---
{{AddonSidebar()}}

La fonction **`search()`** de l'API {{WebExtAPIRef("downloads")}} interroge les {{WebExtAPIRef("downloads.DownloadItem", "DownloadItems")}} disponibles dans le gestionnaire de téléchargements du navigateur, et renvoie celles qui correspondent aux spécifications critères de recherche.

C'est une fonction asynchrone qui renvoie une [`Promise`](/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise).

## Syntaxe

```js
var searching = browser.downloads.search(query);
```

### Paramètres

- `query`
  - : Un objet {{WebExtAPIRef('downloads.DownloadQuery')}}.

### Return value

Une [`Promise`](/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise). La promise est remplie avec un `tableau d'objets` `{{WebExtAPIRef('downloads.DownloadItem')}}` qui correspondent aux critères donnés.

## Compatibilité du navigateur

{{Compat("webextensions.api.downloads.search")}}

## Exemples

En général, vous restreignez les éléments récupérés à l'aide du paramètre de `requête`.

### Obtenez les téléchargements correspondant à "query"

```js
function logDownloads(downloads) {
  for (let download of downloads) {
    console.log(download.id);
    console.log(download.url);
  }
}

function onError(error) {
  console.log(`Error: ${error}`);
}

var searching = browser.downloads.search({
  query:["imgur"]
});

searching.then(logDownloads, onError);
```

### Obtenez un article spécifique

Pour obtenir un {{WebExtAPIRef("downloads.DownloadItem", "DownloadItem")}}, la méthode la plus simple consiste à définir uniquement le champ `id`, comme indiqué dans l'extrait ci-dessous :

```js
function logDownloads(downloads) {
  for (let download of downloads) {
    console.log(download.id);
    console.log(download.url);
  }
}

function onError(error) {
  console.log(`Error: ${error}`);
}

var id = 13;

var searching = browser.downloads.search({id});
searching.then(logDownloads, onError);
```

### Obtenez tous les téléchargements

Si vous voulez renvoyer tout {{WebExtAPIRef("downloads.DownloadItem", "DownloadItems")}}, définissez la `query` sur un objet vide.

```js
function logDownloads(downloads) {
  for (let download of downloads) {
    console.log(download.id);
    console.log(download.url);
  }
}

function onError(error) {
  console.log(`Error: ${error}`);
}

var searching = browser.downloads.search({});
searching.then(logDownloads, onError);
```

### Obtenez le téléchargement le plus récent

Vous pouvez obtenir le téléchargement le plus récent en spécifiant les paramètres de recherche suivants :

```js
function logDownloads(downloads) {
  for (let download of downloads) {
    console.log(download.id);
    console.log(download.url);
  }
}

function onError(error) {
  console.log(`Error: ${error}`);
}

var searching = browser.downloads.search({
   limit: 1,
   orderBy: ["-startTime"]
});
searching.then(logDownloads, onError);
```

Vous pouvez voir ce code en action par exemple dans notre [dernier téléchargement](https://github.com/mdn/webextensions-examples/blob/master/latest-download/popup/latest_download.js).

{{WebExtExamples}}

> **Note :**
>
> Cette API est basée sur l'API Chromium [`chrome.downloads`](https://developer.chrome.com/extensions/downloads).
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
