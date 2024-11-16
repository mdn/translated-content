---
title: tabs.getZoomSettings()
slug: Mozilla/Add-ons/WebExtensions/API/tabs/getZoomSettings
---

{{AddonSidebar}}

Obtient les paramètres de zoom actuels pour un onglet spécifié.

C'est une fonction asynchrone qui renvoie une [`Promise`](/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise).

## Syntaxe

```js
var gettingZoomSettings = browser.tabs.getZoomSettings(
  tabId, // optional integer
);
```

### Paramètres

- `tabId`{{optional_inline}}
  - : `integer`. L'ID de l'onglet pour obtenir les paramètres de zoom actuels. Par défaut à l'onglet actif de la fenêtre en cours.

### Valeur retournée

Une [`Promise`](/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise) qui sera remplie avec un objet {{WebExtAPIRef('tabs.ZoomSettings')}} représentant les paramètres de zoom actuels de l'onglet. Si l'onglet n'a pas pu être trouvé ou qu'une autre erreur se produit, la promesse sera rejetée avec un message d'erreur.

## Exemples

Obtenez les paramètres de zoom pour l'onglet en cours :

```js
function onGot(settings) {
  console.log(settings);
}

function onError(error) {
  console.log(`Error: ${error}`);
}

var gettingZoomSettings = browser.tabs.getZoomSettings();
gettingZoomSettings.then(onGot, onError);
```

{{WebExtExamples}}

## Compatibilité des navigateurs

{{Compat}}

> [!NOTE]
>
> Cette API est basée sur l'API [`chrome.tabs`](https://developer.chrome.com/docs/extensions/reference/api/tabs#method-executeScript) de Chromium. Cette documentation est dérivée de [`tabs.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/tabs.json) dans le code de Chromium code.
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
