---
title: tabs.onSelectionChanged
slug: Mozilla/Add-ons/WebExtensions/API/tabs/onSelectionChanged
tags:
  - API
  - Add-ons
  - Deprecated
  - Event
  - Extensions
  - Non-standard
  - Reference
  - WebExtensions
  - onSelectionChanged
  - tabs
translation_of: Mozilla/Add-ons/WebExtensions/API/tabs/onSelectionChanged
---
{{AddonSidebar()}}

> **Attention :** Cet événement est obsolète. Utilisez {{WebExtAPIRef("tabs.onActivated")}} à la place.

Se déclenche lorsque l'onglet sélectionné dans une fenêtre change.

## Syntaxe

```js
browser.tabs.onSelectionChanged.addListener(listener)
browser.tabs.onSelectionChanged.removeListener(listener)
browser.tabs.onSelectionChanged.hasListener(listener)
```

Les événements ont trois fonctions:

- `addListener(callback)`
  - : Ajoute un écouteur à cet événement.
- `removeListener(listener)`
  - : Arrêtez d'écouter cet événement. L'argument `listener` est l'écouteur à supprimer.
- `hasListener(listener)`
  - :  Vérifiez si `listener` est enregistré pour cet événement. Renvoie `true` s'il écoute, sinon `false`.

## Syntaxe addListener

### Paramètres

- `callback`

  - : Fonction qui sera appelée lorsque cet événement se produit. La fonction recevra les arguments suivants :

    - `tabId`
      - : `integer`. L'ID de l'onglet qui est devenu actif.

    <!---->

    - `selectInfo`
      - : [`object`](#selectInfo).

## Objets supplémentaires

### selectInfo

- `windowId`
  - : `integer`. L'ID de la fenêtre dans laquelle l'onglet sélectionné a changé.

## Compatibilité du navigateur

{{Compat("webextensions.api.tabs.onSelectionChanged")}}

{{WebExtExamples}}

> **Note :**
>
> Cette API est basée sur l'API Chromium [`chrome.tabs`](https://developer.chrome.com/extensions/tabs#method-executeScript). Cette documentation est dérivée de [`tabs.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/tabs.json) dans le code de Chromium code.
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
