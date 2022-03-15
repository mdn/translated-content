---
title: tabs.sendMessage()
slug: Mozilla/Add-ons/WebExtensions/API/tabs/sendMessage
tags:
  - API
  - Add-ons
  - Extensions
  - Méthode
  - Non-standard
  - Reference
  - WebExtensions
  - onglets
  - sendMessage
  - tabs
translation_of: Mozilla/Add-ons/WebExtensions/API/tabs/sendMessage
---
{{AddonSidebar()}}Envoi un message unique depuis le script d'arrière plan d'extension (ou autre scripts accrédité, comme les scripts popup ou les scripts de page d'options) vers n'importe quel [script de contenu](/fr/docs/Mozilla/Add-ons/WebExtensions/Content_scripts) concerné par l'extension et qui s'execute dans l'onglet spécifié.Ce message sera reçu dans script de contenu par n'importe quel gestionnaire d'évènements à l'écoute de l'évènement

{{WebExtAPIRef("runtime.onMessage")}}. Les gestionnaires d'évènements peuvent optionellement envoyé une réponse en retour au script d'arrière plan en utilisant l'argument `sendResponse`.

Il s'agit d'une fonction asynchrone qui renvoit un objet [`Promise`](/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise).

> **Note :** Vous pouvez également utiliser une [approche basée sur la connexion pour échanger des messages](/fr/docs/Mozilla/Add-ons/WebExtensions/Content_scripts#Communication_avec_les_scripts_darrière-plan).

## Syntaxe

```js
var sending = browser.tabs.sendMessage(
  tabId,                   // integer
  message,                 // any
  options                  // optional object
)
```

### Paramètres

- `tabId`
  - : `integer`. ID de l'onglet qui contient le script de contenu auquel on veut envoyer un message.
- `message`
  - : `any`. Un objet qui peut être sérialisé en JSON.
- `options`{{optional_inline}}

  - : `object`.

    - `frameId`{{optional_inline}}
      - : `integer`.  Envoie le message à un cadre (_iframe_) spécifique identifiée par `frameId` au lieu de tous les cadres de l'onglet. Le fait que le script de contenu soit exécuté dans tous les cadres dépend du paramètre `all_frames` dans la section  [`content_scripts`](/fr/Add-ons/WebExtensions/manifest.json/content_scripts) de manifest.json.

### Valeur renvoyée

Un objet [`Promise`](/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise) qui sera rempli avec une réponse objet au format JSON envoyé par le gestionnaire de message dans le script de contenu, ou sans arguments si le script de contenu n'a pas renvoyé de réponses. Si une erreur survient durant la connexion avec l'onglet spécifié, ou si n'importe quelle erreur survient, la promesse sera rejeté avec un message d'erreur. Si plusieurs trames répondent au message, la promesse est résolue en une des réponses

## Exemples

Voici un exemple de script d'arrière plan qui envoi un message au script de contenu qui s'execute dans l'onglet actif quand le client clique sur l'icone de l'extension. Le script d'arrière plan s'attend également que le script de contenu lui renvoit une réponse:

```js
// background-script.js
"use strict";

function onError(error) {
  console.error(`Error: ${error}`);
}

function sendMessageToTabs(tabs) {
  for (let tab of tabs) {
    browser.tabs.sendMessage(
      tab.id,
      {greeting: "Hi from background script"}
    ).then(response => {
      console.log("Message from the content script:");
      console.log(response.response);
    }).catch(onError);
  }
}

browser.browserAction.onClicked.addListener(() => {
  browser.tabs.query({
    currentWindow: true,
    active: true
  }).then(sendMessageToTabs).catch(onError);
});
```

Voici le script de contenu associé:

```js
// content-script.js
"use strict";

browser.runtime.onMessage.addListener(request => {
  console.log("Message from the background script:");
  console.log(request.greeting);
  return Promise.resolve({response: "Hi from content script"});
});
```

{{WebExtExamples}}

## Compatiblité des navigateurs

{{Compat("webextensions.api.tabs.sendMessage")}}

> **Note :**
>
> Cette API est basée sur l'API Chromium [`chrome.tabs`](https://developer.chrome.com/extensions/tabs#method-executeScript). Cette documentation est dérivée de [`tabs.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/tabs.json) dans le code de Chromium code.
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
