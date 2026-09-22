---
title: runtime.onBrowserUpdateAvailable
slug: Mozilla/Add-ons/WebExtensions/API/runtime/onBrowserUpdateAvailable
l10n:
  sourceCommit: 32ba792708c61221f9ddf725c0a52dba573414bc
---

> [!WARNING]
> Cet évènement a été obsolète. Utilisez plutôt {{WebExtAPIRef("runtime.onRestartRequired")}}.

Déclenchée lorsqu'une mise à jour pour le navigateur est disponible, mais qu'elle n'est pas installée immédiatement, car un redémarrage du navigateur est requis.

## Syntaxe

```js-nolint
browser.runtime.onBrowserUpdateAvailable.addListener(listener)
browser.runtime.onBrowserUpdateAvailable.removeListener(listener)
browser.runtime.onBrowserUpdateAvailable.hasListener(listener)
```

Les évènements ont trois fonctions&nbsp;:

- `addListener(callback)`
  - : Ajoute un écouteur à cet évènement.
- `removeListener(listener)`
  - : Arrête d'écouter un évènement. L'argument `listener` est l'écouteur à supprimer.
- `hasListener(listener)`
  - : Vérifie si un `listener` est enregistré pour cet évènement. Retourne `true` s'il écoute, sinon `false`.

## Syntaxe de `addListener`

### Paramètres

- `function`
  - : La fonction appelée lorsque cet évènement se produit.

## Exemples

Écoutez cet évènement&nbsp;:

```js
function handleBrowserUpdateAvailable() {
  // gérer l'évènement
}

browser.runtime.onBrowserUpdateAvailable.addListener(
  handleBrowserUpdateAvailable,
);
```

{{WebExtExamples}}

## Compatibilité des navigateurs

{{Compat}}

> [!NOTE]
> Cette API est basée sur l'API Chromium [`chrome.runtime` <sup>(angl.)</sup>](https://developer.chrome.com/docs/extensions/reference/api/runtime#event-onConnect). Cette documentation est dérivée de [`runtime.json` <sup>(angl.)</sup>](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/runtime.json) dans le code de Chromium code.

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
