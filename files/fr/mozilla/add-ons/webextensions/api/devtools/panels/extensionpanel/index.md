---
title: devtools.panels.ExtensionPanel
slug: Mozilla/Add-ons/WebExtensions/API/devtools/panels/ExtensionPanel
tags:
  - API
  - Add-ons
  - Extensions
  - Reference
  - WebExtensions
  - devtools.panels
translation_of: Mozilla/Add-ons/WebExtensions/API/devtools.panels/ExtensionPanel
original_slug: Mozilla/Add-ons/WebExtensions/API/devtools.panels/ExtensionPanel
---
{{AddonSidebar()}}

Une `ExtensionPanel` représente un panneau ajouté aux devtools. C'est la résolution de la [`Promise`](/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise) renvoyé par [`browser.devtools.panels.create()`](/fr/Add-ons/WebExtensions/API/devtools.panels/create).

## Type

Les valeurs de ce type sont des objets. Définissez deux événements, `onShown` et `onHidden`.

- `onShown` est émis lorsque le panneau est affiché dans les devtools (par exemple, quand l'utilisateur a cliqué sur le panneau dans la fenêtre des devtools).
- `onHidden` est émis lorsque le panneau est caché (par exemple, quand l'utilisateur a basculé sur un onglet différent dans la fenêtre devtools).

## Compatibilité du navigateur

{{Compat("webextensions.api.devtools.panels.ExtensionPanel")}}

## Exemples

Ce code crée un nouveau panneau, puis ajoute des gestionnaires pour ces événements `onShown` et `onHidden`.

```js
function handleShown(e) {
  console.log(e);
  console.log("panel is being shown");
}

function handleHidden(e) {
  console.log(e);
  console.log("panel is being hidden");
}

browser.devtools.panels.create(
  "My Panel",                 // title
  "icons/star.png",           // icon
  "devtools/panel/panel.html" // content
).then((newPanel) => {
  newPanel.onShown.addListener(handleShown);
  newPanel.onHidden.addListener(handleHidden);
});
```

{{WebExtExamples}}

> **Note :**
>
> Cette API est basée sur l'API Chromium [`chrome.devtools.panels`](https://developer.chrome.com/extensions/devtools_panels).
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
