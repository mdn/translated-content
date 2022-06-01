---
title: windows.update()
slug: Mozilla/Add-ons/WebExtensions/API/windows/update
tags:
  - API
  - Add-ons
  - Extensions
  - Method
  - Non-standard
  - Reference
  - Update
  - WebExtensions
  - Windows
translation_of: Mozilla/Add-ons/WebExtensions/API/windows/update
---
{{AddonSidebar()}}

Mises à jour des propriétés d'une fenêtre. Utilisez ceci pour déplacer, redimensionner, et (un) se concentrer sur une fenêtre, etc.

Il s'agit d'une fonction asynchrone qui renvoie une [`Promise`](/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise).

## Syntaxe

```js
var updating = browser.windows.update(
  windowId,              // integer
  updateInfo             // object
)
```

### Paramètres

- `windowId`
  - : `integer`. ID de la fenêtre à mettre à jour.
- `updateInfo`

  - : `object`. Objet contenant les propriétés de mise à jour.

    - `drawAttention` {{optional_inline}}
      - : `boolean`. si cela est vrai, la fenêtre doit être affichée de manière à attirer l'attention de l'utilisateur sur la fenêtre, sans changer la fenêtre ciblée. L'effet dure jusqu'à ce que l'utilisateur change de focus sur la fenêtre. Cette option n'a aucun effet si la fenêtre a déjà un focus. Si cela est faux pour annuler la requête précéndete `drawAttention`.
    - `focused` {{optional_inline}}
      - : `boolean`. Si c'est vrai, apporte la fenêtre à l'avant. Si c'est faux, apporte la fenêtre suivante dans le z-order de l'avant.
    - `height` {{optional_inline}}
      - : `integer`. Hauteur pour redimensionner la fenêtre en pixels. Cette valeur est ignorée pour les panneaux.
    - `left` {{optional_inline}}
      - : `integer`. Le décalage du bord gauche de l'écran pour déplacer la fenêtre en pixels. Cette valeur est ignorée pour les panneaux.
    - `state`{{optional_inline}}
      - : {{WebExtAPIRef('windows.WindowState')}}. Le nouvel état de la fenêtre. Les états minimisés, maximisés et en plein écran ne peuvent pas être combinés avec gauche, haut, largeur ou hauteur.
    - `titlePreface` {{optional_inline}}
      - : `string`. Utilisez ceci pour ajouter une chaîne au début du titre de la fenêtre du navigateur. Selon le système d'exploitation sous-jacent, cela pourrait ne pas fonctionner sur les fenêtres du navigateur qui n'ont pas de titre (comme about:blank dans Firefox).
    - `top` {{optional_inline}}
      - : `integer`. Le décallage du bord supérieur de l'écran pour déplacer la fenêtre en pixels. Cette valeur est ignorée pour les panneaux.
    - `width` {{optional_inline}}
      - : `integer`. La largeur pour redimensionner la fenêtre en pixels. Cette valeur est ignorée pour les panneaux.

### Valeur de retour

Une [`Promise`](/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise) qui sera remplie avec un objet {{WebExtAPIRef('windows.Window')}}  contenant les détails de la fenêtre mise à jour. Si une erreur survient, la promesse sera rejetée avec un message d'erreur.

## Compatibilité du navigateur

{{Compat("webextensions.api.windows.update")}}

## Exemples

Lorsque l'utilisateur clique sur l'icône d'une action du navigateur, déplacez la fenêtre vers le coin supérieur gauche:

```js
function onUpdated(windowInfo) {
  console.log(`Updated window: ${windowInfo.id}`);
}

function onError(error) {
  console.log(`Error: ${error}`);
}

browser.browserAction.onClicked.addListener((tab) => {

  var updating = browser.windows.update(tab.windowId, {
    left: 0,
    top: 0
  });
  updating.then(onUpdated, onError);

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
