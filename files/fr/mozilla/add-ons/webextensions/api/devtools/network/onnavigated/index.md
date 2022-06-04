---
title: devtools.network.onNavigated
slug: Mozilla/Add-ons/WebExtensions/API/devtools/network/onNavigated
tags:
  - API
  - Add-ons
  - Extensions
  - Reference
  - WebExtensions
  - devtools.network
translation_of: Mozilla/Add-ons/WebExtensions/API/devtools.network/onNavigated
original_slug: Mozilla/Add-ons/WebExtensions/API/devtools.network/onNavigated
---
{{AddonSidebar()}}

Mise en place lorsque l'utilisateur navigue dans la fenêtre inspectée vers une nouvelle page

## Syntaxe

```js
browser.devtools.network.onNavigated.addListener(listener)
browser.devtools.network.onNavigated.removeListener(listener)
browser.devtools.network.onNavigated.hasListener(listener)
```

Les événements ont trois fonctions :

- `addListener(listener)`
  - : Ajouter un auditeur à cet événement.
- `removeListener(listener)`
  - : Arrêter d'écouter un événement. L'argument de l'auditeur est l'auditeur à supprimer.
- `hasListener(listener)`
  - : Vérifiez si l'auditeur est enregistré pour cet événement. Renvoie **vrai** si elle écoute, sinon **faux**.

## Syntaxe addListener

### Paramètres

- `callback`

  - : Fonction qui sera appelée lors de l'événement. La fonction passera les arguments suivants :

    - `url`
      - : `string`. La nouvelle URL pour la fenêtre.

## Compatibilité du navigateur

{{Compat("webextensions.api.devtools.network.onNavigated")}}

## Exemples

```js
function handleNavigated(url) {
  console.log(url);
}

browser.devtools.network.onNavigated.addListener(handleNavigated);
```

{{WebExtExamples}}

> **Note :**
>
> Cette API est basée sur l'API [`chrome.devtools`](https://developer.chrome.com/extensions/devtools) de Chromium.
>
> Les données de compatibilité de Microsoft Edge sont fournies par Microsoft Corporation et sont incluses ici sous la licence Creative Commons Attribution 3.0 United States.

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
