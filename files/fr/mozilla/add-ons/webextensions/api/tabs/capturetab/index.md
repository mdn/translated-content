---
title: tabs.captureTab()
slug: Mozilla/Add-ons/WebExtensions/API/tabs/captureTab
tags:
  - API
  - Add-ons
  - Extensions
  - Method
  - Reference
  - WebExtensions
  - captureTab
  - tabs
translation_of: Mozilla/Add-ons/WebExtensions/API/tabs/captureTab
---
{{AddonSidebar()}}

Crée un URI de données codant une image de la zone visible de l'onglet donné. Vous devez avoir la [permission](/fr/Add-ons/WebExtensions/manifest.json/permissions) `<all_urls>` pour utiliser cette méthode.

C'est une fonction asynchrone qui renvoie une [`Promise`](/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise).

## Syntaxe

```js
var capturing = browser.tabs.captureTab(
  tabId,               // optional integer
  options              // optional extensionTypes.ImageDetails
)
```

### Paramètres

- `tabId`{{optional_inline}}
  - : `integer`. ID de l'onglet à capturer. Par défaut à l'onglet actif dans la fenêtre en cours.
- `options`{{optional_inline}}
  - : {{WebExtAPIRef('extensionTypes.ImageDetails')}}.

### Valeur retournée

Une [`Promise`](/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise) qui sera remplie avec une URL de données qui code une image de la zone visible de l'onglet capturé. Peut être affecté à la propriété 'src' d'un élément HTML Image pour l'affichage. Si une erreur se produit, la promesse sera rejetée avec un message d'erreur.

## Exemples

Capturez une image de l'onglet actif dans la fenêtre actuelle, avec les paramètres par défaut :

```js
function onCaptured(imageUri) {
  console.log(imageUri);
}

function onError(error) {
  console.log(`Error: ${error}`);
}

browser.browserAction.onClicked.addListener(function() {
  var capturing = browser.tabs.captureTab();
  capturing.then(onCaptured, onError);
});
```

{{WebExtExamples}}

## Compatibilité du navigateur

{{Compat("webextensions.api.tabs.captureTab")}}

> **Note :**
>
> Cette API est basée sur l'API Chromium [`chrome.tabs`](https://developer.chrome.com/extensions/tabs#method-executeScript). Cette documentation est dérivée de [`tabs.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/tabs.json) dans le code de Chromium code.

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
