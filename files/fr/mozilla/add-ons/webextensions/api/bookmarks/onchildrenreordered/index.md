---
title: bookmarks.onChildrenReordered
slug: Mozilla/Add-ons/WebExtensions/API/bookmarks/onChildrenReordered
---

{{AddonSidebar}}

Lancé lorsque les enfants d'un dossier ont changé leur commande en raison de la commande triée dans l'interface utilisateur. Cela n'est pas appelé à la suite d'un appel à {{WebExtAPIRef("bookmarks.move()")}} ou une opération glisser dans l'interface utilisateur.

## Syntaxe

```js
browser.bookmarks.onChildrenReordered.addListener(listener);
browser.bookmarks.onChildrenReordered.removeListener(listener);
browser.bookmarks.onChildrenReordered.hasListener(listener);
```

Les événements ont trois fonctions :

- `addListener(callback)`
  - : Ajoute un écouteur à cet événement.
- `removeListener(listener)`
  - : Arrêtez d'écouter cet événement. L'argument `listener` est l'écouteur à supprimer.
- `hasListener(listener)`
  - : Vérifiez si `listener` est enregistré pour cet événement. Renvoie `true` s'il écoute, sinon `false`.

## Synatxe addListener

### Paramètres

- `callback`

  - : Fonction qui sera très semblable à cet événement. La fonction suivante les arguments suivants :

    - `id`
      - : `string`. ID du dossier dont les enfants ont été réorganisés.

    <!---->

    - `reorderInfo`
      - : [`object`](#reorderInfo). Objet contenant des objets supplémentaires.

## Objets supplémentaires

### reorderInfo

- `childIds`
  - : `array` de `string`. Tableau contenant les ID de tous les éléments de signets de ce dossier, dans l'ordre où ils apparaissent maintenant dans l'interface utilisateur.

## Compatibilité des navigateurs

{{Compat}}

## Exemples

```js
function handleChildrenReordered(id, reorderInfo) {
  console.log("Item: " + id + " children reordered");
  console.log("Children: " + reorderInfo.childIds);
}

function handleClick() {
  browser.bookmarks.onChildrenReordered.addListener(handleChildrenReordered);
}

browser.browserAction.onClicked.addListener(handleClick);
```

{{WebExtExamples}}

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
