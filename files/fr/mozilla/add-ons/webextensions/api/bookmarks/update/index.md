---
title: bookmarks.update()
slug: Mozilla/Add-ons/WebExtensions/API/bookmarks/update
tags:
  - API
  - Add-ons
  - Bookmarks
  - Extensions
  - Method
  - Non-standard
  - Reference
  - Update
  - WebExtensions
translation_of: Mozilla/Add-ons/WebExtensions/API/bookmarks/update
---
{{AddonSidebar()}}

**`bookmarks.update()`** met à jour le titre et / ou l'URL d'un signet ou le nom d'un dossier de signets.

> **Attention :** Si votre extension tente de mettre à jour un signet dans le nœud racine de l'arborescence de signets, l'appel déclenche une erreur avec le message suivant: "La racine du signet ne peut pas être modifiée" et le signet ne sera pas mis à jour.

C'est une fonction asynchrone qui renvoie une [`Promise`](/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise).

## Syntaxe

```js
var updating = browser.bookmarks.update(
  id,                    // string
  changes                // object
)
```

### Paramètres

- `id`
  - : Un {{jsxref("string")}} spécifiant l'ID du dossier de signet ou de dossier de signets à mettre à jour.
- `changes`

  - : Un {{jsxref("object")}} spécifiant les changements à appliquer, avec une combinaison des champs suivants. Tous les éléments non spécifiés ne sont pas modifiés dans le signet ou le dossier référencé :

    - `title` {{optional_inline}}
      - : Un {{jsxref("string")}} contenant le nouveau titre du signet, ou le nouveau nom du dossier si l'`id` fait référence à un dossier.
    - `url` {{optional_inline}}
      - : Un {{jsxref("string")}} fournissant une nouvelle URL pour le signet.

### Valeur retournée

Une [`Promise`](/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise) qui sera satisfaite avec un seul objet [`bookmarks.BookmarkTreeNode`](/fr/Add-ons/WebExtensions/API/bookmarks/BookmarkTreeNode) représentant le signet mis à jour. Si l'élément de signet correspondant au paramètre `id` ne peut pas être trouvé, la promesse est rejetée.

## Exemples

Cet exemple renomme tous les dossiers nommés "MDN" en "Mozilla Developer Network (MDN)".

```js
function onFulfilled(bookmarkItem) {
  console.log(bookmarkItem.title);
}

function onRejected(error) {
  console.log(`An error: ${error}`);
}

function updateFolders(items) {
  for (item of items) {
    // only folders, so skip items with a `url`
    if (!item.url) {
      var updating = browser.bookmarks.update(item.id, {
        title: "Mozilla Developer Network (MDN)"
      });
      updating.then(onFulfilled, onRejected);
    }
  }
}

var searching = browser.bookmarks.search({ title: "MDN" });
searching.then(updateFolders, onRejected);
```

{{WebExtExamples}}

## Compatibilité du navigateur

{{Compat("webextensions.api.bookmarks.update")}}

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
