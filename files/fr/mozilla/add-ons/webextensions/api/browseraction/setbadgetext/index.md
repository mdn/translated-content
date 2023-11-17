---
title: browserAction.setBadgeText()
slug: Mozilla/Add-ons/WebExtensions/API/browserAction/setBadgeText
---

{{AddonSidebar()}}

Définit le texte du badge pour l'action du navigateur. Le badge est affiché en haut de l'icône.

Les onglets sans texte de badge spécifique hériteront du texte global du badge, qui est `""` par défaut.

## Syntaxe

```js
browser.browserAction.setBadgeText(
  details, // object
);
```

Cette API est également disponible sous `chrome.browserAction.setBadgeText()`.

### Paramètres

- `details`

  - : `object`

    - `text`

      - : `string` or `null`. N'importe quel nombre de caractères peut être passé, mais seulement quatre environ peuvent tenir dans l'espace.

        Utilisez une chaîne vide - `""` - si vous ne voulez pas de badge.

        Si un `tabId` est spécifié, `null` supprime le texte du badge spécifique à l'onglet afin que l'onglet hérite du texte global du badge. Dans le cas contraire, le texte du badge global devient `""`.

        Si un `windowId` est spécifié, `null` supprime le texte du badge spécifique à la fenêtre afin que l'onglet hérite du texte global du badge. Dans le cas contraire, le texte du badge global devient `""`.

    - `tabId`{{optional_inline}}
      - : `integer`. Définir le texte du badge uniquement pour l'onglet donné. Le texte est réinitialisé lorsque l'utilisateur navigue dans cet onglet vers une nouvelle page.
    - `windowId`{{optional_inline}}
      - : `integer`. Définir le texte du badge pour la fenêtre donnée.

<!---->

- si `windowId` et `tabId` sont tous les deux fournis, la fonction échoue.
- si `windowId` et `tabId` sont tous les deux omis, le badge global est défini.

## Exemples

Ajouter un badge indiquant combien de fois l'utilisateur a cliqué sur le bouton :

```js
var clicks = 0;

function increment() {
  browser.browserAction.setBadgeText({ text: (++clicks).toString() });
}

browser.browserAction.onClicked.addListener(increment);
```

## Compatibilité des navigateurs

{{Compat}}

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
