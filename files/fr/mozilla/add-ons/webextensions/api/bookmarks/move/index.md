---
title: bookmarks.move()
slug: Mozilla/Add-ons/WebExtensions/API/bookmarks/move
tags:
  - API
  - Add-ons
  - Bookmarks
  - Extensions
  - Method
  - Non-standard
  - Reference
  - WebExtensions
  - move
translation_of: Mozilla/Add-ons/WebExtensions/API/bookmarks/move
---
{{AddonSidebar()}}

La méthode **`bookmarks.move()`** déplace le  {{WebExtAPIRef("bookmarks.BookmarkTreeNode", "BookmarkTreeNode")}} à la destination spécifiée dans l'arborescence des signets. Cela vous permet de déplacer un signet vers un nouveau dossier et / ou une position dans le dossier.

> **Attention :** Si votre extension tente de déplacer un signet dans le nœud racine de l’arborescence de signets, l’appel déclenche une erreur avec le message suivant: "_La racine du signet ne peut pas être modifiée_" et le déplacement ne sera pas terminé.

C'est une fonction asynchrone qui renvoie une [`Promise`](/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise).

## Syntaxe

```js
var movingBookmark = browser.bookmarks.move(
  id,                    // string
  destination           // object
)
```

### Paramètres :

- `id`
  - : Un {{jsxref("string")}} contenant l'ID du signet ou du dossier à déplacer.
- `destination`

  - : Un {{jsxref("object")}} qui spécifie la destination du signet. Cet objet doit contenir un ou les deux champs suivants :

    - `parentId` {{optional_inline}}
      - : Un {{jsxref("string")}} qui spécifie l'ID du dossier de destination. Si cette valeur est omise, le signet est déplacé vers un nouvel emplacement dans son dossier actuel.
    - `index` {{optional_inline}}
      - : Un index basé sur 0 spécifiant la position dans le dossier vers lequel déplacer le signet. La valeur 0 déplace le signet vers le haut du dossier. Si cette valeur est omise, le signet est placé à la fin du nouveau dossier parent..

### Valeur retournée

Une [`Promise`](/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise) qui sera remplie avec un seul objet [`bookmarks.BookmarkTreeNode`](/fr/Add-ons/WebExtensions/API/bookmarks/BookmarkTreeNode)  décrivant le noeud déplacé.Si le noeud correspondant au paramètre `id` ne peut pas être trouvé, la promesse est rejetée avec un message d'erreur.

## Exemples

Cet exemple déplace un signet afin qu'il soit le premier signet dans son dossier actuel.

```js
function onMoved(bookmarkItem) {
  console.log(bookmarkItem.index);
}

function onRejected(error) {
  console.log(`An error: ${error}`);
}

var bookmarkId = "abcdefghilkl";

var movingBookmark = browser.bookmarks.move(bookmarkId, {index: 0});
movingBookmark.then(onMoved, onRejected);
```

{{WebExtExamples}}

## Compatibilité du navigateur

{{Compat("webextensions.api.bookmarks.move")}}

> **Note :**
>
> Cette API est basée sur l'API Chromium [`chrome.bookmarks`](https://developer.chrome.com/extensions/bookmarks). Cette documentation provient de  [`bookmarks.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/bookmarks.json) dans le code Chromium.
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
