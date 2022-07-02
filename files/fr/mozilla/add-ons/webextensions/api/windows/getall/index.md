---
title: windows.getAll()
slug: Mozilla/Add-ons/WebExtensions/API/windows/getAll
tags:
  - API
  - Add-ons
  - Extensions
  - Method
  - Non-standard
  - Reference
  - WebExtensions
  - Windows
  - getAll
translation_of: Mozilla/Add-ons/WebExtensions/API/windows/getAll
---
{{AddonSidebar()}}

Obtient des informations sur toutes les fenêtres ouvertes, en les passant dans un rappel.

Il s'agit d'une fonction asynchrone qui renvoie une [`Promise`](/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise).

## Syntaxe

```js
var gettingAll = browser.windows.getAll(
  getInfo                // optional object
)
```

### Paramètres

- `getInfo`{{optional_inline}}

  - : `object`. Cela contrôle ce que les objets {{WebExtAPIRef('windows.Window')}} sont récupérés.

    - `populate`{{optional_inline}}
      - : `boolean` Par défaut à `false`.  S'il est défini sur `true`, chaque objet {{WebExtAPIRef('windows.Window')}} aura une propriété `tabs` qui contient une liste d'objets {{WebExtAPIRef('tabs.Tab')}} représentant les tabs de cette fenêtre. Les objets `Tab` contiendront les propriétés `url`, `title` et `favIconUrl` uniquement si le fichier manifest de l'extension contient les permissions `"tabs"`.
    - `windowTypes`{{optional_inline}}
      - : `Un ensemble d'objets` {{WebExtAPIRef('windows.WindowType')}}. Si cette option est définie, les objets {{WebExtAPIRef('windows.Window')}} renvoyés seront filtrés en fonction de leur type. Si désactivé, le filtre par défaut est réglé sur `['normal', 'panel', 'popup']`, avec des types de fenêtres `'panel'` qui sont limités aux propres fenêtres de l'extension.

### Valeur retournée

Une [`Promise`](/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise) qui sera remplie avec un ensemble d'objets  {{WebExtAPIRef('windows.Window')}}, représentant toutes les fenêtres qui correspondent aux critères donnés. Si une erreur survient, la promesse sera rejetée avec un message d'erreur.

## Compatibilité du navigateur

{{Compat("webextensions.api.windows.getAll")}}

## Exemples

Enregistrez les URL pour les onglets sur toutes les fenêtres de navigateur "normales". Notez que vous aurez besoin de [permission](/fr/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) "onglets" pour accéder aux URLs des onglets.

```js
function logTabsForWindows(windowInfoArray) {
  for (windowInfo of windowInfoArray) {
    console.log(`Window: ${windowInfo.id}`);
    console.log(windowInfo.tabs.map((tab) => {return tab.url}));
  }
}

function onError(error) {
  console.log(`Error: ${error}`);
}

browser.browserAction.onClicked.addListener((tab) => {
  var getting = browser.windows.getAll({
    populate: true,
    windowTypes: ["normal"]
  });
  getting.then(logTabsForWindows, onError);
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
