---
title: menus.remove()
slug: Mozilla/Add-ons/WebExtensions/API/menus/remove
---

{{AddonSidebar()}}

Supprime un élément de menu.

Pour la compatibilité avec d'autres navigateurs, Firefox rend cette méthode disponible via l'espace de noms `contextMenus` ainsi que l'espace de noms des `menus`.

C'est une fonction asynchrone qui renvoie une [`Promise`](/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise).

## Syntaxe

```js
var removing = browser.menus.remove(
  menuItemId, // integer or string
);
```

### Parameters

- `menuItemId`
  - : `integer` or `string`. The ID of the menu item to remove.

### Valeur retournée

Une [`Promise`](/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise) qui sera définit sans argument si la suppression a réussi, ou rejetée avec un message d'erreur si la suppression a échoué (par exemple, parce que l'élément n'a pas pu être trouvé).

## Exemples

Cette extension ajoute un élément de menu intitulé "Remove me!". Si vous cliquez sur l'élément, l'extension le supprime.

```js
function onRemoved() {
  console.log("item removed successfully");
}

function onError() {
  console.log("error removing item:" + browser.runtime.lastError);
}

browser.menus.create({
  id: "remove-me",
  title: "Remove me!",
  contexts: ["all"],
});

browser.menus.onClicked.addListener(function (info, tab) {
  if (info.menuItemId == "remove-me") {
    var removing = browser.menus.remove(info.menuItemId);
    removing.then(onRemoved, onError);
  }
});
```

{{WebExtExamples}}

## Compatibilité des navigateurs

{{Compat}}

> **Note :**
>
> Cette API est basée sur l'API [`chrome.contextMenus`](https://developer.chrome.com/extensions/contextMenus) de chromium. Cette documentation est dérivée de [`context_menus.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/context_menus.json) dans le code Chromium.

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
