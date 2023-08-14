---
title: clear()
slug: Mozilla/Add-ons/WebExtensions/API/types/BrowserSetting/clear
---

{{AddonSidebar}}

Utilisez `BrowserSetting.clear()` pour effacer toutes les modification apportées à l'extension du navigateur. Le paramètre du navigateur revient à sa valeur précédente.

L'extensions annulera également le contrôle du paramètre, permettant une extension avec une ancienne précédente (c'est à dire, une extensions qui a été installée avant celle-ci) à modifier la paramètre. Voir [`BrowserSetting.set()`](/fr/Add-ons/WebExtensions/API/privacy/BrowserSetting/set) pour en savoir plus sur le contrôle des paramètres.

Il s'agit d'une fonction asynchrone qui renvoie une [`Promise`](/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise). Si la compensation a échoué, la promesse renvoie une valeur à `false`. Si l'effacement de la valeur a réussi, il se résout à `true`.

## Syntaxe

```js
var clearing = setting.clear(
  details, // object
);
```

### Paramètres

- `details`
  - : Un objet vide

### Valeur retournée

Une [`Promise`](/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise) qui sera rempli avec un `booléen`: `true` Si le paramètre est effacé, `false` sinon.

## Compatibilité des navigateurs

Voir {{WebExtAPIRef("types.BrowserSetting")}}.

## Exemple

Effacer le paramètre `webRTCIPHandlingPolicy` :

```js
function onCleared(result) {
  if (result) {
    console.log("Setting was cleared");
  } else {
    console.log("Setting was not cleared");
  }
}

var clearing = browser.privacy.network.webRTCIPHandlingPolicy.clear({});
clearing.then(onCleared);
```

{{WebExtExamples}}

> **Note :**
>
> Cette API est basée sur l'API Chromium [`chrome.types`](https://developer.chrome.com/extensions/types).
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
