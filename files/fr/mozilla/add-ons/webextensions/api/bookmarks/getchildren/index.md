---
title: bookmarks.getChildren()
slug: Mozilla/Add-ons/WebExtensions/API/bookmarks/getChildren
---

{{AddonSidebar()}}

**`bookmarks.getChildren()`** récupère tous les enfants immédiats d'un dossier de signets donné, identifié comme {{WebExtAPIRef("bookmarks.BookmarkTreeNode", "BookmarkTreeNode")}} ID.

C'est une fonction asynchrone qui renvoie une [`Promise`](/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise).

## Syntaxe

```js
var gettingChildren = browser.bookmarks.getChildren(
  id, // string
);
```

### Paramètres

- `id`
  - : Un {{jsxref("string")}} qui spécifie l'ID du dossier dont les enfants doivent être récupérés.

### Valeur retournée

Une [`Promise`](/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise) qui sera remplie avec un tableau d'objets [`BookmarkTreeNode`](/fr/Add-ons/WebExtensions/API/bookmarks/BookmarkTreeNode). Chaque entrée représente un seul noeud enfant. La liste est triée dans le même ordre dans lequel les signets apparaissent dans l'interface utilisateur. Les séparateurs ne sont actuellement pas inclus dans les résultats. La liste inclut les sous-dossiers, mais n'inclut aucun enfant contenu dans les sous-dossiers.

Si le noeud spécifié n'a pas d'enfants, le tableau est vide.Si le noeud identifié par `id` n'est pas trouvé, la promise est rejetée avec un message d'erreur.

## Exemples

```js
function onFulfilled(children) {
  for (child of children) {
    console.log(child.id);
  }
}

function onRejected(error) {
  console.log(`An error: ${error}`);
}

var gettingChildren = browser.bookmarks.getChildren("unfiled_____");
gettingChildren.then(onFulfilled, onRejected);
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
