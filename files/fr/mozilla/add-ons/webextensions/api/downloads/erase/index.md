---
title: downloads.erase()
slug: Mozilla/Add-ons/WebExtensions/API/downloads/erase
tags:
  - API
  - Add-ons
  - Effacer
  - Extensions
  - Méthode
  - Non-standard
  - Reference
  - WebExtensions
  - downloads
  - erase
translation_of: Mozilla/Add-ons/WebExtensions/API/downloads/erase
---
{{AddonSidebar()}}

La fonction **`erase()`** de l'API {{WebExtAPIRef("downloads")}} efface la correspondance {{WebExtAPIRef("downloads.DownloadItem", "DownloadItems")}} de l'historique de téléchargement du navigateur sans supprimer les fichiers téléchargés du disque.

Pour supprimer les fichiers du disque, vous devez utiliser {{WebExtAPIRef("downloads.removeFile()")}}.

C'est une fonction asynchrone qui renvoie une [`Promise`](/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise).

> **Note :** Si vous souhaitez supprimer un fichier téléchargé du disque et l'effacer de l'historique, vous devez appeler {{WebExtAPIRef("downloads.removeFile()")}} before you call `erase()`. Si vous l'essayez dans l'autre sens, vous obtiendrez une erreur lors de l'appel de {{WebExtAPIRef("downloads.removeFile()")}}, car il n'existe plus selon le navigateur.

## Syntaxe

```js
var erasing = browser.downloads.erase(
  query                    // DownloadQuery
)
```

### Paramètres

- `query`
  - : Un objet {{WebExtAPIRef('downloads.DownloadQuery')}}.

### Valeur retournée

Une [`Promise`](/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise). Si l'appel a réussi, la promesse sera remplie avec un tableau d'entiers représentant les identifiants des {{WebExtAPIRef("downloads.DownloadItem", "DownloadItems")}} effacés. Si aucun élément correspondant au paramètre de requête n'a pu être trouvé, le tableau sera vide. Si l'appel a échoué, la promesse sera rejetée avec un message d'erreur.

## Compatibilité du navigateur

{{Compat("webextensions.api.downloads.erase")}}

## Exemples

Effacer le téléchargement le plus récent :

```js
function onErased(ids) {
  console.log(`Erased: ${ids}`);
}

function onError(error) {
  console.log(`Error erasing item: ${error}`);
}

var erasing = browser.downloads.erase({
  limit: 1,
  orderBy: ["-startTime"]
});

erasing.then(onErased, onError);
```

Tout effacer :

```js
function onErased(ids) {
  console.log(`Erased: ${ids}`);
}

function onError(error) {
  console.log(`Error erasing item: ${error}`);
}

var erasing = browser.downloads.erase({});
erasing.then(onErased, onError);
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
