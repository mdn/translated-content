---
title: runtime.onMessage
slug: Mozilla/Add-ons/WebExtensions/API/runtime/onMessage
tags:
  - API
  - Add-ons
  - Event
  - Extensions
  - Non-standard
  - Reference
  - WebExtensions
  - onmessage
  - runtime
translation_of: Mozilla/Add-ons/WebExtensions/API/runtime/onMessage
---
{{AddonSidebar()}}

Utilisez cet événement pour écouter les messages d’une autre partie de votre extension.

Voici quelques exemples de cas d'utilisation :

- **dans un [script de contenu](/fr/docs/Mozilla/Add-ons/WebExtensions/Anatomy_of_a_WebExtension#content_scripts)**, pour écouter les messages d’un [script d’arrière-plan](/fr/docs/Mozilla/Add-ons/WebExtensions/Anatomy_of_a_WebExtension#background_scripts) ;
- **dans un script d’arrière-plan**, pour écouter les messages d’un script de contenu ;
- **dans une [page d’options](/fr/docs/Mozilla/Add-ons/WebExtensions/Anatomy_of_a_WebExtension#options_pages) ou un script de [popup](/fr/docs/Mozilla/Add-ons/WebExtensions/User_interface_components#popups)**, pour écouter les messages d’un script d’arrière-plan ;
- **dans un script d’arrière-plan**, pour écouter les messages d’une page d’options ou d’un script de popup.

Pour envoyer un message reçu par l'écouteur `onMessage`, utilisez {{WebExtAPIRef("runtime.sendMessage()")}} ou (pour envoyer un message à un script de contenu) {{WebExtAPIRef("tabs.sendMessage()")}}.

> **Note :** Évitez de créer plusieurs écouteurs `onMessage` pour le même type de message, car l'ordre de déclenchement des différents écouteurs ne sera pas garanti.
>
> Lorsque vous voulez garantir la livraison d'un message à une terminaison spécifique, utilisez l'[approche basée sur la connexion pour échanger des messages](/fr/docs/Mozilla/Add-ons/WebExtensions/Content_scripts#les_messages_en_flux_continu).

En plus du message, l’écouteur reçoit en paramètres :

- Un objet `sender` donnant les détails sur l’expéditeur du message ;
- Une fonction `sendResponse()` qui peut être utilisée pour renvoyer une réponse à l'expéditeur.

Vous pouvez envoyer une réponse synchrone au message en appelant la fonction `sendResponse()` dans votre écouteur. [Voir un exemple](/fr/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onMessage#sending_a_synchronous_response).

Pour envoyer une réponse asynchrone, il existe deux options :

- Renvoyer `true` à partir de l’écouteur d’événement. Cela permet de conserver la fonction `sendResponse()` après le retour de l’écouteur pour éventuellement l'appeler plus tard. [Voir un exemple](/fr/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onMessage#sending_an_asynchronous_response_using_sendresponse).
- Renvoyer une `Promise` depuis l’écouteur d’événement, et la résoudre lorsque vous avez la réponse (ou la rejeter en cas d’erreur). [Voir un exemple](/fr/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onMessage#sending_an_asynchronous_response_using_a_promise).

> **Attention :** Retourner une promesse ([`Promise`](fr/docs/Web/JavaScript/Reference/Global_Objects/Promise)) est désormais la méthode à privilégier car `sendResponse()` [sera retirée de la spécification W3C](https://github.com/mozilla/webextension-polyfill/issues/16#issuecomment-296693219).
>
> La bibliothèque populaire [webextension-polyfill](https://github.com/mozilla/webextension-polyfill) a déjà supprimé cette fonction de son implémentation.

> **Note :** Vous pouvez également utiliser une [approche basée sur la connexion pour échanger des messages](/fr/docs/Mozilla/Add-ons/WebExtensions/Content_scripts#connection-based_messaging).

## Syntaxe

```js
browser.runtime.onMessage.addListener(listener)
browser.runtime.onMessage.removeListener(listener)
browser.runtime.onMessage.hasListener(listener)
```

Les événements ont trois fonctions :

- `addListener(listener)`
  - : Ajoute un écouteur à cet événement.
- `removeListener(listener)`
  - : Cesse d’écouter cet événement. L’argument `listener` est l’écouteur à supprimer.
- `hasListener(listener)`
  - : Vérifie si un `listener` est enregistré pour cet événement. Retourne `true` s’il écoute, `false` sinon.

## Syntaxe de addListener

### Paramètres

- _`listener`_

  - : Une fonction d’écoute qui sera appelée lorsque cet événement se produira. La fonction recevra les arguments suivants :

    - _`message`_
      - : Un objet qui est le message lui-même. C’est un objet sérialisable (voir [l'algorithme de clonage de données](/fr/docs/Mozilla/Add-ons/WebExtensions/Chrome_incompatibilities#data_cloning_algorithm)).

    <!---->

    - _`sender`_
      - : Un objet {{WebExtAPIRef("runtime.MessageSender")}} représentant l’expéditeur du message.

    <!---->

    - `sendResponse`

      - : Une fonction à appeler, au plus une fois, pour envoyer une réponse au `message`. La fonction prend un seul argument, qui peut être n'importe quel objet sérialisable (voir [l'algorithme de clonage de données](/fr/docs/Mozilla/Add-ons/WebExtensions/Chrome_incompatibilities#data_cloning_algorithm)). Cet argument est renvoyé à l'expéditeur du message.

        Si vous avez plus d'un écouteur `onMessage()` dans le même document, alors un seul peut envoyer une réponse.

        Pour envoyer une réponse de manière synchrone, appelez `sendResponse()` avant le retour de la fonction d'écoute.

        Pour envoyer une réponse de manière asynchrone :

        - soit on gardera une référence à l'argument `sendResponse()` et on retournera `true` depuis la fonction listenener. `sendResponse()` pourra être appelée après le retour de la fonction d'écoute.
        - ou on retournera {{jsxref("Promise")}} à partir de la fonction d'écoute et on résoudra la promesse lorsque la réponse sera prête. C'est la méthode à privilégier.

    La fonction `listener` peut renvoyer un booléen ou une {{jsxref("Promise")}}.

    > **Note :** N'appelez pas `addListener()` en utilisant une fonction `async` :
    >
    > ```js example-bad
    > // ne faites pas ça
    > browser.runtime.onMessage.addListener(
    >   async (data, sender) => {
    >     if (data.type === 'handle_me') { return 'done'; }
    >   }
    > );
    > ```
    >
    > L'écouteur consommera ainsi chaque message qu'il reçoit, ce qui empêchera effectivement tous les autres écouteurs de recevoir et de traiter des messages.
    >
    > Si vous souhaitez adopter une approche asynchrone, utilisez plutôt une `Promise`, comme ceci :
    >
    > ```js example-good
    > browser.runtime.onMessage.addListener(
    >   (data, sender) => {
    >     if (data.type === 'handle_me') {
    >       return Promise.resolve('done');
    >     }
    >   }
    > );
    > ```

## Compatibilité des navigateurs

{{Compat("webextensions.api.runtime.onMessage")}}

## Exemples

### Exemple simple

Ce script de contenu écoute les événements clic dans la page web. Si le clic a eu lieu sur un lien, il envoie un message à la page d’arrière-plan avec l’URL cible :

```js
// content-script.js

window.addEventListener("click", notifyExtension);

function notifyExtension(e) {
  if (e.target.tagName != "A") {
    return;
  }
  browser.runtime.sendMessage({"url": e.target.href});
}
```

Le script d’arrière-plan écoute ces messages et affiche une notification à l’aide de l’API [`notifications`](/fr/docs/Mozilla/Add-ons/WebExtensions/API/notifications).

```js
// background-script.js

browser.runtime.onMessage.addListener(notify);

function notify(message) {
  browser.notifications.create({
    "type": "basic",
    "iconUrl": browser.extension.getURL("link.png"),
    "title": "Vous avez cliqué sur un lien !",
    "message": message.url
  });
}
```

### Envoyer une réponse synchrone

Le script de contenu suivant envoie un message au script d’arrière-plan lorsque l’utilisateur ou l’utilisatrice clique sur la page. Il enregistre également toute réponse envoyée par le script d’arrière-plan :

```js
// content-script.js

function handleResponse(message) {
  console.log(`le script d’arrière-plan a répondu : ${message.response}`);
}

function handleError(error) {
  console.log(`Erreur : ${error}`);
}

function sendMessage(e) {
  var sending = browser.runtime.sendMessage({content: "message du script de contenu"});
  sending.then(handleResponse, handleError);
}

window.addEventListener("click", sendMessage);
```

Voici une version du script d’arrière-plan correspondant, qui envoie une réponse de manière synchrone depuis l’intérieur de l’écouteur :

```js
// background-script.js

function handleMessage(request, sender, sendResponse) {
  console.log(`le script de contenu a envoyé un message : ${request.content}`);
  sendResponse({response: "réponse du script d’arrière-plan"});
}

browser.runtime.onMessage.addListener(handleMessage);
```

Et voici une autre version, qui utilise {{jsxref("Promise.resolve()")}} :

```js
// background-script.js

function handleMessage(request, sender, sendResponse) {
  console.log(`le script de contenu a envoyé un message : ${request.content}`);
  return Promise.resolve({response: "réponse du script d’arrière-plan"});
}

browser.runtime.onMessage.addListener(handleMessage);
```

### Envoi d’une réponse asynchrone à l’aide de sendResponse

Voici une autre version du script d’arrière-plan de l’exemple précédent. Il envoie une réponse de manière asynchrone, après le retour de l’écouteur. Remarquez le `return true;` dans l’écouteur : cela indique au navigateur que vous avez l’intention d’utiliser l’argument `sendResponse()` après le retour de l’écouteur.

```js
// background-script.js

function handleMessage(request, sender, sendResponse) {
  console.log(`le script de contenu a envoyé un message : ${request.content}`);
  setTimeout(() => {
    sendResponse({response: "réponse asynchrone du script d’arrière-plan"});
  }, 1000);
  return true;
}

browser.runtime.onMessage.addListener(handleMessage);
```

### Envoi d’une réponse asynchrone à l’aide d’une promesse

Ce script de contenu reçoit le premier lien `<a>` dans la page, et envoie un message demandant si l’emplacement du lien fait partie des marque-pages. Il attend comme réponse un {{jsxref("Boolean", "booléen")}} : `true` si l’emplacement est dans les marque-pages, `false` sinon.

```js
// content-script.js

const firstLink = document.querySelector("a");

function handleResponse(isBookmarked) {
  if (isBookmarked) {
    firstLink.classList.add("bookmarked");
  }
}

browser.runtime.sendMessage({
  url: firstLink.href
}).then(handleResponse);
```

Voici le script d’arrière-plan. Il utilise `{{WebExtAPIRef("bookmarks.search()")}}` pour voir si le lien est dans les marque-pages, ce qui renvoie une {{jsxref("Promise", "promesse")}} :

```js
// background-script.js

function isBookmarked(message, sender, response) {
  return browser.bookmarks.search({
    url: message.url
  }).then(function(results) {
    return results.length > 0;
  });
}

browser.runtime.onMessage.addListener(isBookmarked);
```

Si le gestionnaire asynchrone ne renvoie pas de promesse, vous pouvez explicitement construire une promesse. Cet exemple plutôt artificiel envoie une réponse après un délai d’une seconde, en utilisant [`Window.setTimeout()`](/fr/docs/Web/API/WindowOrWorkerGlobalScope/setTimeout) :

```js
// background-script.js

function handleMessage(request, sender, sendResponse) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({response: "réponse asynchrone du script d’arrière-plan"});
    }, 1000);
  });
}

browser.runtime.onMessage.addListener(handleMessage);
```

{{WebExtExamples}}

> **Note :**
>
> Cette API est basée sur l’API Chromium [`chrome.runtime`](https://developer.chrome.com/extensions/runtime#event-onConnect). Cette documentation est dérivée de [`runtime.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/runtime.json) dans le code de Chromium code.
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
