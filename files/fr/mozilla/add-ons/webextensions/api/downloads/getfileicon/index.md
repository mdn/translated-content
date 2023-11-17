---
title: downloads.getFileIcon()
slug: Mozilla/Add-ons/WebExtensions/API/downloads/getFileIcon
---

{{AddonSidebar()}}

La fonction **`getFileIcon()`** de l'API {{WebExtAPIRef("downloads")}} récupère une icône pour le téléchargement spécifié.

Pour les nouveaux téléchargements, les icônes de fichiers sont disponibles après la réception de l'événement {{WebExtAPIRef("downloads.onCreated")}}. L'image renvoyée par cette fonction pendant le téléchargement peut être différente de l'image renvoyée une fois le téléchargement terminé.

La récupération d'icônes s'effectue en interrogeant la plateforme sous-jacente. L'icône renvoyée dépendra donc d'un certain nombre de facteurs, notamment l'état du téléchargement, la plate-forme, les types de fichiers enregistrés et le thème visuel.

C'est une fonction asynchrone qui renvoie une [`Promise`](/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise).

## Syntaxe

```js
var gettingIcon = browser.downloads.getFileIcon(
  downloadId, // integer
  options, // optional object
);
```

### Paramètres

- `downloadId`
  - : Un `integer` eprésentant l'ID du téléchargement.
- `options`{{optional_inline}}

  - : Un `object` d'options représentant les préférences pour l'icône à extraire. Il peut prendre les propriétés suivantes :

    - `size`{{optional_inline}}
      - : Un `integer` représentant la taille de l'icône. La taille de l'icône retournée sera la taille fournie au carré (en pixels). Si elle est omise, la taille par défaut de l'icône est 32x32 pixels.

### Valeur retournée

Une [`Promise`](/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise). Si la requête réussit, la promesse sera remplie avec une chaîne représentant l'URL absolue de l'icône. Si la requête échoue, la promesse sera rejetée avec un message d'erreur.

## Compatibilité des navigateurs

{{Compat}}

## Exemples

Cet exemple enregistre l'URL de l'icône pour le téléchargement le plus récent :

```js
function gotIcon(iconUrl) {
  console.log(iconUrl);
}

function onError(error) {
  console.log(`Error: ${error}`);
}

function getIcon(downloadItems) {
  if (downloadItems.length > 0) {
    latestDownloadId = downloadItems[0].id;
    var gettingIcon = browser.downloads.getFileIcon(latestDownloadId);
    gettingIcon.then(gotIcon, onError);
  }
}

var searching = browser.downloads.search({
  limit: 1,
  orderBy: ["-startTime"],
});

searching.then(getIcon, onError);
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
