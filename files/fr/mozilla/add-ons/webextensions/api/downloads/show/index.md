---
title: downloads.show()
slug: Mozilla/Add-ons/WebExtensions/API/downloads/show
tags:
  - API
  - Add-ons
  - Extensions
  - Méthode
  - Non-standard
  - Reference
  - WebExtensions
  - downloads
  - show
translation_of: Mozilla/Add-ons/WebExtensions/API/downloads/show
---
{{AddonSidebar()}}

La fonction **`show()`** de l'API {{WebExtAPIRef("downloads")}} affiche le fichier téléchargé dans son dossier contenant dans le gestionnaire de fichiers de la plate-forme sous-jacente.

C'est une fonction asynchrone qui renvoie une [`Promise`](/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise).

## Syntaxe

```js
var showing = browser.downloads.show(
  downloadId             // integer
)
```

### Paramètes

- `downloadId`
  - : Un `integer` représentant l'ID du {{WebExtAPIRef("downloads.DownloadItem", "DownloadItem")}} à afficher.

### Valeur retournée

Une [`Promise`](/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise). Si la demande est acceptée, la promise sera remplie avec un booléen indiquant si la demande a été acceptée. Si la demande échoue, la promise sera rejetée avec un message d'erreur.

## Compatibilité du navigateur

{{Compat("webextensions.api.downloads.show")}}

## Exemples

Cet exemple montre l'élément le plus récemment téléchargé :

```js
function onShowing(success) {
  console.log(`Showing download item: ${success}`);
}

function onError(error) {
  console.log(`Error opening item: ${error}`);
}

function openDownload(downloadItems) {
    if (downloadItems.length > 0) {
      latestDownloadId = downloadItems[0].id;
      var showing = browser.downloads.show(latestDownloadId);
      showing.then(onShowing, onError);
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
