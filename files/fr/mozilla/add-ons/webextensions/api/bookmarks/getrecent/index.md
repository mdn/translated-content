---
title: bookmarks.getRecent()
slug: Mozilla/Add-ons/WebExtensions/API/bookmarks/getRecent
tags:
  - API
  - Add-ons
  - Bookmarks
  - Extensions
  - Méthode
  - Non-standard
  - Reference
  - WebExtensions
  - getRecent
translation_of: Mozilla/Add-ons/WebExtensions/API/bookmarks/getRecent
---
{{AddonSidebar()}}

La méthode `bookmarks.getRecent()` récupère un nombre spécifié de signets ajoutés le plus récemment en tant que tableau d'objets {{WebExtAPIRef('bookmarks.BookmarkTreeNode', 'BookmarkTreeNode')}}.

C'est une fonction asynchrone qui renvoie une [`Promise`](/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise).

## Syntaxe

```js
var gettingRecent = browser.bookmarks.getRecent(
  numberOfItems          // integer
)
```

### Paramètres

- `numberOfItems`
  - : Un nombre représentant le nombre maximum d'éléments à renvoyer. La liste renvoyée contiendra jusqu'à ce nombre des éléments les plus récemment ajoutés. La valeur minimale autorisée ici est 1. Si vous transmettez 0 ou moins, la fonction génère une erreur.

### Valeur retournée

Une [`Promise`](/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise) qui sera remplie avec un tableau d'objets [`BookmarkTreeNode`](/fr/docs/Mozilla/Add-ons/WebExtensions/API/bookmarks/BookmarkTreeNode).

## Exemples

Cet exemple enregistre l'URL du dernier signet ajouté :

```js
function onFulfilled(bookmarks) {
  for (bookmark of bookmarks) {
    console.log(bookmark.url);
  }
}

function onRejected(error) {
  console.log(`An error: ${error}`);
}

var gettingRecent = browser.bookmarks.getRecent(1);
gettingRecent.then(onFulfilled, onRejected);
```

{{WebExtExamples}}

## Compatibilité du navigateur

{{Compat("webextensions.api.bookmarks.getRecent")}}

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
