---
title: browserAction.onClicked
slug: Mozilla/Add-ons/WebExtensions/API/browserAction/onClicked
---

{{AddonSidebar()}}

Action quand l'icone d'action du navigateur est cliqué. Cet événement ne déclenchera pas si l'action du navigateur comporte une fenêtre contextuelle.

Pour définir une action de clic droit, utilisez l'API [`contextMenus`](/fr/Add-ons/WebExtensions/API/contextMenus) avec le [type de contexte](/fr/Add-ons/WebExtensions/API/contextMenus/ContextType) "browser_action".

## Syntaxe

```js
browser.browserAction.onClicked.addListener(listener);
browser.browserAction.onClicked.removeListener(listener);
browser.browserAction.onClicked.hasListener(listener);
```

Les événements ont trois fonctions :

- `addListener(listener)`
  - : Ajoutez un auditeur à cet événement.
- `removeListener(listener)`
  - : Arretez d'écouter cet événement. L'argument de l'auditeur est l'auditeur à supprimer.
- `hasListener(listener)`
  - : Vérifier si l'autditeur est enregistré pour cet événement. Renvoie `true` si elle est écouté, sinon `false`.

## Syntaxe addListener

### Paramètre

- `callback`

  - : Fonction de rappel qui sera appelée lorsque cet événement se produira. La fonction passera par l'argument suivant :

    - `tab`
      - : {{WebExtAPIRef('tabs.Tab')}}. L'onglet qui était actif lorsque l'icône a été cliquée .

## Compatibilité des navigateurs

{{Compat}}

## Exemples

Lorsque l'utilisateur clique sur l'icône, désactivez-la pour l'onglet actif et enregistrez l'URL de l'onglet

```js
browser.browserAction.onClicked.addListener((tab) => {
  // disable the active tab
  browser.browserAction.disable(tab.id);
  // requires the "tabs" or "activeTab" permission
  console.log(tab.url);
});
```

{{WebExtExamples}}

> **Note :**
>
> Cette API est basée sur l'API Chromium [`chrome.browserAction`](https://developer.chrome.com/extensions/browserAction). Cette documentation est dérivée de [`browser_action.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/browser_action.json) dans le code de Chromium code.
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
