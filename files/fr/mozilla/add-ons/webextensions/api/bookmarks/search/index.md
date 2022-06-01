---
title: bookmarks.search()
slug: Mozilla/Add-ons/WebExtensions/API/bookmarks/search
tags:
  - API
  - Add-ons
  - Bookmarks
  - Extensions
  - Method
  - Non-standard
  - Recherche
  - Reference
  - Search
  - WebExtensions
translation_of: Mozilla/Add-ons/WebExtensions/API/bookmarks/search
---
{{AddonSidebar()}}

La fonction **`bookmarks.search()`** recherche les nœuds d'arborescence de signets correspondant à la requête donnée.

Cette fonction déclenche une exception si l'un des paramètres d'entrée n'est pas valide ou n'est pas d'un type approprié ; regardez dans la [console](/fr/Add-ons/WebExtensions/Debugging) pour le message d'erreur. Les exceptions n'ont pas d'ID d'erreur et les messages eux-mêmes peuvent changer, donc n'écrivez pas de code qui essaie de les interpréter.

C'est une fonction asynchrone qui renvoie une [`Promise`](/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise).

## Syntaxe

```js
var searching = browser.bookmarks.search(
  query                  // string or object
)
```

### Paramètres

- `query`

  - : Un {{jsxref("string")}} ou {{jsxref("object")}} décrivant la requête à effectuer.

    Si la `query` est une chaîne, elle comprend zéro ou plusieurs termes de recherche. Les termes de recherche sont délimités par des espaces et peuvent être placés entre guillemets pour permettre la recherche dans des expressions de plusieurs mots. Chaque terme de recherche correspond s'il correspond à une sous-chaîne dans l'URL ou le titre du signet. La correspondance est insensible à la casse. Pour qu'un signet corresponde à la requête, tous les termes de recherche de la requête doivent correspondre.

    Si la `query` un objet, elle possède zéro ou plus des trois propriétés suivantes : `query`, `title`, et `url`, qui sont décrites ci-dessous. Pour qu'un signet corresponde à la requête, tous les termes de propriétés fournis doivent correspondre aux valeurs spécifiées.

    - `query` {{optional_inline}}
      - : Un {{jsxref("string")}} spécifiant un ou plusieurs termes à comparer; le format est identique à la forme de chaîne du paramètre du `query`. Si ce n'est pas une chaîne, une exception est levée.
    - `url` {{optional_inline}}
      - : Un {{jsxref("string")}} qui doit correspondre exactement à l'URL du signet. La correspondance est insensible à la casse et les barres obliques de fin sont ignorées.Si vous passez une URL invalide ici, la fonction lèvera une exception.
    - `title` {{optional_inline}}
      - : Un {{jsxref("string")}} Ceci doit correspondre exactement au titre du noeud de l'arbre du signet. La correspondance est sensible à la casse.

### Valeur retournée

Une [`Promise`](/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise) sera accompli avec un tableau d'objets {{WebExtAPIRef('bookmarks.BookmarkTreeNode')}}, chacun représentant un seul nœud d'arbre de signet correspondant. Les résultats sont renvoyés dans l'ordre de création des nœuds. Le tableau est vide si aucun résultat n'a été trouvé.Le [`BookmarkTreeNodes`](/fr/Add-ons/WebExtensions/API/bookmarks/BookmarkTreeNode)—même du type `"folder"` — renvoyé par  `bookmarks.search()` ne contiennent pas la propriété children. Pour obtenir un  `BookmarkTreeNode` utilisez [`bookmarks.getSubTree()`](/fr/Add-ons/WebExtensions/API/bookmarks/getSubTree).

## Exemple

Cet exemple enregistre les ID de tous les signets :

```js
function onFulfilled(bookmarkItems) {
  for (item of bookmarkItems) {
    console.log(item.id);
  }
}

function onRejected(error) {
  console.log(`An error: ${error}`);
}

var searching = browser.bookmarks.search({});

searching.then(onFulfilled, onRejected);
```

Cet exemple cherche à voir si l'onglet actuellement actif est marqué d'un signet :

```js
function onFulfilled(bookmarkItems) {
  if (bookmarkItems.length) {
    console.log("active tab is bookmarked");
  } else {
    console.log("active tab is not bookmarked");
  }
}

function onRejected(error) {
  console.log(`An error: ${error}`);
}

function checkActiveTab(tab) {
  var searching = browser.bookmarks.search({url: tab.url});
  searching.then(onFulfilled, onRejected);
}

browser.browserAction.onClicked.addListener(checkActiveTab);
```

{{WebExtExamples}}

## Compatibilité du navigateur

{{Compat("webextensions.api.bookmarks.search")}}

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
