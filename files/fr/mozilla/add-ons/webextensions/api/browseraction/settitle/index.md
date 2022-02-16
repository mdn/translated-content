---
title: browserAction.setTitle()
slug: Mozilla/Add-ons/WebExtensions/API/browserAction/setTitle
tags:
  - API
  - Add-ons
  - Extensions
  - Method
  - Non-standard
  - Reference
  - WebExtensions
  - browserAction
  - setTitle
translation_of: Mozilla/Add-ons/WebExtensions/API/browserAction/setTitle
---
{{AddonSidebar}}

Définit le titre de l'action du navigateur. Le titre est affiché dans une infobulle au-dessus de l'icône de l'action du navigateur. Vous pouvez passer un `tabId` dans ou une `windowId` comme paramètre optionnel — si vous le faites, le titre est changé seulement pour l'onglet donné ou la fenêtre donnée. Les onglets ou les fenêtres sans titre spécifique hériteront du texte du titre global, qui est par défaut à l'option [`default_title`](/fr/Add-ons/WebExtensions/manifest.json/browser_action) ou [`name`](/fr/Add-ons/WebExtensions/manifest.json/name) specifié dans le manifest.

## Syntaxe

```js
browser.browserAction.setTitle(
  details // object
)
```

### Paramètres

- `details`

  - : `object`. Le nouveau titre et éventuellement l'ID de l'onglet ou de la fenêtre à cibler.

    - `title`

      - : `string` ou `null`. La chaîne de caractères que l'action du navigateur doit afficher lorsqu'il y a une souris.

        Si `title` est une chaîne vide, le titre utilisé sera le nom de l'extension, mais {{WebExtAPIRef("browserAction.getTitle")}} fournira toujours la chaîne vide.

        Si `title` est `null`:

        - Si `tabId` est spécifié, et que l'onglet a un jeu de titres spécifiques aux onglets, alors l'onglet héritera du titre de la fenêtre à laquelle il appartient.
        - Si `windowId` est spécifié, et que la fenêtre a un titre spécifique à la fenêtre, alors la fenêtre héritera du titre global.
        - Sinon, le titre global sera réinitialisé au titre du manifest.

    - `tabId`{{Optional_Inline}}
      - : `integer`. Définit le titre uniquement pour l'onglet donné.
    - `windowId`{{Optional_Inline}}
      - : `integer`. Définit le titre de la fenêtre donnée.

<!---->

- Si `windowId` et `tabId` sont tous deux fournis, la fonction échoue et le titre n'est pas défini.
- Si `windowId` et `tabId` sont tous les deux omis, le titre global est défini.

## Compatibilité du navigateur

{{Compat("webextensions.api.browserAction.setTitle",10)}}

## Exemples

Ce code change le titre entre "ceci" et "ça" chaque fois  que l'utilisateur clique sur l'action du navigateur :

```js
function toggleTitle(title) {
  if (title == "this") {
    browser.browserAction.setTitle({title: "that"});
  } else {
    browser.browserAction.setTitle({title: "this"});
  }
}

browser.browserAction.onClicked.addListener(() => {
  var gettingTitle = browser.browserAction.getTitle({});
  gettingTitle.then(toggleTitle);
});
```

{{WebExtExamples}}

> **Note :**
>
> Cette API est basée sur l'API Chromium [`chrome.browserAction`](https://developer.chrome.com/extensions/browserAction). Cette documentation est dérivée de [`browser_action.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/browser_action.json) dans le code de Chromium code.
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
