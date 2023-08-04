---
title: cookies.onChanged
slug: Mozilla/Add-ons/WebExtensions/API/cookies/onChanged
---

{{AddonSidebar()}}

L'événement `onChanged` de l'API {{WebExtAPIRef("cookies")}} est déclenché lorsqu'un cookie est défini ou supprimé.

Notez que la mise à jour des propriétés d'un cookie est implémentée en deux étapes :

1. Tout d'abord, le cookie à mettre à jour est tout d'abord entiérement supprimé, généralement une notification avec un {{WebExtAPIRef("cookies.OnChangedCause")}} d'écrasement.
2. Ensuite, un nouveau cookie est écrit avec les valeurs mises à jour, généralement une seconde notification avec un {{WebExtAPIRef("cookies.OnChangedCause")}} `explicite`.

## Syntaxe

```js
browser.cookies.onChanged.addListener(listener);
browser.cookies.onChanged.removeListener(listener);
browser.cookies.onChanged.hasListener(listener);
```

Cet API est également disponible en tant que `browser.cookies.onChanged.*`.

Les événements ont trois fonctions :

- `addListener(callback)`
  - : Ajoute un écouteur à l'événement.
- `removeListener(listener)`
  - : Arrêtez d'écouter cet événement. L'argument de l'écouteur à supprimer.
- `hasListener(listener)`
  - : Vérifiez si l'écouteur est enregistré pour cet événement. Retourne `true` s'il écoute, `false` sinon.

## Syntaxe addListener

### Paramètres

- `callback`

  - : Une fonction de rappel qui sera appelée lorsque l'événement se produira. La fonction recevra les arguments suivants :

    - `changeInfo`

      - : Un `objet` contenant les détails de la modification survenue. Ses propriétés sont les suivantes :

        - `removed`
          - : Un `booléen` défini sur `true` si un cookie a été supprimé et sinon false.
        - `cookie`
          - : Un objet {{WebExtAPIRef('cookies.Cookie')}} contenant les informations sur le cookie qui a été défini ou supprimé.
        - `cause`
          - : Une valeur {{WebExtAPIRef('cookies.OnChangedCause')}} représentant la raison sous-jacente de la modification du cookie.

## Compatibilité des navigateurs

{{Compat}}

## Exemples

Cet exemple écoute les événements `onChanged` et enregistre les détails de l'argument `changeInfo` :

```js
browser.cookies.onChanged.addListener(function (changeInfo) {
  console.log(
    "Cookie changed: " +
      "\n * Cookie: " +
      JSON.stringify(changeInfo.cookie) +
      "\n * Cause: " +
      changeInfo.cause +
      "\n * Removed: " +
      changeInfo.removed,
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
