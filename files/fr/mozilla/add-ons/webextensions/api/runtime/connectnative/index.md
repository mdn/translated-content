---
title: runtime.connectNative()
slug: Mozilla/Add-ons/WebExtensions/API/runtime/connectNative
---

{{AddonSidebar()}}Connecte l'extension à une appplication native sur l'ordinateur de l'utilisateur.Cela prend le nom d'une application native en tant que paramètre. Il démarre l'application native et retourne un objet {{WebExtAPIRef("runtime.Port")}} à l'appelant.L'appelant peut utiliser le `Port` pour échanger des messages avec l'application native utilisant `Port.postMessage()` et `port.onMessage`.L'application native s'exécute jusqu'à ce qu'elle se termine, ou l'appelant appelle `Port.disconnect()`, ou la page qui a créé le `Port` est détruite. Une fois le `Port` est déconnecté, le navigateur mettra quelques secondes à se terminer pour quitter le processus, puis le désactiver s'il ne s'est pas arrêté.

Pour plus d'informations, voir [messagerie native](/fr/Add-ons/WebExtensions/Native_messaging).

## Syntaxe

```js
var port = browser.runtime.connectNative(
  application, // string
);
```

### Paramètres

- `application`
  - : `string`. Le nom de l'application native à laquelle se connecter. Cela doit correspondre à la propriété "name" dans le [fichier manifest de l'application native](/fr/Add-ons/WebExtensions/Native_messaging#App_manifest).

### Valeur retournée

Un objet {{WebExtAPIRef('runtime.Port')}}. Le port que l'appelant peut utiliser pour échanger des messages avec l'application native.

## Compatibilité des navigateurs

{{Compat}}

## Exemples

Cet exemple se connecte à l'appplication native "ping_pong" et commence à en écouter les messages. Il envoie également un message à l'application native lorsque l'utilisateur clique sur l'icône d'une action du navigateur :

```js
/*
On startup, connect to the "ping_pong" app.
*/
var port = browser.runtime.connectNative("ping_pong");

/*
Listen for messages from the app.
*/
port.onMessage.addListener((response) => {
  console.log("Received: " + response);
});

/*
On a click on the browser action, send the app a message.
*/
browser.browserAction.onClicked.addListener(() => {
  console.log("Sending:  ping");
  port.postMessage("ping");
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
