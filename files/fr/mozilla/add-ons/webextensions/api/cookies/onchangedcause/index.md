---
title: cookies.OnChangedCause
slug: Mozilla/Add-ons/WebExtensions/API/cookies/OnChangedCause
tags:
  - API
  - Add-ons
  - Cookies
  - Extensions
  - Non-standard
  - OnChangedCause
  - Reference
  - Type
  - WebExtensions
translation_of: Mozilla/Add-ons/WebExtensions/API/cookies/OnChangedCause
---
{{AddonSidebar()}}

Le type `OnChangedCause` de l'API {{WebExtAPIRef("cookies")}} représente la raison pour laquelle un cookie a été modifié.

## Type

Les valeurs de ce type sont des chaînes. Les valeurs possibles sont :

- `evicted`
  - : Un cookie a été automatiquement supprimé en raison d'un nettoyage de mémoire.
- `expired`
  - : Un cookie a été automatiquement supprimé en raison de l'expiration.
- `explicit`
  - : Un cookie a été inséré ou supprimé via un appel explicite à {{WebExtAPIRef("cookies.remove()")}}.
- `expired_overwrite`
  - : Un cookie a été remplacé par un cookie dont la date d'expiration est déjà expirée.
- `overwrite`
  - : Un appel à {{WebExtAPIRef("cookies.set()")}} a remplacé ce cookie par un autre.

## Compatibilité du navigateur

{{Compat("webextensions.api.cookies.OnChangedCause")}}

## Exemples

Vous pouvez écouter l'événement {{WebExtAPIRef("cookies.onChanged")}} pour être averti lorsque les cookies changent. L'écouteur reçoit un objet  `changeInfo` qui contient une propriété `cause`, dont la valeur est une chaîne `OnChangeCaused` :

```js
browser.cookies.onChanged.addListener(function(changeInfo) {
  console.log('Cookie changed: ' +
              '\n * Cookie: ' + JSON.stringify(changeInfo.cookie) +
              '\n * Cause: ' + changeInfo.cause +
              '\n * Removed: ' + changeInfo.removed);
});
```

{{WebExtExamples}}

> **Note :**
>
> Cette API est basée sur l'API Chromium [`chrome.cookies`](https://developer.chrome.com/extensions/cookies). Cette documentation est dérivée de [`cookies.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/cookies.json) dans le code Chromium.
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
