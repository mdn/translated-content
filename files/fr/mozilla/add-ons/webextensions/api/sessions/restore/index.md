---
title: sessions.restore()
slug: Mozilla/Add-ons/WebExtensions/API/sessions/restore
tags:
  - API
  - Add-ons
  - Extensions
  - Methode(2)
  - Non-standard
  - WebExtensions
  - restaure
  - sessions
translation_of: Mozilla/Add-ons/WebExtensions/API/sessions/restore
---
{{AddonSidebar()}}

Restaure un onglet ou une fenêtre fermée. La restauration ne réouvre pas seulement l'onglet ou la fenêtre : elle rétablit également l'historique de navigation de l'onglet afin que les boutons arrière/avant fonctionnent. La restauration d'une fenêtre restaurera tous les onglets que la fenêtre contenait lors de sa fermeture.

Il s'agit d'une fonction asynchrone que retourne une [`Promise`](/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise).

## Syntaxe

```js
var restoringSession = browser.sessions.restore(
  sessionId             // string
)
```

### Paramètres

- `sessionId`
  - : `string`. Une chaîne contenant l'ID de session pour la fenêtre ou l'onglet à restaurer. Cela se trouve dans la propriété `sessionId` de l'objet   {{WebExtAPIRef("tabs.Tab", "Tab")}} ou {{WebExtAPIRef("windows.Window", "Window")}} dans  {{WebExtAPIRef("sessions.Session", "Session")}} retourné de {{WebExtAPIRef("sessions.getRecentlyClosed()")}}.

### Valeur renvoyée

Une [`Promise`](/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise). Cela sera rempli avec un objet  {{WebExtAPIRef("sessions.Session", "Session")}} représentant la session qui a été restaurée.

## Compatibilité du navigateur

{{Compat("webextensions.api.sessions.restore")}}

## Exemples

Cela restaure la session fermée la plus récente, qu'il s'agisse d'une fenêtre ou d'un onglet :

```js
function restoreMostRecent(sessionInfos) {
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

browser.browserAction.onClicked.addListener(function() {
  var gettingSessions = browser.sessions.getRecentlyClosed({
    maxResults: 1
  });
  gettingSessions.then(restoreMostRecent, onError);
});
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
