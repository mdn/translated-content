---
title: runtime.onRestartRequired
slug: Mozilla/Add-ons/WebExtensions/API/runtime/onRestartRequired
---

{{AddonSidebar()}}

Lancé lorsqu'une application ou le périphérique sur lequel elle s'exécute doit être redémarré. L'application devrait fermer toutes ses fenêtres dans les meilleurs délais pour permettre le redémarrage. Si l'application ne fait rien, un redémarrage sera appliqué après une période de grâce de 24 heures. Actuellement, cet événement est uniquement déclenché pour les applications de kiosque Chrome OS.

## Syntaxe

```js
browser.runtime.onRestartRequired.addListener(listener);
browser.runtime.onRestartRequired.removeListener(listener);
browser.runtime.onRestartRequired.hasListener(listener);
```

Les événements ont trois fonctions :

- `addListener(callback)`
  - : Ajouter un écouteur à cet événement.
- `removeListener(listener)`
  - : Arrêtez d'écouter cet événement. L'argument `listener` est l'écouteur à supprimer.
- `hasListener(listener)`
  - : Vérifie si un `listener` est enregistré pour cet événement. Renvoie `true` s'il écoute, `false` sinon.

## Syntaxe addListener

### Paramètres

- `fonction`

  - : Une fonction de rappel qui sera appelée lorsque cet événement se produira. La fonction recevra les arguments suivants :

    - `raison`
      - : Une valeur {{WebExtAPIRef('runtime.OnRestartRequiredReason')}} — La raison pour laquelle l'événemtn est envoyé.

## Compatibilité des navigateurs

{{Compat}}

## Exemples

{{WebExtExamples}}

> **Note :**
>
> Cette API est basée sur l'API Chromium [`chrome.runtime`](https://developer.chrome.com/extensions/runtime#event-onConnect). Cette documentation est dérivée de [`runtime.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/runtime.json) dans le code de Chromium code.
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
