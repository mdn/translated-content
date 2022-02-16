---
title: management.onDisabled()
slug: Mozilla/Add-ons/WebExtensions/API/management/onDisabled
tags:
  - API
  - Add-ons
  - Event
  - Reference
  - WebExtensions
  - management
  - onDisabled
translation_of: Mozilla/Add-ons/WebExtensions/API/management/onDisabled
---
{{AddonSidebar()}}

Action quand l'extension est désactivée.

L'API requière l'[API de permission](/fr/Add-ons/WebExtensions/manifest.json/permissions) "management".

## Syntaxe

```js
browser.management.onDisabled.addListener(listener)
browser.management.onDisabled.removeListener(listener)
browser.management.onDisabled.hasListener(listener)
```

Les événement ont trois fonctions :

- `addListener(callback)`
  - : Ajoutez un auditeur à cet événement.
- `removeListener(listener)`
  - : L'argument de l'auditeur est l'auditeur à supprimer.
- `hasListener(listener)`
  - : Vérifie si l'auditeur est enregistré à l'événement. Renvoie `true` s'il est à l'écoute, sinon `false` .

## addListener syntaxe

### Paramètres

- `function`

  - : Fonction de rappel qui sera appelée lorsque cet événement se produira. La fonction passera par l'argument suivant :

    - `info`
      - : [`ExtensionInfo`](/fr/docs/Mozilla/Add-ons/WebExtensions/API/management/ExtensionInfo): informations de l'extension qui a été désactivé

## Compatibilité du navigateur

{{Compat("webextensions.api.management.onDisabled")}}

## Exemples

Enregistrez les noms des extensions lorsqu'ils sont désactivés.

```js
browser.management.onDisabled.addListener((info) => {
  console.log(info.name + " was disabled");
});
```

{{WebExtExamples}}

> **Note :**
>
> Cette API est basée sur l'API Chromium [`chrome.management`](https://developer.chrome.com/extensions/management). Cette documentation est dérivée de [`management.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/management.json) dans le code de Chromium code.
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
