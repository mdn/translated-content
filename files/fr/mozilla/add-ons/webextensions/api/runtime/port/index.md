---
title: runtime.Port
slug: Mozilla/Add-ons/WebExtensions/API/runtime/Port
tags:
  - API
  - Add-ons
  - Extensionns
  - Non-standard
  - Reference
  - Type
  - WebExtensions
  - port
  - runtime
translation_of: Mozilla/Add-ons/WebExtensions/API/runtime/Port
---
{{AddonSidebar()}}

Un objet `Port` represente une extrémité d'une connexion entre deux contextes spécifiques, qui peut-être utilisée pour échanger des messages.

Un côté initie la connexion à l'aide d'une API `connect()`. Cela retourne un objet `Port`. L'autre camp écoute les tentatives de connexion à l'aide d'un écouteur `onConnect`. Ceci est passé un objet `Port` correspondant.

Une fois que les deux côtés ont des objets `Port,` ils peuvent échanger des messages JSON en utilisant `Port.postMessage()` et `Port.onMessage`. Quand ils sont terminés, chaque extrémité peut se déconnecter en utilisant `Port.disconnect()`, ce qui générera un événement `Port.onDisconnect` à l'autre extrémité, permettant à l'autre extrémité de faire le nettoyage requis.

Vous pouvez utiliser ce modèle pour communiquer entre:

- différentes parties de votre extension (par exemple, entre les [scripts de contenus](/fr/Add-ons/WebExtensions/Content_scripts) et les [scripts d'arrière-plan](/fr/Add-ons/WebExtensions/Anatomy_of_a_WebExtension#Background_scripts))
- entre votre extension et une [application native s'exéutant sur l'ordinateur de l'utilisateur](/fr/Add-ons/WebExtensions/Native_messaging).
- entre votre extension et une extension différente

Vous devez utiliser différentes API de connexion pour différents types de connexions, comme indiqué dans le tableau ci-dessous.

| type de connection                         | Lancer une tentative de connexion                        | Gérer la tentative de connexion                                                             |
| ------------------------------------------ | -------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| Script d'arrière-plan au script de contenu | {{WebExtAPIRef("tabs.connect()")}}             | {{WebExtAPIRef("runtime.onConnect")}}                                            |
| Script de contenu au script d'arrière-plan | {{WebExtAPIRef("runtime.connect()")}}         | {{WebExtAPIRef("runtime.onConnect")}}                                            |
| Extension à l'application native           | {{WebExtAPIRef("runtime.connectNative()")}} | N'est pas applicable (voir [Native messaging](/fr/Add-ons/WebExtensions/Native_messaging)). |
| Extension à l'extension                    | {{WebExtAPIRef("runtime.connect()")}}         | {{WebExtAPIRef("runtime.onConnectExternal")}}                                |

## Type

Les valeurs de ce type sont des objets. Ils contiennent les propriétés suivantes :

- `name`
  - : `string`. Le nom du port, défini dans {{WebExtAPIRef("runtime.connect()")}} ou {{WebExtAPIRef("tabs.connect()")}} appel qui l'a créé. Si ce port est connecté à une application native, son nom est le nom de l'application native.
- `disconnect`
  - : `function`. Déconnecte un port. Chaque extrémité peut appeler cela quand ils ont fini avec le port. Cela provoquera le déclenchement de `onDisconnect` à l'autre extrémité. Ceci est utile si l'autre extrémité maintient un état relatif à ce port, qui peut être nettoyé lors de la déconnexion. Si ce port est connecté à une application native, cette fonction ferme l'application native.
- `error`
  - : `object`. Si le port a été déconnecté en raison d'une erreur, il sera défini sur un objet avec un `message`, de propriété de chaîne, vous donnant plus d'informations sur l'erreur. Voir `onDisconnect`.
- `onDisconnect`

  - : `object`. Cela contient les fonctions `addListener()` et `removeListener()` communes à tous les événements pour les extensions créées à l'aide des API. WebExtension. Les fonctions de l'écouteur seront appelées lorsque l'autre extrémité aura appelé `Port.disconnect()`. Cet événement ne sera déclenché qu'une fois pour chaque port. La fonction d'écouteur recevra l'objet `Port`. Si le port a été déconnecté en raison d'une erreur, l'argument `Port` contiendra une propriété  `error` donnant plus d'informations sur l'erreur :

    ```js
    port.onDisconnect.addListener((p) => {
      if (p.error) {
        console.log(`Disconnected due to an error: ${p.error.message}`);
      }
    });
    ```

    Notez que dans Google Chrome `port.error` n'est pas supporté: utilisez plutôt  {{WebExtAPIRef("runtime.lastError")}} pour obtenir le message d'erreur.

- `onMessage`
  - : `object`. Cela contient les fonctions `addListener()` et `removeListener()` communes à tous les événements pour les extensions créées à l'aide des API WebExtension. Les fonctions de l'écouteur seront appelées lorsque l'autre extrémité aura envoyé un message à ce port. L'écouteur recevra l'objet JSON envoyé par l'autre extrémité.
- `postMessage`
  - : `function`. Envoyer un message à l'autre extrémité. Cela prend un argument, qui est un objet JSON représentant le message à envoyer. Il sera fourni à tout script écoutant l'événement `onMessage` du port, ou à l'application native si ce port est connecté à une application native.
- `sender`{{optional_inline}}
  - : {{WebExtAPIRef('runtime.MessageSender')}}. Contient des informations sur l'expéditeur du message. ette propriété ne sera présente que sur les ports transmis aux écouteurs `onConnect`/`onConnectExternal`.

## Compatibilité du navigateur

{{Compat("webextensions.api.runtime.Port")}}

## Exemples

### Connecting from content scripts

This content script:

- connects to the background script and stores the `Port` in a variable called `myPort`.
- listens for messages on `myPort` and logs them.
- sends messages to the background script, using `myPort`, when the user clicks the document.

```js
// content-script.js

var myPort = browser.runtime.connect({name:"port-from-cs"});
myPort.postMessage({greeting: "hello from content script"});

myPort.onMessage.addListener(function(m) {
  console.log("In content script, received message from background script: ");
  console.log(m.greeting);
});

document.body.addEventListener("click", function() {
  myPort.postMessage({greeting: "they clicked the page!"});
});
```

The corresponding background script:

- listens for connection attempts from the content script.
- when it receives a connection attempt:

  - stores the port in a variable named `portFromCS`.
  - sends the content script a message using the port.
  - starts listening to messages received on the port, and logs them.

- sends messages to the content script, using `portFromCS`, when the user clicks the extension's browser action.

```js
// background-script.js

var portFromCS;

function connected(p) {
  portFromCS = p;
  portFromCS.postMessage({greeting: "hi there content script!"});
  portFromCS.onMessage.addListener(function(m) {
    console.log("In background script, received message from content script")
    console.log(m.greeting);
  });
}

browser.runtime.onConnect.addListener(connected);

browser.browserAction.onClicked.addListener(function() {
  portFromCS.postMessage({greeting: "they clicked the button!"});
});
```

#### Script à contenu multiple

Si plusieurs scripts de contenu communiquent en même temps, vous voudrez peut-être stocker chaque connexion dans un tableau.

```js
// background-script.js

var ports = []

function connected(p) {
  ports[p.sender.tab.id]    = p
  //...
}

browser.runtime.onConnect.addListener(connected)

browser.browserAction.onClicked.addListener(function() {
  ports.forEach(p => {
        p.postMessage({greeting: "they clicked the button!"})
    })
});
```

### Connecting to native applications

This example connects to the native application "ping_pong" and starts listening for messages from it. It also sends the native application a message when the user clicks a browser action icon:

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
