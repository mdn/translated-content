---
title: tabs.get()
slug: Mozilla/Add-ons/WebExtensions/API/tabs/get
tags:
  - API
  - Add-ons
  - Extensions
  - Method
  - Non-standard
  - Reference
  - WebExtensions
  - get
  - tabs
translation_of: Mozilla/Add-ons/WebExtensions/API/tabs/get
---
{{AddonSidebar()}}

Étant donné un ID d'onglet, obtenez les détails de l'onglet en tant qu'objet {{WebExtAPIRef("tabs.Tab")}}.

C'est une fonction asynchrone qui renvoie une [`Promise`](/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise).

## Syntaxe

```js
var getting = browser.tabs.get(
  tabId              // integer
)
```

### Paramètres

- `tabId`
  - : `integer`. ID de l'onglet à obtenir.

### Valeur retournée

Une [`Promise`](/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise) qui sera remplie avec un objet {{WebExtAPIRef('tabs.Tab')}} contenant des informations sur l'onglet. Si l'onglet n'a pas pu être trouvé ou qu'une autre erreur se produit, la promesse sera rejetée avec un message d'erreur.

## Exemples

Obtenir des informations sur un onglet lorsqu'il est activé :

```js
async function logListener(info) {
  try {
    let tabInfo = await browser.tabs.get(info.tabId);
    console.log(tabInfo);
  } catch (error) {
    console.error(error);
  }
}

browser.tabs.onActivated.addListener(logListener);
```

{{WebExtExamples}}

## Compatibilité du navigateur

{{Compat("webextensions.api.tabs.get")}}

> **Note :**
>
> Cette API est basée sur l’API [`chrome.tabs`](https://developer.chrome.com/extensions/tabs#method-executeScript) de Chromium. Cette documentation est dérivée de [`tabs.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/tabs.json) dans le code de Chromium code.

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
