---
title: contextualIdentities.onUpdated
slug: Mozilla/Add-ons/WebExtensions/API/contextualIdentities/onUpdated
---

{{AddonSidebar()}}

Lancé lorsque les propriétés d'une identité contextuelle, telles que son nom, son icône ou sa couleur, sont modifiées. Les identités contextuelles peuvent être mises à jour par des extensions en utilisant l'API `contextualIdentities` , ou directement par l'utilisateur, en utilisant l'interface utilisateur du navigateur.

## Syntaxe

```js
browser.contextualIdentities.onUpdated.addListener(listener);
browser.contextualIdentities.onUpdated.removeListener(listener);
browser.contextualIdentities.onUpdated.hasListener(listener);
```

Events have three functions:

- `addListener(listener)`
  - : Ajoute un écouteur à cet événement.
- `removeListener(listener)`
  - : Arrêtez d'écouter cet événement. L'argument `listener` est l'écouteur à supprimer.
- `hasListener(listener)`
  - : Vérifiez si le `listener` est enregistré pour cet événement. Renvoie `true`s'il écoute, sinon `false`.

## Syntaxe addListener

### Paramètres

- `callback`

  - : Fonction qui sera appelée lorsque cet événement se produit. La fonction recevra les arguments suivants :

    - `changeInfo`
      - : `object`. Un objet qui contient une seule propriété, `contextualIdentity`, qui est un objet {{WebExtAPIRef("contextualIdentities.ContextualIdentity")}} représentant l'identité dont les propriétés ont été mises à jour.

## Compatibilité des navigateurs

{{Compat}}

## Exemples

```js
function handleUpdated(changeInfo) {
  console.log(`Updated: ${changeInfo.contextualIdentity.name}`);
}

browser.contextualIdentities.onUpdated.addListener(handleUpdated);
```

{{WebExtExamples}}

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
