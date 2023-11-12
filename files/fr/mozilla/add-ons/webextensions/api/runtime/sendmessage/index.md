---
title: runtime.sendMessage()
slug: Mozilla/Add-ons/WebExtensions/API/runtime/sendMessage
---

{{AddonSidebar()}}

Envoie un simple message aux écouteurs d'événement dans votre extension ou une extension différente.

Si vous envoyez à votre extension, omettez l'argument `extensionId`. L'événement {{WebExtAPIRef('runtime.onMessage')}} sera déclenché dans chaque page de votre extension, à l'exception du cadre appelé `runtime.sendMessage`.

Si vous envoyez une extension différente, ajouter l'argument `extensionId` à l'ID de l'autre extension. {{WebExtAPIRef('runtime.onMessageExternal')}} sera déclenché dans l'autre extension.

Les extensions ne peuvent pas envoyer de messages aux scripts de contenu en utilisant cette méthode. Pour envoyer des messages aux scripts de contenu, utilisez {{WebExtAPIRef('tabs.sendMessage')}}.

C'est une fonction asynchrone qui renvoie une [`Promise`](/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise).

> **Note :** Vous pouvez également utiliser une [approche basée sur la connexion pour échanger des messages](/fr/docs/Mozilla/Add-ons/WebExtensions/Content_scripts#Communication_avec_les_scripts_darrière-plan).

## Syntaxe

```js
var sending = browser.runtime.sendMessage(
  extensionId, // optional string
  message, // any
  options, // optional object
);
```

### Paramètres

- `extensionId`{{optional_inline}}

  - : `string`. L'ID de l'extension à envoyer le message. Incluez ceci pour envoyer le message à une extension différente..Si le destinataire prévu a défini un ID explicitement en utilisant la clé d' [applications](/fr/Add-ons/WebExtensions/manifest.json/applications) dans mnifest.json, `extensionId` doit avoir une valeur. Sinon, il devrait avoir l'ID qui a été généré pour le destinataire prévu.

    Si `extensionId` est omis, le message sera envoyé à votre propre extension.

- `message`
  - : `any`. Un objet qui peut être structuré clone sérialisé.
- `options`{{optional_inline}}

  - : `object`.

    - `includeTlsChannelId`{{optional_inline}}
      - : `boolean`. Indique si l'ID de canal TLS sera transmis à {{WebExtAPIRef('runtime.onMessageExternal')}} pour les processus qui écoutent l'événement de connexion.
    - `toProxyScript{{optional_inline}}`
      - : `boolean`. Doit être True si le message est destiné à un fichier PAC chargé à l'aide de l'API {{WebExtAPIRef("proxy")}}.

En fonction des arguments qui lui sont donnés, cette API est parfois ambiguë. Les règles suivantes sont utilisées :

- **Si un argument est donné**, c'est le message à envoyer, et le message sera envoyé en interne.
- **Si deux arguments sont donnés :**

  - Les arguments sont interprétés comme (message, options) et le message est envoyé en interne si le second argument est l'un des suivants :

    1. Un objet d'options valide (c'est-à-dire un objet qui ne contient que les propriétés des options supportés par le navigateur)
    2. null
    3. indéfini

  - Sinon, les arguments sont interprétés comme `(extensionId, message)`. Le message sera envoyé à l'extension identifiée par `extensionId`.

- **Si trois arguments sont donnés**, les arguments sont interprétés comme `(extensionId, message, options)`. Le message sera envoyé à l'extension identifiée par `extensionId`.

Notez qu'avant Firefox 55, le règles étaient différentes dans le cas des 2 arguments. Sous les anciennes règles, si le premier argument était une chaîne, il était traité comme `extensionId`, avec le message comme deuxième argument. Cel signifiait que si vous appelez `sendMessage()` avec des arguments comme `("my-message", {})`, il enverrait un message vide à l'extension identifiée par "my-message". Sous les nouvelles règles, avec ces arguments, vous enverriez le message "my-message" en interne, avec un objet options vide.

### Valeur retournée

Une [`Promise`](/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise). Si le destinataire a envoyé une réponse, celle-ci sera remplie avec la réponse en tant qu'objet JSON. Sinon, il sera rempli sans arguments. si une erreur survient lors de la connexion à l'extension, la promessage sera rejetée avec un message d'erreur.

## Exemples

Voici un script de contenu qui envoie un message au script d'arrière-plan lorsque l'utilisateur clique sur la fenêtre de contenu. La charge utile du message est `{greeting: "Greeting from the content script"}`, et l'expéditeur s'attend également à recevoir une réponse, qui est gérée dans la fonction `handleResponse` :

```js
// content-script.js

function handleResponse(message) {
  console.log(`Message from the background script:  ${message.response}`);
}

function handleError(error) {
  console.log(`Error: ${error}`);
}

function notifyBackgroundPage(e) {
  var sending = browser.runtime.sendMessage({
    greeting: "Greeting from the content script",
  });
  sending.then(handleResponse, handleError);
}

window.addEventListener("click", notifyBackgroundPage);
```

Le script d'arrière-plan correspondant ressemble à ceci :

```js
// background-script.js

function handleMessage(request, sender, sendResponse) {
  console.log("Message from the content script: " + request.greeting);
  sendResponse({ response: "Response from background script" });
}

browser.runtime.onMessage.addListener(handleMessage);
```

## Compatibilité des navigateurs

{{Compat}}

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
