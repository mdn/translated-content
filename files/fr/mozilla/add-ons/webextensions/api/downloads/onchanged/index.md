---
title: downloads.onChanged
slug: Mozilla/Add-ons/WebExtensions/API/downloads/onChanged
---

{{AddonSidebar()}}

L'événement **`onChanged()`** de l'API {{WebExtAPIRef("downloads")}} est déclenché lorsque l'une des propriétés de {{WebExtAPIRef('downloads.DownloadItem')}} change (à l'exception de `bytesReceived`).

L'écouteur reçoit un fichier `downloadDelta` en tant que paramètre — un objet contenant le `downloadId` de l'objet {{WebExtAPIRef('downloads.DownloadItem')}} en question, plus le statut de toutes les propriétés qui ont changé.

## Syntaxe

```js
browser.downloads.onChanged.addListener(listener);
browser.downloads.onChanged.removeListener(listener);
browser.downloads.onChanged.hasListener(listener);
```

Les événements ont trois fonctions :

- `addListener(callback)`
  - : Ajoute un écouteur à cet événement.
- `removeListener(listener)`
  - : Arrêtez d'écouter cet événement. L'argument `listener` est l'écouteur à supprimer.
- `hasListener(listener)`
  - : Vérifiez si un `listener` donné est enregistré pour cet événement. Renvoie `true` s'il écoute, sinon `false`.

## Syntaxe addListener

### Parameters

- `callback`

  - : Une fonction de rappel qui sera appelée lorsque cet événement se produira. Cette fonction recevra les arguments suivants :

    - `downloadDelta`
      - : Un [`objet`](#downloadDelta) représentant l'objet {{WebExtAPIRef('downloads.DownloadItem')}} qui a été modifié, ainsi que l'état de toutes les propriétés qui y ont été modifiées.

## Objets supplémentaires

### downloadDelta

L'objet `downloadDelta` a les propriétés suivantes disponibles :

- `id`
  - : Un `integer` représentant l'identifiant de l'`id` {{WebExtAPIRef('downloads.DownloadItem')}} qui a changé.
- `url`{{optional_inline}}
  - : Un objet {{WebExtAPIRef('downloads.StringDelta')}} décrivant une modification d'une `url` {{WebExtAPIRef('downloads.DownloadItem')}}.
- `filename`{{optional_inline}}
  - : Un objet {{WebExtAPIRef('downloads.StringDelta')}} décrivant un changement dans un `filename` {{WebExtAPIRef('downloads.DownloadItem')}}
- `danger`{{optional_inline}}
  - : Un objet {{WebExtAPIRef('downloads.StringDelta')}} décrivant un changement dans un `danger` {{WebExtAPIRef('downloads.DownloadItem')}}.
- `mime`{{optional_inline}}
  - : Un objet {{WebExtAPIRef('downloads.StringDelta')}} décrivant un changement dans un `mime` {{WebExtAPIRef('downloads.DownloadItem')}}
- `startTime`{{optional_inline}}
  - : Un objet {{WebExtAPIRef('downloads.StringDelta')}} décrivant un changement dans un `startTime` {{WebExtAPIRef('downloads.DownloadItem')}}.
- `endTime`{{optional_inline}}
  - : Un objet {{WebExtAPIRef('downloads.StringDelta')}} décrivant un changement dans un `endTime` {{WebExtAPIRef('downloads.DownloadItem')}}.
- `state`{{optional_inline}}
  - : Un objet {{WebExtAPIRef('downloads.StringDelta')}} décrivant un changement dans un `état` {{WebExtAPIRef('downloads.DownloadItem')}}
- `canResume`{{optional_inline}}
  - : Un objet {{WebExtAPIRef('downloads.BooleanDelta')}} décrivant un changement dans un état {{WebExtAPIRef('downloads.DownloadItem')}} `canResume`.
- `paused`{{optional_inline}}
  - : Un objet {{WebExtAPIRef('downloads.BooleanDelta')}} décrivant un changement dans un état en `pause` {{WebExtAPIRef('downloads.DownloadItem')}}.
- `error`{{optional_inline}}
  - : Un objet {{WebExtAPIRef('downloads.StringDelta')}} décrivant un changement dans un état d'`erreur` {{WebExtAPIRef('downloads.DownloadItem')}}.
- `totalBytes`{{optional_inline}}
  - : Un objet {{WebExtAPIRef('downloads.DoubleDelta')}} décrivant un changement dans un `totalBytes` {{WebExtAPIRef('downloads.DownloadItem')}}.
- `fileSize`{{optional_inline}}
  - : Un objet {{WebExtAPIRef('downloads.DoubleDelta')}} décrivant une modification d'un `fileSize` {{WebExtAPIRef('downloads.DownloadItem')}}.
- `exists`{{optional_inline}}
  - : Un objet {{WebExtAPIRef('downloads.BooleanDelta')}} décrivant un changement dans un état {{WebExtAPIRef('downloads.DownloadItem')}}.

## Compatibilité des navigateurs

{{Compat}}

## Exemples

Enregistrez un message lorsque les téléchargements sont terminés :

```js
function handleChanged(delta) {
  if (delta.state && delta.state.current === "complete") {
    console.log(`Download ${delta.id} has completed.`);
  }
}

browser.downloads.onChanged.addListener(handleChanged);
```

{{WebExtExamples}}

> **Note :**
>
> This API is based on Chromium's [`chrome.downloads`](https://developer.chrome.com/extensions/downloads#event-onChanged) API.
>
> Microsoft Edge compatibility data is supplied by Microsoft Corporation and is included here under the Creative Commons Attribution 3.0 United States License.

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
