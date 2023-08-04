---
title: webNavigation.getAllFrames()
slug: Mozilla/Add-ons/WebExtensions/API/webNavigation/getAllFrames
---

{{AddonSidebar()}}

Étant donné un ID d'onglet, récupère des informations sur toutes les images qu'il contient.

C'est une fonction asynchrone qui renvoie une [`Promise`](/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise).

## Syntaxe

```js
var gettingFrames = browser.webNavigation.getAllFrames(
  details, // object
);
```

### Paramètres

- `details`

  - : `object`. Informations sur l'onglet pour récupérer toutes les images.

    - `tabId`
      - : `integer`. L'identifiant de l'onglet

### Valeur retournée

Une [`Promise`](/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise) sera accompli avec un tableau d'objets, dont chacun a les propriétés suivantes :

- `errorOccurred`
  - : `boolean`. Vrai si la dernière navigation dans cette trame a été interrompue par une erreur, c'est-à-dire l'événement {{WebExtAPIRef("webNavigation.onErrorOccurred", "onErrorOccurred")}} déclenché.
- `processId`
  - : `integer`. L'ID du processus exécutant le moteur de rendu pour cet onglet.
- `frameId`
  - : `integer`. L'identifiant de l'image Si c'est l'image principale, alors `frameId` est nul.
- `parentFrameId`
  - : `integer`. ID du parent de cette image. C'est -1 s'il n'y a pas de cadre parent: c'est-à-dire si ce cadre est le contexte de navigation de niveau supérieur dans l'onglet.
- `url`
  - : `string`. L'URL actuellement associée à ce cadre.

Si l'onglet spécifié n'a pas pu être trouvé ou qu'une autre erreur se produit, la promesse sera rejetée avec un message d'erreur.

## Compatibilité des navigateurs

{{Compat}}

## Exemples

Ce code enregistre les URL de toutes les images dans l'onglet actif, lorsque l'utilisateur clique sur une action du navigateur :

```js
function logFrameInfo(framesInfo) {
  for (frameInfo of framesInfo) {
    console.log(frameInfo);
  }
}

function onError(error) {
  console.log(`Error: ${error}`);
}

function logAllFrames(tabs) {
  var gettingAllFrames = browser.webNavigation.getAllFrames({
    tabId: tabs[0].id,
  });
  gettingAllFrames.then(logFrameInfo, onError);
}

browser.browserAction.onClicked.addListener(function () {
  var querying = browser.tabs.query({
    currentWindow: true,
    active: true,
  });

  querying.then(logAllFrames, onError);
});
```

{{WebExtExamples}}

> **Note :**
>
> Cette API est basée sur l'API Chromium [`chrome.webNavigation`](https://developer.chrome.com/extensions/webNavigation). Cette documentation est dérivée de [`web_navigation.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/web_navigation.json) dans le code de Chromium code.
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
