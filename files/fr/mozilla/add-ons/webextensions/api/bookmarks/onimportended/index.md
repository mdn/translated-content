---
title: bookmarks.onImportEnded
slug: Mozilla/Add-ons/WebExtensions/API/bookmarks/onImportEnded
tags:
  - API
  - Add-ons
  - Bookmarks
  - Event
  - Extensions
  - Non-standard
  - Reference
  - WebExtensions
  - onImportEnded
translation_of: Mozilla/Add-ons/WebExtensions/API/bookmarks/onImportEnded
---
{{AddonSidebar()}}

Lancé lorsque le navigateur a fini d'importer un ensemble de signets.

Voir {{WebExtAPIRef("bookmarks.onImportBegan")}}.

## Syntaxe

```js
browser.bookmarks.onImportEnded.addListener(listener)
browser.bookmarks.onImportEnded.removeListener(listener)
browser.bookmarks.onImportEnded.hasListener(listener)
```

Les événements ont trois fonctions :

- `addListener(callback)`
  - : Ajoute un écouteur à cet événement.
- `removeListener(listener)`
  - : Arrêtez d'écouter cet événement. L'argument `listener` est l'écouteur à supprimer.
- `hasListener(listener)`
  - : Vérifiez si `listener` est enregistré pour cet événement. Renvoie `true` s'il écoute, sinon `false`.

## Syntaxe addListener

### Paramètres

- `callback`
  - : Fonction qui sera appelée lorsque cet événement se produit. Il n'a pas passé de paramètres.

## Compatibilité du navigateur

{{Compat("webextensions.api.bookmarks.onImportEnded")}}

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
