---
title: browserAction.getTitle()
slug: Mozilla/Add-ons/WebExtensions/API/browserAction/getTitle
tags:
  - API
  - Add-ons
  - Extensions
  - Méthode
  - Non-standard
  - Reference
  - WebExtensions
  - browserAction
  - getTitle
translation_of: Mozilla/Add-ons/WebExtensions/API/browserAction/getTitle
---
{{AddonSidebar()}}

Obtient le titre de l'action du navigateur.

Tout comme vous pouvez définir le titre par onglet en utilisant  {{WebExtAPIRef("browserAction.setTitle()")}}, vous pouvez donc récupérer un titre spécifique à un onglet en passant l'ID de l'onglet dans cette fonction.

Il s'agit d'une fonction asynchrone qui renvoie une [`Promise`](/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise).

## Syntaxe

```js
var gettingTitle = browser.browserAction.getTitle(
  details               // object
)
```

### Paramètres

- `details`

  - : `object`

    - `tabId`{{optional_inline}}
      - : `integer`. Spécifiez l'onglet pour obtenir le titre.
    - `windowId`{{optional_inline}}
      - : `integer`. Spécifiez la fenêtre à partir de laquelle vous souhaitez obtenir le titre.

<!---->

- Si `windowId` et `tabId` sont tous deux fournis, la fonction échoue et la promesse qu'elle renvoie est rejetée.
- Si `windowId` et `tabId` sont tous les deux omis, le titre global est renvoyé.

### Return value

Une [`Promise`](/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise) qui sera remplie avec une chaîne contenant le titre de l'action du navigateur.

## Compatibilité du navigateur

{{Compat("webextensions.api.browserAction.getTitle",2)}}

## Exemples

Ce code change le titre entre "ceci" et "cela" chaque fois que l'utilisateur clique sur l'action du navigateur :

```js
function toggleTitle(title) {
  if (title == "this") {
    browser.browserAction.setTitle({title: "that"});
  } else {
    browser.browserAction.setTitle({title: "this"});
  }
}

browser.browserAction.onClicked.addListener(() => {
  var gettingTitle = browser.browserAction.getTitle({});
  gettingTitle.then(toggleTitle);
});
```

{{WebExtExamples}}

> **Note :**
>
> Cette API est basée sur l'API Chromium [`chrome.browserAction`](https://developer.chrome.com/extensions/browserAction). Cette documentation est dérivée de [`browser_action.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/browser_action.json) dans le code de Chromium code.
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
