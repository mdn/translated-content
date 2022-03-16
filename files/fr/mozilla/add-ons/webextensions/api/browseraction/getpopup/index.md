---
title: browserAction.getPopup()
slug: Mozilla/Add-ons/WebExtensions/API/browserAction/getPopup
tags:
  - API
  - Add-ons
  - Extensions
  - Method
  - Non-standard
  - Reference
  - WebExtensions
  - browserAction
  - getPopup
translation_of: Mozilla/Add-ons/WebExtensions/API/browserAction/getPopup
---
{{AddonSidebar()}}

Obtient le document HTML défini comme la popup pour cette action du navigateur.

Il s'agit d'une fonction asynchrone qui renvoie une [`Promise`](/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise).

## Syntaxe

```js
var gettingPopup = browser.browserAction.getPopup(
  details               // object
)
```

### Paramètres

- `details`

  - : `object`.

    - `tabId`{{optional_inline}}
      - : `integer`. L'onglet dont le menu déroulant reçoit un entier.
    - `windowId`{{optional_inline}}
      - : `integer`. Les fenêtres dont le popup à obtenir.

<!---->

- Si `windowId` et `tabId` sont tous les deux fournis, la fonction échoue.
- Si `windowId` et `tabId` sont tous deux omis, la fenêtre contextuelle globale est retournée.

### Valeur retournée

Une [`Promise`](/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise) qui sera remplie avec une chaine cntenant l'URL du document contextuel. Ce sera une URL entièrement qualifiée, telle que `moz-extension://d1d8a2eb-fe60-f646-af30-a866c5b39942/popups/popup2.html`.

## Compatibilité du navigateur

{{Compat("webextensions.api.browserAction.getPopup",2)}}

## Exemples

Obtenez l'URL du Popup:

```js
function gotPopup(popupURL) {
  console.log(popupURL)
}

var gettingPopup = browser.browserAction.getPopup({});
gettingPopup.then(gotPopup);
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
