---
title: sessions.onChanged
slug: Mozilla/Add-ons/WebExtensions/API/sessions/onChanged
tags:
  - API
  - Add-ons
  - Event
  - Extensions
  - Non-standard
  - Reference
  - WebExtensions
  - onChanged
  - sessions
translation_of: Mozilla/Add-ons/WebExtensions/API/sessions/onChanged
---
{{AddonSidebar()}}

Mise en place lorsque une liste d'onglets fermes ou de fenêtre changes.

## Syntaxe

```js
browser.sessions.onChanged.addListener(listener)
browser.sessions.onChanged.removeListener(listener)
browser.sessions.onChanged.hasListener(listener)
```

Les événements ont trois fonctions :

- `addListener(callback)`
  - : Ajoute un auditeur à un événement.
- `removeListener(listener)`
  - : Arrêtez d'écouter cet événement. L'argument de l'auditeur est un auditeur à supprimer.
- `hasListener(listener)`
  - : Vérifiez si l'auditeur est enregistré pour cet événement. Renvoie Vrai s'il écoute. Sinon Faux.

## Syntaxe addListener

### Paramètres

- `callback`
  - : Fonction qui sera appelée lors de l'événement. Il ne passe aucun paramètre.

## Compatibilité du navigateur

{{Compat("webextensions.api.sessions.onChanged")}}

## Exemples

Cette extension écoute `onChanged`, puis restaure  immédiatement la dernière session fermée, ce qui rend impossible de fermer les fenêtres ou les onglets :

```js
function restoreSession(sessionInfos) {
  if (!sessionInfos.length) {
    console.log("No sessions found")
    return;
  }
  let sessionInfo = sessionInfos[0];
  if (sessionInfo.tab) {
    browser.sessions.restore(sessionInfo.tab.sessionId);
  } else {
    browser.sessions.restore(sessionInfo.window.sessionId);
  }
}

function onError(error) {
  console.log(error);
}

function restoreMostRecent() {
  var gettingSessions = browser.sessions.getRecentlyClosed({
    maxResults: 1
  });
  gettingSessions.then(restoreSession, onError);
}

browser.sessions.onChanged.addListener(restoreMostRecent);
```

{{WebExtExamples}}

> **Note :**
>
> Cette API est basée sur l'API Chromium [`chrome.sessions`](https://developer.chrome.com/extensions/sessions).
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
