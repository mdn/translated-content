---
title: downloads.open()
slug: Mozilla/Add-ons/WebExtensions/API/downloads/open
tags:
  - API
  - Add-ons
  - Extensions
  - Méthode
  - Non-standard
  - Reference
  - WebExtensions
  - downloads
  - open
translation_of: Mozilla/Add-ons/WebExtensions/API/downloads/open
---
{{AddonSidebar()}}

La fonction **`open()`** de l'API {{WebExtAPIRef("downloads")}} ouvre le fichier téléchargé avec son application associée. Un événement {{WebExtAPIRef("downloads.onChanged")}} se déclenche lorsque l'élément est ouvert pour la première fois.

Pour utiliser cette fonction dans votre extension, vous devez demander la [permission manifest](/fr/Add-ons/WebExtensions/manifest.json/permissions) "downloads.open", ainsi que la permission "downloads". En outre, vous pouvez uniquement appeler cette fonction à l'intérieur du gestionnaire pour une [action utilisateur](/fr/Add-ons/WebExtensions/User_actions).

C'est une fonction asynchrone qui renvoie une [`Promise`](/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise).

## Syntaxe

```js
var opening = browser.downloads.open(
  downloadId      // integer
)
```

### Paramètres

- `downloadId`
  - : Un `integer` représentant l'`id` du {{WebExtAPIRef("downloads.DownloadItem")}} que vous voulez ouvrir.

### Valeur retournée

Une [`Promise`](/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise). Si la demande a été acceptée, la promesse sera remplie sans arguments. Si la demande a échoué, la promesse sera rejetée avec un message d'erreur.

## Compatibilité du navigateur

{{Compat("webextensions.api.downloads.open")}}

## Exemples

Cet exemple ouvre l'élément le plus récemment téléchargé :

```js
function onOpened() {
  console.log(`Opened download item`);
}

function onError(error) {
  console.log(`Error opening item: ${error}`);
}

function openDownload(downloadItems) {
    if (downloadItems.length > 0) {
      var opening = browser.downloads.open(downloadItems[0].id);
      opening.then(onOpened, onError);
    }
  }

var searching = browser.downloads.search({
  limit: 1,
  orderBy: ["-startTime"]
});

searching.then(openDownload, onError);
```

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
