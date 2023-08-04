---
title: runtime.connect()
slug: Mozilla/Add-ons/WebExtensions/API/runtime/connect
---

{{AddonSidebar()}}

Créer une connexion pour plusieurs cas d'utilisation pout votre extension.

Vous pouvez utiliser cette facilité dans les situations suivantes:

- Dans un script de contenu, pour établir une connexion avec le script d'arrière plan (ou tout script priviligié, comme les scripts de popup ou scripts de page d'option)
- Dans un script d'arrière plan (ou script priviligié équivalent), pour établir une connexion avec une extension différente.

Attention, vous ne pouvez pas utiliser cette fonctionnalité pour connecter une extension à son script de contenu. Pour réaliser cette opération, il vaut mieux utiliser {{WebExtAPIRef('tabs.connect()')}}.

## Syntaxe

```js
var port = browser.runtime.connect(
  extensionId, // optional string
  connectInfo, // optional object
);
```

### Paramètres

- `extensionId`{{optional_inline}}
  - : `string`. L'ID de l'extension à laquelle se connecter. Si la cible à défini un ID dans la clé [applications](/fr/Add-ons/WebExtensions/manifest.json/applications) du fichier manifest.json, alors `extensionId` doit avoir cette valeur. Autrement, il doit avoir l'ID qui a été généré pour la cible.
- `connectInfo`{{optional_inline}}

  - : `object`. Détails de la connexion:

    - `name`{{optional_inline}}
      - : `string`. Sera passé dans {{WebExtAPIRef("runtime.onConnect")}} pour les processus qui écoutent un évènement de type connexion.
    - `includeTlsChannelId`{{optional_inline}}
      - : `boolean`. indique si l'ID du canal TLS sera transmis à {{WebExtAPIRef("runtime.onConnectExternal")}} pour le processus qui écoutent l'événement de connexion.

### Valeur retournée

{{WebExtAPIRef('runtime.Port')}}. Port à travers lequel les messages peuvent être envoyés et reçus. L'événement `onDisconnect` du port est déclenché si l'extension n'existe pas.

## Compatibilité des navigateurs

{{Compat}}

## Exemples

Le script de contenu :

- se connecte au script d'arrière-plan et stocke le port dans une variable appelée `myPort`.
- Ecoute les messages sur `myPort` et les enregistre
- Envoie des messages au script d'arrière pla, en utilisant `myPort`, lorsque l'utilisateur clique sur le document.

```js
// content-script.js

var myPort = browser.runtime.connect({ name: "port-from-cs" });
myPort.postMessage({ greeting: "hello from content script" });

myPort.onMessage.addListener(function (m) {
  console.log("In content script, received message from background script: ");
  console.log(m.greeting);
});

document.body.addEventListener("click", function () {
  myPort.postMessage({ greeting: "they clicked the page!" });
});
```

Les scripts d'arrière plan correspondant :

- Ecoute les tentatives de connexion du script de contenu.
- Quand il reçoit une tentative de connexion :

  - Stocke le port dans une variable nommé `portFromCS`.
  - envoie un message au script de contenu en utiliant le port.
  - Commence à écouter les messages reçus sur le port, et les enregistre.

- Envoie des messages au script de contenu, à l'aide de `portFromCS`, lorsque l'utilisateur clique sur l'action du navigateur de l'extension.

```js
// background-script.js

var portFromCS;

function connected(p) {
  portFromCS = p;
  portFromCS.postMessage({ greeting: "hi there content script!" });
  portFromCS.onMessage.addListener(function (m) {
    console.log("In background script, received message from content script");
    console.log(m.greeting);
  });
}

browser.runtime.onConnect.addListener(connected);

browser.browserAction.onClicked.addListener(function () {
  portFromCS.postMessage({ greeting: "they clicked the button!" });
});
```

{{WebExtExamples}}

> **Note :**
>
> Cette API est basée sur l'API Chromium [`chrome.runtime`](https://developer.chrome.com/extensions/runtime#event-onConnect). Cette documentation est dérivée de [`runtime.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/runtime.json) dans le code de Chromium code.
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
