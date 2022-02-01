---
title: browserAction.getBadgeTextColor()
slug: Mozilla/Add-ons/WebExtensions/API/browserAction/getBadgeTextColor
translation_of: Mozilla/Add-ons/WebExtensions/API/browserAction/getBadgeTextColor
---
{{AddonSidebar()}}

Obtient la couleur du texte du badge de l'action du navigateur.

A partir de Firefox 63, à moins que la couleur du texte du badge ne soit explicitement définie à l'aide de {{WebExtAPIRef("browserAction.setBadgeTextColor()")}}, la couleur du texte du badge sera automatiquement définie en noir ou blanc afin d'optimiser le contraste avec la couleur de fond du badge spécifié. Par exemple, si vous définissez la couleur de fond du badge sur blanc, la couleur par défaut du texte du badge sera définie sur noir, et vice versa.

Les autres navigateurs utilisent toujours une couleur de texte blanche.

C'est une fonction asynchrone qui renvoie une [`Promise`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Promise).

## Syntaxe

```js
browser.browserAction.getBadgeTextColor(
  details // object
)
```

### Paramètres

- `details`

  - : `object`

    - `tabId`{{optional_inline}}
      - : `integer`. Spécifie l'onglet pour obtenir la couleur du texte du badge.
    - `windowId`{{optional_inline}}
      - : `integer`. Spécifie la fenêtre à partir de laquelle obtenir la couleur du texte du badge.

<!---->

- Si `windowId` et `tabId` sont tous deux fournis, la fonction échoue.
- SI `windowId` et `tabId` sont tous deux omis, la couleur globale du texte du badge est retournée.

### Valeur retournée

Une [`Promise`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Promise) qui sera remplie avec la couleur récupérée comme un {{WebExtAPIRef('browserAction.ColorArray')}}.

## Compatibilité du navigateur

{{Compat("webextensions.api.browserAction.getBadgeTextColor",2)}}

## Exemples

Enregistrer la couleur du texte du badge :

```js
function onGot(color) {
  console.log(color);
}

function onFailure(error) {
  console.log(error);
}

browser.browserAction.getBadgeTextColor({}).then(onGot, onFailure);
```

{{WebExtExamples}}

> **Note :**
>
> Cette API est basée sur l'API Chromium [`chrome.browserAction`](https://developer.chrome.com/extensions/browserAction). Cette documentation est dérivée de [`browser_action.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/browser_action.json) dans le code de Chromium code.

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
