---
title: browserAction.setPopup()
slug: Mozilla/Add-ons/WebExtensions/API/browserAction/setPopup
---

{{AddonSidebar()}}

Définit le document HTML qui sera ouvert en tant que popup lorsque l'utilisateur clique sur l'icône de l'action du navigateur. Les onglets sans popup spécifique hériteront de la popup globale, qui par défaut est la [`default_popup`](/fr/Add-ons/WebExtensions/manifest.json/browser_action) spécifiée dans le manifest.

## Syntaxe

```js
browser.browserAction.setPopup(
  details, // object
);
```

### Paramètres

- `details`

  - : `object`.

    - `tabId`{{optional_inline}}
      - : `integer`. Définit la fenêtre contextuelle uniquement pour un onglet spécifique. La fenêtre contextuelle est réinitialisée lorsque l'utilisateur navigue dans cet onglet vers une nouvelle page.
    - `windowId`{{optional_inline}}
      - : `integer`. Définit le popup uniquement pour la fenêtre spécifiée.
    - `popup`

      - : `string` ou `null`. Le fichier HTML à afficher dans un popup, spécifié comme URL.

        Ceci peut pointer vers un fichier empaqueté dans l'extension (par exemple, créé à l'aide de {{WebExtAPIRef("extension.getURL")}}), ou un document distant (par exemple `https://example.org/`).

        Si une chaîne vide (`""`) est passée ici, le popup est désactivé, et l'extension recevra les événements {{WebExtAPIRef("browserAction.onClicked")}}.

        Si le `popup` est `null`:

        Si `tabId` est spécifié, supprime la fenêtre popup spécifique à l'onglet afin que l'onglet hérite de la fenêtre popup globale..

        Si `windowId` est spécifié, supprime le popup spécifique à la fenêtre afin que la fenêtre hérite du popup global.

        Sinon, la fenêtre contextuelle globale revient à la valeur par défaut.

<!---->

- Si `windowId` et `tabId` sont tous les deux fournis, la fonction échoue et le popup n'est pas défini.
- Si `windowId` et `tabId` sont tous les deux omis, la fenêtre contextuelle globale est définie.

## Exemples

Ce code ajoute une paire d'éléments de menu contextuel que vous pouvez utiliser pour basculer entre deux fenêtres contextuelles. Notez que vous aurez besoin de la [permission](/fr/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) "contextMenus" définie dans le manifest de l'extension pour créer des éléments du menu contextuel.

```js
function onCreated() {
  if (browser.runtime.lastError) {
    console.log("error creating item:" + browser.runtime.lastError);
  } else {
    console.log("item created successfully");
  }
}

browser.contextMenus.create(
  {
    id: "popup-1",
    type: "radio",
    title: "Popup 1",
    contexts: ["all"],
    checked: true,
  },
  onCreated,
);

browser.contextMenus.create(
  {
    id: "popup-2",
    type: "radio",
    title: "Popup 2",
    contexts: ["all"],
    checked: false,
  },
  onCreated,
);

browser.contextMenus.onClicked.addListener(function (info, tab) {
  if (info.menuItemId == "popup-1") {
    browser.browserAction.setPopup({ popup: "/popup/popup1.html" });
  } else if (info.menuItemId == "popup-2") {
    browser.browserAction.setPopup({ popup: "/popup/popup2.html" });
  }
});
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
