---
title: idle.setDetectionInterval()
slug: Mozilla/Add-ons/WebExtensions/API/idle/setDetectionInterval
---

{{AddonSidebar()}}

Définit l'intervalle, en secondes, utilisé pour déterminer quand le système est dans un état inactif pour les événements {{WebExtAPIRef("idle.onStateChanged")}} . L'intervalle par défaut est de 60 secondes.

L'intervalle de détection est spécifique à l'extension qui appelle la méthode. La modification de l'intervalle dans une extension n'affecte pas l'intervalle de détection dans une autre extension.

## Syntaxe

```js
browser.idle.setDetectionInterval(
  intervalInSeconds, // integer
);
```

### Paramètres

- `intervalInSeconds`
  - : `integer`. Seuil, en secondes, utilisé pour déterminer quand le système est dans un état inactif. La valeur minimum que vous pouvez fournir ici est 15.

## Compatibilité des navigateurs

{{Compat}}

## Exemples

```js
browser.idle.setDetectionInterval(15);
```

{{WebExtExamples}}

> **Note :**
>
> Cette API est basée sur l'API Chromium [`chrome.idle`](https://developer.chrome.com/extensions/idle). Cette documentation est dérivée de [`idle.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/idle.json) dans le code Chromium.
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
