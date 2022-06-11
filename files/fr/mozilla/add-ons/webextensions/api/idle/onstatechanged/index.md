---
title: idle.onStateChanged
slug: Mozilla/Add-ons/WebExtensions/API/idle/onStateChanged
tags:
  - API
  - Add-ons
  - Event
  - Extensions
  - Idle
  - Inactif
  - Non-standard
  - Reference
  - WebExtensions
  - onStateChanged
translation_of: Mozilla/Add-ons/WebExtensions/API/idle/onStateChanged
---
{{AddonSidebar()}}

Lancé lorsque le système change passe à l'état actif, inactif ou vérouillé. L'écouteur d'événement reçoit une chaîne qui a l'une des trois valeurs suivantes :

- "vérouillé" si l'écran est vérouillé ou si l'économisateur d'écran s'active
- "inactif" si le système est vérouillé ou si l'économisateur n'a généré aucune entrée pendant un nombre de secondes spécifié. Ce nombre est défini par défaut sur 60, mais peut-être défini à l'aide de  {{WebExtAPIRef("idle.setDetectionInterval()")}}.
- "actif" quand l'utilisateur génère une entrée sur un système inactif.

## Syntaxe

```js
browser.idle.onStateChanged.addListener(listener)
browser.idle.onStateChanged.removeListener(listener)
browser.idle.onStateChanged.hasListener(listener)
```

Les événements ont trois fonctions :

- `addListener(callback)`
  - : Ajoute un écouteur à cet événement.
- `removeListener(listener)`
  - : Arrétez d'écouter cet événement. L'argument `listener` est l'écouteur à supprimer.
- `hasListener(listener)`
  - : Vérifiez si l' `écouteur` est enregistré pour cet événement. Retourne `true` s'il écoute, `false` sinon.

## Syntaxe addListener

### Paramètres

- `callback`

  - : Fonction qui sera appelée lorsque cet événement se produit. La fonction recevra les arguments suivants :

    - `newState`
      - : {{WebExtAPIRef('idle.IdleState')}}. Le nouvel état est inactif.

## Compatibilité du navigateur

{{Compat("webextensions.api.idle.onStateChanged")}}

## Exemples

```js
function newState(state) {
  console.log(`New state: ${state}`);
}

browser.idle.onStateChanged.addListener(newState);
```

{{WebExtExamples}}

> **Note :**
>
> Cette API est basée sur l'API Chromium [`chrome.idle`](https://developer.chrome.com/extensions/idle). Cette documentation est dérivée de [`idle.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/idle.json) dans le code Chromium.
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
