---
title: downloads.onCreated
slug: Mozilla/Add-ons/WebExtensions/API/downloads/onCreated
---

{{AddonSidebar()}}

L'événement **`onCreated()`** de l'API {{WebExtAPIRef("downloads")}} se déclenche lorsqu'un téléchargement commence, c'est à dire lorsque quand {{WebExtAPIRef("downloads.download()")}} est appelé avec succès.

L'écouteur reçoit l'objet {{WebExtAPIRef('downloads.DownloadItem')}} en question en tant que paramètre.

## Syntaxe

```js
browser.downloads.onCreated.addListener(listener);
browser.downloads.onCreated.removeListener(listener);
browser.downloads.onCreated.hasListener(listener);
```

Les événements ont trois fonctions :

- `addListener(callback)`
  - : Ajoute un écouteur à cet événement.
- `removeListener(listener)`
  - : Arrêtez d'écouter cet événement. L'argument `listener` est l'écouteur à supprimer.
- `hasListener(listener)`
  - : Vérifiez si un `listener` donné est enregistré pour cet événement. Renvoie `true` s'il écoute, sinon `false`.

## Syntaxe addListener

### Paramètres

- `function`

  - : Une fonction de rappel qui sera appelée lorsque cet événement se produira. Cette fonction recevra les arguments suivants :

    - `downloadItem`
      - : L'objet {{WebExtAPIRef('downloads.DownloadItem')}} en question.

## Compatibilité des navigateurs

{{Compat}}

## Exemples

Consignez l'URL des éléments au fur et à mesure qu'ils sont téléchargés :

```js
function handleCreated(item) {
  console.log(item.url);
}

browser.downloads.onCreated.addListener(handleCreated);
```

{{WebExtExamples}}

> **Note :**
>
> Cette API est basée sur l'API Chromium [`chrome.downloads`](https://developer.chrome.com/extensions/downloads).
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
