---
title: tabs.onHighlighted
slug: Mozilla/Add-ons/WebExtensions/API/tabs/onHighlighted
---

{{AddonSidebar()}}

Lancé lorsque l'ensemble des onglets en surbrillance dans une fenêtre change

Notez qu'avant la version 63, Firefox n'avait pas le concept de mettre en évidence plusieurs onglets, donc cet événement n'était qu'un alias pour {{WebExtAPIRef("tabs.onActivated")}}.

## Syntaxe

```js
browser.tabs.onHighlighted.addListener(listener);
browser.tabs.onHighlighted.removeListener(listener);
browser.tabs.onHighlighted.hasListener(listener);
```

Les événements ont trois fonctions :

- `addListener(callback)`
  - : Ajoute un écouteur à cet événement.
- `removeListener(listener)`
  - : Arrêtez d'écouter cet événement. L'argument `listener` de l'écouteur est l'écouteur à supprimer.
- `hasListener(listener)`
  - : Vérifiez si `listener` est enregistré pour cet événement. Renvoie `true` s'il écoute, sinon `false`.

## Syntaxe addListener

### Paramètres

- `callback`

  - : Fonction qui sera appelée lorsque cet événement se produit. La fonction recevra les arguments suivants :

    - `highlightInfo`
      - : [`object`](#highlightInfo). ID(s) des onglets en surbrillance, et ID de leur fenêtre.

## Objets supplémentaires

### highlightInfo

- `windowId`
  - : `integer`. ID de la fenêtre dont les onglets ont changé.
- `tabIds`
  - : `array` d'`integer`. Identifiants des onglets en surbrillance dans la fenêtre

## Exemples

Ecoutez les événements en surbrillance et consignez les ID des onglets mis en surbrillance

```js
function handleHighlighted(highlightInfo) {
  console.log("Highlighted tabs: " + highlightInfo.tabIds);
}

browser.tabs.onHighlighted.addListener(handleHighlighted);
```

{{WebExtExamples}}

## Compatibilité des navigateurs

{{Compat}}

> **Note :**
>
> Cette API est basée sur l'API Chromium [`chrome.tabs`](https://developer.chrome.com/extensions/tabs#method-executeScript). Cette documentation est dérivée de [`tabs.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/tabs.json) dans le code de Chromium code.

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
