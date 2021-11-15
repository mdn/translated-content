---
title: runtime.onSuspend
slug: Mozilla/Add-ons/WebExtensions/API/runtime/onSuspend
tags:
  - API
  - Add-ons
  - Event
  - Extensions
  - Non-standard
  - Reference
  - WebExtensions
  - onSuspend
  - runtime
translation_of: Mozilla/Add-ons/WebExtensions/API/runtime/onSuspend
---
{{AddonSidebar()}}

Envoyé sur la page de l'événement juste avant son déchargement. Cela donne à l'extension l'opportunité de faire un peu de nettoyage. Notez que, comme la page est en cours de déchargement, les opérations asynchrones démarrées lors de la gestion de cet événement ne sont pas garanties.

> **Note :** Si quelque chose empêche le déchargement de la page d'événement, l'événement {{WebExtAPIRef("runtime.onSuspendCanceled")}} sera envoyé et la page ne sera pas déchargée.

## Syntaxe

```js
browser.runtime.onSuspend.addListener(listener)
browser.runtime.onSuspend.removeListener(listener)
browser.runtime.onSuspend.hasListener(listener)
```

Les événements ont trois fonctions :

- `addListener(callback)`
  - : Ajoute un écouteur à cet événement.
- `removeListener(listener)`
  - : Arrêtez d'écouter cet événement. L'argument `listener` est l'écouteur à supprimer.
- `hasListener(listener)`
  - : Vérifie si un `écouteur` est enregistré pour cet événement. Retourne `true` s'il est écouté, sinon `false`.

## Syntaxe addListener

### Paramètres

- `callback`
  - : Fonction dui sera appelée lorsque cet événement se produit

## Compatibilité du navigateur

{{Compat("webextensions.api.runtime.onSuspend")}}

## Exemples

Ecoutez les événements suspendus :

```js
function handleSuspend() {
  console.log("Suspending event page");
  // handle cleanup
}

browser.runtime.onSuspend.addListener(handleSuspend);
```

{{WebExtExamples}}

> **Note :**
>
> Cette API est basée sur l'API Chromium [`chrome.runtime`](https://developer.chrome.com/extensions/runtime#event-onConnect). Cette documentation est dérivée de [`runtime.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/runtime.json) dans le code de Chromium code.
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
