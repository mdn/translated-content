---
title: windows.getLastFocused()
slug: Mozilla/Add-ons/WebExtensions/API/windows/getLastFocused
tags:
  - API
  - Add-ons
  - Extensions
  - Method
  - Non-standard
  - Referece
  - WebExtensions
  - Windows
  - getLastFocused
translation_of: Mozilla/Add-ons/WebExtensions/API/windows/getLastFocused
---
{{AddonSidebar()}}

Obtient la fenêtre qui a été recentrée récemment — généralement la fenêtre 'en haut'.

Il s'agit d'une fonction asynchrone qui renvoie une [`Promise`](/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise).

## Syntaxe

```js
var gettingWindow = browser.windows.getLastFocused(
  getInfo               // optional object
)
```

### Paramètres

- `getInfo`{{optional_inline}}

  - : `object`.

    - `populate`{{optional_inline}}
      - : `boolean`. Si c'est vrai, l'objet {{WebExtAPIRef('windows.Window')}} aura une propriété de tabulation contenant une liste d'objets {{WebExtAPIRef('tabs.Tab')}} représentant les onglets de la fenêtre. Les objets d'onglets ne contiennent que les propriétés `url`, `title` et `favIconUrl` si le fichier manifest de l'extension comprend la permission `"tabs"`.
    - `windowTypes`{{optional_inline}}
      - : Un ensemble d'objets {{WebExtAPIRef('windows.WindowType')}}. Si défini, le  {{WebExtAPIRef('windows.Window')}} retourné sera filtré en fonction de son type. Si désactivé, le filtre par défaut est réglé sur `['normal', 'panel', 'popup']`, avec le type de fenêtre `'panel'` qui sont limités aux propres fenêtres de l'extension.

> **Note :**
>
> Si fourni, le composant `windowTypes` de `getInfo` est ignoré. L'utilisation de `windowTypes` a été dépréciée à partir de Firefox 62.

### Valeur retournée

`Une Promise` qui sera remplie avec un objet {{WebExtAPIRef('windows.Window')}} contenant les détails de la dernière fenêtre ciblée. Si une erreur survient, la promesse sera rejetée avec un message d'erreur.

## Compatibilité du navigateur

{{Compat("webextensions.api.windows.getLastFocused",2)}}

## Exemples

Obtenez la dernière fenêtre ciblée et enregistrez les onglets qu'elle contient. Notez que vous aurez besoin de la [permission](/fr/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) "tabs" pour accéder aux URL des onglets.

```js
function logTabs(windowInfo) {
  for (tabInfo of windowInfo.tabs) {
    console.log(tabInfo.url);
  }
}

function onError(error) {
  console.log(`Error: ${error}`);
}

browser.browserAction.onClicked.addListener((tab) => {
  var getting = browser.windows.getLastFocused({populate: true});
  getting.then(logTabs, onError);
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
