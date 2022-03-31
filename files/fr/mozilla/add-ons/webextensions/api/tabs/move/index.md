---
title: tabs.move()
slug: Mozilla/Add-ons/WebExtensions/API/tabs/move
tags:
  - API
  - Add-ons
  - Extensions
  - Method
  - Non-standard
  - Reference
  - WebExtensions
  - deplacer
  - move
  - tabs
translation_of: Mozilla/Add-ons/WebExtensions/API/tabs/move
---
{{AddonSidebar()}}

Déplace un ou plusieurs onglets vers une nouvelle position dans la même fenêtre ou vers une autre fenêtre.

Vous pouvez uniquement déplacer des onglets vers et à partir de fenêtres dont {{WebExtAPIRef('windows.WindowType', 'WindowType')}} est `"normal"`.

C'est une fonction asynchrone qui renvoie une [`Promise`](/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise).

## Syntaxe

```js
var moving = browser.tabs.move(
  tabIds,              // integer or integer array
  moveProperties       // object
)
```

### Paramètres

- `tabIds`
  - : `integer` ou `array` d'`integer`. ID du {{WebExtAPIRef('tabs.Tab', 'tab')}}à déplacer, ou un tableau d'ID d'onglet.
- `moveProperties`

  - : `object`. Un objet qui spécifie où déplacer le(s) onglet(s).

    - `windowId`{{optional_inline}}
      - : `integer`. 'ID de la fenêtre dans laquelle vous souhaitez déplacer les onglet(s). Si vous omettez cela, chaque onglet de `tabIds` sera déplacé vers l' `index` dans sa fenêtre actuelle. Si vous incluez ceci, et `tabIds` contient plus d'un onglet, alors le premier onglet de `tabIds` sera déplacé vers l'`index`, et les autres onglets le suivront dans l'ordre donné dans `tabIds`.
    - `index`

      - : `integer`. La position de l'index pour déplacer la tabulation à, en commençant à 0. Une valeur de -1 placera la tabulation à la fin de la fenêtre.

        Si vous passez une valeur inférieure à -1, la fonction renvoie une erreur.

        Notez que vous ne pouvez pas déplacer les onglets épinglés sur une position après les onglets non épinglés d'une fenêtre, ou déplacer les onglets non épinglés à une position avant les onglets épinglés. Par exemple, si vous avez un ou plusieurs onglets épinglés dans la fenêtre cible et si tabIds fait référence à un onglet non épinglé, vous ne pouvez pas passer 0 ici. Si vous essayez de le faire, la fonction échouera silencieusement (elle ne produira pas d'erreur).

### Valeur retournée

Une [`Promise`](/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise) qui sera satisfaite avec un objet `{{WebExtAPIRef('tabs.Tab')}}` ou un `tableau` d'objets `{{WebExtAPIRef('tabs.Tab')}}`, contenant des détails sur les onglets déplacés. Si aucun onglet n'a été déplacé (par exemple, parce que vous avez essayé de déplacer un onglet non épinglé avant un onglet épinglé), il s'agira d'un tableau vide. Si une erreur se produit, la promesse sera rejetée avec un message d'erreur.

## Exemples

Déplacer le premier onglet de la fenêtre en cours vers la dernière position de la fenêtre en cours :

```js
function onMoved(tab) {
  console.log(`Moved: ${tab}`);
}

function onError(error) {
  console.log(`Error: ${error}`);
}

function firstToLast(windowInfo) {
  if (windowInfo.tabs.length == 0) {
    return;
  }
  var moving = browser.tabs.move(windowInfo.tabs[0].id, {index: -1});
  moving.then(onMoved, onError);
}

browser.browserAction.onClicked.addListener(function() {
  var gettingCurrent = browser.windows.getCurrent({populate: true});
  gettingCurrent.then(firstToLast, onError);
});
```

Déplacer tous les onglets servis via HTTP ou HTTPS depuis \* .mozilla.org jusqu'à la fin de leur fenêtre :

```js
function onMoved(tab) {
  console.log(`Moved: ${tab}`);
}

function onError(error) {
  console.log(`Error: ${error}`);
}

function moveMoz(tabs) {
  var mozTabIds = tabs.map(tabInfo => tabInfo.id);
  var moving = browser.tabs.move(mozTabIds, {index: -1});
  moving.then(onMoved, onError);
}

browser.browserAction.onClicked.addListener(function() {
  var gettingMozTabs = browser.tabs.query({url:"*://*.mozilla.org/*"});
  gettingMozTabs.then(moveMoz, onError);
});
```

Déplacer tous les onglets servis via HTTP ou HTTPS de \* .mozilla.org vers la fenêtre qui héberge le premier onglet de ce type, en commençant à la position 0 :

```js
function onMoved(tab) {
  console.log(`Moved: ${tab}`);
}

function onError(error) {
  console.log(`Error: ${error}`);
}

function moveMoz(tabs) {
  var mozTabIds = tabs.map(tabInfo => tabInfo.id);
  var targetWindow = tabs[0].windowId;
  var moving = browser.tabs.move(mozTabIds, {windowId: targetWindow, index: 0});
  moving.then(onMoved, onError);
}

browser.browserAction.onClicked.addListener(function() {
  var gettingMozTabs = browser.tabs.query({url:"*://*.mozilla.org/*"});
  gettingMozTabs.then(moveMoz, onError);
});
```

{{WebExtExamples}}

## Compatibilité du navigateur

{{Compat("webextensions.api.tabs.move")}}

> **Note :**
>
> Cette API est basée sur l’API [`chrome.tabs`](https://developer.chrome.com/extensions/tabs#method-executeScript) de Chromium. Cette documentation est dérivée de [`tabs.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/tabs.json) dans le code de Chromium code.
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
