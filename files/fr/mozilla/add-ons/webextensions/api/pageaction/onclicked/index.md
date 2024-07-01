---
title: pageAction.onClicked
slug: Mozilla/Add-ons/WebExtensions/API/pageAction/onClicked
---

{{AddonSidebar}}

Lancé quand l'icône de la page action est cliquée. Cet événement ne se déclenchera pas si l'action de la page comporte une fenêtre contextuelle.

Pour définir une action de clic droit, utilisez l'API {{WebExtAPIRef('contextMenus')}} avec l'élément "page_action" {{WebExtAPIRef('contextMenus/ContextType', 'context type', '', 'nocode')}}.

## Syntaxe

```js
browser.pageAction.onClicked.addListener(listener);
browser.pageAction.onClicked.removeListener(listener);
browser.pageAction.onClicked.hasListener(listener);
```

Les événements ont trois fonctions :

- `addListener(callback)`
  - : Ajoute un écouteur à cet événement.
- `removeListener(listener)`
  - : Arrêtez l'écouter cet événement. L'argument `listener` est l'écouteur à supprimer.
- `hasListener(listener)`
  - : Vérifie si un `listener` est enregistré pour cet événement. Retourne `true` s'il écoute, `false` sinon.

## Syntaxe addListener

### Paramètres

- `callback`

  - : Une fonction qui sera appelée lorsque cet événement se produit. La fonction recevra les arguments suivants :

    - `tab`
      - : Un objet {{WebExtAPIRef('tabs.Tab')}} représentant l'onglet dont l'action de la page a été cliquée.

## Compatibilité des navigateurs

{{Compat}}

## Exemples

Lorsque l'utilisateur clique sur l'action de la page, masquez-là et naviguez dans l'onglet actif pour "<http://chilloutandwatchsomecatgifs.com/>" :

```js
var CATGIFS = "http://chilloutandwatchsomecatgifs.com/";

browser.pageAction.onClicked.addListener((tab) => {
  browser.pageAction.hide(tab.id);
  browser.tabs.update({ url: CATGIFS });
});

browser.pageAction.onClicked.addListener(function () {});
```

{{WebExtExamples}}

> **Note :**
>
> Cette API est basée sur l'API Chromium [`chrome.pageAction`](https://developer.chrome.com/extensions/pageAction). Cette documentation est dérivée de [`page_action.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/page_action.json) dans le code de Chromium code.
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
