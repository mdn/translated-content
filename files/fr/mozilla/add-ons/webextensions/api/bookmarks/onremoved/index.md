---
title: bookmarks.onRemoved
slug: Mozilla/Add-ons/WebExtensions/API/bookmarks/onRemoved
---

{{AddonSidebar()}}

Lancé lorsqu'un signet ou un dossier est supprimé. Lorsqu'un dossier est supprimé de manière récursive, une seule notification est envoyée pour le dossier et aucune pour son contenu.

## Syntaxe

```js
browser.bookmarks.onRemoved.addListener(listener);
browser.bookmarks.onRemoved.removeListener(listener);
browser.bookmarks.onRemoved.hasListener(listener);
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

  - : Fonction qui sera appelée lorsque cet événement se produit. La fonction recevra les arguments suivants :

    - `id`
      - : `string`. ID de l'article qui a été supprimé.

    <!---->

    - `removeInfo`
      - : [`object`](#removeInfo). Plus de détails sur l'élément supprimé.

## Objets supplémentaires

### removeInfo

- `parentId`
  - : `string`. ID du parent de l'élément dans l'arborescence.
- `index`
  - : `integer`. Position d'index basée sur zéro de cet élément dans son parent.
- `node`
  - : {{WebExtAPIRef('bookmarks.BookmarkTreeNode')}}. Informations détaillées sur l'élément qui a été supprimé.

## Exemples

```js
function handleRemoved(id, removeInfo) {
  console.log("Item: " + id + " removed");
  console.log("Title: " + removeInfo.node.title);
  console.log("Url: " + removeInfo.node.url);
}

function handleClick() {
  browser.bookmarks.onRemoved.addListener(handleRemoved);
}

browser.browserAction.onClicked.addListener(handleClick);
```

{{WebExtExamples}}

## Compatibilité des navigateurs

{{Compat}}

> **Note :**
>
> Cette API est basée sur l'API Chromium [`chrome.bookmarks`](https://developer.chrome.com/extensions/bookmarks). Cette documentation provient de [`bookmarks.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/bookmarks.json) dans le code Chromium.
>
> Les données de compatibilité relatives à Microsoft Edge sont fournies par Microsoft Corporation et incluses ici sous la licence Creative Commons Attribution 3.0 pour les États-Unis.

<!--
// Copyright 2015 The Chromium Authors. All rights reserved.
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
-->
