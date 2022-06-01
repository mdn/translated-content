---
title: windows.onFocusChanged
slug: Mozilla/Add-ons/WebExtensions/API/windows/onFocusChanged
tags:
  - API
  - Add-ons
  - Event
  - Extensions
  - Non-standard
  - Reference
  - WebExtensions
  - Windows
  - onFocusChanged
translation_of: Mozilla/Add-ons/WebExtensions/API/windows/onFocusChanged
---
{{AddonSidebar()}}

Attiré lorsque la fenêtre actuellement change. Sera {{WebExtAPIRef('windows.WINDOW_ID_NONE')}} si toutes les fenêtres du navigateur ont perdu le focus.

> **Note :** Sur certains gestionnaires de fenêtres Linux, WINDOW_ID_NONE sera toujours envoyé immédiatement avant un passage d'une fenêtre de navigateur à l'autre.

## Syntaxe

```js
browser.windows.onFocusChanged.addListener(listener)
browser.windows.onFocusChanged.removeListener(listener)
browser.windows.onFocusChanged.hasListener(listener)
```

Les événements ont trois événements :

- `addListener(callback)`
  - : Ajoute un auditeur à cet événement
- `removeListener(listener)`
  - : Arrêtez d'écouter cet événement. L'argument de l'auditeur est l'auditeur à supprimer.
- `hasListener(listener)`
  - : Vérifiez si un auditeur est enregistré pour cet événement. Renvoie **vrai** si elle écoute, **faux** sinon..

## syntaxe addListener

### Paramètres

- `callback`

  - : Fonction qui sera appelée lors de l'événement. La fonction passera les arguments suivants :

    - `windowId`
      - : `integer`. ID de la fenêtre nouvellement localisée.

## Compatibilité du navigateur

{{Compat("webextensions.api.windows.onFocusChanged")}}

## Exemples

Changements de mise au point du journal :

```js
browser.windows.onFocusChanged.addListener((windowId) => {
  console.log("Newly focused window: " + windowId);
});
```

{{WebExtExamples}}

> **Note :**
>
> Cette API est basée sur l'API de Chromnium [`chrome.windows`](https://developer.chrome.com/extensions/windows). Cette documentation provient de [`windows.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/windows.json) dans le code de Chromium.
>
> Les données de compatibilité Microsoft Edge sont fournies par Microsoft Corporation et sont incluses ici sous la licence Creative Commons Attribution 3.0 United States.

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
