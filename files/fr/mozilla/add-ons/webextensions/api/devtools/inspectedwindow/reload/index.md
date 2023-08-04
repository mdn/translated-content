---
title: devtools.inspectedWindow.reload()
slug: Mozilla/Add-ons/WebExtensions/API/devtools/inspectedWindow/reload
---

{{AddonSidebar()}}

Recharge la fenêtre à laquelle les devtools sont attachés.

## Syntaxe

```js
browser.devtools.inspectedWindow.reload(
  reloadOptions, // object
);
```

### Paramètres

- `reloadOptions`{{optional_inline}}

  - : `object`. Options pour la fonction, comme suit

    - `ignoreCache`{{optional_inline}}
      - : `boolean`. S'il est vrai, cela fait que le rechargement ignore le cache du navigateur (comme si l'utilisateur avait appuyé sur Shift+Ctrl+R).
    - `userAgent`{{optional_inline}}
      - : `string`. Définissez un agent utilisateur personnalisé pour la page. Ici, la chaîne fournie sera envoyée dans l'en-tête de l'[Agent utilisateur](/fr/docs/Web/HTTP/Headers/User-Agent), et sera renvoyée par les appels à [`navigator.userAgent`](/fr/docs/Web/API/NavigatorID/userAgent) réalisé par des scripts s'exécutant sur la page.
    - `injectedScript` {{optional_inline}}
      - : `string`. Injectez l'expression JavaScript donnée dans toutes les images de la page, avant tout autre script.

## Compatibilité des navigateurs

{{Compat}}

## Exemples

Rechargez la fenêtre inspectée, définissez l'agent utilisateur et injectez un script

```js
const reloadButton = document.querySelector("#reload-button");

reloadButton.addEventListener("click", () => {
  browser.devtools.inspectedWindow.reload({
    injectedScript: "alert(navigator.userAgent);",
    userAgent: "Not a real UA",
  });
});
```

{{WebExtExamples}}

> **Note :**
>
> Cette API est basée sur l'API Chromium [`chrome.devtools`](https://developer.chrome.com/extensions/devtools).
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
