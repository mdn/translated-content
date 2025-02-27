---
title: onStateChanged
slug: Mozilla/Add-ons/WebExtensions/API/captivePortal/onStateChanged
---

{{AddonSidebar}}

S'allume lorsque l'état de portail captif change.

## Syntaxe

```js
browser.captivePortal.onStateChanged.addListener(callback);
browser.captivePortal.onStateChanged.removeListener(listener);
browser.captivePortal.onStateChanged.hasListener(listener);
```

Les événements ont trois fonctions :

- `addListener(callback)`
  - : Ajoute un auditeur à cet événement.
- `removeListener(listener)`
  - : Arrêtez d'écouter cet événement. L'argument de `listener` est l'auditeur à retirer.
- `hasListener(listener)`
  - : Vérifiez si `listener` est inscrit à cet événement. Renvoie `true` si c'est un auditeur, sinon `false`.

## Syntaxe addListener

### Paramétres

- `callback`

  - : Fonction qui est appelée lorsque cet événement se produit. La fonction se voit transmettre les arguments suivants :

    - `details`
      - : `string` L'État portail captif, étant l'un des `unknown`, `not_captive`, `unlocked_portal`, ou `locked_portal`.

## Exemples

Gérer un changement de statut de portail captif :

```js
function handlePortalStatus(portalstatusInfo) {
  console.log("The portal status is now: " + portalstatusInfo.details);
}

browser.captivePortal.onStateChanged.addListener(handlePortalStatus);
```

{{WebExtExamples}}

## Compatibilité des navigateurs

{{Compat}}

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
