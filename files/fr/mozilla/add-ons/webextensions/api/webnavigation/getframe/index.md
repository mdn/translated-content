---
title: webNavigation.getFrame()
slug: Mozilla/Add-ons/WebExtensions/API/webNavigation/getFrame
tags:
  - API
  - Add-ons
  - Extensions
  - Method
  - Non-standard
  - Reference
  - WebExtensions
  - getFrame
  - webNavigation
translation_of: Mozilla/Add-ons/WebExtensions/API/webNavigation/getFrame
---
{{AddonSidebar()}}

Récupère des informations sur un cadre particulier. Un cadre peut être l'image de niveau supérieur dans un onglet ou un [iframe](/fr/docs/Web/HTML/Element/iframe) imbriqué, et est identifié de manière unique par un ID de tabulation et un ID de cadre.

C'est une fonction asynchrone qui renvoie une [`Promise`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Promise).

## Syntaxe

```js
var gettingFrame = browser.webNavigation.getFrame(
  details                // object
)
```

### Paramètres

- `details`

  - : `object`. Informations sur le cadre pour récupérer des informations sur :

    - `tabId`
      - : `integer`. L'ID de l'onglet dans lequel se trouve le cadre.
    - `processId` {{optional_inline}}
      - : `integer`. L'ID du processus exécutant le moteur de rendu pour cet onglet.
    - `frameId`
      - : `integer`. L'ID du cadre dans l'onglet donné.

### Valeur retournée

Une [`Promise`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Promise) qui sera rempli avec un objet contenant les propriétés suivantes :

- `errorOccurred`
  - : `boolean`. Vrai si la dernière navigation dans cette trame a été interrompue par une erreur, c'est-à-dire l'événement {{WebExtAPIRef("webNavigation.onErrorOccurred", "onErrorOccurred")}} déclenché.
- `url`
  - : `string`. L'URL actuellement associée à cette trame, si la trame identifiée par  `frameId` existait à un point de l'onglet identifié par `tabId`. Le fait qu'une URL soit associée à un `frameId` donné n'implique pas que la trame correspondante existe toujours.
- `parentFrameId`
  - : `integer`. ID du parent de cette image. C'est -1 s'il n'y a pas de cadre parent: c'est-à-dire si ce cadre est le contexte de navigation de niveau supérieur dans l'onglet.

Si l'onglet ou l'ID de trame spécifié n'a pas pu être trouvé ou qu'une autre erreur se produit, la promesse sera rejetée avec un message d'erreur.

## Compatibilité du navigateur

{{Compat("webextensions.api.webNavigation.getFrame")}}

## Exemples

```js
function onGot(frameInfo) {
  console.log(frameInfo);
}

function onError(error) {
  console.log(`Error: ${error}`);
}

var gettingFrame = browser.webNavigation.getFrame({
  tabId: 19,
  frameId: 1537
});

// Edge specific - processId is required not optional, must be integer not null
//var gettingFrame = browser.webNavigation.getFrame({ tabId: 19, processId: 0, frameId: 1537 });

gettingFrame.then(onGot, onError);
```

{{WebExtExamples}}

> **Note :**
>
> Cette API est basée sur l'API Chromium [`chrome.webNavigation`](https://developer.chrome.com/extensions/webNavigation). Cette documentation est dérivée de [`web_navigation.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/web_navigation.json) dans le code de Chromium code.
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
