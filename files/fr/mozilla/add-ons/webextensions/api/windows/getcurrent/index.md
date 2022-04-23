---
title: windows.getCurrent()
slug: Mozilla/Add-ons/WebExtensions/API/windows/getCurrent
tags:
  - API
  - Add-ons
  - Extensions
  - Method
  - Non-standard
  - Reference
  - WebExtensions
  - Windows
  - getCurrent
translation_of: Mozilla/Add-ons/WebExtensions/API/windows/getCurrent
---
{{AddonSidebar()}}

Obtient la fenêtre actuelle du navigateur, en passant ses détails dans un rappel.

La fenêtre "actuelle" n'est pas nécessairement la même que la fenêtre ayant actuellement le focus. Si cette fonction est appelée à partir d'un script en arrière-plan, elle renvoie la fenêtre ayant actuellement le focus. Mais s'il est appelé à partir d'un script dont le document est associé à une fenêtre de navigateur particulière, il retourne la fenêtre de ce navigateur. Par exemple, si le navigateur affiche une barre latérale, chaque fenêtre de navigateur possède sa propre instance du document de la barre latérale. Si un script exécuté dans le document de la barre latérale appelle `getCurrent()`, il renverra la fenêtre de ce document de la barre latérale.

Il s'agit d'une fonction asynchrone qui renvoie une [`Promise`](/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise).

## Syntaxe

```js
var gettingCurrent = browser.windows.getCurrent(
  getInfo               // optional object
)
```

### Paramètres

- `getInfo`{{optional_inline}}

  - : `object`.

    - `populate`{{optional_inline}}
      - : `boolean`. Si c'est vrai, l'objet {{WebExtAPIRef('windows.Window')}} aura une propriété de tabulation contenant une liste d'objets {{WebExtAPIRef('tabs.Tab')}} représentant les onglets de la fenêtre. Les objets Tab ne contiennent que les propriétés `url`, `title` et `favIconUrl` si le fichier manifest de l'extension comprend la permission `"tabs"`.
    - `windowTypes`{{optional_inline}}
      - : Un ensemble d'objets `{{WebExtAPIRef('windows.WindowType')}}`. Si défini, le  {{WebExtAPIRef('windows.Window')}} retourné sera filtré en fonction de son type. Si désactivé, le filtre par défaut est réglé sur `['normal', 'panel', 'popup']`, avec des types de fenêtres `'panneau'` qui sont limités aux propres fenêtres de l'extension.

> **Note :**
>
> Si fourni, le composant `windowTypes` de `getInfo` est ignoré. L'utilisation de  `windowTypes` a été dépréciée à partir de Firefox 62.

### Valeur retournée

Une [`Promise`](/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise) qui sera remplie avec un objet [`windows.Window`](/fr/docs/Mozilla/Add-ons/WebExtensions/API/windows/Window) object contenant les détails de la fenêtre. Si une erreur survient, la promesse sera rejetée avec un message d'erreur.

## Compatibilité du navigateur

{{Compat("webextensions.api.windows.getCurrent",2)}}

## Exemples

Lorsque l'utilisateur clique sur l'icône d'une action du navigateur, cet exemple obtient la fenêtre actuelle et enregistre les URL des onglets qu'elle contient. Notez que vous aurez besoin de la [permission](/fr/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) "tabs" pour accéder aux URL des onglets.

```js
function logTabs(windowInfo) {
  for (let tabInfo of windowInfo.tabs) {
    console.log(tabInfo.url);
  }
}

function onError(error) {
  console.log(`Error: ${error}`);
}

browser.browserAction.onClicked.addListener((tab) => {
  var getting = browser.windows.getCurrent({populate: true});
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
