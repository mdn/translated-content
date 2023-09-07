---
title: cookies.CookieStore
slug: Mozilla/Add-ons/WebExtensions/API/cookies/CookieStore
---

{{AddonSidebar()}}

Le type `CookieStore` de l'API {{WebExtAPIRef("cookies")}} représente un cookie store dans le navigateur.

Les fenperes dans les différents mode de navigations peut utiliser différents magasins de cookies — Une fenêtre de navigation privée/ mode navigation privée, par exemple utilisera un magasin de cookies séparé d'une fenêtre non-privée / privée.

## Type

Les valeurs de ce type sont des objets, qui peuvent contenir les propriétés suivantes :

- `id`
  - : Une `chaîne` représentant l'identification unique pour le cookie store.
- `incognito`
  - : Une valeur booléenne qui indique s'il s'agit d'un magasin de cookies incognito.
- `tabIds`
  - : Un `tableau` d'`entiers`, qui identifie tous les onglets du navigateur qui partagent ce cookie store.

## Compatibilité des navigateurs

{{Compat}}

## Exemples

Dans l'extrait suivant, la méthode {{WebExtAPIRef("cookies.getAllCookieStores()")}} permet de récupérer tous les magasins de cookies actuellement disponibles dans le navigateur et d'afficher chaque ID de cookie, ainsi que les onglets qui se partagent le cookie store.

```js
function logStores(cookieStores) {
  for (store of cookieStores) {
    console.log(`Cookie store: ${store.id}\n Tab IDs: ${store.tabIds}`);
  }
}

var getting = browser.cookies.getAllCookieStores();
getting.then(logStores);
```

L'extrait de code suivant obtient tous les cookies stockés et enregistre ensuite le nombre total stocké et combien de ces cookies sont incognito.

```js
browser.cookies.getAllCookieStores().then((stores) => {
  var incognitoStores = stores.map((store) => store.incognito);
  console.log(
    `Of ${stores.length} cookie stores, ${incognitoStores.length} are incognito.`,
  );
});
```

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
