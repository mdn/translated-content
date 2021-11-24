---
title: runtime.onConnect
slug: Mozilla/Add-ons/WebExtensions/API/runtime/onConnect
tags:
  - API
  - Add-ons
  - Event
  - Extensions
  - Non-standard
  - Reference
  - WebExtensions
  - onconnect
  - runtime
translation_of: Mozilla/Add-ons/WebExtensions/API/runtime/onConnect
---
{{AddonSidebar()}}

Lancé quand une connexion est établie avec un processus d'extension ou un script de contenu.

## Syntaxe

```js
browser.runtime.onConnect.addListener(listener)
browser.runtime.onConnect.removeListener(listener)
browser.runtime.onConnect.hasListener(listener)
```

Les événements ont trois fonctions :

- `addListener(callback)`
  - : Ajoute un écouteur à cet événement.
- `removeListener(listener)`
  - : Arrêtez d'écouter cet événement. L'argument de l'`écouteur` est l'écouteur à supprimer.
- `hasListener(listener)`
  - : Vérifie si un `écouteur` est enregistré pour cet événement. Renvoie `true` s'il écoute, sinon `false`.

## Syntaxe addListener

### Paramètres

- `fonction`

  - : Une fonction de rappel qui sera appelée lorsque cet événement se produira. La fonction recevra les arguments suivants:

    - `port`
      - : Un objet {{WebExtAPIRef('runtime.Port')}} connectant le script courant à l'autre contexte auquel il se connecte.

## Compatibilité du navigateur

{{Compat("webextensions.api.runtime.onConnect")}}

## Exemples

Ce script de contenu :

- Se connecte au script d'arrière-plan et stocke le `Port` dans une variable `myPort`
- Ecoute les messages sur `myPort`, et les enregistre
- Envoie des messages au script d'arrière-plan, en utilisant `myPort`, lorsque l'utilisateur clique sur le document

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

Le script d'arrière-plan correspondant :

- Ecoute les tentatives de connexion de script de contenu
- Quand il reçoit une tentative de connexion :

  - Stocke le port dans une variable nommée `portFromCS`
  - Envoie un message au script de contenu en utilisant le port
  - Commence à écouter les messages reçus sur le port et les enregistre

- Envoie des messages au script de contenu, en utilisant `portFromCS`, quand l'utilisateur clique sur l'action du navigateur de l'extension

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
