---
title: pageAction.setTitle()
slug: Mozilla/Add-ons/WebExtensions/API/pageAction/setTitle
tags:
  - API
  - Add-ons
  - Extensions
  - Method
  - Non-standard
  - Reference
  - WebExtensions
  - pageAction
  - setTitle
translation_of: Mozilla/Add-ons/WebExtensions/API/pageAction/setTitle
---
{{AddonSidebar()}}

Définit le titre de la page action. Le titre est affiché dans une info-bulle lorsque l'utilisateur survole l'action de la page

## Syntaxe

```js
browser.pageAction.setTitle(
  details // object
)
```

### Paramètres

- `details`

  - : `object`.

    - `tabId`
      - : `integer`. L'ID de l'onglet dont vous voulez définir le titre.
    - `title`
      - : `string`. Le texte de l'info-bulle.

## Compatibilité du navigateur

{{Compat("webextensions.api.pageAction.setTitle")}}

## Exemples

Chaque fois qu'un onglet est mis à jour, affichez l'action de la page pour cet onglet et définissez son titre pour afficher l'ID de l'onglet :

```js
browser.tabs.onUpdated.addListener((tabId, changeInfo, tabInfo) => {
  browser.pageAction.show(tabId);
  browser.pageAction.setTitle({
    tabId: tabId,
    title: "Tab ID: " + tabId
  });
});
```

{{WebExtExamples}}

> **Note :**
>
> Cette API est basée sur l'API Chromium [`chrome.pageAction`](https://developer.chrome.com/extensions/pageAction). Cette documentation est dérivée de [`page_action.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/page_action.json) dans le code de Chromium code.
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
