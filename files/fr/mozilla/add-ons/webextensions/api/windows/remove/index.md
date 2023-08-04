---
title: windows.remove()
slug: Mozilla/Add-ons/WebExtensions/API/windows/remove
---

{{AddonSidebar()}}

Ferme une fenêtre et tous les onglets à l'intérieur, compte tenu de l'ID de la fenêtre.

Il s'agit d'une fonction asynchrone qui renvoie une [`Promise`](/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise).

## Syntaxe

```js
var removing = browser.windows.remove(
  windowId, // integer
);
```

### Paramètres

- `windowId`
  - : `integer`. ID of the window to close.

### Valeur retournée

Une [`Promesse`](/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise) qui sera remplie sans arguments lorsque la fenêtre a été fermée. Si une erreur survient, la promesse sera rejetée avec un message d'erreur.

## Compatibilité des navigateurs

{{Compat}}

## Exemples

Lorsque l'utilisateur clique sur l'icône d'une action du navigateur, fermez la fenêtre dans laquelle l'icône a été cliquée:

```js
function onRemoved() {
  console.log(`Removed window`);
}

function onError(error) {
  console.error(`Error:`, error);
}

browser.browserAction.onClicked.addListener((tab) => {
  var removing = browser.windows.remove(tab.windowId);
  removing.then(onRemoved, onError);
});
```

Fermez la fenêtre en cours, par exemple une fenêtre contextuelle, lorsque l'utilisateur clique sur un bouton de la page :

```js
// in a script loaded by the page in the window
document.querySelector("#close").addEventListener(async ({ button }) => {
  try {
    if (button) return; // not a left click
    const windowId = (await browser.windows.getCurrent()).id;
    await browser.windows.remove(windowId);
    // this point will never be reached, since the window is gone
  } catch (error) {
    console.error("Closing failed:", error);
  }
});
```

Dans Firefox, la même chose pourrait être réalisée avec la propriété de création de fenêtre `.allowScriptsToClose` et `window.close()`.

{{WebExtExamples}}

> **Note :**
>
> Cette API est basée sur l'API de Chromnium [`chrome.windows`](https://developer.chrome.com/extensions/windows). Cette documentation provient de [`windows.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/windows.json) dans le code de Chromium.
>
> Les données de compatibilité Microsoft Edge sont fournies par Microsoft Corporation et sont incluses ici sous la licence Creative Commons Attribution 3.0 United States.

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
