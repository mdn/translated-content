---
title: idle.queryState()
slug: Mozilla/Add-ons/WebExtensions/API/idle/queryState
tags:
  - API
  - Add-ons
  - Extensions
  - Idle
  - Inactif
  - Méthode
  - Non-standard
  - Reference
  - WebExtensions
  - queryState
translation_of: Mozilla/Add-ons/WebExtensions/API/idle/queryState
---
{{AddonSidebar()}}

Renvoie `"locked"` si le système est vérouillé, `"inactif"` si l'utilisation n'a généré aucune entrée pendant un nombre de secondes spécifié, ou `"actif"` dans le cas contraire.

Il s'agit d'une fonction asynchrone qui renvoie une [`Promise`](/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise).

## Syntaxe

```js
var querying = browser.idle.queryState(
  detectionIntervalInSeconds // integer
)
```

### Paramètres

- `detectionIntervalInSeconds`
  - : `integer`. Le système est considéré inactif si  `detectionIntervalInSeconds` secondes s'est écoulé depuis la dernière entrée utilisateur détectée.

### Valeur renvoyée

Une [`Promise`](/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise) qui sera remplie avec une chaîne {{WebExtAPIRef('idle.IdleState')}}, indiquant l'état actuel.

## Compatibilité du navigateur

{{Compat("webextensions.api.idle.queryState")}}

## Exemples

Dans cet extrait simple, nous appelons `queryState()` et vérifions si le `newState` est `inactif` ou `active`, en enregistrant un message selon le cas. Comme nous avons spécifié une valeur de  `detectionIntervalInSeconds` de 15, un état `inactif`  ne sera signalé que s'il n'y a pas eu d'activité de l'utilisateur depuis au moins 15 secondes

```js
function onGot(newState) {
  if (newState === 'idle') {
    console.log('Please come back — we miss you!');
  } else if (newState === 'active') {
    console.log('Glad to still have you with us!');
  }
}

var querying = browser.idle.queryState(15);
querying.then(onGot);
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
