---
title: runtime.sendNativeMessage()
slug: Mozilla/Add-ons/WebExtensions/API/runtime/sendNativeMessage
tags:
  - API
  - Add-ons
  - Extensions
  - Method
  - Non-standard
  - Reference
  - WebExtensions
  - runtime
  - sendNativeMessage
translation_of: Mozilla/Add-ons/WebExtensions/API/runtime/sendNativeMessage
---
{{AddonSidebar()}}

Envoie un seul message d'une extension à une application native.

Cela prend deux paramètres obligatoires : le nom de l'application native et un objet JSON qui est le message à envoyer. Le navigateur lancera l'application native et délivrera le message.

C'est une fonction asynchrone qui renvoie une [`Promise`](/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise). The first message sent by the native application is treated as a response to the `sendNativeMessage()` call, and the promise will be fulfilled with this message as a parameter. Note that you can't use {{WebExtAPIRef("runtime.onMessage")}} to get responses from the application: you must use the callback function instead.

Une nouvelle instance de l'application est lancée pour appel à  `runtime.sendNativeMessage()`. Le navigateur terminera l'application native après avoir reçu une réponse. Pour mettre fin à une application native, le navigateur ferme le canal, donne au processus quelques secondes pour quitter normalement, puis le tue s'il ne s'est pas arrêté.

Pour plus d'informations, voir [Native messaging](/fr/Add-ons/WebExtensions/Native_messaging).

## Syntaxe

```js
var sending = browser.runtime.sendNativeMessage(
  application,             // string
  message                  // object
)
```

### Paramètres

- `application`
  - : `string`. Le nom de l'application native. Cela doit correspondre à la propriété "name" dans le [fichier manifest de l'application native](/fr/Add-ons/WebExtensions/Native_messaging#App_manifest).
- `message`
  - : `object`. Un objet JSON qui sera envoyé à l'application native.

### Valeur retournée

Une [`Promise`](/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise). Si l'expéditeur a envoyé une réponse, celle-ci sera remplie avec la réponse en tant qu'objet JSON. Sinon, il sera rempli sans arguments. Si une erreur survient lors de la connexion à l'application native, la promesse sera rejetée avec un message d'erreur.

## Compatibilité du navigateur

{{Compat("webextensions.api.runtime.sendNativeMessage")}}

## Exemples

Voici un script d'arrière-plan qui envoie un message "ping" à l'application "ping_pong" et enregistre la réponse, chaque fois que l'utilisateur clique sur l'action du navigateur :

```js
function onResponse(response) {
  console.log(`Received ${response}`);
}

function onError(error) {
  console.log(`Error: ${error}`);
}

/*
On a click on the browser action, send the app a message.
*/
browser.browserAction.onClicked.addListener(() => {
  console.log("Sending:  ping");
  var sending = browser.runtime.sendNativeMessage("ping_pong", "ping");
  sending.then(onResponse, onError);
});
```

{{WebExtExamples}}

> **Note :**
>
> Cette API est basée sur l'API Chromium [`chrome.runtime`](https://developer.chrome.com/extensions/runtime#event-onConnect). Cette documentation est dérivée de [`runtime.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/runtime.json) dans le code de Chromium code.
>
> Les données de compatibilité relatives à Microsoft Edge sont fournies par Microsoft Corporation et incluses ici sous la licence Creative Commons Attribution 3.0 pour les États-Unis.

<div class="hidden"><pre>// Copyright 2015 The Chromium Authors. All rights reserved.
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
</pre></div>
