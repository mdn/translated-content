---
title: bookmarks.onImportBegan
slug: Mozilla/Add-ons/WebExtensions/API/bookmarks/onImportBegan
tags:
  - API
  - Add-ons
  - Bookmarks
  - Event
  - Extensions
  - Non-standard
  - Reference
  - WebExtensions
  - onImportBegan
translation_of: Mozilla/Add-ons/WebExtensions/API/bookmarks/onImportBegan
---
{{AddonSidebar()}}

Lancé lorsque le navigateur a commencé à importer un ensemble de signet.

Pendant l'importation d'un ensemble de signets, {{WebExtAPIRef("bookmarks.onCreated", "onCreated")}} peut déclencher plusieurs fois. Si votre extension écoute `onCreated`, et que l'écouteur est cher, vous devez également écouter `onImportBegan` et {{WebExtAPIRef("bookmarks.onImportEnded", "onImportEnded")}}. Lorsque vous recevez `onImportBegan`, ignorez `onCreated` jusqu'à ce que vous receviez `onImportEnded`. Vous pouvez gérer toutes les autres notifications comme d'habitude.

## Syntaxe

```js
browser.bookmarks.onImportBegan.addListener(listener)
browser.bookmarks.onImportBegan.removeListener(listener)
browser.bookmarks.onImportBegan.hasListener(listener)
```

Les événements ont trois fonctions :

- `addListener(callback)`
  - : Ajoute un écouteur à cet événement.
- `removeListener(listener)`
  - : Arrêtez d'écouter cet événement. L'argument `listener` est l'écouteur à supprimer.
- `hasListener(listener)`
  - : Vérifiez si `listener` est enregistré pour cet événement. Renvoie `true` s'il écoute, sinon `false`.

## Syntaxe addListener

### Parameters

- `callback`
  - : Fonction qui sera appelée lorsque cet événement se produit. Il n'y a pas de paramètres.

## Compatibilité du navigateur

{{Compat("webextensions.api.bookmarks.onImportBegan")}}

## Exemples

```js
function handleImportBegan() {
  console.log("Importing...");
}

function handleImportEnded() {
  console.log("...finished.");
}

function handleClick() {
  browser.bookmarks.onImportBegan.addListener(handleImportBegan);
  browser.bookmarks.onImportEnded.addListener(handleImportEnded);
}

browser.browserAction.onClicked.addListener(handleClick);
```

{{WebExtExamples}}

> **Note :**
>
> Cette API est basée sur l'API Chromium [`chrome.bookmarks`](https://developer.chrome.com/extensions/bookmarks). Cette documentation provient de  [`bookmarks.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/bookmarks.json) dans le code Chromium.
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
