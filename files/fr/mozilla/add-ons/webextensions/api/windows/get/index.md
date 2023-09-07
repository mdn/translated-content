---
title: windows.get()
slug: Mozilla/Add-ons/WebExtensions/API/windows/get
---

{{AddonSidebar()}}

Obtient les détails sur une fenêtre, compte tenu de son identifiant. Les détails sont transmis à un rappel.

Il s'agit d'une fonction asynchrone qui renvoit une [`Promise`](/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise).

## Syntaxe

```js
var getting = browser.windows.get(
  windowId, // integer
  getInfo, // optional object
);
```

### Paramètres

- `windowId`
  - : `integer`. L'ID de l'objet de fenêtre souhaité est retourné.
- `getInfo`{{optional_inline}}

  - : `object`. Contient des options pour filtrer le type de fenêtre.

    - `populate`{{optional_inline}}
      - : `boolean`. Si c'est vrai, l'objet {{WebExtAPIRef('windows.Window')}} aura une propriété de tabulation qui contient une liste d'objets {{WebExtAPIRef('tabs.Tab')}} représentant les onglets ouverts dans la fenêtre. Les objets Tab ne contiennent que les propriétés `url`, `title` et `favIconUrl` i le fichier manifeste de l'extension comprend la permission `"tabs"`.
    - `windowTypes`{{optional_inline}}
      - : `Ensemble d'objets` {{WebExtAPIRef('windows.WindowType')}}. Si défini, le retour de {{WebExtAPIRef('windows.Window')}} sera filtré en fonction de son type. Si désactivé, le filtre par défaut est réglé sur `['normal', 'panel', 'popup']`, avec des types de fenêtres `'panel'` qui sont limités aux propres fenêtres de l'extension.

> **Note :**
>
> Si fourni, le composant `windowTypes` de `getInfo` est ignoré. L'utilisation de `windowTypes` a été dépréciée à partir de Firefox 62.

### Valeur de retour

Une [`Promise`](/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise) qui sera remplie avec un objet {{WebExtAPIRef('windows.Window')}} contenant les détails de la fenêtre. Si une erreur survient, la promesse sera rejetée avec un message d'erreur.

## Exemples

Cet exemple obtient la fenêtre actuelle et enregistre les URL des onglets qu'il contient. Notez que vous aurez besoin des [permission](/fr/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) "onglets" pour accéder aux URL des onglets.

> **Note :** Cet exemple est un peu irréaliste: dans cette situation, vous utiliserez probablement {{WebExtAPIRef("windows.getCurrent()")}}.

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
  var getting = browser.windows.get(tab.windowId, { populate: true });
  getting.then(logTabs, onError);
});
```

## Compatibilité des navigateurs

{{Compat}}

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
