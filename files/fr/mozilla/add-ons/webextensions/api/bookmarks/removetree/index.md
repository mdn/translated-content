---
title: bookmarks.removeTree()
slug: Mozilla/Add-ons/WebExtensions/API/bookmarks/removeTree
---

{{AddonSidebar}}

La méthode **`bookmarks.removeTree()`** supprime récursivement un dossier de signets et tout son contenu.

> [!WARNING]
> Si votre extension tente de supprimer une arborescence de signets du nœud racine de cette dernière, l'appel déclenche une erreur avec le message suivant: "La racine de signet ne peut pas être modifiée" et le signet ne sera pas supprimé.

C'est une fonction asynchrone qui renvoie une [`Promise`](/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise).

## Syntaxe

```js
var removingTree = browser.bookmarks.removeTree(
  id, // string
);
```

### Paramètres

- `id`
  - : Un {{jsxref("string")}} spécifiant l'ID du noeud de dossier à supprimer avec ses descendants.

### Valeur retournée

Une [`Promise`](/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise) qui sera remplie sans arguments lorsque l'arbre a été retiré.Si le noeud correspondant au paramètre `id` ne peut pas être trouvé, la promesse est rejetée avec un message d'erreur.

## Exemples

Cet exemple localise un dossier de signets nommé "MDN" et le supprime avec tout son contenu.

```js
function onRemoved() {
  console.log("bookmark item removed!");
}

function onRejected(error) {
  console.log(`An error: ${error}`);
}

function removeMDN(searchResults) {
  if (searchResults.length) {
    var removing = browser.bookmarks.removeTree(searchResults[0].id);
    removing.then(onRemoved, onRejected);
  }
}

var searchingBookmarks = browser.bookmarks.search({ title: "MDN" });
searchingBookmarks.then(removeMDN, onRejected);
```

{{WebExtExamples}}

## Compatibilité des navigateurs

{{Compat}}

> [!NOTE]
>
> Cette API est basée sur l'API Chromium [`chrome.bookmarks`](https://developer.chrome.com/docs/extensions/reference/api/bookmarks). Cette documentation provient de [`bookmarks.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/bookmarks.json) dans le code Chromium.
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
