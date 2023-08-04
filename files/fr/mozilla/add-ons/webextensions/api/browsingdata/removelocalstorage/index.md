---
title: browsingData.removeLocalStorage()
slug: Mozilla/Add-ons/WebExtensions/API/browsingData/removeLocalStorage
---

{{AddonSidebar()}}

Efface tout le [stockage local](/fr/docs/Web/API/Window/localStorage) créé par des sites Web.

Vous pouvez utiliser le paramètre `removalOptions`, qui est un objet {{WebExtAPIRef("browsingData.RemovalOptions")}} pour :

- Effacer uniquement les objets de stockage locaux créés après un délai donné
- Controler si vous souhaitez effacer uniquement les objets de stockage locaux créés par des pages Web normales ou supprimer des objets créés par des applications et des extensions hébergées.

C'est une fonction asynchrone qui renvoie une [`Promise`](/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise).

## Syntaxe

```js
var removing = browser.browsingData.removeLocalStorage(
  removalOptions, // RemovalOptions object
);
```

### Paramètres

- `removalOptions`
  - : `object`. Un objet {{WebExtAPIRef("browsingData.RemovalOptions")}}, qui peut etre utilisé pour effacer uniquement les objets de stockage locaux créés par des pages Web normales ou pour effacer des objets créés par des applications et des extensions hébergées.

### Valeur retournée

Une [`Promise`](/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise) qui sera remplie sans argument lorsque la suppression est terminée. Si une erreur se produit, la promise sera rejetée avec un message d'erreur.

## Compatibilité des navigateurs

{{Compat}}

## Exemples

Supprime tout le stockage local :

```js
function onRemoved() {
  console.log("removed");
}

function onError(error) {
  console.error(error);
}

browser.browsingData.removeLocalStorage({}).then(onRemoved, onError);
```

{{WebExtExamples}}

> **Note :**
>
> Cette API est basée sur l'API Chromium [`chrome.browsingData`](https://developer.chrome.com/extensions/browsingData).

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
