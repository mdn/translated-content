---
title: extension.getExtensionTabs()
slug: Mozilla/Add-ons/WebExtensions/API/extension/getExtensionTabs
tags:
  - API
  - Add-ons
  - Extension
  - Extensions
  - Method
  - Non-standard
  - Reference
  - WebExtensions
  - getExtensionTabs
translation_of: Mozilla/Add-ons/WebExtensions/API/extension/getExtensionTabs
---
{{AddonSidebar()}}

> **Attention :** Cette méthode a été dépréciée. Utilisez {{WebExtAPIRef("extension.getViews()")}} à la place.

Renvoie un tableau des objets de la [Window](/fr/docs/Web/API/Window) JavaScriptpour chacun des onglets qui s'exécutent dans l'extension actuelle. Si `windowId` est spécifié, renvoie uniquement les objets Window des onglets attachés à la fenêtre spécifiée.

## Syntaxe

```js
chrome.extension.getExtensionTabs(
  windowId // optional integer
)
```

Cette API est également disponible en tant que `browser.extension.getExtensionTabs()`.

### Paramètres

- `windowId`{{optional_inline}}
  - : `integer`.

### Valeur retournée

`array` of `object`. Tableau d'objets de fenêtre globaux

## Compatibilité du navigateur

{{Compat("webextensions.api.extension.getExtensionTabs")}}

{{WebExtExamples}}

> **Note :**
>
> Cette API est basée sur l'API Chromium [`chrome.extension`](https://developer.chrome.com/extensions/extension). Cette documentation est dérivée de [`extension.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/extension.json) dans le code Chromium.
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
