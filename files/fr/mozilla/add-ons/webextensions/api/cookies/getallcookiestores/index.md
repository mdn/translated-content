---
title: cookies.getAllCookieStores()
slug: Mozilla/Add-ons/WebExtensions/API/cookies/getAllCookieStores
---

{{AddonSidebar()}}

La méthode **`getAllCookieStores()`** de l'API {{WebExtAPIRef("cookies")}} retourne une liste de tous les cookies stores.

C'est une fonction asynchrone qui renvoie une [`Promise`](/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise).

## Syntaxe

```js
var gettingStores = browser.cookies.getAllCookieStores();
```

### Paramètres

Aucun.

### Valeur renvoyée

Une [`Promise`](/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise) qui sera remplie avec un `tableau` d'objets {{WebExtAPIRef('cookies.CookieStore')}} représentant tous les cookies stores existants.

## Compatibibilité du navigateur

{{Compat}}

## Exemples

Dans l'extrait suivant, la méthode `getAllCookieStores()` permet de récupérer tous les cookies stores actuellement disponible dans le navigateur et d'afficher chaque ID de cookie et les onglets qui partagent actuellement chaque cookie store.

```js
function logStores(cookieStores) {
  for (let store of cookieStores) {
    console.log(`Cookie store: ${store.id}\n Tab IDs: ${store.tabIds}`);
  }
}

var getting = browser.cookies.getAllCookieStores();
getting.then(logStores);
```

Chaque membre du tableau `cookieStores` est un objet {{WebExtAPIRef("cookies.CookieStore")}}.

{{WebExtExamples}}

> **Note :**
>
> Cette API est basée sur l'API Chromium [`chrome.cookies`](https://developer.chrome.com/extensions/cookies). Cette documentation est dérivée de [`cookies.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/cookies.json) dans le code Chromium.
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
