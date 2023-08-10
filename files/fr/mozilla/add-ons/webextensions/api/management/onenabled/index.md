---
title: management.onEnabled()
slug: Mozilla/Add-ons/WebExtensions/API/management/onEnabled
---

{{AddonSidebar()}}

L'auditeur de l'événement appelé lorsque l'événement `enabled` est déclenché, indiquant qu'un add-on est maintenant activé.

L'API requière l'[API de permission](/fr/Add-ons/WebExtensions/manifest.json/permissions) "management"

## Syntaxe

```js
browser.management.onEnabled.addListener(listener);
browser.management.onEnabled.removeListener(listener);
browser.management.onEnabled.hasListener(listener);
```

Les événements ont trois fonctions :

- `addListener(callback)`
  - : Ajoutez un auditeur à cet événement.
- `removeListener(listener)`
  - : L'argument de l'auditeur est l'auditeur à supprimer.
- `hasListener(listener)`
  - : Vérifie si l'auditeur est enregistré à l'événement. Renvoie `true` s'il est à l'écoute, sinon `false` .

## Syntaxe addListener

### Parameters

- `function`

  - : Fonction de rappel qui sera appelée lorsque cet événement se produira. La fonction passera par l'argument suivant :

    - `info`
      - : [`ExtensionInfo`](/fr/Add-ons/WebExtensions/API/management/ExtensionInfo): informations de l'extension qui a été désinstallé.

## Compatibilité des navigateurs

{{Compat}}

## Exemples

Enregistrez les noms des extensions lorsqu'ils sont activés :

```js
browser.management.onEnabled.addListener((info) => {
  console.log(info.name + " was enabled");
});
```

{{WebExtExamples}}

> **Note :**
>
> Cette API est basée sur l'API Chromium [`chrome.management`](https://developer.chrome.com/extensions/management). Cette documentation est dérivée de [`management.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/management.json) dans le code de Chromium code.
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
