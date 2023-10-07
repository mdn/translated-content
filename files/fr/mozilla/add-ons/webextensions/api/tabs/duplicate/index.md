---
title: tabs.duplicate()
slug: Mozilla/Add-ons/WebExtensions/API/tabs/duplicate
---

{{AddonSidebar()}}

Duplique un onglet dont l'identifiant est donné.

Il s'agit d'une fonction asynchrone qui renvoie une [promesse (`Promise`)](/fr/docs/Web/JavaScript/Reference/Global_Objects/Promise).

## Syntaxe

```js
let duplicating = browser.tabs.duplicate(
  tabId, // entier
  duplicateProperties, // objet optionnel
);
```

### Paramètres

- `tabId`
  - : `integer`. L'identifiant de l'onglet à dupliquer.
- `duplicateProperties` Optionnel

  - : `object`. Un objet décrivant la façon dont l'onglet est dupliqué. Il contient les propriétés suivantes&nbsp;:

    - `index` Optionnel
      - : `integer`. La position du nouvel onglet dans la fenêtre. La valeur est restreinte à l'intervalle entre zéro et le nombre d'onglets dans la fenêtre.
    - `active` Optionnel
      - : `boolean`. Si l'onglet devient l'onglet actif dans la fenêtre. Cela ne change pas l'état du focus pour la fenêtre. `true` par défaut.

### Valeur de retour

Une [promesse (`Promise`)](/fr/docs/Web/JavaScript/Reference/Global_Objects/Promise) dont la valeur de résolution sera un objet [`tabs.Tab`](/fr/docs/Mozilla/Add-ons/WebExtensions/API/tabs/Tab) contenant des détails sur l'onglet dupliqué. L'objet `Tab` contiendra les propriétés `url`, `title` et `favIconUrl` uniquement si l'extension dispose de la [permission `"tabs"`](/fr/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) ou lorsque [l'hôte correspond à un hôte ciblé dans les permissions](/fr/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions). Si une erreur se produit, la promesse sera rejetée avec un message d'erreur.

> **Note :** À partir de Firefox 68, la promesse renvoyée par `browser.tabs.duplicate()` se résout dès que l'onglet a été dupliqué. Auparavant, la promesse n'était résolue qu'une fois l'onglet entièrement chargé.

## Exemples

Duplique le premier onglet, puis affiche l'identifiant de l'onglet nouvellement créé :

```js
function onDuplicated(tabInfo) {
  console.log(tabInfo.id);
}

function onError(error) {
  console.error(error);
}

// Duplique le premier onglet du tableau
function duplicateFirstTab(tabs) {
  console.log(tabs);
  if (tabs.length > 0) {
    let duplicating = browser.tabs.duplicate(tabs[0].id);
    duplicating.then(onDuplicated, onError);
  }
}

// On récupère tous les onglets ouverts
let querying = browser.tabs.query({});
querying.then(duplicateFirstTab, onError);
```

### Exemple d'extensions

- [tabs-tabs-tabs](https://github.com/mdn/webextensions-examples/tree/master/tabs-tabs-tabs)

## Compatibilité des navigateurs

{{Compat}}

> **Note :**
>
> Cette API est basée sur l'API Chromium [`chrome.tabs`](https://developer.chrome.com/extensions/tabs#method-executeScript). Cette documentation est dérivée de [`tabs.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/tabs.json) dans le code de Chromium code.
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
