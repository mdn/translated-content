---
title: runtime.lastError
slug: Mozilla/Add-ons/WebExtensions/API/runtime/lastError
---

{{AddonSidebar()}}Cette valeur est utilisée pour signaler un message d'erreur provenant d'une API asynchrone, lorsque l'API asynchrone reçoit un rappel. Cela est utile pour les extensions qui utilisent la valeur basée sur le rappel des API WebExtension.Vpous n'avez pas besoin de vérifier cette propriété si vous utilisez la version basée sur la promesse des API : à la place, passez un gestionnaire d'erreurs à la promesse :

```js
var gettingCookies = browser.cookies.getAll();
gettingCookies.then(onGot, onError);
```

La propriété `runtime.lastError` est définie lorsqu'une fonction asynchrone a une condition d'erreur qu'elle doit signaler à son appelant.

Si vous applez une fonction asynchrone qui veut définir `lastError`, vous devez vérifier l'erreur lorsque vous gérez le résultat de la fonction. Si `lastError` a été défini et que vous ne cochez pas dans la fonction de rappel, une erreur sera générée.

## Syntaxe

```js
var myError = browser.runtime.lastError; // null or Error object
```

### Valeur

Un objet [Error](/fr/docs/Web/JavaScript/Reference/Objets_globaux/Error) représentant une erreur. La propriété [`message`](/fr/docs/Web/JavaScript/Reference/Objets_globaux/Error/message) est un `string` avec une description lisible par l'utilisateur de l'erreur. Si `lastError` n'a pas été défini, la valeur est `null`.

## Examples

Définir un cookie, utiliser pour enregistrer le nouveau cookie ou signaler une erreur :

```js
function logCookie(c) {
  if (browser.runtime.lastError) {
    console.error(browser.runtime.lastError);
  } else {
    console.log(c);
  }
}

browser.cookies.set({ url: "https://developer.mozilla.org/" }, logCookie);
```

La même chose, mais en utilisant une promesse de gérer le résultat de `setCookie()`:

```js
function logCookie(c) {
  console.log(c);
}

function logError(e) {
  console.error(e);
}

var setCookie = browser.cookies.set({ url: "https://developer.mozilla.org/" });

setCookie.then(logCookie, logError);
```

> **Note :** `runtime.lastError` est un alias pour {{WebExtAPIRef("extension.lastError")}}: Ils sont ensemble, et la vérification de l'un fonctionnera.

## Compatibilité des navigateurs

{{Compat}}

{{WebExtExamples}}

> **Note :**
>
> Cette API est basée sur l'API Chromium [`chrome.runtime`](https://developer.chrome.com/extensions/runtime#event-onConnect). Cette documentation est dérivée de [`runtime.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/runtime.json) dans le code de Chromium code.
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
