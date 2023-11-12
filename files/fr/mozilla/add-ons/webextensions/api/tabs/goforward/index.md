---
title: tabs.goForward()
slug: Mozilla/Add-ons/WebExtensions/API/tabs/goForward
---

{{AddonSidebar()}}

Passez à la page suivante dans l'historique de l'onglet, si disponible.

Il s'agit d'une fonction asynchrone qui renvoie une [`Promise`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Promise).

## Syntaxe

```js
var goingForward = browser.tabs.goForward(
  tabId, // optional integer
  callback, // optional function
);
```

### Paramètres

- `tabId`{{optional_inline}}
  - : `integer`. L'ID de l'onglet à naviguer. Par défaut, l'onglet actif de la fenêtre en cours.
- `callback`{{optional_inline}}
  - : `function`. Lorsque la navigation sur la page se termine, cette fonction est appelée sans paramètres.

### Valeur retournée

Une [`Promise`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Promise) qui est tenue lorsque la navigation sur la page se termine.

## Compatibilité des navigateurs

{{Compat}}

## Exemples

Passez à la page suivante dans l'onglet en cours :

```js
function onGoForward() {
  console.log("Gone forward");
}

function onError(error) {
  console.log(`Error: ${error}`);
}

var goingForward = browser.tabs.goForward();
goingForward.then(onGoForward, onError);
```

{{WebExtExamples}}

> **Note :**
>
> Cette API est basée sur l'API [`chrome.tabs`](https://developer.chrome.com/extensions/tabs#method-getZoomSettings) de Chromium.Cette documentation est dérivée de [`tabs.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/tabs.json) dans le code de Chromium.
>
> Les données de compatibilité Microsoft Edge sont fournies par Microsoft Corporation et sont incluses ici sous la licence américaine Creative Commons Attribution 3.0.

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
