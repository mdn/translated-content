---
title: runtime.onMessageExternal
slug: Mozilla/Add-ons/WebExtensions/API/runtime/onMessageExternal
---

{{AddonSidebar()}}Utilisez cet événement pour écouter les messages d'une autre extension.

Pour envoyer un message qui sera reçu par le module d'écoute `onMessageExternal`, utilisez {{WebExtAPIRef("runtime.sendMessage()")}}, en transmettant l'ID du destinataire dans le paramètre `extensionId`.

Avec le message lui-même, l'écouteur est transmis :

- un objet `sender` donnant des détails sur l'expéditeur du message
- une fonction `sendResponse` qu'elle peut utiliser pour renvoyer une réponse à l'expéditeur.

Cette API ne peut pas être utilisée dans un script de contenu.

## Syntaxe

```js
browser.runtime.onMessageExternal.addListener();
browser.runtime.onMessageExternal.removeListener(listener);
browser.runtime.onMessageExternal.hasListener(listener);
```

Les événements ont trois fonctions:

- `addListener(callback)`
  - : Ajoute un écouteur à cet événement.
- `removeListener(listener)`
  - : Arrêtez d'écouter cet événement. L'argument `listener` est l'écouteur à supprimer.
- `hasListener(listener)`
  - : Vérifie si un `listener` est enregistré pour cet événement. Renvoie `true` s'il écoute, `false` sinon.

## Syntaxe addListener

### Paramètres

- `function`

  - : Une fonction de rappel qui sera appelée lorsque cet événement se produira. La fonction recevra les arguments suivants :

    - `message`
      - : `object`. Le message lui-même. C'est un objet JSON-ifiable.

    <!---->

    - `sender`
      - : Un objet {{WebExtAPIRef('runtime.MessageSender')}} représentant l'expéditeur du message.

    <!---->

    - `sendResponse`

      - : Une fonction à appeler, au plus une fois, pour envoyer une réponse au message. La fonction prend un seul argument, qui peut être n'importe quel objet JSON-ifiable. Cet argument est renvoyé à l'expéditeur du message.

        Si vous avez plus d'un écouteur `onMessageExternal` dans le même document, un seul peut envoyer une réponse.

        To send a response synchronously, call `sendResponse` before the listener function returns. To send a response asynchronously:

        - Soit garder une référence à l'argumen `sendResponse` et retourne `true` à partir de la fonction d'écouteur. Vous pourrez ensuite appeler `sendResponse` après le retour de la fonction d'écouteur..
        - ou retourne une [`Promise`](/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise) de la fonction d'écouteur et résoudre la promesse lorsque la réponse est prête.

## Compatibilité des navigateurs

{{Compat}}

## Exemples

Dans cet exemple, l'extension "blue\@mozilla.org" envoie un message à l'extension "red\@mozilla.org":

```js
// sender: browser.runtime.id == "blue@mozilla.org"

// Send a message to the extension whose ID is "red@mozilla.org"
browser.runtime.sendMessage("red@mozilla.org", "my message");
```

```js
// recipient: browser.runtime.id == "red@mozilla.org"

function handleMessage(message, sender) {
  // check that the message is from "blue@mozilla.org"
  if (sender.id === "blue@mozilla.org") {
    // process message
  }
}

browser.runtime.onMessageExternal.addListener(handleMessage);
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
