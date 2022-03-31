---
title: downloads.cancel()
slug: Mozilla/Add-ons/WebExtensions/API/downloads/cancel
tags:
  - API
  - Add-ons
  - Annuler
  - Extensions
  - Metho
  - Non-standard
  - Reference
  - Téléchargement
  - WebExtensions
  - cancel
  - downloads
translation_of: Mozilla/Add-ons/WebExtensions/API/downloads/cancel
---
{{AddonSidebar()}}

La fonction **`cancel()`** de l'API de {{WebExtAPIRef("downloads")}} annule un téléchargement. L'appel échouera si le téléchargement n'est pas actif : par exemple, parce qu'il a terminé le téléchargement..

C'est une fonction asynchrone qui renvoie une [`Promise`](/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise).

## Syntaxe

```js
var canceling = browser.downloads.cancel(
  downloadId      // integer
)
```

### Paramètres

- `downloadId`
  - : `integer`. L'identifiant du téléchargement à annuler.

### Valeur retournée

Une [`Promise`](/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise). Si la demande a été acceptée, la promesse sera remplie sans arguments. Si la demande a échoué, la promesse sera rejetée avec un message d'erreur.

## Compatibilité du navigateur

{{Compat("webextensions.api.downloads.cancel")}}

## Exemples

```js
var downloadId = 13;

function onCanceled() {
  console.log(`Canceled download`);
}

function onError(error) {
  console.log(`Error: ${error}`);
}

var canceling = browser.downloads.cancel(downloadId);
canceling.then(onCanceled, onError);
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
