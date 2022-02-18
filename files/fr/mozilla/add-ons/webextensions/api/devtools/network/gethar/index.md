---
title: devtools.network.getHAR()
slug: Mozilla/Add-ons/WebExtensions/API/devtools/network/getHAR
tags:
  - Add-ons
  - Extensions
  - WebExtensions
  - devtools.network
  - getHAR
translation_of: Mozilla/Add-ons/WebExtensions/API/devtools.network/getHAR
original_slug: Mozilla/Add-ons/WebExtensions/API/devtools.network/getHAR
---
{{AddonSidebar()}}

Obtenez un [journal HAR](http://www.softwareishard.com/blog/har-12-spec/#log) pour la page chargée dans l'onglet en cours.

C'est une fonction asynchrone qui renvoie une [`Promise`](/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise).

## Syntaxe

```js
var getting = browser.devtools.network.getHAR()
```

### Paramètres

None.

### Valeur retournée

Une [`Promise`](/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise) qui sera remplie avec un objet contenant le journal HAR pour l'onglet en cours. Pour plus de détails sur ce que contient l'objet journal, reportez-vous à la [spécification HAR](http://www.softwareishard.com/blog/har-12-spec/#log).

## Compatibilité du navigateur

{{Compat("webextensions.api.devtools.network.getHAR")}}

## Exemples

Consignez les URL des demandes contenues dans le journal HAR :

```js
async function logRequests() {
  let harLog = await browser.devtools.network.getHAR();
  console.log(`HAR version: ${harLog.version}`);
  for (let entry of harLog.entries) {
    console.log(entry.request.url);
  }
}

logRequestsButton.addEventListener("click", logRequests);
```

{{WebExtExamples}}

> **Note :**
>
> Cette API est basée sur l'API Chromium [`chrome.devtools.network`](https://developer.chrome.com/extensions/devtools_network).

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
