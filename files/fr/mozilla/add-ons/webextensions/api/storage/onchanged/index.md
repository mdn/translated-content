---
title: storage.onChanged
slug: Mozilla/Add-ons/WebExtensions/API/storage/onChanged
---

{{AddonSidebar()}}

Lancé lorsqu'un ou plusieurs éléments changent.

## Syntaxe

```js
browser.storage.onChanged.addListener(callback);
browser.storage.onChanged.removeListener(listener);
browser.storage.onChanged.hasListener(listener);
```

Les événements ont trois fonctions:

- `addListener(callback)`
  - : Ajoute un écouteur à cet événement.
- `removeListener(listener)`
  - : Arrêtez d'écouter cet événement. L'argument `listener` est l'écouteur à supprimer.
- `hasListener(listener)`
  - : Vérifiez si `listener` est enregistré pour cet événement. Renvoie `true`s'il écoute, sinon `false`.

## Syntaxe addListener

### Paramètres

- `callback`

  - : Fonction qui sera appelée lorsque cet événement se produit. La fonction recevra les arguments suivants :

    - `changes`
      - : `object`. Objet décrivant le changement. Cela contient une propriété pour chaque clé qui a changé. Le nom de la propriété est le nom de la clé qui a changé, et sa valeur est un objet {{WebExtAPIRef('storage.StorageChange')}} décrivant la modification apportée à cet élément.

    <!---->

    - `areaName`
      - : `string`. Le nom de la zone de stockage (`"sync"`, `"local"` or `"managed"`) auquel les modifications ont été apportées.

## Compatibilité des navigateurs

{{Compat}}

## Exemples

```js
/*
Log the storage area that changed,
then for each item changed,
log its old value and its new value.
*/
function logStorageChange(changes, area) {
  console.log("Change in storage area: " + area);

  var changedItems = Object.keys(changes);

  for (var item of changedItems) {
    console.log(item + " has changed:");
    console.log("Old value: ");
    console.log(changes[item].oldValue);
    console.log("New value: ");
    console.log(changes[item].newValue);
  }
}

browser.storage.onChanged.addListener(logStorageChange);
```

{{WebExtExamples}}

> **Note :**
>
> Cette API est basée sur l'API Chromium [`chrome.storage`](https://developer.chrome.com/extensions/storage). Cette documentation est dérivée de [`storage.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/storage.json) dans le code de Chromium.
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
