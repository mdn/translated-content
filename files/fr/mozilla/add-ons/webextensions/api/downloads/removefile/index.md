---
title: downloads.removeFile()
slug: Mozilla/Add-ons/WebExtensions/API/downloads/removeFile
tags:
  - API
  - Add-ons
  - Extensions
  - Méthode
  - Non-standard
  - Reference
  - WebExtensions
  - downloads
  - removeFile
translation_of: Mozilla/Add-ons/WebExtensions/API/downloads/removeFile
---
{{AddonSidebar()}}

La fonction **`removeFile()`** de l'API {{WebExtAPIRef("downloads")}} supprime un fichier téléchargé du disque.

Cette API supprime le fichier du disque, mais ne le supprime pas de l'historique des téléchargements du navigateur, donc un appel  {{WebExtAPIRef("downloads.search()")}} renvoie toujours l'élément comme {{WebExtAPIRef("downloads.DownloadItem", "DownloadItem")}}, mais son attribut `exists` sera `false`.

Pour supprimer un fichier de l'historique des téléchargements, vous devez utiliser  {{WebExtAPIRef("downloads.erase()")}}.

C'est une fonction asynchrone qui renvoie une [`Promise`](/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise).

> **Note :** Si vous souhaitez supprimer un fichier téléchargé du disque et l'effacer de l'historique, vous devez appeler `removeFile()` avant d'appeler {{WebExtAPIRef("downloads.erase()")}}. Si vous l'essayez dans l'autre sens, vous obtiendrez une erreur lors de l'appel de `removeFile()`, car le navigateur n'aura plus d'enregistrement du téléchargement.

## Syntaxe

```js
var removing = browser.downloads.removeFile(
  downloadId      // integer
)
```

### Paramètres

- `downloadId`
  - : Un `integer` représentant l'identifiant de  {{WebExtAPIRef("downloads.DownloadItem", "DownloadItem")}} que vous souhaitez supprimer du disque.

### Valeur retournée

Une [`Promise`](/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise). Si la demande a été acceptée, la promesse sera remplie sans arguments. Si la demande a échoué, la promesse sera rejetée avec un message d'erreur.

## Compatibilité du navigateur

{{Compat("webextensions.api.downloads.removeFile")}}

## Exemples

Supprimer le dernier fichier téléchargé :

```js
function onRemoved() {
  console.log(`Removed item`);
}

function onError(error) {
  console.log(`Error: ${error}`);
}

function remove(downloadItems) {
  if (downloadItems.length > 0) {
    var removing = browser.downloads.removeFile(downloadItems[0].id);
    removing.then(onRemoved, onError);
  }
}

var searching = browser.downloads.search({
  limit: 1,
  orderBy: ["-startTime"]
});

searching.then(remove, onError);
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
