---
title: runtime.onStartup
slug: Mozilla/Add-ons/WebExtensions/API/runtime/onStartup
tags:
  - API
  - Add-ons
  - Event
  - Extensions
  - Non-standard
  - Reference
  - WebExtensions
  - onStartup
  - runtime
translation_of: Mozilla/Add-ons/WebExtensions/API/runtime/onStartup
---
{{AddonSidebar()}}

Lancé quand un profil ayant cette extension installée démarre une session. Cet événement n'est pas déclenché lorsqu'une navigation privée / profil privé est démarré, même si cette extension fonctionne en mode de navigation privée 'split'.

## Syntaxe

```js
browser.runtime.onStartup.addListener(listener)
browser.runtime.onStartup.removeListener(listener)
browser.runtime.onStartup.hasListener(listener)
```

### Fonctions des événements

Les événements ont trois fonctions :

- `addListener(callback)`
  - : Ajoute un écouteur à écouteur.
- `removeListener(listener)`
  - : Arrête d'écouter cet événement. L'argument `listener` est l'écouteur à supprimer.
- `hasListener(listener)`
  - : Vérifie si un `écouteur` est enregistré pour cet événement. Renvoie `true` s'il écoute, sinon `false`.

### Parameters

- `callback`
  - : Une fonction qui sera appelée lorsque cet événement se produit.

## Exemples

Ouvre <http://chilloutandwatchsomecatgifs.com/> quand le navigateur démarre :

```js
function handleStartup() {
  browser.tabs.create({
    url: "http://chilloutandwatchsomecatgifs.com/"
  });
}

browser.runtime.onStartup.addListener(handleStartup);
```

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

## Compatibilité du navigateur

{{Compat("webextensions.api.runtime.onStartup")}}
